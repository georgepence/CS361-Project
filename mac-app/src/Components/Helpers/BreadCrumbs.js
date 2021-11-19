import { Breadcrumb } from "react-bootstrap";

function BreadCrumbs(props) {
  
  return (
      <>
          <Breadcrumb>
            
            <Breadcrumb.Item id={"home-crumb"}
                             className={"clickable-breadcrumb"}
                             hidden={props.show.rvaMuseums}
                             onClick={() => {props.setShow({
                                 rvaMuseums: true,
                                 museum: false,
                                 museumExhibits: false,
                                 exhibitions: false
                             })}}
                             title={"Return to the Home Page"}>
              Home
            </Breadcrumb.Item>
  
            <Breadcrumb.Item key={"museum-crumb"}
                             hidden={props.show.museumExhibits || props.show.exhibitions}
                             active >
              {props.museum}
            </Breadcrumb.Item>
            
            <Breadcrumb.Item id={"museum-crumb-clickable"}
                             className={"clickable-breadcrumb"}
                             hidden={!props.show.museumExhibits || props.show.exhibitions}
                             onClick={() => {props.setShow({
                                 rvaMuseums: false,
                                 museum: true,
                                 museumExhibits: false,
                                 exhibitions: false
                               })}}
                             // title={`Return to the ${props.museum.name} information page`}
            >
              {props.museum}
            </Breadcrumb.Item>
            
            <Breadcrumb.Item id={"museum-exhibits-crumb"}
                             hidden={!props.show.museumExhibits} active
            >
              Exhibitions
            </Breadcrumb.Item>
            
            <Breadcrumb.Item key={"exhibitions-crumb"}
                             hidden={!props.show.exhibitions}
                             active>
              Exhibitions
            </Breadcrumb.Item>
          </Breadcrumb>
      </>
  )
}

export default BreadCrumbs;