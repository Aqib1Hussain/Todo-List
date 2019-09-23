const list=document.querySelector("#list");
const text=document.querySelector("#text");
const submit=document.querySelector("#submit");

text.addEventListener("keyup",function(e){
    if(e.keyCode===13 && text.value !==""){
        appendingToAList()
    }
})

submit.addEventListener("click",function(){
    if(text.value===""){

    }
    else{
        appendingToAList()
    }
})


function appendingToAList(){
    const li=document.createElement("li");
    const a=document.createElement("a");
        a.classList.add("cross")
        a.innerText="X";
        li.innerHTML=text.value;
        list.appendChild(li);
        li.appendChild(a)
        text.value="";
}



list.addEventListener("click",function(e){
    if(e.target.classList=="cross"){
        e.target.parentElement.remove();
    }
    
    
})