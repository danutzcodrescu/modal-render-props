import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import { ModalRender } from "./modal.js";
import { Button } from "reactstrap";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  click = () => {
    console.log("click");
  };
  render() {
    return (
      <div style={styles}>
        <Hello name="CodeSandbox" />
        <h2>Start editing to see some magic happen {"\u2728"}</h2>
        <button onClick={this.toggle}>Toggle</button>

        <ModalRender
          body={
            <React.Fragment>
              test
              <span style={{ color: "#BADA55" }}>test</span>
            </React.Fragment>
          }
          footer={
            <React.Fragment>
              <Button onClick={this.toggle}>Close</Button>
              <Button onClick={this.click}>Save</Button>
            </React.Fragment>
          }
          open={this.state.modal}
          toggle={this.toggle}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
