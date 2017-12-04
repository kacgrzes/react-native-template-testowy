import t from 'tcomb-form-native'
import types from './types'
import { countries } from 'locales'

const { Email, Password, Positive } = types

const Auth = t.struct({
  username: Email,
  password: Password
})

const Client = t.struct({
  firstName: t.String,
  lastName: t.String,
  email: Email,
  phone: t.maybe(t.String)
})

const Country = t.maybe(t.enums({
  ...countries
}))

const Address = t.struct({
  firstName: t.maybe(t.String),
  lastName: t.maybe(t.String),
  address1: t.maybe(t.String),
  address2: t.maybe(t.String),
  city: t.maybe(t.String),
  zip: t.maybe(t.String),
  phone: t.maybe(t.String),
  countryCode: Country
})

const Marketing = t.struct({
  acceptsMarketing: t.Boolean
})

const Note = t.struct({
  note: t.maybe(t.String)
})

const BasicProduct = t.struct({
  title: t.String
})

const InventoryDetails = t.struct({
  sku: t.String,
  barcode: t.maybe(t.String),
  inventoryQuantity: Positive
})

// FIXME: Should be part of `Address` struct, but library has problems with generating labels
const IsBillingAddressDifferent = t.struct({
  isDifferent: t.Boolean
})

const CustomTimeRange = t.struct({
  fromDate: t.Date,
  toDate: t.Date
})

export default {
  Auth,
  Client,
  Address,
  Marketing,
  Note,
  BasicProduct,
  InventoryDetails,
  IsBillingAddressDifferent,
  CustomTimeRange
}
