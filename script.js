let input=document.querySelector("input")
let button=document.querySelector("button")
let div=document.querySelector("div")


button.addEventListener("click", ()=>{
    
    div.innerHTML +=`
    <input value=${input.value} disabled=true></input>
    <button>X</button>
    
`
input.value=""
})

