import React, {Component} from 'react';

class GoogleAuth extends Component {
  state = {
    isSignedIn: null
  }
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '637242929690-4n5f1sr05f6r7c8opbgfn6n4c7rhltgr.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
        this.auth.isSignedIn.listen(this.onAuthChange)
      })
    })
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get()})
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>test null</div>
    } else if (this.state.isSignedIn) {
      return  <div>is sign in</div>
    } else {
      return <div>I am not signed in</div>
    }
  }

  render () {
    return (
      <div className="ui ">
       {this.renderAuthButton()}
      </div>
    );
  }
}

export default GoogleAuth
