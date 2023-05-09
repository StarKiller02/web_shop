
/*----klik menu----*/

const menu = document.querySelector('.menu');
const burgerBtn = document.querySelector('.burger');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    menu.classList.toggle('active');
});

/*----klik kosz----*/

const shop = document.querySelector('.shop');
const burger_shop = document.querySelector('.burger_shop');
const burger_shop_deskop = document.querySelector('.burger_shop_deskop');

burger_shop.addEventListener('click', () => {
    shop.classList.toggle('active');
});

burger_shop_deskop.addEventListener('click', () => {
    shop.classList.toggle('active');
    search.classList.remove('active');
    delate_search.classList.toggle('active');
});

/*----klik search----*/

const search = document.querySelector('.search_deskop');

const burger_search_deskop = document.querySelector('.burger_search_deskop');

burger_search_deskop.addEventListener('click', () => {
    search.classList.toggle('active');
    shop.classList.remove('active');
    delate.classList.toggle('active');
    
});

/*----rozmycie tła ---*/

const search_deskop = document.querySelector('.burger_search_deskop');
const burger_shop_deskop_blur = document.querySelector('.burger_shop_deskop');

search_deskop.addEventListener('click', () => {
    toggleBlursearch();
    toggleBlurclear();
});

burger_shop_deskop_blur.addEventListener('click', () => {
    toggleBlur();
    toggleBlursearchclear();
});
const blur = document.querySelector('.blur');
const footer = document.querySelector('footer');

function toggleBlur() {
    blur.classList.toggle('active_blur');
    footer.classList.toggle('active_blur');
    delate.classList.toggle('active');
}

function toggleBlursearch() {
    blur.classList.toggle('active_blur_search');
    footer.classList.toggle('active_blur_search');
    delate_search.classList.toggle('active');
}

function toggleBlurclear() {
    blur.classList.remove('active_blur');
    footer.classList.remove('active_blur');
    delate.classList.remove('active');

}

function toggleBlursearchclear() {
    blur.classList.remove('active_blur_search');
    footer.classList.remove('active_blur_search');
    delate_search.classList.remove('active');

}
/*-----usuwanie---*/
const delate = document.querySelector('.delate');

delate.addEventListener('click', () => {
    delate_menu();
    delate_bluer();
});

function delate_menu() {
    shop.classList.remove('active');
    search.classList.remove('active');
    delate.classList.remove('active');
}

function delate_bluer() {
    blur.classList.remove('active_blur');
    footer.classList.remove('active_blur');
    blur.classList.remove('active_blur_search');
    footer.classList.remove('active_blur_search');
  
}

const delate_search = document.querySelector('.delate_search');

delate_search.addEventListener('click', () => {
    delate_search_menu();
    delate_search_bluer();
});

function delate_search_menu() {
    shop.classList.remove('active');
    search.classList.remove('active');
    delate_search.classList.remove('active');
}

function delate_search_bluer() {
    blur.classList.remove('active_blur');
    footer.classList.remove('active_blur');
    blur.classList.remove('active_blur_search');
    footer.classList.remove('active_blur_search');
  
}




/*-----nowosci slide---*/

// piter
// telefon mniej nij 768px
// tablet maly laptop niej niz 1024px
// maly laptop 1440px
// chuj wie 1920px


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";

}


