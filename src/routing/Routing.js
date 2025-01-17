import React from 'react'
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from '../components/Home'
import UseReducer from '../components/UseReducer'
   import Header from '../../src/layouts/Header'
import ComponentA from '../components/context/ComponentA'
import UseRef from '../components/UseRef'
const Routing = () => {
  return (
    <div>
        <Router>
          <Header/>
            <Routes>
                <Route path="" element={<ComponentA/>}/>
                <Route path="reducer" element={<UseReducer/>}/>
                <Route path="ref" element={<UseRef/>}/>
            </Routes>
        </Router>
    </div>
  )
}

export default Routing