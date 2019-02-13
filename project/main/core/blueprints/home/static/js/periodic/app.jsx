import React from "react";

import data from "../../data.jsx";
import Element from "./element";
import "../../css/periodic/periodic_table.css";
import HoveredElement from "./element_data";



class AppComponent extends React.Component{

    getElementClass(groupBlock) {
        return groupBlock.toLocaleLowerCase().replace(/\s+/g, "-");
    }

    render() {
        var elements = data["elements"].map(item => <Element key={item.symbol}
                                                               class={this.getElementClass(item.category)}
                                                               info={item}
        />);
        elements.push(<HoveredElement/>)

        return elements;

    }
}


export default AppComponent;

