
const btnSearch = document.getElementById('search-btn');
const search = document.getElementById('search');
const tip = document.getElementById('tip');

var message = "search here..";
var i = 0;
var speed = 100;
var msg ="";


btnSearch.addEventListener("click", () => {
    search.style.width = "80%";
    search.style.paddingLeft = "60px";
    search.focus();
    typeWriter();
   
});

search.addEventListener("keydown", () => {
   tip.style.visibility="visible";
tip.style.opacity="1";
});

function typeWriter() {
    if (i < message.length) {
        msg +=  message.charAt(i);
        
        search.setAttribute('placeholder', msg);
        i++;
        setTimeout(typeWriter, speed);
    }


}

