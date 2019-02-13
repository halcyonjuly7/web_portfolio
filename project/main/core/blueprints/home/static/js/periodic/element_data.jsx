import React from "react";
import {inject, observer} from "mobx-react";
import "../../css/periodic/periodic_table.css";

var ReactFitText = require('react-fittext');


@inject("ElementStore")
@observer
class HoveredElement extends React.Component {

    constructor(props) {
        super(props)
        this.store = this.props.ElementStore
    }

    render() {

            if (this.props.ElementStore.current_element.hasOwnProperty("symbol")) {

              return(
                <div id="ho">
                    <h1 className={["element_symbol", this.props.ElementStore.current_element.css_class].join(" ")} style={{gridArea: "el"}}>{this.props.ElementStore.current_element.symbol}</h1>
                    <p style={{gridArea: "number"}}>Number: <h2>{this.props.ElementStore.current_element.number}</h2></p>
                    <p style={{gridArea: "name"}}>Name: <h2>{this.props.ElementStore.current_element.name}</h2></p>
                    <p style={{gridArea: "phase"}}>Phase: <h2>{this.props.ElementStore.current_element.phase}</h2></p>
                    <p className={"app"} style={{gridArea: "app"}}>Appearance: <h2>{this.props.ElementStore.current_element.appearance}</h2></p>
                    <p style={{gridArea: "melt"}}>Melting Point: <h2>{this.props.ElementStore.current_element.melt}</h2></p>
                    <p style={{gridArea: "boil"}}>Boiling Point: <h2>{this.props.ElementStore.current_element.boil}</h2></p>
                    <p style={{gridArea: "density"}}>Density: <h2>{this.props.ElementStore.current_element.density}</h2></p>
                    <p style={{gridArea: "cat"}}>Category: <h2>{this.props.ElementStore.current_element.category}</h2></p>
                    <p style={{gridArea: "mass"}}>Atomic Mass: <h2>{this.props.ElementStore.current_element.atomic_mass}</h2></p>
                    {/*<h3 style={{gridArea: "discoverer"}}>Discovered by: {this.props.ElementStore.current_element.discovered_by}</h3>*/}
                </div>)
            } else
                return <div></div>
    }
}
export default HoveredElement