import { fetchMuseumQuery } from "./queries";

function getMuseumInfo(id) {
  
    return new Promise ((res, rej) => {
       fetch('/api/museum?query=' + fetchMuseumQuery(id))
          .then((response) => response.json())
          .then((data) => {
            res(data)
          })
          .catch((err) => rej(err) )
        }
        
    )
}

export default getMuseumInfo;