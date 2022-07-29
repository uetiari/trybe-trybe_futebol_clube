import modelTeams from '../models/TeamsModel';
import modelMatches from '../models/MatchesModel';
import TeamMatchesResults from './matchesResults';

export default class LearderboardService {
  public static getHome = async () => {
    const teamsData = await this.getTeams();
    const matchesData = await this.getMatches();
    const homeGames: TeamMatchesResults[] = [];

    teamsData.forEach((team) => {
      const filterMatches = matchesData
      .filter(
        (filterMatch) => filterMatch.inProgress === false 
        && filterMatch.homeTeam === team.id,
      );
      const mapMatches = filterMatches.map((mappedMatch) => ({ goalsFavor: mappedMatch.homeTeamGoals,
        goalsOwn: mappedMatch.awayTeamGoals,
      }));

      const teamResults = new TeamMatchesResults(team.teamName, mapMatches);
      homeGames.push(teamResults);
      this.compareTeams(homeGames);
    });
    
    return { code: 200, leaderboard: homeGames };
  }

  private static getTeams = async () => {
    const allTeams = await modelTeams.findAll();
    return allTeams;
  }

  private static getMatches = async () => {
    const allMatches = await modelMatches.findAll();
    return allMatches;
  };

  private static compareTeams = (teamsData: TeamMatchesResults[]) => {
    teamsData.sort((a, b) => {
      if (a.totalPoints < b.totalPoints) return 1;
      if (a.totalPoints > b.totalPoints) return -1;
      if (a.goalsBalance < b.goalsBalance) return 1;
      if (a.goalsBalance > b.goalsBalance) return -1;
      if (a.goalsFavor < b.goalsFavor) return 1;
      if (a.goalsFavor > b.goalsFavor) return -1;
    
      return 0;
    });
  };

  public static getAway = async () => {
    const teamsAwayData = await this.getTeams();
    const matchesData = await this.getMatches();
    const awayGames: TeamMatchesResults[] = [];

    teamsAwayData.forEach((teamAway) => {
      const filterMatches = matchesData
        .filter(
          (filterMatch) => filterMatch.inProgress === false
          && filterMatch.awayTeam === teamAway.id,
        );
      const mapMatches = filterMatches.map((mapMatch) => ({ goalsOwn: mapMatch.homeTeamGoals,
          goalsFavor: mapMatch.awayTeamGoals,
        }));

      const teamResults = new TeamMatchesResults(teamAway.teamName, mapMatches);
      awayGames.push(teamResults);
      this.compareTeams(awayGames)
    });

    return { code: 200, leaderboard: awayGames };
  }


}