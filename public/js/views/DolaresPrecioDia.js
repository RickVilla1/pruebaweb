class DolaresPrecioDia {
    static buildView() {
        const newContentView = /*html*/`<div id="ContentForm">
            <div>
                <span>El precio del día es 3.73 Soles.</span><br><span>Díganos: ¿Desea </span><a>Comprar</a
                ><span> o </span><a>Vender</a><span>?</span>
            </div>
        </div>`;
        return new DOMParser().parseFromString(newContentView, "text/html").body
            .firstElementChild;
    }
}

window.DolaresPrecioDia = DolaresPrecioDia;
