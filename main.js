let value = document.querySelector("#value")
let incremnt =document.querySelector("#incr")
let reset =document.querySelector("#reset")
let decrmnt =document.querySelector("#derc")

let startValue= 0;


incremnt.addEventListener("click", () =>{
    startValue ++;
    value.textContent =startValue
    if(startValue ==10){
        value.style.color="red"
    
    
    }
    else{
       ( startValue <=11)
       value.style.color="black"

      }


    
})

reset.addEventListener("click", () =>{
    startValue = 0;
    value.textContent= startValue
})



decrmnt.addEventListener("click", () =>{
    
    if(startValue > 0){
        startValue --;
    value.textContent =startValue
    if(startValue ==10){
        value.style.color="red"
    
    
    }
    else{
       ( startValue <=11)
       value.style.color="black"



    }

    }
})



let incr =document.querySelector("#incr")

incr.addEventListener("mouseover", () =>{
    incr.style.backgroundColor = "blue"
})


incr.addEventListener("mouseout", () =>{
    incr.style.backgroundColor = "green"
})


// let reset =document.querySelector("#reset")

reset.addEventListener("mouseover", () =>{
    reset.style.backgroundColor = "yellow"
})


reset.addEventListener("mouseout", () =>{
    reset.style.backgroundColor = "blue"
})


decrmnt.addEventListener("mouseover", () =>{
    decrmnt.style.backgroundColor = "black"
})


decrmnt.addEventListener("mouseout", () =>{
    decrmnt.style.backgroundColor = "red"
})