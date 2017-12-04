import i18n from 'i18n'

const dashboard = {
  label: i18n.t('Dashboard:title'),
  screen: 'App.Tab1',
  title: i18n.t('Dashboard:title'),
  icon: require('assets/images/icon-dashboard.png')
}

const orders = {
  label: i18n.t('Order:title'),
  screen: 'App.Tab2',
  title: i18n.t('Order:title'),
  icon: require('assets/images/icon-orders.png')
}

const tabs = [ dashboard, orders ]

export default tabs
