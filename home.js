const search=document.querySelector(".searchicon");
const cancel=document.querySelector(".cancelicon");
const input=document.querySelector(".input");
const searchbar=document.querySelector(".searchbar");




search.addEventListener("click",()=>{
    searchbar.classList.add("active")
    input.classList.add("active")
    cancel.classList.add("active")
    search.classList.add("active")
})


cancel.addEventListener("click",()=>{
    searchbar.classList.remove("active")
    input.classList.remove("active")
    cancel.classList.remove("active")
    search.classList.remove("active")
})

