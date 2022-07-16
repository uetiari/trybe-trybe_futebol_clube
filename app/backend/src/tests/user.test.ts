import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import UsersModel from '../database/models/UsersModel';

chai.use(chaiHttp);
const { expect } = chai;

describe('01 - Verifica User-Login caso de sucesso', () => {
  before(async () => {
    sinon
      .stub(UsersModel, 'findOne')
      .resolves({ email: "admin@admin.com", password: "secret_admin" } as UsersModel);
  });

  after(() => {
    (UsersModel.findOne as sinon.SinonStub).restore();
  })

  it('Verifica rota /login/validate e retorno obj com Role', async () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY1Nzk5OTIxNSwiZXhwIjoxNjU4MDE3MjE1fQ.3NRvpN-z39_edjXHJf83xHUYA8b3u8RpChWJIcjME7U';

    const response = await chai
      .request(app).get('/login/validate')
      .set('Authorization', token);
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.eql({ role: 'admin' });
  });
});

describe('01 - Verifica User-Login caso de erro', () => {
  it('Verifica rota /login e retorno de mensagem quando estiver algo faltando', async () => {
    const response = await chai
      .request(app).post('/login');
    expect(response.status).to.be.equal(400);
    expect(response.body).to.be.eql({ message: 'All fields must be filled' });
  });
});
