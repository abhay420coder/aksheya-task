/* empty css                         */
import { c as createComponent, r as renderTemplate, e as renderSlot, g as renderComponent, k as renderHead } from '../astro_BfYY1A59.mjs';
import 'kleur/colors';
import 'html-escaper';
import $$Home from './Home_D9edGHMX.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>AKESHYA</title><link rel="icon" type="image/png" href="/src/assets/img/favicon2.png"><link rel="apple-touch-icon" type="image/png" href="/src/assets/img/favicon2.png"><meta name="description" content="We are Akeshya, a firm that specializes in web design and marketing. We help transform ideas into reality with a team of passionate graphic designers, web developers, and seasoned marketing advisors."><meta name="keywords" content="akeshya,webdevlopment,digitalmarketing"><!-- CSS Files --><!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"> --><link rel="stylesheet" href="/src/styles/global.css"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"><link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"><!-- <link rel="stylesheet" href="bower_components/aos/dist/aos.css" /> -->', "</head> <body> ", " ", ' <!-- <script src="/src/scripts/scroll.js"><\/script> --> <!-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"><\/script> --> <!-- <script src="bower_components/aos/dist/aos.js"><\/script>  -->   </body> </html> '])), renderHead(), renderComponent($$result, "Home", $$Home, {}), renderSlot($$result, $$slots["default"]));
}, "C:/Users/Abhay Kumar/Downloads/akeshya.com/Project/src/layouts/Layout.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {})}`;
}, "C:/Users/Abhay Kumar/Downloads/akeshya.com/Project/src/pages/index.astro", void 0);

const $$file = "C:/Users/Abhay Kumar/Downloads/akeshya.com/Project/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
