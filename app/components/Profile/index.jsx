import React            from 'react';
import axios            from 'axios';

class Profile extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      info: {}
    }
  }

  componentDidMount() {
    axios.get('/user/info')
    .then((info) => {
      this.setState({
        info: info.data
      });
    });
  }




  render() {
    console.log(this.state);
    return (
      <div>
      <b>This is {this.state.info.username}'s profile!</b>
        <div><img className="avatar" src="https://image.flaticon.com/icons/svg/194/194938.svg" width="10%" height="10%"/></div>
          <div>First Name: {this.state.info.firstName}</div>
          <div>Last Name: {this.state.info.lastName}</div>
          <div>Email: {this.state.info.email}</div>
          <div>Phone: {this.state.info.phone}</div>
          <div>Description: </div>
      </div>
    );
  }
}

module.exports = Profile;