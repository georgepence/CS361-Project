import { useEffect } from "react";
// const fs = require('fs');
// const https = require('https');

function Chicodog() {

  
  // async function Chico() {
  //   fetch("/chico")
  //       .then( (response) => {
  //         if (!response.ok) {
  //           throw new Error('In Chicodog, new error')
  //         }
  //       })
  //       .then((response) => console.log("The response = ", response.json()))
  //       .catch(err => console.log("There has been a problem with your fetch", err))
  //       .finally(() => console.log("Finally Found him!"))
  // }
  
  // useEffect(() => Chico(), [])
  
  function DogBreath() {
    async function testFetch() {
      await fetch("http://flip3.engr.oregonstate.edu:17775")
          .then((response) => response.json())
          .then((data) => console.log("Millie!!", data))
          .catch((err) => console.log("Chico messed up", err))
          .finally(() => console.log("finally!"))
  
      // await fetch("http://flip3.engr.oregonstate.edu:17775")
      //     .then((response) => {
      //       response.json()
      //           .then((data) => console.log("Data here", data))
      //           .finally(() => console.log("Did it work??"))
      //     }, (err) => {
      //       console.log("Error!", err)
      //       console.log("Did it work??")
      //     })
      
    }
    testFetch().then(() => console.log("TestFetch Finished"));
  }
  
  useEffect(() => DogBreath(), []);
  
  return (
      <div>
        <p>Chico!!!!!!!</p>
        <img src={"https://web.engr.oregonstate.edu/~penceg/roscoe-memorial/images/cave.jpeg"} alt={"hi"}/>
      </div>
  )
}

export default Chicodog;