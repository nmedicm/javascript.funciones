const ele = document.getElementById("ele1");
ele.setAttribute("style", "background-color:green")

const pintar = function (ele, color) {
    ele.setAttribute("style", "background-color:" + color)
}
ele.addEventListener("click", (event) => pintar(ele, "yellow"))
