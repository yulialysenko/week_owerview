$(document).ready(function() {
    var currentDate = new Date();
    var currentDay = currentDate.getDay();
    var normalDays = [];
    data = [{
        "offerday": 0,
        "id": "weekend",
        "title": "Avance Collection Juicer",
        "tagline2": "Offer for Saturday/Sunday",
        "articlenumber": "HR1870/70",
        "origprice": "109.99",
        "newprice": "99.99",
        "valuta": "€",
        "valutasep": ",",
        "valutaleft": "left",
        "feedname": "img/"
    }, {
        "offerday": 1,
        "id": "monday",
        "title": "Satinelle Essential Compact epilator",
        "tagline2": "Offer for Monday",
        "articlenumber": "HR1870/70",
        "origprice": "109.99",
        "newprice": "99.99",
        "valuta": "€",
        "valutasep": ",",
        "valutaleft": "left",
        "feedname": "img/"
    }, {
        "offerday": 2,
        "id": "tuesday",
        "title": "Conical Curler",
        "tagline2": "Offer for Tuesday",
        "articlenumber": "HR1870/70",
        "origprice": "109.99",
        "newprice": "9.99",
        "valuta": "€",
        "valutasep": ",",
        "valutaleft": "left",
        "feedname": "img/"
    }, {
        "offerday": 3,
        "id": "wednesday",
        "title": "Daily Collection Food processor",
        "tagline2": "Offer for Wednesday",
        "articlenumber": "HR1870/70",
        "origprice": "109.99",
        "newprice": "5.99",
        "valuta": "€",
        "valutasep": ",",
        "valutaleft": "left",
        "feedname": "img/"
    }, {
        "offerday": 4,
        "id": "thursday",
        "title": "Grind & Brew Coffee maker",
        "tagline2": "Offer for Thursday",
        "articlenumber": "HR1870/70",
        "origprice": "159.99",
        "newprice": "135.99",
        "valuta": "€",
        "valutasep": ",",
        "valutaleft": "left",
        "feedname": "img/"
    }, {
        "offerday": 5,
        "id": "friday",
        "title": "Philips Sonicare FlexCare+ Sonic electric toothbrush",
        "tagline2": "Offer for Friday",
        "articlenumber": "HR1870/70",
        "origprice": "2009.99",
        "newprice": "999.99",
        "valuta": "€",
        "valutasep": ",",
        "valutaleft": "left",
        "feedname": "img/"
    }]


    if ($(window).width() < $('.total-container').width()) {
        $('.total-container').css('font-size', $(window).width() / 2 + 'px');
    } else {
        $('.total-container').css('font-size', $('.total-container').width() / 2 + 'px');
    }

    $(window).resize(function() {
        $('.total-container').css('font-size', $('.total-container').width() / 2 + 'px');
        console.log('resized');
    });


    function addAnimation($element, animationName, timeOut, isVisible, animationDuration) {
        if (animationDuration === undefined) {
            animationDuration = 1;
        }
        setTimeout(function() {
            $element.css({
                'visibility': isVisible,
                'animation-name': animationName,
                'animation-duration': animationDuration + 's'
            })
        }, timeOut)
    }

    function labelUp(element, right, top, width, timeOut) {
        setTimeout(function() {
            element.animate({
                'top': top,
                'width': width
            }, 300)
        }, timeOut)
    }

    function show(element, timeOut) {
        setTimeout(function() {
            element.css({
                'visibility': 'visible'
            })
        }, timeOut)
    }

    function hide(element, timeOut) {
        setTimeout(function() {
            element.css({
                'display': 'none'
            })
        }, timeOut)
    }

    function buildPrice(dayNumber, price) {
        var res = (data[dayNumber].valutaleft == 'left') ? data[dayNumber].valuta + price : price + data[dayNumber].valuta;
        res = res.replace('.', data[dayNumber].valutasep);
        return res.replace(',', data[dayNumber].valutasep);
    }

    function setSpecial() {
        $('div[day=' + currentDay + ']').addClass('special');
        var k = 1;
        for (var i = 0; i <= 5; i++) {
            if (i != currentDay) {
                normalDays[k - 1] = $('div[day=' + i + ']');
                k++;
            } else {
                continue;
            }
        }
    }

    function calculateDiscount(old, curr) {
        old = Math.ceil(old);
        curr = Math.ceil(curr);
        if (old < curr) return '0%';
        var save = old - curr;
        return '-' + Math.floor((100 * save) / old) + '%';
    }


    function rotateCard(productID, startTime) {
        addAnimation($(productID), 'rotate', startTime, 'visible');
        addAnimation($(productID + ' .day'), 'rotateEntity', +startTime + 200, 'visible');
        addAnimation($(productID + ' .item'), 'rotateEntity', +startTime + 200, 'visible');
        addAnimation($(productID + ' .item-name'), 'slideInUp', +startTime + 400, 'visible');
        addAnimation($(productID + ' .discount'), 'bounceIn', +startTime + 600, 'visible');
        addAnimation($(productID + ' .price'), 'slideInRight', +startTime + 600, 'visible', 0.7);
    }




    function animatePreLayout() {
        setTimeout(function() {
            addAnimation($('#letter-s'), 'bounceInDown', 0, 'visible');
            addAnimation($('#letter-a'), 'bounceInDown', 200, 'visible');
            addAnimation($('#letter-v'), 'bounceInDown', 400, 'visible');
            addAnimation($('#letter-e'), 'bounceInDown', 600, 'visible');
        }, 200);
        addAnimation($('#percent-label-1'), 'bounceInDown', 1400, 'visible');
        addAnimation($('#percent-label-2'), 'bounceInDown', 1600, 'visible');
        addAnimation($('#percent-label-3'), 'bounceInDown', 1800, 'visible');
        addAnimation($('#percent-label-4'), 'bounceInDown', 2000, 'visible');
        addAnimation($('#percent-label-5'), 'bounceInDown', 2200, 'visible');
        labelUp($('#letter-s'), '0.80388em', '-0.676em', '0.1276388em', 2400);
        labelUp($('#letter-a'), '0.697888em', '-0.62em', '0.1276388em', 2500);
        labelUp($('#letter-v'), '0.583888em', '-0.772em', '0.1276388em', 2600);
        labelUp($('#letter-e'), '0.475888em', '-0.688em', '0.1276388em', 2700);
        addAnimation($('#letter-s'), 'swing', 2500, 'visible');
        addAnimation($('#letter-a'), 'swing', 2600, 'visible');
        addAnimation($('#letter-v'), 'swing', 2700, 'visible');
        addAnimation($('#letter-e'), 'swing', 2800, 'visible');
    }

    function animateFirstLayout() {
        addAnimation($('.title-ribbon'), 'slideInLeft', 3000, 'visible', 0.5);
        addAnimation($('.title-ribbon p'), 'slideInLeft', 3100, 'visible', 0.5);
        addAnimation($('.star'), 'zoomIn', 3400, 'visible', 0.4);
        addAnimation($('.star'), 'spin', 3400, 'visible', 8);
        show($('.star-word'), 3600);

        addAnimation($('#monday'), 'zoomIn', 3000, 'visible');
        addAnimation($('#tuesday'), 'zoomIn', 3200, 'visible');
        addAnimation($('#wednesday'), 'zoomIn', 3400, 'visible');
        addAnimation($('#thursday'), 'zoomIn', 3600, 'visible');
        addAnimation($('#friday'), 'zoomIn', 3800, 'visible');
        addAnimation($('#weekend'), 'zoomIn', 4000, 'visible');

        rotateCard('#monday', 4200);
        rotateCard('#tuesday', 4400);
        rotateCard('#wednesday', 4600);
        rotateCard('#thursday', 4800);
        rotateCard('#friday', 5000);
        rotateCard('#weekend', 5200);


        addAnimation($('#note'), 'fadeIn', 5600, 'visible');
        addAnimation($('.week-ribbon'), 'zoomInDown', 5400, 'visible', 0.5);
        addAnimation($('.week-subribbon'), 'zoomInDown', 5600, 'visible', 0.5);
    }


    function animateSecondLayout() {
        setTimeout(function() {
            for (i = 0; i < normalDays.length; i++) {
                addAnimation(normalDays[i], 'shrink075', 5000, 'visible', 1.5);
            }
            addAnimation($('.special'), 'shrinkSpecial', 5000, 'visible', 1.5);
            addAnimation($('.week-ribbon'), 'shrink065', 5000, 'visible', 1.5);
            addAnimation($('.week-subribbon'), 'shrink065', 5000, 'visible', 1.5);
            addAnimation($('.special .discount'), 'enlarge15', 5500, 'visible', 1);
            addAnimation($('.special .price'), 'enlarge15', 5500, 'visible', 1);
            addAnimation($('.special .item'), 'enlarge18', 5500, 'visible', 1);
            addAnimation($('.special .day'), 'enlarge18', 5500, 'visible', 1);
            addAnimation($('.special .item-name'), 'enlarge18', 5500, 'visible', 1);
        }, 5000);



        setTimeout(function() {
            $('.special').animate({
                top: '0.16em',
                left: '0.56em',
                width: '1.4em',
                height: '0.6em'
            }, 1000);
            normalDays[1].animate({
                top: '0.46em',
                left: '0',
                transform: 'scale(0.75)'
            }, 1000);
            normalDays[2].animate({
                top: '0.76em',
                left: '0',
                transform: 'scale(0.75)'
            }, 1000);
            normalDays[3].animate({
                top: '0.76em',
                left: '0.488em',
                transform: 'scale(0.75)'
            }, 1000);
            normalDays[4].animate({
                top: '0.76em',
                left: '0.972em',
                transform: 'scale(0.75)'
            }, 1000);
            normalDays[0].animate({
                top: '0.76em',
                left: '1.452em',
                transform: 'scale(0.75)'
            }, 1000);
            setTimeout(function() {
                for (var i = 0; i < 5; i++) {
                    normalDays[i].css({
                        transform: 'scale(0.75)'
                    });
                }
            }, 500);
            $('.special .discount').addClass('second-layout-discount', 1000, 'linear');
            $('.special .price').addClass('second-layout-price', 1000, 'linear');
            $('.special .item').addClass('second-layout-item', 1000, 'linear');
            $('.special .day').addClass('second-layout-day', 1000, 'linear');
            $('.special .item-name').addClass('second-layout-item-name', 1000, 'linear');
            $('#note').addClass('second-layout-note', 1000, 'linear');
            $('.week-ribbon').addClass('second-layout-week-ribbon', 1000, 'linear');
            $('.week-subribbon').addClass('second-layout-week-subribbon', 1000, 'linear');
            setTimeout(function() {
                $('.special .price').animate({
                    bottom: '0.34em',
                    top: '0.16em'
                }, 500);
                addAnimation($('.special .qr'), 'slideInRight', 0, 'visible', .5);
            }, 2000);
        }, 10500);
    }



    function animateThirdLayout() {

        setTimeout(function() {
            addAnimation($('.special .price'), 'slideOutRight', 0, 'visible')
            hide($('.special .price'), 1000);
            addAnimation($('.special .qr'), 'slideOutRight', 0, 'visible');
            hide($('.special .qr'), 1000);
            addAnimation($('.second-layout-week-ribbon'), 'zoomOut', 0, 'hidden');
            hide($('.second-layout-week-ribbon'), 1000);
            addAnimation($('.second-layout-week-subribbon'), 'zoomOut', 0, 'hidden');
            hide($('.second-layout-week-subribbon'), 1000);
            for (var i = 0; i < 5; i++) {
                addAnimation(normalDays[i], 'zoomOut', 0, 'hidden');
                hide(normalDays[i], 1000);
            }


            $('.special').animate({
                top: '0.16em',
                left: '0.04em',
                width: '1.28em',
                height: '0.9em'
            }, 1000);
            $('.special .item').animate({
                width: '0.52em',
                'max-height': '0.38em'
            }, 1000);
            $('.special .discount').animate({
                top: '0.4em',
                left: '0.1em'
            }, 1000);
            $('.special .item-name').animate({
                left: '.9em',
                top: '20.2em',
                'font-size': '0.04em',
                'font-weight': 'light'
            }, 1000);
            addAnimation($('.special .item-desc'), 'slideInUp', 0, 'visible');
            addAnimation($('.desc-block'), 'slideInRight', 300, 'visible', 0.7);
            addAnimation($('.desc-name'), 'slideInRight', 500, 'visible', 0.7);
            addAnimation($('.desc'), 'slideInRight', 700, 'visible', 0.7);
            addAnimation($('.old-price-ribbon '), 'slideInRight', 900, 'visible', 0.7);
            addAnimation($('.save-ribbon'), 'slideInRight', 1100, 'visible', 0.7);
            addAnimation($('.new-price-ribbon'), 'slideInRight', 1300, 'visible', 0.7);
            addAnimation($('.qr-ribbon'), 'slideInRight', 1500, 'visible', 0.7);
        }, 17500);
    }

    function setContent() {
        $('#monday .item-name').text(data[1].title);
        $('#tuesday .item-name').text(data[2].title);
        $('#wednesday .item-name').text(data[3].title);
        $('#thursday .item-name').text(data[4].title);
        $('#friday .item-name').text(data[5].title);
        $('#weekend .item-name').text(data[0].title);
        $('#monday .item-desc').text(data[1].tagline2);
        $('#tuesday .item-desc').text(data[2].tagline2);
        $('#wednesday .item-desc').text(data[3].tagline2);
        $('#thursday .item-desc').text(data[4].tagline2);
        $('#friday .item-desc').text(data[5].tagline2);
        $('#weekend .item-desc').text(data[0].tagline2);
        $('#monday .price p').text(buildPrice(1, data[1].newprice));
        $('#tuesday .price p').text(buildPrice(2, data[2].newprice));
        $('#wednesday .price p').text(buildPrice(3, data[3].newprice));
        $('#thursday .price p').text(buildPrice(4, data[4].newprice));
        $('#friday .price p').text(buildPrice(5, data[5].newprice));
        $('#weekend .price p').text(buildPrice(0, data[0].newprice));
        $('#monday .item').attr('src', data[1].feedname + 'p' + data[1].id + '.png');
        $('#tuesday .item').attr('src', data[2].feedname + 'p' + data[2].id + '.png');
        $('#wednesday .item').attr('src', data[3].feedname + 'p' + data[3].id + '.png');
        $('#thursday .item').attr('src', data[4].feedname + 'p' + data[4].id + '.png');
        $('#friday .item').attr('src', data[5].feedname + 'p' + data[5].id + '.png');
        $('#weekend .item').attr('src', data[0].feedname + 'p' + data[0].id + '.png');

        $('#monday .discount p').text(calculateDiscount(data[1].origprice, data[1].newprice));
        $('#tuesday .discount p').text(calculateDiscount(data[2].origprice, data[2].newprice));
        $('#wednesday .discount p').text(calculateDiscount(data[3].origprice, data[3].newprice));
        $('#thursday .discount p').text(calculateDiscount(data[4].origprice, data[4].newprice));
        $('#friday .discount p').text(calculateDiscount(data[5].origprice, data[5].newprice));
        $('#weekend .discount p').text(calculateDiscount(data[0].origprice, data[0].newprice));


        setSpecial();
        $('.desc-block .desc').text(data[currentDay].articlenumber);
        $('.old-price').text(buildPrice(currentDay, data[currentDay].origprice));
        $('.save').text(buildPrice(currentDay, data[currentDay].origprice - data[currentDay].newprice));
        $('.new-price').text(buildPrice(currentDay, data[currentDay].newprice));
        $('.qr-code').attr('src', data[currentDay].feedname + 'q' + data[currentDay].id + '.png');
    }







    function animateTemplate() {
        animatePreLayout();
        animateFirstLayout();
        animateSecondLayout();
        animateThirdLayout();
    }





















    animateTemplate();
    setContent();









});
