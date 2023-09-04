const data = [
  {
    id: 1,
    liveUrl: 'https://musong-furniture-store.netlify.app/',
    sourseUrl: 'https://github.com/ernestmusong/React-House-Furniture-Store',
    img: 'images/logo.png',
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
    img: 'images/logo.png',
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
    img: 'images/logo.png',
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

const flexContainer = document.querySelector("#project");
const displayCards = (data) => {
  let result = "";
  data.map((item) => {
    let result2 = "";
    const {technologies} = item
 technologies.forEach((tech) => {
            result2 += `<li><button>${tech}</button></li>`;
    });

    result += `<div class="project">
    <div class="image-wrapper">
        <img class="project-img" src=${item.img} alt="project image">
    </div>
        <div class="project-footer">
        <div class="project-title-wrapper">
            <h4>${item.name}</h4>
        </div>
        <ul class="project-buttons-wrapper">
           ${result2}
        </ul>
          <button id=''   class="section-button project-btn"  >
              see project
          </button>
    </div>
</div>`
    return result
  });

  flexContainer.innerHTML = result;
  console.log(result);
  return result;
};

window.addEventListener("load", () => {
  displayCards(data);
});




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


        