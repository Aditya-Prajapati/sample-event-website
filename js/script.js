const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");
const navLinks = document.querySelectorAll(".navLink");
const darkIcon = document.querySelector(".darkIcon");
const darkImage = document.getElementById("darkImage");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active"); 
})

navLinks.forEach(n => n.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
}))

darkIcon.onclick = () => {

    r = document.querySelector(":root");
    rs = getComputedStyle(r);
    let bc = rs.getPropertyValue("--backgroundColor");

    document.documentElement.style.setProperty("--backgroundColor", `${bc == "black" ? "white" : "black"}`);
    document.documentElement.style.setProperty("--fontColor", `${bc == "black" ? "black" : "white"}`);
    let x = Array.from(document.getElementsByClassName("gap"));
    x.forEach((element) => {
        element.classList.toggle("dark");
    })

   document.getElementById("mainBackgroundLayer").classList.toggle("active");
   darkImage.classList.toggle("active");
}







