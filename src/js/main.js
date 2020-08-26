const menu=document.querySelector('.view-menu');
const collapse=document.querySelector('.collapse-menu');
const linknav=document.querySelectorAll('.linkdata');
collapse.addEventListener('click',()=>{
    menu.classList.toggle('active');
    collapse.classList.toggle('active');
   
});
removelist=()=>{
    console.log("item...");
    for(let i=0;i< linknav.length;i++){
        // console.log(linknav[i]);
        linknav[i].addEventListener('click',(a)=>{
                menu.classList.toggle('active');
                collapse.classList.toggle('active');


            })
      
    }

}

const valuedata=removelist();
// console.log(removelist());
// removelist();