interface BatterData {
  last_name : string,
  first_name : string,
  display_name : string,
  position : string,
  bat_order : number,
  sub_bat_order : number,
  sacrifices : number,
  at_bats : number,
  plate_appearances : number,
  singles : number,
  doubles : number,
  triples : number,
  home_runs : number,
  sac_flies : number,
  sac_hits : number,
  stolen_bases : number,
  caught_stealing : number,
  rbi_with_two_outs : number,
  total_bases : number,
  runs : number,
  hits : number,
  rbi : number,
  walks : number,
  strike_outs : number,
  left_on_base : number,
  hit_by_pitch : number,
  team_abbreviation : string,
  ops : number,
  avg : number,
  obp : number,
  slg : number,
  at_bats_per_home_run : number,
  at_bats_per_rbi : number,
  walk_rate : number,
  plate_appearances_per_rbi : number,
  plate_appearances_per_home_run : number,
  extra_base_hits : number,
  stolen_base_average : number,
  strikeout_rate : number,
  ops_string : string,
  slg_string : string,
  obp_string : string,
  avg_string : string,
  batting_highlights : string
}


export function BatterCard(props: { data: Array<BatterData> }) {
  const topBatters = props.data.filter((batter: BatterData) => {
    if (batter.bat_order < 5) {
      return batter;
  }});
  const bestBattingAvg = Math.max(...topBatters.map(((batter: BatterData) => batter.avg)));
  let bestBatter = topBatters.find((batter: BatterData) => batter.avg === bestBattingAvg);

  // If the best batter is null or undefined, return the 3rd batter in the order since that
  // is typically one of the best hitters on the team that people would be interested in.
  if (bestBatter == null) {
    bestBatter = topBatters[2];
  }

  return (
    <>
      <div className="basis-1/4">
        <div className="text-xs text-center">{bestBatter.last_name}</div>
        <div className="text-xs text-center">{bestBatter.batting_highlights}</div>
      </div>
    </>
  )
}

