const cards = [
  {
    id: 1,
    liveUrl: 'https://musong-furniture-store.netlify.app/',
    sourseUrl: 'https://github.com/ernestmusong/React-House-Furniture-Store',
    img: 'images/works-images/furniture-store.png',
    name: 'furniture store',
    desc: `An E-commerce Web App that enables users to buy online with the
    following features: Add cart items, Remove cart items, Clear cart,
    Calculate tax, Sub totals, and totals.`,
    technologies: ['React', 'Redux', 'Bootstrap'],
    skillsImg: 'images/icon-languages.png',
    desktopPopUpClose: 'images/desktop-popup-close.png',
    mobilePopUpClose: 'images/close-detail.png',
    seeLiveIcon: 'images/see-live.png',
    seeSourceIcon: 'images/see-source.png',
  },
  {
    id: 2,
    liveUrl: 'https://musong-furniture-store.netlify.app/',
    sourseUrl: 'https://github.com/ernestmusong/React-House-Furniture-Store',
    img: 'images/works-images/furniture-store.png',
    name: 'furniture store',
    desc: `An E-commerce Web App that enables users to buy online with the
    following features: Add cart items, Remove cart items, Clear cart,
    Calculate tax, Sub totals, and totals.`,
    technologies: ['React', 'Redux', 'Bootstrap'],
    skillsImg: 'images/icon-languages.png',
    desktopPopUpClose: 'images/desktop-popup-close.png',
    mobilePopUpClose: 'images/close-detail.png',
    seeLiveIcon: 'images/see-live.png',
    seeSourceIcon: 'images/see-source.png',
  },
  {
    id: 3,
    liveUrl: 'https://musong-furniture-store.netlify.app/',
    sourseUrl: 'https://github.com/ernestmusong/React-House-Furniture-Store',
    img: 'images/works-images/furniture-store.png',
    name: 'furniture store',
    desc: `An E-commerce Web App that enables users to buy online with the
    following features: Add cart items, Remove cart items, Clear cart,
    Calculate tax, Sub totals, and totals.`,
    technologies: ['React', 'Redux', 'Bootstrap'],
    skillsImg: 'images/icon-languages.png',
    desktopPopUpClose: 'images/desktop-popup-close.png',
    mobilePopUpClose: 'images/close-detail.png',
    seeLiveIcon: 'images/see-live.png',
    seeSourceIcon: 'images/see-source.png',
}
]

const displayCards = () => {
  
}

let menuItem = document.querySelector("#navmenu");
        let menutoggle = document.querySelector("#menutoggle")
        menuItem.style.maxHeight = "0px";
        function menuIcon() {
            if(menuItem.style.maxHeight == "0px") {
                menuItem.style.maxHeight = "300px";
            }
            else {menuItem.style.maxHeight = "0px"};
        }
        menutoggle.addEventListener("click", () => {
            menuIcon();
        })


        