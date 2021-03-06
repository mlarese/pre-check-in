import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import booking from '../fixtures/booking.json'
import clients from '../fixtures/clients.json'

const mock = new MockAdapter(axios, {delayResponse: 300})
const success = {success: true}

mock
  .onGet('/profile').reply(() => [200, user])
  .onGet('/principal').reply(() => [200, user])
  .onGet('/booking').reply(() => [200, booking])
  .onGet('/clients').reply(() => [200, clients])
  .onPut('/clients/0').reply(() => [200, 0])
  .onPut('/clients/10').reply(() => [200, 10])
  .onPut('/clients/20').reply(() => [200, 20])
  .onPost('/clients').reply(() => [200, clients])

  .onGet('/testerror500').reply(500)
  .onGet('/testerror403').reply(403)
  .onGet('/testtimeout').timeout()


export default 'mock'
