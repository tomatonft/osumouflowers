'use strict';

{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');
  const links = document.querySelectorAll("div.overlay a");

  open.addEventListener('click', () => {
   overlay.classList.add('show');
   open.classList.add('hide');

  });

  close.addEventListener('click', () => {
   overlay.classList.remove('show');
   open.classList.remove('hide');
  });

  document.querySelectorAll('div.overlay a')[0].addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
  document.querySelectorAll('div.overlay a')[1].addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
  document.querySelectorAll('div.overlay a')[2].addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
  document.querySelectorAll('div.overlay a')[3].addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
  document.querySelectorAll('div.overlay a')[4].addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
  document.querySelectorAll('div.overlay a')[5].addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
  // document.querySelectorAll('div.overlay a')[6].addEventListener('click', () => {
  //   overlay.classList.remove('show');
  //   open.classList.remove('hide');
  // });

  
   
}