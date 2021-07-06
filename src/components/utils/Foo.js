import React from "react";
import ShowMoreText from "react-show-more-text";
import { Row } from "reactstrap";

// ...

export default class Foo extends React.Component {
  executeOnClick(isExpanded) {
    console.log(isExpanded);
  }

  render() {
    return (
      <ShowMoreText
        lines={1}
        more="Show more"
        less="Show less"
        className="content-css"
        anchorClass="my-anchor-css-class"
        onClick={this.executeOnClick}
        expanded={false}
        width={0}
      >
        {this.props.text && this.props.text}
        {this.props.htmlText && this.props.htmlText}
      </ShowMoreText>
    );
  }
}
