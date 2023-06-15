var count=3
var likeCount=document.querySelector("#likeCount")
function addLike(){
    count++;
    console.log(count)
likeCount.innerText=count + " likes" 
}