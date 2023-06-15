

console.log("Hello")

let profileName=document.querySelector("#profileName")
console.log(profileName.innerText)

function changeName(){
    profileName.innerText="Johnny AppleSeed"
}

/*let connection=document.querySelector("#remove")
let connection2=document.querySelector("#delete")
let decrease=document.querySelector("#number")
let increase=document.querySelector("#friends")

function removeConnection(){
connection.remove()
}
function removeConnection2(){
    connection2.remove()
}
function increaseNum(){
    parseInt(increase.innerText);
    increase.innerText++;
}
console.log(typeof decrease.innerText)
function decreaseNum(){
   parseInt(decrease.innerText);
   decrease.innerText--;}*/

let decrease=document.querySelector("#number")
let increase=document.querySelector("#friends")

function removeConnection(id){
    let remove=document.querySelector(id)
    remove.remove()
    parseInt(decrease.innerText);
    decrease.innerText-=1;
}

function addConnection(id){
    let add=document.querySelector(id)
    add.remove()
    parseInt(decrease.innerText);
    decrease.innerText-=1;
    parseInt(increase.innerText);
    increase.innerText++;

}


