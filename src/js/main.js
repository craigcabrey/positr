import React from 'react';
import ReactDOM from 'react-dom';
import Fetch from 'whatwg-fetch';

import FilteredPhraseList from './filtered-phrase-list';

class Main extends React.Component {
  render() {
    return <div className='container'>
      <h1 className='title page-header'>
        <img src='img/brand.jpg' alt='the positr' className='img-circle' />
        positr
      </h1>
      <FilteredPhraseList
        url='http://couch.kocsen.com/lol' />
    </div>;
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('main-mount')
);
