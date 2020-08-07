'use strict';
//aos
AOS.init({
    duration: 1000,
    offset: 0,
    once: true
});

//document.getElementsByClassName('title')[].setAttribute('data-aos', 'fade-right');

// let title = document.getElementsByClassName('title');
// for (let i = 0; i < title.length; i++) {
//     title[i].dataset.aos = "fade-right";
// }


// for OverflowEvent position: fixed; 
// let topOffset = 0;
// const hideOverflow = () => {
//     topOffset = window.scrollY;
//     body.style.cssText = `position: fixed; margin-top: ${-topOffset}px;`
// };

// const showOverflow = () => {
//     body.style.cssText = `position: static; margin-top: 0;`
//     window.scrollTo(0, topOffset);
// };

// for buger
const burgerEl = document.getElementById('myBurger');
const collapse = document.getElementById('navbarCollapse');
const body = document.body;
window.addEventListener('resize', () => {
    let windowWidth = document.body.clientWidth;
    if (windowWidth <= 991) {
        collapse.classList.add('o-none');
    } else {
        collapse.classList.remove('o-none');
    }
});
burgerEl.addEventListener('click', () => {
    burgerEl.classList.toggle('show');

    if (burgerEl.classList.contains('show')) {
        collapse.classList.remove('collapse-close');

        // topOffset = window.scrollY;
        // body.style.cssText = `position: fixed; margin-top: ${-topOffset}px;`

        //body.hideOverflow;
        body.classList.add('o-hidden');
    } else {
        body.classList.remove('o-hidden');
        collapse.classList.add('collapse-close');
        collapse.classList.remove('o-none');
        // body.style.cssText = `position: static; margin-top: 0;`
        // window.scrollTo(0, topOffset);
    }
});

// for links
for (let i = 0; i < document.links.length; i++) {
    if (document.links[i].href == document.URL) {
        document.links[i].className += ' current';
    }
};
// for header
let header = document.getElementById('header');
let headerH = header.offsetHeight - 50;
let scrollPos = window.pageYOffset;
let fixheader = function() {
    scrollPos = window.pageYOffset;
    if (scrollPos > headerH) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
}
window.addEventListener('load', fixheader, false);
window.addEventListener('scroll', fixheader, false);
window.addEventListener('resize', fixheader, false);
// for srollTop
let moveTop = document.getElementById('movetop')
moveTop.addEventListener('click', function() {
    const scrollToTop = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, c - c / 9);
        }
    };
    scrollToTop();
})

let scroltop = function() {
    if (document.body.scrollTop > 44 || document.documentElement.scrollTop > 44) {
        document.getElementById('movetop').style.display = "flex";
    } else {
        document.getElementById('movetop').style.display = "none";
    }
};
window.addEventListener('load', scroltop, false);
window.addEventListener('scroll', scroltop, false);
window.addEventListener('resize', scroltop, false);












// const fist = document.getElementById('fist');
// window.addEventListener('scroll', function() {
//     let pos = 0;
//     let endPos = screen.width;
//     let interval = setInterval(frame, 5);

//     function frame() {
//         if (pos == endPos) {
//             clearInterval(interval);
//         } else {
//             pos++;
//             fist.style.left = pos + 'px';
//         }
//     }
// })


// const heartEl = document.getElementsByClassName('add__wishlist');
// [].forEach.call(heartEl, function(el) {
//     el.addEventListener('click', function() {
//         el.classList.toggle('added');
//     });
// });












// window.addEventListener('scroll', function() {
//     scrollPos = window.pageYOffset;
//     if (scrollPos > headerH) {
//         header.classList.add('fixed');
//     } else {
//         header.classList.remove('fixed');
//     }
// });
// window.addEventListener('load', function() {
//     scrollPos = window.pageYOffset;
//     if (scrollPos > headerH) {
//         header.classList.add('fixed');
//     } else {
//         header.classList.remove('fixed');
//     }
// });

// function burger() {
//     let element, name, arr;
//     element = document.getElementById('myBurger');
//     name = 'show';
//     arr = element.className.split(' ');
//     if (arr.indexOf(name) === -1) {
//         element.className += ' ' + name;
//         document.body.style.overflow = 'hidden';
//     } else {
//         element.className = element.className.replace(' ' + name, '');
//         document.body.removeAttribute('style');
//     }
// }

// var active = 0;
// for (var i = 0; i < document.links.length; i++) {
//     if (document.links[i].href === document.URL) {
//         active = i;
//     }
// }

// console.log(screen.height, screen.width);
// console.log(screen.availWidth, screen.availHeight);
// console.log(navigator);