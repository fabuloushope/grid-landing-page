const actionBtn = document.querySelector('.navs')
const dropDownMenu = document.querySelector('.dropdown-menu')

actionBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
};