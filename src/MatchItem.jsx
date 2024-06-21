import { useEffect, useState } from "react";
import { calculateTimeRemaining } from "./utils/calculateTimeRemaining";

const MatchItem = ({ match, incrementScore }) => {
  const [timeRemaining, setTimeRemaining] = useState(
    calculateTimeRemaining(match.startTime)
  );
  const handleHomeScoreClick = () => {
    if (match.status == "Live") {
      incrementScore(match.id, "home");
      playGoalAudio();
    }
  };
  const goalAudio = new Audio("/Goal.m4a");
  const handleAwayScoreClick = () => {
    if (match.status == "Live") {
      incrementScore(match.id, "away");
      playGoalAudio();
    }
  };

  const playGoalAudio = () => {
    goalAudio.play();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(match.startTime));
    }, 1000);

    return () => clearInterval(interval);
  }, [match.startTime, incrementScore]);

  return (
    <div className="scoreboard">
      <div className="match-info">
        <section>
          <img src={match.homeTeam} />
          <span>{match.homeTeamName}</span>
        </section>
        vs
        <section>
          <img src={match.awayTeam} />
          <span>{match.awayTeamName}</span>
        </section>
      </div>
      <p>Status: {match.status}</p>
      <p>
        Score:
        <span onClick={handleHomeScoreClick}>{match.homeScore}</span> -
        <span onClick={handleAwayScoreClick}>{match.awayScore}</span>
      </p>
      {match.status === "Upcoming" && (
        /*   <p>
          Starts in:{" "}
          {Math.max(0, Math.floor((match.startTime - Date.now()) / 1000))} secs
        </p> */
        <p className="countdown">
          Starts in:
          <span className="time">{timeRemaining.days} Day(s)</span>
          <span className="time">{timeRemaining.hours}H</span>
          <span className="time">{timeRemaining.minutes}M</span>
          <span className="time">{timeRemaining.seconds}S</span>
        </p>
      )}
    </div>
  );
};

export default MatchItem;
