export class Background {
  backgrounds = {};
  add(routeName, background) {
    this.backgrounds[routeName] = background;
  }
  background(event) {
    event = event || window.event;
    event.preventDefault();

    window.history.pushState({}, "", event.target.href);

    this.handle();
  }
  handle() {
    const { pathname } = window.location;
    const background = this.backgrounds[pathname] || this.backgrounds[404];
    fetch(background).then((html) => {
      console.log(html);
      document
        .querySelector("body")
        .setAttribute("style", `background-image: url(${html.url})`);
    });
  }
}
