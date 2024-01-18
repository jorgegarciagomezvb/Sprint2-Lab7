import "./index.css";
import * as moment from "moment";

document.getElementById("app").innerHTML = `
<div class="container">
  <div>Name: host</div>
  <div>Framework: vanilla</div>
  <div>Language: JavaScript</div>
  <div>CSS: Empty CSS</div>
  <div class="date">${moment('MMMM Do YYYY').format()}</div>
</div>
`;

banner();
