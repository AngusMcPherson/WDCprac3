const blueDiv = document.getElementById('mcount');
const postDiv = document.getElementById('posts');
var counter = 0;

blueDiv.addEventListener('mouseenter', function (event) {
  counter++;
  blueDiv.innerText = counter;
});


var myButton = document.getElementById("poster")
myButton.addEventListener('click', postDateContent);
function postDateContent() {
    console.log("im being called now");
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
    individualPost.appendChild(postContent);
    postDiv.appendChild(individualPost)
  }
