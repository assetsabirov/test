let menuitem = document.querySelectorAll('.menu-item'),
    menu = document.querySelector('.menu'),
    newmenuitem = document.createElement('li'),
    newtitle = document.getElementById('title'),
    adv = document.querySelector('.adv'),
    prom = document.getElementById('prompt');
    

newmenuitem.classList.add("menu-item");
newmenuitem.textContent = 'Пятый пункт';

menuitem[1].textContent = 'Второй пункт';
menuitem[2].textContent = 'Третий пункт';
menu.appendChild(newmenuitem);

newtitle.textContent = 'Мы продаем только подлинную технику Apple';

adv.remove();

function addreview() {
    let text = prompt('Ваше отношение к технике Apple','');
    prom.textContent = text;
}

setTimeout(addreview, 500);
// addreview();


