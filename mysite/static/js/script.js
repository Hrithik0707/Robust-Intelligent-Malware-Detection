const btn = document.getElementById('btn'),
  btnText = document.getElementById('btnText');

btn.onclick = function () {
  btnText.innerHTML = 'Thanks';
  btn.classList.add('active');
};
