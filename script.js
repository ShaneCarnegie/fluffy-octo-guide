const fileName = window.location.pathname;
const homePageAddress ='/index.html';
var display_div = document.getElementById('welcome-div');
console.log(display_div);


var fileNames = [
  '/gallery.html',
  '/aboutme.html',
  '/contactme.html',
  '/mypage.html',
  '/index.html',
  '/wireframes.html',
  '/comments.html'
];


// if filename is index.html
if(fileName == homePageAddress){

  // prompt the user on only the first time they visit the page
  if (localStorage.getItem("name") == null) {
  var nameVar = prompt('hello please enter your name');
    localStorage.setItem('name', nameVar);
  
  }


  // count number of times the user has visited the page
  if(localStorage.getItem('count') == null){
    var count = 1;
    localStorage.setItem('count', count);
  }
  else{
    count = + localStorage.getItem('count');
  count ++;
    localStorage.setItem('count', count);
  }
  display_div.innerText = 'Welcome ' + localStorage.getItem('name') + ' the number of times you have visited this page is ' + count;
}



console.log(window.location.pathname);

const navLinks =document.querySelectorAll('nav a').
forEach(link => {
  if(link.href.includes(`${nav}`)){
link.classList.add('nav');
  }
})

function createMenu() {
  const footer_div = document.querySelector("#wrapper");
  const nav = document.querySelector("#nav");
  const darkbtn = document.querySelector("#btn");
  var a1;
  var a2;
  var a3;
  var a4;
  var f1;
  var f2;
  var f3;
  var footer;

  // creating elements
  a1 = document.createElement("a");
  a2 = document.createElement("a");
  a3 = document.createElement("a");
  a4 = document.createElement("a");
  f1 = document.createElement("a");
  f2 = document.createElement("a");
  f3 = document.createElement("a");


  footer = document.createElement("footer");

  







  //setting href  attributes
  a1.href = "gallery.html"; 
  a2.href = "aboutme.html";
  a3.href = "contactme.html"; 
  a4.href = "mypage.html";
  f1.href = "wireframes.html"; 
  f2.href = "comments.html";
  f3.href = "index.html";


  //text inside anchor tags
  a1.innerText = "Gallery";
  a2.innerHTML = "About Me";
  a3.innerHTML = "Contact Me";
  a4.innerHTML = "My Page";
  f1.innerText = "Wireframe";
  f2.innerHTML = "Comments";
  f3.innerHTML = "Home";
  
  // setting classes on the nav elements
  //a1.setAttribute('class','menu-item')
  /*a1.classList.add('menu-item');
  a2.classList.add('menu-item');
  a3.classList.add('menu-item');
  a4.classList.add('menu-item');*/
  // appending anchor elements to the nav bar
  console.log(nav);
  nav.appendChild(a1);
  nav.appendChild(a2);
  nav.appendChild(a3);
  nav.appendChild(a4);
  nav.appendChild(f2);
  nav.appendChild(f3);
  footer_div.appendChild(footer);
  footer.appendChild(f1);
  footer.appendChild(f2);
  if (fileNames[0] == fileName){
    a1.href = '#';

    a1.style.color = 'blue'
    a1.style.cursor = 'none';
    console.log(a1.href);

  }
  else if(fileNames[1] == fileName){
    a2.href = '#';
    a2.style.color = 'blue'
    a2.style.cursor = 'none';
  }
  
  else if(fileNames[2] == fileName){
    a3.href = '#';
    a3.style.color = 'blue'
    a3.style.cursor = 'none';
  }
  else if(fileNames[3] == fileName){
    a4.href = '#';
    a4.style.color = 'blue'
    a4.style.cursor = 'none';
  }
  else if(fileNames[4] == fileName){
    f3.href = '#';
    f3.style.color = 'blue'
    f3.style.cursor = 'none';
  }
  else if(fileNames[5] == fileName){
  f1.href = '#';
  f1.style.color = 'blue'
  f1.style.cursor = 'none';
  }
  else if(fileNames[6] == fileName){
  f2.href = '#';
  f2.style.color = 'blue'
  f2.style.cursor = 'none';
  }
  /////////////////////////////////////////////
  var slideIndex = 1;
showDivs(slideIndex);

///////////////////////////////////////////////
function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";


  
  
}
}
