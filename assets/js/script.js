let menu_inner=document.querySelectorAll('#menu *');

document.querySelector('#toggle').addEventListener('click', ()=>{
    document.querySelector('#toggle').classList.toggle('on');
    document.querySelector('#menu').classList.toggle('show');
});

menu_inner.forEach(menu_inner_element => {
    menu_inner_element.addEventListener('click', function() {
        document.querySelector('#menu').classList.remove('show');
        document.querySelector('#toggle').classList.remove('on');
    });
});
