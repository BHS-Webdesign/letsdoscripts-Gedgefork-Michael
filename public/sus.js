//Dont worry about this

var THESTUFF = [
    {
        id:"Joe",
        looks:"pog",
        hair:"cog",
        height:10
    },
    {
        id:"Bob",
        looks:"abstract",
        hair:"help",
        height:2  
    }
];

var STAGE_DOM = document.getElementById("stage");

var makeSomethingCool = function(useTheThingFromTheList){

    alert(useTheThingFromTheList.id);

    var newElem_DOM = document.createElement("div");
    newElem_DOM.innerHTML = useTheThingFromTheList.id + useTheThingFromTheList.looks;
    newElem_DOM.classList.add("myGuy");
    newElem_DOM.classList.add("looks_" + useTheThingFromTheList.looks);
    newElem_DOM.classList.add("hair_" + useTheThingFromTheList.hair);
    STAGE_DOM.append(newElem_DOM);
};


for(
    var count = 0;
    count < THESTUFF.length;
    count++){
        makeSomethingCool( THESTUFF[count]);
};

