import { ReactElement } from "react";
import { PeriodBox } from "./PeriodBox";
import { League, MLB_Data, NBA_Data } from "../interfaces";

interface PeriodsBoxProps {
  data: MLB_Data | NBA_Data
}

export function PeriodsBox(props: PeriodsBoxProps) {
  const data = props.data;

  /**
   * Since the away team will always bat in the 9th inning we use their data
   * to create the box score structure.  For other sports we don't have to 
   * worry about this.
   */
  let elements = data.away_period_scores.map((period: Number, idx: number) => {
    return (
      <div key={idx} className="basis-1/10 px-3">
        <PeriodBox period={idx + 1} 
            awayScore={data.away_period_scores[idx]} 
            homeScore={data.home_period_scores[idx]} />
      </div>
    )
  });

  /**
   * For baseball we always want at least 9 innings and since we don't
   * know what the data will look like prior to, or during 
   * a game and we need to be sure we create 9 'inning' elements.
   * Otherwise return 4 for basketball.  We'd need to change this 
   * for hockey or soccer with has 3 & 2 respectively.
   */
  const requiredPeriods = data.league === League.MLB ? 9 : 4;
  if (elements.length < requiredPeriods) {
    for (let i = elements.length; i < requiredPeriods; i++) {
      elements.push(
        <div key={i} className="basis-1/10 px-3">
          <PeriodBox period={i + 1} />
        </div>
      )
    }
  }

  return (
    <>
      { elements }
    </>
  );
}
