//var p = (document.getElementsByClassName("myFriend"));

//console.log("How Sussy!");
//console.log(p);
//p.classList.add("beBlue");


//Dont worry about this

var TEMPLATES_DOM = document.getElementById("templates");
var STAGE_DOM     = document.getElementById("stage");
var CHAR_DOM      = TEMPLATES_DOM.querySelector(".chr").cloneNode(true);

STAGE_DOM.append(CHAR_DOM);

var count = 0;
var whateverthehelliwant = function(){
    console.log(CHAR_DOM.style.left);
    CHAR_DOM.innerHTML = count;
    CHAR_DOM.style.left  = count + "px";
}
var timer = function(){
    whateverthehelliwant();
    console.log(count++);
    if(count > 100)
        cancelAnimationFrame(animation);
    else
        return requestAnimationFrame(timer);
    return null;
};
var logKey = function(e){
    alert(e.key);
    console.log(e);
    var animation = timer(0);
};
var somethingelse = function(e){
    CHAR_DOM.style.backgroundColor = "red";
};

window.addEventListener("keypress", logKey);
