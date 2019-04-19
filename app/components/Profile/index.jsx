import React            from 'react';
import axios            from 'axios';

class Profile extends React.Component {
  constructor (props) {
    super (props);
  }

  render() {
    return (
      <div>
      This is the Profile!
        //insert html code here
        {/*<Switch>
          <Route path="/login" render={()=><LoginPage onUsernameChange={this.onUsernameChange}/>
          <Route path="/account" render={() => <AccountItem username={this.state.username} />} />
        </Switch>*/}
      </div>
    );
  }
}

module.exports = Profile;