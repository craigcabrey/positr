import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';

import PhraseList from './phrase-list';
import PhraseForm from './phrase-form';

class Main extends React.Component {
  constructor() {
    super();
    this.handlePhraseSubmit = this.handlePhraseSubmit.bind(this);
    this.state = {
      phrases: []
    };
  }

  load() {
    fetch(this.props.url + '/_all_docs?include_docs=true')
      .then(response => response.json())
      .then(data => this.setState({phrases: data.rows}))
      .catch(err => console.error(this.props.url, err.toString()))
  }

  componentDidMount() {
    this.load()
  }

  handlePhraseSubmit(phrase) {
    const phrases = this.state.phrases;
    const newPhrases = phrases.concat([{key: phrase, doc: {count: 1}}]);

    this.setState({phrases: newPhrases});

    fetch(this.props.url, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        '_id': phrase,
        'count': 1
      })
    })
      .then(data => this.load())
      .catch(err => console.error(this.props.url, err.toString()))
  }

  render() {
    return <div className='container'>
      <h1 className='title page-header'>
        <img src='img/brand.jpg' alt='the positr' className='img-circle' />
        positr
      </h1>
      <PhraseList phrases={this.state.phrases} />
      <PhraseForm onPhraseSubmit={this.handlePhraseSubmit} />
    </div>;
  }
}

Main.propTypes = {
  url: PropTypes.string.isRequired
};

ReactDOM.render(
  <Main url='http://couch.kocsen.com/lol' />,
  document.getElementById('main-mount')
);
