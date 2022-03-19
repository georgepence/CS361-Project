
function getMap(data) {
  
  return new Promise((res, rej) => {

        let error = false
        const mapURL = "http://flip1.engr.oregonstate.edu:5679/map?";
        let d = {};

        try {
          d.street = data.street.split(' ').join('+');
          d.city = data.city.split(' ').join('+');
          
        } catch {
          error = true
          rej('<p>Unable to fetch Map data (address parsing error)</p>')
        }
        
        if (!error) {
          fetch(mapURL + `city=${d.city}&state=${data.state}&streetAddr=${d.street}`)
              .then((response) => {
                if (response.status > 400) {
                  rej('Unable to fetch Map data (fetch error)')
                } else {
                  response.text().then(result => {
                    res(result)
                  })
                }
              })
              .catch((err) => {
                rej('Unable to fetch Map data (fetch error)')
              })
        }
      }
  )
}

export default getMap;