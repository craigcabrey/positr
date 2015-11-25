import React from 'react';
import ReactDOM from 'react-dom';

class Main extends React.Component {
  render() {
    return <div className="container">
      <h1 className="title">positr</h1>
      <hr />
    </div>;
  }
}

ReactDOM.render(<Main />, document.getElementById('main-mount'));
