
import { BoxScoreTotalMLB } from "./BoxScoreTotalMLB";
import { League, MLB_Data, NBA_Data } from "../interfaces";

interface BoxScoreTotalProps {
  data: MLB_Data | NBA_Data
}

/**
 * Render a box score total relative to the league.
 * 
 * @param props 
 * @returns 
 */
export function BoxScoreTotal(props: BoxScoreTotalProps) {
  const data = props.data;

  // Box score total for MLB.
  if (data.league === League.MLB) {
    return (
      <BoxScoreTotalMLB data={props.data as MLB_Data} />
    )
  }

  // Box score total for NBA & NFL.
  return (
    <>
      <div className="basis-1/10 px-4">
        <div className="h-6 uppercase">T</div>
        <div className="h-6">{data.away_totals.points}</div>
        <div className="h-6">{data.home_totals.points}</div>
      </div>
    </>
  )
}
