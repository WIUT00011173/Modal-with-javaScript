const body = document.body
const modal = document.querySelector(".modal")
const show = document.querySelector("#show")
const closeBtn = document.querySelector("#close-btn")

closeBtn.addEventListener("click", ()=> {
    setTimeout(function() {
        body.classList.remove("after")
    }, 100)
    modal.classList.add("close")
})
show.addEventListener("click", ()=> {
    setTimeout(function() {
        body.classList.add("after")
    }, 400)
    modal.classList.remove("close")
})

