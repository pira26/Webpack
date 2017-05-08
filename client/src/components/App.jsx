import React from 'react';

import webpackImg from '../../dist/assets/webpack.png';

const App = () => {
  return (
    <div>
      <div className="webpack">
        <h1>Webpack Config</h1>
        <h3>TEST</h3>
        <p>success</p>
        <div className="webpack-image">
          <img src={webpackImg} />
        </div>
      </div>
    </div>
  );
}

export default App;
