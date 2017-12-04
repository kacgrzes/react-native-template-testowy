describe('Log in to the app', () => {
  // Elements
  let email, password, signIn, logo, eye, emailError, userCredentialError, chooseAccount

  beforeEach(async () => {
    email = element(by.id('Login:yourEmail'))
    password = element(by.id('Login:yourPassword'))
    signIn = element(by.id('Login:signIn'))
    logo = element(by.id('Login:logo'))
    eye = element(by.id('Login:eye'))
    emailError = element(by.text('Invalid email format'))
    userCredentialError = element(by.text('THE USER CREDENTIALS WERE INCORRECT.'))
    chooseAccount = element(by.id('ChooseAccount:title'))
  })

  it('login screen is displayed after launching the app', async () => {
    await expect(signIn).toExist()
  })

  it('login screen have option to provide login and password', async () => {
    await expect(signIn).toBeVisible()
    await expect(password).toBeVisible()
  })

  it('password can be either represented by * or displayed as a plain text', async () => {
    const passwordValue = 'DeSmart312'
    await password.tap()
    await password.typeText(passwordValue)
    await logo.tap()
    await expect(password).toExist()
    await eye.tap()
    await expect(password).toHaveText(passwordValue)
  })

  it('should login', async () => {
    // FIXME: move consts like email and password to separate file (eg. fixtures.js)
    const emailTest = 'desmart@example.com'
    const passwordTest = 'DeSmart312'
    await email.tap()
    await email.typeText(emailTest)
    await password.tap()
    await password.typeText(passwordTest)
    await logo.tap()
    await signIn.tap()
    await expect(chooseAccount).toBeVisible()
  })

  it('email validation', async () => {
    const starttOfEmail = 'desmart'
    const at = '@'
    const tillDot = 'example.'
    const endOfEmail = 'com'
    await email.tap()
    await email.typeText(starttOfEmail)
    await expect(emailError).toBeVisible()
    await email.typeText(at)
    await expect(emailError).toBeVisible()
    await email.typeText(tillDot)
    await expect(emailError).toBeVisible()
    await email.typeText(endOfEmail)
    await expect(emailError).toBeNotVisible()
  })

  it('proper credentials validation', async () => {
    const incorrectEmail = 'desmartt@example.com'
    const incorrectPassword = 'desmart'
    await email.tap()
    await email.typeText(incorrectEmail)
    await password.tap()
    await password.typeText(incorrectPassword)
    await logo.tap()
    await signIn.tap()
    await expect(userCredentialError).toBeVisible()
  })
})
