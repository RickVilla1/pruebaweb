class Euros {
  static buildView() {
    const newContentView = /*html*/ `
    <div id="ContentForm">
    <div>
        <span>¿Qué desea conocer? </span><a onclick="RouteManager.NavigateTo(EurosPrecioDia)">Precio del día</a
        ><span> o </span><a>Cambio del Mes</a>
    </div></div>`;
    return new DOMParser().parseFromString(newContentView, "text/html").body
      .firstElementChild;
  }
}

window.Euros = Euros;
