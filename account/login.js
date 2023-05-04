let details=document.querySelectorAll('input');

let login=[];

function inputs(){
    for(let i=0;i<details.length;i++){
        login.push(details[i].value);
    }
    console.log(login);
}

btn.addEventListener('click',inputs);