/*Picture buttons*/
document.getElementById("cssimg").onclick = function() {redirect('csssite.html')};
document.getElementById("PYRL-img").onclick = function() {redirect('pysite.html')};
document.getElementById("JSuntagged").onclick = function() {redirect('javasite.html')};
document.getElementById("Unity-img").onclick = function() {redirect('unity.html')};
document.getElementById("HTMlp-img").onclick = function() {redirect('htmlsite.html')};

/*Dropdown menu buttons*/
document.getElementById("buttonA").onclick = function() {redirect('htmlsite.html')};
document.getElementById("buttonB").onclick = function() {redirect('htmlsite.html')};
document.getElementById("buttonC").onclick = function() {redirect('htmlsite.html')};

function redirect(name) {
  window.location.href = name;
}


