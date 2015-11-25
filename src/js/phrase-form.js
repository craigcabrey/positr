import React from 'react';

class PhraseForm extends React.Component {
  constructor() {
    super();
    this.state = {phrase: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({phrase: event.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    const phrase = this.state.phrase.trim();
    if (!phrase) {
      return;
    }

    this.props.onPhraseSubmit(phrase);
    this.setState({phrase: ''});
  }

  render() {
    return <div className='row form-row'>
      <div className='col-md-4 pull-right'>
        <form onSubmit={this.handleSubmit}>
          <div className='input-group'>
            <input
              type='text'
              className='form-control'
              onChange={this.handleChange}
              value={this.state.phrase} />
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
