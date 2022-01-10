import React from 'react';
import './style.css';

export default class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.isLoggedIn ? (
          <Dashboard />
        ) : (
          <Login username={this.props.username} />
        )}
      </div>
    );
  }
}

function Dashboard() {
  return <h1> This is a dashboard</h1>;
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: this.props.username, password: '' };
  }

  login = () => {
    console.log('login details', this.state);
  };

  updateValue(e, stateToUpdate) {
    console.log('update the value entered', e.target.value);
    this.setState({ [stateToUpdate]: e.target.value });
  }

  intermittentFn = (e) => {
    this.updateValue(e, 'password');
  };

  render() {
    return (
      <div>
        <h1>Please Login </h1>
        <div class="login-container">
          <input
            value={this.state.username}
            placeholder="User name"
            onChange={(e) => this.updateValue(e, 'username')}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={this.intermittentFn}
          />

          <button onClick={this.login}>Login</button>
        </div>
      </div>
    );
  }
}
