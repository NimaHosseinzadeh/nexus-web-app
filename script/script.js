// ==========================================
// 1. DOM Elements Selection (In HTML order)
// ==========================================
const headerPrimary = document.querySelector('.header__primary');
const headerLogo    = document.querySelector('.header__logo');
const headerMenu    = document.querySelector('.header__menu');
const headerUser    = document.querySelector('.header__user');
const headerUtility = document.querySelector('.header__utility');
const headerAuth    = document.querySelector('.header__auth');


// ==========================================
// 2. Header Logo Configuration & Rendering
// ==========================================
const logoData = {
  src: 'img/Logo.svg',
  className: 'header__logo-img',
  alt: 'Nexus Logo'
};

// Render logo element into DOM
headerLogo.insertAdjacentHTML(
  'beforeend',
  `<img src="${logoData.src}" class="${logoData.className}" alt="${logoData.alt}"/>`
);

// ==========================================
// 3. Navigation Data Structure (Mock DB)
// ==========================================
const menuData = [
  {
    id: 1,
    title: 'Home',
    link: '#',
    hasDropdown: false
  },
  {
    id: 2,
    title: 'Service',
    link: '#',
    hasDropdown: true,
    submenu: [
      { id: 20, title: 'Web Design 1', link: '#' },
      { id: 21, title: 'Web Design 2', link: '#' }
    ]
  },
  {
    id: 3,
    title: 'Works',
    link: '#',
    hasDropdown: true,
    submenu: [
      { id: 30, title: 'Web Design 1', link: '#' },
      { id: 31, title: 'Web Design 2', link: '#' },
      { id: 32, title: 'Web Design 3', link: '#' },
      { id: 33, title: 'Web Design 4', link: '#' }
    ]
  },
  {
    id: 4,
    title: 'News',
    link: '#',
    hasDropdown: true,
    submenu: [
      { id: 34, title: 'Web Design 1', link: '#' },
      { id: 35, title: 'Web Design 2', link: '#' },
      { id: 36, title: 'Web Design 3', link: '#' },
      { id: 37, title: 'Web Design 4', link: '#' },
      { id: 38, title: 'Google', link: 'https://google.com' }
    ]
  }
];

// ==========================================
// 4. Dynamic Menu Rendering
// ==========================================
menuData.forEach((data) => {
  let subItems = '';

  // Render Submenu items if available
  if (data.hasDropdown) {
    subItems = data.submenu
      .map(
        (sub) => `
        <li class="header__dropdown-item">
            <a class="header__dropdown-link" href="${sub.link}">${sub.title}</a>
        </li>
    `
      )
      .join('');
  }

  // Render Main Menu items with conditional submenus into DOM
  headerMenu.insertAdjacentHTML(
    'beforeend',
    `
    <li class="header__menu-item ${data.hasDropdown ? 'header__menu-item--has-dropdown' : ''}" tabindex="0">
        <a class="header__menu-link" href="${data.link}">
            ${data.title}
            ${data.hasDropdown ? `<i class="ri-arrow-down-s-line header__dropdown-icon"></i>` : ''}
        </a>
        ${data.hasDropdown ? `<ul class="header__dropdown">${subItems}</ul>` : ''}
    </li> `
  );
});

// ==========================================
// 5. User Profile Configuration & Rendering
// ==========================================
const profileUser = {id : 1 , src : 'img/team4.png', className : 'header__user-img' , alt : 'user'}

headerUser.insertAdjacentHTML('beforeend' , `<img class="${profileUser.className}" src="${profileUser.src}" alt="${profileUser.alt}">`)

// ==========================================
// 6. Utility Tools Data & Rendering (Language & Theme)
// ==========================================

const utilityToolsData = [
    {id : 1 , className : 'header__util-btn header__util-btn--lang' , iconClass: 'ri-global-line header__util-icon'},
    {id : 2 , className : 'header__util-btn header__util-btn--theme' , iconClass: 'ri-moon-clear-line header__util-icon'}
];

utilityToolsData.forEach(item => headerUtility.innerHTML += `<button class="${item.className}"><i class="${item.iconClass}"></i></button>`);

const headerTheme = document.querySelector('.header__util-btn--theme');

// ==========================================
// 7. Toggle Button Configuration & Rendering
// ==========================================
const toggleBtnData = {className : 'header__toggle-btn' ,  id :'menuToggle' , ariaLabel : 'Toggle Menu' , iconClass: 'ri-menu-line header__toggle-icon'};

headerPrimary.insertAdjacentHTML('beforeend' , `
    <button
        class="${toggleBtnData.className}"
        id="${toggleBtnData.id}"
        aria-label="${toggleBtnData.ariaLabel}">
        <i class="${toggleBtnData.iconClass}"></i>
    </button>
    `)

const menuToggleBtn = document.querySelector('#menuToggle');
// ==========================================
// 8. Event Listeners & UI Interactions
// ==========================================

// Toggle Mobile Navigation Menu & Icon State
menuToggleBtn.addEventListener('click', () => {
  const toggleIcon = menuToggleBtn.querySelector('.header__toggle-icon');

  headerMenu.classList.toggle('d-flex');

  // Switch between hamburger and close icons
  toggleIcon.classList.toggle('ri-menu-line');
  toggleIcon.classList.toggle('ri-close-line');
});

// Toggle Light / Dark Theme Mode
headerTheme.addEventListener('click', () =>
  document.body.classList.toggle('dark')
);

// ==========================================
// 9. Event Listeners Auth Buttons
// ==========================================
const headerAuthButtons = [
    {id : 1 , className : 'btn btn--outline btn--login' , type : 'button', text : 'Log In' } ,
    {id : 2 , className : 'btn btn--primary btn--signup' , type : 'button', text : 'Sign Up' }
];

headerAuthButtons.forEach(item => headerAuth.innerHTML += `<button class="${item.className}" type="${item.type}">${item.text}</button>`)



