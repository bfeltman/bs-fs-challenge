import { BoxScoreTotal } from "./BoxScoreTotal";
import { PeriodsBox } from "./PeriodsBox";

interface BoxscoreProps {
  data: any;
  winner: 'away' | 'home' | null;
}

export function Boxscore(props: BoxscoreProps) {
  const data = props.data;

  return (
    <>
      <div className="flex">
        <div className="basis-1/10 px-4">
          <div className="h-6"></div>
          <div className="h-6 uppercase">{data.away_team.abbreviation}</div>
          <div className="h-6 uppercase">{data.home_team.abbreviation}</div>
        </div>
        <PeriodsBox data={data} />
        <BoxScoreTotal data={data} />
      </div>
    </>
  )
}