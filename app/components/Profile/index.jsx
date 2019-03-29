import React            from 'react';
import axios            from 'axios';

class Profile extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
        username: '',
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    };
  }

  onUsernameChange = (username) => {
    this.setState({
      username: username
      email: email
      password: password
      fullname: firstName + ' ' + lastName
    });
  }

  render() {
    return (
      <div>
        //insert html code here
        {/*<Switch>
          <Route path="/login" render={()=><LoginPage onUsernameChange={this.onUsernameChange}/>
          <Route path="/account" render={() => <AccountItem username={this.state.username} />} />
        </Switch>*/}
      </div>
    );
  }
}

module.exports = Signup; 

//how to get username and stuff
//render ^^