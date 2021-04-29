import React, { useState } from "react";
import "./App.css";
import BootstrapDemo from "./components/BootstrapDemo";
import Demo from "./components/Demo";
import FixedTable from "./components/FixedTable";
import PivotSample from "./components/PivotSample";
import Sample from "./components/PivotSample";
import ReactCards from "./components/ReactCards";
import Stepper1 from "./components/Stepper1";
import AsyncTab from "./components/AsyncTab";
import "bootstrap/dist/css/bootstrap.min.css";
import Task from './components/Task';

function App(props) {
  const [visible, setVisible] = useState(true);
  const props1 = { firstName: "Ahmed", lastName: "Bouchefra" };
  return (
    <React.Fragment>
     
     <Task></Task>
      
    </React.Fragment>
  );
}

export default App;
