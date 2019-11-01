import React from 'react';

import './index.css'
import Header from './Header/Header';
import SupVis from './Supervisor/SupVis';
import Partners from './Partners/Partners';

export default () => {
  return (
    <div id="HomePage">
      <Header />
      <SupVis />
      {/* <Partners /> */}
    </div>
  )
}
