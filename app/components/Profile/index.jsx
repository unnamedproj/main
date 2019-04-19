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
      This is {this.state.info.username}'s profile!
        {/*<Switch>
          <Route path="/login" render={()=><LoginPage onUsernameChange={this.onUsernameChange}/>
          <Route path="/account" render={() => <AccountItem username={this.state.username} />} />
        </Switch>*/}
      </div>
    );
  }
}

module.exports = Profile;