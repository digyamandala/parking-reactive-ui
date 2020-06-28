import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import EntryForm from './EntryForm'

class Home extends React.Component {

  render() {
    return (
      <React.Fragment>
        <div>
          <h1>Welcome To Parkir</h1>
          <br></br>
          <EntryForm />
        </div>
      </React.Fragment>
    )
  }
}

export default Home