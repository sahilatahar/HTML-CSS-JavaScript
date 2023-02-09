const box = document.querySelector('.box');
const urlInput = document.getElementById("urlInput");
const btn = document.getElementById("btn");
const qrImage = document.getElementById("qrImage");

btn.addEventListener("click", (e) => {
    if(!urlInput.value) return; // If input field will be empty then do nothing
    btn.value = 'Generating QR Code ...'
    box.classList.add('active');
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${urlInput.value}`;
    qrImage.classList.add('active');
    btn.value = 'Generate QR Code'
});
