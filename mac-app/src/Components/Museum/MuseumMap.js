import { useEffect, useState } from "react";
import LoadingSpinner from "../Helpers/LoadingSpinner";
import Parser from 'html-react-parser'
import { fetchAddrQuery } from "../../DataAccess/queries";
import getMap from "../../DataAccess/getMap";

function MuseumMap(props) {
  
  // set State  ---------------------------------------------------------------
  const [ mapCode, setMapCode ] = useState('');
  const [ museumInfo, setMuseumInfo ] = useState({
    name: '',
    street: '',
    city: '',
    state: '',
    zipCode:  ''
  });
  const [ loadingStatus, setLoadingStatus ] = useState({ loading: false });
  const [ mapError, setMapError ] = useState('');
  
  
  // fetch Map from Map Service  ----------------------------------------------
  useEffect( () => {
    async function fetchMap(id) {
      setLoadingStatus({loading: true})
      
      // Fetch museum name, street, city, state, zip
      let result = await fetch(`/api/exhibitions?query=${fetchAddrQuery(id)}`)
          .then(result => result.json());
      
      setMuseumInfo(result[0]);

      await getMap(result[0])
          .then((data) => {
            setMapCode(data)
          })
          .catch((err) => {
            setMapError(err);
          })
    }
    fetchMap(props.id)
        .finally(() => setLoadingStatus({ loading: false }))
    }
  , [props.id]);
  
  // Render component  -------------------------------------------------------
  return (
      <>

        <div id={"map-museum-header"}>
          <h4>
            {museumInfo.name}
          </h4>
          <p id={"map-museum-address"}>
            {museumInfo.street} {museumInfo.city} {museumInfo.state} {museumInfo.zipCode}
          </p>
        </div>
          {loadingStatus.loading ?
              <LoadingSpinner loading={loadingStatus.loading}
                              className={"map-center-vertical"} />
              :
              mapError ?
                  

                    <p id={"map-error"} className={"align-content-center"}>{mapError}</p>

                  :
                   Parser(mapCode)
          }
      </>
  )
}

export default MuseumMap;