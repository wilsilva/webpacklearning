'use strict'

export default class {

  constructor(identify){
    this.identify = identify;
  }

  injectDataById (data){
    this.element = document.getElementById(this.identify);
    this.element.innerHTML = data;
    return this;
  }

  styleFontColor(color){
    this.element.style.color = color;
  }
}
