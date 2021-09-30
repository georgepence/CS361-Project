import { useEffect } from "react";

function Chicodog() {
  
  async function Chico() {
    fetch("/chico")
        .then( (response) => {
          if (!response.ok) {
            throw new Error('In Chicodog, new error')
          }
        })
        .then((response) => console.log("The response = ", response.json()))
        .catch(err => console.log("There has been a problem with your fetch", err))
        .finally(() => console.log("Finally Found him!"))
  }
  
  useEffect(() => Chico(), [])
  
  return (
      <div>
        <p>Chico!!!!!!!</p>
      </div>
  )
}

export default Chicodog;