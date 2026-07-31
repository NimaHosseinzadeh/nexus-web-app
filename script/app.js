// Base Test
const headerTheme  = document.querySelector('.header__util-btn--theme')
const headerToggle = document.querySelector('.header__toggle-icon') 
const headerMenu   = document.querySelector('.header__menu') 

headerTheme.addEventListener('click' , ()  => document.body.classList.toggle('dark'))

headerToggle.addEventListener('click' , () => headerMenu.classList.toggle('d-flex'))