import { ReactElement } from "react";

interface PeriodBoxProps {
  period: number;
  awayScore?: number;
  homeScore?: number;
}

export function PeriodBox(props: PeriodBoxProps): ReactElement {
  return (
    <>
      <div className="h-6">{props.period}</div>
      <div className="h-6">{props.awayScore}</div>
      <div className="h-6">{props.homeScore}</div>
    </>
  )
}