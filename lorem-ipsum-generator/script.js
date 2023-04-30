const text = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor justo ac nisi sodales, vel semper nulla convallis. Aliquam blandit volutpat purus, sit amet sollicitudin enim pretium eu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas ac dui lacinia, luctus metus nec, interdum risus. Nam commodo ex ut dolor malesuada, eu ullamcorper massa bibendum. Etiam rhoncus quam et efficitur malesuada. Nunc sagittis, nibh vitae hendrerit bibendum, lacus mauris ornare nulla, in varius turpis ex nec lectus.',
    'Suspendisse feugiat bibendum justo, sed consectetur nisl commodo vel. Sed lobortis sit amet elit eu fringilla. Sed imperdiet mi vitae nulla malesuada venenatis. Curabitur gravida vitae tellus ac congue. Phasellus tincidunt tellus et finibus efficitur. Donec posuere malesuada augue, vel molestie nulla tincidunt nec. Aenean vel consectetur risus. In maximus, nisi sit amet ullamcorper sodales, velit sapien iaculis dolor, vel malesuada nunc metus eu lectus. Sed non quam nec nisi gravida dignissim. Donec et leo vel risus molestie aliquet.',
    'Nullam et velit est. Proin congue volutpat tellus, eu convallis sapien gravida vel. Nullam pretium lacus in convallis pretium. Nam id nisl quis ex volutpat consequat ac non orci. In eu libero quis nulla dictum consectetur in a dolor. Fusce quis efficitur turpis, eget viverra nibh. Donec fringilla, ipsum vel scelerisque volutpat, velit risus commodo nisl, et consequat elit elit sit amet nulla. Duis faucibus tincidunt risus vel malesuada.',
    'Cras ac risus vel massa posuere malesuada in a metus. Sed vel enim at lectus lacinia facilisis. Sed eget tortor sagittis, commodo purus id, mattis nunc. Etiam elementum felis sit amet dapibus bibendum. Sed vitae ipsum quis mauris pellentesque tristique sed vel nisi. Nullam aliquet lorem at nisl bibendum, ut commodo turpis bibendum. Suspendisse commodo lectus sed turpis dapibus, eget tempor nisl sollicitudin. Sed nec ultrices enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc scelerisque ac tellus a commodo. Sed interdum, sapien nec fermentum laoreet, felis lectus sagittis elit, vitae vulputate elit quam vel elit. Vivamus bibendum, odio eu rhoncus pharetra, sapien sapien consectetur ipsum, vel vehicula turpis odio sed orci.'
];

const copyBtn = document.querySelector('#copy-btn');
const form = document.querySelector('#form');
const outputContainer = document.querySelector('.output-container');
const para = document.querySelector('#para-input');

document.body.onload = (e) => {
    for (let i = 1; i <= 3; i++) {
        outputContainer.innerHTML += `<div class='output-para'>${text[i]}</div>`;
    }
}

form.onsubmit = (e) => {
    e.preventDefault();
    let index = 0;
    outputContainer.innerHTML = '';
    for (let i = 1; i <= para.value; i++) {
        if (index == text.length - 1) {
            index = 0;
        } else {
            index++;
        }
        outputContainer.innerHTML += `<div class='output-para'>${text[index]}</div>`;
    }
    copyBtn.textContent = 'Copy to Clipboard';
}

copyBtn.addEventListener('click', async (e) => {
    let text = '';
    const outputParas = document.querySelectorAll('.output-para');
    outputParas.forEach((outputPara) => {
        text += `${outputPara.textContent}\n\n`;
    })

    await navigator.clipboard.writeText(text);
    copyBtn.textContent = 'Copied';
});