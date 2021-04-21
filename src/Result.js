import React from "react";

export default class Result extends React.Component {
  render() {
    const result = this.props.result;

    if (!result) {
      return null;
    }
    return <pre>{JSON.stringify(result, null, "\t")}</pre>;
  }
}
