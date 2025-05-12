function f(y) {
    y.classList.toggle("change")
    var x = document.getElementById("linkAku");
    if (x.style.display === "block") {
        x.style.display = "none";
    } 
    else {
        x.style.display = "block";
    }
}

const em = document.getElementById("email")
const msg = document.getElementById("msg")
const btn = document.getElementById("btn")
btn.addEventListener("click", (e)=>{
    e.preventDefault()
    alert("Send Message Succes")
    const obj = {email:em.value,message:msg.value}
    const value = JSON.stringify(obj,null,2)
    localStorage.setItem("msg",value)
}
)