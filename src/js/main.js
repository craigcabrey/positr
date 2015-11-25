import React from 'react';
import ReactDOM from 'react-dom';

import Phrase from './phrase';

class Main extends React.Component {
  constructor() {
    super();
    this.newPhrase = this.newPhrase.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      newPhraseContent: '',
      phrases: [
        {body: 'posit', count: 1},
        {body: 'afford', count: 5},
        {body: 'in so far as', count: 8},
      ]
    };
  }

  newPhrase() {
    this.state.phrases.push({body: this.state.newPhraseContent, count: 1});
    this.setState({phrases: this.state.phrases});
  }

  handleChange(e) {
    this.setState({newPhraseContent: e.target.value});
  }

  render() {
    return <div className="container">
      <h1 className="title page-header">
        <img src="img/brand.jpg" alt="the positr" className="img-circle" />
        positr
      </h1>
      <div className="row">
        {this.state.phrases.map((phrase, idx) =>
          <Phrase key={idx} body={phrase.body} count={phrase.count} />
        )}
      </div>
      <div className="row form-row">
        <div className="col-md-4 pull-right">
          <div className="input-group">
            <input type="text" className="form-control" onChange={this.handleChange} />
            <span className="input-group-btn">
              <button className="btn btn-primary title" onClick={this.newPhrase}>
                New Phrase
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>;
  }
}

ReactDOM.render(<Main />, document.getElementById('main-mount'));
