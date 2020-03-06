function Dropdown(element) {
    this.element = document.querySelector(element);

    this.element.onclick = () => {
        this.toggle();
    }

    Dropdown.prototype.toggle = function() {
        this.element.classList.toggle("is-active");
    }
}

let dropdown1 = new Dropdown(".js_dropdown1");
let dropdown2 = new Dropdown(".js_dropdown2");
let dropdown3 = new Dropdown(".js_dropdown3");
let dropdown4 = new Dropdown(".js_dropdown4");
let dropdown5 = new Dropdown(".js_dropdown5");
let dropdown6 = new Dropdown(".js_dropdown6");
let dropdown7 = new Dropdown(".js_dropdown7");
let dropdown8 = new Dropdown(".js_dropdown8");