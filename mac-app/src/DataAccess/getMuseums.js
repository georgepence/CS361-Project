function getMuseums(setLoadingStatus) {
  
  return new Promise ((res, rej) => {
    setLoadingStatus({ loading: true });
    
    fetch("/api/museums")
        .then((response) => response.json())
        .then(data => res(data))
        .catch((err) => {
          console.log("Error fetching Museums", err);
        }).finally(() => setLoadingStatus({ loading: false }))
  })
  
}

export default getMuseums;