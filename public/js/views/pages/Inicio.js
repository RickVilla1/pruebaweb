class Inicio {
    static ViewPrerender;
    static buildView() {
        const newContentView = Inicio.ViewPrerender;
        return new DOMParser().parseFromString(newContentView, "text/html").body
            .firstElementChild;
    }
}

window.Inicio = Inicio;
