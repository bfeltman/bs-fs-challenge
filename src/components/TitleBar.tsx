import { StatusBox } from "./StatusBox";

export function TitleBar(props: any) {
  return (
    <>
      <div className="h-18 basis-2/5 text-center m-auto capitalize">
        {props.data.away_team.last_name}
      </div>
      <div className="h-18 basis-1/5 text-center m-auto">
        <StatusBox event_information={props.data.event_information} />
      </div>
      <div className="h-18 basis-2/5 text-center m-auto capitalize">
        {props.data.home_team.last_name}
      </div>
    </>
  )
}
