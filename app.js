// function run when window loaded

// window.addEventListener('load',()=>{
    

  
// })

let load=()=>{
    const loader=document.querySelector('.loader');
loader.classList.add('finish');
}

setTimeout('load()',3000);






const menuBar=document.querySelector('nav .burger-icon');


menuBar.addEventListener('click',(e)=>{
  const ul=document.querySelector('ul');
  console.log("clicked")
  if(ul.className=='remove'){
      ul.classList.remove('remove');
  }else{
    ul.classList.add('remove');
  }
})



