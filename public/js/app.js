import "./views/pages/Inicio.js";
import "./views/pages/Blog.js";
import "./views/pages/Ventas.js";
import "./views/Dolares.js";
import "./views/DolaresPrecioDia.js";
import "./views/Euros.js";
import "./views/EurosPrecioDia.js";
import "./views/SistemaCambios.js";
import "./core/RouteManager.js";
import "./core/Debug.js";

const pathname = window.location.pathname.replace(/\//g, "");
var className;
switch (pathname) {
  case "":
    className = "Inicio";
    break;
  case "blog":
    className = "Blog";
    break;
  case "ventas":
    className = "Ventas";
    break;
}

window[className].ViewPrerender =
  document.getElementById("LayoutView").parentElement.innerHTML;
ManagerHistory.pushState(className);
