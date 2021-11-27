import Exhibit from "./Exhibit";

const Exhibits = (props) => {

  return (
      <>
        {props.exhibits.map((exhibit) => (
          <Exhibit key={props.museumId + '-' + exhibit.id}
                   exhibit={exhibit.exhibition}
                   startDate={exhibit.startDate}
                   endDate={exhibit.endDate}
          />
        ))}
      </>
  )
}

export default Exhibits