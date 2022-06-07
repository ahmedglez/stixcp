function isElementTotallyVisible(id) {
    var anchoViewport = window.innerWidth || document.documentElement.clientWidth;
    var alturaViewport = window.innerHeight || document.documentElement.clientHeight;
    //Posición de la caja del elemento
    var caja = document.getElementById(id).getBoundingClientRect();

    if (caja.top >= 0 &&
        caja.bottom <= alturaViewport &&
        caja.left >= 0 &&
        caja.right <= anchoViewport) {
        alert(caja)
    }
}

export default isElementTotallyVisible