import React from 'react';

import Phrase from './phrase';

class PhraseList extends React.Component {
  render() {
    return <div className="row">
      {this.props.phrases.map((phrase, idx) =>
        <Phrase key={idx} body={phrase.key} count={phrase.doc.count} />
      )}
    </div>;
  }
}

export default PhraseList;
