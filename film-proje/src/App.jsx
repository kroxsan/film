import React from 'react';
import PageContainer from './container/PageContainer'

import './App.css'
import Header from './components/Header' // ayrica headerda bootstaps kullandim JS ve CSS olarak
import RouterConfig from './config/RouterConfig';

function App() {
   return (
      <div>
         <Header />
         <PageContainer>
            <RouterConfig/>
         </PageContainer>
      </div>
   );
}

export default App;