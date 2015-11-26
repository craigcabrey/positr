import React from 'react';

class PhraseForm extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      phrase: ''
    };
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
    return <div className='row'>
      <div className='col-xs-12 col-sm-6 col-md-4'>
        <div className='form-group input-group'>
          <span className='title input-group-addon'>Filter</span>
          <input
            type='text'
            className='form-control'
            onChange={this.props.onFilterChange} />
        </div>
      </div>
      <div className='col-xs-12 col-sm-6 col-md-4 col-md-offset-4'>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group input-group'>
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
