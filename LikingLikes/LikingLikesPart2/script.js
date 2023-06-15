
var count=[9,12,9]
var likeCountNeil=document.querySelector("#likes1")
var likeCountNichole=document.querySelector("#likes2")
var likeCountJim=document.querySelector("#likes3")




function likeCount1(){
    count[0]++
    likeCountNeil.innerText= count[0] + " likes"
}

function likeCount2(){
    count[1]++
    likeCountNichole.innerText=count[1] + " likes"
}
function likeCount3(){
    count[2]++
    likeCountJim.innerText=count[2] + " likes"
}