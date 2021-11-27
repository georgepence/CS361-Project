

const fetchMuseumQuery = function getMuseumInfo(id) {
  return `select * from Museums where Museums.museumId=${id}`
}

const fetchExhibitsQuery = function getExhibitions(options) {
  let whereClause
  console.log("In queries.js, options = ", options || "No Options", (!options.id && !options.date))
  
  if (!options.id && !options.date) {
    whereClause = '';
  } else {
    whereClause = 'where '
    if (options.date) {
      whereClause += `('${options.date}' between startDate and endDate or endDate is null)`
      if (options.id) whereClause += ' and '
    }
    if (options.id) whereClause += `Museums.museumId=${options.id}`;
  }
  
  return "select Museums.name as museum, Museums.museumId as id, " +
      "Exhibitions.startDate as startDate, Exhibitions.endDate as endDate, " +
      " Exhibitions.exhibitName as exhibition, Exhibitions.exhibitId as " +
      "exhId from Museums left join Exhibitions on Museums.museumId = " +
      `Exhibitions.museumId ${whereClause} order by museum;`
}

const fetchAddrQuery = function getAddress(id) {
  return `select Museums.street as street, Museums.city as city, ` +
      `Museums.state as state, ` +
      `Museums.zipCode as zipCode, Museums.name as name from Museums ` +
      `where Museums.museumId=${id};`
}

export { fetchMuseumQuery, fetchExhibitsQuery, fetchAddrQuery } ;