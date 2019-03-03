import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import booking from '../fixtures/clients.json'
import clients from '../fixtures/booking.json'

const mock = new MockAdapter(axios, {delayResponse: 300})
const success = {success: true}

mock
  .onGet('/profile').reply(() => [200, user])
  .onGet('/principal').reply(() => [200, user])
  .onGet('/booking').reply(() => [200, booking])
  .onGet('/clients').reply(() => [200, clients])

  .onGet('/testerror500').reply(500)
  .onGet('/testerror403').reply(403)
  .onGet('/testtimeout').timeout()


export default 'mock'
