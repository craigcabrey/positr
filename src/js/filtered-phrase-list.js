import React, {PropTypes} from 'react';

import PhraseForm from './phrase-form';
import PhraseList from './phrase-list';

class FilteredPhraseList extends React.Component {
  constructor() {
    super();

    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handlePhraseIncrement = this.handlePhraseIncrement.bind(this);
    this.handlePhraseSubmit = this.handlePhraseSubmit.bind(this);

    this.state = {
      filteredPhrases: [],
      phrases: []
    };
  }

  componentDidMount() {
    this.load()
  }

  load() {
    fetch(this.props.url + '/_all_docs?include_docs=true')
      .then(response => response.json())
      .then(
        data => this.setState({filteredPhrases: data.rows, phrases: data.rows})
      )
      .catch(err => console.error(this.props.url, err.toString()))
  }

  handlePhraseIncrement(index) {
    const phrase = this.state.phrases[index];
    phrase.doc.count = phrase.doc.count + 1;

    fetch(this.props.url + '/' + phrase.id, {
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        '_rev': phrase.doc._rev,
        'count': phrase.doc.count
      })
    })
      .then(data => this.load())
      .catch(err => console.error(this.props.url, err.toString()))
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

  handleFilterChange(event) {
    const filteredPhrases = this.state.phrases.filter((phrase) =>
      phrase.key.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );

    this.setState({filteredPhrases: filteredPhrases});
  }

  render() {
    return <div>
      <PhraseForm
        onFilterChange={this.handleFilterChange}
        onPhraseSubmit={this.handlePhraseSubmit} />
      <PhraseList
        onPhraseIncrement={this.handlePhraseIncrement}
        phrases={this.state.filteredPhrases} />
    </div>;
  }
}

FilteredPhraseList.propTypes = {
  url: PropTypes.string.isRequired
};

export default FilteredPhraseList;
