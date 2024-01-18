import { LitElement, html, css } from "lit";
import * as moment from "moment";

export class MyHeader extends LitElement {
  static properties = {};
  constructor() {
    super();
  }
  static styles = css`ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
  }
  
  li {
    float: left;
    border-right:1px solid #bbb;
  }
  
  li:last-child {
    border-right: none;
  }
  
  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }`;

  render() {
    return html`
      <ul>
        <li><a class="active" href="#home">Home</a></li>
        <li><a href="#aboutus">About Us</a></li>
        <li><a>${moment().format("MMMM Do YYYY")}</a></li>
      </ul>
      
    `;
  }
}

customElements.define("my-header", MyHeader);
