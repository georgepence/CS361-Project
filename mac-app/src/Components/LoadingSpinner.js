import { Spinner } from 'react-bootstrap';

function LoadingSpinner(props) {
  return (
      <div className="d-flex justify-content-center w-100 mt-1"
           style={{height: "40px"}} >
        <Spinner
            hidden={!props.loading}
            animation="border"
            role="status"
            variant={"primary"}>
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
  )
}

export default LoadingSpinner;