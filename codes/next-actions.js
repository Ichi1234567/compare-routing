import React from 'react'
import Router from 'next/router';

export default class Blog extends React.Component {
  onClickUser() {
    // With route name and params
    Router.push('user', {username: 'hello-world'});
    // With route URL
    // Router.push('/users/hello-world');
  }

  onClickBack() {
    window.history.back();
  }

  render () {
    return (
      <div>
        <div>{this.props.url.query.username}</div>
        <button onClick={this.onClickUser}>user hello-world</button>
        <button onClick={this.onClickBack}>go back</button>
      </div>
    )
  }
}
