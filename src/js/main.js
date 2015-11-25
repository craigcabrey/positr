import React from 'react';
import ReactDOM from 'react-dom';

import Phrase from './phrase';

class Main extends React.Component {
  constructor() {
    super();
    this.newPhrase = this.newPhrase.bind(this);
    this.phrases = [
      {id: 1, body: 'posit', count: 1},
      {id: 2, body: 'afford', count: 5},
      {id: 3, body: 'in so far as', count: 8},
    ];
  }

  newPhrase() {
    this.phrases.push({id: 4, body: 'new', count: 10});
  }

  render() {
    return <div className="container">
      <h1 className="title page-header">
        <img src="img/brand.jpg" alt="the positr" className="img-circle" />
        positr
        <button className="btn btn-primary pull-right" onClick={this.newPhrase}>
          New Phrase
        </button>
      </h1>
      <div className="row">
        {this.phrases.map((phrase) =>
          <Phrase key={phrase.id} body={phrase.body} count={phrase.count} />
        )}
      </div>
    </div>;
  }
}

ReactDOM.render(<Main />, document.getElementById('main-mount'));
