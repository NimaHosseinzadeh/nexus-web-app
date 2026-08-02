// Get Elements 
const headerLogo       = document.querySelector('.header__logo');
const headerMenu       = document.querySelector('.header__menu');
const headerTheme      = document.querySelector('.header__util-btn--theme')
const headerToggle     = document.querySelector('.header__toggle-icon') 

// Header logo configuration and rendering
const logoData = {
    src : 'img/Logo.svg' ,
    className : 'header__logo-img' ,
    alt : 'Nexus Logo'
}

// Insert logo image into the DOM
headerLogo.insertAdjacentHTML('beforeend' , `<img src="${logoData.src}" class="${logoData.className}" alt="${logoData.alt}"/>`)

// Db Menu
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
            { id: 20, title: 'Web Design 1', link: '#' } ,
            { id: 21, title: 'Web Design 2', link: '#' } ,
        ]
    },
    {
        id: 3,
        title: 'Works',
        link: '#',
        hasDropdown: true,
        submenu: [
            { id: 30, title: 'Web Design 1', link: '#' } ,
            { id: 31, title: 'Web Design 2', link: '#' } ,
            { id: 32, title: 'Web Design 3', link: '#' } ,
            { id: 33, title: 'Web Design 4', link: '#' } ,
        ]
    },
    {
        id: 4,
        title: 'News',
        link: '#',
        hasDropdown: true,
        submenu: [
            { id: 34, title: 'Web Design 1', link: '#' } ,
            { id: 35, title: 'Web Design 2', link: '#' } ,
            { id: 36, title: 'Web Design 3', link: '#' } ,
            { id: 37, title: 'Web Design 4', link: '#' } , 
            { id: 38, title: 'Google', link: 'https://google.com' } ,
        ]
    }
]

// Create Item Menu
menuData.forEach(data => {
    let subItems = ''

    // Sub Menu
    if(data.hasDropdown){
        subItems = data.submenu.map(sub => `
            <li class="header__dropdown-item">
                <a class="header__dropdown-link" href="${sub.link}">${sub.title}</a>
                </li>
            `).join('')
    }

    // Main Menu
    headerMenu.insertAdjacentHTML('beforeend', `
    <li class="header__menu-item ${data.hasDropdown ? 'header__menu-item--has-dropdown' : ''}" tabindex="0">
        <a class="header__menu-link" href="${data.link}">
            ${data.title}
            ${data.hasDropdown ? `<i class="ri-arrow-down-s-line header__dropdown-icon"></i>` : ''}
        </a>
        ${data.hasDropdown ? `<ul class="header__dropdown">${subItems}</ul>` : ''}
    </li> `)
})

// Change Theme 
headerTheme.addEventListener('click' , ()  => document.body.classList.toggle('dark'))

headerToggle.addEventListener('click' , () => {
    headerMenu.classList.toggle('d-flex')

    headerToggle.classList.toggle('ri-menu-line');
    headerToggle.classList.toggle('ri-close-line');
})


