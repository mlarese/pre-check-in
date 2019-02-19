import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'

import {login, user, logout} from '../fixtures/auth'

const mock = new MockAdapter(axios, {delayResponse: 300})
const success = {success: true}

mock
  .onPost('/api/auth/login').reply(() => [200, login])
  .onPost('/api/auth/logout').reply(() => [200, logout])
  .onGet('/api/auth/user').reply(() => [200, user])
  .onGet('/profile').reply(() => [200, user])
  .onGet('/principal').reply(() => [200, user])


  // .onGet('/profile').reply(() => [200, {user: 'Quattordici', role: 'reporting_cp', logged: true}])

  .onGet('/logout').reply(() => [200, {user: null, role: 'admin', loggedIn: false}])
  .onGet('http://localhost:8080/monitor').reply(() => [200, {user: null, role: 'admin', loggedIn: true}])
  .onGet('/testerror500').reply(500)
  .onGet('/testerror403').reply(403)
  .onGet('/testtimeout').timeout()

let cpCounter = csp.cps.length
let operatorCounter = operator.operators.length
// let billingCounter = billing.billingids.length
let servicesCounter = services.services.length
// let servicePriceCounter = servicePrice.service_billingids.length

export default 'mock'
