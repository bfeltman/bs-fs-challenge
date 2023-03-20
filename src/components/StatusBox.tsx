
interface StatusBoxProps {
  event_information: {
    start_date_time: string;
    status: 'completed' | 'pre-game' | 'in-progress'
  }
}

export function StatusBox(props: StatusBoxProps) {
  if (props.event_information?.status === 'completed') {
    return (
      <>
        <div>Final</div>
      </>
    )
  }

  // Display the time in the game if possible from the data.
  if (props.event_information?.status === 'in-progress') {
    return (
      <>
        {/* <div>{game_time}</div> */}
      </>
    )
  }

  const formattedDate =
      new Date(props.event_information.start_date_time).toLocaleTimeString('en-US', { timeStyle: 'short' });
  const timeZone = new Date(props.event_information.start_date_time).toLocaleDateString('en-US', { timeZoneName: 'short'}).split(' ')[1];
  
  return (
    <>
      <div>{formattedDate} {timeZone}</div>
    </>
  )
}