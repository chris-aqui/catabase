import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Catspage from "./pages/Catspage";
import Catprofile from "./pages/Catprofile";
import Ownerspage from "./pages/Ownerspage";
import Ownerprofile from "./pages/Ownerprofile";
import Fosters from "./pages/Fosters";
import Fosterprofile from "./pages/Fosterprofile";
import Shelterspage from "./pages/Shelterspage";
import Shelterdetails from "./pages/Shelterdetails";
import Vetspage from "./pages/Vetspage";
// import Vetdetails from "./pages/Vetdetails";

import CatForm from "./pages/CatForm";
import OwnerForm from "./pages/OwnerForm.js";
import Fosterform from "./pages/Fosterform.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="backGround">
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />

          <Route exact path="/cats" component={Catspage} />
          <Route exact path="/cat/:id" component={Catprofile} />
          <Route exact path="/addcat" component={CatForm} />

          <Route exact path="/owners" component={Ownerspage} />
          <Route exact path="/owner" component={Ownerprofile} />

          <Route exact path="/fosters" component={Fosters} />
          <Route exact path="/foster" component={Fosterprofile} />

          <Route exact path="/shelters" component={Shelterspage} />
          <Route exact path="/shelter" component={Shelterdetails} />
          <Route exact path="/vets" component={Vetspage} />
          {/* <Route exact path="/vet" component={Vetdetails} /> */}
          <Route exact path="/OwnerForm" component={OwnerForm} />
          <Route exact path="/Fosterform" component={Fosterform} />
          <Route exact path="/CatForm" component={CatForm} />
        </div>
      </Router>
    );
  }
}

export default App;
