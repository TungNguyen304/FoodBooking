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
        focusOnSelect: true,
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
        menu__mobi.style.display = "block";
        menu__mobi.style.animation = "showUp 0.6s";
        wrap_menu__mobi.style.animation = "growthUp 0.6s";
        wrap_menu__mobi.style.right = "0px";
        
      };
    }
    if (close)
      close.onclick = () => {
        menu__mobi.style.animation = "showDown 0.6s";
        wrap_menu__mobi.style.right = "100%";
        wrap_menu__mobi.style.animation = "growthDown 0.6s";
        setTimeout(() => {
          menu__mobi.style.display = "none";
        }, 600)
      };
  }
  
  handleActiveNavItem();
  handleShowMenuMobi();
  