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
      .stub(UsersModel, 'findAll')
      .resolves([{ }] as any);
  });

  after(() => {
    (UsersModel.findAll as sinon.SinonStub).restore();
  })

  it('Verifica rota /leaderboard/home e retorno obj com sucesso', async () => {
    
    const response = await chai
      .request(app).get('/leaderboard/home').send();
    expect(response.status).to.be.equal(200);
    
  });

  it('Verifica a rota /leaderboard/away ', async () => {    
    const response = await chai
      .request(app).get('/leaderboard/away').send();
    expect(response.status).to.be.equal(200);
  
  });
});
