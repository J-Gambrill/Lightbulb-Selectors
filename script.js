// Write your code here
let bulb1 = document.querySelector("#lightbulb1") //just think of this as the HTML being uploaded to the JAVA document
let bulb2 = document.querySelector("#lightbulb2")
let bulb3 = document.querySelector("#lightbulb3")

let count = 0

let subtitle = document.querySelector(".subtitle") // same with this

bulb1.addEventListener("click",function(){ //listens for a click to occur on bulb 1 and runs function (identified by the {})
    
    count++ // count increments by 1 on each click
    subtitle.innerHTML = `You've clicked the lights ${count} times` // the $ works by injecting code into a string of text. The inner html means the html between the <h3></h3> tags.
    this.classList.toggle("active") //somehow toggles the css class active on and off to make the background change when clicked.
    
})

bulb2.addEventListener("click",function(){ //listens for a click to occur on bulb 1 and runs function (identified by the {})
    
    count++ // count increments by 1 on each click
    subtitle.innerHTML = `You've clicked the lights ${count} times` // the $ works by injecting code into a string of text. The inner html means the html between the <h3></h3> tags.
    this.classList.toggle("active") //somehow toggles the css class active on and off to make the background change when clicked.
    
})

bulb3.addEventListener("click",function(){ //listens for a click to occur on bulb 1 and runs function (identified by the {})
    
    count++ // count increments by 1 on each click
    subtitle.innerHTML = `You've clicked the lights ${count} times` // the $ works by injecting code into a string of text. The inner html means the html between the <h3></h3> tags.
    this.classList.toggle("active") //somehow toggles the css class active on and off to make the background change when clicked.
    
})
