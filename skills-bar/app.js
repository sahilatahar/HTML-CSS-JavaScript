const skillInput = document.getElementById('skill-input');
const skillPerInput = document.getElementById('skill-per-input');
const addSkillBtn = document.getElementById('add-skill-btn');
const removeSkillBtn = document.getElementById('remove-skill-btn');
const container = document.querySelector('.container');

const colors = ['#f3442a', '#4481eb', '#feb300', '#9488ef', '#5cd8c0'];

let index = -1;

addSkillBtn.addEventListener("click", (e) => {

    if (skillPerInput.value > 100) {
        skillPerInput.value = 100;
    }
    if (skillInput.value.length <= 0 || skillPerInput.value < 10) {
        return;
    }

    if (index === colors.length - 1) {
        index = 0;
    } else {
        index++;
    }
    container.innerHTML += `<div class="group">
            <label>${skillInput.value} <span>${skillPerInput.value}%</span></label>
            <div class="bar" style='box-shadow: 0px 0px 2px ${colors[index]};'>
                <div class="per-level" style="width: ${skillPerInput.value}%; background-color: ${colors[index]};"></div>
            </div>
        </div>`;
})


removeSkillBtn.addEventListener('click', () => {
    container.innerHTML = '<h2 class="heading">Skills</h2>';
})