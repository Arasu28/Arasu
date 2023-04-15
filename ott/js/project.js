
var slide_1_one = document.getElementById("grp_slide_01")
var slide_2_two = document.getElementById("grp_slide_02")
var slide_3_three = document.getElementById("grp_slide_03")

var slide_1_1 = document.getElementById("slider_1_one")
var slide_1_2 = document.getElementById("slide_1_two")
var slide_1_3 = document.getElementById("slide_1_three")
slide_1_1.addEventListener("click",()=>{
    slide_1_one.style.display = "block"
    slide_2_two.style.display = "none"
    slide_3_three.style.display = "none"  
})
slide_1_2.addEventListener("click",()=>{
    slide_1_one.style.display = "none"
    slide_2_two.style.display = "block"
    slide_3_three.style.display = "none"
    
})
slide_1_3.addEventListener("click",()=>{
    slide_1_one.style.display = "none"
    slide_2_two.style.display = "none"
    slide_3_three.style.display = "block"
})

var slide_2_1 = document.getElementById("slider_2_one")
var slide_2_2 = document.getElementById("slide_2_two")
var slide_2_3 = document.getElementById("slide_2_three")
slide_2_1.addEventListener("click",()=>{
    slide_1_one.style.display = "block"
    slide_2_two.style.display = "none"
    slide_3_three.style.display = "none"  
})
slide_2_2.addEventListener("click",()=>{
    slide_1_one.style.display = "none"
    slide_2_two.style.display = "block"
    slide_3_three.style.display = "none"
    
})
slide_2_3.addEventListener("click",()=>{
    slide_1_one.style.display = "none"
    slide_2_two.style.display = "none"
    slide_3_three.style.display = "block"
})

var slide_3_1 = document.getElementById("slider_3_one")
var slide_3_2 = document.getElementById("slide_3_two")
var slide_3_3 = document.getElementById("slide_3_three")
slide_3_1.addEventListener("click",()=>{
    slide_1_one.style.display = "block"
    slide_2_two.style.display = "none"
    slide_3_three.style.display = "none"  
})
slide_3_2.addEventListener("click",()=>{
    slide_1_one.style.display = "none"
    slide_2_two.style.display = "block"
    slide_3_three.style.display = "none"
    
})
slide_3_3.addEventListener("click",()=>{
    slide_1_one.style.display = "none"
    slide_2_two.style.display = "none"
    slide_3_three.style.display = "block"
})