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
      phrases: []
    };
  }

  load() {
    fetch(this.props.url)
      .then(response => response.json())
      .then(data => this.setState({phrases: data.rows}))
      .catch(err => console.error(this.props.url, err.toString()))
  }

  newPhrase() {
    this.state.phrases.push({body: this.state.newPhraseContent, count: 1});
    this.setState({phrases: this.state.phrases});
  }

  handleChange(e) {
    this.setState({newPhraseContent: e.target.value});
  }

  componentDidMount() {
    this.load()
  }

  render() {
    return <div className="container">
      <h1 className="title page-header">
        <img src="img/brand.jpg" alt="the positr" className="img-circle" />
        positr
      </h1>
      <div className="row">
        {this.state.phrases.map((phrase, idx) =>
          <Phrase key={idx} body={phrase.key} count={phrase.doc.count} />
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

ReactDOM.render(
  <Main url='http://couch.kocsen.com/lol/_all_docs?include_docs=true'/>,
  document.getElementById('main-mount')
);
