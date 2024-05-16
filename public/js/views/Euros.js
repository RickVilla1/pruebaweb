class Euros {
  static buildView() {
    const newContentView = /*html*/ `
    <div id="ParentView">
    <div>
        <span>Contenido del Link</span>
    </div></div>`;
    return new DOMParser().parseFromString(newContentView, "text/html").body
      .firstElementChild;
  }
}

window.Euros = Euros;
