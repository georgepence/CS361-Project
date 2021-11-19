import {fetchExhibitsQuery} from "./queries";

const GetExhibitions = async (options) => {
  
  // const query = "select Museums.name as museum, Museums.museumId as id, " +
  //     " Exhibitions.exhibitName as exhibition, Exhibitions.exhibitId as " +
  //     "exhId from Museums left join Exhibitions on Museums.museumId = " +
  //     "Exhibitions.museumId order by museum;"
  
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
              id: data[i].exhId
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


// ----------- Get Exhibition information --------------

// function getExhibitions() {
//
// ;
//
//   async function getExhibits() {
//     setLoadingStatus({loading: true})
//     await fetch(url)
//         .then((res) => res.json())
//         .then((data) => {
//           // setExhibitions(data);        // TODO
//
//           // Organize the exhibitions by museum.
//           let rvaMuseums = [{
//             name: data[0].museum,
//             id: data[0].id,
//             exhibitions: []
//           }];
//           let index = 0;
//           for (let i = 0; i < data.length; i++) {
//             console.log("rva = ", rvaMuseums[index].name, "data = ", data[i].museum)
//             if (!(rvaMuseums[index].name === data[i].museum)) {
//               rvaMuseums.push({
//                 name: data[i].museum,
//                 id: data[i].id,
//                 exhibitions: []
//               });
//               index ++
//             }
//             rvaMuseums[index].exhibitions.push({
//               exhibition: data[i].exhibition,
//               id: data[i].id
//             })
//           }
//
//           setMuseums(rvaMuseums);
//         })
//         .catch((err) => {
//           console.error("Error in GetExhibitions = ", err)})
//         .finally(() => setLoadingStatus({loading: false}));
//   }
//   getExhibits().then(() => console.log("TestFetch Finished in Exhibitions"));
// }


