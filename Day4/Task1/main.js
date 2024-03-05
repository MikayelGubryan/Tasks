const div = document.getElementById('container');

const obj = {
    img : "js.jpg",
    title : "JS.title",
    text : "JS IS THE MOST POWERFUL LANGUAGE IN THE WORLD"
}

const add = function() {
    let newDiv = document.createElement("div");
    newDiv.classList.add("formDiv");
    let imgForm = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src",obj.img);
    imgForm.appendChild(img);
    newDiv.appendChild(imgForm);
    let textBlock = document.createElement("div");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    h2.textContent = obj.title;
    p.textContent = obj.text;
    textBlock.appendChild(h2);
    textBlock.appendChild(p);
    newDiv.appendChild(textBlock);
    div.appendChild(newDiv);
}