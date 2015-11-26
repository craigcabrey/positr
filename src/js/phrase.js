import React from 'react';

class Phrase extends React.Component {
  render() {
    return <div className='col-md-4'>
      <a onClick={this.props.onPhraseClick}>
        <div className='panel panel-default'>
          <div className='panel-body'>
            <samp>
              {this.props.body}
            </samp>
            <div className='pull-right'>
              <span className='badge'>
                {this.props.count}
              </span>
            </div>
          </div>
        </div>
      </a>
    </div>;
  }
}

export default Phrase;
