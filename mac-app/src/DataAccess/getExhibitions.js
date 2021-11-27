import {fetchExhibitsQuery} from "./queries";

const GetExhibitions = async (options) => {

  console.log("In getExhibitions, options = ", options)
  const url = `/api/exhibitions?query=${fetchExhibitsQuery(options)}`
  
  console.log("In GetExhibitions, url = ", url);    // todo
  
  return new Promise((res, rej) => {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
          
          // Organize the exhibitions by museum.
          let rvaMuseums = [{
            name: data[0].museum,
            id: data[0].id,
            exhibitions: []
          }];
          let index = 0;
          for (let i = 0; i < data.length; i++) {

            if (!(rvaMuseums[index].name === data[i].museum)) {
              rvaMuseums.push({
                name: data[i].museum,
                id: data[i].id,
                exhibitions: []
              });
              index++
            }
            rvaMuseums[index].exhibitions.push({
              exhibition: data[i].exhibition,
              id: data[i].exhId,
              startDate: data[i].startDate,
              endDate: data[i].endDate
            })
          }
          res(rvaMuseums)
        })
        .catch((err) => {
          console.error("Error in GetExhibitions = ", err);
          rej(err);
        })
  })
  
}

export default GetExhibitions;


