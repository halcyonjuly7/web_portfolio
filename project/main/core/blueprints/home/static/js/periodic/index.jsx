import React from "react";
import ReactDOM from "react-dom";
import AppComponent from "./app"
import "../../css/periodic/periodic_table.css";
import {Provider} from "mobx-react";
import element_store from "./element_store";
import ElementData from "./element_data";


const Root = (
    <Provider ElementStore={element_store}>
        <AppComponent/>
    </Provider>
)




ReactDOM.render(Root, document.getElementById("periodic-table"));