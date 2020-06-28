import React from 'react'
import Axios from 'axios'

class ParkingDetailFound extends React.Component {

  style = {
    textAlign: "center"
  }

  checkOut = (event) => {
    Axios.delete('/backend/parking/_park-out', {
      params: {
        plateNumber: this.props.plateNumber,
        floor: this.props.floor,
        number: this.props.number
      }
    }).then(response => console.log(response.data.data))
      .catch(exception => console.log(exception))
  }

  render() {
    return (
      <React.Fragment>
        <h1 style={this.style}>Hi! This your curent parking status</h1>
        <div>
          <table className="table table-striped table-light">
            <tbody>
              <tr>
                <th>Plate Number</th>
                <td>{this.props.plateNumber}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th>Floor</th>
                <td>{this.props.floor}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th>Number</th>
                <td>{this.props.number}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th>In Time</th>
                <td>{new Date(this.props.inTime).toLocaleString()}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th>Price</th>
                <td>{this.props.price}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th>Duration</th>
                <td>{this.props.duration}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <button onClick={this.checkOut} type="button" className="btn btn-danger">Park Out</button>
      </React.Fragment>);
  }
}

export default ParkingDetailFound