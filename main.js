let x=document.querySelector("#ff")
function search(){
    if(x.value=="sport"){
        window.location.href="#sport"
    }
    else if(x.value=="luxury"){
        window.location.href="#luxury"
    }
      else if(x.value=="classic"){
        window.location.href="#classic"
    }
      else if(x.value=="motor"){
        window.location.href="#motor"
    }
    else{
        alert("this thing is wrong input")
    }
}