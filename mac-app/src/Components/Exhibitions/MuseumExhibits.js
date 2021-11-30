import {Col, Row} from "react-bootstrap";
import { Link } from "react-router-dom";
import Exhibits from "./Exhibits";
import { useEffect, useState } from "react";
import GetExhibitions from "../../DataAccess/getExhibitions";
import LoadingSpinner from "../Helpers/LoadingSpinner";

function MuseumExhibits(props) {
  
  const [museums, setMuseums] = useState([]);
  const [allMuseums, setAllMuseums] = useState(true);
  const [loadingStatus, setLoadingStatus] = useState({
    loading: false
  });
  
  // ======== ---->   Get Exhibition Info      <---- ==========================
  useEffect( () =>{
    async function fetchExhibits(options) {
      setLoadingStatus({ loading: true });
      setAllMuseums(!options.id);
      await GetExhibitions(options).then((result) => {
        setMuseums(result);
      });
      setLoadingStatus({ loading:false })
    }
    if(!props.filterVisible) {
      fetchExhibits(props.options)
          .catch(err => console.log("Error fetching Exhibits: ", err))
    }
  }, [props]);

  // ----------- Render Exhibition Info --------------
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
              <Row key={museum.id} className={props.options.id ?
                  'museum-r museum-r1 g-4' :
                  'museum-exhibitions'
              }>
                <Col key={"c-" + museum.id} md={5}>
                  <div>
                    {allMuseums ?
                        <Link id={"mus-exh-link"}
                              className={"museum-exh-name"}
                              title={`Click to view information about the ${museum.name}`}
                              onClick={() => {
                                props.setSelectedMuseumId(museum.id)
                                props.setLargePicture(museum.largePicture)
                                props.setShow({
                                  rvaMuseums: false,
                                  museum: true,
                                  museumExhibits: false,
                                  exhibitions: false
                                })
                              }}
                              to={{pathname: `/Museum?id=${museum.id}`}}>
                    
                          {museum.name}
                  
                        </Link>
                  
                        :
                  
                        <p className={"museum-exh-name"}>{museum.name}</p>
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
