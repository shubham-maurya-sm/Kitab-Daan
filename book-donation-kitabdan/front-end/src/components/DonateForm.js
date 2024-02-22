import React from 'react';
// import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      state: '',
      pincode: '',
      city: '',
      mobilenumber: '',
      bookType: '',
      numberOfBooks: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  }

  render() {
    return (
      <div className="App">
     
        <center>
          <form onSubmit={this.handleSubmit}>
            <fieldset>
              <legend>Details:</legend>
              First Name:<br />
              <input type="text" name="firstname" onChange={this.handleInputChange} required /><br /><br />
              Last Name: <br />
              <input type="text" name="lastname" onChange={this.handleInputChange} required /><br /><br />
              Email:<br />
              <input type="email" name="email" onChange={this.handleInputChange} /><br /><br />
              City: <br />
              <input type="text" name="state" onChange={this.handleInputChange} required /><br /><br />
              Book Name: <br />
              <input type="text" name="pincode" onChange={this.handleInputChange} required /><br /><br />
              Donation Center:<br />
              <input type="text" name="city" onChange={this.handleInputChange} required /><br /><br />
              Mobile Number:<br />
              <input type="number" name="mobilenumber" onChange={this.handleInputChange} /><br /><br />
            </fieldset>
            <fieldset>
              <legend>TYPES OF BOOKS YOU WOULD LIKE TO DONATE:</legend>
              <br />
              <select name="bookType" onChange={this.handleInputChange}>
              <option> SELECT</option>
                <option> CLASS 1-12</option>
                <option> UG/PG </option>
                <option> SSC/UPSC/COMPETITION </option>
                <option> OTHERS </option>
                
              </select><br /><br />
            </fieldset>
            <fieldset>
              <legend>NO OF BOOKS YOU WOULD LIKE TO DONATE:</legend>
              <br />
              <input type="number" name="numberOfBooks" onChange={this.handleInputChange} required /><br /><br />
            </fieldset>
            <input type="reset" value="Reset" />
            <input type="submit" value="Submit" />
          </form>
        </center>
      </div>
    );
  }
}

export default App;
