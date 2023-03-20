export function PitcherCard(props: any) {
  const startingPitcher = props.data[0]

  return (
    <>
      <div className="basis-1/4">
        <div className="text-xs text-center">{startingPitcher.last_name}</div>
        <div className="text-xs text-center">
          {startingPitcher.innings_pitched}IP&nbsp;
          {startingPitcher.strike_outs}K&apos;s&nbsp;
          {startingPitcher.hits_allowed}H&nbsp;
          {startingPitcher.earned_runs}R&nbsp;
          {startingPitcher.walks}BB&nbsp;
        </div>
      </div>
    </>
  )
}
