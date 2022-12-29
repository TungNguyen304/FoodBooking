$(document).ready(function(){
    $('.slide__list').slick({
        centerMode: true,
        centerPadding: '60px',
        infinity: false,
        slidesToShow: 3,
        slideToScroll: 1,
        focusOnSelect: true,
        variableWidth: true,
        dots: true,
        arrow: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                arrows: true,
                centerMode: true,
              }
            }
          ]
      });
})

function handleActiveNavItem() {
    const nav__list = document.querySelectorAll(".nav__list");
    nav__list.forEach((item) => {
      const list = item.querySelectorAll("ul li");
      list.forEach((nav) => {
        nav.onclick = () => {
          list.forEach((nav2) => {
            nav2.classList.remove("active");
          });
          nav.classList.add("active");
        };
      });
    });
  }
  
  function handleShowMenuMobi() {
    const menuIcon = document.querySelector(".nav__icon");
    const menu__mobi = document.querySelector(".menu__mobi");
    const wrap_menu__mobi = document.querySelector(".wrap_menu__mobi");
    const close = document.querySelector(".wrap_menu__mobi div ul div");
    if (menuIcon) {
      menuIcon.onclick = () => {
        console.log(1);
        menu__mobi.style.display = "block";
        menu__mobi.style.opacity = "1";
        wrap_menu__mobi.style.right = "0%";
      };
    }
    if (close)
      close.onclick = () => {
        menu__mobi.style.opacity = "0";
        wrap_menu__mobi.style.right = "100%";
        menu__mobi.style.display = "none";
      };
  }
  
  handleActiveNavItem();
  handleShowMenuMobi();
  