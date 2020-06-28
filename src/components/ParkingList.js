import React from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom';


class ParkingList extends React.Component {

  state = {
    parkings: []
  }

  componentDidMount() {
    Axios.get("/backend/parking", {
      params: {
        "occupied": true
      }
    })
      .then(response => {
        console.log(response.data.data);
        this.setState({ parkings: response.data.data })
      })
      .catch(err => console.log('Axios fetch error:', err))
  }

  style = {
    borderRadius: "10px",
    borderColor: "lightgray",
    borderStyle: "solid",
    // margin: '8px'
  }

  render() {
    return (
      <div className="grid">
        <div className="row">
          {this.state
            .parkings
            .map(parking => {
              return (
                <div className="col-md-6" style={this.style}>
                  <Link to={`/parking/${parking.plateNumber}`} style={{color: "lightgray"}}>
                    <h3>{parking.plateNumber}</h3>
                    <p>Floor: {parking.floor}</p>
                    <p>Number: {parking.number}</p>
                  </Link>
                </div>
              )
            })}
        </div>
      </div>
    )
  }
}

export default ParkingList