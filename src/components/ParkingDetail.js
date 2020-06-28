import React from 'react'
import Axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import NotFound from './NotFound'
import ParkingDetailFound from './ParkingDetailFound';

class ParkingDetail extends React.Component {

  state = {
    plateNumber: this.props.match.params.plateNumber,
    inTime: null,
    price: null,
    duration: null,
    number: null,
    floor: null,
    found: null
  }

  async componentDidMount() {
    console.log(this.props.match.params.plateNumber)

    await Axios.get("/backend/parking", {
      params: {
        plateNumber: this.state.plateNumber
      }
    }).then(response => {
      const resp = response.data.data[0]
      if (response.data.data.length === 0) {
        this.setState({ found: false })
      } else {
        this.setState({
          plateNumber: resp.plateNumber,
          floor: resp.floor,
          number: resp.number,
          inTime: resp.inTime,
          duration: resp.duration,
          price: resp.price,
          found: true
        })
      }
    })
      .catch(exception => console.log(exception))
  }

  render() {
    return (
      <div>
        {this.state.found ? <ParkingDetailFound
          plateNumber={this.state.plateNumber}
          number={this.state.number}
          floor={this.state.floor}
          inTime={this.state.inTime}
          duration={this.state.duration}
          price={this.state.price}
        /> : <NotFound />}
      </div>
    )
  }
}

export default ParkingDetail