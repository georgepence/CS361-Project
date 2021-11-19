// import {fetchMuseumQuery} from "../../../DataAccess/queries";
//
// console.log(fetchMuseumQuery(2));

let chico = "428 N. Arthur Ashe Boulevard"

const street = chico.split(' ').join('+');

console.log(chico, street)