import React from 'react'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'

class EntryForm extends React.Component {

  state = {
    plateNumber: null,
    directToResultPage: false
  }

  handleOnChange = (event) => {
    this.setState({ plateNumber: event.target.value })
    console.log(this.state.plateNumber)
  }

  handleOnSubmit = (event) => {
    event.preventDefault();

    const plateNumber = this.state.plateNumber;

    Axios.post("/backend/parking/_park-in?plateNumber=" + plateNumber)
      .then(response => {
        this.setState({ directToResultPage: true })
        console.log(response)
      })
      .catch(exception => console.log(exception))

  }

  render() {
    if (this.state.directToResultPage) {
      return <Redirect plateNumber={this.state.plateNumber} to={"/parking/" + this.state.plateNumber} />
    }
    return (
      <form onSubmit={this.handleOnSubmit}>

        <div className="form-group">
          <label>Plate Number</label>
          <input
            onChange={this.handleOnChange}
            className='form-control'
            id='plateNumberInput'
            type="text"
            placeholder="your plate number">
          </input>
        </div>

        <div className="form-group">
          <button type='submit' className="btn btn-light">Submit</button>
        </div>

      </form>
    );
  }
}

export default EntryForm