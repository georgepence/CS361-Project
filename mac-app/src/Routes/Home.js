import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import RvaMuseums from "../Components/RvaMuseums";
import Museum from "../Components/Museum";
import getMuseums from "../DataAccess/getMuseums";

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
  const [ largePicture, setLargePicture ] = useState('');
  
  
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
            show.rvaMuseums ?
            <RvaMuseums museums={museums}
                       loadingStatus={loadingStatus}
                       visible={show.rvaMuseums}
                       setSelectedMuseumId={setSelectedMuseumId}
                        setLargePicture={setLargePicture}
                       setShow={setShow}
          />
                :
                ''
          }
  
           {/* Single museum page when a museum is selected, otherwise hidden */}
          {
            show.museum ?
                <Museum id={selectedMuseumId}
                        show={show}
                        setShow={setShow}
                        largePicture={largePicture}/>
                :
                ''
          }
  
          
          
          

        </Container>
      </>
  )
}

export default Home;