const menu=document.querySelector('.view-menu');
const collapse=document.querySelector('.collapse-menu');
const linknav=document.querySelectorAll('.linkdata');
collapse.addEventListener('click',()=>{
    menu.classList.toggle('active');
    collapse.classList.toggle('active');
    nav.style.background=`#070022`;
   
});
const nameuser=document.querySelector('.name-user');
console.log(nameuser);
const nav =document.querySelector('.view-menu');
window.addEventListener("scroll", function () {
    window.scrollY > 100 && (nav.style.background = `rgba(80,35,146,0.9)`);
    window.scrollY < 100 && (nav.style.background = `transparent`);
    if(window.scrollY > 100 && (nav.style.background)){

        nameuser.classList.add('inative');
    }
    else{
        nameuser.classList.remove('inative');
    }


  });
const count=0;
const links=document.querySelector('.linkdata');
removelist=()=>{
    console.log("item...");
    for(let i=0;i< linknav.length;i++){
        // console.log(linknav[i]);
        linknav[i].addEventListener('click',(a)=>{
                // if(count==0)
                menu.classList.toggle('active');
                collapse.classList.toggle('active');
                colorMenu(this)

            

            })
      
    }

}
colorMenu=(a)=>{
//    console.log(a)
    // this.style.color="yellow"
}

const valuedata=removelist();
