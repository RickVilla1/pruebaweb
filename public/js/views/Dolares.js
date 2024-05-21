class Dolares {
    static buildView() {
        const newContentView = /*html*/ `<div id="ContentForm"> 
        <span>Operar con dólares:</span>
        <br>
    <div>
        <span>¿Qué desea conocer? </span><a onclick="RouteManager.NavigateTo(DolaresPrecioDia)">Precio del día</a
        ><span> o </span><a>Cambio del Mes</a>
    </div></div>`;
        return new DOMParser().parseFromString(newContentView, "text/html").body
            .firstElementChild;
    }
}

window.Dolares = Dolares;
