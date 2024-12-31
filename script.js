const open_menu_icon = document.getElementById('open-menu');
const close_menu_icon = document.getElementById('close-menu');
const menu = document.getElementById('menu');


open_menu_icon.addEventListener('click',() => {
    menu.style.display = 'block';
    open_menu_icon.style.display = 'none';
    close_menu_icon.style.display = 'block';
})

close_menu_icon.style.display = 'none';

close_menu_icon.addEventListener('click', () => {
    menu.style.display= 'none';
    close_menu_icon.style.display= 'none';
    open_menu_icon.style.display= 'block';
})



