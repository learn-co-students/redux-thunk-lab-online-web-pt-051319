import React, { Component } from "react";
import { render } from "react-dom";

export default class CatList extends Component {
  render() {
    return (
      <div>
        {this.props.catPics.map(cat => {
          return (
            <p>
              <img src={cat.url} />
            </p>
          );
        })}
      </div>
    );
  }
}
