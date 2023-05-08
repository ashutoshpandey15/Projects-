
// Detecting button press
for (var i = 0; i < document.querySelectorAll(".drum").length; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick)
    function handleClick() {
        
        var buttoninnerHTML = this.innerHTML;
        makeSound(buttoninnerHTML)   //fxn gets triggred
        buttonAnimation(buttoninnerHTML);

 
    }
}

// Detecting Keyboard Press
document.addEventListener("keypress", function (event) {   // "event is what triggers the call-back function"
    makeSound(event.key);            //key which triggers the event

    buttonAnimation(event.key);

});
function makeSound(key) {
    
    switch (key) {
        case "w":
            var crash= new Audio("sounds/crash.mp3")
            crash.play();                
            break;
        case "a":
            var crash= new Audio("sounds/kick-bass.mp3")
            crash.play();                
            break;
        case "s":
            var crash= new Audio("sounds/snare.mp3")
            crash.play();                
            break;
        case "d":
            var crash= new Audio("sounds/tom-1.mp3")
            crash.play();                
            break;
        case "j":
            var crash= new Audio("sounds/tom-2.mp3")
            crash.play();                
            break;
        case "k":
            var crash= new Audio("sounds/tom-3.mp3")
            crash.play();                
            break;
        case "l":
            var crash= new Audio("sounds/tom-4.mp3")
            crash.play();                
            break;
    
        default:
            break;
    }
    
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey) // stores all the current keys pressed

    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed")
    }, 100);
    
}