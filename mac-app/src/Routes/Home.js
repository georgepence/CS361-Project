import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import RvaMuseums from "../Components/RvaMuseums";
import Museum from "../Components/Museum";
import getMuseums from "../DataAccess/getMuseums";

function Home(props) {
  
  // ----------- Set State -----------------------------------------------------
  
  // Set environment & vew state
  const [ loadingStatus, setLoadingStatus ] = useState({ loading: false });

  // Set informational state
  const [ museums, setMuseums ] = useState([]);
  
  useEffect(() => {
    if (!props.show.museum) {
      props.setSelectedMuseumId('')
    }
  }, [ props ])
  
  // ----------- Get Museum information ----------------------------------------
  useEffect(() => {
    async function fetchMuseums() {
      await getMuseums(setLoadingStatus).then((result) => {setMuseums(result)});
    }
    fetchMuseums().catch(err => console.log("Fetching Museums: ", err))
  }, []);
  
  
  // ----------- Render page ---------------------------------------------------
  return (
      <>
        <Container id={"page-container"}>
        
          {/* Home page showing all museums, otherwise hidden */}
          {
            props.show.rvaMuseums ?
                <RvaMuseums museums={museums}
                            loadingStatus={loadingStatus}
                            visible={props.show.rvaMuseums}
                            setSelectedMuseumId={props.setSelectedMuseumId}
                            setLargePicture={props.setLargePicture}
                            setShow={props.setShow}
                />
                :
                ''
          }
        
          {/* Single museum page when a museum is selected, otherwise hidden */}
          {
            props.show.museum ?
                <Museum id={props.selectedMuseumId}
                        show={props.show}
                        setShow={props.setShow}
                        largePicture={props.largePicture}
                />
                :
                ''
          }
     
        </Container>
      </>
  )
}

export default Home;