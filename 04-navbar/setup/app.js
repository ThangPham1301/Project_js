// classList -hiển thị/nhận tất cả các lớp
// contains - kiểm tra classList cho lớp cụ thể
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

// navToggle.onclick = function(){
//     if(links.classList.contains("show-links")){
//         links.classList.remove("show-links");
//     }
//     else{
//         console.log( links.classList.contains("show-links"))
//         links.classList.add("show-links");
//     }
//     links.classList.toggle("show-links");
// }

navToggle.addEventListener("click", function(){
    if(links.classList.contains("show-links")){
        links.classList.remove("show-links");
    }
    else{
        console.log( links.classList.contains("show-links"))
        links.classList.add("show-links");
    }
    links.classList.toggle("show-links");
})