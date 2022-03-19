import React from 'react';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';



import '../node_modules/bootstrap/dist/css/bootstrap.css'

import List from './component/List/List';
import Navbar from './component/Navbar/Navbar';
import Create from './component/Create/Create';
import Update from './component/Update/Update';
import Delete from './component/Delete/Delete';
import Confirm from './component/Confirm/Confirm';
import Welcome from './component/Welcome/Welcome';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
            <Switch>
               <Route exact path = "/" component = {Welcome} />
               <Route path = "/reactCrudProject/get/welcomeCourses" component = {Welcome} />
               <Route path = "/reactCrudProject/get/viewAllCourses" component = {List} />
               <Route path = "/reactCrudProject/get/addCourses" component = {Create} />
               <Route path = "/reactCrudProject/get/editCourses" component = {Update} />
               <Route path = "/reactCrudProject/get/removeCourses" component = {Delete} />
               <Route path = "/reactCrudProject/get/confirmCourses" component = {Confirm} />
            </Switch>
      </div>
    </Router>
  );
}

export default App;
