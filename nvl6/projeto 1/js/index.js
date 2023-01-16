import { Router } from "./router.js";
import { Background } from "./background.js";

const router = new Router();
const background = new Background();

router.add("/", "/pages/home.html");
router.add("/universo", "/pages/universo.html");
router.add("/exploracao", "/pages/exploracao.html");
router.add(404, "/pages/404.html");

router.handle();

background.add("/", "./assets/mountains-universe-1.png");
background.add("/universo", "./assets/mountains-universe-2.png");
background.add("/exploracao", "./assets/mountains-universe-3.png");
background.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();
