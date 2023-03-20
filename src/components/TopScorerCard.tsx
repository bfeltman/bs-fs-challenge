export function TopScorerCard(props: any) {
  const players = props.data;

  const mostPointsScored = Math.max(...players.map((player: any) => player.points));
  const topScorer = players.find((player: any) => player.points === mostPointsScored);

  return (
    <>
      <div className="basis-1/2">
        <div className="text-xs text-center">
          {topScorer.first_name[0]}.&nbsp;
          {topScorer.last_name}</div>
        <div className="text-xs text-center">
          {topScorer.points} Pts&nbsp;
          {topScorer.assists} Ast&nbsp;
          {topScorer.defensive_rebounds + topScorer.offensive_rebounds} Reb
        </div>
      </div>
    </>
  )
}
