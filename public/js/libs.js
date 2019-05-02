(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    echarts.registerTheme('debbie', {
        "color": [
            "#2ec7c9",
            "#ad82ff",
            "#5ab1ef",
            "#ffc700",
            "#ff0013",
            "#ff7fc0",
            "#ccb7b7"
        ],
        "backgroundColor": "rgba(0,0,0,0)",
        "textStyle": {},
        "title": {
            "textStyle": {
                "color": "#45baff"
            },
            "subtextStyle": {
                "color": "#aaaaaa"
            }
        },
        "line": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 1
                }
            },
            "lineStyle": {
                "normal": {
                    "width": "2"
                }
            },
            "symbolSize": "6",
            "symbol": "circle",
            "smooth": true
        },
        "radar": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 1
                }
            },
            "lineStyle": {
                "normal": {
                    "width": "2"
                }
            },
            "symbolSize": "6",
            "symbol": "circle",
            "smooth": true
        },
        "bar": {
            "itemStyle": {
                "normal": {
                    "barBorderWidth": "0",
                    "barBorderColor": "#eeeeee"
                },
                "emphasis": {
                    "barBorderWidth": "0",
                    "barBorderColor": "#eeeeee"
                }
            }
        },
        "pie": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#eeeeee"
                },
                "emphasis": {
                    "borderWidth": "0",
                    "borderColor": "#eeeeee"
                }
            }
        },
        "scatter": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#eeeeee"
                },
                "emphasis": {
                    "borderWidth": "0",
                    "borderColor": "#eeeeee"
                }
            }
        },
        "boxplot": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#eeeeee"
                },
                "emphasis": {
                    "borderWidth": "0",
                    "borderColor": "#eeeeee"
                }
            }
        },
        "parallel": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#eeeeee"
                },
                "emphasis": {
                    "borderWidth": "0",
                    "borderColor": "#eeeeee"
                }
            }
        },
        "sankey": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#eeeeee"
                },
                "emphasis": {
                    "borderWidth": "0",
                    "borderColor": "#eeeeee"
                }
            }
        },
        "funnel": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#eeeeee"
                },
                "emphasis": {
                    "borderWidth": "0",
                    "borderColor": "#eeeeee"
                }
            }
        },
        "gauge": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#eeeeee"
                },
                "emphasis": {
                    "borderWidth": "0",
                    "borderColor": "#eeeeee"
                }
            }
        },
        "candlestick": {
            "itemStyle": {
                "normal": {
                    "color": "#d87a80",
                    "color0": "#2ec7c9",
                    "borderColor": "#d87a80",
                    "borderColor0": "#2ec7c9",
                    "borderWidth": 1
                }
            }
        },
        "graph": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#eeeeee"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": 1,
                    "color": "#aaaaaa"
                }
            },
            "symbolSize": "6",
            "symbol": "circle",
            "smooth": true,
            "color": [
                "#2ec7c9",
                "#ad82ff",
                "#5ab1ef",
                "#ffc700",
                "#ff0013",
                "#ff7fc0",
                "#ccb7b7"
            ],
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#eeeeee"
                    }
                }
            }
        },
        "map": {
            "itemStyle": {
                "normal": {
                    "areaColor": "#dddddd",
                    "borderColor": "#eeeeee",
                    "borderWidth": 0.5
                },
                "emphasis": {
                    "areaColor": "rgba(254,153,78,1)",
                    "borderColor": "#444444",
                    "borderWidth": 1
                }
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#d87a80"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "rgb(100,0,0)"
                    }
                }
            }
        },
        "geo": {
            "itemStyle": {
                "normal": {
                    "areaColor": "#dddddd",
                    "borderColor": "#eeeeee",
                    "borderWidth": 0.5
                },
                "emphasis": {
                    "areaColor": "rgba(254,153,78,1)",
                    "borderColor": "#444444",
                    "borderWidth": 1
                }
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#d87a80"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "rgb(100,0,0)"
                    }
                }
            }
        },
        "categoryAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#008acd"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#333"
                }
            },
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "color": [
                        "#eee"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "valueAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#008acd"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#333"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#eee"
                    ]
                }
            },
            "splitArea": {
                "show": true,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "logAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#008acd"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#333"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#eee"
                    ]
                }
            },
            "splitArea": {
                "show": true,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "timeAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#008acd"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#333"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#eee"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "toolbox": {
            "iconStyle": {
                "normal": {
                    "borderColor": "#2ec7c9"
                },
                "emphasis": {
                    "borderColor": "#18a4a6"
                }
            }
        },
        "legend": {
            "textStyle": {
                "color": "#333333"
            }
        },
        "tooltip": {
            "axisPointer": {
                "lineStyle": {
                    "color": "#008acd",
                    "width": "1"
                },
                "crossStyle": {
                    "color": "#008acd",
                    "width": "1"
                }
            }
        },
        "timeline": {
            "lineStyle": {
                "color": "#008acd",
                "width": 1
            },
            "itemStyle": {
                "normal": {
                    "color": "#008acd",
                    "borderWidth": 1
                },
                "emphasis": {
                    "color": "#a9334c"
                }
            },
            "controlStyle": {
                "normal": {
                    "color": "#008acd",
                    "borderColor": "#008acd",
                    "borderWidth": 0.5
                },
                "emphasis": {
                    "color": "#008acd",
                    "borderColor": "#008acd",
                    "borderWidth": 0.5
                }
            },
            "checkpointStyle": {
                "color": "#2ec7c9",
                "borderColor": "rgba(46,199,201,0.4)"
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#008acd"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "#008acd"
                    }
                }
            }
        },
        "visualMap": {
            "color": [
                "#5ab1ef",
                "#e0ffff"
            ]
        },
        "dataZoom": {
            "backgroundColor": "rgba(47,69,84,0)",
            "dataBackgroundColor": "rgba(239,239,255,1)",
            "fillerColor": "rgba(182,162,222,0.2)",
            "handleColor": "#008acd",
            "handleSize": "98%",
            "textStyle": {
                "color": "#333333"
            }
        },
        "markPoint": {
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#eeeeee"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "#eeeeee"
                    }
                }
            }
        }
    });
}));

(function($) {

    var isBuilder = $('html').hasClass('is-builder');

    $.extend($.easing, {
        easeInOutCubic: function(x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t + 2) + b;
        }
    });

    $.fn.outerFind = function(selector) {
        return this.find(selector).addBack(selector);
    };

    $.fn.footerReveal = function() {
        var $this = $(this);
        var $prev = $this.prev();
        var $win = $(window);

        function initReveal() {
            if ($this.outerHeight() <= $win.outerHeight()) {
                $this.css({
                    'z-index': -999,
                    position: 'fixed',
                    bottom: 0
                });

                $this.css({
                    'width': $prev.outerWidth()
                });

                $prev.css({
                    'margin-bottom': $this.outerHeight()
                });
            } else {
                $this.css({
                    'z-index': '',
                    position: '',
                    bottom: ''
                });

                $this.css({
                    'width': ''
                });

                $prev.css({
                    'margin-bottom': ''
                });
            }
        }

        initReveal();

        $win.on('load resize', function() {
            initReveal();
        });

        return this;
    };

    (function($, sr) {
        // debouncing function from John Hann
        // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
        var debounce = function(func, threshold, execAsap) {
            var timeout;

            return function debounced() {
                var obj = this,
                    args = arguments;

                function delayed() {
                    if (!execAsap) func.apply(obj, args);
                    timeout = null;
                }

                if (timeout) clearTimeout(timeout);
                else if (execAsap) func.apply(obj, args);

                timeout = setTimeout(delayed, threshold || 100);
            };
        };
        // smartresize
        jQuery.fn[sr] = function(fn) {
            return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr);
        };

    })(jQuery, 'smartresize');

    (function() {

        var scrollbarWidth = 0,
            originalMargin, touchHandler = function(event) {
                event.preventDefault();
            };

        function getScrollbarWidth() {
            if (scrollbarWidth) return scrollbarWidth;
            var scrollDiv = document.createElement('div');
            $.each({
                top: '-9999px',
                width: '50px',
                height: '50px',
                overflow: 'scroll',
                position: 'absolute'
            }, function(property, value) {
                scrollDiv.style[property] = value;
            });
            $('body').append(scrollDiv);
            scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
            $('body')[0].removeChild(scrollDiv);
            return scrollbarWidth;
        }

    })();

    $.isMobile = function(type) {
        var reg = [];
        var any = {
            blackberry: 'BlackBerry',
            android: 'Android',
            windows: 'IEMobile',
            opera: 'Opera Mini',
            ios: 'iPhone|iPad|iPod'
        };
        type = 'undefined' == $.type(type) ? '*' : type.toLowerCase();
        if ('*' == type) reg = $.map(any, function(v) {
            return v;
        });
        else if (type in any) reg.push(any[type]);
        return !!(reg.length && navigator.userAgent.match(new RegExp(reg.join('|'), 'i')));
    };

    var isSupportViewportUnits = (function() {
        // modernizr implementation
        var $elem = $('<div style="height: 50vh; position: absolute; top: -1000px; left: -1000px;">').appendTo('body');
        var elem = $elem[0];
        var height = parseInt(window.innerHeight / 2, 10);
        var compStyle = parseInt((window.getComputedStyle ? getComputedStyle(elem, null) : elem.currentStyle)['height'], 10);
        $elem.remove();
        return compStyle == height;
    }());

    $(function() {

        $('html').addClass($.isMobile() ? 'mobile' : 'desktop');

        // .mbr-navbar--sticky
        $(window).scroll(function() {
            $('.mbr-navbar--sticky').each(function() {
                var method = $(window).scrollTop() > 10 ? 'addClass' : 'removeClass';
                $(this)[method]('mbr-navbar--stuck')
                    .not('.mbr-navbar--open')[method]('mbr-navbar--short');
            });
        });

        if ($.isMobile() && navigator.userAgent.match(/Chrome/i)) { // simple fix for Chrome's scrolling
            (function(width, height) {
                var deviceSize = [width, width];
                deviceSize[height > width ? 0 : 1] = height;
                $(window).smartresize(function() {
                    var windowHeight = $(window).height();
                    if ($.inArray(windowHeight, deviceSize) < 0)
                        windowHeight = deviceSize[$(window).width() > windowHeight ? 1 : 0];
                    $('.mbr-section--full-height').css('height', windowHeight + 'px');
                });
            })($(window).width(), $(window).height());
        } else if (!isSupportViewportUnits) { // fallback for .mbr-section--full-height
            $(window).smartresize(function() {
                $('.mbr-section--full-height').css('height', $(window).height() + 'px');
            });
            $(document).on('add.cards', function(event) {
                if ($('html').hasClass('mbr-site-loaded') && $(event.target).outerFind('.mbr-section--full-height').length)
                    $(window).resize();
            });
        }

        // .mbr-section--16by9 (16 by 9 blocks autoheight)
        function calculate16by9() {
            $(this).css('height', $(this).parent().width() * 9 / 16);
        }
        $(window).smartresize(function() {
            $('.mbr-section--16by9').each(calculate16by9);
        });
        $(document).on('add.cards changeParameter.cards', function(event) {
            var enabled = $(event.target).outerFind('.mbr-section--16by9');
            if (enabled.length) {
                enabled
                    .attr('data-16by9', 'true')
                    .each(calculate16by9);
            } else {
                $(event.target).outerFind('[data-16by9]')
                    .css('height', '')
                    .removeAttr('data-16by9');
            }
        });

        // .mbr-parallax-background
        function initParallax(card) {
            setTimeout(function() {
                $(card).outerFind('.mbr-parallax-background')
                    .jarallax({
                        speed: 0.6
                    })
                    .css('position', 'relative');
            }, 0);
        }

        function destroyParallax(card) {
            $(card).jarallax('destroy').css('position', '');
        }

        if ($.fn.jarallax && !$.isMobile()) {
            $(window).on('update.parallax', function(event) {
                setTimeout(function() {
                    var $jarallax = $('.mbr-parallax-background');

                    $jarallax.jarallax('coverImage');
                    $jarallax.jarallax('clipContainer');
                    $jarallax.jarallax('onScroll');
                }, 0);
            });

            if (isBuilder) {
                $(document).on('add.cards', function(event) {
                    initParallax(event.target);
                    $(window).trigger('update.parallax');
                });

                $(document).on('changeParameter.cards', function(event, paramName, value, key) {
                    if (paramName === 'bg') {
                        destroyParallax(event.target);

                        switch (key) {
                            case 'type':
                                if (value.parallax === true) {
                                    initParallax(event.target);
                                }
                                break;
                            case 'value':
                                if (value.type === 'image' && value.parallax === true) {
                                    initParallax(event.target);
                                }
                                break;
                            case 'parallax':
                                if (value.parallax === true) {
                                    initParallax(event.target);
                                }
                        }
                    }

                    $(window).trigger('update.parallax');
                });
            } else {
                initParallax(document.body);
            }

            // for Tabs
            $(window).on('shown.bs.tab', function(e) {
                $(window).trigger('update.parallax');
            });
        }

        // .mbr-fixed-top
        var fixedTopTimeout, scrollTimeout, prevScrollTop = 0,
            fixedTop = null,
            isDesktop = !$.isMobile();
        $(window).scroll(function() {
            if (scrollTimeout) clearTimeout(scrollTimeout);
            var scrollTop = $(window).scrollTop();
            var scrollUp = scrollTop <= prevScrollTop || isDesktop;
            prevScrollTop = scrollTop;
            if (fixedTop) {
                var fixed = scrollTop > fixedTop.breakPoint;
                if (scrollUp) {
                    if (fixed != fixedTop.fixed) {
                        if (isDesktop) {
                            fixedTop.fixed = fixed;
                            $(fixedTop.elm).toggleClass('is-fixed');
                        } else {
                            scrollTimeout = setTimeout(function() {
                                fixedTop.fixed = fixed;
                                $(fixedTop.elm).toggleClass('is-fixed');
                            }, 40);
                        }
                    }
                } else {
                    fixedTop.fixed = false;
                    $(fixedTop.elm).removeClass('is-fixed');
                }
            }
        });
        $(document).on('add.cards delete.cards', function(event) {
            if (fixedTopTimeout) clearTimeout(fixedTopTimeout);
            fixedTopTimeout = setTimeout(function() {
                if (fixedTop) {
                    fixedTop.fixed = false;
                    $(fixedTop.elm).removeClass('is-fixed');
                }
                $('.mbr-fixed-top:first').each(function() {
                    fixedTop = {
                        breakPoint: $(this).offset().top + $(this).height() * 3,
                        fixed: false,
                        elm: this
                    };
                    $(window).scroll();
                });
            }, 650);
        });

        // embedded videos
        $(window).smartresize(function() {
            $('.mbr-embedded-video').each(function() {
                $(this).height(
                    $(this).width() *
                    parseInt($(this).attr('height') || 315) /
                    parseInt($(this).attr('width') || 560)
                );
            });
        });
        $(document).on('add.cards', function(event) {
            if ($('html').hasClass('mbr-site-loaded') && $(event.target).outerFind('iframe').length)
                $(window).resize();
        });

        // background video
        function videoParser(card) {
            $(card).outerFind('[data-bg-video]').each(function() {
                var videoURL = $(this).attr('data-bg-video');
                var parsedUrl = videoURL.match(/(http:\/\/|https:\/\/|)?(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/);

                var $img = $('<div class="mbr-background-video-preview">')
                    .hide()
                    .css({
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    });
                $('> *:eq(0)', this).before($img);

                // youtube or vimeo
                if (parsedUrl && (/youtube/g.test(parsedUrl[3]) || /vimeo/g.test(parsedUrl[3]))) {
                    // youtube
                    if (parsedUrl && /youtube/g.test(parsedUrl[3])) {
                        var previewURL = 'http' + ('https:' === location.protocol ? 's' : '') + ':';
                        previewURL += '//img.youtube.com/vi/' + parsedUrl[6] + '/maxresdefault.jpg';

                        $('<img>').on('load', function() {
                            if (120 === (this.naturalWidth || this.width)) {
                                // selection of preview in the best quality
                                var file = this.src.split('/').pop();

                                switch (file) {
                                    case 'maxresdefault.jpg':
                                        this.src = this.src.replace(file, 'sddefault.jpg');
                                        break;
                                    case 'sddefault.jpg':
                                        this.src = this.src.replace(file, 'hqdefault.jpg');
                                        break;
                                    default: // image not found
                                        if (isBuilder) {
                                            $img.css('background-image', 'url("images/no-video.jpg")')
                                                .show();
                                        }
                                }
                            } else {
                                $img.css('background-image', 'url("' + this.src + '")')
                                    .show();
                            }
                        }).attr('src', previewURL);

                        if ($.fn.YTPlayer && !isBuilder && !$.isMobile()) {
                            $('> *:eq(1)', this).before('<div class="mbr-background-video"></div>').prev()
                                .YTPlayer({
                                    videoURL: parsedUrl[6],
                                    containment: 'self',
                                    showControls: false,
                                    mute: true
                                });
                        }
                    } else if (parsedUrl && /vimeo/g.test(parsedUrl[3])) { // vimeo
                        var request = new XMLHttpRequest();
                        request.open('GET', 'https://vimeo.com/api/v2/video/' + parsedUrl[6] + '.json', true);
                        request.onreadystatechange = function() {
                            if (this.readyState === 4) {
                                if (this.status >= 200 && this.status < 400) {
                                    var response = JSON.parse(this.responseText);

                                    $img.css('background-image', 'url("' + response[0].thumbnail_large + '")')
                                        .show();
                                } else if (isBuilder) { // image not found
                                    $img.css('background-image', 'url("images/no-video.jpg")')
                                        .show();
                                }
                            }
                        };
                        request.send();
                        request = null;

                        if ($.fn.vimeo_player && !isBuilder && !$.isMobile()) {
                            $('> *:eq(1)', this).before('<div class="mbr-background-video"></div>').prev()
                                .vimeo_player({
                                    videoURL: videoURL,
                                    containment: 'self',
                                    showControls: false,
                                    mute: true
                                });
                        }
                    }
                } else if (isBuilder) { // neither youtube nor vimeo
                    $img.css('background-image', 'url("images/video-placeholder.jpg")')
                        .show();
                }
            });
        }

        if (isBuilder) {
            $(document).on('add.cards', function(event) {
                videoParser(event.target);
            });
        } else {
            videoParser(document.body);
        }

        $(document).on('changeParameter.cards', function(event, paramName, value, key) {
            if (paramName === 'bg') {
                switch (key) {
                    case 'type':
                        $(event.target).find('.mbr-background-video-preview').remove();
                        if (value.type === 'video') {
                            videoParser(event.target);
                        }
                        break;
                    case 'value':
                        if (value.type === 'video') {
                            $(event.target).find('.mbr-background-video-preview').remove();
                            videoParser(event.target);
                        }
                        break;
                }
            }
        });

        // init
        if (!isBuilder) {
            $('body > *:not(style, script)').trigger('add.cards');
        }
        $('html').addClass('mbr-site-loaded');
        $(window).resize().scroll();

        // smooth scroll
        if (!isBuilder) {
            $(document).click(function(e) {
                try {
                    var target = e.target;

                    if ($(target).parents().hasClass('carousel')) {
                        return;
                    }
                    do {
                        if (target.hash) {
                            var useBody = /#bottom|#top/g.test(target.hash);
                            $(useBody ? 'body' : target.hash).each(function() {
                                e.preventDefault();
                                // in css sticky navbar has height 64px
                                var stickyMenuHeight = $('.mbr-navbar--sticky').length ? 64 : 0;
                                var goTo = target.hash == '#bottom' ? ($(this).height() - $(window).height()) : ($(this).offset().top - stickyMenuHeight);
                                // Disable Accordion's and Tab's scroll
                                if ($(this).hasClass('panel-collapse') || $(this).hasClass('tab-pane')) {
                                    return;
                                }
                                $('html, body').stop().animate({
                                    scrollTop: goTo
                                }, 800, 'easeInOutCubic');
                            });
                            break;
                        }
                    } while (target = target.parentNode);
                } catch (e) {
                    // throw e;
                }
            });
        }

        // init the same height columns
        $('.cols-same-height .mbr-figure').each(function() {
            var $imageCont = $(this);
            var $img = $imageCont.children('img');
            var $cont = $imageCont.parent();
            var imgW = $img[0].width;
            var imgH = $img[0].height;

            function setNewSize() {
                $img.css({
                    width: '',
                    maxWidth: '',
                    marginLeft: ''
                });

                if (imgH && imgW) {
                    var aspectRatio = imgH / imgW;

                    $imageCont.addClass({
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0
                    });

                    // change image size
                    var contAspectRatio = $cont.height() / $cont.width();
                    if (contAspectRatio > aspectRatio) {
                        var percent = 100 * (contAspectRatio - aspectRatio) / aspectRatio;
                        $img.css({
                            width: percent + 100 + '%',
                            maxWidth: percent + 100 + '%',
                            marginLeft: (-percent / 2) + '%'
                        });
                    }
                }
            }

            $img.one('load', function() {
                imgW = $img[0].width;
                imgH = $img[0].height;
                setNewSize();
            });

            $(window).on('resize', setNewSize);
            setNewSize();
        });
    });


    if (!isBuilder) {
        // .mbr-social-likes
        if ($.fn.socialLikes) {
            $(document).on('add.cards', function(event) {
                $(event.target).outerFind('.mbr-social-likes').on('counter.social-likes', function(event, service, counter) {
                    if (counter > 999) $('.social-likes__counter', event.target).html(Math.floor(counter / 1000) + 'k');
                }).socialLikes({
                    initHtml: false
                });
            });
        }

        $(document).on('add.cards', function(event) {
            if ($(event.target).hasClass('mbr-reveal')) {
                $(event.target).footerReveal();
            }
        });

        $(document).ready(function() {
            // disable animation on scroll on mobiles
            if ($.isMobile()) {
                return;
                // enable animation on scroll
            } else if ($('input[name=animation]').length) {
                $('input[name=animation]').remove();

                var $animatedElements = $('p, h1, h2, h3, h4, h5, a, button, small, img, li, blockquote, .mbr-author-name, em, label, input, textarea, .input-group, .iconbox, .btn-social, .mbr-figure, .mbr-map, .mbr-testimonial .card-block, .mbr-price-value, .mbr-price-figure, .dataTable, .dataTables_info').not(function() {
                    return $(this).parents().is('.navbar, .mbr-arrow, footer, .iconbox, .mbr-slider, .mbr-gallery, .mbr-testimonial .card-block, #cookiesdirective, .mbr-wowslider, .accordion, .tab-content, .engine, #scrollToTop');
                }).addClass('hidden animated');

                function getElementOffset(element) {
                    var top = 0;
                    do {
                        top += element.offsetTop || 0;
                        element = element.offsetParent;
                    } while (element);

                    return top;
                }

                function checkIfInView() {
                    var window_height = window.innerHeight;
                    var window_top_position = document.documentElement.scrollTop || document.body.scrollTop;
                    var window_bottom_position = window_top_position + window_height - 50;

                    $.each($animatedElements, function() {
                        var $element = $(this);
                        var element = $element[0];
                        var element_height = element.offsetHeight;
                        var element_top_position = getElementOffset(element);
                        var element_bottom_position = (element_top_position + element_height);

                        // check to see if this current element is within viewport
                        if ((element_bottom_position >= window_top_position) &&
                            (element_top_position <= window_bottom_position) &&
                            ($element.hasClass('hidden'))) {
                            $element.removeClass('hidden').addClass('fadeInUp')
                                .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                                    $element.removeClass('animated fadeInUp');
                                });
                        }
                    });
                }

                var $window = $(window);
                $window.on('scroll resize', checkIfInView);
                $window.trigger('scroll');
            }
        });

        if ($('.nav-dropdown').length) {
            $(".nav-dropdown").swipe({
                swipeLeft: function(event, direction, distance, duration, fingerCount) {
                    $('.navbar-close').click();
                }
            });
        }
    }

    // Scroll to Top Button
    $(document).ready(function() {
        if ($('.mbr-arrow-up').length) {
            var $scroller = $('#scrollToTop'),
                $main = $('body,html'),
                $window = $(window);
            $scroller.css('display', 'none');
            $window.scroll(function() {
                if ($(this).scrollTop() > 0) {
                    $scroller.fadeIn();
                } else {
                    $scroller.fadeOut();
                }
            });
            $scroller.click(function() {
                $main.animate({
                    scrollTop: 0
                }, 400);
                return false;
            });
        }
    });

    $(document).ready(function() {
        // Counters
        if ($('.counters').length) {
            $('.counters').viewportChecker({
                offset: 200,
                callbackFunction: function(elem, action) {
                    $('#' + elem.attr('id') + ' .count').each(function() {
                        $(this).prop('Counter', 0).animate({
                            Counter: $(this).text()
                        }, {
                            duration: 3000,
                            easing: 'swing',
                            step: function(now) {
                                $(this).text(Math.ceil(now));
                            }
                        });
                    });
                }
            });
        }
    });

    // arrow down
    if (!isBuilder) {
        $('.mbr-arrow').on('click', function(e) {
            var $next = $(e.target).closest('section').next();
            if($next.hasClass('engine')){
                $next = $next.closest('section').next();
            }
            var offset = $next.offset();
            $('html, body').stop().animate({
                scrollTop: offset.top
            }, 800, 'linear');
        });
    }

    // add padding to the first element, if it exists
    if ($('nav.navbar').length) {
        var navHeight = $('nav.navbar').height();
        $('.mbr-after-navbar.mbr-fullscreen').css('padding-top', navHeight + 'px');
    }

    function isIE() {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");

        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
            return true;
        }

        return false;
    }

    // fixes for IE
    if (!isBuilder && isIE()) {
        $(document).on('add.cards', function(event) {
            var $eventTarget = $(event.target);

            if ($eventTarget.hasClass('mbr-fullscreen')) {
                $(window).on('load resize', function() {
                    $eventTarget.css('height', 'auto');

                    if ($eventTarget.outerHeight() <= $(window).height()) {
                        $eventTarget.css('height', '1px');
                    }
                });
            }

            if ($eventTarget.hasClass('mbr-slider') || $eventTarget.hasClass('mbr-gallery')) {
                $eventTarget.find('.carousel-indicators').addClass('ie-fix').find('li').css({
                    display: 'inline-block',
                    width: '30px'
                });

                if ($eventTarget.hasClass('mbr-slider')) {
                    $eventTarget.find('.full-screen .slider-fullscreen-image').css('height', '1px');
                }
            }
        });
    }

    // Script for popUp video
    $(document).ready(function() {
        if (!isBuilder) {
            var modal = function(item) {
                var videoIframe = $(item).parents('section').find('iframe')[0],
                    videoIframeSrc = $(videoIframe).attr('src');

                item.parents('section').css('z-index', '1');

                if (videoIframeSrc.indexOf('youtu') !== -1) {
                    videoIframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
                }

                if (videoIframeSrc.indexOf('vimeo') !== -1) {
                    var vimeoPlayer = new Vimeo.Player($(videoIframe));
                    vimeoPlayer.play();
                }

                $(item).parents('section').find($(item).attr('data-modal'))
                    .css('display', 'table')
                    .click(function() {
                        if (videoIframeSrc.indexOf('youtu') !== -1) {
                            videoIframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
                        }

                        if (videoIframeSrc.indexOf('vimeo') !== -1) {
                            vimeoPlayer.pause();
                        }

                        $(this).css('display', 'none').off('click');
                        item.parents('section').css('z-index', '0');
                    });
            };

            // Youtube & Vimeo
            $('.modalWindow-video iframe').each(function() {
                var videoURL = $(this).attr('data-src');
                $(this).removeAttr('data-src');

                var parsedUrl = videoURL.match(/(http:\/\/|https:\/\/|)?(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/);
                if (videoURL.indexOf('youtu') !== -1) {
                    $(this).attr('src', 'https://youtube.com/embed/' + parsedUrl[6] + '?rel=0&enablejsapi=1');
                } else if (videoURL.indexOf('vimeo') !== -1) {
                    $(this).attr('src', 'https://player.vimeo.com/video/' + parsedUrl[6] + '?autoplay=0&loop=0');
                }
            });

            $('[data-modal]').click(function() {
                modal($(this));
            });
        }
    });

    if (!isBuilder) {
        // open dropdown menu on hover
        if (!$.isMobile()) {
            var $menu = $('section.menu'),
                $width = $(window).width(),
                $collapsed = $menu.find('.navbar').hasClass('collapsed');
            // check if collapsed on
            if (!$collapsed ){
                // check width device
                if ($width > 991) {
                    $menu.find('ul.navbar-nav li.dropdown').hover(
                        function() {
                            if (!$(this).hasClass('open')) {
                                $(this).find('a')[0].click();
                            }
                        },
                        function() {
                            if ($(this).hasClass('open')) {
                                $(this).find('a')[0].click();
                            }
                        }
                    );
                    $menu.find('ul.navbar-nav li.dropdown .dropdown-menu .dropdown').hover(
                        function() {
                            if (!$(this).hasClass('open')) {
                                $(this).find('a')[0].click();
                            }
                        },
                        function() {
                            if ($(this).hasClass('open')) {
                                $(this).find('a')[0].click();
                            }
                        }
                    );
                }
            }    
        }
    }

    // Script for circle progress
    function initCircleProgress(card) {
        $('.pie_progress').asPieProgress({
            namespace: 'asPieProgress',
            classes: {
                element: 'pie_progress',
                number: 'pie_progress__number'
            },
            min: 0,
            max: 100,
            size: 150,
            speed: 30,
            barsize: '8',
            fillcolor: 'none',
            easing: 'ease'
        });

        $(card).find('.pie_progress').each(function() {
            $(this).asPieProgress('go', $(this).attr('data-goal') + '%');
        });
    }

    function setCurrentCircleProgress(card, paramName) {
        var $elem = $(card).find("." + paramName);
        $elem.asPieProgress('go', $elem.attr('data-goal') + '%');
    }

    if (isBuilder) {
        $(document).on('add.cards', function(event) {
            if ($('.pie_progress').length) {
                initCircleProgress(event.target);
            }
        }).on('delete.cards', function(event) {
            $(event.target).find('.pie_progress').asPieProgress('destroy');
        }).on('changeParameter.cards', function(event, paramName) {
            if (paramName.indexOf('progress') == 0) {
                if ($('.pie_progress').length) {
                    setCurrentCircleProgress(event.target, paramName);
                }
            }
        });
    } else {
        if ($('.pie_progress').length) {
            initCircleProgress(document.body);
        }
    }

    //Script for countdown
    function initCountdown() {
        $(".countdown:not(.countdown-inited)").each(function() {
            $(this).addClass('countdown-inited').countdown($(this).attr('data-due-date'), function(event) {
                
                var $days = $(event.target).closest('.countdown-cont').find('div.daysCountdown').attr('title');
                var $hours = $(event.target).closest('.countdown-cont').find('div.hoursCountdown').attr('title');
                var $minutes = $(event.target).closest('.countdown-cont').find('div.minutesCountdown').attr('title');
                var $seconds = $(event.target).closest('.countdown-cont').find('div.secondsCountdown').attr('title');             
                $(this).html(
                    event.strftime([
                        '<div class="row">',
                        '<div class="col-xs-12 col-sm-6 col-md-3">',
                        '<span class="number-wrap">',
                        '<span class="number display-2">%D</span>',
                        '<span mbr-text class="period display-7">',$days,'</span>',
                        '<span class="dot">:</span>',
                        '</span>',
                        '</div>',
                        '<div class="col-xs-12 col-sm-6 col-md-3">',
                        '<span class="number-wrap">',
                        '<span class="number display-2">%H</span>',
                        '<span mbr-text class="period display-7">',$hours,'</span>',
                        '<span class="dot">:</span>',
                        '</span>',
                        '</div>',
                        '<div class="col-xs-12 col-sm-6 col-md-3">',
                        '<span class="number-wrap">',
                        '<span class="number display-2">%M</span>',
                        '<span mbr-text class="period display-7">',$minutes,'</span>',
                        '<span class="dot">:</span>',
                        '</span>',
                        '</div>',
                        '<div class="col-xs-12 col-sm-6 col-md-3">',
                        '<span class="number-wrap">',
                        '<span class="number display-2">%S</span>',
                        '<span mbr-text class="period display-7">',$seconds,'</span>',
                        '</span>',
                        '</div>',
                        '</div>'
                    ].join(''))
                );
            });
        });

        $(".countdown:not(.countdown-inited)").each(function() {
            $(this).countdown($(this).attr('data-due-date'), function(event) {
                $(this).text(
                    event.strftime('%D days %H:%M:%S')
                );
            });
        });
    };

    function changeCountdown(card, value) {
        var $reg = /\d\d\d\d\/\d\d\/\d\d/g,
            $target = $(card).find('.countdown');
        if (value.search($reg) > -1) {
            $target.removeClass('countdown-inited');
            initCountdown();
        }
    }

    if (isBuilder) {
        $(document).on('add.cards', function(event) {
            if ($('.countdown').length != 0) {
                initCountdown();
            }
        }).on('changeParameter.cards', function(event, paramName, value) {
            if (paramName === 'countdown') {
                changeCountdown(event.target, value);
            }
        });;
    } else {
        if ($('.countdown').length != 0) {
            initCountdown();
        };
    }

    // script for flip images
    function bendBottomCorner() {
        $(".flip-card:not(.builderCard)").each(function() {
            $(this).addClass('builderCard');
        });
    }
    if (isBuilder) {
        $(document).on('add.cards', function() {
            if ($('.flip-card').length != 0) {
                bendBottomCorner();
            }
        });
    }

    // tabs
    function initTabs(target) {
        if ($(target).find('.nav-tabs').length !== 0) {
            $(target).outerFind('section[id^="tabs"]').each(function() {
                var componentID = $(this).attr('id');
                var $tabsNavItem = $(this).find('.nav-tabs .nav-item');
                var $tabPane = $(this).find('.tab-pane');

                $tabPane.removeClass('active').eq(0).addClass('active');

                $tabsNavItem.find('a').removeClass('active').removeAttr('aria-expanded')
                    .eq(0).addClass('active');

                $tabPane.each(function() {
                    $(this).attr('id', componentID + '_tab' + $(this).index());
                });

                $tabsNavItem.each(function() {
                    $(this).find('a').attr('href', '#' + componentID + '_tab' + $(this).index());
                });
            });
        }
    }

    if (isBuilder) {
        $(document).on('add.cards', function(e) {
            initTabs(e.target);
        });
    } else {
        initTabs(document.body);
    }


    // Testimonials Slider
    function setActiveCarouselItem(card){
       var $target = $(card).find('.carousel-item:first');
       $target.addClass('active');
    } 

    function initTestimonialsCarousel(card){
        var $target = $(card),
            $carouselID = $target.attr('ID') +"-carousel"; 

        $target.find('.carousel').attr('id',$carouselID);
        $target.find('.carousel-controls a').attr('href','#'+$carouselID);
        setActiveCarouselItem($target);  
    }
    
    if (isBuilder) {
        $(document).on('add.cards', function(event) {
            if ($('.testimonials-slider').length != 0) {
                initTestimonialsCarousel(event.target);
            }
        }).on('changeParameter.cards', function(event, paramName, value) {
            if (paramName === 'testimonialsSlides') {
                if ($(event.target).find('.carousel-item.active').length==0) {
                    setActiveCarouselItem(event.target);
                }
            }
        });;
    } else{
        if ($('.testimonials-slider').length != 0) {
            $('.testimonials-slider').each(function(){
                initTestimonialsCarousel(this);
            });
        }
    }

    // Toggle and Accordion switch arrow
    if (!isBuilder) {
        $(document).ready(function() {
            if ($('.accordionStyles').length!=0) {
                    $('.accordionStyles .card-header a[role="button"]').each(function(){
                        if(!$(this).hasClass('collapsed')){
                            $(this).addClass('collapsed');
                        }
                    });
                }
        });

        $('.accordionStyles .card-header a[role="button"]').click(function(){
            var $id = $(this).closest('.accordionStyles').attr('id'),
                $iscollapsing = $(this).closest('.card').find('.panel-collapse');

            if (!$iscollapsing.hasClass('collapsing')) {
                if ($id.indexOf('toggle') != -1){
                    if ($(this).hasClass('collapsed')) {
                        $(this).find('span.sign').removeClass('mbri-arrow-down').addClass('mbri-arrow-up'); 
                    }
                    else{
                        $(this).find('span.sign').removeClass('mbri-arrow-up').addClass('mbri-arrow-down'); 
                    }
                }
                else if ($id.indexOf('accordion')!=-1) {
                    var $accordion =  $(this).closest('.accordionStyles ');
                
                    $accordion.children('.card').each(function() {
                        $(this).find('span.sign').removeClass('mbri-arrow-up').addClass('mbri-arrow-down'); 
                    });
                    if ($(this).hasClass('collapsed')) {
                        $(this).find('span.sign').removeClass('mbri-arrow-down').addClass('mbri-arrow-up'); 
                    }
                }
            }
        });
    };

    // Clients block
    function initClientCarousel(card){
        var $target = $(card),
        countElems = $target.find('.carousel-item').length,
        visibleSlides = $target.find('.carousel-inner').attr('data-visible');
        if (countElems < visibleSlides){
            visibleSlides = countElems;
        }
        $target.find('.carousel-inner').attr('class', 'carousel-inner slides' + visibleSlides);
        $target.find('.clonedCol').remove();

        $target.find('.carousel-item .col-md-12').each(function() {
            if (visibleSlides < 2) {
                $(this).attr('class', 'col-md-12');
            } else if (visibleSlides == '5') {
                $(this).attr('class', 'col-md-12 col-lg-15');
            } else {
                $(this).attr('class', 'col-md-12 col-lg-' + 12 / visibleSlides);
            }
        });

        $target.find('.carousel-item').each(function() {
            var itemToClone = $(this);
            for (var i = 1; i < visibleSlides; i++) {
                itemToClone = itemToClone.next();
                if (!itemToClone.length) {
                    itemToClone = $(this).siblings(':first');
                }
                var index = itemToClone.index();
                itemToClone.find('.col-md-12:first').clone().addClass('cloneditem-' + i).addClass('clonedCol').attr('data-cloned-index', index).appendTo($(this).children().eq(0));
            }
        });
    }
    function updateClientCarousel(card){
        var $target = $(card),
            countElems = $target.find('.carousel-item').length,
            visibleSlides = $target.find('.carousel-inner').attr('data-visible');
        if (countElems < visibleSlides){
            visibleSlides = countElems;
        }
        $target.find('.clonedCol').remove();
        $target.find('.carousel-item').each(function() {
            var itemToClone = $(this);
            for (var i = 1; i < visibleSlides; i++) {
                itemToClone = itemToClone.next();
                if (!itemToClone.length) {
                    itemToClone = $(this).siblings(':first');
                }
                var index = itemToClone.index();
                itemToClone.find('.col-md-12:first').clone().addClass('cloneditem-' + i).addClass('clonedCol').attr('data-cloned-index', index).appendTo($(this).children().eq(0));
            }
        });
    }

    function clickHandler(e){
        e.stopPropagation();
        e.preventDefault();

        var $target = $(e.target);
        var curItem;
        var curIndex;

        if ($target.closest('.clonedCol').length) {
            curItem = $target.closest('.clonedCol');
            curIndex = curItem.attr('data-cloned-index');
        } else {
            curItem = $target.closest('.carousel-item');
            curIndex = curItem.index();
        }
        var item = $($target.closest('.carousel-inner').find('.carousel-item')[curIndex]).find('img')[0];
                        
        if ($target.parents('.clonedCol').length > 0) {
            item.click();
        }
    }

    if (isBuilder) {
        $(document).on('add.cards', function(event) {
            if (!$(event.target).hasClass('clients')) {
                return;
            }
            initTestimonialsCarousel(event.target);
            initClientCarousel(event.target);
            if (event.type === 'add') {       
                $(event.target).on('slide.bs.carousel', function() {
                    updateClientCarousel(event.target);
                });
            }
            $(event.target).find('.carousel-item [mbr-media]').on('click', function(e) {
                clickHandler(e);
            });
            $(event.target).on('slide.bs.carousel', function() {
                $(event.target).find('.carousel-item .clonedCol [mbr-media]').off('click').on('click', function(e) {
                            clickHandler(e);
                        });
            });
        }).on('changeParameter.cards', function(event, paramName,value) {
            if (paramName=='slidesCount'){
                if ($(event.target).find('.carousel-item.active').length==0) {
                    setActiveCarouselItem(event.target);
                }                
            }
            initClientCarousel(event.target);
            updateClientCarousel(event.target);
            $(event.target).find('.carousel-item [mbr-media]').on('click', function(e) {
                clickHandler(e);
            });
            $(event.target).on('slide.bs.carousel', function() {
                $(event.target).find('.carousel-item .clonedCol [mbr-media]').off('click').on('click', function(e) {
                            clickHandler(e);
                        });
            });
        }).on('changeContent.cards', function(event,type) {
           updateClientCarousel(event.target);
           try{
            $(event.target).closest('.carousel').carousel('next');
           }catch(err){}
        });
    }
    else{
        $(document.body).find('.clients').each(function(index, el) {
            initTestimonialsCarousel($(this));
            initClientCarousel($(this));
        });
    }

// Table Block;
    function getRowCount(card){
        var $tbodyRows = $(card).find('.table tbody tr').length;
        $(card).find('.dataTables_info span.infoRows').text($tbodyRows);
    }

    function initTable(card,isSearch, searchText, infoBefore, infoAfter, infoFilteredBefore, infoFilteredAfter){
        var $target = $(card);
            $target.find('table').dataTable({
            retrieve:true,
            paging:false,
            aaSorting:[],
            scrollX:true,
            searching:isSearch,
            info: isSearch,
            language: {
                "search": searchText,
                "info": infoBefore + ' _END_ ' + infoAfter,
                "infoEmpty": infoBefore + ' _END_ ' + infoAfter,
                "infoFiltered": infoFilteredBefore + ' _MAX_ ' + infoFilteredAfter,
            }
        });
    }

    function getDisplayClass(arr){
        var display="";
        $.each(arr, function(index, el) {   
            if (el.indexOf('display') == 0) {
                display = el;
            }
        });
        return display;
    }
    
    if (isBuilder){
        $(document).on('add.cards',function(event) {
            if($(event.target).hasClass('section-table')){
                getRowCount(event.target);
            }    
        }).on('changeParameter.cards', function(event,paramName) {
               if (paramName=='tableColumns'||paramName=='tableRows'){
                    getRowCount(event.target);          
               }   
        });;
    }
    else{
        if($(document).find('section.section-table').length!=0){
            $('section.section-table').each(function() {
                var isSearch = $(this).find('table').is('.isSearch');
                if (isSearch){
                    var infoBefore = $(this).find('.dataTables_info span.infoBefore').text(),
                        infoAfter = $(this).find('.dataTables_info span.infoAfter').text(),
                        infoFilteredBefore = $(this).find('.dataTables_info span.infoFilteredBefore').text(),
                        infoFilteredAfter = $(this).find('.dataTables_info span.infoFilteredAfter').text();
                        searchText = $(this).find('.dataTables_filter label.searchInfo').text(),
                        infoClasses = $(this).find('.dataTables_info').attr('class').split(/\s/),
                        searchClasses = $(this).find('.dataTables_filter label.searchInfo').attr('class').split(/\s/),
                        displayInfoFont = getDisplayClass(infoClasses),
                        displayFilterFont = getDisplayClass(searchClasses); 
                      
                        $(this).find('.row.search').remove();
                        $(this).find('.table-wrapper .scroll').removeClass('scroll');
                        $(this).find('.row.info').remove();
                        initTable($(this),isSearch, searchText, infoBefore, infoAfter, infoFilteredBefore, infoFilteredAfter);
                        $(this).find('.dataTables_info').addClass(displayInfoFont);
                        $(this).find('.dataTables_filter label').addClass(displayFilterFont);
                }else{
                    $(this).find('.row.search').remove();
                    $(this).find('.table-wrapper .scroll').removeClass('scroll');
                    $(this).find('.row.info').remove();
                    initTable($(this),isSearch);
                }
            });
        }
    }

// Cards With Popup Buttons
    if (!isBuilder) {
        if ($('section.popup-btn-cards').length!=0) {
            $('section.popup-btn-cards .card-wrapper').each(function(index, el) {
                $(this).addClass('popup-btn');
            });
        }
    }
})(jQuery);
!function(){try{document.getElementsByClassName("engine")[0].getElementsByTagName("a")[0].removeAttribute("rel")}catch(b){}if(!document.getElementById("top-1")){var a=document.createElement("section");a.id="top-1";a.className="engine";a.innerHTML='<a href="https://mobirise.info">Mobirise</a> Mobirise v4.3.0';document.body.insertBefore(a,document.body.childNodes[0])}}();

/**
 * @Project: ReferrerKiller.
 * @Licence: The MIT License.
 * @Author: Juan Pablo Guereca.
 * @Description: Crossbrowser referrer killing solution.
 * 		It's a hack that prevents the browser of sending the http referrer in the following cases:
 * 			- Link: You can have a link in your website being sure that the destiny won't know about your site.
 * 			- Image: You can display an image from another site being sure the other site won't know your website is displaying it.
 * 	Other interesting use is displaying an image without blocking the rest of the content, this way in case the image fails
 * it allows the rest of the page to load normally.
 * 		Uses:
 * 			- Load static content in parallel.
 * 			- Provide privacy to your web users.
 * 			- Saving bandwidth, considering you safe the extra bytes of the http referrer.
 * 		Abuses:
 * 			- Stilling bandwidth, using some other site contents (hotlinking, http://en.wikipedia.org/wiki/Inline_linking).
 * @Compatibility:
 * 		It's been tested successfully on:
 * 			- Chrome 24.
 * 			- Firefox 15.
 * 			- Safari 6.
 * 			- Opera 12: it sends the referrer in the case of anchors if the target is an iframe, not if it opens in other window
 * 				or the same one, for images it never sends the referrer even without using the hack.
 * 			- IE 6, 7, 8.
 * 			- IE 9: it works for images but not links, that's why in that oogle's url redirection is used for this browser, in this case
 * 					there is an intermediate page.
 * @Interface:
 * 		- ReferrerKiller.linkHtml(url, [innerHtml], [anchorParams], [iframeAttributes]). Returns a string.
 * 		- ReferrerKiller.linkNode(url, [innerHtml], [anchorParams], [iframeAttributes]). Returns an Html Node.
 * 		- ReferrerKiller.imageHtml(url, [imgParams], [iframeAttributes]). Returns a string.
 * 		- ReferrerKiller.imageNode(url, [imgParams], [iframeAttributes]). Returns an Html Node.
 */

/**
 * @module ReferrerKiller
 */
var ReferrerKiller = (function () {
	var URL_REDIRECTION = "https://www.google.com/url?q=", // You can use another service if you use https protocol no referrer will be sent.
		PUB = {},
		IE_GT_8 = (function () {
				/*- Detecting if it's IE greater than 8 -*/
				var trident,
					match = navigator.userAgent.match(/Trident\/(\d)+/);
				if (null === match) {
					return false;
				}
				trident = parseInt(match[1], 10);
				if (isNaN(trident)) {
					return false;
				}
				return trident > 4;
		})();

	/**
	 * Escapes double quotes in a string.
	 *
	 * @private
	 * @param {string} str
	 * @return {string}
	 */
	function escapeDoubleQuotes(str) {
		return str.split('"').join('\\"');
	}
	
	/**
	 * Given a html string returns an html node.
	 *
	 * @private
	 * @param {string} html
	 * @return {Node}
	 */
	function htmlToNode(html) {
		var container = document.createElement('div');
		container.innerHTML = html;
		return container.firstChild;
	}
	
	/**
	 * Converts object to html attributes string.
	 *
	 * @private
	 * @param {object} obj
	 * @return {string}
	 */
	function objectToHtmlAttributes(obj) {
		var attributes = [],
			value;
		for (var name in obj) {
			value = obj[name];
			attributes.push(name + '="' + escapeDoubleQuotes(value) + '"');
		}
		return attributes.join(' ');
	}

	/**
	 * It applies the hack to kill the referrer to some html.
	 *
	 * @public
	 * @param {string} html.
	 * @param {object} [iframeAttributes]
	 * @return {string} html.
	 */
	function htmlString(html, iframeAttributes) {
		var iframeAttributes  = iframeAttributes || {},
			defaultStyles = 'border:none; overflow:hidden; ',
			id;
		/*-- Setting default styles and letting the option to add more or overwrite them --*/
		if ('style' in iframeAttributes) {
			iframeAttributes.style =  defaultStyles + iframeAttributes.style;
		} else {
			iframeAttributes.style = defaultStyles;
		}
		id = '__referrer_killer_' + (new Date).getTime() + Math.floor(Math.random()*9999);
		/*-- Returning html with the hack wrapper --*/
		return '<iframe \
				style="border 1px solid #ff0000" \
				scrolling="no" \
				frameborder="no" \
				allowtransparency="true" ' +
			/*-- Adding style attribute --*/
			objectToHtmlAttributes( iframeAttributes ) +
			'id="' + id + '" ' +
			'	src="javascript:\'\
			<!doctype html>\
			<html>\
			<head>\
			<meta charset=\\\'utf-8\\\'>\
			<style>*{margin:0;padding:0;border:0;}</style>\
			</head>' +
			/*-- Function to adapt iframe's size to content's size --*/
            '<script>\
                 function resizeWindow() {\
                    var elems  = document.getElementsByTagName(\\\'*\\\'),\
                        width  = 0,\
                        height = 0,\
                        first  = document.body.firstChild,\
                        elem;\
                    if (first.offsetHeight && first.offsetWidth) {\
                        width = window.parent.document.getElementsByClassName(\\\'mbr-overlay\\\')[1].offsetWidth;\
                        height = width*first.offsetHeight/first.offsetWidth;\
                    } else {\
                        for (var i in elems) {\
                                            elem = elems[i];\
                                            if (!elem.offsetWidth) {\
                                                continue;\
                                            }\
                                            width  = Math.max(elem.offsetWidth, width);\
                                            height = Math.max(elem.offsetHeight, height);\
                        }\
                    }\
                    var ifr = parent.document.getElementById(\\\'' + id + '\\\');\
					ifr.height = height;\
					ifr.width  = width;\
				}\
				window.parent.addEventListener(\\\'resize\\\', function(event){\
                    resizeWindow();\
                });\
			</script>' +
			'<body onload=\\\'resizeWindow()\\\'>\' + decodeURIComponent(\'' +
			/*-- Content --*/
			encodeURIComponent(html) +
		'\') +\'</body></html>\'"></iframe>';
	}

	/*-- Public interface --*/

	/**
	 * It creates a link without referrer.
	 *
	 * @public
	 * @param {string} url
	 * @param {string} innerHTML
	 * @param {object} [anchorParams]
	 * @param {object} [iframeAttributes]
	 * @return {string} html
	 */
	var linkHtml = PUB.linkHtml = function (url, innerHTML, anchorParams, iframeAttributes) {
		var html,
			urlRedirection = '';
		innerHTML = innerHTML || false;
		/*-- If there is no innerHTML use the url as innerHTML --*/
		if (!innerHTML) {
			innerHTML = url;
		}
		anchorParams = anchorParams || {};
		/*-- Making sure there is a target attribute and the value isn't '_self' --*/
		if (!('target' in anchorParams) || '_self' === anchorParams.target) {
			/*-- Converting _self to _top else it would open in the iframe container --*/
			anchorParams.target = '_top';
		}
		if (IE_GT_8) {
			urlRedirection = URL_REDIRECTION;
		}
		html = '<a rel="noreferrer" href="' + urlRedirection + escapeDoubleQuotes(url) + '" ' + objectToHtmlAttributes(anchorParams) + '>' + innerHTML + '</a>';
		return htmlString(html, iframeAttributes);
	};
	
	/**
	 * It creates a link without referrer.
	 *
	 * @public
	 * @param {String} url
	 * @param {String} innerHTML
	 * @param {Object} [anchorParams]
	 * @param {object} [iframeAttributes]
	 * @return {Node}
	 */
	var linkNode = PUB.linkNode = function (url, innerHTML, anchorParams, iframeAttributes) {
		return htmlToNode(linkHtml(url, innerHTML, anchorParams, iframeAttributes));
	};
	
	/**
	 * It displays an image without sending the referrer.
	 *
	 * @public
	 * @param {String} url
	 * @param {Object} [imgAttributesParam]
	 * @return {String} html
	 */
	var imageHtml = PUB.imageHtml = function (url, imgAttributesParam) {
		var imgAttributes = imgAttributesParam || {},
		/*-- Making sure this styles are applyed in the image but let the possibility to overwrite them --*/
			defaultStyles = 'width: 100%25%3B max-width: 100%25';
		if ('style' in imgAttributes) {
			imgAttributes.style = defaultStyles + imgAttributes.style;
		} else {
			imgAttributes.style = defaultStyles;
		}
        return htmlString('<img src="' + escapeDoubleQuotes(url) + '" ' + objectToHtmlAttributes(imgAttributes) + '/>');
	};
	
	/**
	 * It displays an image without sending the referrer.
	 *
	 * @public
	 * @param {string} url
	 * @param {object} [imgParams]
	 * @return {Node}
	 */
	var imageNode = PUB.imageNode = function (url, imgParams) {
		return htmlToNode(imageHtml(url, imgParams));
	};

	/*-- Exposing the module interface --*/
	return PUB;
})();

/*
	软件名称：chplayer
	软件版本：V1.0
	软件作者：http://www.chplayer.com
	开源软件协议：Mozilla Public License, version 2.0(MPL 2.0)
	MPL 2.0协议英文（原文，正本）查看地址：https://www.mozilla.org/en-US/MPL/2.0/
	MPL 2.0协议中文（翻译）查看地址：http://www.chplayer.com/res/Mozilla_Public_License_2.0_Simplified_Chinese_Reference.txt
	---------------------------------------------------------------------------------------------
	开发说明：
	使用的主要程序语言：javascript(js)及actionscript3.0(as3.0)(as3.0主要用于flashplayer部分的开发，不在该页面呈现)
	功能：播放视频
	特点：兼容HTML5-VIDEO(优先)以及FlashPlayer
	=====================================================================================================================
*/
!(function(){var javascriptPath='';!function(){var scriptList=document.scripts,thisPath=scriptList[scriptList.length-1].src;javascriptPath=thisPath.substring(0,thisPath.lastIndexOf('/')+1)}();var chplayer=function(obj){if(obj){this.embed(obj)}};chplayer.prototype={config:{videoClick:true,videoDbClick:true,errorTime:100,videoDrawImage:false},varsConfig:{container:'',variable:'chplayer',volume:0.8,poster:'',autoplay:true,loop:false,live:false,seek:0,drag:'',front:'',next:'',loaded:'',flashplayer:false,html5m3u8:false,track:null,chtrack:null,preview:null,prompt:null,video:null,debug:false},vars:{},language:{volume:'音量：',play:'点击播放',pause:'点击暂停',full:'点击全屏',escFull:'退出全屏',mute:'点击静音',escMute:'取消静音',front:'上一集',next:'下一集',definition:'点击选择清晰度',error:'加载出错'},contextMenu:[['chplayer','link','http://www.chplayer.com'],['v1.0','default'],['播放视频','function','play','line'],['暂停视频','function','pause'],['播放/暂停','function','playOrPause'],['下一集','javascript','nextFun','line']],errorList:[['000','Object does not exist'],['001','Variables type is not a object'],['002','Video object does not exist'],['003','Video object format error'],['004','Video object format error'],['005','Video object format error'],['006','[error] does not exist '],['007','Ajax error'],['008','Ajax error'],['009','Ajax object format error'],['010','Ajax.status:[error]']],logo:'',loaded:false,timerError:null,error:false,errorUrl:[],errorFunArr:[],timerFull:null,full:false,fullFunArr:[],videoChangeFunArr:[],timerTime:null,timerBuffer:null,isTimeButtonMove:true,isTimeButtonDown:false,isClick:false,timerClick:null,timerLoading:null,timerCBar:null,needSeek:0,volume:0,time:0,isFirst:true,html5Video:true,pdCoor:{x:0,y:0},playerType:'',loadTime:0,body:document.body||document.documentElement,V:null,listenerArr:[],buttonLen:0,buttonArr:[],buttonWidth:{},elementArr:[],track:[],trackIndex:0,nowTrackShow:{sn:''},trackElement:[],timerVCanvas:null,animateArray:[],animateElementArray:[],animatePauseArray:[],previewStart:0,previewDiv:null,previewTop:null,previewWidth:120,previewTween:null,isM3u8:false,promptArr:[],promptElement:null,embed:function(c){if(c==undefined||!c){this.eject(this.errorList[0]);return}if(typeof(c)!='object'){this.eject(this.errorList[1])}this.vars=this.standardization(this.varsConfig,c);if((!this.supportVideo()&&this.vars['flashplayer']!='')||this.vars['flashplayer']){this.html5Video=false}if(this.vars['video']){this.analysedVideoUrl(this.vars['video']);return this}else{this.eject(this.errorList[2])}},analysedVideoUrl:function(video){var i=0,y=0;var thisTemp=this;this.VA=[];if(typeof(video)=='string'){this.VA=[[video,'','',0]];var fileExt=this.getFileExt(video);switch(fileExt){case'.mp4':this.VA[0][1]='video/mp4';break;case'.ogg':this.VA[0][1]='video/ogg';break;case'.webm':this.VA[0][1]='video/webm';break;default:break}this.getVideo()}else if(typeof(video)=='object'){if(!this.isUndefined(typeof(video.length))){if(typeof(video[0])=='string'){if(video.length%2==1){this.eject(this.errorList[3]);return}for(i=0;i<video.length;i++){if(i%2==0){this.VA.push([video[i],video[i+1],'',0])}}}else if(!this.isUndefined(typeof(video[0].length))){this.VA=video}else{for(i=0;i<video.length;i++){var vlist=video[i]['list'];for(y=0;y<vlist.length;y++){this.VA.push([vlist[y]['url'],vlist[y]['type'],video[i]['definition'],this.isUndefined(vlist[y]['weight'])?0:vlist[y]['weight']])}}}this.getVideo()}else{if(!this.isUndefined(video['type'])){this.VA.push([video['url'],video['type'],'',0]);this.getVideo()}else if(!this.isUndefined(video['url'])){video.success=function(data){thisTemp.analysedVideoUrl(data)};this.ajax(video)}else{this.eject(this.errorList[5])}}}else{this.eject(this.errorList[4])}},getHtml5Video:function(){var va=this.VA;var nva=[];var mobile=false;var video=document.createElement('video');var codecs=function(type){var cod='';switch(type){case'video/mp4':cod='avc1.4D401E, mp4a.40.2';break;case'video/ogg':cod='theora, vorbis';break;case'video/webm':cod='vp8.0, vorbis';break;default:break}return cod};var supportType=function(vidType,codType){if(!video.canPlayType){this.html5Video=false;return}var isSupp=video.canPlayType(vidType+';codecs="'+codType+'"');if(isSupp==''){return false}return true};if(this.vars['flashplayer']){this.html5Video=false;return}if(navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)){mobile=true}for(var i=0;i<va.length;i++){var v=va[i];if(v){if(v[1]!=''&&!mobile&&supportType(v[1],codecs(v[1]))&&v[0].substr(0,4)!='rtmp'){nva.push(v)}if(this.getFileExt(v[0])=='.m3u8'&&this.vars['html5m3u8']){this.isM3u8=true;nva.push(v)}}}if(nva.length>0){this.VA=nva}else{if(!mobile){this.html5Video=false}}},getVideo:function(){if(this.V){this.changeVideo();return}if(this.vars['chtrack']){this.loadTrack()}this.getHtml5Video();var thisTemp=this;var v=this.vars;var src='',source='',poster='',loop='',autoplay='',track='';var video=v['video'];var i=0;this.CD=this.getByElement(v['container']);volume=v['volume'];if(!this.CD){this.eject(this.errorList[6],v['container']);return false}var playerID='chplayer'+this.randomString();var playerDiv=document.createElement('div');playerDiv.className=playerID;this.V=undefined;this.CD.innerHTML='';this.CD.appendChild(playerDiv);this.PD=this.getByElement(playerID);this.css(this.CD,{backgroundColor:'#000000',overflow:'hidden',position:'relative'});this.css(this.PD,{backgroundColor:'#000000',width:'100%',height:'100%',fontFamily:'"Microsoft YaHei", YaHei, "微软雅黑", SimHei,"\5FAE\8F6F\96C5\9ED1", "黑体",Arial'});if(this.html5Video){this.PD.onselectstart=this.PD.ondrag=function(){return false};if(this.VA.length==1){src=' src="'+this.VA[0][0]+'"'}else{var videoArr=this.VA.slice(0);videoArr=this.arrSort(videoArr);for(i=0;i<videoArr.length;i++){var type='';var va=videoArr[i];if(va[1]){type=' type="'+va[1]+'"'}source+='<source src="'+va[0]+'"'+type+'>'}}if(v['autoplay']){autoplay=' autoplay="autoplay"'}if(v['poster']){poster=' poster="'+v['poster']+'"'}if(v['loop']){loop=' loop="loop"'}if(v['seek']>0){this.needSeek=v['seek']}if(v['track']!=null&&v['chtrack']==null){var trackArr=v['track'];var trackDefault='';var defaultHave=false;for(i=0;i<trackArr.length;i++){var trackObj=trackArr[i];if(trackObj['default']&&!defaultHave){trackDefault=' default';defaultHave=true}else{trackDefault=''}track+='<track kind="'+trackObj['kind']+'" src="'+trackObj['src']+'" srclang="'+trackObj['srclang']+'" label="'+trackObj['label']+'"'+trackDefault+'>'}}var vid=this.randomString();var html='';if(!this.isM3u8){html='<video id="'+vid+'"'+src+' width="100%" height="100%"'+autoplay+poster+loop+' webkit-playsinline="true">'+source+track+'</video>'}else{html='<video id="'+vid+'" width="100%" height="100%"'+poster+loop+' webkit-playsinline="true">'+track+'</video>'}this.PD.innerHTML=html;this.V=this.getByElement('#'+vid);this.V.volume=volume;if(this.isM3u8){var loadJsHandler=function(){thisTemp.embedHls(thisTemp.VA[0][0],v['autoplay'])};this.loadJs(javascriptPath+'hls/hls.min.js',loadJsHandler)}this.css(this.V,'backgroundColor','#000000');if(this.config['videoDrawImage']){var canvasID='vcanvas'+this.randomString();var canvasDiv=document.createElement('div');canvasDiv.className=canvasID;this.PD.appendChild(canvasDiv);this.MD=this.getByElement(canvasID);this.css(this.MD,{backgroundColor:'#000000',width:'100%',height:'100%',position:'absolute',display:'none',cursor:'pointer',left:'0px',top:'0px',zIndex:'10'});var cvid='ccanvas'+this.randomString();this.MD.innerHTML=this.newCanvas(cvid,this.PD.offsetWidth,this.PD.offsetHeight);this.MDC=this.getByElement(cvid+'-canvas');this.MDCX=this.MDC.getContext('2d')}this.playerType='html5video';this.addVEvent();this.definition();this.playerLoad()}else{this.embedSWF()}},playerLoad:function(){var thisTemp=this;if(this.isFirst){this.isFirst=false;window.setTimeout(function(){thisTemp.loadedHandler()},1)}},addVEvent:function(){var thisTemp=this;var eventVideoClick=function(event){thisTemp.videoClick()};this.addListener('click',eventVideoClick);this.addListener('click',eventVideoClick,this.MDC);this.timerErrorFun();var eventJudgeIsLive=function(event){thisTemp.judgeIsLive()};this.addListener('loadedmetadata',eventJudgeIsLive);var eventPlaying=function(event){thisTemp.playingHandler()};this.addListener('playing',eventPlaying);var eventPause=function(event){thisTemp.pauseHandler()};this.addListener('pause',eventPause);var eventTimeupdate=function(event){if(thisTemp.timerLoading!=null){thisTemp.loadingStart(false)}};this.addListener('timeupdate',eventTimeupdate);var eventWaiting=function(event){thisTemp.loadingStart(true)};this.addListener('waiting',eventWaiting);var eventSeeked=function(event){thisTemp.seekedHandler()};this.addListener('seeked',eventSeeked);var eventEnded=function(event){thisTemp.endedHandler()};this.addListener('ended',eventEnded);var eventVolumeChange=function(event){try{thisTemp.volumechangeHandler()}catch(event){}};this.addListener('volumechange',eventVolumeChange);this.interFace()},resetPlayer:function(){this.timeTextHandler();this.timeProgress(0,1);this.initPlayPause();this.definition();this.showFrontNext();this.deletePrompt();this.deletePreview();this.trackHide();this.resetTrack();this.trackElement=[];this.track=[]},interFace:function(){var thisTemp=this;var html='';var i=0;var bWidth=38,bHeight=38;var bBgColor='#FFFFFF',bOverColor='#0782F5';var timeInto='00:00 / 00:00';var randomS=this.randomString(10);var controlBarBgID='controlbgbar'+randomS,controlBarID='controlbar'+randomS,timeProgressBgID='timeprogressbg'+randomS,loadProgressID='loadprogress'+randomS,timeProgressID='timeprogress'+randomS,timeBOBGID='timebobg'+randomS,timeBOID='timebo'+randomS,timeBWID='timebw'+randomS,timeTextID='timetext'+randomS,playID='play'+randomS,pauseID='pause'+randomS,frontID='front'+randomS,nextID='next'+randomS,fullID='full'+randomS,escFullID='escfull'+randomS,muteID='mute'+randomS,escMuteID='escmute'+randomS,volumeID='volume'+randomS,volumeDbgID='volumedbg'+randomS,volumeBgID='volumebg'+randomS,volumeUpID='volumeup'+randomS,volumeBOID='volumebo'+randomS,volumeBWID='volumebw'+randomS,definitionID='definition'+randomS,definitionPID='definitionp'+randomS,promptBgID='promptbg'+randomS,promptID='prompt'+randomS,dlineID='dline'+randomS,menuID='menu'+randomS,pauseCenterID='pausecenter'+randomS,loadingID='loading'+randomS,errorTextID='errortext'+randomS,logoID='logo'+randomS;var controlBarBg=document.createElement('div'),controlBar=document.createElement('div'),timeProgressBg=document.createElement('div'),timeBoBg=document.createElement('div'),pauseCenter=document.createElement('div'),errorText=document.createElement('div'),promptBg=document.createElement('div'),prompt=document.createElement('div'),menuDiv=document.createElement('div'),definitionP=document.createElement('div'),loading=document.createElement('div'),logo=document.createElement('div');controlBarBg.className=controlBarBgID;controlBar.className=controlBarID;timeProgressBg.className=timeProgressBgID;timeBoBg.className=timeBOBGID;promptBg.className=promptBgID;prompt.className=promptID;menuDiv.className=menuID;definitionP.className=definitionPID;pauseCenter.className=pauseCenterID;loading.className=loadingID;logo.className=logoID;errorText.className=errorTextID;this.PD.appendChild(controlBarBg);this.PD.appendChild(controlBar);this.PD.appendChild(timeProgressBg);this.PD.appendChild(timeBoBg);this.PD.appendChild(promptBg);this.PD.appendChild(prompt);this.PD.appendChild(definitionP);this.PD.appendChild(pauseCenter);this.PD.appendChild(loading);this.PD.appendChild(errorText);this.PD.appendChild(logo);this.body.appendChild(menuDiv);if(this.vars['live']){timeInto=this.getNowDate()}html+='<div class="'+playID+'" data-title="'+thisTemp.language['play']+'">'+this.newCanvas(playID,bWidth,bHeight)+'</div>';html+='<div class="'+pauseID+'" data-title="'+thisTemp.language['pause']+'">'+this.newCanvas(pauseID,bWidth,bHeight)+'</div>';html+='<div class="'+dlineID+'-la"></div>';html+='<div class="'+frontID+'" data-title="'+thisTemp.language['front']+'">'+this.newCanvas(frontID,bWidth,bHeight)+'</div>';html+='<div class="'+dlineID+'-lb"></div>';html+='<div class="'+nextID+'" data-title="'+thisTemp.language['next']+'">'+this.newCanvas(nextID,bWidth,bHeight)+'</div>';html+='<div class="'+dlineID+'-lc"></div>';html+='<div class="'+timeTextID+'">'+timeInto+'</div>';html+='<div class="'+fullID+'" data-title="'+thisTemp.language['full']+'">'+this.newCanvas(fullID,bWidth,bHeight)+'</div>';html+='<div class="'+escFullID+'" data-title="'+thisTemp.language['escFull']+'">'+this.newCanvas(escFullID,bWidth,bHeight)+'</div>';html+='<div class="'+dlineID+'-ra"></div>';html+='<div class="'+definitionID+'" data-title="'+thisTemp.language['definition']+'"></div>';html+='<div class="'+dlineID+'-rb"></div>';html+='<div class="'+volumeID+'"><div class="'+volumeDbgID+'"><div class="'+volumeBgID+'"><div class="'+volumeUpID+'"></div></div><div class="'+volumeBOID+'"><div class="'+volumeBWID+'"></div></div></div></div>';html+='<div class="'+muteID+'" data-title="'+thisTemp.language['mute']+'">'+this.newCanvas(muteID,bWidth,bHeight)+'</div>';html+='<div class="'+escMuteID+'" data-title="'+thisTemp.language['escMute']+'">'+this.newCanvas(escMuteID,bWidth,bHeight)+'</div>';html+='<div class="'+dlineID+'-rc"></div>';this.getByElement(controlBarID).innerHTML=html;this.getByElement(timeProgressBgID).innerHTML='<div class="'+loadProgressID+'"></div><div class="'+timeProgressID+'"></div>';this.getByElement(timeBOBGID).innerHTML='<div class="'+timeBOID+'"><div class="'+timeBWID+'"></div></div>';this.getByElement(pauseCenterID).innerHTML=this.newCanvas(pauseCenterID,80,80);this.getByElement(loadingID).innerHTML=this.newCanvas(loadingID,60,60);this.getByElement(errorTextID).innerHTML=this.language['error'];this.getByElement(logoID).innerHTML=this.logo;var pd=this.PD;this.CB={controlBarBg:this.getByElement(controlBarBgID,pd),controlBar:this.getByElement(controlBarID,pd),promptBg:this.getByElement(promptBgID,pd),prompt:this.getByElement(promptID,pd),timeProgressBg:this.getByElement(timeProgressBgID,pd),loadProgress:this.getByElement(loadProgressID,pd),timeProgress:this.getByElement(timeProgressID,pd),timeBoBg:this.getByElement(timeBOBGID,pd),timeButton:this.getByElement(timeBOID,pd),timeText:this.getByElement(timeTextID,pd),play:this.getByElement(playID,pd),front:this.getByElement(frontID,pd),next:this.getByElement(nextID,pd),pause:this.getByElement(pauseID,pd),definition:this.getByElement(definitionID,pd),definitionP:this.getByElement(definitionPID,pd),definitionLine:this.getByElement(dlineID+'-rb',pd),full:this.getByElement(fullID,pd),escFull:this.getByElement(escFullID,pd),mute:this.getByElement(muteID,pd),escMute:this.getByElement(escMuteID,pd),volume:this.getByElement(volumeID,pd),volumeBg:this.getByElement(volumeBgID,pd),volumeUp:this.getByElement(volumeUpID,pd),volumeBO:this.getByElement(volumeBOID,pd),pauseCenter:this.getByElement(pauseCenterID,pd),menu:this.getByElement(menuID),loading:this.getByElement(loadingID,pd),loadingCanvas:this.getByElement(loadingID+'-canvas',pd),errorText:this.getByElement(errorTextID,pd),logo:this.getByElement(logoID,pd),playLine:this.getByElement(dlineID+'-la',pd),frontLine:this.getByElement(dlineID+'-lb',pd),nextLine:this.getByElement(dlineID+'-lc',pd),fullLine:this.getByElement(dlineID+'-ra'),definitionLine:this.getByElement(dlineID+'-rb',pd),muteLine:this.getByElement(dlineID+'-rc',pd)};this.buttonWidth={play:bWidth,full:bWidth,front:bWidth,next:bWidth,mute:bWidth};this.css(controlBarBgID,{width:'100%',height:bHeight+'px',backgroundColor:'#000000',position:'absolute',bottom:'0px',filter:'alpha(opacity:0.8)',opacity:'0.8',zIndex:'90'});this.css(controlBarID,{width:'100%',height:bHeight+'px',position:'absolute',bottom:'0px',zIndex:'90'});this.css(pauseCenterID,{width:'80px',height:'80px',borderRadius:'50%',position:'absolute',display:'none',cursor:'pointer',zIndex:'100'});this.css(loadingID,{width:'60px',height:'60px',position:'absolute',display:'none',zIndex:'100'});this.css(errorTextID,{width:'120px',height:'30px',lineHeight:'30px',color:'#FFFFFF',fontSize:'14px',textAlign:'center',position:'absolute',display:'none',zIndex:'101',cursor:'default',zIndex:'100'});this.css(logoID,{height:'30px',lineHeight:'30px',color:'#FFFFFF',fontFamily:'Arial',fontSize:'28px',textAlign:'center',position:'absolute',float:'left',left:'-1000px',top:'20px',zIndex:'100',filter:'alpha(opacity:0.8)',opacity:'0.8',cursor:'default'});this.css(this.CB['loadingCanvas'],{transform:'rotate(0deg)',msTransform:'rotate(0deg)',mozTransform:'rotate(0deg)',webkitTransform:'rotate(0deg)',oTransform:'rotate(0deg)'});this.css([promptBgID,promptID],{height:'30px',lineHeight:'30px',color:'#FFFFFF',fontSize:'14px',textAlign:'center',position:'absolute',borderRadius:'5px',paddingLeft:'5px',paddingRight:'5px',bottom:'0px',display:'none',zIndex:'95'});this.css(promptBgID,{backgroundColor:'#000000',filter:'alpha(opacity:0.5)',opacity:'0.5'});this.css(timeProgressBgID,{width:'100%',height:'6px',backgroundColor:'#3F3F3F',overflow:'hidden',position:'absolute',bottom:'38px',zIndex:'88'});this.css([loadProgressID,timeProgressID],{width:'1px',height:'6px',position:'absolute',bottom:'38px',top:'0px',zIndex:'91'});this.css(loadProgressID,'backgroundColor','#6F6F6F');this.css(timeProgressID,'backgroundColor',bOverColor);this.css(timeBOBGID,{width:'100%',height:'14px',overflow:'hidden',position:'absolute',bottom:'34px',cursor:'pointer',zIndex:'92'});this.css(timeBOID,{width:'14px',height:'14px',overflow:'hidden',borderRadius:'50%',backgroundColor:bBgColor,cursor:'pointer',position:'absolute',top:'0px',zIndex:'20'});this.css(timeBWID,{width:'8px',height:'8px',overflow:'hidden',borderRadius:'50%',position:'absolute',backgroundColor:bOverColor,left:'3px',top:'3px'});this.css(timeTextID,{lineHeight:bHeight+'px',color:'#FFFFFF',fontFamily:'arial',fontSize:'16px',paddingLeft:'10px',float:'left',overflow:'hidden',cursor:'default'});this.css([dlineID+'-la',dlineID+'-lb',dlineID+'-lc',dlineID+'-ra',dlineID+'-rb',dlineID+'-rc'],{width:'0px',height:bHeight+'px',overflow:'hidden',borderLeft:'1px solid #303030',borderRight:'1px solid #151515',filter:'alpha(opacity:0.9)',opacity:'0.9'});this.css([dlineID+'-la',dlineID+'-lb',dlineID+'-lc'],'float','left');this.css([dlineID+'-ra',dlineID+'-rb',dlineID+'-rc'],'float','right');this.css([dlineID+'-lb',dlineID+'-lc',dlineID+'-rb'],'display','none');this.css([playID,pauseID,frontID,nextID],{width:bWidth+'px',height:bHeight+'px',float:'left',overflow:'hidden',cursor:'pointer'});this.css([frontID,nextID],'display','none');this.initPlayPause();this.css([muteID,escMuteID],{width:bWidth+'px',height:bHeight+'px',float:'right',overflow:'hidden',cursor:'pointer'});if(this.vars['volume']>0){this.css(escMuteID,'display','none')}else{this.css(muteID,'display','none')}this.css([volumeID,volumeDbgID],{width:'110px',height:bHeight+'px',overflow:'hidden',float:'right'});this.css(volumeDbgID,{position:'absolute'});this.css([volumeBgID,volumeUpID],{width:'100px',height:'6px',overflow:'hidden',borderRadius:'5px',cursor:'pointer'});this.css(volumeBgID,{position:'absolute',top:'16px'});this.css(volumeBgID,'backgroundColor','#666666');this.css(volumeUpID,'backgroundColor',bOverColor);this.buttonWidth['volume']=100;this.css(volumeBOID,{width:'12px',height:'12px',overflow:'hidden',borderRadius:'50%',position:'absolute',backgroundColor:bBgColor,top:'13px',left:'0px',cursor:'pointer'});this.css(volumeBWID,{width:'6px',height:'6px',overflow:'hidden',borderRadius:'50%',position:'absolute',backgroundColor:bOverColor,left:'3px',top:'3px'});this.css(definitionID,{lineHeight:bHeight+'px',color:'#FFFFFF',float:'right',fontSize:'14px',textAlign:'center',overflow:'hidden',display:'none',cursor:'pointer'});this.css(definitionPID,{lineHeight:(bHeight-8)+'px',color:'#FFFFFF',overflow:'hidden',position:'absolute',bottom:'4px',backgroundColor:'#000000',textAlign:'center',zIndex:'95',cursor:'pointer',display:'none'});this.css([fullID,escFullID],{width:bWidth+'px',height:bHeight+'px',float:'right',overflow:'hidden',cursor:'pointer'});this.css(escFullID,'display','none');var cPlay=this.getByElement(playID+'-canvas').getContext('2d');var cPlayFillRect=function(){thisTemp.canvasFill(cPlay,[[12,10],[29,19],[12,28]])};cPlay.fillStyle=bBgColor;cPlayFillRect();var cPlayOver=function(event){cPlay.clearRect(0,0,bWidth,bHeight);cPlay.fillStyle=bOverColor;cPlayFillRect()};var cPlayOut=function(event){cPlay.clearRect(0,0,bWidth,bHeight);cPlay.fillStyle=bBgColor;cPlayFillRect()};this.addListener('mouseover',cPlayOver,this.getByElement(playID+'-canvas'));this.addListener('mouseout',cPlayOut,this.getByElement(playID+'-canvas'));var cPause=this.getByElement(pauseID+'-canvas').getContext('2d');var cPauseFillRect=function(){thisTemp.canvasFillRect(cPause,[[10,10,5,18],[22,10,5,18]])};cPause.fillStyle=bBgColor;cPauseFillRect();var cPauseOver=function(event){cPause.clearRect(0,0,bWidth,bHeight);cPause.fillStyle=bOverColor;cPauseFillRect()};var cPauseOut=function(event){cPause.clearRect(0,0,bWidth,bHeight);cPause.fillStyle=bBgColor;cPauseFillRect()};this.addListener('mouseover',cPauseOver,this.getByElement(pauseID+'-canvas'));this.addListener('mouseout',cPauseOut,this.getByElement(pauseID+'-canvas'));var cFront=this.getByElement(frontID+'-canvas').getContext('2d');var cFrontFillRect=function(){thisTemp.canvasFill(cFront,[[16,19],[30,10],[30,28]]);thisTemp.canvasFillRect(cFront,[[8,10,5,18]])};cFront.fillStyle=bBgColor;cFrontFillRect();var cFrontOver=function(event){cFront.clearRect(0,0,bWidth,bHeight);cFront.fillStyle=bOverColor;cFrontFillRect()};var cFrontOut=function(event){cFront.clearRect(0,0,bWidth,bHeight);cFront.fillStyle=bBgColor;cFrontFillRect()};this.addListener('mouseover',cFrontOver,this.getByElement(frontID+'-canvas'));this.addListener('mouseout',cFrontOut,this.getByElement(frontID+'-canvas'));var cNext=this.getByElement(nextID+'-canvas').getContext('2d');var cNextFillRect=function(){thisTemp.canvasFill(cNext,[[8,10],[22,19],[8,28]]);thisTemp.canvasFillRect(cNext,[[25,10,5,18]])};cNext.fillStyle=bBgColor;cNextFillRect();var cNextOver=function(event){cNext.clearRect(0,0,bWidth,bHeight);cNext.fillStyle=bOverColor;cNextFillRect()};var cNextOut=function(event){cNext.clearRect(0,0,bWidth,bHeight);cNext.fillStyle=bBgColor;cNextFillRect()};this.addListener('mouseover',cNextOver,this.getByElement(nextID+'-canvas'));this.addListener('mouseout',cNextOut,this.getByElement(nextID+'-canvas'));var cFull=this.getByElement(fullID+'-canvas').getContext('2d');var cFullFillRect=function(){thisTemp.canvasFillRect(cFull,[[19,10,9,3],[25,13,3,6],[10,19,3,9],[13,25,6,3]])};cFull.fillStyle=bBgColor;cFullFillRect();var cFullOver=function(){cFull.clearRect(0,0,bWidth,bHeight);cFull.fillStyle=bOverColor;cFullFillRect()};var cFullOut=function(){cFull.clearRect(0,0,bWidth,bHeight);cFull.fillStyle=bBgColor;cFullFillRect()};this.addListener('mouseover',cFullOver,this.getByElement(fullID+'-canvas'));this.addListener('mouseout',cFullOut,this.getByElement(fullID+'-canvas'));var cEscFull=this.getByElement(escFullID+'-canvas').getContext('2d');var cEscFullFillRect=function(){thisTemp.canvasFillRect(cEscFull,[[20,9,3,9],[23,15,6,3],[9,20,9,3],[15,23,3,6]])};cEscFull.fillStyle=bBgColor;cEscFullFillRect();var cEscFullOver=function(){cEscFull.clearRect(0,0,bWidth,bHeight);cEscFull.fillStyle=bOverColor;cEscFullFillRect()};var cEscFullOut=function(){cEscFull.clearRect(0,0,bWidth,bHeight);cEscFull.fillStyle=bBgColor;cEscFullFillRect()};this.addListener('mouseover',cEscFullOver,this.getByElement(escFullID+'-canvas'));this.addListener('mouseout',cEscFullOut,this.getByElement(escFullID+'-canvas'));var cMute=this.getByElement(muteID+'-canvas').getContext('2d');var cMuteFillRect=function(){thisTemp.canvasFill(cMute,[[10,15],[15,15],[21,10],[21,28],[15,23],[10,23]]);thisTemp.canvasFillRect(cMute,[[23,15,2,8],[27,10,2,18]])};cMute.fillStyle=bBgColor;cMuteFillRect();var cMuteOver=function(){cMute.clearRect(0,0,bWidth,bHeight);cMute.fillStyle=bOverColor;cMuteFillRect()};var cMuteOut=function(){cMute.clearRect(0,0,bWidth,bHeight);cMute.fillStyle=bBgColor;cMuteFillRect()};this.addListener('mouseover',cMuteOver,this.getByElement(muteID+'-canvas'));this.addListener('mouseout',cMuteOut,this.getByElement(muteID+'-canvas'));var cEscMute=this.getByElement(escMuteID+'-canvas').getContext('2d');var cEscMuteFillRect=function(){thisTemp.canvasFill(cEscMute,[[10,15],[15,15],[21,10],[21,28],[15,23],[10,23]]);thisTemp.canvasFill(cEscMute,[[23,13],[24,13],[33,25],[32,25]]);thisTemp.canvasFill(cEscMute,[[32,13],[33,13],[24,25],[23,25]])};cEscMute.fillStyle=bBgColor;cEscMuteFillRect();var cEscMuteOver=function(){cEscMute.clearRect(0,0,bWidth,bHeight);cEscMute.fillStyle=bOverColor;cEscMuteFillRect()};var cEscMuteOut=function(){cEscMute.clearRect(0,0,bWidth,bHeight);cEscMute.fillStyle=bBgColor;cEscMuteFillRect()};this.addListener('mouseover',cEscMuteOver,this.getByElement(escMuteID+'-canvas'));this.addListener('mouseout',cEscMuteOut,this.getByElement(escMuteID+'-canvas'));var cLoading=this.getByElement(loadingID+'-canvas').getContext('2d');var cLoadingFillRect=function(){cLoading.save();var grad=cLoading.createLinearGradient(0,0,60,60);grad.addColorStop(0,bBgColor);var grad2=cLoading.createLinearGradient(0,0,80,60);grad2.addColorStop(1,bOverColor);cLoading.strokeStyle=grad;cLoading.lineWidth=8;cLoading.beginPath();cLoading.arc(30,30,25,0.25*Math.PI,2*Math.PI,false);cLoading.stroke();cLoading.closePath();cLoading.beginPath();cLoading.strokeStyle=grad2;cLoading.arc(30,30,25,0,0.25*Math.PI,false);cLoading.stroke();cLoading.closePath();cLoading.restore()};cLoading.fillStyle=bBgColor;cLoadingFillRect();var cPauseCenter=this.getByElement(pauseCenterID+'-canvas').getContext('2d');var cPauseCenterFillRect=function(){thisTemp.canvasFill(cPauseCenter,[[28,22],[59,38],[28,58]]);cPauseCenter.save();cPauseCenter.lineWidth=5;cPauseCenter.beginPath();cPauseCenter.arc(40,40,35,0,2*Math.PI,false);cPauseCenter.stroke();cPauseCenter.closePath();cPauseCenter.restore()};cPauseCenter.fillStyle=bBgColor;cPauseCenter.strokeStyle=bBgColor;cPauseCenterFillRect();var cPauseCenterOver=function(){cPauseCenter.clearRect(0,0,80,80);cPauseCenter.fillStyle=bOverColor;cPauseCenter.strokeStyle=bOverColor;cPauseCenterFillRect()};var cPauseCenterOut=function(){cPauseCenter.clearRect(0,0,80,80);cPauseCenter.fillStyle=bBgColor;cPauseCenter.strokeStyle=bBgColor;cPauseCenterFillRect()};this.addListener('mouseover',cPauseCenterOver,this.getByElement(pauseCenterID+'-canvas'));this.addListener('mouseout',cPauseCenterOut,this.getByElement(pauseCenterID+'-canvas'));var volumeBOOver=function(){thisTemp.css(volumeBOID,'backgroundColor',bOverColor);thisTemp.css(volumeBWID,'backgroundColor',bBgColor)};var volumeBOOut=function(){thisTemp.css(volumeBOID,'backgroundColor',bBgColor);thisTemp.css(volumeBWID,'backgroundColor',bOverColor)};this.addListener('mouseover',volumeBOOver,this.getByElement(volumeBOID));this.addListener('mouseout',volumeBOOut,this.getByElement(volumeBOID));var timeBOOver=function(){thisTemp.css(timeBOID,'backgroundColor',bOverColor);thisTemp.css(timeBWID,'backgroundColor',bBgColor)};var timeBOOut=function(){thisTemp.css(timeBOID,'backgroundColor',bBgColor);thisTemp.css(timeBWID,'backgroundColor',bOverColor)};this.addListener('mouseover',timeBOOver,this.getByElement(timeBOID));this.addListener('mouseout',timeBOOut,this.getByElement(timeBOID));this.addButtonEvent();this.newMenu();this.controlBarHide();this.keypress();this.changeVolume(this.vars['volume']);this.showFrontNext();window.setTimeout(function(){thisTemp.elementCoordinate()},100);this.checkBarWidth();var resize=function(){thisTemp.elementCoordinate();thisTemp.timeUpdateHandler();thisTemp.changeLoad();thisTemp.checkBarWidth();thisTemp.changeElementCoor();thisTemp.changePrompt()};this.addListener('resize',resize,window)},newCanvas:function(id,width,height){return'<canvas class="'+id+'-canvas" width="'+width+'" height="'+height+'"></canvas>'},addButtonEvent:function(){var thisTemp=this;var playClick=function(event){thisTemp.play()};this.addListener('click',playClick,this.CB['play']);this.addListener('click',playClick,this.CB['pauseCenter']);var pauseClick=function(event){thisTemp.pause()};this.addListener('click',pauseClick,this.CB['pause']);var frontClick=function(event){if(thisTemp.vars['front']){eval(thisTemp.vars['front']+'()')}};this.addListener('click',frontClick,this.CB['front']);var nextClick=function(event){if(thisTemp.vars['next']){eval(thisTemp.vars['next']+'()')}};this.addListener('click',nextClick,this.CB['next']);var muteClick=function(event){thisTemp.changeVolumeTemp=thisTemp.V?(thisTemp.V.volume>0?thisTemp.V.volume:thisTemp.vars['volume']):thisTemp.vars['volume'];thisTemp.changeVolume(0)};this.addListener('click',muteClick,this.CB['mute']);var escMuteClick=function(event){thisTemp.changeVolume(thisTemp.changeVolumeTemp>0?thisTemp.changeVolumeTemp:thisTemp.vars['volume'])};this.addListener('click',escMuteClick,this.CB['escMute']);var fullClick=function(event){thisTemp.fullScreen()};this.addListener('click',fullClick,this.CB['full']);var escFullClick=function(event){thisTemp.quitFullScreen()};this.addListener('click',escFullClick,this.CB['escFull']);var promptHide=function(event){thisTemp.promptShow(false)};var playOver=function(event){thisTemp.promptShow(thisTemp.CB['play'])};this.addListener('mouseover',playOver,this.CB['play']);this.addListener('mouseout',promptHide,this.CB['play']);var pauseOver=function(event){thisTemp.promptShow(thisTemp.CB['pause'])};this.addListener('mouseover',pauseOver,this.CB['pause']);this.addListener('mouseout',promptHide,this.CB['pause']);var frontOver=function(event){thisTemp.promptShow(thisTemp.CB['front'])};this.addListener('mouseover',frontOver,this.CB['front']);this.addListener('mouseout',promptHide,this.CB['front']);var nextOver=function(event){thisTemp.promptShow(thisTemp.CB['next'])};this.addListener('mouseover',nextOver,this.CB['next']);this.addListener('mouseout',promptHide,this.CB['next']);var muteOver=function(event){thisTemp.promptShow(thisTemp.CB['mute'])};this.addListener('mouseover',muteOver,this.CB['mute']);this.addListener('mouseout',promptHide,this.CB['mute']);var escMuteOver=function(event){thisTemp.promptShow(thisTemp.CB['escMute'])};this.addListener('mouseover',escMuteOver,this.CB['escMute']);this.addListener('mouseout',promptHide,this.CB['escMute']);var fullOver=function(event){thisTemp.promptShow(thisTemp.CB['full'])};this.addListener('mouseover',fullOver,this.CB['full']);this.addListener('mouseout',promptHide,this.CB['full']);var escFullOver=function(event){thisTemp.promptShow(thisTemp.CB['escFull'])};this.addListener('mouseover',escFullOver,this.CB['escFull']);this.addListener('mouseout',promptHide,this.CB['escFull']);var definitionOver=function(event){thisTemp.promptShow(thisTemp.CB['definition'])};this.addListener('mouseover',definitionOver,this.CB['definition']);this.addListener('mouseout',promptHide,this.CB['definition']);var volumePrompt=function(vol){var volumeBOXY=thisTemp.getCoor(thisTemp.CB['volumeBO']);var promptObj={title:thisTemp.language['volume']+vol+'%',x:volumeBOXY['x']+thisTemp.CB['volumeBO'].offsetWidth*0.5,y:volumeBOXY['y']};thisTemp.promptShow(false,promptObj)};var volumeObj={slider:this.CB['volumeBO'],follow:this.CB['volumeUp'],refer:this.CB['volumeBg'],grossValue:'volume',pd:true,startFun:function(vol){},monitorFun:function(vol){thisTemp.changeVolume(vol*0.01,false,false);volumePrompt(vol)},endFun:function(vol){},overFun:function(vol){volumePrompt(vol)}};this.slider(volumeObj);var volumeClickObj={refer:this.CB['volumeBg'],grossValue:'volume',fun:function(vol){thisTemp.changeVolume(vol*0.01,true,true)}};this.progressClick(volumeClickObj);this.timeButtonMouseDown();var volumeBgMove=function(event){var volumeBgXY=thisTemp.getCoor(thisTemp.CB['volumeBg']);var eventX=thisTemp.client(event)['x'];var eventVolume=parseInt((eventX-volumeBgXY['x'])*100/thisTemp.CB['volumeBg'].offsetWidth);var buttonPromptObj={title:thisTemp.language['volume']+eventVolume+'%',x:eventX,y:volumeBgXY['y']};thisTemp.promptShow(false,buttonPromptObj)};this.addListener('mousemove',volumeBgMove,this.CB['volumeBg']);this.addListener('mouseout',promptHide,this.CB['volumeBg']);this.addListener('mouseout',promptHide,this.CB['volumeBO']);this.addDefListener()},videoClick:function(){var thisTemp=this;var clearTimerClick=function(){if(thisTemp.timerClick!=null){if(thisTemp.timerClick.runing){thisTemp.timerClick.stop()}thisTemp.timerClick=null}};var timerClickFun=function(){clearTimerClick();thisTemp.isClick=false;thisTemp.playOrPause()};clearTimerClick();if(this.isClick){this.isClick=false;if(thisTemp.config['videoDbClick']){if(!this.full){thisTemp.fullScreen()}else{thisTemp.quitFullScreen()}}}else{this.isClick=true;this.timerClick=new this.timer(300,timerClickFun,1)}},timeButtonMouseDown:function(){var thisTemp=this;var timePrompt=function(time){if(isNaN(time)){time=0}var timeButtonXY=thisTemp.getCoor(thisTemp.CB['timeButton']);var promptObj={title:thisTemp.formatTime(time),x:timeButtonXY['x']-thisTemp.pdCoor['x']+thisTemp.CB['timeButton'].offsetWidth*0.5,y:timeButtonXY['y']-thisTemp.pdCoor['y']};thisTemp.promptShow(false,promptObj)};var timeObj={slider:this.CB['timeButton'],follow:this.CB['timeProgress'],refer:this.CB['timeBoBg'],grossValue:'time',pd:false,startFun:function(time){thisTemp.isTimeButtonMove=false},monitorFun:function(time){},endFun:function(time){if(thisTemp.V){if(thisTemp.V.duration>0){thisTemp.needSeek=0;thisTemp.seek(parseInt(time))}}},overFun:function(time){timePrompt(time)},};var timeClickObj={refer:this.CB['timeBoBg'],grossValue:'time',fun:function(time){if(thisTemp.V){if(thisTemp.V.duration>0){thisTemp.needSeek=0;thisTemp.seek(parseInt(time))}}},};var timeBoBgmousemove=function(event){var timeBoBgXY=thisTemp.getCoor(thisTemp.CB['timeBoBg']);var eventX=thisTemp.client(event)['x'];var eventTime=parseInt((eventX-timeBoBgXY['x'])*thisTemp.V.duration/thisTemp.CB['timeBoBg'].offsetWidth);var buttonPromptObj={title:thisTemp.formatTime(eventTime),x:eventX,y:timeBoBgXY['y']};thisTemp.promptShow(false,buttonPromptObj);var def=false;if(!thisTemp.isUndefined(thisTemp.CB['definitionP'])){if(thisTemp.css(thisTemp.CB['definitionP'],'display')!='block'){def=true}}if(thisTemp.vars['preview']!=null&&def){buttonPromptObj['time']=eventTime;thisTemp.preview(buttonPromptObj)}};var promptHide=function(event){thisTemp.promptShow(false);if(thisTemp.previewDiv!=null){thisTemp.css([thisTemp.previewDiv,thisTemp.previewTop],'display','none')}};if(!this.vars['live']){this.isTimeButtonDown=true;this.addListener('mousemove',timeBoBgmousemove,this.CB['timeBoBg']);this.addListener('mouseout',promptHide,this.CB['timeBoBg'])}else{this.isTimeButtonDown=false;timeObj['removeListener']=true;timeClickObj['removeListener']=true}this.slider(timeObj);this.progressClick(timeClickObj)},progressClick:function(obj){var thisTemp=this;var referMouseClick=function(event){var referX=thisTemp.client(event)['x']-thisTemp.getCoor(obj['refer'])['x'];var rWidth=obj['refer'].offsetWidth;var grossValue=0;if(obj['grossValue']=='volume'){grossValue=100}else{if(thisTemp.V){grossValue=thisTemp.V.duration}}var nowZ=parseInt(referX*grossValue/rWidth);if(obj['fun']){obj['fun'](nowZ)}};if(this.isUndefined(obj['removeListener'])){this.addListener('click',referMouseClick,obj['refer'])}else{this.removeListener('click',referMouseClick,obj['refer'])}},slider:function(obj){var thisTemp=this;var clientX=0,criterionWidth=0,sliderLeft=0,referLeft=0;var value=0;var calculation=function(){var sLeft=parseInt(thisTemp.css(obj['slider'],'left'));var rWidth=obj['refer'].offsetWidth-obj['slider'].offsetWidth;var grossValue=0;if(thisTemp.isUndefined(sLeft)||isNaN(sLeft)){sLeft=0}if(obj['grossValue']=='volume'){grossValue=100}else{if(thisTemp.V){grossValue=thisTemp.V.duration}}return parseInt(sLeft*grossValue/rWidth)};var mDown=function(event){thisTemp.addListener('mousemove',mMove,document);thisTemp.addListener('mouseup',mUp,document);var referXY=thisTemp.getCoor(obj['refer']);var sliderXY=thisTemp.getCoor(obj['slider']);clientX=thisTemp.client(event)['x'];referLeft=referXY['x'];sliderLeft=sliderXY['x'];criterionWidth=clientX-sliderLeft;if(obj['startFun']){obj['startFun'](calculation())}};var mMove=function(event){clientX=thisTemp.client(event)['x'];var newX=clientX-criterionWidth-referLeft;if(newX<0){newX=0}if(newX>obj['refer'].offsetWidth-obj['slider'].offsetWidth){newX=obj['refer'].offsetWidth-obj['slider'].offsetWidth}thisTemp.css(obj['slider'],'left',newX+'px');thisTemp.css(obj['follow'],'width',(newX+obj['slider'].offsetWidth*0.5)+'px');var nowZ=calculation();if(obj['monitorFun']){obj['monitorFun'](nowZ)}};var mUp=function(event){thisTemp.removeListener('mousemove',mMove,document);thisTemp.removeListener('mouseup',mUp,document);if(obj['endFun']){obj['endFun'](calculation())}};var mOver=function(event){if(obj['overFun']){obj['overFun'](calculation())}};if(this.isUndefined(obj['removeListener'])){this.addListener('mousedown',mDown,obj['slider']);this.addListener('mouseover',mOver,obj['slider'])}else{this.removeListener('mousedown',mDown,obj['slider']);this.removeListener('mouseover',mOver,obj['slider'])}},loadingStart:function(rot){var thisTemp=this;if(this.isUndefined(rot)){rot=true}this.css(thisTemp.CB['loading'],'display','none');if(this.timerLoading!=null){if(this.timerLoading.runing){this.timerLoading.stop()}this.timerLoading=null}var loadingFun=function(){var nowRotate='0';try{nowRotate=thisTemp.css(thisTemp.CB['loadingCanvas'],'transform')||thisTemp.css(thisTemp.CB['loadingCanvas'],'-ms-transform')||thisTemp.css(thisTemp.CB['loadingCanvas'],'-moz-transform')||thisTemp.css(thisTemp.CB['loadingCanvas'],'-webkit-transform')||thisTemp.css(thisTemp.CB['loadingCanvas'],'-o-transform')||'0'}catch(event){}nowRotate=parseInt(nowRotate.replace('rotate(','').replace('deg);',''));nowRotate+=4;if(nowRotate>360){nowRotate=0}thisTemp.css(thisTemp.CB['loadingCanvas'],{transform:'rotate('+nowRotate+'deg)',msTransform:'rotate('+nowRotate+'deg)',mozTransform:'rotate('+nowRotate+'deg)',webkitTransform:'rotate('+nowRotate+'deg)',oTransform:'rotate('+nowRotate+'deg)'})};if(rot){this.timerLoading=new this.timer(10,loadingFun);this.css(thisTemp.CB['loading'],'display','block')}},showFrontNext:function(){if(this.vars['front']){this.css([this.CB['front'],this.CB['frontLine']],'display','block')}else{this.css([this.CB['front'],this.CB['frontLine']],'display','none')}if(this.vars['next']){this.css([this.CB['next'],this.CB['nextLine']],'display','block')}else{this.css([this.CB['next'],this.CB['nextLine']],'display','none')}},promptShow:function(ele,data){var obj={};if(ele||data){if(!this.isUndefined(data)){obj=data}else{var offsetCoor=this.getCoor(ele);obj={title:ele.dataset.title,x:offsetCoor['x']+ele.offsetWidth*0.5,y:offsetCoor['y']}}this.CB['prompt'].innerHTML=obj['title'];this.css(this.CB['prompt'],'display','block');var promoptWidth=this.getStringLen(obj['title'])*10;this.css(this.CB['promptBg'],'width',promoptWidth+'px');this.css(this.CB['prompt'],'width',promoptWidth+'px');promoptWidth+=10;var x=obj['x']-(promoptWidth*0.5);var y=this.PD.offsetHeight-obj['y']+8;if(x<0){x=0}if(x>this.PD.offsetWidth-promoptWidth){x=this.PD.offsetWidth-promoptWidth}this.css([this.CB['promptBg'],this.CB['prompt']],{display:'block',left:x+'px',bottom:y+'px'})}else{this.css([this.CB['promptBg'],this.CB['prompt']],{display:'none'})}},timerErrorFun:function(){var thisTemp=this;var clearIntervalError=function(event){if(thisTemp.timerError!=null){if(thisTemp.timerError.runing){thisTemp.timerError.stop()}thisTemp.timerError=null}};var errorFun=function(event){clearIntervalError();thisTemp.error=true;thisTemp.errorUrl=thisTemp.getVideoUrl();thisTemp.addListenerError();thisTemp.css(thisTemp.CB['errorText'],'display','block');thisTemp.css(thisTemp.CB['pauseCenter'],'display','none');thisTemp.css(thisTemp.CB['loading'],'display','none');thisTemp.V.removeAttribute('poster');thisTemp.resetPlayer()};var errorListenerFun=function(event){window.setTimeout(function(){if(isNaN(thisTemp.V.duration)){errorFun(event)}},500)};this.addListener('error',errorListenerFun,this.V);clearIntervalError();var timerErrorFun=function(){if(thisTemp.V&&parseInt(thisTemp.V.networkState)==3){errorFun()}};this.timerError=new this.timer(this.config['errorTime'],timerErrorFun)},judgeFullScreen:function(){var thisTemp=this;if(this.timerFull!=null){if(this.timerFull.runing){this.timerFull.stop()}this.timerFull=null}var fullFun=function(){thisTemp.isFullScreen()};this.timerFull=new this.timer(20,fullFun)},isFullScreen:function(){var controlbarbgW=this.CB['controlBarBg'].offsetWidth;var containerW=this.CD.offsetWidth;if(controlbarbgW!=containerW&&!this.full){this.full=true;this.addListenerFull();this.elementCoordinate();this.css(this.CB['full'],'display','none');this.css(this.CB['escFull'],'display','block');if(this.vars['live']==0){this.timeUpdateHandler()}this.PD.appendChild(this.CB['menu'])}if(controlbarbgW==containerW&&this.full){this.full=false;this.addListenerFull();this.elementCoordinate();this.css(this.CB['full'],'display','block');this.css(this.CB['escFull'],'display','none');if(this.timerFull!=null){if(this.timerFull.runing){this.timerFull.stop()}this.timerFull=null}if(this.vars['live']==0){this.timeUpdateHandler()}this.body.appendChild(this.CB['menu'])}},newMenu:function(){var thisTemp=this;var i=0;this.css(this.CB['menu'],{backgroundColor:'#FFFFFF',padding:'5px',position:'absolute',left:'10px',top:'20px',display:'none',zIndex:'999',color:'#A1A9BE',boxShadow:'2px 2px 3px #AAAAAA'});var mArr=this.contextMenu;var html='';for(i=0;i<mArr.length;i++){var me=mArr[i];switch(me[1]){case'default':html+='<p>'+me[0]+'</p>';break;case'link':html+='<p><a href="'+me[2]+'" target="_blank">'+me[0]+'</a></p>';break;case'javascript':html+='<p><a href="javascript:'+me[2]+'()">'+me[0]+'</a></p>';break;case'function':html+='<p><a href="javascript:'+this.vars['variable']+'.'+me[2]+'()">'+me[0]+'</a></p>';break;default:break}}this.CB['menu'].innerHTML=html;var pArr=this.CB['menu'].childNodes;for(i=0;i<pArr.length;i++){this.css(pArr[i],{height:'30px',lineHeight:'30px',margin:'0px',fontFamily:'"Microsoft YaHei", YaHei, "微软雅黑", SimHei,"\5FAE\8F6F\96C5\9ED1", "黑体",Arial',fontSize:'12px',paddingLeft:'10px',paddingRight:'30px'});if(mArr[i].length>=4){if(mArr[i][3]=='line'){this.css(pArr[i],'borderTop','1px solid #e9e9e9')}}var aArr=pArr[i].childNodes;for(var n=0;n<aArr.length;n++){if(aArr[n].localName=='a'){this.css(aArr[n],{color:'#000000',textDecoration:'none'})}}}this.PD.oncontextmenu=function(event){var eve=event||window.event;var client=thisTemp.client(event);if(eve.button==2){eve.returnvalue=false;var x=client['x']+thisTemp.pdCoor['x']-2;var y=client['y']+thisTemp.pdCoor['y']-2;thisTemp.css(thisTemp.CB['menu'],{display:'block',left:x+'px',top:y+'px'});return false}return true};var setTimeOutPClose=function(){if(setTimeOutP){window.clearTimeout(setTimeOutP);setTimeOutP=null}};var setTimeOutP=null;var mouseOut=function(event){setTimeOutPClose();setTimeOutP=window.setTimeout(function(event){thisTemp.css(thisTemp.CB['menu'],'display','none')},500)};this.addListener('mouseout',mouseOut,thisTemp.CB['menu']);var mouseOver=function(event){setTimeOutPClose()};this.addListener('mouseover',mouseOver,thisTemp.CB['menu'])},controlBarHide:function(){var thisTemp=this;var client={x:0,y:0},oldClient={x:0,y:0};var cShow=true;var oldCoor=[0,0];var controlBarShow=function(show){if(show&&!cShow){cShow=true;thisTemp.css(thisTemp.CB['controlBarBg'],'display','block');thisTemp.css(thisTemp.CB['controlBar'],'display','block');thisTemp.css(thisTemp.CB['timeProgressBg'],'display','block');thisTemp.css(thisTemp.CB['timeBoBg'],'display','block')}else{if(cShow){cShow=false;var paused=thisTemp.getMetaDate()['paused'];if(!paused){thisTemp.css(thisTemp.CB['controlBarBg'],'display','none');thisTemp.css(thisTemp.CB['controlBar'],'display','none');thisTemp.css(thisTemp.CB['timeProgressBg'],'display','none');thisTemp.css(thisTemp.CB['timeBoBg'],'display','none');thisTemp.promptShow(false)}}}};var cbarFun=function(event){if(client['x']==oldClient['x']&&client['y']==oldClient['y']){var cdH=parseInt(thisTemp.CD.offsetHeight);if((client['y']<cdH-50||client['y']>cdH-2)&&cShow){controlBarShow(false)}}else{if(!cShow){controlBarShow(true)}}oldClient={x:client['x'],y:client['y']}};this.timerCBar=new this.timer(2000,cbarFun);var cdMove=function(event){var getClient=thisTemp.client(event);client['x']=getClient['x'];client['y']=getClient['y'];if(!cShow){controlBarShow(true)}};this.addListener('mousemove',cdMove,thisTemp.CD);this.addListener('ended',cdMove);this.addListener('resize',cdMove,window)},keypress:function(){var thisTemp=this;var keyDown=function(eve){var keycode=eve.keyCode||eve.which;var now=0;switch(keycode){case 32:thisTemp.playOrPause();break;case 37:now=thisTemp.time-10;thisTemp.seek(now<0?0:now);break;case 39:now=thisTemp.time+10;thisTemp.seek(now);break;case 38:now=thisTemp.volume+0.1;thisTemp.changeVolume(now>1?1:now);break;case 40:now=thisTemp.volume-0.1;thisTemp.changeVolume(now<0?0:now);break;default:break}};this.addListener('keydown',keyDown,window||document)},definition:function(){var thisTemp=this;var vArr=this.VA;var dArr=[];var html='';var nowD='';var i=0;for(i=0;i<vArr.length;i++){var d=vArr[i][2];if(dArr.indexOf(d)==-1){dArr.push(d)}if(this.V){if(vArr[i][0]==this.V.currentSrc){nowD=d}}}if(!nowD){nowD=dArr[0]}if(dArr.length>1){var zlen=0;for(i=0;i<dArr.length;i++){html='<p>'+dArr[i]+'</p>'+html;var dlen=this.getStringLen(dArr[i]);if(dlen>zlen){zlen=dlen}}if(html){html+='<p>'+nowD+'</p>'}this.CB['definition'].innerHTML=nowD;this.CB['definitionP'].innerHTML=html;this.css([this.CB['definition'],this.CB['definitionLine']],'display','block');var pArr=this.CB['definitionP'].childNodes;for(var i=0;i<pArr.length;i++){var fontColor='#FFFFFF';if(pArr[i].innerHTML==nowD){fontColor='#0782F5'}this.css(pArr[i],{color:fontColor,margin:'0px',padding:'0px',fontSize:'14px'});if(i<pArr.length-1){this.css(pArr[i],'borderBottom','1px solid #282828')}var defClick=function(){if(nowD!=this.innerHTML){thisTemp.css(thisTemp.CB['definitionP'],'display','none');thisTemp.newDefinition(this.innerHTML)}};this.addListener('click',defClick,pArr[i])}var pW=(zlen*10)+20;this.css(this.CB['definitionP'],{width:pW+'px'});this.css(this.CB['definition'],{width:pW+'px',});this.buttonWidth['definition']=this.CB['definition'].offsetWidth}else{this.CB['definition'].innerHTML='';this.CB['definitionP'].innerHTML='';this.css([this.CB['definition'],this.CB['definitionLine']],'display','none')}},addDefListener:function(){var thisTemp=this;var setTimeOutP=null;var defClick=function(event){thisTemp.css(thisTemp.CB['definitionP'],{left:thisTemp.getCoor(thisTemp.CB['definition'])['x']+'px',display:'block'})};this.addListener('click',defClick,this.CB['definition']);var defMouseOut=function(event){if(setTimeOutP){window.clearTimeout(setTimeOutP);setTimeOutP=null}setTimeOutP=window.setTimeout(function(event){thisTemp.css(thisTemp.CB['definitionP'],'display','none')},500)};this.addListener('mouseout',defMouseOut,thisTemp.CB['definitionP']);var defMouseOver=function(event){if(setTimeOutP){window.clearTimeout(setTimeOutP);setTimeOutP=null}};this.addListener('mouseover',defMouseOver,thisTemp.CB['definitionP'])},newDefinition:function(title){var vArr=this.VA;var nVArr=[];var i=0;for(i=0;i<vArr.length;i++){var v=vArr[i];if(v[2]==title){nVArr.push(v)}}if(nVArr.length<1){return}if(this.V!=null&&this.needSeek==0){this.needSeek=this.V.currentTime}if(this.getFileExt(nVArr[0][0])!='.m3u8'){this.isM3u8=false}if(!this.isM3u8){if(nVArr.length==1){this.V.innerHTML='';this.V.src=nVArr[0][0]}else{var source='';nVArr=this.arrSort(nVArr);for(i=0;i<nVArr.length;i++){var type='';var va=nVArr[i];if(va[1]){type=' type="'+va[1]+'"'}source+='<source src="'+va[0]+'"'+type+'>'}this.V.removeAttribute('src');this.V.innerHTML=source}}else{this.embedHls(vArr[0][0],this.vars['autoplay'])}this.V.autoplay='autoplay';this.V.load();this.timerErrorFun();this.addListenerVideoChange()},embedHls:function(url,autoplay){var thisTemp=this;if(Hls.isSupported()){var hls=new Hls();hls.loadSource(url);hls.attachMedia(this.V);hls.on(Hls.Events.MANIFEST_PARSED,function(){thisTemp.playerLoad();if(autoplay){thisTemp.play()}})}},prompt:function(){var thisTemp=this;var prompt=this.vars['prompt'];if(prompt==null||this.promptArr.length>0){return}var showPrompt=function(event){if(thisTemp.promptElement==null){var random2='prompte'+thisTemp.randomString(5);var ele2=document.createElement('div');ele2.className=random2;thisTemp.PD.appendChild(ele2);thisTemp.promptElement=thisTemp.getByElement(random2);thisTemp.css(thisTemp.promptElement,{overflowX:'hidden',lineHeight:'22px',fontSize:'14px',color:'#FFFFFF',position:'absolute',display:'block',zIndex:'90'})}var pcon=thisTemp.getPromptTest();var pW=pcon['pW'],pT=pcon['pT'],pL=parseInt(thisTemp.css(this,'left'))-parseInt(pW*0.5);if(pcon['pL']>10){pL=pcon['pL']}if(pL<0){pL=0}thisTemp.css(thisTemp.promptElement,{width:pW+'px',left:(-pW-10)+'px',display:'block'});thisTemp.promptElement.innerHTML=this.dataset.words;thisTemp.css(thisTemp.promptElement,{left:pL+'px',top:(pT-thisTemp.promptElement.offsetHeight)+'px'})};var hidePrompt=function(event){if(thisTemp.promptElement!=null){thisTemp.css(thisTemp.promptElement,{display:'none'})}};var i=0;for(i=0;i<prompt.length;i++){var pr=prompt[i];var words=pr['words'];var time=pr['time'];var random='prompt'+this.randomString(5);var ele=document.createElement('div');ele.className=random;this.CB['timeBoBg'].appendChild(ele);var div=this.getByElement(random);div.setAttribute('data-time',time);div.setAttribute('data-words',words);this.css(div,{width:'6px',height:'6px',backgroundColor:'#FFFFFF',position:'absolute',top:'4px',left:'-100px',display:'none',zIndex:'1'});this.addListener('mouseover',showPrompt,div);this.addListener('mouseout',hidePrompt,div);this.promptArr.push(div)}this.changePrompt()},getPromptTest:function(){var pW=this.previewWidth,pT=this.getCoor(this.CB['timeButton'])['y'],pL=0;if(this.previewTop!=null){pT-=parseInt(this.css(this.previewTop,'height'));pL=parseInt(this.css(this.previewTop,'left'))}else{pT-=35}pL+=2;if(pL<0){pL=0}if(pL>this.PD.offsetWidth-pW){pL=this.PD.offsetWidth-pW}return{pW:pW,pT:pT,pL:pL}},deletePrompt:function(){var arr=this.promptArr;if(arr.length>0){for(var i=0;i<arr.length;i++){if(arr[i]){this.deleteChild(arr[i])}}}this.promptArr=[]},changePrompt:function(){if(this.promptArr.length==0){return}var arr=this.promptArr;var duration=this.getMetaDate()['duration'];var bw=this.CB['timeBoBg'].offsetWidth;for(var i=0;i<arr.length;i++){var time=parseInt(arr[i].dataset.time);var left=parseInt(time*bw/duration)-parseInt(arr[i].offsetWidth*0.5);if(left<0){left=0}if(left>bw-parseInt(arr[i].offsetWidth*0.5)){left=bw-parseInt(arr[i].offsetWidth*0.5)}this.css(arr[i],{left:left+'px',display:'block'})}},preview:function(obj){var thisTemp=this;var preview={src:null,scale:0};preview=this.standardization(preview,this.vars['preview']);if(preview['src']==null||preview['scale']<=0){return}var srcArr=preview['src'];if(this.previewStart==0){this.previewStart=1;if(srcArr.length>0){var i=0;var imgW=0,imgH=0;var random=thisTemp.randomString(10);var loadNum=0;var loadImg=function(i){srcArr[i]=thisTemp.getNewUrl(srcArr[i]);var n=0;var img=new Image();img.src=srcArr[i];img.className=random+i;img.onload=function(event){loadNum++;if(thisTemp.previewDiv==null){imgW=img.width;imgH=img.height;thisTemp.previewWidth=parseInt(imgW*0.1);var ele=document.createElement('div');ele.className=random;thisTemp.PD.appendChild(ele);thisTemp.previewDiv=thisTemp.getByElement(random);var eleTop=(obj['y']-parseInt(imgH*0.1)+2);thisTemp.css(thisTemp.previewDiv,{width:srcArr.length*imgW*10+'px',height:parseInt(imgH*0.1)+'px',backgroundColor:'#000000',position:'absolute',left:'0px',top:eleTop+'px',display:'none',zIndex:'80'});ele.setAttribute('data-x','0');ele.setAttribute('data-y',eleTop);var ele2=document.createElement('div');ele2.className=random+'d2';thisTemp.PD.appendChild(ele2);thisTemp.previewTop=thisTemp.getByElement(ele2.className);thisTemp.css(thisTemp.previewTop,{width:parseInt(imgW*0.1)+'px',height:parseInt(imgH*0.1)+'px',position:'absolute',border:'5px solid '+thisTemp.css(thisTemp.CB['timeProgress'],'backgroundColor'),left:'0px',top:(obj['y']-parseInt(imgH*0.1)+2)+'px',display:'none',zIndex:'81'});var html='';for(n=0;n<srcArr.length;n++){html+=thisTemp.newCanvas(random+n,imgW*10,parseInt(imgH*0.1))}thisTemp.previewDiv.innerHTML=html}thisTemp.previewDiv.appendChild(img);var cimg=thisTemp.getByElement(img.className);var canvas=thisTemp.getByElement(img.className+'-canvas');var context=canvas.getContext('2d');var sx=0,sy=0,x=0,h=parseInt(imgH*0.1);for(n=0;n<100;n++){x=parseInt(n*imgW*0.1);context.drawImage(cimg,sx,sy,parseInt(imgW*0.1),h,x,0,parseInt(imgW*0.1),h);sx+=parseInt(imgW*0.1);if(sx>=imgW){sx=0;sy+=h}thisTemp.css(cimg,'display','none')}if(loadNum==srcArr.length){thisTemp.previewStart=2}else{i++;loadImg(i)}}}}loadImg(i);return}if(this.previewStart==2){var isTween=true;var nowNum=parseInt(obj['time']/this.vars['preview']['scale']);var numTotal=parseInt(thisTemp.getMetaDate()['duration']/this.vars['preview']['scale']);if(thisTemp.css(thisTemp.previewDiv,'display')=='none'){isTween=false}thisTemp.css(thisTemp.previewDiv,'display','block');var imgWidth=thisTemp.previewDiv.offsetWidth*0.01/srcArr.length;var left=(imgWidth*nowNum)-obj['x']+parseInt(imgWidth*0.5),top=obj['y']-thisTemp.previewDiv.offsetHeight;thisTemp.css(thisTemp.previewDiv,'top',top+2+'px');var topLeft=obj['x']-parseInt(imgWidth*0.5);var timepieces=0;if(topLeft<0){topLeft=0;timepieces=obj['x']-topLeft-imgWidth*0.5}if(topLeft>thisTemp.PD.offsetWidth-imgWidth){topLeft=thisTemp.PD.offsetWidth-imgWidth;timepieces=obj['x']-topLeft-imgWidth*0.5}if(left<0){left=0}if(left>numTotal*imgWidth-thisTemp.PD.offsetWidth){left=numTotal*imgWidth-thisTemp.PD.offsetWidth}thisTemp.css(thisTemp.previewTop,{left:topLeft+'px',top:top+2+'px',display:'block'});if(thisTemp.previewTop.offsetHeight>thisTemp.previewDiv.offsetHeight){thisTemp.css(thisTemp.previewTop,{height:thisTemp.previewDiv.offsetHeight-(thisTemp.previewTop.offsetHeight-thisTemp.previewDiv.offsetHeight)+'px'})}if(this.previewTween!=null){this.animatePause(this.previewTween);this.previewTween=null}var nowLeft=parseInt(thisTemp.css(thisTemp.previewDiv,'left'));var leftC=nowLeft+left;if(nowLeft==-(left+timepieces)){return}if(isTween){var obj={element:thisTemp.previewDiv,start:null,end:-(left+timepieces),speed:0.3};this.previewTween=this.animate(obj)}else{thisTemp.css(thisTemp.previewDiv,'left',-(left+timepieces)+'px')}}},deletePreview:function(){if(this.previewDiv!=null){this.deleteChild(this.previewDiv);this.previewDiv=null;this.previewStart=0}},changeVideo:function(){if(!this.html5Video){this.getVarsObject();this.V.newVideo(this.vars);return}var vArr=this.VA;var v=this.vars;var i=0;if(vArr.length<1){return}if(this.V!=null&&this.needSeek==0){this.needSeek=this.V.currentTime}if(v['poster']){this.V.poster=v['poster']}else{this.V.removeAttribute('poster')}if(v['loop']){this.V.loop='loop'}else{this.V.removeAttribute('loop')}if(v['seek']>0){this.needSeek=v['seek']}else{this.needSeek=0}if(this.getFileExt(vArr[0][0])!='.m3u8'){this.isM3u8=false}if(!this.isM3u8){if(vArr.length==1){this.V.innerHTML='';this.V.src=vArr[0][0]}else{var source='';vArr=this.arrSort(vArr);for(i=0;i<vArr.length;i++){var type='';var va=vArr[i];if(va[1]){type=' type="'+va[1]+'"'}source+='<source src="'+va[0]+'"'+type+'>'}this.V.removeAttribute('src');this.V.innerHTML=source}if(v['autoplay']){this.V.autoplay='autoplay'}else{this.V.removeAttribute('autoplay')}this.V.load()}else{this.embedHls(vArr[0][0],v['autoplay'])}if(!this.isUndefined(v['volume'])){this.changeVolume(v['volume'])}this.resetPlayer();this.timerErrorFun();this.addListenerVideoChange();if(this.vars['chtrack']){this.loadTrack()}},elementCoordinate:function(){this.pdCoor=this.getXY(this.PD);this.css(this.CB['pauseCenter'],{left:parseInt((this.PD.offsetWidth-80)*0.5)+'px',top:parseInt((this.PD.offsetHeight-80)*0.5)+'px'});this.css(this.CB['loading'],{left:parseInt((this.PD.offsetWidth-60)*0.5)+'px',top:parseInt((this.PD.offsetHeight-60)*0.5)+'px'});this.css(this.CB['errorText'],{left:parseInt((this.PD.offsetWidth-120)*0.5)+'px',top:parseInt((this.PD.offsetHeight-30)*0.5)+'px'});this.css(this.CB['logo'],{left:parseInt(this.PD.offsetWidth-this.CB['logo'].offsetWidth-20)+'px',top:'20px'});this.checkBarWidth()},checkBarWidth:function(){var controlBarW=this.CB['controlBar'].offsetWidth;var ele=[];ele.push([[this.CB['full'],this.CB['escFull'],this.CB['fullLine']],this.buttonWidth['full']+2,'full']);if(this.vars['front']!=''){ele.push([[this.CB['front'],this.CB['frontLine']],this.buttonWidth['front']+2])}if(this.vars['next']!=''){ele.push([[this.CB['next'],this.CB['nextLine']],this.buttonWidth['next']+2])}if(this.CB['definition'].innerHTML!=''){ele.push([[this.CB['definition'],this.CB['definitionLine']],this.buttonWidth['definition']+2])}ele.push([[this.CB['volume']],this.buttonWidth['volume']]);ele.push([[this.CB['mute'],this.CB['escMute'],this.CB['muteLine']],this.buttonWidth['mute']+2,'mute']);ele.push([[this.CB['timeText']],this.buttonWidth['timeText']]);ele.push([[this.CB['play'],this.CB['pause'],this.CB['playLine']],this.buttonWidth['play']+2,'play']);var i=0;var len=0;var isc=true;for(var i=0;i<ele.length;i++){var nlen=ele[i][1];if(nlen>2){len+=nlen}else{isc=false}}if(isc){this.buttonLen=len;this.buttonArr=ele}len=this.buttonLen;ele=this.buttonArr;for(var i=0;i<ele.length;i++){if(len>controlBarW){len-=ele[i][1];this.css(ele[i][0],'display','none')}else{this.css(ele[i][0],'display','block');if(ele[i].length==3){var name=ele[i][2];switch(name){case'mute':if(this.volume==0){this.css(this.CB['mute'],'display','none')}else{this.css(this.CB['escMute'],'display','none')}break;case'play':this.playShow(this.V.paused?false:true);break;case'full':if(this.full){this.css(this.CB['full'],'display','none')}else{this.css(this.CB['escFull'],'display','none')}break}}}}},initPlayPause:function(){if(this.vars['autoplay']){this.css([this.CB['play'],this.CB['pauseCenter']],'display','none');this.css(this.CB['pause'],'display','block')}else{this.css(this.CB['play'],'display','block');if(this.css(this.CB['errorText'],'display')=='none'){this.css(this.CB['pauseCenter'],'display','block')}this.css(this.CB['pause'],'display','none')}},addListenerError:function(){for(var i=0;i<this.errorFunArr.length;i++){var fun=this.errorFunArr[i];if(typeof(fun)=='string'){fun=fun.replace('()','');eval(fun+'()')}else{fun()}}},delErrorFunArr:function(f){try{var index=this.errorFunArr.indexOf(f);if(index>-1){this.errorFunArr.splice(index,1)}}catch(e){}},addListenerFull:function(){for(var i=0;i<this.fullFunArr.length;i++){var fun=this.fullFunArr[i];if(typeof(fun)=='string'){fun=fun.replace('()','');eval(fun+'()')}else{fun()}}},delFullFunArr:function(f){try{var index=this.fullFunArr.indexOf(f);if(index>-1){this.fullFunArr.splice(index,1)}}catch(e){}},addListenerVideoChange:function(){for(var i=0;i<this.videoChangeFunArr.length;i++){var fun=this.videoChangeFunArr[i];if(typeof(fun)=='string'){fun=fun.replace('()','');eval(fun+'()')}else{fun()}}},delVideoChangeFunArr:function(f){try{var index=this.videoChangeFunArr.indexOf(f);if(index>-1){this.videoChangeFunArr.splice(index,1)}}catch(e){}},loadedHandler:function(){this.loaded=true;if(this.playerType!='html5video'){this.V.changeLanguage(this.language);if(this.contextMenu.length>0){this.V.newMenu(this.contextMenu)}if(this.config){this.V.config(this.config)}}if(this.vars['loaded']!=''){try{eval(this.vars['loaded']+'()')}catch(event){}this.addListenerVideoChange()}},playingHandler:function(){this.playShow(true);if(this.needSeek>0){this.seek(this.needSeek);this.needSeek=0}if(this.animatePauseArray.length>0){this.animateResume('pause')}if(this.playerType=='html5video'&&this.V!=null&&this.config['videoDrawImage']){this.sendVCanvas()}},sendVCanvas:function(){if(this.timerVCanvas==null){this.css(this.V,'display','none');this.css(this.MD,'display','block');var thisTemp=this;var videoCanvas=function(){if(thisTemp.MDCX.width!=thisTemp.PD.offsetWidth){thisTemp.MDC.width=thisTemp.PD.offsetWidth}if(thisTemp.MDCX.height!=thisTemp.PD.offsetHeight){thisTemp.MDC.height=thisTemp.PD.offsetHeight}thisTemp.MDCX.clearRect(0,0,thisTemp.MDCX.width,thisTemp.MDCX.height);var coor=thisTemp.getProportionCoor(thisTemp.PD.offsetWidth,thisTemp.PD.offsetHeight,thisTemp.V.videoWidth,thisTemp.V.videoHeight);thisTemp.MDCX.drawImage(thisTemp.V,0,0,thisTemp.V.videoWidth,thisTemp.V.videoHeight,coor['x'],coor['y'],coor['width'],coor['height'])};this.timerVCanvas=new this.timer(0,videoCanvas)}},pauseHandler:function(){this.playShow(false);if(this.animatePauseArray.length>0){this.animatePause('pause')}if(this.playerType=='html5video'&&this.V!=null&&this.config['videoDrawImage']){this.stopVCanvas()}},stopVCanvas:function(){if(this.timerVCanvas!=null){this.css(this.V,'display','block');this.css(this.MD,'display','none');if(this.timerVCanvas.runing){this.timerVCanvas.stop()}this.timerVCanvas=null}},playShow:function(b){if(b){this.css(this.CB['play'],'display','none');this.css(this.CB['pauseCenter'],'display','none');this.css(this.CB['pause'],'display','block')}else{this.css(this.CB['play'],'display','block');if(this.css(this.CB['errorText'],'display')=='none'){this.css(this.CB['pauseCenter'],'display','block')}else{this.css(this.CB['pauseCenter'],'display','none')}this.css(this.CB['pause'],'display','none')}},seekedHandler:function(){this.resetTrack();this.isTimeButtonMove=true;if(this.V.paused){this.play()}},endedHandler:function(){if(!this.vars['loop']){this.pause()}},volumechangeHandler:function(){try{if(this.V.volume>0){this.css(this.CB['mute'],'display','block');this.css(this.CB['escMute'],'display','none')}else{this.css(this.CB['mute'],'display','none');this.css(this.CB['escMute'],'display','block')}}catch(event){}},timeUpdateHandler:function(){var duration=0;if(this.playerType=='html5video'){try{duration=this.V.duration}catch(event){}}if(duration>0){this.time=this.V.currentTime;this.timeTextHandler();this.trackShowHandler();if(this.isTimeButtonMove){this.timeProgress(this.time,duration)}}},timeProgress:function(time,duration){var timeProgressBgW=this.CB['timeProgressBg'].offsetWidth;var timeBOW=parseInt((time*timeProgressBgW/duration)-(this.CB['timeButton'].offsetWidth*0.5));if(timeBOW>timeProgressBgW-this.CB['timeButton'].offsetWidth){timeBOW=timeProgressBgW-this.CB['timeButton'].offsetWidth}if(timeBOW<0){timeBOW=0}this.css(this.CB['timeProgress'],'width',timeBOW+'px');this.css(this.CB['timeButton'],'left',parseInt(timeBOW)+'px')},timeTextHandler:function(){var duration=this.V.duration;var time=this.V.currentTime;if(isNaN(duration)){duration=0}this.CB['timeText'].innerHTML=this.formatTime(time)+' / '+this.formatTime(duration);if(this.CB['timeText'].offsetWidth>0){this.buttonWidth['timeText']=this.CB['timeText'].offsetWidth}},bufferEdHandler:function(){var thisTemp=this;var clearTimerBuffer=function(){if(thisTemp.timerBuffer!=null){if(thisTemp.timerBuffer.runing){thisTemp.timerBuffer.stop()}thisTemp.timerBuffer=null}};clearTimerBuffer();var bufferFun=function(){if(thisTemp.V.buffered.length>0){var duration=thisTemp.V.duration;var len=thisTemp.V.buffered.length;var bufferStart=thisTemp.V.buffered.start(len-1);var bufferEnd=thisTemp.V.buffered.end(len-1);var loadTime=bufferStart+bufferEnd;var loadProgressBgW=thisTemp.CB['timeProgressBg'].offsetWidth;var timeButtonW=thisTemp.CB['timeButton'].offsetWidth;var loadW=parseInt((loadTime*loadProgressBgW/duration)+timeButtonW);if(loadW>=loadProgressBgW){loadW=loadProgressBgW;clearTimerBuffer()}thisTemp.changeLoad(loadTime)}};this.timerBuffer=new this.timer(200,bufferFun)},changeLoad:function(loadTime){if(this.V==null){return}var loadProgressBgW=this.CB['timeProgressBg'].offsetWidth;var timeButtonW=this.CB['timeButton'].offsetWidth;var duration=this.V.duration;if(this.isUndefined(loadTime)){loadTime=this.loadTime}else{this.loadTime=loadTime}var loadW=parseInt((loadTime*loadProgressBgW/duration)+timeButtonW);this.css(this.CB['loadProgress'],'width',loadW+'px')},judgeIsLive:function(){var thisTemp=this;if(this.timerError!=null){if(this.timerError.runing){this.timerError.stop()}this.timerError=null}this.error=false;this.css(this.CB['errorText'],'display','none');var timeupdate=function(event){thisTemp.timeUpdateHandler()};if(!this.vars['live']){if(this.V!=null&&this.playerType=='html5video'){this.addListener('timeupdate',timeupdate);thisTemp.timeTextHandler();thisTemp.prompt();window.setTimeout(function(){thisTemp.bufferEdHandler()},200)}}else{this.removeListener('timeupdate',timeupdate);if(this.timerTime!=null){window.clearInterval(this.timerTime);timerTime=null}if(this.timerTime!=null){if(this.timerTime.runing){this.timerTime.stop()}this.timerTime=null}var timeFun=function(){if(thisTemp.V!=null&&!thisTemp.V.paused){thisTemp.CB['timeText'].innerHTML=thisTemp.getNowDate()}};this.timerTime=new timer(1000,timeFun)}this.definition()},loadTrack:function(){var thisTemp=this;var track=this.vars['chtrack'];var obj={method:'get',dataType:'text',url:track['src'],charset:track['charset'],success:function(data){thisTemp.track=thisTemp.parseSrtSubtitles(data);thisTemp.trackIndex=0;thisTemp.nowTrackShow={sn:''}}};this.ajax(obj)},resetTrack:function(){this.trackIndex=0;this.nowTrackShow={sn:''}},trackShowHandler:function(){if(this.track.length<1){return}if(this.trackIndex>=this.track.length){this.trackIndex=0}var nowTrack=this.track[this.trackIndex];if(this.time>=nowTrack['startTime']&&this.time<=nowTrack['endTime']){var nowShow=this.nowTrackShow;if(nowShow['sn']!=nowTrack['sn']){this.trackHide();this.trackShow(nowTrack)}}else{this.trackHide();this.checkTrack()}},trackShow:function(track){this.nowTrackShow=track;var arr=track['content'];for(var i=0;i<arr.length;i++){var obj={list:[{type:'text',text:arr[i],fontColor:'#FFFFFF',fontSize:16,fontFamily:'"Microsoft YaHei", YaHei, "微软雅黑", SimHei,"\5FAE\8F6F\96C5\9ED1", "黑体",Arial',lineHeight:30,}],position:[1,2,null,-(arr.length-i)*30-50]};var ele=this.addElement(obj);this.trackElement.push(ele)}},trackHide:function(){for(var i=0;i<this.trackElement.length;i++){this.deleteElement(this.trackElement[i])}this.trackElement=[]},checkTrack:function(){var num=this.trackIndex;var arr=this.track;var i=0;for(i=num;i<arr.length;i++){if(this.time>=arr[i]['startTime']&&this.time<=arr[i]['endTime']){this.trackIndex=i;break}}},playOrPause:function(){if(this.config['videoClick']){if(this.V==null){return}if(this.playerType=='flashplayer'){this.V.playOrPause();return}if(this.V.paused){this.play()}else{this.pause()}}},play:function(){if(this.V!=null&&!this.error&&this.loaded){if(this.playerType=='html5video'){this.V.play()}else{this.V.videoPlay()}}},pause:function(){if(this.V!=null&&!this.error&&this.loaded){if(this.playerType=='html5video'){this.V.pause()}else{this.V.videoPause()}}},seek:function(time){if(!this.loaded){return}var meta=this.getMetaDate();var duration=meta['duration'];if(duration>0&&time>duration){time=duration}if(this.html5Video&&this.playerType=='html5video'&&!this.error){this.V.currentTime=time}else{this.V.seek(time)}},changeVolume:function(vol,bg,button){if(isNaN(vol)||this.isUndefined(vol)){vol=0}if(!this.loaded){this.vars['volume']=vol}if(!this.html5Video){this.V.changeVolume(vol);return}try{if(this.isUndefined(bg)){bg=true}}catch(e){}try{if(this.isUndefined(button)){button=true}}catch(e){}if(vol<0){vol=0}if(vol>1){vol=1}this.V.volume=vol;this.volume=vol;if(bg){var bgW=vol*this.CB['volumeBg'].offsetWidth;if(bgW<0){bgW=0}if(bgW>this.CB['volumeBg'].offsetWidth){bgW=this.CB['volumeBg'].offsetWidth}this.css(this.CB['volumeUp'],'width',bgW+'px')}if(button){var buLeft=parseInt(this.CB['volumeUp'].offsetWidth-(this.CB['volumeBO'].offsetWidth*0.5));if(buLeft>this.CB['volumeBg'].offsetWidth-this.CB['volumeBO'].offsetWidth){buLeft=this.CB['volumeBg'].offsetWidth-this.CB['volumeBO'].offsetWidth}if(buLeft<0){buLeft=0}this.css(this.CB['volumeBO'],'left',buLeft+'px')}},switchFull:function(){if(this.full){this.quitFullScreen()}else{this.fullScreen()}},fullScreen:function(){if(this.html5Video&&this.playerType=='html5video'){var element=this.PD;if(element.requestFullscreen){element.requestFullscreen()}else if(element.mozRequestFullScreen){element.mozRequestFullScreen()}else if(element.webkitRequestFullscreen){element.webkitRequestFullscreen()}else if(element.msRequestFullscreen){element.msRequestFullscreen()}this.judgeFullScreen()}},quitFullScreen:function(){if(this.html5Video&&this.playerType=='html5video'){if(document.exitFullscreen){document.exitFullscreen()}else if(document.msExitFullscreen){document.msExitFullscreen()}else if(document.mozCancelFullScreen){document.mozCancelFullScreen()}else if(document.oRequestFullscreen){document.oCancelFullScreen()}else if(document.requestFullscreen){document.requestFullscreen()}else if(document.webkitExitFullscreen){document.webkitExitFullscreen()}else{this.css(document.documentElement,'cssText','');this.css(document.document.body,'cssText','');this.css(this.PD,'cssText','')}this.judgeFullScreen()}},changeSize:function(w,h){if(this.isUndefined(w)){w=0}if(this.isUndefined(h)){h=0}if(w>0){this.css(this.CD,'width',w+'px')}if(h>0){this.css(this.CD,'height',h+'px')}if(this.html5Video){this.elementCoordinate()}},newVideo:function(c){this.embed(c)},embedSWF:function(){var vid=this.randomString();var flashvars=this.getFlashVars();var param=this.getFlashplayerParam();var flashplayerUrl='http://www.macromedia.com/go/getflashplayer';var html='',src=javascriptPath+'chplayer.swf';id='id="'+vid+'" name="'+vid+'" ';html+='<object pluginspage="'+flashplayerUrl+'" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"  codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=11,3,0,0" width="100%" height="100%" '+id+' align="middle">';html+=param['v'];html+='<param name="movie" value="'+src+'">';html+='<param name="flashvars" value="'+flashvars+'">';html+='<embed '+param['w']+' src="'+src+'" flashvars="'+flashvars+'" width="100%" height="100%" '+id+' align="middle" type="application/x-shockwave-flash" pluginspage="'+flashplayerUrl+'" />';html+='</object>';this.PD.innerHTML=html;this.V=this.getObjectById(vid);this.playerType='flashplayer'},getFlashVars:function(){this.getVarsObject();var v=this.vars;var z='';for(k in v){if(k!='flashplayer'&&k!='container'&&v[k]!=''){if(z!=''){z+='&'}var vk=v[k];if(vk==true){vk=1}if(vk==false){vk=0}z+=k+'='+vk}}return z},getVarsObject:function(){var v=this.vars;var f='',d='',w='';var arr=this.VA;var prompt=v['prompt'];var i=0;for(i=0;i<arr.length;i++){var arr2=arr[i];if(arr2){if(f!=''){f+='|';d+='|';w+='|'}f+=arr2[0].replace(/&/g,'%26');d+=arr2[2];w+=arr2[3]}}if(v['preview']!=null){v['previewscale']=v['preview']['scale'];v['preview']=v['preview']['src'].join('|')}if(prompt!=null){v['prompt']='';v['prompttime']='';for(i=0;i<prompt.length;i++){if(v['prompt']!=''){v['prompt']+='|';v['prompttime']+='|'}v['prompt']+=prompt[i]['words'];v['prompttime']+=prompt[i]['time']}}v['video']=f;v['definition']=d;v['weight']=w;v['logo']=this.logo;var newV={};for(var k in v){if(v[k]!=null){newV[k]=v[k]}}this.vars=newV},getFlashplayerParam:function(){var w='',v='',o={allowScriptAccess:'always',allowFullScreen:true,quality:'high',bgcolor:'#000'};for(var e in o){w+=e+'="'+o[e]+'" ';v+='<param name="'+e+'" value="'+o[e]+'" />'}w=w.replace('movie=','src=');return{w:w,v:v}},sendTime:function(time){this.time=time;this.trackShowHandler()},sendVolume:function(vol){this.volume=vol},sendFull:function(b){this.full=b},getMetaDate:function(){if(!this.loaded||this.V==null){return false}if(this.playerType=='html5video'){var duration=0;try{duration=!isNaN(this.V.duration)?this.V.duration:0}catch(event){}var data={duration:duration,volume:this.V.volume,width:this.PD.offsetWidth||this.V.offsetWidth||this.V.width,height:this.PD.offsetHeight||this.V.offsetHeight||this.V.height,videoWidth:this.V.videoWidth,videoHeight:this.V.videoHeight,paused:this.V.paused};return data}else{return this.V.getMetaDate()}return false},getVideoUrl:function(){var arr=[];if(this.V.src){arr.push(this.V.src)}else{var uArr=this.V.childNodes;for(var i=0;i<uArr.length;i++){arr.push(uArr[i].src)}}return arr},addElement:function(attribute){if(this.playerType=='flashplayer'){return this.V.addElement(attribute)}var i=0;var obj={list:null,x:'100%',y:"50%",position:null,alpha:1,backgroundColor:'',backAlpha:1,backRadius:0};obj=this.standardization(obj,attribute);var list=obj['list'];if(list==null){return''}var id='element'+this.randomString(10);var ele=document.createElement('div');ele.className=id;if(obj['x']){ele.setAttribute('data-x',obj['x'])}if(obj['y']){ele.setAttribute('data-y',obj['y'])}if(obj['position']!=null){ele.setAttribute('data-position',obj['position'].join(','))}this.PD.appendChild(ele);var eid=this.getByElement(id);this.css(eid,{position:'absolute',filter:'alpha(opacity:'+obj['alpha']+')',opacity:obj['alpha'].toString(),width:'800px',zIndex:'20'});var bgid='elementbg'+this.randomString(10);var bgAlpha=obj['backAlpha'].toString();var bgColor=obj['backgroundColor'];var html='';var idArr=[];if(!this.isUndefined(list)&&list.length>0){var textObj,returnObj;for(i=0;i<list.length;i++){var newEleid='elementnew'+this.randomString(10);switch(list[i]['type']){case'image':textObj={type:'image',url:'',radius:0,width:30,height:30,alpha:1,paddingLeft:0,paddingRight:0,paddingTop:0,paddingBottom:0,marginLeft:0,marginRight:0,marginTop:0,marginBottom:0,backgroundColor:'#FFFFFF',};list[i]=this.standardization(textObj,list[i]);html+='<div class="'+newEleid+'"><img class="'+newEleid+'_image" src="'+list[i]['url']+'"></div>';break;case'text':textObj={type:'text',text:'',fontColor:'#FFFFFF',fontSize:14,fontFamily:'"Microsoft YaHei", YaHei, "微软雅黑", SimHei,"\5FAE\8F6F\96C5\9ED1", "黑体",Arial',lineHeight:0,alpha:1,paddingLeft:0,paddingRight:0,paddingTop:0,paddingBottom:0,marginLeft:0,marginRight:0,marginTop:0,marginBottom:0,backgroundColor:'',backAlpha:1,backRadius:0};list[i]=this.standardization(textObj,list[i]);html+='<div class="'+newEleid+'"><div class="'+newEleid+'_bg"></div><div class="'+newEleid+'_text">'+list[i]['text']+'</div></div>';break;default:break}idArr.push(newEleid)}}eid.innerHTML='<div class="'+bgid+'"></div><div class="'+bgid+'_c">'+html+'</div>';this.css(bgid+'_c',{position:'absolute',zIndex:'2'});for(i=0;i<idArr.length;i++){switch(list[i]['type']){case'image':this.css(idArr[i],{float:'left',width:list[i]['width']+'px',height:list[i]['height']+'px',filter:'alpha(opacity:'+list[i]['alpha']+')',opacity:list[i]['alpha'].toString(),marginLeft:list[i]['marginLeft']+'px',marginRight:list[i]['marginRight']+'px',marginTop:list[i]['marginTop']+'px',marginBottom:list[i]['marginBottom']+'px',borderRadius:list[i]['radius']+'px',});this.css(idArr[i]+'_image',{width:list[i]['width']+'px',height:list[i]['height']+'px',borderRadius:list[i]['radius']+'px'});break;case'text':this.css(idArr[i]+'_text',{filter:'alpha(opacity:'+list[i]['alpha']+')',opacity:list[i]['alpha'].toString(),borderRadius:list[i]['radius']+'px',fontFamily:list[i]['fontFamily'],fontSize:list[i]['fontSize']+'px',color:list[i]['fontColor'],lineHeight:list[i]['lineHeight']>0?list[i]['lineHeight']+'px':'',paddingLeft:list[i]['paddingLeft']+'px',paddingRight:list[i]['paddingRight']+'px',paddingTop:list[i]['paddingTop']+'px',paddingBottom:list[i]['paddingBottom']+'px',whiteSpace:'nowrap',position:'absolute',zIndex:'3'});this.css(idArr[i],{float:'left',width:this.getByElement(idArr[i]+'_text').offsetWidth+'px',height:this.getByElement(idArr[i]+'_text').offsetHeight+'px',marginLeft:list[i]['marginLeft']+'px',marginRight:list[i]['marginRight']+'px',marginTop:list[i]['marginTop']+'px',marginBottom:list[i]['marginBottom']+'px'});this.css(idArr[i]+'_bg',{width:this.getByElement(idArr[i]+'_text').offsetWidth+'px',height:this.getByElement(idArr[i]+'_text').offsetHeight+'px',filter:'alpha(opacity:'+list[i]['backAlpha']+')',opacity:list[i]['backAlpha'].toString(),borderRadius:list[i]['backRadius']+'px',backgroundColor:list[i]['backgroundColor'],position:'absolute',zIndex:'2'});break;default:break}}this.css(bgid,{width:this.getByElement(bgid+'_c').offsetWidth+'px',height:this.getByElement(bgid+'_c').offsetHeight+'px',position:'absolute',filter:'alpha(opacity:'+bgAlpha+')',opacity:bgAlpha,backgroundColor:bgColor,borderRadius:obj['backRadius']+'px',zIndex:'1'});this.css(eid,{width:this.getByElement(bgid).offsetWidth+'px',height:this.getByElement(bgid).offsetHeight+'px'});var eidCoor=this.calculationCoor(eid);this.css(eid,{left:eidCoor['x']+'px',top:eidCoor['y']+'px'});this.elementArr.push(eid.className);return eid},getElement:function(element){if(this.playerType=='flashplayer'){return this.V.getElement(element)}var ele=element;if(typeof(element)=='string'){ele=this.getByElement(element)}var coor=this.getCoor(ele);return{x:coor['x'],y:coor['y'],width:ele.offsetWidth,height:ele.offsetHeight,alpha:!this.isUndefined(this.css(ele,'opacity'))?parseFloat(this.css(ele,'opacity')):1}},calculationCoor:function(ele){if(this.playerType=='flashplayer'){return this.V.calculationCoor(ele)}if(ele==[]){return}var x,y,position=[];var w=this.PD.offsetWidth,h=this.PD.offsetHeight;var ew=ele.offsetWidth,eh=ele.offsetHeight;if(!this.isUndefined(ele.dataset['x'])){x=ele.dataset['x']}if(!this.isUndefined(ele.dataset['y'])){y=ele.dataset['y']}if(!this.isUndefined(ele.dataset['position'])){position=ele.dataset['position'].split(',')}if(position.length>0){position.push(null,null,null,null);var i=0;for(i=0;i<position.length;i++){if(this.isUndefined(position[i])||position[i]==null||position[i]=='null'||position[i]==''){position[i]=null}else{position[i]=parseFloat(position[i])}}if(position[2]==null){switch(position[0]){case 0:x=0;break;case 1:x=parseInt((w-ew)*0.5);break;default:x=w-ew;break}}else{switch(position[0]){case 0:x=position[2];break;case 1:x=parseInt(w*0.5)+position[2];break;default:x=w+position[2];break}}if(position[3]==null){switch(position[1]){case 0:y=0;break;case 1:y=parseInt((h-eh)*0.5);break;default:y=h-eh;break}}else{switch(position[1]){case 0:y=position[3];break;case 1:y=parseInt(h*0.5)+position[3];break;default:y=h+position[3];break}}}else{if(x.substring(x.length-1,x.length)=='%'){x=Math.floor(parseInt(x.substring(0,x.length-1))*w*0.01)}if(y.substring(y.length-1,y.length)=='%'){y=Math.floor(parseInt(y.substring(0,y.length-1))*h*0.01)}}return{x:x,y:y}},changeElementCoor:function(){for(var i=0;i<this.elementArr.length;i++){if(this.getByElement(this.elementArr[i])!=[]){var c=this.calculationCoor(this.getByElement(this.elementArr[i]));this.css(this.elementArr[i],{top:c['y']+'px',left:c['x']+'px'})}}},tween:function(){var Tween={None:{easeIn:function(t,b,c,d){return c*t/d+b},easeOut:function(t,b,c,d){return c*t/d+b},easeInOut:function(t,b,c,d){return c*t/d+b}},Quadratic:{easeIn:function(t,b,c,d){return c*(t/=d)*t+b},easeOut:function(t,b,c,d){return-c*(t/=d)*(t-2)+b},easeInOut:function(t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return-c/2*((--t)*(t-2)-1)+b}},Cubic:{easeIn:function(t,b,c,d){return c*(t/=d)*t*t+b},easeOut:function(t,b,c,d){return c*((t=t/d-1)*t*t+1)+b},easeInOut:function(t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b}},Quartic:{easeIn:function(t,b,c,d){return c*(t/=d)*t*t*t+b},easeOut:function(t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b},easeInOut:function(t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t+b;return-c/2*((t-=2)*t*t*t-2)+b}},Quintic:{easeIn:function(t,b,c,d){return c*(t/=d)*t*t*t*t+b},easeOut:function(t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b},easeInOut:function(t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t*t+b;return c/2*((t-=2)*t*t*t*t+2)+b}},Sine:{easeIn:function(t,b,c,d){return-c*Math.cos(t/d*(Math.PI/2))+c+b},easeOut:function(t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b},easeInOut:function(t,b,c,d){return-c/2*(Math.cos(Math.PI*t/d)-1)+b}},Exponential:{easeIn:function(t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d-1))+b},easeOut:function(t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b},easeInOut:function(t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;return c/2*(-Math.pow(2,-10*--t)+2)+b}},Circular:{easeIn:function(t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)-1)+b},easeOut:function(t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b},easeInOut:function(t,b,c,d){if((t/=d/2)<1)return-c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b}},Elastic:{easeIn:function(t,b,c,d,a,p){if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(!a||a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b},easeOut:function(t,b,c,d,a,p){if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(!a||a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return(a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b)},easeInOut:function(t,b,c,d,a,p){if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(!a||a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b}},Back:{easeIn:function(t,b,c,d,s){if(s==undefined)s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b},easeOut:function(t,b,c,d,s){if(s==undefined)s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},easeInOut:function(t,b,c,d,s){if(s==undefined)s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b}},Bounce:{easeIn:function(t,b,c,d){return c-Tween.Bounce.easeOut(d-t,0,c,d)+b},easeOut:function(t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b}else if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b}else if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b}},easeInOut:function(t,b,c,d){if(t<d/2)return Tween.Bounce.easeIn(t*2,0,c,d)*.5+b;else return Tween.Bounce.easeOut(t*2-d,0,c,d)*.5+c*.5+b}}};return Tween},animate:function(attribute){if(this.playerType=='flashplayer'){return this.V.animate(attribute)}var thisTemp=this;var animateId='animate_'+this.randomString();var obj={element:null,parameter:'x',static:false,effect:'None.easeIn',start:null,end:null,speed:0,overStop:false,pauseStop:false,callBack:null};obj=this.standardization(obj,attribute);if(obj['element']==null||obj['speed']==0){return false}var w=this.PD.offsetWidth,h=this.PD.offsetHeight;var effArr=(obj['effect']+'.').split('.');var tweenFun=this.tween()[effArr[0]][effArr[1]];var eleCoor={x:0,y:0};if(this.isUndefined(tweenFun)){return false}var def=this.arrIndexOf(this.elementArr,obj['element'].className);if(def>-1){this.elementArr.splice(def,1)}var css={};var pm=this.getElement(obj['element']);var t=0;var b=0;var c=0;var d=obj['speed']*1000;var timerTween=null;var tweenObj=null;var start=obj['start']==null?'':obj['start'].toString();var end=obj['end']==null?'':obj['end'].toString();switch(obj['parameter']){case'x':if(obj['start']==null){b=pm['x']}else{if(start.substring(start.length-1,start.length)=='%'){b=parseInt(start)*w*0.01}else{b=parseInt(start)}}if(obj['end']==null){c=pm['x']-b}else{if(end.substring(end.length-1,end.length)=='%'){c=parseInt(end)*w*0.01-b}else if(end.substring(0,1)=='-'||end.substring(0,1)=='+'){if(typeof(obj['end'])=='number'){c=parseInt(obj['end'])-b}else{c=parseInt(end)}}else{c=parseInt(end)-b}}break;case'y':if(obj['start']==null){b=pm['y']}else{if(start.substring(start.length-1,start.length)=='%'){b=parseInt(start)*h*0.01}else{b=parseInt(start)}}if(obj['end']==null){c=pm['y']-b}else{if(end.substring(end.length-1,end.length)=='%'){c=parseInt(end)*h*0.01-b}else if(end.substring(0,1)=='-'||end.substring(0,1)=='+'){if(typeof(obj['end'])=='number'){c=parseInt(obj['end'])-b}else{c=parseInt(end)}}else{c=parseInt(end)-b}}break;case'alpha':if(obj['start']==null){b=pm['alpha']*100}else{if(start.substring(start.length-1,start.length)=='%'){b=parseInt(obj['start'])}else{b=parseInt(obj['start']*100)}}if(obj['end']==null){c=pm['alpha']*100-b}else{if(end.substring(end.length-1,end.length)=='%'){c=parseInt(end)-b}else if(end.substring(0,1)=='-'||end.substring(0,1)=='+'){if(typeof(obj['end'])=='number'){c=parseInt(obj['end'])*100-b}else{c=parseInt(obj['end'])*100}}else{c=parseInt(obj['end'])*100-b}}break}var callBack=function(){var index=thisTemp.arrIndexOf(thisTemp.animateElementArray,animateId);if(index>-1){thisTemp.animateArray.splice(index,1);thisTemp.animateElementArray.splice(index,1)}index=thisTemp.arrIndexOf(thisTemp.animatePauseArray,animateId);if(index>-1){thisTemp.animatePauseArray.splice(index,1)}if(obj['callBack']!=null&&obj['element']&&obj['callBack']!='callBack'&&obj['callBack']!='tweenX'&&obj['tweenY']!='callBack'&&obj['callBack']!='tweenAlpha'){var cb=eval(obj['callBack']);cb(obj['element']);obj['callBack']=null}};var stopTween=function(){if(timerTween!=null){if(timerTween.runing){timerTween.stop()}timerTween=null}};var tweenX=function(){if(t<d){t+=10;css={left:Math.ceil(tweenFun(t,b,c,d))+'px'};if(obj['static']){eleCoor=thisTemp.calculationCoor(obj['element']);css['top']=eleCoor['y']+'px'}thisTemp.css(obj['element'],css)}else{stopTween();thisTemp.elementArr.push(obj['element'].className);callBack()}};var tweenY=function(){if(t<d){t+=10;css={top:Math.ceil(tweenFun(t,b,c,d))+'px'};if(obj['static']){eleCoor=thisTemp.calculationCoor(obj['element']);css['left']=eleCoor['x']+'px'}thisTemp.css(obj['element'],css)}else{stopTween();thisTemp.elementArr.push(obj['element'].className);callBack()}};var tweenAlpha=function(){if(t<d){t+=10;eleCoor=thisTemp.calculationCoor(obj['element']);var ap=Math.ceil(tweenFun(t,b,c,d))*0.01;css={filter:'alpha(opacity:'+ap+')',opacity:ap.toString()};if(obj['static']){eleCoor=thisTemp.calculationCoor(obj['element']);css['top']=eleCoor['y']+'px';css['left']=eleCoor['x']+'px'}thisTemp.css(obj['element'],css)}else{stopTween();thisTemp.elementArr.push(obj['element'].className);callBack()}};switch(obj['parameter']){case'x':tweenObj=tweenX;break;case'y':tweenObj=tweenY;break;case'alpha':tweenObj=tweenAlpha;break;default:break}timerTween=new thisTemp.timer(10,tweenObj);if(obj['overStop']){var mouseOver=function(){if(timerTween!=null&&timerTween.runing){timerTween.stop()}};this.addListener('mouseover',mouseOver,obj['element']);var mouseOut=function(){var start=true;if(obj['pauseStop']&&thisTemp.getMetaDate()['paused']){start=false}if(timerTween!=null&&!timerTween.runing&&start){timerTween.start()}};this.addListener('mouseout',mouseOut,obj['element'])}this.animateArray.push(timerTween);this.animateElementArray.push(animateId);if(obj['pauseStop']){this.animatePauseArray.push(animateId)}return animateId},animateResume:function(id){if(this.playerType=='flashplayer'){this.V.animateResume(this.isUndefined(id)?'':id);return}var arr=[];if(id!=''&&!this.isUndefined(id)&&id!='pause'){arr.push(id)}else{if(id==='pause'){arr=this.animatePauseArray}else{arr=this.animateElementArray}}for(var i=0;i<arr.length;i++){var index=this.arrIndexOf(this.animateElementArray,arr[i]);if(index>-1){this.animateArray[index].start()}}},animatePause:function(id){if(this.playerType=='flashplayer'){this.V.animatePause(this.isUndefined(id)?'':id);return}var arr=[];if(id!=''&&!this.isUndefined(id)&&id!='pause'){arr.push(id)}else{if(id==='pause'){arr=this.animatePauseArray}else{arr=this.animateElementArray}}for(var i=0;i<arr.length;i++){var index=this.arrIndexOf(this.animateElementArray,arr[i]);if(index>-1){this.animateArray[index].stop()}}},deleteAnimate:function(id){var index=this.arrIndexOf(this.animateElementArray,id);if(index>-1){this.animateArray.splice(index,1);this.animateElementArray.splice(index,1)}},deleteElement:function(ele){if(this.playerType=='flashplayer'&&this.V){try{this.V.deleteElement(ele)}catch(event){}return}var def=this.arrIndexOf(this.elementArr,ele.className);if(def>-1){this.elementArr.splice(def,1)}this.deleteAnimate(ele);this.deleteChild(ele)},getByElement:function(obj,parent){if(this.isUndefined(parent)){parent=document}var num=obj.substr(0,1);var res=[];if(num!='#'){if(num=='.'){obj=obj.substr(1,obj.length)}if(parent.getElementsByClassName){res=parent.getElementsByClassName(obj)}else{var reg=new RegExp(' '+obj+' ','i');var ele=parent.getElementsByTagName('*');for(var i=0;i<ele.length;i++){if(reg.test(' '+ele[i].className+' ')){res.push(ele[i])}}}if(res.length>0){return res[0]}else{return res}}else{if(num=='#'){obj=obj.substr(1,obj.length)}return document.getElementById(obj)}},css:function(elem,attribute,value){var i=0;var k='';if(typeof(elem)=='object'){if(!this.isUndefined(typeof(elem.length))){for(i=0;i<elem.length;i++){var el;if(typeof(elem[i])=='string'){el=this.getByElement(elem[i])}else{el=elem[i]}if(typeof(attribute)!='object'){if(!this.isUndefined(value)){el.style[attribute]=value}}else{for(k in attribute){if(!this.isUndefined(attribute[k])){el.style[k]=attribute[k]}}}}return}}if(typeof(elem)=='string'){elem=this.getByElement(elem)}if(typeof(attribute)!='object'){if(!this.isUndefined(value)){elem.style[attribute]=value}else{if(!this.isUndefined(elem.style[attribute])){return elem.style[attribute]}else{return false}}}else{for(k in attribute){if(!this.isUndefined(attribute[k])){elem.style[k]=attribute[k]}}}},isUndefined:function(value){try{if(value=='undefined'||value==undefined){return true}}catch(event){}return false},addListener:function(e,f,d,t){if(this.playerType=='flashplayer'&&this.isUndefined(d)){var ff='';if(typeof(f)=='function'){ff=this.getParameterNames(f)}this.V.addListener(e,ff);return}if(this.isUndefined(t)){t=false}if(e=='full'){this.fullFunArr.push(f);return}if(e=='error'&&this.isUndefined(d)){this.errorFunArr.push(f);return}if(e=='videochange'){this.videoChangeFunArr.push(f);return}var o=this.V;if(!this.isUndefined(d)){o=d}this.listenerArr.push([e,f,d,t]);if(o.addEventListener){try{o.addEventListener(e,f,t)}catch(event){}}else if(o.attachEvent){try{o.attachEvent('on'+e,f)}catch(event){}}else{o['on'+e]=f}},removeListener:function(e,f,d,t){if(this.playerType=='flashplayer'&&this.getParameterNames(f)&&this.isUndefined(d)){return}if(this.isUndefined(t)){t=false}if(e=='full'){this.delFullFunArr(f);return}if(e=='error'){this.delErrorFunArr(f);return}if(e=='videochange'){this.delVideoChangeFunArr(f);return}var o=this.V;if(!this.isUndefined(d)){o=d}for(var i=0;i<this.listenerArr.length;i++){if([e,f,d,t]==this.listenerArr[i]){this.listenerArr.splice(i,1);break}}if(o.removeEventListener){try{this.addNum--;o.removeEventListener(e,f,t)}catch(e){}}else if(o.detachEvent){try{o.detachEvent('on'+e,f)}catch(e){}}else{o['on'+e]=null}},getParameterNames:function(fn){if(typeof(fn)!=='function'){return false}var COMMENTS=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;var code=fn.toString().replace(COMMENTS,'');var result=code.slice(code.indexOf(' ')+1,code.indexOf('('));return result===null?false:result},getNowDate:function(){var nowDate=new Date();var month=nowDate.getMonth()+1;var date=nowDate.getDate();var hours=nowDate.getHours();var minutes=nowDate.getMinutes();var seconds=nowDate.getSeconds();var tMonth='',tDate='',tHours='',tMinutes='',tSeconds='',tSeconds=(seconds<10)?'0'+seconds:seconds+'',tMinutes=(minutes<10)?'0'+minutes:minutes+'',tHours=(hours<10)?'0'+hours:hours+'',tDate=(date<10)?'0'+date:date+'',tMonth=(month<10)?'0'+month:month+'';return tMonth+'/'+tDate+' '+tHours+':'+tMinutes+':'+tSeconds},formatTime:function(seconds,ishours){var tSeconds='',tMinutes='',tHours='';if(isNaN(seconds)){seconds=0}var s=Math.floor(seconds%60),m=0,h=0;if(ishours){m=Math.floor(seconds/60)%60;h=Math.floor(seconds/3600)}else{m=Math.floor(seconds/60)}tSeconds=(s<10)?'0'+s:s+'';tMinutes=(m>0)?((m<10)?'0'+m+':':m+':'):'00:';tHours=(h>0)?((h<10)?'0'+h+':':h+':'):'';if(ishours){return tHours+tMinutes+tSeconds}else{return tMinutes+tSeconds}},randomString:function(len){len=len||16;var chars='abcdefghijklmnopqrstuvwxyz';var maxPos=chars.length;　　var val='';for(i=0;i<len;i++){val+=chars.charAt(Math.floor(Math.random()*maxPos))}return'ch'+val},getStringLen:function(str){var len=0;for(var i=0;i<str.length;i++){if(str.charCodeAt(i)>127||str.charCodeAt(i)==94){len+=2}else{len++}}return len},createXHR:function(){if(window.XMLHttpRequest){return new XMLHttpRequest()}else if(window.ActiveXObject){try{return new ActiveXObject('Microsoft.XMLHTTP')}catch(event){try{return new ActiveXObject('Msxml2.XMLHTTP')}catch(event){this.eject(this.errorList[7])}}}else{this.eject(this.errorList[8])}},ajax:function(cObj){var thisTemp=this;var callback=null;var obj={method:'get',dataType:'json',charset:'utf-8',async:false,url:'',data:null,success:null};if(typeof(cObj)!='object'){this.eject(this.errorList[9]);return}obj=this.standardization(obj,cObj);if(obj.dataType==='json'||obj.dataType==='text'||obj.dataType==='html'){var xhr=this.createXHR();callback=function(){if(xhr.status==200){if(obj.success==null){return}if(obj.dataType==='json'){obj.success(eval('('+xhr.responseText+')'))}else{obj.success(xhr.responseText)}}else{thisTemp.eject(thisTemp.errorList[10],'Ajax.status:'+xhr.status)}};obj.url=obj.url+'?rand='+this.randomString(6);obj.data=this.formatParams(obj.data);if(obj.method==='get'&&!this.isUndefined(obj.data)){obj.url+=obj.url.indexOf('?')==-1?'?'+obj.data:'&'+obj.data}if(obj.async===true){xhr.onreadystatechange=function(){if(xhr.readyState==4){callback()}}}xhr.open(obj.method,obj.url,obj.async);if(obj.method==='post'){xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');xhr.setRequestHeader('charset',obj['charset']);xhr.send(obj.data)}else{xhr.send(null)}if(obj.async===false){callback()}}else if(obj.dataType==='jsonp'){var oHead=document.getElementsByTagName('head')[0];var oScript=document.createElement('script');var callbackName='callback'+new Date().getTime();var params=this.formatParams(obj.data)+'&callback='+callbackName;callback=obj.success;oScript.src=obj.url.split('?')+'?'+params;oHead.insertBefore(oScript,oHead.firstChild);window[callbackName]=function(json){callback(json);oHead.removeChild(oScript)}}},loadJs:function(path,success){var oHead=document.getElementsByTagName('HEAD').item(0);var oScript=document.createElement('script');oScript.type='text/javascript';oScript.src=this.getNewUrl(path);oHead.appendChild(oScript);oScript.onload=function(){success()}},supportVideo:function(){if(!!document.createElement('video').canPlayType){var vidTest=document.createElement("video");oggTest=vidTest.canPlayType('video/ogg; codecs="theora, vorbis"');if(!oggTest){h264Test=vidTest.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');if(!h264Test){return false}else{if(h264Test=="probably"){return true}else{return false}}}else{if(oggTest=="probably"){return true}else{return false}}}else{return false}},getObjectById:function(id){var x=null;var y=this.getByElement('#'+id);var r='embed';if(y&&y.nodeName=='OBJECT'){if(typeof(y.SetVariable)!='undefined'){x=y}else{var z=y.getElementsByTagName(r)[0];if(z){x=z}}}return x},formatParams:function(data){var arr=[];for(var i in data){arr.push(encodeURIComponent(i)+'='+encodeURIComponent(data[i]))}return arr.join('&')},arrSort:function(arr){var temp=[];for(var i=0;i<arr.length;i++){for(var j=0;j<arr.length-i;j++){if(!this.isUndefined(arr[j+1])&&arr[j][3]<arr[j+1][3]){temp=arr[j+1];arr[j+1]=arr[j];arr[j]=temp}}}return arr},getFileExt:function(filepath){if(filepath!=''){if(filepath.indexOf('?')>-1){filepath=filepath.split('?')[0]}var pos='.'+filepath.replace(/.+\./,'');return pos}return''},isContains:function(str,key){return str.indexOf(key)>-1},getNewUrl:function(url){if(this.isContains(url,'?')){return url+='&'+this.randomString(8)+'='+this.randomString(8)}else{return url+='?'+this.randomString(8)+'='+this.randomString(8)}},client:function(event){var eve=event||window.event;if(this.isUndefined(eve)){eve={clientX:0,clientY:0}}return{x:eve.clientX+(document.documentElement.scrollLeft||document.body.scrollLeft)-this.pdCoor['x'],y:eve.clientY+(document.documentElement.scrollTop||document.body.scrollTop)-this.pdCoor['y']}},getCoor:function(obj){var coor=this.getXY(obj);return{x:coor['x']-this.pdCoor['x'],y:coor['y']-this.pdCoor['y']}},getXY:function(obj){var parObj=obj;var left=obj.offsetLeft;var top=obj.offsetTop;while(parObj=parObj.offsetParent){left+=parObj.offsetLeft;top+=parObj.offsetTop}return{x:left,y:top}},removeChild:function(){if(this.playerType=='html5video'){var i=0;var timerArr=[this.timerError,this.timerFull,this.timerTime,this.timerBuffer,this.timerClick,this.timerLoading,this.timerCBar,this.timerVCanvas];for(i=0;i<timerArr.length;i++){if(timerArr[i]!=null){if(timerArr[i].runing){timerArr[i].stop()}timerArr[i]=null}}var ltArr=this.listenerArr;for(i=0;i<ltArr.length;i++){this.removeListener(ltArr[i][0],ltArr[i][1],ltArr[i][2],ltArr[i][3])}}this.playerType=='';this.V=null;this.deleteChild(this.CB['menu']);this.deleteChild(this.PD);this.CD.innerHTML=''},canvasFill:function(name,path){name.beginPath();for(var i=0;i<path.length;i++){var d=path[i];if(i>0){name.lineTo(d[0],d[1])}else{name.moveTo(d[0],d[1])}}name.closePath();name.fill()},canvasFillRect:function(name,path){for(var i=0;i<path.length;i++){var d=path[i];name.fillRect(d[0],d[1],d[2],d[3])}},deleteChild:function(f){var def=this.arrIndexOf(this.elementArr,f.className);if(def>-1){this.elementArr.splice(def,1)}var childs=f.childNodes;for(var i=childs.length-1;i>=0;i--){f.removeChild(childs[i])}if(f&&f!=null&&f.parentNode){try{if(f.parentNode){f.parentNode.removeChild(f)}}catch(event){}}},getProportionCoor:function(stageW,stageH,vw,vh){var w=0,h=0,x=0,y=0;if(stageW/stageH<vw/vh){w=stageW;h=w*vh/vw}else{h=stageH;w=h*vw/vh}x=(stageW-w)*0.5;y=(stageH-h)*0.5;return{width:parseInt(w),height:parseInt(h),x:parseInt(x),y:parseInt(y)}},parseSrtSubtitles:function(srt){var subtitles=[];var textSubtitles=[];var i=0;var arrs=srt.split('\n');var arr=[];var delHtmlTag=function(str){return str.replace(/<[^>]+>/g,'')};for(i=0;i<arrs.length;i++){if(arrs[i].replace(/\s/g,'').length>0){arr.push(arrs[i])}else{if(arr.length>0){textSubtitles.push(arr)}arr=[]}}for(i=0;i<textSubtitles.length;++i){var textSubtitle=textSubtitles[i];if(textSubtitle.length>=2){var sn=textSubtitle[0];var startTime=this.toSeconds(this.trim(textSubtitle[1].split(' --> ')[0]));var endTime=this.toSeconds(this.trim(textSubtitle[1].split(' --> ')[1]));var content=[delHtmlTag(textSubtitle[2])];if(textSubtitle.length>2){for(var j=3;j<textSubtitle.length;j++){content.push(delHtmlTag(textSubtitle[j]))}}var subtitle={sn:sn,startTime:startTime,endTime:endTime,content:content};subtitles.push(subtitle)}}return subtitles},timer:function(time,fun,number){var thisTemp=this;this.time=10;this.fun=null;this.timeObj=null;this.number=0;this.numberTotal=null;this.runing=false;this.startFun=function(){thisTemp.number++;thisTemp.fun();if(thisTemp.numberTotal!=null&&thisTemp.number>=thisTemp.numberTotal){thisTemp.stop()}};this.start=function(){if(!thisTemp.runing){thisTemp.runing=true;thisTemp.timeObj=window.setInterval(thisTemp.startFun,time)}};this.stop=function(){if(thisTemp.runing){thisTemp.runing=false;window.clearInterval(thisTemp.timeObj);thisTemp.timeObj=null}};if(time){this.time=time}if(fun){this.fun=fun}if(number){this.numberTotal=number}this.start()},toSeconds:function(t){var s=0.0;if(t){var p=t.split(':');for(i=0;i<p.length;i++){s=s*60+parseFloat(p[i].replace(',','.'))}}return s},standardization:function(o,n){var h={};var k;for(k in o){h[k]=o[k]}for(k in n){var type=typeof(h[k]);switch(type){case'number':h[k]=parseFloat(n[k]);break;case'string':if(typeof(n[k])!='string'&&typeof(n[k])!='undefined'){h[k]=n[k].toString()}else{h[k]=n[k]}break;default:h[k]=n[k];break}}return h},arrIndexOf:function(arr,key){var re=new RegExp(key,['']);return(arr.toString().replace(re,'┢').replace(/[^,┢]/g,'')).indexOf('┢')},trim:function(str){return str.replace(/(^\s*)|(\s*$)/g,'')},log:function(val){try{console.log(val)}catch(e){}},eject:function(er,val){if(!this.vars['debug']){return}var errorVal=er[1];if(!this.isUndefined(val)){errorVal=errorVal.replace('[error]',val)}var value='error '+er[0]+':'+errorVal;try{alert(value)}catch(e){}}};window.chplayer=chplayer})();
