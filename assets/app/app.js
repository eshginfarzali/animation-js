const listitmes= document.querySelectorAll("a")
const dream= document.querySelector("span")
const paragraphs= document.querySelectorAll(".description p")

listitmes.forEach((item,index)=>{
    item.style.animation=`moveup 2s ease-in-out forwards ${index/7}s`;

    item.addEventListener("animationend", ()=>{
        paragraphs.forEach((item,index)=>{
            item.style.animation=`moveup 1s ease-in-out forwards ${index/10}s`
        })
        dream.style.animation=`movetoleft 0.5s ease-in-out forwards`
    })
})
