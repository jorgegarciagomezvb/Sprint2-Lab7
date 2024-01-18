import "./index.css";
import * as moment from "moment";
import {MyHeader} from "header/Header";
import {MyFooter} from "footer/Footer";

document.getElementById("app").innerHTML = `
<my-header></my-header>
<div class="container">
  <div>Name: host</div>
  <div>Framework: vanilla</div>
  <div>Language: JavaScript</div>
  <div>CSS: Empty CSS</div>
  <div class="date">${moment().format("MMMM Do YYYY")}</div>
</div>
<my-footer></my-footer>
`;