const GetExhibitions = async (museums, dates) => {
  
  const query = "select Museums.name as museum, Exhibitions.exhibitName " +
      "as exhibition from Museums left join Exhibitions on " +
      "Museums.museumId = Exhibitions.museumId"
  
  const url = `/api/exhibitions?query=${query}`;
  console.log("In GetExhibitions, url = ", url);
  
  await fetch(url)
      .then((res) => res.json())
      .then((data) => {return data})
      .catch((err) => {
        console.error("Error in GetExhibitions = ", err);
        return Promise.reject(err);
  })
}

export { GetExhibitions };

