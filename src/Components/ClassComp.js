import React from "react";
class ClassComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "ALi",
    };
    console.log(this);

    // this.clicked = this.clicked.bind(this);
  }
  clicked = () => {
    console.log("clicked");
    console.log(this);
  };
  componentDidMount = () => {
    console.log("component didMount");
  };
  componentDidUpdate(prevProps, prevState) {
    console.log("pevProps.,prevState", prevState, prevProps);
    console.log("componentDidUpdate");
  }
  componentWillUnmount = () => {
    console.log("componentWillUnmount");
  };
  //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
  componentWillUpdate(nextProps, nextState) {
    console.log("nextState,nextProps", nextState, nextProps);
  }

  render() {
    return (
      <>
        {/* <p className="text-danger fs-5">
          Class name : {this.state.name} and age is : {this.props.ages}
        </p>
        <button
          type="button"
          className="btn btn-info btn-large"
          onClick={this.clicked}
        >
          Change Vals
        </button> */}
        <p>class component</p>
      </>
    );
  }
}

export default ClassComp;
