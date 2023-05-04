const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
      btns.forEach(btn => {
        btn.classList.remove('selected');
      })
      btn.classList.add('selected');
  }) 
});