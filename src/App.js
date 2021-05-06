import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";
import "./index.css";
import SyslogTable from "./SyslogTable";
import { Route, NavLink, HashRouter } from "react-router-dom";
import SyslogHistogram from "./SyslogHistogram";

const App = () => {
  
  return (
    <Container style={{ marginTop: 10 }}>
      <HashRouter>
        <div className="head-nav">
          <h1>Sysloag Analyzer</h1>
          <ul className="header">
            <li>
              <NavLink to="/">Analyzer</NavLink>
            </li>
            <li>
              <NavLink to="/histogram" >Histogram</NavLink>
            </li>
          </ul>
        </div>
        <div className="content">
            <Route exact path="/" component={SyslogTable}/>
            <Route path="/histogram" component={SyslogHistogram}/>
        </div>
      </HashRouter>
    </Container>
  );
};

export default App;
