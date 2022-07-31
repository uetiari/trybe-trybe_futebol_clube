import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import MatchesModel from '../database/models/MatchesModel';

chai.use(chaiHttp);
const { expect } = chai;

describe('01 - Verifica Matches caso de sucesso', () => {
  before(async () => {
    sinon
      .stub(MatchesModel, 'findAll')
      .resolves([{ }] as any);
  });

  after(() => {
    (MatchesModel.findAll as sinon.SinonStub).restore();
  })

  it('Verifica rota /matches e retorna com sucesso', async () => {

    const response = await chai
      .request(app).get('/matches')
      .set('teamHome', 'teamAway');
    expect(response.status).to.be.equal(200);
  
  });

  it('Deve retornar um status 200 quando buscado por id', async () => {
    const response = await chai.request(app).get('/teams/2')
        expect(response.status).to.be.equal(200)
  });
  
  });



describe('02 - Verifica criação de nova partida', () => {
  const matchMock = {
    id: 49,
    homeTeam: 16,
    awayTeam: 8,
    homeTeamGoals: 2,
    awayTeamGoals: 2,
    inProgress: true
    } as MatchesModel;

  before(() => {
    return sinon.stub(MatchesModel, 'create').resolves(matchMock)
  });
  after(() => {
    (MatchesModel.create as sinon.SinonStub).restore();
  });
  
    it('Testa se cria a partida com sucesso com token válido', async () => {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY1OTI5NzAzMSwiZXhwIjoxNjU5MzE1MDMxfQ.L6LVB7YxjXnBWvI-60yQ05xdSnAo7aVz51AqtAUP3tw"

    const response = await chai.request(app).post('/matches').set('Authorization', token).send(
      { 
        "id": 49,
        "homeTeam": 16,
        "awayTeam": 8,
        "homeTeamGoals": 2,
        "awayTeamGoals": 2,
      });

      expect(response.status).to.be.equal(201);
      expect(response.body).to.be.eql(matchMock);
    });
});