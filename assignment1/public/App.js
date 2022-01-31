"use strict";

var nameComponent = /*#__PURE__*/React.createElement("div", {
  id: "out"
}, /*#__PURE__*/React.createElement("h2", {
  id: "name_comp"
}, "Dhanaraj Patil"));
var pictureComponent = /*#__PURE__*/React.createElement("div", {
  id: "picture_out"
}, /*#__PURE__*/React.createElement("img", {
  id: "picture_comp",
  src: "./Dhanraj.jpg"
}));
var introComponent = /*#__PURE__*/React.createElement("div", {
  id: "intro_out"
}, /*#__PURE__*/React.createElement("p", {
  id: "intro_comp"
}, "Hi I am Dhanaraj Patil, SDSU graduate student pursuing masters in Computer Science. This is my second semester here, I really enjoyed my time at SDSU in the first semester as it was very productive learning in the first semester. Looking forward to the current semester with the hope of learning new technology and new skills."));
var buttonComponent = /*#__PURE__*/React.createElement("div", {
  id: "button_out"
}, /*#__PURE__*/React.createElement("a", {
  href: "https://github.com/dhanraajnp"
}, /*#__PURE__*/React.createElement("button", {
  id: "button_comp"
}, "VIEW MY GITHUB REPO")));
ReactDOM.render(nameComponent, document.getElementById('name'));
ReactDOM.render(pictureComponent, document.getElementById('picture'));
ReactDOM.render(introComponent, document.getElementById('introduction'));
ReactDOM.render(buttonComponent, document.getElementById('button'));