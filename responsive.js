const headerMenu=document.querySelector('.header__menu ')
const headerTwoList=document.querySelector('.header__two__list');
const mains=document.querySelector('#main')
const colContentResponsive=document.querySelectorAll('.colContent_Responsive')
headerMenu.addEventListener('click', (event)=>{
    console.log('click')
    headerTwoList.style.display="flex"
    event.stopPropagation();
})
function closeListTab(widths){
    if(screen.availWidth<=widths){
        mains.addEventListener('click', (event)=>{
            headerTwoList.style.display="none"
        })
    }
}
closeListTab(820);
// Khi có thao tác kéo vào slider

