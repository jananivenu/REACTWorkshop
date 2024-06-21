import { useState, useEffect } from "react";
import MatchList from "./MatchList";
import "./App.css";
import { teams } from "./utils/teamData";

const FootballApp = () => {
  const [matches, setMatches] = useState([
    {
      id: 1,
      homeTeam: "/icons8-germany-48.png",
      homeTeamName: "Germany",
      awayTeam: teams.teamSCT.logo,
      awayTeamName: teams.teamSCT.name,
      homeScore: 5,
      awayScore: 1,
      status: "Finished",
      startTime: "June 14 2024",
    },
    {
      id: 2,
      homeTeam: teams.teamHU.logo,
      homeTeamName: teams.teamHU.name,
      awayTeam: teams.teamCH.logo,
      awayTeamName: teams.teamCH.name,
      homeScore: 1,
      awayScore: 3,
      status: "Finished",
      startTime: "June 14 2024",
    },
    {
      id: 3,
      homeTeam: teams.teamDE.logo,
      homeTeamName: teams.teamDE.name,
      awayTeam: teams.teamHU.logo,
      awayTeamName: teams.teamHU.name,
      homeScore: 2,
      awayScore: 0,
      status: "Finished",
      startTime: "June 19 2024",
    },
    {
      id: 4,
      homeTeam: teams.teamSCT.logo,
      homeTeamName: teams.teamSCT.name,
      awayTeam: teams.teamCH.logo,
      awayTeamName: teams.teamCH.name,
      homeScore: 1,
      awayScore: 1,
      status: "Finished",
      startTime: "June 19 2024",
    },
    {
      id: 5,
      homeTeam: teams.teamCH.logo,
      homeTeamName: teams.teamCH.name,
      awayTeam: teams.teamDE.logo,
      awayTeamName: teams.teamDE.name,
      homeScore: 0,
      awayScore: 0,
      status: "Upcoming",
      startTime: new Date("2024-06-22T18:00:00").getTime(),
      //startTime: "June 22 2024",
    },
    {
      id: 6,
      homeTeam: teams.teamESP.logo,
      homeTeamName: teams.teamESP.name,
      awayTeam: teams.teamHR.logo,
      awayTeamName: teams.teamHR.name,
      homeScore: 3,
      awayScore: 0,
      status: "Finished",
      startTime: "June 15 2024",
    },
    {
      id: 7,
      homeTeam: teams.teamIT.logo,
      homeTeamName: teams.teamIT.name,
      awayTeam: teams.teamAL.logo,
      awayTeamName: teams.teamAL.name,
      homeScore: 2,
      awayScore: 1,
      status: "Finished",
      startTime: "June 15 2024",
    },
    {
      id: 8,
      homeTeam: teams.teamHR.logo,
      homeTeamName: teams.teamHR.name,
      awayTeam: teams.teamAL.logo,
      awayTeamName: teams.teamAL.name,
      homeScore: 2,
      awayScore: 2,
      status: "Finished",
      startTime: "June 19 2024",
    },
    {
      id: 9,
      homeTeam: teams.teamESP.logo,
      homeTeamName: teams.teamESP.name,
      awayTeam: teams.teamIT.logo,
      awayTeamName: teams.teamIT.name,
      homeScore: 1,
      awayScore: 0,
      status: "Finished",
      startTime: "June 20 2024",
    },
    {
      id: 10,
      homeTeam: teams.teamAL.logo,
      homeTeamName: teams.teamAL.name,
      awayTeam: teams.teamESP.logo,
      awayTeamName: teams.teamESP.name,
      homeScore: 0,
      awayScore: 0,
      status: "Upcoming",
      startTime: new Date("2024-06-23T18:00:00").getTime(),
      //startTime: "June 22 2024",
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMatches((matches) =>
        matches.map((match) => {
          if (Date.now() > match.startTime && match.status === "Upcoming") {
            return { ...match, status: "Live" };
          }
          return match;
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const incrementScore = (matchId, team) => {
    setMatches((matches) =>
      matches.map((match) => {
        if (match.id === matchId) {
          if (team === "home") {
            return { ...match, homeScore: match.homeScore + 1 };
          } else if (team === "away") {
            return { ...match, awayScore: match.awayScore + 1 };
          }
        }
        return match;
      })
    );
  };

  return (
    <div className="app-container">
      <header>
        <h1>FOOTBALL LIVE SCORE TRACKER</h1>
        <img src="./../public/euro_cup_3.png" alt="euro_2024" />
      </header>
      <MatchList matches={matches} incrementScore={incrementScore} />
    </div>
  );
};

export default FootballApp;
