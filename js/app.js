const menuList = document.querySelector('.menu-list');
const burgerIcon = document.querySelector('.burger-icon');

menuList.style.maxHeight = '0px';

burgerIcon.addEventListener('click', ()=>{
    
    if(menuList.style.maxHeight === '0px'){
        menuList.style.maxHeight = '200px';
        console.log('done')
    }else{
        menuList.style.maxHeight = '0px';
    }
    
})