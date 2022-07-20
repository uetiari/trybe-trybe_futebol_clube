import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import UsersModel from '../database/models/UsersModel';

chai.use(chaiHttp);
const { expect } = chai;

describe('Leaderboard ', () => {
  before(async () => {
    sinon
      .stub(UsersModel, 'findOne')
      .resolves({ email: "admin@admin.com", password: "secret_admin" } as UsersModel);
  });

  after(() => {
    (UsersModel.findOne as sinon.SinonStub).restore();
  })

  it('Verifica rota /login/validate e retorno obj com Role', async () => {
    
    const response = await chai
      .request(app).get('/leaderboard');
    expect(response.status).to.be.equal(200);
  });

});
