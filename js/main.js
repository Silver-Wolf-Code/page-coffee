let icon = document.getElementById('bar');
let list = document.getElementById('list');

icon.addEventListener('click', function(){
  list.classList.toggle('active');
});