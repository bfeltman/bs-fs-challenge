import { BatterCard } from "./BatterCard";
import { PitcherCard } from "./PitcherCard";
import { TopScorerCard } from "./TopScorerCard";
import { League, MLB_Data, NBA_Data } from "../interfaces";

interface GameSummaryProps {
  data: MLB_Data | NBA_Data
}

export function GameSummary(props: any) {
  const data = props.data;

  if (data.league === League.MLB) {
    return(
      <>
        <BatterCard data={data.away_batters}  />
        <PitcherCard data={data.away_pitchers} />
        <BatterCard data={data.home_batters} />
        <PitcherCard data={data.home_pitchers} />
      </>
    )
  }

  return (
    <>
      <TopScorerCard data={data.away_stats} />
      <TopScorerCard data={data.home_stats} />
    </>
  )
}