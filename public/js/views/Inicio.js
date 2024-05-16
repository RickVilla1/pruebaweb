class Inicio {
    static buildView() {
        const newContentView = /* html*/ `<div id="ParentView">
        <span>Bienvenido: Desea operar con </span
        ><a onclick="RouteManager.NavigateTo(Dolares)"
            >Dólares</a
        ><span> o </span><a onclick="RouteManager.NavigateTo(Euros)">Euros</a><span>?</span>
    </div>`;
        return new DOMParser().parseFromString(newContentView, "text/html").body
            .firstElementChild;
    }
}

window.Inicio = Inicio;
