const d = document.getElementById("d")
const u = document.getElementById("u")
const r = document.getElementById("r")
const e = document.getElementById("e")
const l = document.getElementById("l")
const durel = document.getElementById("complete")

d.addEventListener("click",()=>{
    d.style.display = "none"
    u.style.display = "block"
})

u.addEventListener("click",()=>{
    u.style.display = "none"
    r.style.display = "block"
})

r.addEventListener("click",()=>{
    r.style.display = "none"
    e.style.display = "block"
})

e.addEventListener("click",()=>{
    e.style.display = "none"
    l.style.display = "block"
})

l.addEventListener("click",()=>{
    l.style.display = "none"
    durel.style.display = "block"
})

durel.addEventListener("click",()=>{
    durel.style.display = "none"
    d.style.display = "block"
})

