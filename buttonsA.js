/*Picture buttons*/
document.getElementById("cssimg").onclick = function() {myFunction('csssite.html')};
document.getElementById("PYRL-img").onclick = function() {myFunction('pysite.html')};
document.getElementById("JSuntagged").onclick = function() {myFunction('javasite.html')};
document.getElementById("Unity-img").onclick = function() {myFunction('unity.html')};
document.getElementById("HTMlp-img").onclick = function() {myFunction('htmlsite.html')};

function myFunction(name) {
  window.location.href = name;
}

/*Dropdown menu buttons*/
document.getElementById("dd1").onclick = function() {myFunction('htmlsite.html')};
