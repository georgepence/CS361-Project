import Exhibit from "./Exhibit";

const Exhibits = (props) => {
  
  return (
      <>
        {props.exhibits.map((exhibit) => (
          <Exhibit key={'e-' + exhibit.id}
                   exhibit={exhibit.exhibition}
          />
        ))}
      </>
  )
}

export default Exhibits