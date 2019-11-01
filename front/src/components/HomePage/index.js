import React from 'react';

import './index.css'
import Header from './Header/Header';
import SupVis from './Supervisor/SupVis';
import Partners from './Partners/Partners';
import Footer from './Footer';

export default () => {
  return (
    <div id="HomePage">
      <Header />
      <SupVis />
      <Partners />
      <Footer />
    </div>
  )
}
