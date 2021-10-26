import { Container } from "react-bootstrap";

// Credits

function Credits() {
  
  // render page
  return (
      <div>
        
        <Container>
          <div style={{height: "50px"}}>
            <p> </p>
          </div>
          
          <h2 className={"mt-5 mb-4"}  style={{color: "midnightblue"}}>
            Website Design Credits
          </h2>
          
          <p>
            Richmond Museums was created by <span className={"loud"}>George "Mac" Pence</span> as a
            portfolio project for the class "Software Engineering" at
            Oregon State University during Fall 2021.
          </p>
          
          <p>
            Mac and four other students worked together during the term as
            the <span className={"loud"}>Dauntless Designs</span> team. Each
            student produced their own application, but consulted with each other,
            as well as providing microservices for use by the teams websites.
            The other students
            on the team were Elizabeth De Laurell, Nelsyda Perez, Christopher
            Peterman, and Steven Turner.
          </p>
          
          <p>
            This project was produced using react and bootstrap for the front
            end, and JavaScript and Express for the back end.
          </p>
          
          <h2 className={"mt-5 mb-4"}  style={{color: "midnightblue"}}>
            External Links
          </h2>
          
          <p>
            <a className={"credits"}
               href={"https://github.com/georgepence"}
               title={"Caution: This will take you away from this website"}
            >Mac Pence on Github
            </a>
          </p>
          
          <div style={{height: "90px"}}>
            <p></p>
          </div>
        
        </Container>
      
      </div>
  );
}

export default Credits;
