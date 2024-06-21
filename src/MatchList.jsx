import MatchItem from "./MatchItem";

const MatchList = ({ matches, incrementScore }) => {
  return (
    <div className="score-container">
      {matches.map((match) => (
        <MatchItem
          key={match.id}
          match={match}
          incrementScore={incrementScore}
        />
      ))}
    </div>
  );
};

export default MatchList;
