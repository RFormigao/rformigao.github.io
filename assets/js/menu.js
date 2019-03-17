/*!
 * webportfolio
 * Web Portfolio
 * https://github.com/RFormigao/web-portfolio
 * @author Robson Formigão
 * @version 1.0.0
 * Copyright 2018. MIT licensed.
 */
(function () {

  'use strict';

  var $buttonMenu = document.querySelector('[data-menu="buttonMenu"]');
  var $linkMenu = document.querySelectorAll('[data-menu="linkMenu"]');
  var $menuMobile = document.querySelector('[data-menu="navMobile"]');


  if ($buttonMenu) {
    $buttonMenu.addEventListener('click', function() {
      $menuMobile.classList.toggle('nav_mobile');
    }, false);
  }

  if ($linkMenu) {
    Array.prototype.map.call($linkMenu, function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        var id = '#' + this.href.split('#').pop();
        var height = $menuMobile.offsetHeight + 60;
        window.scroll({
          top: document.querySelector(id).offsetTop - height,
          left: 0,
          behavior: 'smooth'
         });
      })
    })
  }

})();
