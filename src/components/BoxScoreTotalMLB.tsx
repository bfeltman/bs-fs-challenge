import { MLB_Data } from "@/interfaces";

interface BoxScoreTotalMLBProps {
  data: MLB_Data
}

/**
 * Returns the box score total for MLB.
 * 
 * @param props 
 * @returns 
 */
export function BoxScoreTotalMLB(props: BoxScoreTotalMLBProps) {
  return (
    <>
      <div className="basis-1/10 px-3">
        <div className="h-5 uppercase">R</div>
        <div className="h-5 w-3">{props.data.away_batter_totals.runs}</div>
        <div className="h-5">{props.data.home_batter_totals.runs}</div>
      </div>
      <div className="basis-1/10 px-3">
        <div className="h-5 uppercase">H</div>
        <div className="h-5">{props.data.away_batter_totals.hits}</div>
        <div className="h-5">{props.data.home_batter_totals.hits}</div>
      </div>
      <div className="basis-1/10 px-3">
        <div className="h-5 uppercase">E</div>
        <div className="h-5 align-middle">{props.data.away_errors}</div>
        <div className="h-5 align-middle">{props.data.home_errors}</div>
      </div>
    </>
  )
}