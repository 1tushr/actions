const inputs = document.querySelectorAll('input');

const signup=JSON.parse(localStorage.getItem('signups'))||[];

for(let i=0;i<inputs.length;i++){
     inputs[i].value=signup[i]||"";
}




function submit(){
     for (let i = 0; i < inputs.length; i++) {
          signup[i]=inputs[i].value;
          
        }
        console.log(signup);
        
localStorage.setItem('signups',JSON.stringify(signup));
}


btn.addEventListener('click',submit)


