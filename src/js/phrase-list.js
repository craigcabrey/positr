import React from 'react';

import Phrase from './phrase';

class PhraseList extends React.Component {
  handlePhraseClick(index) {
    this.props.onPhraseIncrement(index);
  }

  render() {
    return <div className="row">
      {this.props.phrases.map((phrase, index) => {
        const boundClick = this.handlePhraseClick.bind(this, index);
        return (<Phrase
          key={index}
          body={phrase.key}
          count={phrase.doc.count}
          onPhraseClick={boundClick} />);
      })}
    </div>;
  }
}

export default PhraseList;
