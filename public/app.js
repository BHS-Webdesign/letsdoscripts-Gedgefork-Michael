var sourcce_TEMPLATES = document.getElementById("templates");
var target_DOM = document.getElementById("stage");

//Recipe to Drawing
var draw =function(d){
    var card = sourcce_TEMPLATES.querySelector(".card").cloneNode(true);

    var title_DOM = card.querySelector(".title");
    title_DOM.innerHTML = d.title;

    var color_DOM = card.querySelector(".color");
    color_DOM.innerHTML = d.color;

    var message_DOM = card.querySelector(".message");
    message_DOM.innerHTML = d.message;

    var price_DOM = card.querySelector(".price");
    price_DOM.innerHTML = d.price;

    var img_DOM = card.querySelector("img");
    img_DOM.src = d.img;

    alert(d.title);
    target_DOM.append(card);
}


//Executes Drawing
var Ds = DATA.listOfArticles;

for(var d of Ds){
    draw(d);
}

alert("i am the man");