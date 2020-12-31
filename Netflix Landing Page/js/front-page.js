const tabItems = document.querySelectorAll('.tab-items');
const tabContentitems = document.querySelectorAll('.tab-content-item');

function makeChanges(e){
    removeBorder();
    removeShow();
    this.classList.add('tab-border');
    let itemShow = document.querySelector( `#${this.id}-content`);
    itemShow.classList.add('show');
}

function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow(){
    tabContentitems.forEach(item => {
        item.classList.remove('show')
    })
}

tabItems.forEach(item => {
    item.addEventListener('click', makeChanges)}
);