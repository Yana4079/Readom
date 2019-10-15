function setCollectionInnerHtml(classNameSelector, innerHtml) {
    var collection = document.getElementsByClassName(classNameSelector)
    for (var i = 0; i < collection.length; i++) {
        collection[i].innerHTML = innerHtml;
    }
}

function showFeedbackForm() {
    document.getElementById('feedback-form').style.display = "flex";
    document.getElementById('fixed__footer').style.display = "none";
    console.log("Привет");
}
function hideFeedbackForm() {
    document.getElementById('feedback-form').style.display = "none";
    document.getElementById('fixed__footer').style.display = "flex";
    console.log("Привет");
}

$(document).ready(function () {

    $('a[data-target^="anchor"]').bind('click.smoothscroll', function () {
        var target = $(this).attr('href'),
            bl_top = $(target).offset().top - 250;
        $('body, html').animate({ scrollTop: bl_top }, 700);
        return false;
    });
    // date refresh
    var heroDate = document.querySelector('.hero__day'),
        d = new Date(),
        nowDate = d.getDate() + 3,
        month = new Array("Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"),
        nowMonth = month[d.getMonth()];
    
    setCollectionInnerHtml('hero__month', nowMonth);          
    setCollectionInnerHtml('hero__day', nowDate);
});



var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 40,
    grabCursor: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        700: {
            slidesPerView: 1,
            spaceBetween: 10,
            autoHeight: true,
        }
    }
});

let footerVisible = false;
window.onscroll = function(ev) {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        if (footerVisible) {
            document.getElementById('fixed__footer').style.opacity = "0";
            footerVisible = false;
        }
    } else {
        if (!footerVisible) {
            document.getElementById('fixed__footer').style.opacity = "1";
            footerVisible = true;
        }
    }
};

$("a").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    $('html, body').animate({ scrollTop: destination }, 1500);
    return false;
});

var count = 15;
var target = 5;
var timer = setInterval(function () {
    count -= Math.floor(Math.random() * 4);
    if (count <= target) {
        count = target;
        clearInterval(timer);
    }
    setCollectionInnerHtml('seconds', count);
}, 20000);
