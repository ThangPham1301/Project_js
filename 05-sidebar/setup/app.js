const closeBtn = document.querySelector(".close-btn");
const toggleBtn = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");

toggleBtn.onclick = function(){
    if(sidebar.classList.contains("show-sidebar")){
        sidebar.classList.remove("show-sidebar");
    }
    else{
        sidebar.classList.add("show-sidebar");
    }
}

closeBtn.onclick = function(){
    sidebar.classList.remove("show-sidebar");
}
