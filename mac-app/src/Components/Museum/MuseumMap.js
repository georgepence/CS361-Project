import { useEffect, useState } from "react";
import LoadingSpinner from "../Helpers/LoadingSpinner";
import Parser from 'html-react-parser'
import { fetchAddrQuery } from "../../DataAccess/queries";

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
      let status = { error: false };
      let fetchMapURL = "http://flip1.engr.oregonstate.edu:5679/map?";
      
      // Fetch museum name, street, city, state, zip
      let result = await fetch(`/api/exhibitions?query=${fetchAddrQuery(id)}`)
          .then(result => result.json());

      let address = result[0];
      setMuseumInfo(result[0]);
      
      let m = {}
      try{
        m.street = address.street.split(' ').join('+');
        m.city = address.city.split(' ').join('+');
        
      } catch {
        console.log("MuseumMap error parsing address: id=", id, " addr=", address);
        setMapError('Unable to fetch Map');
        status.error = true;
      }
      console.log("A D D R E S S =", address, address.state)
      // GET request to teammate's micro service
      fetchMapURL += `city=${m.city}&state=${address.state}&streetAddr=${m.street}`
      
      if (!status.error) {
        await fetch(fetchMapURL)
            .then((response) => response.text())
            .then((data) => {
              setMapCode(data)
            })
            .catch((err) => {
              console.log("In MuseumMap- error fetching Map", err);
              setMapError('Unable to fetch Map');
            })
            .finally(() => {})
      }
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