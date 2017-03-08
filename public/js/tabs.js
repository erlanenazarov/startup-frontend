/**
 * Created by Эрлан on 08.03.2017.
 */
var tabsParent = $('.tabs-pagination').first();
var tabs = $('.tabs-pagination ul li');
var tabPagination = $('#pagination-bar');

$(document).ready(function () {
    function initTabs() {
        $(tabs).each(function (i, obj) {
            var target = $('a', $(obj)).attr('href');
            if (i === 0) {
                $(obj).addClass('active');
                if(target !== '#') $(target).fadeIn('fast');
            } else {
                $(obj).attr('class', '');
                $(obj).removeClass('active');
                if (target !== '#') { $(target).fadeOut('fast'); }
            }
        });
        var firstTab = $(tabs).first();
        $(tabPagination).animate({
            left: $(firstTab).offset().left - $(tabsParent).offset().left,
            width: $(firstTab).width()
        }, 500);
        console.log($(firstTab));
        console.log('Tabs parent left: ' + $(tabsParent).offset().left);
    }

    initTabs();

    function openTab(target) {
        $('.inside-grid').each(function (i, obj) {
            $(obj).fadeOut('fast', function () {
                if ($(obj).attr('id') == target) {
                    $(obj).fadeIn('slow');
                }
            });
        });
    }

    function setActiveToTab(tab) {
        $(tabs).each(function (i, obj) {
            if ($(obj).find('a').attr('href') === tab) {
                $(obj).attr('class', 'active');
            } else {
                $(obj).removeClass('active');
            }
        });
    }

    $('a', $(tabs)).each(function (i, obj) {
        $(obj).on('click', function (event) {
            event.preventDefault();

            var target = $(this).attr('href').replace('#', '');
            var tab = $(this).attr('href');
            var offset = $(obj).offset().left - $(tabsParent).offset().left;
            var width = $(obj).width();

            $(tabPagination).animate({
                left: offset,
                width: width
            }, 500);

            openTab(target);
            setActiveToTab(tab);
        });
    });
});