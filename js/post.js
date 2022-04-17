var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var cl= document.getElementById("likeIcon").addEventListener("click", clickHandler);
    let  clicks = 0;
    function clickHandler() {
        clicks += 1;
        document.getElementById("pLineComm").innerHTML = `${clicks} people have liked this!`;

    };

    let count =0;
function editContent(){
    // let y = document.getElementById("contentTexture").contentEditable = "true";
    if(count===0){
        document.getElementById("contentTexture").contentEditable = "true";
        count +=1;
    }
    else{
        document.getElementById("btnEditor").innerHTML="save";
        document.getElementById("contentTexture").contentEditable = "false";
        
    }
    
}
function commentBtnclicker(){
    let count1 =1;
    let fs = document.getElementById("textAreaComm").value;
    for(let j=0; j<count1;j++){

        // let element = document.getElementById("commentShow").innerHTML +=`<div>${fs} </div> <br />`;
        // element.className == "MyClass";
        var element = document.createElement("div");
        element.setAttribute("class", "MyClass");
        let dr = document.body.appendChild(element);
        dr.innerHTML += `<div>${fs} </div> <br />`;
       
    }
    count1 +=1;
}














