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
    const route = this.backgrounds[pathname] || this.backgrounds[404];
    fetch(route).then((background) => {
      document
        .querySelector("body")
        .setAttribute("style", `background-image: url(${background.url})`);
    });
  }
}
