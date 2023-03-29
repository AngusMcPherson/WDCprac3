const blueDiv = document.getElementById('mcount');
const postDiv = document.getElementById('posts');
var counter = 0;

blueDiv.addEventListener('mouseenter', function (event) {
  counter++;
  blueDiv.innerText = counter;
});


var postButton = document.getElementById("poster");
postButton.addEventListener('click', postDateContent);
function postDateContent() {
    for (let i = 0; i < document.getElementById("number").value; i++) {
        const content = document.getElementById('textInput').value;
        const individualPost = document.createElement("div");
        const dateOfPost = document.createElement("p");
        dateOfPost.className = 'post-time';
        dateOfPost.innerText = new Date();
        dateOfPost.style.color = "grey";
        dateOfPost.style.fontWeight = "bold";
        individualPost.appendChild(dateOfPost);
        const postContent = document.createElement("p");
        postContent.className = 'post-content';
        postContent.innerText = content;
        const redCheckBox = document.getElementById("red");
        const blueCheckBox = document.getElementById("blue");
        if (redCheckBox.checked){
            postContent.style.color = "Red";
        }else if (blueCheckBox.checked){
            postContent.style.color = "Blue";
        }
        const italicCheck = document.getElementById("italic");
        const boldCheck = document.getElementById("bold");
        if (italicCheck.checked){
            postContent.style.fontStyle = "italic";
        }
        if (boldCheck.checked){
            postContent.style.fontWeight= "bold";
        }
        individualPost.appendChild(postContent);
        postDiv.appendChild(individualPost);
    }
    
}

const mainDiv = document.getElementById("main");
const menuDiv = document.getElementById("menu");
var menuButton = document.getElementById("menuButton");
menuButton.addEventListener('click', bringMenu);
function bringMenu() {
    mainDiv.style.display = "none";
    menuDiv.style.display = "block";
}

var backButton = document.getElementById("backButton");
backButton.addEventListener('click', bringMain);
function bringMain() {
    mainDiv.style.display = "block";
    menuDiv.style.display = "none";
}

const bC = document.getElementById("bodyColor");
bC.addEventListener("blur", updateColor);
function updateColor() {
    document.body.style.backgroundColor = document.getElementById("bodyColor").value;
}

const slider = document.getElementById("range");
slider.addEventListener("input", updatePosts);
function updatePosts(){
    for (let i = 0; i < document.getElementById("range").value; i++) {
        const nthPost = document.getElementById('posts').children[i];
        nthPost.style.display = "block";
    }
    for (let i = document.getElementById("range").value; i < 10; i++) {
        const nthPost = document.getElementById('posts').children[i];
        nthPost.style.display = "none";
    }
}