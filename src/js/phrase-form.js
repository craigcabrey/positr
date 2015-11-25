import React from 'react';

class PhraseForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const phrase = this.refs.phrase.value.trim();
    this.props.onPhraseSubmit(phrase);
  }

  render() {
    return <div className='row form-row'>
      <div className='col-md-4 pull-right'>
        <form onSubmit={this.handleSubmit}>
          <div className='input-group'>
            <input type='text' className='form-control' ref='phrase' />
            <span className='input-group-btn'>
              <button className='btn btn-primary title'>
                New Phrase
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>;
  }
}

export default PhraseForm;
