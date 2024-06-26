
function estVisible(id_element){
	var cadreVisible = {yMin: 0, yMax: 0}, elementVisible = {yMin: 0, yMax: 0};
	var source = document.getElementById(id_element), sourceParent = source.offsetParent;
	var total = {hauteur: false}, partiel = {hauteur: false};
	cadreVisible.yMin = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
	cadreVisible.yMax = window.pageYOffset + window.innerHeight || document.documentElement.scrollTop + document.documentElement.clientHeight || document.body.scrollTop + document.body.clientHeight;
	elementVisible.yMin = source.offsetTop;
	while(sourceParent) {
		elementVisible.yMin += sourceParent.offsetTop;
		sourceParent = sourceParent.offsetParent;
	}
	elementVisible.yMax = elementVisible.yMin + source.offsetHeight;
	if(cadreVisible.yMin <= elementVisible.yMin && cadreVisible.yMax >= elementVisible.yMax){
		total.hauteur = true;
	}
	else if(!(cadreVisible.yMax < elementVisible.yMin || cadreVisible.yMin > elementVisible.yMax)){
		partiel.hauteur = true;
	}

	if(partiel.hauteur){
		navbar.classList.add('fixed');
	}
	else if (total.hauteur){
		navbar.classList.remove('fixed');
	}
}

window.addEventListener("scroll", () => {
	if(window.pageYOffset >= 400) {
        estVisible("nav");
    }
});

window.addEventListener("resize", () => {
	navbarHeight = navbar.offsetHeight;
	estVisible("nav");
});


