import React from "react";

//运行APP
class Box extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div>
          {this.props.children}
        </div>
      );
    }
  }

  export default Box;
  