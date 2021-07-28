import _ from "lodash";
import "./style.css";
import Cookie from "./bolo.jpeg";
import printMe from "./print";

function component() {
  const element = document.createElement("div");

  const btn = document.createElement("button");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hello 2", "webpack"], " ");
  element.classList.add("hello");

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;

  element.appendChild(btn);

  const img = new Image();
  img.src = Cookie;
  element.appendChild(img);

  return element;
}

document.body.appendChild(component());
