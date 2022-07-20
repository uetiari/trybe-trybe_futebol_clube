import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import UsersModel from '../database/models/UsersModel';

chai.use(chaiHttp);
const { expect } = chai;

describe('01 - Verifica User-Login ', () => {
  before(async () => {
    sinon
      .stub(UsersModel, 'findOne')
      .resolves({ email: "admin@admin.com", password: "secret_admin" } as UsersModel);
  });

  after(() => {
    (UsersModel.findOne as sinon.SinonStub).restore();
  })

  it('Verifica rota /login/validate e retorno obj com Role', async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY1ODM1NDE1NiwiZXhwIjoxNjU4MzcyMTU2fQ.TVLuqPHNiF014mQRTb0tXSDR5Okcklc-FqlemZ3U7gA";

    const response = await chai
      .request(app).get('/login/validate')
      .set('Authorization', token);
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.eql({ role: 'admin' });
  });

  it('Verifica rota /login/validate e retorno com erro', async () => {
    
    const response = await chai
      .request(app).get('/login/validate');
    expect(response.status).to.be.equal(400);
    expect(response.body).to.be.equal({ message: 'Authorization required' });
  });
});


describe('02 - Verifica User-Login caso de erro', () => {
  it('Verifica rota /login e retorno de mensagem quando estiver algo faltando', async () => {
    const response = await chai
      .request(app).post('/login');
    expect(response.status).to.be.equal(400);
    expect(response.body).to.be.eql({ message: 'All fields must be filled' });
  });
});
