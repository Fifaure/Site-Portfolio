
document.querySelectorAll('.menu-items a').forEach(item => {
	item.addEventListener('click', event => {
	  document.getElementById('menu-toggle').checked = false;
	});
});
  