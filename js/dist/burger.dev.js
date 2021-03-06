"use strict";

// let btn1 = document.getElementById('btn1');
// btn1.addEventListener("click", function () {
// 	btn1.classList.toggle('orange');
// });
// let btn2 = document.getElementById('btn2');
// btn2.addEventListener("click", function () {
// 	btn2.classList.toggle('orange');
// });
// let btn3 = document.getElementById('btn3');
// btn3.addEventListener("click", function () {
// 	btn3.classList.toggle('orange');
// });
// var bindAll = function () {
// 	var menuElements = document.querySelectorAll('[data-tab]');
// 	for (var i = 0; i < menuElements.length; i++) {
// 		menuElements[i].addEventListener('click', change, false);
// 	}
// }
// var clear = function () {
// 	var menuElements = document.querySelectorAll('[data-tab]');
// 	for (var i = 0; i < menuElements.length; i++) {
// 		menuElements[i].classList.remove('active');
// 		var id = menuElements[i].getAttribute('data-tab');
// 		document.getElementById(id).classList.remove('active');
// 	}
// }
// var change = function (e) {
// 	clear();
// 	e.target.classList.add('active');
// 	var id = e.currentTarget.getAttribute('data-tab');
// 	document.getElementById(id).classList.add('active');
// }
// bindAll();
$(function () {
  $('.menu-open').click(function () {
    $('.menu').addClass('show-menu');
  });
});