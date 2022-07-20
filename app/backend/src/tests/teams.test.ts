import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import TeamsModel from '../database/models/TeamsModel';

chai.use(chaiHttp);
const { expect } = chai;

describe('01 - Verifica se a rota Teams ', () => {
  before(async () => {
    sinon
      .stub(TeamsModel, 'findAll')
      .resolves(
        [ { "id": 1, "teamName": "Avaí/Kindermann" } ] as any);
  });

  after(() => {
    (TeamsModel.findAll as sinon.SinonStub).restore();
  })

  it('Verifica rota /teams com sucesso', async () => {
    
    const response = await chai
      .request(app).get('/teams');
      
    expect(response.status).to.be.equal(200);
    
  });

  it('Verifica se retorna um Array com objs dentro', async () => {

    const response = await chai
    .request(app).get('/teams');
    expect(response.body).to.deep.equal(
      [ { "id": 1, "teamName": "Avaí/Kindermann" } ]
    );
  })
});

describe('02 - Verifica rota Teams/id', () => {
  before(async () => {
    sinon
      .stub(TeamsModel, 'findByPk')
      .resolves(
        [ { "id": 1, "teamName": "Avaí/Kindermann" } ] as any);
  });

  after(() => {
    (TeamsModel.findByPk as sinon.SinonStub).restore();
  })

  it('se retorno com sucesso', async () => {
    const response = await chai.request(app).get('/teams/1');
    expect(response.status).to.be.equal(200);
  });

  it('se retorno com obj do id correspondente', async () => {
    const response = await chai.request(app).get('/teams/1');
    expect(response.body).to.deep.equal(
      [ { "id": 1, "teamName": "Avaí/Kindermann" } ]
    );
  });
})