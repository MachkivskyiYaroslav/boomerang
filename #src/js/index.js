(function ($) {
    $(document).ready(function () {
        var image_array = new Array();
        image_array = [
            {image: 'https://s3.amazonaws.com/BoomerangWebsite/images/hollymeyer.png', link_rel: 'prettyPhoto'},
            // image for the first layer, goes with the text from id="sw0"
            {image: 'https://s3.amazonaws.com/BoomerangWebsite/images/reubenmetcalfe.png', link_rel: 'prettyPhoto'},
            // image for the second layer, goes with the text from id="sw1"
            {image: 'https://s3.amazonaws.com/BoomerangWebsite/images/mikekaiser.png', link_rel: 'prettyPhoto'},
            // image for the third layer, goes with the text from id="sw2"
            {image: 'https://s3.amazonaws.com/BoomerangWebsite/images/jenclarke.png', link_rel: 'prettyPhoto'},
            // ...
            {image: 'https://s3.amazonaws.com/BoomerangWebsite/images/connorboyack.png', link_rel: 'prettyPhoto'},
        ];
        $('#slider1').content_slider({		// bind plugin to div id="slider1"
            map: image_array,				// pointer to the image map
            max_shown_items: 5,				// number of visible circles
            hv_switch: 0,					// 0 = horizontal slider, 1 = vertical
            active_item: 0,
            auto_play: 1,
            auto_play_pause_time: 10000,				// layer that will be shown at start, 0=first, 1=second...
            wrapper_text_max_height: 450,	// height of widget, displayed in pixels
            middle_click: 1,				// when main circle is clicked: 1 = slider will go to the previous layer/circle, 2 = to the next
            under_600_max_height: 1200,		// if resolution is below 600 px, set max height of content
            border_radius: -1,				// -1 = circle, 0 and other = radius
            automatic_height_resize: 1,
            border_on_off: 0,
            allow_shadow: 0,
            main_circle_position: 1,
            big_pic_width: 360,
            enable_mousewheel: 0
        });
        $('.content_slider_text_block_wrap').find('.button_hover_effect').hover(function () {
            var hoverClr = $(this).attr('data-hovercolor');
            $(this).stop(true).animate({'background-color': hoverClr}, 300);

        }, function () {
            var bgClr = $(this).attr('data-hoveroutcolor');
            $(this).stop(true).animate({'background-color': bgClr}, 300);
        });
        $('.content_slider_text_block_wrap').find('.content_img_wrap').hover(function () {
            $(this).find('.hover_link').show().stop(true).animate({
                'width': 21,
                'height': 21,
                'margin-top': -10.5,
                'margin-left': -10.5,
                opacity: 1
            }, 150);
        }, function () {
            $(this).find('.hover_link').show().stop(true).animate({
                'width': 0,
                'height': 0,
                'margin-top': 0,
                'margin-left': 0,
                opacity: 0
            }, 150, function () {
                $(this).hide();
            });
        });
    });
})(jQuery);

var FIREFOX_EXTENSION_INSTALLED = false;

function detect_firefox_installed() {
    FIREFOX_EXTENSION_INSTALLED = true;
}

$(document).ready(function () {

    var BrowserDetect = {
        init: function () {
            this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
            this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version";
            this.OS = this.searchString(this.dataOS) || "an unknown OS";
        },
        searchString: function (data) {
            for (var i = 0; i < data.length; i++) {
                var dataString = data[i].string;
                var dataProp = data[i].prop;
                this.versionSearchString = data[i].versionSearch || data[i].identity;
                if (dataString) {
                    if (dataString.indexOf(data[i].subString) !== -1) {
                        return data[i].identity;
                    }
                } else if (dataProp) {
                    return data[i].identity;
                }
            }
        },
        searchVersion: function (dataString) {
            var index = dataString.indexOf(this.versionSearchString);
            if (index === -1) {
                return;
            }
            return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
        },
        dataBrowser: [{string: navigator.userAgent, subString: "OPR", identity: "Opera"}, {
            string: navigator.userAgent,
            subString: "Edge",
            identity: "Edge"
        }, {string: navigator.userAgent, subString: "Chrome", identity: "Chrome"}, {
            string: navigator.userAgent,
            subString: "OmniWeb",
            versionSearch: "OmniWeb/",
            identity: "OmniWeb"
        }, {
            string: navigator.vendor,
            subString: "Apple",
            identity: "Safari",
            versionSearch: "Version"
        }, {string: navigator.vendor, subString: "iCab", identity: "iCab"}, {
            string: navigator.vendor,
            subString: "KDE",
            identity: "Konqueror"
        }, {string: navigator.userAgent, subString: "Firefox", identity: "Firefox"}, {
            string: navigator.vendor,
            subString: "Camino",
            identity: "Camino"
        }, {string: navigator.userAgent, subString: "Netscape", identity: "Netscape"}, {
            string: navigator.userAgent,
            subString: "MSIE",
            identity: "Explorer",
            versionSearch: "MSIE"
        }, {
            string: navigator.userAgent,
            subString: "Gecko",
            identity: "Mozilla",
            versionSearch: "rv"
        }, {string: navigator.userAgent, subString: "Mozilla", identity: "Netscape", versionSearch: "Mozilla"}],
        dataOS: [{string: navigator.platform, subString: "Win", identity: "Windows"}, {
            string: navigator.platform,
            subString: "Mac",
            identity: "Mac"
        }, {string: navigator.userAgent, subString: "iPhone", identity: "iPhone/iPod"}, {
            string: navigator.platform,
            subString: "Linux",
            identity: "Linux"
        }]
    };

    BrowserDetect.init();
    switch (BrowserDetect.browser) {
        case "Chrome":
            browserName = "Chrome";
            break;
        case "Firefox":
            $("body").append($('<IMG SRC="chrome://boomerangforgmail/content/green-check.png" onload="detect_firefox_installed();" style="visibility:hidden">'));
            browserName = "Firefox";
            break;
        case "Safari":
            if (BrowserDetect.version < 5.1) {
                browserName = "Old Safari";
            } else {
                browserName = "Safari";
            }
            break;
        case "Opera":
            browserName = "Opera";
            break;
        case "Edge":
            browserName = "Edge";
            break;
        default:
            browserName = "Other";
            break;
    }

    if (browserName == "Chrome" || browserName == "Firefox") {
        function load_css_async(css) {

            var cb = function () {
                var l = document.createElement('link');
                l.rel = 'stylesheet';
                l.href = css;
                var h = document.getElementsByTagName('head')[0];
                h.parentNode.insertBefore(l, h);
            };
            var raf = requestAnimationFrame || mozRequestAnimationFrame ||
                webkitRequestAnimationFrame || msRequestAnimationFrame;
            if (raf) raf(cb);
            else window.addEventListener('load', cb);
        }

        load_css_async("//fonts.googleapis.com/css?family=Lato:400italic,300")
        load_css_async("https://s3.amazonaws.com/BoomerangWebsite/assets/source/jquery.fancybox.css?v=2.1.5");
        load_css_async("https://s3.amazonaws.com/BoomerangWebsite/assets/carousel/css/prettyPhoto.css");

        $('.fancybox-media').fancybox();
        $(".feat-video").not(".defaultvideo").hover(function () {
            $(".defaultvideo").removeClass("active2");
        }, function () {
            $(".defaultvideo").addClass("active2");
        });
    }
})
