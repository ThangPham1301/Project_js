// const btns = document.querySelectorAll(".question-btn");
const questions = document.querySelectorAll(".question");
// debugger

questions.forEach(function(question){
    // console.log(question)
    const btn = question.querySelector(".question-btn")
    // console.log(btn)
    btn.onclick = function(){
        questions.forEach(function(item){
            // console.log(item)
            if(item !== question){
                item.classList.remove("show-text");
            }
        })
        
        question.classList.toggle("show-text");
    }
})

