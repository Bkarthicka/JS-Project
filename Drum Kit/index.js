var n=document.querySelectorAll(".drum").length;
for (var i=0;i<n;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var btninnerHTML= this.innerHTML
        makeSound(btninnerHTML);
        buttonAnimation(btninnerHTML);
    })
}


document.addEventListener("keypress",function(event){
    makeSound(event.key)
    buttonAnimation(event.key)
})

function makeSound(key){
    switch (key){
        case "w":
            var crash = new Audio('sounds/crash.mp3')
            crash.play()
            break;
        case "a":
            var bass = new Audio('sounds/kick-bass.mp3')
            bass.play()
            break;
        case "s":
            var snare = new Audio('sounds/snare.mp3')
            snare.play()
            break;
        case "d":
            var tom1 = new Audio('sounds/tom-1.mp3')
            tom1.play()
            break;
        case "j":
            var tom2 = new Audio('sounds/tom-2.mp3')
            tom2.play()
            break;
        case "k":
            var tom3 = new Audio('sounds/tom-3.mp3')
            tom3.play()
            break;
        case "l":
            var tom4 = new Audio('sounds/tom-4.mp3')
            tom4.play()
            break;
    }
}

function buttonAnimation(currentKey){
    var actbtn=document.querySelector("."+currentKey)
    actbtn.classList.add("pressed")
    setTimeout(function(){
        actbtn.classList.remove("pressed");
    },100);
}

// document.querySelectorAll("button")[0].addEventListener("click",function(){   
//     var audio = new Audio('sounds/crash.mp3')
//     audio.play()
// })
// document.querySelectorAll("button")[1].addEventListener("click",function(){   
//     var audio = new Audio('sounds/kick-bass.mp3')
//     audio.play()
// })
// document.querySelectorAll("button")[2].addEventListener("click",function(){   
//     var audio = new Audio('sounds/snare.mp3')
//     audio.play()
// })
// document.querySelectorAll("button")[3].addEventListener("click",function(){   
//     var audio = new Audio('sounds/tom-1.mp3')
//     audio.play()
// })
// document.querySelectorAll("button")[4].addEventListener("click",function(){   
//     var audio = new Audio('sounds/tom-2.mp3')
//     audio.play()
// })
// document.querySelectorAll("button")[5].addEventListener("click",function(){   
//     var audio = new Audio('sounds/tom-3.mp3')
//     audio.play()
// })
// document.querySelectorAll("button")[5].addEventListener("click",function(){   
//     var audio = new Audio('sounds/tom-4.mp3')
//     audio.play()
// })

