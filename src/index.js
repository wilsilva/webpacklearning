'use strict'

import css from './styles/main.css';
import Notification from './Notification';
import HTML from './HTML';

let html = new HTML('test');
let notification = new Notification;
let date = new Date;

html.injectDataById('Hello ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()).styleFontColor("#000");
notification.log('Hello World');
