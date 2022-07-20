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
      .resolves([
        { 
          "id": 1,
          "homeTeam": 16,
          "homeTeamGoals": 1,
          "awayTeam": 8,
          "awayTeamGoals": 1,
          "inProgress": false,
            "home_team": 16,
            "away_team": 8,
            "teamHome": {
              "id": 16,
              "teamName": "São Paulo"
            },
            "teamAway": {
              "id": 8,
              "teamName": "Grêmio"
            }
          }
      ] as any);
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

  it('Verifica se retorna um Array com objs dentro', async () => {

    const response = await chai
    .request(app).get('/matches');
    expect(response.body).to.deep.equal(
      [
        { 
          "id": 1,
          "homeTeam": 16,
          "homeTeamGoals": 1,
          "awayTeam": 8,
          "awayTeamGoals": 1,
          "inProgress": false,
            "home_team": 16,
            "away_team": 8,
            "teamHome": {
              "id": 16,
              "teamName": "São Paulo"
            },
            "teamAway": {
              "id": 8,
              "teamName": "Grêmio"
            }
          }
      ] 
    );
  })
});