import { Container, Row, Col, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import LoadingSpinner from "../Components/Helpers/LoadingSpinner";
import RvaMuseums from "../Components/RvaMuseums";
import Museum from "../Components/Museum";
import { Link } from 'react-router-dom';
import getMuseums from "../DataAccess/getMuseums";
import GetExhibitions from "../DataAccess/getExhibitions";

function Home(props) {
  
  // ----------- Set State -----------------------------------------------------
  
  // Set environment & vew states
  const [ loadingStatus, setLoadingStatus ] = useState({ loading: false });
  const [ show, setShow ] = useState({
    rvaMuseums: true,
    museum: false,
    museumExhibits: false,
    exhibitions: false
  })
  // Set informational states
  const [ museums, setMuseums ] = useState([]);
  const [ selectedMuseumId, setSelectedMuseumId ] = useState('');
  
  
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
          <RvaMuseums museums={museums}
                      loadingStatus={loadingStatus}
                      visible={show.rvaMuseums}
                      setSelectedMuseumId={setSelectedMuseumId}
                      setShow={setShow}
          />
  
           {/* Single museum page when a museum is selected, otherwise hidden */}
          {
            show.museum ?
                <Museum id={selectedMuseumId} show={show} setShow={setShow} />
                :
                ''
          }
  
          
          
          

        </Container>
      </>
  )
}

export default Home;