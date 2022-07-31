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
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY1OTI5NjA5OCwiZXhwIjoxNjU5MzE0MDk4fQ.k3IRhjuc8ulzX4tPkvErkJq4oBvD9B14udCiEWCdc2c";

    const response = await chai
      .request(app).get('/login/validate')
      .set('Authorization', token);
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.eql({ role: 'admin' });
  });

  it('Verifica rota /login/validate e retorno com erro', async () => {
    
    const response = await chai
      .request(app).get('/login/validate')
      .set('Authorization', '');
    expect(response.status).to.be.equal(401);
    expect(response.body).to.be.eql({ message: 'Authorization required' });
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
