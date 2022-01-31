
const nameComponent = (
<div id ="out">
        <h2 id = "name_comp">Dhanaraj Patil</h2>
</div>
);

const pictureComponent = (
    <div id = "picture_out">
        <img id = "picture_comp" src = "./Dhanraj.jpg"/>
    </div>
);

const introComponent = (
    <div id= "intro_out">
        <p id = "intro_comp">
        Hi I am Dhanaraj Patil, SDSU graduate student pursuing masters in Computer Science. This is my second semester here, I really enjoyed my time at SDSU in the first semester as it was very productive learning in the first semester. Looking forward to the current semester with the hope of learning new technology and new skills.
        </p>
    </div>
            
);

const buttonComponent = (
    <div id= "button_out">
        <a href="https://github.com/dhanraajnp"><button id= "button_comp">VIEW MY GITHUB REPO</button></a>
    </div>

);

ReactDOM.render(nameComponent, document.getElementById('name'));
ReactDOM.render(pictureComponent, document.getElementById('picture'));
ReactDOM.render(introComponent, document.getElementById('introduction'));
ReactDOM.render(buttonComponent, document.getElementById('button'));