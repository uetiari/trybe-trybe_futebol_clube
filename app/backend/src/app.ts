import * as express from 'express';
import LoginRoute from './database/routes/loginRoute';
import TeamsRoute from './database/routes/teamsRoute';
import MatchesRoute from './database/routes/matchesRoute';
import LeaderboardRoute from './database/routes/leaderboardRoute';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();

    // Não remover essa rota
    this.app.get('/', (req, res) => res.json({ ok: true }));
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);

    this.app.use('/login', LoginRoute);
    this.app.use('/teams', TeamsRoute);
    this.app.use('/matches', MatchesRoute);
    this.app.use('/leaderboard', LeaderboardRoute);
    

  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();
