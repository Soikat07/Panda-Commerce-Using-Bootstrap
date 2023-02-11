
document.getElementById('exampleInputEmail1').addEventListener('keyup',function(event){
     const text= event.target.value;
     const button= document.getElementById('submit-btn');
     if(text === '@gmail.com'){
          button.removeAttribute('disabled');
     }
     else{
          button.setAttribute('disabled')
     }
})