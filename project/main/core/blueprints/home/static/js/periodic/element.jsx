import React from "react";
import {inject} from "mobx-react";



@inject("ElementStore")
class Element extends React.Component {

    constructor(props) {
        super(props);
        this.onElementHover = this.onElementHover.bind(this);
        this.isHovering = false;
        this.store = this.props
    }


    render() {
        return (
            <div className={[this.props.class, "element"].join(" ")}
                 style={{gridArea: this.props.info.symbol}}
                 onMouseEnter={this.onElementHover}
                 onMouseLeave={this.onElementHover}>
                <h3 style={{gridArea: "Number"}} >{this.props.info.number}</h3>
                <h1 style={{gridArea: "Symbol"}}>{this.props.info.symbol}</h1>

            </div>);
    }


    onElementHover() {
        this.isHovering = !this.isHovering;
        if(this.isHovering) {
            this.props.ElementStore.elementHovered(Object.assign({"css_class": this.props.class}, this.props.info));
        } else
            this.props.ElementStore.elementHovered({});

    }

}




export default Element;