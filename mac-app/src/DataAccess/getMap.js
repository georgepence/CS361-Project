// props => { museum: {}, setMapLoadingStatus }

function getMap(museum, setMapLoadingStatus) {
  
  return new Promise((res, rej) => {
        
        setMapLoadingStatus({loading: true})
        let error = false
        const mapURL = "http://flip1.engr.oregonstate.edu:5679/map?";
        
        try {
          const street = museum.street.split(' ').join('+');
          const city = museum.city.split(' ').join('+');
          
        } catch {
          error = true
          res('<p>Unable to fetch Map data</p>')
        }
        
        if (!error) {
          fetch(mapURL + `city=${city}&state=${museum.state}&streetAddr=${street}`)
              .then((response) => response.text())
              .then((data) => {
                res(data)
              })
              .catch((err) => {
                console.log("Error in getMap:", err)
                res('<p>Unable to fetch Map data</p>')
              })
        }
        
      }
  )
}

export default getMap;