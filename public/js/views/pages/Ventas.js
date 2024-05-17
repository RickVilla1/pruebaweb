class Ventas {
    static ViewPrerender;
    static buildView() {
        const newContentView = Ventas.ViewPrerender;
        return new DOMParser().parseFromString(newContentView, "text/html").body
            .firstElementChild;
    }
}

window.Ventas = Ventas;