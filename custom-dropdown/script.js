const dropdownMain = document.querySelector('.dropdown-main'),
    dropdownList = document.querySelector('.dropdown-list'),
    dropdownItems = document.querySelectorAll('.dropdown-item'),
    dropdownValue = document.querySelector('.dropdown-value');

let options = ["Web Developer", "Full Stack Developer", "Front End Developer", "Back End Developer"];

let interest = 0;

dropdownMain.addEventListener('click', () => {
    dropdownList.classList.toggle('show');
});

dropdownItems.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        interest = index;
        console.log("clicked")
        dropdownValue.innerHTML = options[interest];
        item.children[0].checked = true;
        dropdownList.classList.remove('show');
    });
});