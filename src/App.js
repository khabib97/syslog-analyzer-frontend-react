import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";
import "./index.css";
import SyslogTable from "./SyslogTable";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Histogram from "./Histogram";

const App = () => {
  
  return (
    <Container style={{ marginTop: 10 }}>
      <HashRouter>
        <div className="head-nav">
          <h1>Sysloag Analyzer</h1>
          <ul className="header">
            <li>
              <NavLink to="/" activeClassName="selected">Analyzer</NavLink>
            </li>
            <li>
              <NavLink to="/histogram" activeClassName="active">Histogram</NavLink>
            </li>
          </ul>
        </div>
        <div className="content">
            <Route exact path="/" component={SyslogTable}/>
            <Route path="/histogram" component={Histogram}/>
        </div>
      </HashRouter>
    </Container>
  );
};

export default App;
