import t from 'tcomb-form-native'
import i18n from 'i18n'

const Integer = t.refinement(t.Number, n => n % 1 === 0, 'Integer')

const Positive = t.refinement(Integer, n => n >= 0)

const Email = t.refinement(t.String, text => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(text))

Email.getValidationErrorMessage = value => {
  if (!value) {
    return i18n.t('Common:requiredField')
  }

  if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)) {
    return i18n.t('Login:wrongEmail')
  }
}

const Password = t.refinement(t.String, text => text.length > 0)

Password.getValidationErrorMessage = value => {
  if (!value) {
    return i18n.t('Login:wrongPassword')
  }
}

t.String.getValidationErrorMessage = value => {
  if (!value) {
    return i18n.t('Common:requiredField')
  }
}

export default {
  Email,
  Password,
  Integer,
  Positive
}
