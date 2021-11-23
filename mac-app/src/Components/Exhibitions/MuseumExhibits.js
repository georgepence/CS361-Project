import {Col, Row} from "react-bootstrap";
import { Link } from "react-router-dom";
import Exhibits from "./Exhibits";
import { useEffect, useState } from "react";
import GetExhibitions from "../../DataAccess/getExhibitions";
import LoadingSpinner from "../Helpers/LoadingSpinner";

function MuseumExhibits(props) {
  
  const [museums, setMuseums] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState({
    loading: false
  });
  
  // ======== ---->   Get Exhibition Info      <---- ==========================
  useEffect( () =>{
    async function fetchExhibits(options) {
      setLoadingStatus({ loading: true });
      await GetExhibitions(options).then((result) => {
        console.log(result);
        setMuseums(result);
      });
      setLoadingStatus({ loading:false })
    }
    fetchExhibits(props.options)
        .catch(err => console.log("Error fetching Exhibits: ", err))
  }, [props]);
  
  return (
      <>
  
        { loadingStatus.loading ?
            <div>
              <LoadingSpinner key={"l"} loading={loadingStatus.loading}/>
            </div>
            :
          <div hidden={!props.visible}
              className={props.options ? '' : 'exhibitions-div'}>
    
          {museums.map((museum) => (
              <Row key={museum.id} className={props.options ?
                  'museum-r museum-r1 g-4' :
                  'museum-exhibitions'
              }>
                <Col key={"c-" + museum.id} md={5}>
                  <div>
                    {props.setSelectedMuseum ?
                        <Link id={"mus-exh-link"}
                              onClick={() => props.setSelectedMuseum(museum.id)}
                              to={{pathname: "/Museum_Old"}}>
                    
                          {museum.name}
                  
                        </Link>
                  
                        :
                  
                        <p>{museum.name}</p>
                    }
                  </div>
                </Col>
          
                <Col key={"c2-" + museum.id} md={7}>
                  <div>
              
                    <Exhibits exhibits={museum.exhibitions}
                              museumId={museum.id}
                              key={'m-' + museum.id}
                    />
            
                  </div>
                </Col>
              </Row>
          ))}
  
        </div>}
      </>
      
  )
  
}

export default MuseumExhibits;
