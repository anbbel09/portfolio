
const menu = document.getElementById('menu');
const lista = document.getElementById('lista');

menu.addEventListener('click', () => {
  let cambio = lista.style.display === 'block' ? 'none' : 'block';
  lista.style.display = cambio;
});