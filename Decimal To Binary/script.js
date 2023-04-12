let conversion = document.getElementById('conversion');
let input_box = document.getElementById('input-box');
let result_box = document.getElementById('result-box');

conversion.addEventListener('change', () => {
    input_box.value = '';
    result_box.textContent = '';
});

input_box.addEventListener('input', () => {
    if (input_box.value.toString().length <= 0) {
        result_box.textContent = '';
        return;
    }
    if (conversion.value == "Decimal To Binary") {
        let input_value = parseInt(input_box.value);
        result_box.textContent = input_value.toString(2);
    } else {
        let input_value = input_box.value.toString();
        if (checkBinaryValidator(input_value)) {
            result_box.textContent = parseInt(input_value, 2);
        } else {
            result_box.textContent = "Please inter a valid binary input."
        }
    }
});

function checkBinaryValidator(binaryNo) {
    for (let i = 0; i < binaryNo.length; i++) {
        if (binaryNo[i] != '0' && binaryNo[i] != '1') {
            return false;
        }
    }
    return true;
}