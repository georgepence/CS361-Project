import { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import Parser from 'html-react-parser'

function MuseumMap(props) {

  const [ mapCode, setMapCode ] = useState('')
  const [ loadingStatus, setLoadingStatus ] = useState({
    loading: false
  });

  function getMap() {
    async function fetchMap() {
      setLoadingStatus({loading: true})

      // http://flip1.engr.oregonstate.edu:5678/map?city=Richmond&state=VA
      const mapURL = "http://flip1.engr.oregonstate.edu:5678/map?"
      
      await fetch(mapURL + `city=${props.city}&state=${props.state}`)
          .then((response) => response.text())
          .then((data) => {
            setMapCode(data)
          })
          .catch((err) => {
            console.log("Error fetching Map", err);
          })
          .finally(() => {})

    }
    fetchMap().then(() => {setLoadingStatus({loading: false})});
  }

  useEffect(() => getMap(), []);

  return (
      <>
        <LoadingSpinner loading={loadingStatus.loading} id_name={"center-vertical"} />
        {/*<MapHtml mapCode={mapCode} />*/}
        { Parser(mapCode) }
      </>
  )
}

export default MuseumMap;