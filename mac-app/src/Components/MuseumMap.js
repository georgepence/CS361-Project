import {useEffect, useState} from "react";
import LoadingSpinner from "./LoadingSpinner";

function MuseumMap(props) {

  const [ mapCode, setMapCode ] = useState({})
  const [ loadingStatus, setLoadingStatus ] = useState({
    loading: false
  });

  function getMap() {
    async function fetchMap() {
      setLoadingStatus({loading: true})
      const mapURL = "http://flip1.engr.oregonstate.edu:5676/map?"
      await fetch(mapURL + `city=${props.city}&state=${props.state}`)
          .then((response) => response.json())
          .then((data) => {
            console.log("Map Stuff: ", data, typeof data)
            setMapCode(data)
          })
          .catch((err) => {
            console.log("Error fetching Map", err);
          })
          .finally(() => setLoadingStatus({loading: false}))

    }
    fetchMap().then(() => console.log("Map fetch finished"));
  }

  useEffect(() => getMap(), []);

  return (
      <>
        <LoadingSpinner loading={loadingStatus.loading}/>

      </>
  )
}

export default MuseumMap;