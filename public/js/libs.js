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

/*
 Copyright (C) Federico Zivolo 2017
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var o=window.getComputedStyle(e,null);return t?o[t]:o}function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e||-1!==['HTML','BODY','#document'].indexOf(e.nodeName))return window.document.body;var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return /(auto|scroll)/.test(r+s+p)?e:n(o(e))}function r(e){var o=e&&e.offsetParent,i=o&&o.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TD','TABLE'].indexOf(o.nodeName)&&'static'===t(o,'position')?r(o):o:window.document.documentElement}function p(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||r(e.firstElementChild)===e)}function s(e){return null===e.parentNode?e:s(e.parentNode)}function d(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return window.document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,i=o?e:t,n=o?t:e,a=document.createRange();a.setStart(i,0),a.setEnd(n,0);var f=a.commonAncestorContainer;if(e!==f&&t!==f||i.contains(n))return p(f)?f:r(f);var l=s(e);return l.host?d(l.host,t):d(e,s(t).host)}function a(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',i=e.nodeName;if('BODY'===i||'HTML'===i){var n=window.document.documentElement,r=window.document.scrollingElement||n;return r[o]}return e[o]}function f(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],i=a(t,'top'),n=a(t,'left'),r=o?-1:1;return e.top+=i*r,e.bottom+=i*r,e.left+=n*r,e.right+=n*r,e}function l(e,t){var o='x'===t?'Left':'Top',i='Left'==o?'Right':'Bottom';return+e['border'+o+'Width'].split('px')[0]+ +e['border'+i+'Width'].split('px')[0]}function m(e,t,o,i){return _(t['offset'+e],o['client'+e],o['offset'+e],ie()?o['offset'+e]+i['margin'+('Height'===e?'Top':'Left')]+i['margin'+('Height'===e?'Bottom':'Right')]:0)}function h(){var e=window.document.body,t=window.document.documentElement,o=ie()&&window.getComputedStyle(t);return{height:m('Height',e,t,o),width:m('Width',e,t,o)}}function c(e){return se({},e,{right:e.left+e.width,bottom:e.top+e.height})}function g(e){var o={};if(ie())try{o=e.getBoundingClientRect();var i=a(e,'top'),n=a(e,'left');o.top+=i,o.left+=n,o.bottom+=i,o.right+=n}catch(e){}else o=e.getBoundingClientRect();var r={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},p='HTML'===e.nodeName?h():{},s=p.width||e.clientWidth||r.right-r.left,d=p.height||e.clientHeight||r.bottom-r.top,f=e.offsetWidth-s,m=e.offsetHeight-d;if(f||m){var g=t(e);f-=l(g,'x'),m-=l(g,'y'),r.width-=f,r.height-=m}return c(r)}function u(e,o){var i=ie(),r='HTML'===o.nodeName,p=g(e),s=g(o),d=n(e),a=t(o),l=+a.borderTopWidth.split('px')[0],m=+a.borderLeftWidth.split('px')[0],h=c({top:p.top-s.top-l,left:p.left-s.left-m,width:p.width,height:p.height});if(h.marginTop=0,h.marginLeft=0,!i&&r){var u=+a.marginTop.split('px')[0],b=+a.marginLeft.split('px')[0];h.top-=l-u,h.bottom-=l-u,h.left-=m-b,h.right-=m-b,h.marginTop=u,h.marginLeft=b}return(i?o.contains(d):o===d&&'BODY'!==d.nodeName)&&(h=f(h,o)),h}function b(e){var t=window.document.documentElement,o=u(e,t),i=_(t.clientWidth,window.innerWidth||0),n=_(t.clientHeight,window.innerHeight||0),r=a(t),p=a(t,'left'),s={top:r-o.top+o.marginTop,left:p-o.left+o.marginLeft,width:i,height:n};return c(s)}function y(e){var i=e.nodeName;return'BODY'===i||'HTML'===i?!1:'fixed'===t(e,'position')||y(o(e))}function w(e,t,i,r){var p={top:0,left:0},s=d(e,t);if('viewport'===r)p=b(s);else{var a;'scrollParent'===r?(a=n(o(e)),'BODY'===a.nodeName&&(a=window.document.documentElement)):'window'===r?a=window.document.documentElement:a=r;var f=u(a,s);if('HTML'===a.nodeName&&!y(s)){var l=h(),m=l.height,c=l.width;p.top+=f.top-f.marginTop,p.bottom=m+f.top,p.left+=f.left-f.marginLeft,p.right=c+f.left}else p=f}return p.left+=i,p.top+=i,p.right-=i,p.bottom-=i,p}function v(e){var t=e.width,o=e.height;return t*o}function E(e,t,o,i,n){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=w(o,i,r,n),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return se({key:e},s[e],{area:v(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,i=e.height;return t>=o.clientWidth&&i>=o.clientHeight}),f=0<a.length?a[0].key:d[0].key,l=e.split('-')[1];return f+(l?'-'+l:'')}function x(e,t,o){var i=d(t,o);return u(o,i)}function O(e){var t=window.getComputedStyle(e),o=parseFloat(t.marginTop)+parseFloat(t.marginBottom),i=parseFloat(t.marginLeft)+parseFloat(t.marginRight),n={width:e.offsetWidth+i,height:e.offsetHeight+o};return n}function L(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function S(e,t,o){o=o.split('-')[0];var i=O(e),n={width:i.width,height:i.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return n[p]=t[p]+t[d]/2-i[d]/2,n[s]=o===s?t[s]-i[a]:t[L(s)],n}function T(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function C(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var i=T(e,function(e){return e[t]===o});return e.indexOf(i)}function N(t,o,i){var n=void 0===i?t:t.slice(0,C(t,'name',i));return n.forEach(function(t){t.function&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var i=t.function||t.fn;t.enabled&&e(i)&&(o.offsets.popper=c(o.offsets.popper),o.offsets.reference=c(o.offsets.reference),o=i(o,t))}),o}function k(){if(!this.state.isDestroyed){var e={instance:this,styles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=x(this.state,this.popper,this.reference),e.placement=E(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.offsets.popper=S(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position='absolute',e=N(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function W(e,t){return e.some(function(e){var o=e.name,i=e.enabled;return i&&o===t})}function B(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length-1;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof window.document.body.style[r])return r}return null}function D(){return this.state.isDestroyed=!0,W(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.left='',this.popper.style.position='',this.popper.style.top='',this.popper.style[B('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function H(e,t,o,i){var r='BODY'===e.nodeName,p=r?window:e;p.addEventListener(t,o,{passive:!0}),r||H(n(p.parentNode),t,o,i),i.push(p)}function P(e,t,o,i){o.updateBound=i,window.addEventListener('resize',o.updateBound,{passive:!0});var r=n(e);return H(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function A(){this.state.eventsEnabled||(this.state=P(this.reference,this.options,this.state,this.scheduleUpdate))}function M(e,t){return window.removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function I(){this.state.eventsEnabled&&(window.cancelAnimationFrame(this.scheduleUpdate),this.state=M(this.reference,this.state))}function R(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function U(e,t){Object.keys(t).forEach(function(o){var i='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&R(t[o])&&(i='px'),e.style[o]=t[o]+i})}function Y(e,t){Object.keys(t).forEach(function(o){var i=t[o];!1===i?e.removeAttribute(o):e.setAttribute(o,t[o])})}function F(e,t,o){var i=T(e,function(e){var o=e.name;return o===t}),n=!!i&&e.some(function(e){return e.name===o&&e.enabled&&e.order<i.order});if(!n){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return n}function j(e){return'end'===e?'start':'start'===e?'end':e}function K(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=ae.indexOf(e),i=ae.slice(o+1).concat(ae.slice(0,o));return t?i.reverse():i}function q(e,t,o,i){var n=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+n[1],p=n[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=i;}var d=c(s);return d[t]/100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?_(document.documentElement.clientHeight,window.innerHeight||0):_(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}return r}function G(e,t,o,i){var n=[0,0],r=-1!==['right','left'].indexOf(i),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(T(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,i){var n=(1===i?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return q(e,n,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,i){R(o)&&(n[t]+=o*('-'===e[i-1]?-1:1))})}),n}for(var z=Math.min,V=Math.floor,_=Math.max,X=['native code','[object MutationObserverConstructor]'],Q=function(e){return X.some(function(t){return-1<(e||'').toString().indexOf(t)})},J='undefined'!=typeof window,Z=['Edge','Trident','Firefox'],$=0,ee=0;ee<Z.length;ee+=1)if(J&&0<=navigator.userAgent.indexOf(Z[ee])){$=1;break}var i,te=J&&Q(window.MutationObserver),oe=te?function(e){var t=!1,o=0,i=document.createElement('span'),n=new MutationObserver(function(){e(),t=!1});return n.observe(i,{attributes:!0}),function(){t||(t=!0,i.setAttribute('x-index',o),++o)}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},$))}},ie=function(){return void 0==i&&(i=-1!==navigator.appVersion.indexOf('MSIE 10')),i},ne=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},re=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),t}}(),pe=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},se=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var i in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},de=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],ae=de.slice(3),fe={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},le=function(){function t(o,i){var n=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};ne(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},this.update=oe(this.update.bind(this)),this.options=se({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o.jquery?o[0]:o,this.popper=i.jquery?i[0]:i,this.options.modifiers={},Object.keys(se({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){n.options.modifiers[e]=se({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return se({name:e},n.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(n.reference,n.popper,n.options,t,n.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return re(t,[{key:'update',value:function(){return k.call(this)}},{key:'destroy',value:function(){return D.call(this)}},{key:'enableEventListeners',value:function(){return A.call(this)}},{key:'disableEventListeners',value:function(){return I.call(this)}}]),t}();return le.Utils=('undefined'==typeof window?global:window).PopperUtils,le.placements=de,le.Defaults={placement:'bottom',eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],i=t.split('-')[1];if(i){var n=e.offsets,r=n.reference,p=n.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',f={start:pe({},d,r[d]),end:pe({},d,r[d]+r[a]-p[a])};e.offsets.popper=se({},p,f[i])}return e}},offset:{order:200,enabled:!0,fn:function(e,t){var o,i=t.offset,n=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=n.split('-')[0];return o=R(+i)?[+i,0]:G(i,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||r(e.instance.popper);e.instance.reference===o&&(o=r(o));var i=w(e.instance.popper,e.instance.reference,t.padding,o);t.boundaries=i;var n=t.priority,p=e.offsets.popper,s={primary:function(e){var o=p[e];return p[e]<i[e]&&!t.escapeWithReference&&(o=_(p[e],i[e])),pe({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=p[o];return p[e]>i[e]&&!t.escapeWithReference&&(n=z(p[o],i[e]-('right'===e?p.width:p.height))),pe({},o,n)}};return n.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';p=se({},p,s[t](e))}),e.offsets.popper=p,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,i=t.reference,n=e.placement.split('-')[0],r=V,p=-1!==['top','bottom'].indexOf(n),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(i[d])&&(e.offsets.popper[d]=r(i[d])-o[a]),o[d]>r(i[s])&&(e.offsets.popper[d]=r(i[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,t){if(!F(e.instance.modifiers,'arrow','keepTogether'))return e;var o=t.element;if('string'==typeof o){if(o=e.instance.popper.querySelector(o),!o)return e;}else if(!e.instance.popper.contains(o))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var i=e.placement.split('-')[0],n=e.offsets,r=n.popper,p=n.reference,s=-1!==['left','right'].indexOf(i),d=s?'height':'width',a=s?'top':'left',f=s?'left':'top',l=s?'bottom':'right',m=O(o)[d];p[l]-m<r[a]&&(e.offsets.popper[a]-=r[a]-(p[l]-m)),p[a]+m>r[l]&&(e.offsets.popper[a]+=p[a]+m-r[l]);var h=p[a]+p[d]/2-m/2,g=h-c(e.offsets.popper)[a];return g=_(z(r[d]-m,g),0),e.arrowElement=o,e.offsets.arrow={},e.offsets.arrow[a]=Math.round(g),e.offsets.arrow[f]='',e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(W(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=w(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement),i=e.placement.split('-')[0],n=L(i),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case fe.FLIP:p=[i,n];break;case fe.CLOCKWISE:p=K(i);break;case fe.COUNTERCLOCKWISE:p=K(i,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(i!==s||p.length===d+1)return e;i=e.placement.split('-')[0],n=L(i);var a=e.offsets.popper,f=e.offsets.reference,l=V,m='left'===i&&l(a.right)>l(f.left)||'right'===i&&l(a.left)<l(f.right)||'top'===i&&l(a.bottom)>l(f.top)||'bottom'===i&&l(a.top)<l(f.bottom),h=l(a.left)<l(o.left),c=l(a.right)>l(o.right),g=l(a.top)<l(o.top),u=l(a.bottom)>l(o.bottom),b='left'===i&&h||'right'===i&&c||'top'===i&&g||'bottom'===i&&u,y=-1!==['top','bottom'].indexOf(i),w=!!t.flipVariations&&(y&&'start'===r&&h||y&&'end'===r&&c||!y&&'start'===r&&g||!y&&'end'===r&&u);(m||b||w)&&(e.flipped=!0,(m||b)&&(i=p[d+1]),w&&(r=j(r)),e.placement=i+(r?'-'+r:''),e.offsets.popper=se({},e.offsets.popper,S(e.instance.popper,e.offsets.reference,e.placement)),e=N(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport'},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],i=e.offsets,n=i.popper,r=i.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return n[p?'left':'top']=r[t]-(s?n[p?'width':'height']:0),e.placement=L(t),e.offsets.popper=c(n),e}},hide:{order:800,enabled:!0,fn:function(e){if(!F(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=T(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,i=t.y,n=e.offsets.popper,p=T(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==p&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===p?t.gpuAcceleration:p,f=r(e.instance.popper),l=g(f),m={position:n.position},h={left:V(n.left),top:V(n.top),bottom:V(n.bottom),right:V(n.right)},c='bottom'===o?'top':'bottom',u='right'===i?'left':'right',b=B('transform');if(d='bottom'==c?-l.height+h.bottom:h.top,s='right'==u?-l.width+h.right:h.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[c]=0,m[u]=0,m.willChange='transform';else{var y='bottom'==c?-1:1,w='right'==u?-1:1;m[c]=d*y,m[u]=s*w,m.willChange=c+', '+u}var v={"x-placement":e.placement};return e.attributes=se({},v,e.attributes),e.styles=se({},m,e.styles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return U(e.instance.popper,e.styles),Y(e.instance.popper,e.attributes),e.offsets.arrow&&U(e.arrowElement,e.offsets.arrow),e},onLoad:function(e,t,o,i,n){var r=x(n,t,e),p=E(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),U(t,{position:'absolute'}),o},gpuAcceleration:void 0}}},le});

!function(t,e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e(require,exports,module):t.Tether=e()}(this,function(t,e,o){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t){var e=getComputedStyle(t),o=e.position;if("fixed"===o)return t;for(var i=t;i=i.parentNode;){var n=void 0;try{n=getComputedStyle(i)}catch(r){}if("undefined"==typeof n||null===n)return i;var s=n,a=s.overflow,f=s.overflowX,h=s.overflowY;if(/(auto|scroll)/.test(a+h+f)&&("absolute"!==o||["relative","absolute","fixed"].indexOf(n.position)>=0))return i}return document.body}function r(t){var e=void 0;t===document?(e=document,t=document.documentElement):e=t.ownerDocument;var o=e.documentElement,i={},n=t.getBoundingClientRect();for(var r in n)i[r]=n[r];var s=x(e);return i.top-=s.top,i.left-=s.left,"undefined"==typeof i.width&&(i.width=document.body.scrollWidth-i.left-i.right),"undefined"==typeof i.height&&(i.height=document.body.scrollHeight-i.top-i.bottom),i.top=i.top-o.clientTop,i.left=i.left-o.clientLeft,i.right=e.body.clientWidth-i.width-i.left,i.bottom=e.body.clientHeight-i.height-i.top,i}function s(t){return t.offsetParent||document.documentElement}function a(){var t=document.createElement("div");t.style.width="100%",t.style.height="200px";var e=document.createElement("div");f(e.style,{position:"absolute",top:0,left:0,pointerEvents:"none",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),e.appendChild(t),document.body.appendChild(e);var o=t.offsetWidth;e.style.overflow="scroll";var i=t.offsetWidth;o===i&&(i=e.clientWidth),document.body.removeChild(e);var n=o-i;return{width:n,height:n}}function f(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=[];return Array.prototype.push.apply(e,arguments),e.slice(1).forEach(function(e){if(e)for(var o in e)({}).hasOwnProperty.call(e,o)&&(t[o]=e[o])}),t}function h(t,e){if("undefined"!=typeof t.classList)e.split(" ").forEach(function(e){e.trim()&&t.classList.remove(e)});else{var o=new RegExp("(^| )"+e.split(" ").join("|")+"( |$)","gi"),i=u(t).replace(o," ");p(t,i)}}function l(t,e){if("undefined"!=typeof t.classList)e.split(" ").forEach(function(e){e.trim()&&t.classList.add(e)});else{h(t,e);var o=u(t)+(" "+e);p(t,o)}}function d(t,e){if("undefined"!=typeof t.classList)return t.classList.contains(e);var o=u(t);return new RegExp("(^| )"+e+"( |$)","gi").test(o)}function u(t){return t.className instanceof SVGAnimatedString?t.className.baseVal:t.className}function p(t,e){t.setAttribute("class",e)}function c(t,e,o){o.forEach(function(o){-1===e.indexOf(o)&&d(t,o)&&h(t,o)}),e.forEach(function(e){d(t,e)||l(t,e)})}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function g(t,e){var o=arguments.length<=2||void 0===arguments[2]?1:arguments[2];return t+o>=e&&e>=t-o}function m(){return"undefined"!=typeof performance&&"undefined"!=typeof performance.now?performance.now():+new Date}function v(){for(var t={top:0,left:0},e=arguments.length,o=Array(e),i=0;e>i;i++)o[i]=arguments[i];return o.forEach(function(e){var o=e.top,i=e.left;"string"==typeof o&&(o=parseFloat(o,10)),"string"==typeof i&&(i=parseFloat(i,10)),t.top+=o,t.left+=i}),t}function y(t,e){return"string"==typeof t.left&&-1!==t.left.indexOf("%")&&(t.left=parseFloat(t.left,10)/100*e.width),"string"==typeof t.top&&-1!==t.top.indexOf("%")&&(t.top=parseFloat(t.top,10)/100*e.height),t}function b(t,e){return"scrollParent"===e?e=t.scrollParent:"window"===e&&(e=[pageXOffset,pageYOffset,innerWidth+pageXOffset,innerHeight+pageYOffset]),e===document&&(e=e.documentElement),"undefined"!=typeof e.nodeType&&!function(){var t=r(e),o=t,i=getComputedStyle(e);e=[o.left,o.top,t.width+o.left,t.height+o.top],U.forEach(function(t,o){t=t[0].toUpperCase()+t.substr(1),"Top"===t||"Left"===t?e[o]+=parseFloat(i["border"+t+"Width"]):e[o]-=parseFloat(i["border"+t+"Width"])})}(),e}var w=function(){function t(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,o,i){return o&&t(e.prototype,o),i&&t(e,i),e}}(),C=void 0;"undefined"==typeof C&&(C={modules:[]});var O=function(){var t=0;return function(){return++t}}(),E={},x=function(t){var e=t._tetherZeroElement;"undefined"==typeof e&&(e=t.createElement("div"),e.setAttribute("data-tether-id",O()),f(e.style,{top:0,left:0,position:"absolute"}),t.body.appendChild(e),t._tetherZeroElement=e);var o=e.getAttribute("data-tether-id");if("undefined"==typeof E[o]){E[o]={};var i=e.getBoundingClientRect();for(var n in i)E[o][n]=i[n];T(function(){delete E[o]})}return E[o]},A=[],T=function(t){A.push(t)},S=function(){for(var t=void 0;t=A.pop();)t()},W=function(){function t(){i(this,t)}return w(t,[{key:"on",value:function(t,e,o){var i=arguments.length<=3||void 0===arguments[3]?!1:arguments[3];"undefined"==typeof this.bindings&&(this.bindings={}),"undefined"==typeof this.bindings[t]&&(this.bindings[t]=[]),this.bindings[t].push({handler:e,ctx:o,once:i})}},{key:"once",value:function(t,e,o){this.on(t,e,o,!0)}},{key:"off",value:function(t,e){if("undefined"==typeof this.bindings||"undefined"==typeof this.bindings[t])if("undefined"==typeof e)delete this.bindings[t];else for(var o=0;o<this.bindings[t].length;)this.bindings[t][o].handler===e?this.bindings[t].splice(o,1):++o}},{key:"trigger",value:function(t){if("undefined"!=typeof this.bindings&&this.bindings[t]){for(var e=0,o=arguments.length,i=Array(o>1?o-1:0),n=1;o>n;n++)i[n-1]=arguments[n];for(;e<this.bindings[t].length;){var r=this.bindings[t][e],s=r.handler,a=r.ctx,f=r.once,h=a;"undefined"==typeof h&&(h=this),s.apply(h,i),f?this.bindings[t].splice(e,1):++e}}}}]),t}();C.Utils={getScrollParent:n,getBounds:r,getOffsetParent:s,extend:f,addClass:l,removeClass:h,hasClass:d,updateClasses:c,defer:T,flush:S,uniqueId:O,Evented:W,getScrollBarSize:a};var M=function(){function t(t,e){var o=[],i=!0,n=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(o.push(s.value),!e||o.length!==e);i=!0);}catch(f){n=!0,r=f}finally{try{!i&&a["return"]&&a["return"]()}finally{if(n)throw r}}return o}return function(e,o){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),w=function(){function t(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,o,i){return o&&t(e.prototype,o),i&&t(e,i),e}}();if("undefined"==typeof C)throw new Error("You must include the utils.js file before tether.js");var P=C.Utils,n=P.getScrollParent,r=P.getBounds,s=P.getOffsetParent,f=P.extend,l=P.addClass,h=P.removeClass,c=P.updateClasses,T=P.defer,S=P.flush,a=P.getScrollBarSize,k=function(){if("undefined"==typeof document)return"";for(var t=document.createElement("div"),e=["transform","webkitTransform","OTransform","MozTransform","msTransform"],o=0;o<e.length;++o){var i=e[o];if(void 0!==t.style[i])return i}}(),B=[],_=function(){B.forEach(function(t){t.position(!1)}),S()};!function(){var t=null,e=null,o=null,i=function n(){return"undefined"!=typeof e&&e>16?(e=Math.min(e-16,250),void(o=setTimeout(n,250))):void("undefined"!=typeof t&&m()-t<10||("undefined"!=typeof o&&(clearTimeout(o),o=null),t=m(),_(),e=m()-t))};"undefined"!=typeof window&&["resize","scroll","touchmove"].forEach(function(t){window.addEventListener(t,i)})}();var z={center:"center",left:"right",right:"left"},F={middle:"middle",top:"bottom",bottom:"top"},L={top:0,left:0,middle:"50%",center:"50%",bottom:"100%",right:"100%"},Y=function(t,e){var o=t.left,i=t.top;return"auto"===o&&(o=z[e.left]),"auto"===i&&(i=F[e.top]),{left:o,top:i}},H=function(t){var e=t.left,o=t.top;return"undefined"!=typeof L[t.left]&&(e=L[t.left]),"undefined"!=typeof L[t.top]&&(o=L[t.top]),{left:e,top:o}},X=function(t){var e=t.split(" "),o=M(e,2),i=o[0],n=o[1];return{top:i,left:n}},j=X,N=function(){function t(e){var o=this;i(this,t),this.position=this.position.bind(this),B.push(this),this.history=[],this.setOptions(e,!1),C.modules.forEach(function(t){"undefined"!=typeof t.initialize&&t.initialize.call(o)}),this.position()}return w(t,[{key:"getClass",value:function(){var t=arguments.length<=0||void 0===arguments[0]?"":arguments[0],e=this.options.classes;return"undefined"!=typeof e&&e[t]?this.options.classes[t]:this.options.classPrefix?this.options.classPrefix+"-"+t:t}},{key:"setOptions",value:function(t){var e=this,o=arguments.length<=1||void 0===arguments[1]?!0:arguments[1],i={offset:"0 0",targetOffset:"0 0",targetAttachment:"auto auto",classPrefix:"tether"};this.options=f(i,t);var r=this.options,s=r.element,a=r.target,h=r.targetModifier;if(this.element=s,this.target=a,this.targetModifier=h,"viewport"===this.target?(this.target=document.body,this.targetModifier="visible"):"scroll-handle"===this.target&&(this.target=document.body,this.targetModifier="scroll-handle"),["element","target"].forEach(function(t){if("undefined"==typeof e[t])throw new Error("Tether Error: Both element and target must be defined");"undefined"!=typeof e[t].jquery?e[t]=e[t][0]:"string"==typeof e[t]&&(e[t]=document.querySelector(e[t]))}),l(this.element,this.getClass("element")),this.options.addTargetClasses!==!1&&l(this.target,this.getClass("target")),!this.options.attachment)throw new Error("Tether Error: You must provide an attachment");this.targetAttachment=j(this.options.targetAttachment),this.attachment=j(this.options.attachment),this.offset=X(this.options.offset),this.targetOffset=X(this.options.targetOffset),"undefined"!=typeof this.scrollParent&&this.disable(),"scroll-handle"===this.targetModifier?this.scrollParent=this.target:this.scrollParent=n(this.target),this.options.enabled!==!1&&this.enable(o)}},{key:"getTargetBounds",value:function(){if("undefined"==typeof this.targetModifier)return r(this.target);if("visible"===this.targetModifier){if(this.target===document.body)return{top:pageYOffset,left:pageXOffset,height:innerHeight,width:innerWidth};var t=r(this.target),e={height:t.height,width:t.width,top:t.top,left:t.left};return e.height=Math.min(e.height,t.height-(pageYOffset-t.top)),e.height=Math.min(e.height,t.height-(t.top+t.height-(pageYOffset+innerHeight))),e.height=Math.min(innerHeight,e.height),e.height-=2,e.width=Math.min(e.width,t.width-(pageXOffset-t.left)),e.width=Math.min(e.width,t.width-(t.left+t.width-(pageXOffset+innerWidth))),e.width=Math.min(innerWidth,e.width),e.width-=2,e.top<pageYOffset&&(e.top=pageYOffset),e.left<pageXOffset&&(e.left=pageXOffset),e}if("scroll-handle"===this.targetModifier){var t=void 0,o=this.target;o===document.body?(o=document.documentElement,t={left:pageXOffset,top:pageYOffset,height:innerHeight,width:innerWidth}):t=r(o);var i=getComputedStyle(o),n=o.scrollWidth>o.clientWidth||[i.overflow,i.overflowX].indexOf("scroll")>=0||this.target!==document.body,s=0;n&&(s=15);var a=t.height-parseFloat(i.borderTopWidth)-parseFloat(i.borderBottomWidth)-s,e={width:15,height:.975*a*(a/o.scrollHeight),left:t.left+t.width-parseFloat(i.borderLeftWidth)-15},f=0;408>a&&this.target===document.body&&(f=-11e-5*Math.pow(a,2)-.00727*a+22.58),this.target!==document.body&&(e.height=Math.max(e.height,24));var h=this.target.scrollTop/(o.scrollHeight-a);return e.top=h*(a-e.height-f)+t.top+parseFloat(i.borderTopWidth),this.target===document.body&&(e.height=Math.max(e.height,24)),e}}},{key:"clearCache",value:function(){this._cache={}}},{key:"cache",value:function(t,e){return"undefined"==typeof this._cache&&(this._cache={}),"undefined"==typeof this._cache[t]&&(this._cache[t]=e.call(this)),this._cache[t]}},{key:"enable",value:function(){var t=arguments.length<=0||void 0===arguments[0]?!0:arguments[0];this.options.addTargetClasses!==!1&&l(this.target,this.getClass("enabled")),l(this.element,this.getClass("enabled")),this.enabled=!0,this.scrollParent!==document&&this.scrollParent.addEventListener("scroll",this.position),t&&this.position()}},{key:"disable",value:function(){h(this.target,this.getClass("enabled")),h(this.element,this.getClass("enabled")),this.enabled=!1,"undefined"!=typeof this.scrollParent&&this.scrollParent.removeEventListener("scroll",this.position)}},{key:"destroy",value:function(){var t=this;this.disable(),B.forEach(function(e,o){return e===t?void B.splice(o,1):void 0})}},{key:"updateAttachClasses",value:function(t,e){var o=this;t=t||this.attachment,e=e||this.targetAttachment;var i=["left","top","bottom","right","middle","center"];"undefined"!=typeof this._addAttachClasses&&this._addAttachClasses.length&&this._addAttachClasses.splice(0,this._addAttachClasses.length),"undefined"==typeof this._addAttachClasses&&(this._addAttachClasses=[]);var n=this._addAttachClasses;t.top&&n.push(this.getClass("element-attached")+"-"+t.top),t.left&&n.push(this.getClass("element-attached")+"-"+t.left),e.top&&n.push(this.getClass("target-attached")+"-"+e.top),e.left&&n.push(this.getClass("target-attached")+"-"+e.left);var r=[];i.forEach(function(t){r.push(o.getClass("element-attached")+"-"+t),r.push(o.getClass("target-attached")+"-"+t)}),T(function(){"undefined"!=typeof o._addAttachClasses&&(c(o.element,o._addAttachClasses,r),o.options.addTargetClasses!==!1&&c(o.target,o._addAttachClasses,r),delete o._addAttachClasses)})}},{key:"position",value:function(){var t=this,e=arguments.length<=0||void 0===arguments[0]?!0:arguments[0];if(this.enabled){this.clearCache();var o=Y(this.targetAttachment,this.attachment);this.updateAttachClasses(this.attachment,o);var i=this.cache("element-bounds",function(){return r(t.element)}),n=i.width,f=i.height;if(0===n&&0===f&&"undefined"!=typeof this.lastSize){var h=this.lastSize;n=h.width,f=h.height}else this.lastSize={width:n,height:f};var l=this.cache("target-bounds",function(){return t.getTargetBounds()}),d=l,u=y(H(this.attachment),{width:n,height:f}),p=y(H(o),d),c=y(this.offset,{width:n,height:f}),g=y(this.targetOffset,d);u=v(u,c),p=v(p,g);for(var m=l.left+p.left-u.left,b=l.top+p.top-u.top,w=0;w<C.modules.length;++w){var O=C.modules[w],E=O.position.call(this,{left:m,top:b,targetAttachment:o,targetPos:l,elementPos:i,offset:u,targetOffset:p,manualOffset:c,manualTargetOffset:g,scrollbarSize:A,attachment:this.attachment});if(E===!1)return!1;"undefined"!=typeof E&&"object"==typeof E&&(b=E.top,m=E.left)}var x={page:{top:b,left:m},viewport:{top:b-pageYOffset,bottom:pageYOffset-b-f+innerHeight,left:m-pageXOffset,right:pageXOffset-m-n+innerWidth}},A=void 0;return document.body.scrollWidth>window.innerWidth&&(A=this.cache("scrollbar-size",a),x.viewport.bottom-=A.height),document.body.scrollHeight>window.innerHeight&&(A=this.cache("scrollbar-size",a),x.viewport.right-=A.width),(-1===["","static"].indexOf(document.body.style.position)||-1===["","static"].indexOf(document.body.parentElement.style.position))&&(x.page.bottom=document.body.scrollHeight-b-f,x.page.right=document.body.scrollWidth-m-n),"undefined"!=typeof this.options.optimizations&&this.options.optimizations.moveElement!==!1&&"undefined"==typeof this.targetModifier&&!function(){var e=t.cache("target-offsetparent",function(){return s(t.target)}),o=t.cache("target-offsetparent-bounds",function(){return r(e)}),i=getComputedStyle(e),n=o,a={};if(["Top","Left","Bottom","Right"].forEach(function(t){a[t.toLowerCase()]=parseFloat(i["border"+t+"Width"])}),o.right=document.body.scrollWidth-o.left-n.width+a.right,o.bottom=document.body.scrollHeight-o.top-n.height+a.bottom,x.page.top>=o.top+a.top&&x.page.bottom>=o.bottom&&x.page.left>=o.left+a.left&&x.page.right>=o.right){var f=e.scrollTop,h=e.scrollLeft;x.offset={top:x.page.top-o.top+f-a.top,left:x.page.left-o.left+h-a.left}}}(),this.move(x),this.history.unshift(x),this.history.length>3&&this.history.pop(),e&&S(),!0}}},{key:"move",value:function(t){var e=this;if("undefined"!=typeof this.element.parentNode){var o={};for(var i in t){o[i]={};for(var n in t[i]){for(var r=!1,a=0;a<this.history.length;++a){var h=this.history[a];if("undefined"!=typeof h[i]&&!g(h[i][n],t[i][n])){r=!0;break}}r||(o[i][n]=!0)}}var l={top:"",left:"",right:"",bottom:""},d=function(t,o){var i="undefined"!=typeof e.options.optimizations,n=i?e.options.optimizations.gpu:null;if(n!==!1){var r=void 0,s=void 0;t.top?(l.top=0,r=o.top):(l.bottom=0,r=-o.bottom),t.left?(l.left=0,s=o.left):(l.right=0,s=-o.right),l[k]="translateX("+Math.round(s)+"px) translateY("+Math.round(r)+"px)","msTransform"!==k&&(l[k]+=" translateZ(0)")}else t.top?l.top=o.top+"px":l.bottom=o.bottom+"px",t.left?l.left=o.left+"px":l.right=o.right+"px"},u=!1;if((o.page.top||o.page.bottom)&&(o.page.left||o.page.right)?(l.position="absolute",d(o.page,t.page)):(o.viewport.top||o.viewport.bottom)&&(o.viewport.left||o.viewport.right)?(l.position="fixed",d(o.viewport,t.viewport)):"undefined"!=typeof o.offset&&o.offset.top&&o.offset.left?!function(){l.position="absolute";var i=e.cache("target-offsetparent",function(){return s(e.target)});s(e.element)!==i&&T(function(){e.element.parentNode.removeChild(e.element),i.appendChild(e.element)}),d(o.offset,t.offset),u=!0}():(l.position="absolute",d({top:!0,left:!0},t.page)),!u){for(var p=!0,c=this.element.parentNode;c&&"BODY"!==c.tagName;){if("static"!==getComputedStyle(c).position){p=!1;break}c=c.parentNode}p||(this.element.parentNode.removeChild(this.element),document.body.appendChild(this.element))}var m={},v=!1;for(var n in l){var y=l[n],b=this.element.style[n];""!==b&&""!==y&&["top","left","bottom","right"].indexOf(n)>=0&&(b=parseFloat(b),y=parseFloat(y)),b!==y&&(v=!0,m[n]=y)}v&&T(function(){f(e.element.style,m)})}}}]),t}();N.modules=[],C.position=_;var R=f(N,C),M=function(){function t(t,e){var o=[],i=!0,n=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(o.push(s.value),!e||o.length!==e);i=!0);}catch(f){n=!0,r=f}finally{try{!i&&a["return"]&&a["return"]()}finally{if(n)throw r}}return o}return function(e,o){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),P=C.Utils,r=P.getBounds,f=P.extend,c=P.updateClasses,T=P.defer,U=["left","top","right","bottom"];C.modules.push({position:function(t){var e=this,o=t.top,i=t.left,n=t.targetAttachment;if(!this.options.constraints)return!0;var s=this.cache("element-bounds",function(){return r(e.element)}),a=s.height,h=s.width;if(0===h&&0===a&&"undefined"!=typeof this.lastSize){var l=this.lastSize;h=l.width,a=l.height}var d=this.cache("target-bounds",function(){return e.getTargetBounds()}),u=d.height,p=d.width,g=[this.getClass("pinned"),this.getClass("out-of-bounds")];this.options.constraints.forEach(function(t){var e=t.outOfBoundsClass,o=t.pinnedClass;e&&g.push(e),o&&g.push(o)}),g.forEach(function(t){["left","top","right","bottom"].forEach(function(e){g.push(t+"-"+e)})});var m=[],v=f({},n),y=f({},this.attachment);return this.options.constraints.forEach(function(t){var r=t.to,s=t.attachment,f=t.pin;"undefined"==typeof s&&(s="");var l=void 0,d=void 0;if(s.indexOf(" ")>=0){var c=s.split(" "),g=M(c,2);d=g[0],l=g[1]}else l=d=s;var w=b(e,r);("target"===d||"both"===d)&&(o<w[1]&&"top"===v.top&&(o+=u,v.top="bottom"),o+a>w[3]&&"bottom"===v.top&&(o-=u,v.top="top")),"together"===d&&(o<w[1]&&"top"===v.top&&("bottom"===y.top?(o+=u,v.top="bottom",o+=a,y.top="top"):"top"===y.top&&(o+=u,v.top="bottom",o-=a,y.top="bottom")),o+a>w[3]&&"bottom"===v.top&&("top"===y.top?(o-=u,v.top="top",o-=a,y.top="bottom"):"bottom"===y.top&&(o-=u,v.top="top",o+=a,y.top="top")),"middle"===v.top&&(o+a>w[3]&&"top"===y.top?(o-=a,y.top="bottom"):o<w[1]&&"bottom"===y.top&&(o+=a,y.top="top"))),("target"===l||"both"===l)&&(i<w[0]&&"left"===v.left&&(i+=p,v.left="right"),i+h>w[2]&&"right"===v.left&&(i-=p,v.left="left")),"together"===l&&(i<w[0]&&"left"===v.left?"right"===y.left?(i+=p,v.left="right",i+=h,y.left="left"):"left"===y.left&&(i+=p,v.left="right",i-=h,y.left="right"):i+h>w[2]&&"right"===v.left?"left"===y.left?(i-=p,v.left="left",i-=h,y.left="right"):"right"===y.left&&(i-=p,v.left="left",i+=h,y.left="left"):"center"===v.left&&(i+h>w[2]&&"left"===y.left?(i-=h,y.left="right"):i<w[0]&&"right"===y.left&&(i+=h,y.left="left"))),("element"===d||"both"===d)&&(o<w[1]&&"bottom"===y.top&&(o+=a,y.top="top"),o+a>w[3]&&"top"===y.top&&(o-=a,y.top="bottom")),("element"===l||"both"===l)&&(i<w[0]&&"right"===y.left&&(i+=h,y.left="left"),i+h>w[2]&&"left"===y.left&&(i-=h,y.left="right")),"string"==typeof f?f=f.split(",").map(function(t){return t.trim()}):f===!0&&(f=["top","left","right","bottom"]),f=f||[];var C=[],O=[];o<w[1]&&(f.indexOf("top")>=0?(o=w[1],C.push("top")):O.push("top")),o+a>w[3]&&(f.indexOf("bottom")>=0?(o=w[3]-a,C.push("bottom")):O.push("bottom")),i<w[0]&&(f.indexOf("left")>=0?(i=w[0],C.push("left")):O.push("left")),i+h>w[2]&&(f.indexOf("right")>=0?(i=w[2]-h,C.push("right")):O.push("right")),C.length&&!function(){var t=void 0;t="undefined"!=typeof e.options.pinnedClass?e.options.pinnedClass:e.getClass("pinned"),m.push(t),C.forEach(function(e){m.push(t+"-"+e)})}(),O.length&&!function(){var t=void 0;t="undefined"!=typeof e.options.outOfBoundsClass?e.options.outOfBoundsClass:e.getClass("out-of-bounds"),m.push(t),O.forEach(function(e){m.push(t+"-"+e)})}(),(C.indexOf("left")>=0||C.indexOf("right")>=0)&&(y.left=v.left=!1),(C.indexOf("top")>=0||C.indexOf("bottom")>=0)&&(y.top=v.top=!1),(v.top!==n.top||v.left!==n.left||y.top!==e.attachment.top||y.left!==e.attachment.left)&&e.updateAttachClasses(y,v)}),T(function(){e.options.addTargetClasses!==!1&&c(e.target,m,g),c(e.element,m,g)}),{top:o,left:i}}});var P=C.Utils,r=P.getBounds,c=P.updateClasses,T=P.defer;C.modules.push({position:function(t){var e=this,o=t.top,i=t.left,n=this.cache("element-bounds",function(){return r(e.element)}),s=n.height,a=n.width,f=this.getTargetBounds(),h=o+s,l=i+a,d=[];o<=f.bottom&&h>=f.top&&["left","right"].forEach(function(t){var e=f[t];(e===i||e===l)&&d.push(t)}),i<=f.right&&l>=f.left&&["top","bottom"].forEach(function(t){var e=f[t];(e===o||e===h)&&d.push(t)});var u=[],p=[],g=["left","top","right","bottom"];return u.push(this.getClass("abutted")),g.forEach(function(t){u.push(e.getClass("abutted")+"-"+t)}),d.length&&p.push(this.getClass("abutted")),d.forEach(function(t){p.push(e.getClass("abutted")+"-"+t)}),T(function(){e.options.addTargetClasses!==!1&&c(e.target,p,u),c(e.element,p,u)}),!0}});var M=function(){function t(t,e){var o=[],i=!0,n=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(o.push(s.value),!e||o.length!==e);i=!0);}catch(f){n=!0,r=f}finally{try{!i&&a["return"]&&a["return"]()}finally{if(n)throw r}}return o}return function(e,o){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();return C.modules.push({position:function(t){var e=t.top,o=t.left;if(this.options.shift){var i=this.options.shift;"function"==typeof this.options.shift&&(i=this.options.shift.call(this,{top:e,left:o}));var n=void 0,r=void 0;if("string"==typeof i){i=i.split(" "),i[1]=i[1]||i[0];var s=i,a=M(s,2);n=a[0],r=a[1],n=parseFloat(n,10),r=parseFloat(r,10)}else n=i.top,r=i.left;return e+=n,o+=r,{top:e,left:o}}}}),R});
/*!
 * Bootstrap v4.0.0-beta (https://getbootstrap.com)
 * Copyright 2011-2017 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");!function(t){var e=jQuery.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||e[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(),function(){function t(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function e(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=function(t){function e(t){return{}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function n(t){return(t[0]||t).nodeType}function i(){return{bindType:s.end,delegateType:s.end,handle:function(e){if(t(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}}}function o(){if(window.QUnit)return!1;var t=document.createElement("bootstrap");for(var e in a)if(void 0!==t.style[e])return{end:a[e]};return!1}function r(e){var n=this,i=!1;return t(this).one(l.TRANSITION_END,function(){i=!0}),setTimeout(function(){i||l.triggerTransitionEnd(n)},e),this}var s=!1,a={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},l={TRANSITION_END:"bsTransitionEnd",getUID:function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},getSelectorFromElement:function(e){var n=e.getAttribute("data-target");n&&"#"!==n||(n=e.getAttribute("href")||"");try{return t(n).length>0?n:null}catch(t){return null}},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(e){t(e).trigger(s.end)},supportsTransitionEnd:function(){return Boolean(s)},typeCheckConfig:function(t,i,o){for(var r in o)if(o.hasOwnProperty(r)){var s=o[r],a=i[r],l=a&&n(a)?"element":e(a);if(!new RegExp(s).test(l))throw new Error(t.toUpperCase()+': Option "'+r+'" provided type "'+l+'" but expected type "'+s+'".')}}};return s=o(),t.fn.emulateTransitionEnd=r,l.supportsTransitionEnd()&&(t.event.special[l.TRANSITION_END]=i()),l}(jQuery),s=(function(t){var e="alert",i=t.fn[e],s={DISMISS:'[data-dismiss="alert"]'},a={CLOSE:"close.bs.alert",CLOSED:"closed.bs.alert",CLICK_DATA_API:"click.bs.alert.data-api"},l={ALERT:"alert",FADE:"fade",SHOW:"show"},h=function(){function e(t){n(this,e),this._element=t}return e.prototype.close=function(t){t=t||this._element;var e=this._getRootElement(t);this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},e.prototype.dispose=function(){t.removeData(this._element,"bs.alert"),this._element=null},e.prototype._getRootElement=function(e){var n=r.getSelectorFromElement(e),i=!1;return n&&(i=t(n)[0]),i||(i=t(e).closest("."+l.ALERT)[0]),i},e.prototype._triggerCloseEvent=function(e){var n=t.Event(a.CLOSE);return t(e).trigger(n),n},e.prototype._removeElement=function(e){var n=this;t(e).removeClass(l.SHOW),r.supportsTransitionEnd()&&t(e).hasClass(l.FADE)?t(e).one(r.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(150):this._destroyElement(e)},e.prototype._destroyElement=function(e){t(e).detach().trigger(a.CLOSED).remove()},e._jQueryInterface=function(n){return this.each(function(){var i=t(this),o=i.data("bs.alert");o||(o=new e(this),i.data("bs.alert",o)),"close"===n&&o[n](this)})},e._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},o(e,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}}]),e}();t(document).on(a.CLICK_DATA_API,s.DISMISS,h._handleDismiss(new h)),t.fn[e]=h._jQueryInterface,t.fn[e].Constructor=h,t.fn[e].noConflict=function(){return t.fn[e]=i,h._jQueryInterface}}(jQuery),function(t){var e="button",i=t.fn[e],r={ACTIVE:"active",BUTTON:"btn",FOCUS:"focus"},s={DATA_TOGGLE_CARROT:'[data-toggle^="button"]',DATA_TOGGLE:'[data-toggle="buttons"]',INPUT:"input",ACTIVE:".active",BUTTON:".btn"},a={CLICK_DATA_API:"click.bs.button.data-api",FOCUS_BLUR_DATA_API:"focus.bs.button.data-api blur.bs.button.data-api"},l=function(){function e(t){n(this,e),this._element=t}return e.prototype.toggle=function(){var e=!0,n=!0,i=t(this._element).closest(s.DATA_TOGGLE)[0];if(i){var o=t(this._element).find(s.INPUT)[0];if(o){if("radio"===o.type)if(o.checked&&t(this._element).hasClass(r.ACTIVE))e=!1;else{var a=t(i).find(s.ACTIVE)[0];a&&t(a).removeClass(r.ACTIVE)}if(e){if(o.hasAttribute("disabled")||i.hasAttribute("disabled")||o.classList.contains("disabled")||i.classList.contains("disabled"))return;o.checked=!t(this._element).hasClass(r.ACTIVE),t(o).trigger("change")}o.focus(),n=!1}}n&&this._element.setAttribute("aria-pressed",!t(this._element).hasClass(r.ACTIVE)),e&&t(this._element).toggleClass(r.ACTIVE)},e.prototype.dispose=function(){t.removeData(this._element,"bs.button"),this._element=null},e._jQueryInterface=function(n){return this.each(function(){var i=t(this).data("bs.button");i||(i=new e(this),t(this).data("bs.button",i)),"toggle"===n&&i[n]()})},o(e,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}}]),e}();t(document).on(a.CLICK_DATA_API,s.DATA_TOGGLE_CARROT,function(e){e.preventDefault();var n=e.target;t(n).hasClass(r.BUTTON)||(n=t(n).closest(s.BUTTON)),l._jQueryInterface.call(t(n),"toggle")}).on(a.FOCUS_BLUR_DATA_API,s.DATA_TOGGLE_CARROT,function(e){var n=t(e.target).closest(s.BUTTON)[0];t(n).toggleClass(r.FOCUS,/^focus(in)?$/.test(e.type))}),t.fn[e]=l._jQueryInterface,t.fn[e].Constructor=l,t.fn[e].noConflict=function(){return t.fn[e]=i,l._jQueryInterface}}(jQuery),function(t){var e="carousel",s="bs.carousel",a="."+s,l=t.fn[e],h={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},c={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},u={NEXT:"next",PREV:"prev",LEFT:"left",RIGHT:"right"},d={SLIDE:"slide"+a,SLID:"slid"+a,KEYDOWN:"keydown"+a,MOUSEENTER:"mouseenter"+a,MOUSELEAVE:"mouseleave"+a,TOUCHEND:"touchend"+a,LOAD_DATA_API:"load.bs.carousel.data-api",CLICK_DATA_API:"click.bs.carousel.data-api"},f={CAROUSEL:"carousel",ACTIVE:"active",SLIDE:"slide",RIGHT:"carousel-item-right",LEFT:"carousel-item-left",NEXT:"carousel-item-next",PREV:"carousel-item-prev",ITEM:"carousel-item"},p={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".carousel-item-next, .carousel-item-prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},_=function(){function l(e,i){n(this,l),this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(i),this._element=t(e)[0],this._indicatorsElement=t(this._element).find(p.INDICATORS)[0],this._addEventListeners()}return l.prototype.next=function(){this._isSliding||this._slide(u.NEXT)},l.prototype.nextWhenVisible=function(){document.hidden||this.next()},l.prototype.prev=function(){this._isSliding||this._slide(u.PREV)},l.prototype.pause=function(e){e||(this._isPaused=!0),t(this._element).find(p.NEXT_PREV)[0]&&r.supportsTransitionEnd()&&(r.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},l.prototype.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},l.prototype.to=function(e){var n=this;this._activeElement=t(this._element).find(p.ACTIVE_ITEM)[0];var i=this._getItemIndex(this._activeElement);if(!(e>this._items.length-1||e<0))if(this._isSliding)t(this._element).one(d.SLID,function(){return n.to(e)});else{if(i===e)return this.pause(),void this.cycle();var o=e>i?u.NEXT:u.PREV;this._slide(o,this._items[e])}},l.prototype.dispose=function(){t(this._element).off(a),t.removeData(this._element,s),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},l.prototype._getConfig=function(n){return n=t.extend({},h,n),r.typeCheckConfig(e,n,c),n},l.prototype._addEventListeners=function(){var e=this;this._config.keyboard&&t(this._element).on(d.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&(t(this._element).on(d.MOUSEENTER,function(t){return e.pause(t)}).on(d.MOUSELEAVE,function(t){return e.cycle(t)}),"ontouchstart"in document.documentElement&&t(this._element).on(d.TOUCHEND,function(){e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout(function(t){return e.cycle(t)},500+e._config.interval)}))},l.prototype._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next();break;default:return}},l.prototype._getItemIndex=function(e){return this._items=t.makeArray(t(e).parent().find(p.ITEM)),this._items.indexOf(e)},l.prototype._getItemByDirection=function(t,e){var n=t===u.NEXT,i=t===u.PREV,o=this._getItemIndex(e),r=this._items.length-1;if((i&&0===o||n&&o===r)&&!this._config.wrap)return e;var s=(o+(t===u.PREV?-1:1))%this._items.length;return-1===s?this._items[this._items.length-1]:this._items[s]},l.prototype._triggerSlideEvent=function(e,n){var i=this._getItemIndex(e),o=this._getItemIndex(t(this._element).find(p.ACTIVE_ITEM)[0]),r=t.Event(d.SLIDE,{relatedTarget:e,direction:n,from:o,to:i});return t(this._element).trigger(r),r},l.prototype._setActiveIndicatorElement=function(e){if(this._indicatorsElement){t(this._indicatorsElement).find(p.ACTIVE).removeClass(f.ACTIVE);var n=this._indicatorsElement.children[this._getItemIndex(e)];n&&t(n).addClass(f.ACTIVE)}},l.prototype._slide=function(e,n){var i=this,o=t(this._element).find(p.ACTIVE_ITEM)[0],s=this._getItemIndex(o),a=n||o&&this._getItemByDirection(e,o),l=this._getItemIndex(a),h=Boolean(this._interval),c=void 0,_=void 0,g=void 0;if(e===u.NEXT?(c=f.LEFT,_=f.NEXT,g=u.LEFT):(c=f.RIGHT,_=f.PREV,g=u.RIGHT),a&&t(a).hasClass(f.ACTIVE))this._isSliding=!1;else if(!this._triggerSlideEvent(a,g).isDefaultPrevented()&&o&&a){this._isSliding=!0,h&&this.pause(),this._setActiveIndicatorElement(a);var m=t.Event(d.SLID,{relatedTarget:a,direction:g,from:s,to:l});r.supportsTransitionEnd()&&t(this._element).hasClass(f.SLIDE)?(t(a).addClass(_),r.reflow(a),t(o).addClass(c),t(a).addClass(c),t(o).one(r.TRANSITION_END,function(){t(a).removeClass(c+" "+_).addClass(f.ACTIVE),t(o).removeClass(f.ACTIVE+" "+_+" "+c),i._isSliding=!1,setTimeout(function(){return t(i._element).trigger(m)},0)}).emulateTransitionEnd(600)):(t(o).removeClass(f.ACTIVE),t(a).addClass(f.ACTIVE),this._isSliding=!1,t(this._element).trigger(m)),h&&this.cycle()}},l._jQueryInterface=function(e){return this.each(function(){var n=t(this).data(s),o=t.extend({},h,t(this).data());"object"===(void 0===e?"undefined":i(e))&&t.extend(o,e);var r="string"==typeof e?e:o.slide;if(n||(n=new l(this,o),t(this).data(s,n)),"number"==typeof e)n.to(e);else if("string"==typeof r){if(void 0===n[r])throw new Error('No method named "'+r+'"');n[r]()}else o.interval&&(n.pause(),n.cycle())})},l._dataApiClickHandler=function(e){var n=r.getSelectorFromElement(this);if(n){var i=t(n)[0];if(i&&t(i).hasClass(f.CAROUSEL)){var o=t.extend({},t(i).data(),t(this).data()),a=this.getAttribute("data-slide-to");a&&(o.interval=!1),l._jQueryInterface.call(t(i),o),a&&t(i).data(s).to(a),e.preventDefault()}}},o(l,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}},{key:"Default",get:function(){return h}}]),l}();t(document).on(d.CLICK_DATA_API,p.DATA_SLIDE,_._dataApiClickHandler),t(window).on(d.LOAD_DATA_API,function(){t(p.DATA_RIDE).each(function(){var e=t(this);_._jQueryInterface.call(e,e.data())})}),t.fn[e]=_._jQueryInterface,t.fn[e].Constructor=_,t.fn[e].noConflict=function(){return t.fn[e]=l,_._jQueryInterface}}(jQuery),function(t){var e="collapse",s="bs.collapse",a=t.fn[e],l={toggle:!0,parent:""},h={toggle:"boolean",parent:"string"},c={SHOW:"show.bs.collapse",SHOWN:"shown.bs.collapse",HIDE:"hide.bs.collapse",HIDDEN:"hidden.bs.collapse",CLICK_DATA_API:"click.bs.collapse.data-api"},u={SHOW:"show",COLLAPSE:"collapse",COLLAPSING:"collapsing",COLLAPSED:"collapsed"},d={WIDTH:"width",HEIGHT:"height"},f={ACTIVES:".show, .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},p=function(){function a(e,i){n(this,a),this._isTransitioning=!1,this._element=e,this._config=this._getConfig(i),this._triggerArray=t.makeArray(t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var o=t(f.DATA_TOGGLE),s=0;s<o.length;s++){var l=o[s],h=r.getSelectorFromElement(l);null!==h&&t(h).filter(e).length>0&&this._triggerArray.push(l)}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}return a.prototype.toggle=function(){t(this._element).hasClass(u.SHOW)?this.hide():this.show()},a.prototype.show=function(){var e=this;if(!this._isTransitioning&&!t(this._element).hasClass(u.SHOW)){var n=void 0,i=void 0;if(this._parent&&((n=t.makeArray(t(this._parent).children().children(f.ACTIVES))).length||(n=null)),!(n&&(i=t(n).data(s))&&i._isTransitioning)){var o=t.Event(c.SHOW);if(t(this._element).trigger(o),!o.isDefaultPrevented()){n&&(a._jQueryInterface.call(t(n),"hide"),i||t(n).data(s,null));var l=this._getDimension();t(this._element).removeClass(u.COLLAPSE).addClass(u.COLLAPSING),this._element.style[l]=0,this._triggerArray.length&&t(this._triggerArray).removeClass(u.COLLAPSED).attr("aria-expanded",!0),this.setTransitioning(!0);var h=function(){t(e._element).removeClass(u.COLLAPSING).addClass(u.COLLAPSE).addClass(u.SHOW),e._element.style[l]="",e.setTransitioning(!1),t(e._element).trigger(c.SHOWN)};if(r.supportsTransitionEnd()){var d="scroll"+(l[0].toUpperCase()+l.slice(1));t(this._element).one(r.TRANSITION_END,h).emulateTransitionEnd(600),this._element.style[l]=this._element[d]+"px"}else h()}}}},a.prototype.hide=function(){var e=this;if(!this._isTransitioning&&t(this._element).hasClass(u.SHOW)){var n=t.Event(c.HIDE);if(t(this._element).trigger(n),!n.isDefaultPrevented()){var i=this._getDimension();if(this._element.style[i]=this._element.getBoundingClientRect()[i]+"px",r.reflow(this._element),t(this._element).addClass(u.COLLAPSING).removeClass(u.COLLAPSE).removeClass(u.SHOW),this._triggerArray.length)for(var o=0;o<this._triggerArray.length;o++){var s=this._triggerArray[o],a=r.getSelectorFromElement(s);null!==a&&(t(a).hasClass(u.SHOW)||t(s).addClass(u.COLLAPSED).attr("aria-expanded",!1))}this.setTransitioning(!0);var l=function(){e.setTransitioning(!1),t(e._element).removeClass(u.COLLAPSING).addClass(u.COLLAPSE).trigger(c.HIDDEN)};this._element.style[i]="",r.supportsTransitionEnd()?t(this._element).one(r.TRANSITION_END,l).emulateTransitionEnd(600):l()}}},a.prototype.setTransitioning=function(t){this._isTransitioning=t},a.prototype.dispose=function(){t.removeData(this._element,s),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},a.prototype._getConfig=function(n){return n=t.extend({},l,n),n.toggle=Boolean(n.toggle),r.typeCheckConfig(e,n,h),n},a.prototype._getDimension=function(){return t(this._element).hasClass(d.WIDTH)?d.WIDTH:d.HEIGHT},a.prototype._getParent=function(){var e=this,n=t(this._config.parent)[0],i='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return t(n).find(i).each(function(t,n){e._addAriaAndCollapsedClass(a._getTargetFromElement(n),[n])}),n},a.prototype._addAriaAndCollapsedClass=function(e,n){if(e){var i=t(e).hasClass(u.SHOW);n.length&&t(n).toggleClass(u.COLLAPSED,!i).attr("aria-expanded",i)}},a._getTargetFromElement=function(e){var n=r.getSelectorFromElement(e);return n?t(n)[0]:null},a._jQueryInterface=function(e){return this.each(function(){var n=t(this),o=n.data(s),r=t.extend({},l,n.data(),"object"===(void 0===e?"undefined":i(e))&&e);if(!o&&r.toggle&&/show|hide/.test(e)&&(r.toggle=!1),o||(o=new a(this,r),n.data(s,o)),"string"==typeof e){if(void 0===o[e])throw new Error('No method named "'+e+'"');o[e]()}})},o(a,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}},{key:"Default",get:function(){return l}}]),a}();t(document).on(c.CLICK_DATA_API,f.DATA_TOGGLE,function(e){/input|textarea/i.test(e.target.tagName)||e.preventDefault();var n=t(this),i=r.getSelectorFromElement(this);t(i).each(function(){var e=t(this),i=e.data(s)?"toggle":n.data();p._jQueryInterface.call(e,i)})}),t.fn[e]=p._jQueryInterface,t.fn[e].Constructor=p,t.fn[e].noConflict=function(){return t.fn[e]=a,p._jQueryInterface}}(jQuery),function(t){if("undefined"==typeof Popper)throw new Error("Bootstrap dropdown require Popper.js (https://popper.js.org)");var e="dropdown",s="bs.dropdown",a="."+s,l=t.fn[e],h=new RegExp("38|40|27"),c={HIDE:"hide"+a,HIDDEN:"hidden"+a,SHOW:"show"+a,SHOWN:"shown"+a,CLICK:"click"+a,CLICK_DATA_API:"click.bs.dropdown.data-api",KEYDOWN_DATA_API:"keydown.bs.dropdown.data-api",KEYUP_DATA_API:"keyup.bs.dropdown.data-api"},u={DISABLED:"disabled",SHOW:"show",DROPUP:"dropup",MENURIGHT:"dropdown-menu-right",MENULEFT:"dropdown-menu-left"},d={DATA_TOGGLE:'[data-toggle="dropdown"]',FORM_CHILD:".dropdown form",MENU:".dropdown-menu",NAVBAR_NAV:".navbar-nav",VISIBLE_ITEMS:".dropdown-menu .dropdown-item:not(.disabled)"},f={TOP:"top-start",TOPEND:"top-end",BOTTOM:"bottom-start",BOTTOMEND:"bottom-end"},p={placement:f.BOTTOM,offset:0,flip:!0},_={placement:"string",offset:"(number|string)",flip:"boolean"},g=function(){function l(t,e){n(this,l),this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}return l.prototype.toggle=function(){if(!this._element.disabled&&!t(this._element).hasClass(u.DISABLED)){var e=l._getParentFromElement(this._element),n=t(this._menu).hasClass(u.SHOW);if(l._clearMenus(),!n){var i={relatedTarget:this._element},o=t.Event(c.SHOW,i);if(t(e).trigger(o),!o.isDefaultPrevented()){var r=this._element;t(e).hasClass(u.DROPUP)&&(t(this._menu).hasClass(u.MENULEFT)||t(this._menu).hasClass(u.MENURIGHT))&&(r=e),this._popper=new Popper(r,this._menu,this._getPopperConfig()),"ontouchstart"in document.documentElement&&!t(e).closest(d.NAVBAR_NAV).length&&t("body").children().on("mouseover",null,t.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),t(this._menu).toggleClass(u.SHOW),t(e).toggleClass(u.SHOW).trigger(t.Event(c.SHOWN,i))}}}},l.prototype.dispose=function(){t.removeData(this._element,s),t(this._element).off(a),this._element=null,this._menu=null,null!==this._popper&&this._popper.destroy(),this._popper=null},l.prototype.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},l.prototype._addEventListeners=function(){var e=this;t(this._element).on(c.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},l.prototype._getConfig=function(n){var i=t(this._element).data();return void 0!==i.placement&&(i.placement=f[i.placement.toUpperCase()]),n=t.extend({},this.constructor.Default,t(this._element).data(),n),r.typeCheckConfig(e,n,this.constructor.DefaultType),n},l.prototype._getMenuElement=function(){if(!this._menu){var e=l._getParentFromElement(this._element);this._menu=t(e).find(d.MENU)[0]}return this._menu},l.prototype._getPlacement=function(){var e=t(this._element).parent(),n=this._config.placement;return e.hasClass(u.DROPUP)||this._config.placement===f.TOP?(n=f.TOP,t(this._menu).hasClass(u.MENURIGHT)&&(n=f.TOPEND)):t(this._menu).hasClass(u.MENURIGHT)&&(n=f.BOTTOMEND),n},l.prototype._detectNavbar=function(){return t(this._element).closest(".navbar").length>0},l.prototype._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:{offset:this._config.offset},flip:{enabled:this._config.flip}}};return this._inNavbar&&(t.modifiers.applyStyle={enabled:!this._inNavbar}),t},l._jQueryInterface=function(e){return this.each(function(){var n=t(this).data(s),o="object"===(void 0===e?"undefined":i(e))?e:null;if(n||(n=new l(this,o),t(this).data(s,n)),"string"==typeof e){if(void 0===n[e])throw new Error('No method named "'+e+'"');n[e]()}})},l._clearMenus=function(e){if(!e||3!==e.which&&("keyup"!==e.type||9===e.which))for(var n=t.makeArray(t(d.DATA_TOGGLE)),i=0;i<n.length;i++){var o=l._getParentFromElement(n[i]),r=t(n[i]).data(s),a={relatedTarget:n[i]};if(r){var h=r._menu;if(t(o).hasClass(u.SHOW)&&!(e&&("click"===e.type&&/input|textarea/i.test(e.target.tagName)||"keyup"===e.type&&9===e.which)&&t.contains(o,e.target))){var f=t.Event(c.HIDE,a);t(o).trigger(f),f.isDefaultPrevented()||("ontouchstart"in document.documentElement&&t("body").children().off("mouseover",null,t.noop),n[i].setAttribute("aria-expanded","false"),t(h).removeClass(u.SHOW),t(o).removeClass(u.SHOW).trigger(t.Event(c.HIDDEN,a)))}}}},l._getParentFromElement=function(e){var n=void 0,i=r.getSelectorFromElement(e);return i&&(n=t(i)[0]),n||e.parentNode},l._dataApiKeydownHandler=function(e){if(!(!h.test(e.which)||/button/i.test(e.target.tagName)&&32===e.which||/input|textarea/i.test(e.target.tagName)||(e.preventDefault(),e.stopPropagation(),this.disabled||t(this).hasClass(u.DISABLED)))){var n=l._getParentFromElement(this),i=t(n).hasClass(u.SHOW);if((i||27===e.which&&32===e.which)&&(!i||27!==e.which&&32!==e.which)){var o=t(n).find(d.VISIBLE_ITEMS).get();if(o.length){var r=o.indexOf(e.target);38===e.which&&r>0&&r--,40===e.which&&r<o.length-1&&r++,r<0&&(r=0),o[r].focus()}}else{if(27===e.which){var s=t(n).find(d.DATA_TOGGLE)[0];t(s).trigger("focus")}t(this).trigger("click")}}},o(l,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}},{key:"Default",get:function(){return p}},{key:"DefaultType",get:function(){return _}}]),l}();t(document).on(c.KEYDOWN_DATA_API,d.DATA_TOGGLE,g._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API,d.MENU,g._dataApiKeydownHandler).on(c.CLICK_DATA_API+" "+c.KEYUP_DATA_API,g._clearMenus).on(c.CLICK_DATA_API,d.DATA_TOGGLE,function(e){e.preventDefault(),e.stopPropagation(),g._jQueryInterface.call(t(this),"toggle")}).on(c.CLICK_DATA_API,d.FORM_CHILD,function(t){t.stopPropagation()}),t.fn[e]=g._jQueryInterface,t.fn[e].Constructor=g,t.fn[e].noConflict=function(){return t.fn[e]=l,g._jQueryInterface}}(jQuery),function(t){var e="modal",s=".bs.modal",a=t.fn[e],l={backdrop:!0,keyboard:!0,focus:!0,show:!0},h={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},c={HIDE:"hide.bs.modal",HIDDEN:"hidden.bs.modal",SHOW:"show.bs.modal",SHOWN:"shown.bs.modal",FOCUSIN:"focusin.bs.modal",RESIZE:"resize.bs.modal",CLICK_DISMISS:"click.dismiss.bs.modal",KEYDOWN_DISMISS:"keydown.dismiss.bs.modal",MOUSEUP_DISMISS:"mouseup.dismiss.bs.modal",MOUSEDOWN_DISMISS:"mousedown.dismiss.bs.modal",CLICK_DATA_API:"click.bs.modal.data-api"},u={SCROLLBAR_MEASURER:"modal-scrollbar-measure",BACKDROP:"modal-backdrop",OPEN:"modal-open",FADE:"fade",SHOW:"show"},d={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",NAVBAR_TOGGLER:".navbar-toggler"},f=function(){function a(e,i){n(this,a),this._config=this._getConfig(i),this._element=e,this._dialog=t(e).find(d.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._originalBodyPadding=0,this._scrollbarWidth=0}return a.prototype.toggle=function(t){return this._isShown?this.hide():this.show(t)},a.prototype.show=function(e){var n=this;if(!this._isTransitioning){r.supportsTransitionEnd()&&t(this._element).hasClass(u.FADE)&&(this._isTransitioning=!0);var i=t.Event(c.SHOW,{relatedTarget:e});t(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),t(document.body).addClass(u.OPEN),this._setEscapeEvent(),this._setResizeEvent(),t(this._element).on(c.CLICK_DISMISS,d.DATA_DISMISS,function(t){return n.hide(t)}),t(this._dialog).on(c.MOUSEDOWN_DISMISS,function(){t(n._element).one(c.MOUSEUP_DISMISS,function(e){t(e.target).is(n._element)&&(n._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return n._showElement(e)}))}},a.prototype.hide=function(e){var n=this;if(e&&e.preventDefault(),!this._isTransitioning&&this._isShown){var i=r.supportsTransitionEnd()&&t(this._element).hasClass(u.FADE);i&&(this._isTransitioning=!0);var o=t.Event(c.HIDE);t(this._element).trigger(o),this._isShown&&!o.isDefaultPrevented()&&(this._isShown=!1,this._setEscapeEvent(),this._setResizeEvent(),t(document).off(c.FOCUSIN),t(this._element).removeClass(u.SHOW),t(this._element).off(c.CLICK_DISMISS),t(this._dialog).off(c.MOUSEDOWN_DISMISS),i?t(this._element).one(r.TRANSITION_END,function(t){return n._hideModal(t)}).emulateTransitionEnd(300):this._hideModal())}},a.prototype.dispose=function(){t.removeData(this._element,"bs.modal"),t(window,document,this._element,this._backdrop).off(s),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},a.prototype.handleUpdate=function(){this._adjustDialog()},a.prototype._getConfig=function(n){return n=t.extend({},l,n),r.typeCheckConfig(e,n,h),n},a.prototype._showElement=function(e){var n=this,i=r.supportsTransitionEnd()&&t(this._element).hasClass(u.FADE);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,i&&r.reflow(this._element),t(this._element).addClass(u.SHOW),this._config.focus&&this._enforceFocus();var o=t.Event(c.SHOWN,{relatedTarget:e}),s=function(){n._config.focus&&n._element.focus(),n._isTransitioning=!1,t(n._element).trigger(o)};i?t(this._dialog).one(r.TRANSITION_END,s).emulateTransitionEnd(300):s()},a.prototype._enforceFocus=function(){var e=this;t(document).off(c.FOCUSIN).on(c.FOCUSIN,function(n){document===n.target||e._element===n.target||t(e._element).has(n.target).length||e._element.focus()})},a.prototype._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?t(this._element).on(c.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||t(this._element).off(c.KEYDOWN_DISMISS)},a.prototype._setResizeEvent=function(){var e=this;this._isShown?t(window).on(c.RESIZE,function(t){return e.handleUpdate(t)}):t(window).off(c.RESIZE)},a.prototype._hideModal=function(){var e=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){t(document.body).removeClass(u.OPEN),e._resetAdjustments(),e._resetScrollbar(),t(e._element).trigger(c.HIDDEN)})},a.prototype._removeBackdrop=function(){this._backdrop&&(t(this._backdrop).remove(),this._backdrop=null)},a.prototype._showBackdrop=function(e){var n=this,i=t(this._element).hasClass(u.FADE)?u.FADE:"";if(this._isShown&&this._config.backdrop){var o=r.supportsTransitionEnd()&&i;if(this._backdrop=document.createElement("div"),this._backdrop.className=u.BACKDROP,i&&t(this._backdrop).addClass(i),t(this._backdrop).appendTo(document.body),t(this._element).on(c.CLICK_DISMISS,function(t){n._ignoreBackdropClick?n._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===n._config.backdrop?n._element.focus():n.hide())}),o&&r.reflow(this._backdrop),t(this._backdrop).addClass(u.SHOW),!e)return;if(!o)return void e();t(this._backdrop).one(r.TRANSITION_END,e).emulateTransitionEnd(150)}else if(!this._isShown&&this._backdrop){t(this._backdrop).removeClass(u.SHOW);var s=function(){n._removeBackdrop(),e&&e()};r.supportsTransitionEnd()&&t(this._element).hasClass(u.FADE)?t(this._backdrop).one(r.TRANSITION_END,s).emulateTransitionEnd(150):s()}else e&&e()},a.prototype._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},a.prototype._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},a.prototype._checkScrollbar=function(){this._isBodyOverflowing=document.body.clientWidth<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},a.prototype._setScrollbar=function(){var e=this;if(this._isBodyOverflowing){t(d.FIXED_CONTENT).each(function(n,i){var o=t(i)[0].style.paddingRight,r=t(i).css("padding-right");t(i).data("padding-right",o).css("padding-right",parseFloat(r)+e._scrollbarWidth+"px")}),t(d.NAVBAR_TOGGLER).each(function(n,i){var o=t(i)[0].style.marginRight,r=t(i).css("margin-right");t(i).data("margin-right",o).css("margin-right",parseFloat(r)+e._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=t("body").css("padding-right");t("body").data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}},a.prototype._resetScrollbar=function(){t(d.FIXED_CONTENT).each(function(e,n){var i=t(n).data("padding-right");void 0!==i&&t(n).css("padding-right",i).removeData("padding-right")}),t(d.NAVBAR_TOGGLER).each(function(e,n){var i=t(n).data("margin-right");void 0!==i&&t(n).css("margin-right",i).removeData("margin-right")});var e=t("body").data("padding-right");void 0!==e&&t("body").css("padding-right",e).removeData("padding-right")},a.prototype._getScrollbarWidth=function(){var t=document.createElement("div");t.className=u.SCROLLBAR_MEASURER,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},a._jQueryInterface=function(e,n){return this.each(function(){var o=t(this).data("bs.modal"),r=t.extend({},a.Default,t(this).data(),"object"===(void 0===e?"undefined":i(e))&&e);if(o||(o=new a(this,r),t(this).data("bs.modal",o)),"string"==typeof e){if(void 0===o[e])throw new Error('No method named "'+e+'"');o[e](n)}else r.show&&o.show(n)})},o(a,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}},{key:"Default",get:function(){return l}}]),a}();t(document).on(c.CLICK_DATA_API,d.DATA_TOGGLE,function(e){var n=this,i=void 0,o=r.getSelectorFromElement(this);o&&(i=t(o)[0]);var s=t(i).data("bs.modal")?"toggle":t.extend({},t(i).data(),t(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||e.preventDefault();var a=t(i).one(c.SHOW,function(e){e.isDefaultPrevented()||a.one(c.HIDDEN,function(){t(n).is(":visible")&&n.focus()})});f._jQueryInterface.call(t(i),s,this)}),t.fn[e]=f._jQueryInterface,t.fn[e].Constructor=f,t.fn[e].noConflict=function(){return t.fn[e]=a,f._jQueryInterface}}(jQuery),function(t){var e="scrollspy",s=t.fn[e],a={offset:10,method:"auto",target:""},l={offset:"number",method:"string",target:"(string|element)"},h={ACTIVATE:"activate.bs.scrollspy",SCROLL:"scroll.bs.scrollspy",LOAD_DATA_API:"load.bs.scrollspy.data-api"},c={DROPDOWN_ITEM:"dropdown-item",DROPDOWN_MENU:"dropdown-menu",ACTIVE:"active"},u={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV_LINKS:".nav-link",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},d={OFFSET:"offset",POSITION:"position"},f=function(){function s(e,i){var o=this;n(this,s),this._element=e,this._scrollElement="BODY"===e.tagName?window:e,this._config=this._getConfig(i),this._selector=this._config.target+" "+u.NAV_LINKS+","+this._config.target+" "+u.LIST_ITEMS+","+this._config.target+" "+u.DROPDOWN_ITEMS,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,t(this._scrollElement).on(h.SCROLL,function(t){return o._process(t)}),this.refresh(),this._process()}return s.prototype.refresh=function(){var e=this,n=this._scrollElement!==this._scrollElement.window?d.POSITION:d.OFFSET,i="auto"===this._config.method?n:this._config.method,o=i===d.POSITION?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),t.makeArray(t(this._selector)).map(function(e){var n=void 0,s=r.getSelectorFromElement(e);if(s&&(n=t(s)[0]),n){var a=n.getBoundingClientRect();if(a.width||a.height)return[t(n)[i]().top+o,s]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},s.prototype.dispose=function(){t.removeData(this._element,"bs.scrollspy"),t(this._scrollElement).off(".bs.scrollspy"),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},s.prototype._getConfig=function(n){if("string"!=typeof(n=t.extend({},a,n)).target){var i=t(n.target).attr("id");i||(i=r.getUID(e),t(n.target).attr("id",i)),n.target="#"+i}return r.typeCheckConfig(e,n,l),n},s.prototype._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},s.prototype._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},s.prototype._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},s.prototype._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=n){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;)this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&(void 0===this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}},s.prototype._activate=function(e){this._activeTarget=e,this._clear();var n=this._selector.split(",");n=n.map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'});var i=t(n.join(","));i.hasClass(c.DROPDOWN_ITEM)?(i.closest(u.DROPDOWN).find(u.DROPDOWN_TOGGLE).addClass(c.ACTIVE),i.addClass(c.ACTIVE)):(i.addClass(c.ACTIVE),i.parents(u.NAV_LIST_GROUP).prev(u.NAV_LINKS+", "+u.LIST_ITEMS).addClass(c.ACTIVE)),t(this._scrollElement).trigger(h.ACTIVATE,{relatedTarget:e})},s.prototype._clear=function(){t(this._selector).filter(u.ACTIVE).removeClass(c.ACTIVE)},s._jQueryInterface=function(e){return this.each(function(){var n=t(this).data("bs.scrollspy"),o="object"===(void 0===e?"undefined":i(e))&&e;if(n||(n=new s(this,o),t(this).data("bs.scrollspy",n)),"string"==typeof e){if(void 0===n[e])throw new Error('No method named "'+e+'"');n[e]()}})},o(s,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}},{key:"Default",get:function(){return a}}]),s}();t(window).on(h.LOAD_DATA_API,function(){for(var e=t.makeArray(t(u.DATA_SPY)),n=e.length;n--;){var i=t(e[n]);f._jQueryInterface.call(i,i.data())}}),t.fn[e]=f._jQueryInterface,t.fn[e].Constructor=f,t.fn[e].noConflict=function(){return t.fn[e]=s,f._jQueryInterface}}(jQuery),function(t){var e=t.fn.tab,i={HIDE:"hide.bs.tab",HIDDEN:"hidden.bs.tab",SHOW:"show.bs.tab",SHOWN:"shown.bs.tab",CLICK_DATA_API:"click.bs.tab.data-api"},s={DROPDOWN_MENU:"dropdown-menu",ACTIVE:"active",DISABLED:"disabled",FADE:"fade",SHOW:"show"},a={DROPDOWN:".dropdown",NAV_LIST_GROUP:".nav, .list-group",ACTIVE:".active",DATA_TOGGLE:'[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',DROPDOWN_TOGGLE:".dropdown-toggle",DROPDOWN_ACTIVE_CHILD:"> .dropdown-menu .active"},l=function(){function e(t){n(this,e),this._element=t}return e.prototype.show=function(){var e=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&t(this._element).hasClass(s.ACTIVE)||t(this._element).hasClass(s.DISABLED))){var n=void 0,o=void 0,l=t(this._element).closest(a.NAV_LIST_GROUP)[0],h=r.getSelectorFromElement(this._element);l&&(o=t.makeArray(t(l).find(a.ACTIVE)),o=o[o.length-1]);var c=t.Event(i.HIDE,{relatedTarget:this._element}),u=t.Event(i.SHOW,{relatedTarget:o});if(o&&t(o).trigger(c),t(this._element).trigger(u),!u.isDefaultPrevented()&&!c.isDefaultPrevented()){h&&(n=t(h)[0]),this._activate(this._element,l);var d=function(){var n=t.Event(i.HIDDEN,{relatedTarget:e._element}),r=t.Event(i.SHOWN,{relatedTarget:o});t(o).trigger(n),t(e._element).trigger(r)};n?this._activate(n,n.parentNode,d):d()}}},e.prototype.dispose=function(){t.removeData(this._element,"bs.tab"),this._element=null},e.prototype._activate=function(e,n,i){var o=this,l=t(n).find(a.ACTIVE)[0],h=i&&r.supportsTransitionEnd()&&l&&t(l).hasClass(s.FADE),c=function(){return o._transitionComplete(e,l,h,i)};l&&h?t(l).one(r.TRANSITION_END,c).emulateTransitionEnd(150):c(),l&&t(l).removeClass(s.SHOW)},e.prototype._transitionComplete=function(e,n,i,o){if(n){t(n).removeClass(s.ACTIVE);var l=t(n.parentNode).find(a.DROPDOWN_ACTIVE_CHILD)[0];l&&t(l).removeClass(s.ACTIVE),n.setAttribute("aria-expanded",!1)}if(t(e).addClass(s.ACTIVE),e.setAttribute("aria-expanded",!0),i?(r.reflow(e),t(e).addClass(s.SHOW)):t(e).removeClass(s.FADE),e.parentNode&&t(e.parentNode).hasClass(s.DROPDOWN_MENU)){var h=t(e).closest(a.DROPDOWN)[0];h&&t(h).find(a.DROPDOWN_TOGGLE).addClass(s.ACTIVE),e.setAttribute("aria-expanded",!0)}o&&o()},e._jQueryInterface=function(n){return this.each(function(){var i=t(this),o=i.data("bs.tab");if(o||(o=new e(this),i.data("bs.tab",o)),"string"==typeof n){if(void 0===o[n])throw new Error('No method named "'+n+'"');o[n]()}})},o(e,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}}]),e}();t(document).on(i.CLICK_DATA_API,a.DATA_TOGGLE,function(e){e.preventDefault(),l._jQueryInterface.call(t(this),"show")}),t.fn.tab=l._jQueryInterface,t.fn.tab.Constructor=l,t.fn.tab.noConflict=function(){return t.fn.tab=e,l._jQueryInterface}}(jQuery),function(t){if("undefined"==typeof Popper)throw new Error("Bootstrap tooltips require Popper.js (https://popper.js.org)");var e="tooltip",s=".bs.tooltip",a=t.fn[e],l=new RegExp("(^|\\s)bs-tooltip\\S+","g"),h={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)"},c={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},u={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip"},d={SHOW:"show",OUT:"out"},f={HIDE:"hide"+s,HIDDEN:"hidden"+s,SHOW:"show"+s,SHOWN:"shown"+s,INSERTED:"inserted"+s,CLICK:"click"+s,FOCUSIN:"focusin"+s,FOCUSOUT:"focusout"+s,MOUSEENTER:"mouseenter"+s,MOUSELEAVE:"mouseleave"+s},p={FADE:"fade",SHOW:"show"},_={TOOLTIP:".tooltip",TOOLTIP_INNER:".tooltip-inner",ARROW:".arrow"},g={HOVER:"hover",FOCUS:"focus",CLICK:"click",MANUAL:"manual"},m=function(){function a(t,e){n(this,a),this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}return a.prototype.enable=function(){this._isEnabled=!0},a.prototype.disable=function(){this._isEnabled=!1},a.prototype.toggleEnabled=function(){this._isEnabled=!this._isEnabled},a.prototype.toggle=function(e){if(e){var n=this.constructor.DATA_KEY,i=t(e.currentTarget).data(n);i||(i=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(n,i)),i._activeTrigger.click=!i._activeTrigger.click,i._isWithActiveTrigger()?i._enter(null,i):i._leave(null,i)}else{if(t(this.getTipElement()).hasClass(p.SHOW))return void this._leave(null,this);this._enter(null,this)}},a.prototype.dispose=function(){clearTimeout(this._timeout),t.removeData(this.element,this.constructor.DATA_KEY),t(this.element).off(this.constructor.EVENT_KEY),t(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&t(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,null!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},a.prototype.show=function(){var e=this;if("none"===t(this.element).css("display"))throw new Error("Please use show on visible elements");var n=t.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){t(this.element).trigger(n);var i=t.contains(this.element.ownerDocument.documentElement,this.element);if(n.isDefaultPrevented()||!i)return;var o=this.getTipElement(),s=r.getUID(this.constructor.NAME);o.setAttribute("id",s),this.element.setAttribute("aria-describedby",s),this.setContent(),this.config.animation&&t(o).addClass(p.FADE);var l="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,h=this._getAttachment(l);this.addAttachmentClass(h);var c=!1===this.config.container?document.body:t(this.config.container);t(o).data(this.constructor.DATA_KEY,this),t.contains(this.element.ownerDocument.documentElement,this.tip)||t(o).appendTo(c),t(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new Popper(this.element,o,{placement:h,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:_.ARROW}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){e._handlePopperPlacementChange(t)}}),t(o).addClass(p.SHOW),"ontouchstart"in document.documentElement&&t("body").children().on("mouseover",null,t.noop);var u=function(){e.config.animation&&e._fixTransition();var n=e._hoverState;e._hoverState=null,t(e.element).trigger(e.constructor.Event.SHOWN),n===d.OUT&&e._leave(null,e)};r.supportsTransitionEnd()&&t(this.tip).hasClass(p.FADE)?t(this.tip).one(r.TRANSITION_END,u).emulateTransitionEnd(a._TRANSITION_DURATION):u()}},a.prototype.hide=function(e){var n=this,i=this.getTipElement(),o=t.Event(this.constructor.Event.HIDE),s=function(){n._hoverState!==d.SHOW&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),t(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),e&&e()};t(this.element).trigger(o),o.isDefaultPrevented()||(t(i).removeClass(p.SHOW),"ontouchstart"in document.documentElement&&t("body").children().off("mouseover",null,t.noop),this._activeTrigger[g.CLICK]=!1,this._activeTrigger[g.FOCUS]=!1,this._activeTrigger[g.HOVER]=!1,r.supportsTransitionEnd()&&t(this.tip).hasClass(p.FADE)?t(i).one(r.TRANSITION_END,s).emulateTransitionEnd(150):s(),this._hoverState="")},a.prototype.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},a.prototype.isWithContent=function(){return Boolean(this.getTitle())},a.prototype.addAttachmentClass=function(e){t(this.getTipElement()).addClass("bs-tooltip-"+e)},a.prototype.getTipElement=function(){return this.tip=this.tip||t(this.config.template)[0]},a.prototype.setContent=function(){var e=t(this.getTipElement());this.setElementContent(e.find(_.TOOLTIP_INNER),this.getTitle()),e.removeClass(p.FADE+" "+p.SHOW)},a.prototype.setElementContent=function(e,n){var o=this.config.html;"object"===(void 0===n?"undefined":i(n))&&(n.nodeType||n.jquery)?o?t(n).parent().is(e)||e.empty().append(n):e.text(t(n).text()):e[o?"html":"text"](n)},a.prototype.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},a.prototype._getAttachment=function(t){return c[t.toUpperCase()]},a.prototype._setListeners=function(){var e=this;this.config.trigger.split(" ").forEach(function(n){if("click"===n)t(e.element).on(e.constructor.Event.CLICK,e.config.selector,function(t){return e.toggle(t)});else if(n!==g.MANUAL){var i=n===g.HOVER?e.constructor.Event.MOUSEENTER:e.constructor.Event.FOCUSIN,o=n===g.HOVER?e.constructor.Event.MOUSELEAVE:e.constructor.Event.FOCUSOUT;t(e.element).on(i,e.config.selector,function(t){return e._enter(t)}).on(o,e.config.selector,function(t){return e._leave(t)})}t(e.element).closest(".modal").on("hide.bs.modal",function(){return e.hide()})}),this.config.selector?this.config=t.extend({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},a.prototype._fixTitle=function(){var t=i(this.element.getAttribute("data-original-title"));(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},a.prototype._enter=function(e,n){var i=this.constructor.DATA_KEY;(n=n||t(e.currentTarget).data(i))||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(i,n)),e&&(n._activeTrigger["focusin"===e.type?g.FOCUS:g.HOVER]=!0),t(n.getTipElement()).hasClass(p.SHOW)||n._hoverState===d.SHOW?n._hoverState=d.SHOW:(clearTimeout(n._timeout),n._hoverState=d.SHOW,n.config.delay&&n.config.delay.show?n._timeout=setTimeout(function(){n._hoverState===d.SHOW&&n.show()},n.config.delay.show):n.show())},a.prototype._leave=function(e,n){var i=this.constructor.DATA_KEY;(n=n||t(e.currentTarget).data(i))||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(i,n)),e&&(n._activeTrigger["focusout"===e.type?g.FOCUS:g.HOVER]=!1),n._isWithActiveTrigger()||(clearTimeout(n._timeout),n._hoverState=d.OUT,n.config.delay&&n.config.delay.hide?n._timeout=setTimeout(function(){n._hoverState===d.OUT&&n.hide()},n.config.delay.hide):n.hide())},a.prototype._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},a.prototype._getConfig=function(n){return(n=t.extend({},this.constructor.Default,t(this.element).data(),n)).delay&&"number"==typeof n.delay&&(n.delay={show:n.delay,hide:n.delay}),n.title&&"number"==typeof n.title&&(n.title=n.title.toString()),n.content&&"number"==typeof n.content&&(n.content=n.content.toString()),r.typeCheckConfig(e,n,this.constructor.DefaultType),n},a.prototype._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},a.prototype._cleanTipClass=function(){var e=t(this.getTipElement()),n=e.attr("class").match(l);null!==n&&n.length>0&&e.removeClass(n.join(""))},a.prototype._handlePopperPlacementChange=function(t){this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},a.prototype._fixTransition=function(){var e=this.getTipElement(),n=this.config.animation;null===e.getAttribute("x-placement")&&(t(e).removeClass(p.FADE),this.config.animation=!1,this.hide(),this.show(),this.config.animation=n)},a._jQueryInterface=function(e){return this.each(function(){var n=t(this).data("bs.tooltip"),o="object"===(void 0===e?"undefined":i(e))&&e;if((n||!/dispose|hide/.test(e))&&(n||(n=new a(this,o),t(this).data("bs.tooltip",n)),"string"==typeof e)){if(void 0===n[e])throw new Error('No method named "'+e+'"');n[e]()}})},o(a,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}},{key:"Default",get:function(){return u}},{key:"NAME",get:function(){return e}},{key:"DATA_KEY",get:function(){return"bs.tooltip"}},{key:"Event",get:function(){return f}},{key:"EVENT_KEY",get:function(){return s}},{key:"DefaultType",get:function(){return h}}]),a}();return t.fn[e]=m._jQueryInterface,t.fn[e].Constructor=m,t.fn[e].noConflict=function(){return t.fn[e]=a,m._jQueryInterface},m}(jQuery));!function(r){var a="popover",l=".bs.popover",h=r.fn[a],c=new RegExp("(^|\\s)bs-popover\\S+","g"),u=r.extend({},s.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),d=r.extend({},s.DefaultType,{content:"(string|element|function)"}),f={FADE:"fade",SHOW:"show"},p={TITLE:".popover-header",CONTENT:".popover-body"},_={HIDE:"hide"+l,HIDDEN:"hidden"+l,SHOW:"show"+l,SHOWN:"shown"+l,INSERTED:"inserted"+l,CLICK:"click"+l,FOCUSIN:"focusin"+l,FOCUSOUT:"focusout"+l,MOUSEENTER:"mouseenter"+l,MOUSELEAVE:"mouseleave"+l},g=function(s){function h(){return n(this,h),t(this,s.apply(this,arguments))}return e(h,s),h.prototype.isWithContent=function(){return this.getTitle()||this._getContent()},h.prototype.addAttachmentClass=function(t){r(this.getTipElement()).addClass("bs-popover-"+t)},h.prototype.getTipElement=function(){return this.tip=this.tip||r(this.config.template)[0]},h.prototype.setContent=function(){var t=r(this.getTipElement());this.setElementContent(t.find(p.TITLE),this.getTitle()),this.setElementContent(t.find(p.CONTENT),this._getContent()),t.removeClass(f.FADE+" "+f.SHOW)},h.prototype._getContent=function(){return this.element.getAttribute("data-content")||("function"==typeof this.config.content?this.config.content.call(this.element):this.config.content)},h.prototype._cleanTipClass=function(){var t=r(this.getTipElement()),e=t.attr("class").match(c);null!==e&&e.length>0&&t.removeClass(e.join(""))},h._jQueryInterface=function(t){return this.each(function(){var e=r(this).data("bs.popover"),n="object"===(void 0===t?"undefined":i(t))?t:null;if((e||!/destroy|hide/.test(t))&&(e||(e=new h(this,n),r(this).data("bs.popover",e)),"string"==typeof t)){if(void 0===e[t])throw new Error('No method named "'+t+'"');e[t]()}})},o(h,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}},{key:"Default",get:function(){return u}},{key:"NAME",get:function(){return a}},{key:"DATA_KEY",get:function(){return"bs.popover"}},{key:"Event",get:function(){return _}},{key:"EVENT_KEY",get:function(){return l}},{key:"DefaultType",get:function(){return d}}]),h}(s);r.fn[a]=g._jQueryInterface,r.fn[a].Constructor=g,r.fn[a].noConflict=function(){return r.fn[a]=h,g._jQueryInterface}}(jQuery)}();
//
// SmoothScroll for websites v1.4.5 (Balazs Galambosi)
// http://www.smoothscroll.net/
//
// Licensed under the terms of the MIT license.
//
// You may use it in your theme if you credit me.
// It is also free to use on any individual website.
//
// Exception:
// The only restriction is to not publish any
// extension for browsers or native application
// without getting a written permission first.
//

(function () {

// Scroll Variables (tweakable)
var defaultOptions = {

    // Scrolling Core
    frameRate        : 150, // [Hz]
    animationTime    : 400, // [ms]
    stepSize         : 100, // [px]

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm   : true,
    pulseScale       : 4,
    pulseNormalize   : 1,

    // Acceleration
    accelerationDelta : 50,  // 50
    accelerationMax   : 3,   // 3

    // Keyboard Settings
    keyboardSupport   : true,  // option
    arrowScroll       : 50,    // [px]

    // Other
    touchpadSupport   : false, // ignore touchpad by default
    fixedBackground   : true,
    excluded          : ''
};

var options = defaultOptions;


// Other Variables
var isExcluded = false;
var isFrame = false;
var direction = { x: 0, y: 0 };
var initDone  = false;
var root = document.documentElement;
var activeElement;
var observer;
var refreshSize;
var deltaBuffer = [];
var isMac = /^Mac/.test(navigator.platform);

var key = { left: 37, up: 38, right: 39, down: 40, spacebar: 32,
            pageup: 33, pagedown: 34, end: 35, home: 36 };
var arrowKeys = { 37: 1, 38: 1, 39: 1, 40: 1 };

/***********************************************
 * INITIALIZE
 ***********************************************/

/**
 * Tests if smooth scrolling is allowed. Shuts down everything if not.
 */
function initTest() {
    if (options.keyboardSupport) {
        addEvent('keydown', keydown);
    }
}

/**
 * Sets up scrolls array, determines if frames are involved.
 */
function init() {

    if (initDone || !document.body) return;

    initDone = true;

    var body = document.body;
    var html = document.documentElement;
    var windowHeight = window.innerHeight;
    var scrollHeight = body.scrollHeight;

    // check compat mode for root element
    root = (document.compatMode.indexOf('CSS') >= 0) ? html : body;
    activeElement = body;

    initTest();

    // Checks if this script is running in a frame
    if (top != self) {
        isFrame = true;
    }

    /**
     * Safari 10 fixed it, Chrome fixed it in v45:
     * This fixes a bug where the areas left and right to
     * the content does not trigger the onmousewheel event
     * on some pages. e.g.: html, body { height: 100% }
     */
    else if (isOldSafari &&
             scrollHeight > windowHeight &&
            (body.offsetHeight <= windowHeight ||
             html.offsetHeight <= windowHeight)) {

        var fullPageElem = document.createElement('div');
        fullPageElem.style.cssText = 'position:absolute; z-index:-10000; ' +
                                     'top:0; left:0; right:0; height:' +
                                      root.scrollHeight + 'px';
        document.body.appendChild(fullPageElem);

        // DOM changed (throttled) to fix height
        var pendingRefresh;
        refreshSize = function () {
            if (pendingRefresh) return; // could also be: clearTimeout(pendingRefresh);
            pendingRefresh = setTimeout(function () {
                if (isExcluded) return; // could be running after cleanup
                fullPageElem.style.height = '0';
                fullPageElem.style.height = root.scrollHeight + 'px';
                pendingRefresh = null;
            }, 500); // act rarely to stay fast
        };

        setTimeout(refreshSize, 10);

        addEvent('resize', refreshSize);

        // TODO: attributeFilter?
        var config = {
            attributes: true,
            childList: true,
            characterData: false
            // subtree: true
        };

        observer = new MutationObserver(refreshSize);
        observer.observe(body, config);

        if (root.offsetHeight <= windowHeight) {
            var clearfix = document.createElement('div');
            clearfix.style.clear = 'both';
            body.appendChild(clearfix);
        }
    }

    // disable fixed background
    if (!options.fixedBackground && !isExcluded) {
        body.style.backgroundAttachment = 'scroll';
        html.style.backgroundAttachment = 'scroll';
    }
}

/**
 * Removes event listeners and other traces left on the page.
 */
function cleanup() {
    observer && observer.disconnect();
    removeEvent(wheelEvent, wheel);
    removeEvent('mousedown', mousedown);
    removeEvent('keydown', keydown);
    removeEvent('resize', refreshSize);
    removeEvent('load', init);
}


/************************************************
 * SCROLLING
 ************************************************/

var que = [];
var pending = false;
var lastScroll = Date.now();

/**
 * Pushes scroll actions to the scrolling queue.
 */
function scrollArray(elem, left, top) {

    directionCheck(left, top);

    if (options.accelerationMax != 1) {
        var now = Date.now();
        var elapsed = now - lastScroll;
        if (elapsed < options.accelerationDelta) {
            var factor = (1 + (50 / elapsed)) / 2;
            if (factor > 1) {
                factor = Math.min(factor, options.accelerationMax);
                left *= factor;
                top  *= factor;
            }
        }
        lastScroll = Date.now();
    }

    // push a scroll command
    que.push({
        x: left,
        y: top,
        lastX: (left < 0) ? 0.99 : -0.99,
        lastY: (top  < 0) ? 0.99 : -0.99,
        start: Date.now()
    });

    // don't act if there's a pending queue
    if (pending) {
        return;
    }

    var scrollWindow = (elem === document.body);

    var step = function (time) {

        var now = Date.now();
        var scrollX = 0;
        var scrollY = 0;

        for (var i = 0; i < que.length; i++) {

            var item = que[i];
            var elapsed  = now - item.start;
            var finished = (elapsed >= options.animationTime);

            // scroll position: [0, 1]
            var position = (finished) ? 1 : elapsed / options.animationTime;

            // easing [optional]
            if (options.pulseAlgorithm) {
                position = pulse(position);
            }

            // only need the difference
            var x = (item.x * position - item.lastX) >> 0;
            var y = (item.y * position - item.lastY) >> 0;

            // add this to the total scrolling
            scrollX += x;
            scrollY += y;

            // update last values
            item.lastX += x;
            item.lastY += y;

            // delete and step back if it's over
            if (finished) {
                que.splice(i, 1); i--;
            }
        }

        // scroll left and top
        if (scrollWindow) {
            window.scrollBy(scrollX, scrollY);
        }
        else {
            if (scrollX) elem.scrollLeft += scrollX;
            if (scrollY) elem.scrollTop  += scrollY;
        }

        // clean up if there's nothing left to do
        if (!left && !top) {
            que = [];
        }

        if (que.length) {
            requestFrame(step, elem, (1000 / options.frameRate + 1));
        } else {
            pending = false;
        }
    };

    // start a new queue of actions
    requestFrame(step, elem, 0);
    pending = true;
}


/***********************************************
 * EVENTS
 ***********************************************/

/**
 * Mouse wheel handler.
 * @param {Object} event
 */
function wheel(event) {

    if (!initDone) {
        init();
    }

    var target = event.target;

    // leave early if default action is prevented
    // or it's a zooming event with CTRL
    if (event.defaultPrevented || event.ctrlKey) {
        return true;
    }

    // leave embedded content alone (flash & pdf)
    if (isNodeName(activeElement, 'embed') ||
       (isNodeName(target, 'embed') && /\.pdf/i.test(target.src)) ||
        isNodeName(activeElement, 'object') ||
        target.shadowRoot) {
        return true;
    }

    var deltaX = -event.wheelDeltaX || event.deltaX || 0;
    var deltaY = -event.wheelDeltaY || event.deltaY || 0;

    if (isMac) {
        if (event.wheelDeltaX && isDivisible(event.wheelDeltaX, 120)) {
            deltaX = -120 * (event.wheelDeltaX / Math.abs(event.wheelDeltaX));
        }
        if (event.wheelDeltaY && isDivisible(event.wheelDeltaY, 120)) {
            deltaY = -120 * (event.wheelDeltaY / Math.abs(event.wheelDeltaY));
        }
    }

    // use wheelDelta if deltaX/Y is not available
    if (!deltaX && !deltaY) {
        deltaY = -event.wheelDelta || 0;
    }

    // line based scrolling (Firefox mostly)
    if (event.deltaMode === 1) {
        deltaX *= 40;
        deltaY *= 40;
    }

    var overflowing = overflowingAncestor(target);

    // nothing to do if there's no element that's scrollable
    if (!overflowing) {
        // except Chrome iframes seem to eat wheel events, which we need to
        // propagate up, if the iframe has nothing overflowing to scroll
        if (isFrame && isChrome)  {
            // change target to iframe element itself for the parent frame
            Object.defineProperty(event, "target", {value: window.frameElement});
            event = new event.constructor(event.type, event); // redefine event because already dispatched
            return parent.dispatchEvent(event);
        }
        return true;
    }

    // check if it's a touchpad scroll that should be ignored
    if (!options.touchpadSupport && isTouchpad(deltaY)) {
        return true;
    }

    // scale by step size
    // delta is 120 most of the time
    // synaptics seems to send 1 sometimes
    if (Math.abs(deltaX) > 1.2) {
        deltaX *= options.stepSize / 120;
    }
    if (Math.abs(deltaY) > 1.2) {
        deltaY *= options.stepSize / 120;
    }

    scrollArray(overflowing, deltaX, deltaY);
    event.preventDefault();
    scheduleClearCache();
}

/**
 * Keydown event handler.
 * @param {Object} event
 */
function keydown(event) {

    var target   = event.target;
    var modifier = event.ctrlKey || event.altKey || event.metaKey ||
                  (event.shiftKey && event.keyCode !== key.spacebar);

    // our own tracked active element could've been removed from the DOM
    if (!document.body.contains(activeElement)) {
        activeElement = document.activeElement;
    }

    // do nothing if user is editing text
    // or using a modifier key (except shift)
    // or in a dropdown
    // or inside interactive elements
    var inputNodeNames = /^(textarea|select|embed|object)$/i;
    var buttonTypes = /^(button|submit|radio|checkbox|file|color|image)$/i;
    if ( event.defaultPrevented ||
         inputNodeNames.test(target.nodeName) ||
         isNodeName(target, 'input') && !buttonTypes.test(target.type) ||
         isNodeName(activeElement, 'video') ||
         isInsideYoutubeVideo(event) ||
         target.isContentEditable ||
         modifier ) {
      return true;
    }

    // [spacebar] should trigger button press, leave it alone
    if ((isNodeName(target, 'button') ||
         isNodeName(target, 'input') && buttonTypes.test(target.type)) &&
        event.keyCode === key.spacebar) {
      return true;
    }

    // [arrwow keys] on radio buttons should be left alone
    if (isNodeName(target, 'input') && target.type == 'radio' &&
        arrowKeys[event.keyCode])  {
      return true;
    }

    var shift, x = 0, y = 0;
    var overflowing = overflowingAncestor(activeElement);

    if (!overflowing) {
        // Chrome iframes seem to eat key events, which we need to
        // propagate up, if the iframe has nothing overflowing to scroll
        return (isFrame && isChrome) ? parent.keydown(event) : true;
    }

    var clientHeight = overflowing.clientHeight;

    if (overflowing == document.body) {
        clientHeight = window.innerHeight;
    }

    switch (event.keyCode) {
        case key.up:
            y = -options.arrowScroll;
            break;
        case key.down:
            y = options.arrowScroll;
            break;
        case key.spacebar: // (+ shift)
            shift = event.shiftKey ? 1 : -1;
            y = -shift * clientHeight * 0.9;
            break;
        case key.pageup:
            y = -clientHeight * 0.9;
            break;
        case key.pagedown:
            y = clientHeight * 0.9;
            break;
        case key.home:
            y = -overflowing.scrollTop;
            break;
        case key.end:
            var scroll = overflowing.scrollHeight - overflowing.scrollTop;
            var scrollRemaining = scroll - clientHeight;
            y = (scrollRemaining > 0) ? scrollRemaining + 10 : 0;
            break;
        case key.left:
            x = -options.arrowScroll;
            break;
        case key.right:
            x = options.arrowScroll;
            break;
        default:
            return true; // a key we don't care about
    }

    scrollArray(overflowing, x, y);
    event.preventDefault();
    scheduleClearCache();
}

/**
 * Mousedown event only for updating activeElement
 */
function mousedown(event) {
    activeElement = event.target;
}


/***********************************************
 * OVERFLOW
 ***********************************************/

var uniqueID = (function () {
    var i = 0;
    return function (el) {
        return el.uniqueID || (el.uniqueID = i++);
    };
})();

var cache = {}; // cleared out after a scrolling session
var clearCacheTimer;

//setInterval(function () { cache = {}; }, 10 * 1000);

function scheduleClearCache() {
    clearTimeout(clearCacheTimer);
    clearCacheTimer = setInterval(function () { cache = {}; }, 1*1000);
}

function setCache(elems, overflowing) {
    for (var i = elems.length; i--;)
        cache[uniqueID(elems[i])] = overflowing;
    return overflowing;
}

//  (body)                (root)
//         | hidden | visible | scroll |  auto  |
// hidden  |   no   |    no   |   YES  |   YES  |
// visible |   no   |   YES   |   YES  |   YES  |
// scroll  |   no   |   YES   |   YES  |   YES  |
// auto    |   no   |   YES   |   YES  |   YES  |

function overflowingAncestor(el) {
    var elems = [];
    var body = document.body;
    var rootScrollHeight = root.scrollHeight;
    do {
        var cached = cache[uniqueID(el)];
        if (cached) {
            return setCache(elems, cached);
        }
        elems.push(el);
        if (rootScrollHeight === el.scrollHeight) {
            var topOverflowsNotHidden = overflowNotHidden(root) && overflowNotHidden(body);
            var isOverflowCSS = topOverflowsNotHidden || overflowAutoOrScroll(root);
            if (isFrame && isContentOverflowing(root) ||
               !isFrame && isOverflowCSS) {
                return setCache(elems, getScrollRoot());
            }
        } else if (isContentOverflowing(el) && overflowAutoOrScroll(el)) {
            return setCache(elems, el);
        }
    } while (el = el.parentElement);
}

function isContentOverflowing(el) {
    return (el.clientHeight + 10 < el.scrollHeight);
}

// typically for <body> and <html>
function overflowNotHidden(el) {
    var overflow = getComputedStyle(el, '').getPropertyValue('overflow-y');
    return (overflow !== 'hidden');
}

// for all other elements
function overflowAutoOrScroll(el) {
    var overflow = getComputedStyle(el, '').getPropertyValue('overflow-y');
    return (overflow === 'scroll' || overflow === 'auto');
}


/***********************************************
 * HELPERS
 ***********************************************/

function addEvent(type, fn) {
    window.addEventListener(type, fn, false);
}

function removeEvent(type, fn) {
    window.removeEventListener(type, fn, false);
}

function isNodeName(el, tag) {
    return (el.nodeName||'').toLowerCase() === tag.toLowerCase();
}

function directionCheck(x, y) {
    x = (x > 0) ? 1 : -1;
    y = (y > 0) ? 1 : -1;
    if (direction.x !== x || direction.y !== y) {
        direction.x = x;
        direction.y = y;
        que = [];
        lastScroll = 0;
    }
}

var deltaBufferTimer;

if (window.localStorage && localStorage.SS_deltaBuffer) {
    try { // #46 Safari throws in private browsing for localStorage
        deltaBuffer = localStorage.SS_deltaBuffer.split(',');
    } catch (e) { }
}

function isTouchpad(deltaY) {
    if (!deltaY) return;
    if (!deltaBuffer.length) {
        deltaBuffer = [deltaY, deltaY, deltaY];
    }
    deltaY = Math.abs(deltaY);
    deltaBuffer.push(deltaY);
    deltaBuffer.shift();
    clearTimeout(deltaBufferTimer);
    deltaBufferTimer = setTimeout(function () {
        try { // #46 Safari throws in private browsing for localStorage
            localStorage.SS_deltaBuffer = deltaBuffer.join(',');
        } catch (e) { }
    }, 1000);
    return !allDeltasDivisableBy(120) && !allDeltasDivisableBy(100);
}

function isDivisible(n, divisor) {
    return (Math.floor(n / divisor) == n / divisor);
}

function allDeltasDivisableBy(divisor) {
    return (isDivisible(deltaBuffer[0], divisor) &&
            isDivisible(deltaBuffer[1], divisor) &&
            isDivisible(deltaBuffer[2], divisor));
}

function isInsideYoutubeVideo(event) {
    var elem = event.target;
    var isControl = false;
    if (document.URL.indexOf ('www.youtube.com/watch') != -1) {
        do {
            isControl = (elem.classList &&
                         elem.classList.contains('html5-video-controls'));
            if (isControl) break;
        } while (elem = elem.parentNode);
    }
    return isControl;
}

var requestFrame = (function () {
      return (window.requestAnimationFrame       ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame    ||
              function (callback, element, delay) {
                 window.setTimeout(callback, delay || (1000/60));
             });
})();

var MutationObserver = (window.MutationObserver ||
                        window.WebKitMutationObserver ||
                        window.MozMutationObserver);

var getScrollRoot = (function() {
  var SCROLL_ROOT;
  return function() {
    if (!SCROLL_ROOT) {
      var dummy = document.createElement('div');
      dummy.style.cssText = 'height:10000px;width:1px;';
      document.body.appendChild(dummy);
      var bodyScrollTop  = document.body.scrollTop;
      var docElScrollTop = document.documentElement.scrollTop;
      window.scrollBy(0, 3);
      if (document.body.scrollTop != bodyScrollTop)
        (SCROLL_ROOT = document.body);
      else
        (SCROLL_ROOT = document.documentElement);
      window.scrollBy(0, -3);
      document.body.removeChild(dummy);
    }
    return SCROLL_ROOT;
  };
})();


/***********************************************
 * PULSE (by Michael Herf)
 ***********************************************/

/**
 * Viscous fluid with a pulse for part and decay for the rest.
 * - Applies a fixed force over an interval (a damped acceleration), and
 * - Lets the exponential bleed away the velocity over a longer interval
 * - Michael Herf, http://stereopsis.com/stopping/
 */
function pulse_(x) {
    var val, start, expx;
    // test
    x = x * options.pulseScale;
    if (x < 1) { // acceleartion
        val = x - (1 - Math.exp(-x));
    } else {     // tail
        // the previous animation ended here:
        start = Math.exp(-1);
        // simple viscous drag
        x -= 1;
        expx = 1 - Math.exp(-x);
        val = start + (expx * (1 - start));
    }
    return val * options.pulseNormalize;
}

function pulse(x) {
    if (x >= 1) return 1;
    if (x <= 0) return 0;

    if (options.pulseNormalize == 1) {
        options.pulseNormalize /= pulse_(1);
    }
    return pulse_(x);
}


/***********************************************
 * FIRST RUN
 ***********************************************/

var userAgent = window.navigator.userAgent;
var isEdge    = /Edge/.test(userAgent); // thank you MS
var isChrome  = /chrome/i.test(userAgent) && !isEdge;
var isSafari  = /safari/i.test(userAgent) && !isEdge;
var isMobile  = /mobile/i.test(userAgent);
var isIEWin7  = /Windows NT 6.1/i.test(userAgent) && /rv:11/i.test(userAgent);
var isOldSafari = isSafari && (/Version\/8/i.test(userAgent) || /Version\/9/i.test(userAgent));
var isEnabledForBrowser = (isChrome || isSafari || isIEWin7) && !isMobile;

var wheelEvent;
if ('onwheel' in document.createElement('div'))
    wheelEvent = 'wheel';
else if ('onmousewheel' in document.createElement('div'))
    wheelEvent = 'mousewheel';

if (wheelEvent && isEnabledForBrowser) {
    addEvent(wheelEvent, wheel);
    addEvent('mousedown', mousedown);
    addEvent('load', init);
}


/***********************************************
 * PUBLIC INTERFACE
 ***********************************************/

function SmoothScroll(optionsToSet) {
    for (var key in optionsToSet)
        if (defaultOptions.hasOwnProperty(key))
            options[key] = optionsToSet[key];
}
SmoothScroll.destroy = cleanup;

if (window.SmoothScrollOptions) // async API
    SmoothScroll(window.SmoothScrollOptions);

if (typeof define === 'function' && define.amd)
    define(function() {
        return SmoothScroll;
    });
else if ('object' == typeof exports)
    module.exports = SmoothScroll;
else
    window.SmoothScroll = SmoothScroll;

})();
/*!
 * Name    : Just Another Parallax [Jarallax]
 * Version : 1.7.3
 * Author  : _nK https://nkdev.info
 * GitHub  : https://github.com/nk-o/jarallax
 */
!function(e){"use strict";function t(){i=e.innerWidth||document.documentElement.clientWidth,a=e.innerHeight||document.documentElement.clientHeight}function n(e,t,n){e.addEventListener?e.addEventListener(t,n):e.attachEvent("on"+t,function(){n.call(e)})}function o(n){e.requestAnimationFrame(function(){"scroll"!==n.type&&t();for(var e=0,o=g.length;e<o;e++)"scroll"!==n.type&&(g[e].coverImage(),g[e].clipContainer()),g[e].onScroll()})}Date.now||(Date.now=function(){return(new Date).getTime()}),e.requestAnimationFrame||!function(){for(var t=["webkit","moz"],n=0;n<t.length&&!e.requestAnimationFrame;++n){var o=t[n];e.requestAnimationFrame=e[o+"RequestAnimationFrame"],e.cancelAnimationFrame=e[o+"CancelAnimationFrame"]||e[o+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS 6/.test(e.navigator.userAgent)||!e.requestAnimationFrame||!e.cancelAnimationFrame){var i=0;e.requestAnimationFrame=function(e){var t=Date.now(),n=Math.max(i+16,t);return setTimeout(function(){e(i=n)},n-t)},e.cancelAnimationFrame=clearTimeout}}();var i,a,r=function(){if(!e.getComputedStyle)return!1;var t,n=document.createElement("p"),o={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};(document.body||document.documentElement).insertBefore(n,null);for(var i in o)"undefined"!=typeof n.style[i]&&(n.style[i]="translate3d(1px,1px,1px)",t=e.getComputedStyle(n).getPropertyValue(o[i]));return(document.body||document.documentElement).removeChild(n),"undefined"!=typeof t&&t.length>0&&"none"!==t}(),l=navigator.userAgent.toLowerCase().indexOf("android")>-1,s=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!e.MSStream,c=!!e.opera,m=/Edge\/\d+/.test(navigator.userAgent),p=/Trident.*rv[ :]*11\./.test(navigator.userAgent),u=!!Function("/*@cc_on return document.documentMode===10@*/")(),d=document.all&&!e.atob;t();var g=[],f=function(){function e(e,n){var o,i=this;if(i.$item=e,i.defaults={type:"scroll",speed:.5,imgSrc:null,imgWidth:null,imgHeight:null,enableTransform:!0,elementInViewport:null,zIndex:-100,noAndroid:!1,noIos:!0,onScroll:null,onInit:null,onDestroy:null,onCoverImage:null},o=JSON.parse(i.$item.getAttribute("data-jarallax")||"{}"),i.options=i.extend({},i.defaults,o,n),!(l&&i.options.noAndroid||s&&i.options.noIos)){i.options.speed=Math.min(2,Math.max(-1,parseFloat(i.options.speed)));var a=i.options.elementInViewport;a&&"object"==typeof a&&"undefined"!=typeof a.length&&(a=a[0]),!a instanceof Element&&(a=null),i.options.elementInViewport=a,i.instanceID=t++,i.image={src:i.options.imgSrc||null,$container:null,$item:null,width:i.options.imgWidth||null,height:i.options.imgHeight||null,useImgTag:s||l||c||p||u||m},i.initImg()&&i.init()}}var t=0;return e}();f.prototype.css=function(t,n){if("string"==typeof n)return e.getComputedStyle?e.getComputedStyle(t).getPropertyValue(n):t.style[n];n.transform&&(n.WebkitTransform=n.MozTransform=n.transform);for(var o in n)t.style[o]=n[o];return t},f.prototype.extend=function(e){e=e||{};for(var t=1;t<arguments.length;t++)if(arguments[t])for(var n in arguments[t])arguments[t].hasOwnProperty(n)&&(e[n]=arguments[t][n]);return e},f.prototype.initImg=function(){var e=this;return null===e.image.src&&(e.image.src=e.css(e.$item,"background-image").replace(/^url\(['"]?/g,"").replace(/['"]?\)$/g,"")),!(!e.image.src||"none"===e.image.src)},f.prototype.init=function(){function e(){t.coverImage(),t.clipContainer(),t.onScroll(!0),t.options.onInit&&t.options.onInit.call(t),setTimeout(function(){t.$item&&t.css(t.$item,{"background-image":"none","background-attachment":"scroll","background-size":"auto"})},0)}var t=this,n={position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden",pointerEvents:"none"},o={position:"fixed"};t.$item.setAttribute("data-jarallax-original-styles",t.$item.getAttribute("style")),"static"===t.css(t.$item,"position")&&t.css(t.$item,{position:"relative"}),"auto"===t.css(t.$item,"z-index")&&t.css(t.$item,{zIndex:0}),t.image.$container=document.createElement("div"),t.css(t.image.$container,n),t.css(t.image.$container,{visibility:"hidden","z-index":t.options.zIndex}),t.image.$container.setAttribute("id","jarallax-container-"+t.instanceID),t.$item.appendChild(t.image.$container),t.image.useImgTag&&r&&t.options.enableTransform?(t.image.$item=document.createElement("img"),t.image.$item.setAttribute("src",t.image.src),o=t.extend({"max-width":"none"},n,o)):(t.image.$item=document.createElement("div"),o=t.extend({"background-position":"50% 50%","background-size":"100% auto","background-repeat":"no-repeat no-repeat","background-image":'url("'+t.image.src+'")'},n,o)),d&&(o.backgroundAttachment="fixed"),t.parentWithTransform=0;for(var i=t.$item;null!==i&&i!==document&&0===t.parentWithTransform;){var a=t.css(i,"-webkit-transform")||t.css(i,"-moz-transform")||t.css(i,"transform");a&&"none"!==a&&(t.parentWithTransform=1,t.css(t.image.$container,{transform:"translateX(0) translateY(0)"})),i=i.parentNode}t.css(t.image.$item,o),t.image.$container.appendChild(t.image.$item),t.image.width&&t.image.height?e():t.getImageSize(t.image.src,function(n,o){t.image.width=n,t.image.height=o,e()}),g.push(t)},f.prototype.destroy=function(){for(var e=this,t=0,n=g.length;t<n;t++)if(g[t].instanceID===e.instanceID){g.splice(t,1);break}var o=e.$item.getAttribute("data-jarallax-original-styles");e.$item.removeAttribute("data-jarallax-original-styles"),"null"===o?e.$item.removeAttribute("style"):e.$item.setAttribute("style",o),e.$clipStyles&&e.$clipStyles.parentNode.removeChild(e.$clipStyles),e.image.$container.parentNode.removeChild(e.image.$container),e.options.onDestroy&&e.options.onDestroy.call(e),delete e.$item.jarallax;for(var i in e)delete e[i]},f.prototype.getImageSize=function(e,t){if(e&&t){var n=new Image;n.onload=function(){t(n.width,n.height)},n.src=e}},f.prototype.clipContainer=function(){if(!d){var e=this,t=e.image.$container.getBoundingClientRect(),n=t.width,o=t.height;if(!e.$clipStyles){e.$clipStyles=document.createElement("style"),e.$clipStyles.setAttribute("type","text/css"),e.$clipStyles.setAttribute("id","#jarallax-clip-"+e.instanceID);var i=document.head||document.getElementsByTagName("head")[0];i.appendChild(e.$clipStyles)}var a=["#jarallax-container-"+e.instanceID+" {","   clip: rect(0 "+n+"px "+o+"px 0);","   clip: rect(0, "+n+"px, "+o+"px, 0);","}"].join("\n");e.$clipStyles.styleSheet?e.$clipStyles.styleSheet.cssText=a:e.$clipStyles.innerHTML=a}},f.prototype.coverImage=function(){var e=this;if(e.image.width&&e.image.height){var t=e.image.$container.getBoundingClientRect(),n=t.width,o=t.height,i=t.left,l=e.image.width,s=e.image.height,c=e.options.speed,m="scroll"===e.options.type||"scroll-opacity"===e.options.type,p=0,u=0,d=o,g=0,f=0;m&&(p=c<0?c*Math.max(o,a):c*(o+a),c>1?d=Math.abs(p-a):c<0?d=p/c+Math.abs(p):d+=Math.abs(a-o)*(1-c),p/=2),u=d*l/s,u<n&&(u=n,d=u*s/l),e.bgPosVerticalCenter=0,!(m&&d<a)||r&&e.options.enableTransform||(e.bgPosVerticalCenter=(a-d)/2,d=a),m?(g=i+(n-u)/2,f=(a-d)/2):(g=(n-u)/2,f=(o-d)/2),r&&e.options.enableTransform&&e.parentWithTransform&&(g-=i),e.parallaxScrollDistance=p,e.css(e.image.$item,{width:u+"px",height:d+"px",marginLeft:g+"px",marginTop:f+"px"}),e.options.onCoverImage&&e.options.onCoverImage.call(e)}},f.prototype.isVisible=function(){return this.isElementInViewport||!1},f.prototype.onScroll=function(e){var t=this;if(t.image.width&&t.image.height){var n=t.$item.getBoundingClientRect(),o=n.top,l=n.height,s={position:"absolute",visibility:"visible",backgroundPosition:"50% 50%"},c=n;if(t.options.elementInViewport&&(c=t.options.elementInViewport.getBoundingClientRect()),t.isElementInViewport=c.bottom>=0&&c.right>=0&&c.top<=a&&c.left<=i,e||t.isElementInViewport){var m=Math.max(0,o),p=Math.max(0,l+o),u=Math.max(0,-o),g=Math.max(0,o+l-a),f=Math.max(0,l-(o+l-a)),h=Math.max(0,-o+a-l),y=1-2*(a-o)/(a+l),v=1;if(l<a?v=1-(u||g)/l:p<=a?v=p/a:f<=a&&(v=f/a),"opacity"!==t.options.type&&"scale-opacity"!==t.options.type&&"scroll-opacity"!==t.options.type||(s.transform="translate3d(0, 0, 0)",s.opacity=v),"scale"===t.options.type||"scale-opacity"===t.options.type){var x=1;t.options.speed<0?x-=t.options.speed*v:x+=t.options.speed*(1-v),s.transform="scale("+x+") translate3d(0, 0, 0)"}if("scroll"===t.options.type||"scroll-opacity"===t.options.type){var b=t.parallaxScrollDistance*y;r&&t.options.enableTransform?(t.parentWithTransform&&(b-=o),s.transform="translate3d(0, "+b+"px, 0)"):t.image.useImgTag?s.top=b+"px":(t.bgPosVerticalCenter&&(b+=t.bgPosVerticalCenter),s.backgroundPosition="50% "+b+"px"),s.position=d?"absolute":"fixed"}t.css(t.image.$item,s),t.options.onScroll&&t.options.onScroll.call(t,{section:n,beforeTop:m,beforeTopEnd:p,afterTop:u,beforeBottom:g,beforeBottomEnd:f,afterBottom:h,visiblePercent:v,fromViewportCenter:y})}}},n(e,"scroll",o),n(e,"resize",o),n(e,"orientationchange",o),n(e,"load",o);var h=function(e){("object"==typeof HTMLElement?e instanceof HTMLElement:e&&"object"==typeof e&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName)&&(e=[e]);var t,n=arguments[1],o=Array.prototype.slice.call(arguments,2),i=e.length,a=0;for(a;a<i;a++)if("object"==typeof n||"undefined"==typeof n?e[a].jarallax||(e[a].jarallax=new f(e[a],n)):e[a].jarallax&&(t=e[a].jarallax[n].apply(e[a].jarallax,o)),"undefined"!=typeof t)return t;return e};h.constructor=f;var y=e.jarallax;if(e.jarallax=h,e.jarallax.noConflict=function(){return e.jarallax=y,this},"undefined"!=typeof jQuery){var v=function(){var t=arguments||[];Array.prototype.unshift.call(t,this);var n=h.apply(e,t);return"object"!=typeof n?n:this};v.constructor=f;var x=jQuery.fn.jarallax;jQuery.fn.jarallax=v,jQuery.fn.jarallax.noConflict=function(){return jQuery.fn.jarallax=x,this}}n(e,"DOMContentLoaded",function(){h(document.querySelectorAll("[data-jarallax], [data-jarallax-video]"))})}(window);
/*
    The MIT License (MIT)

    Copyright (c) 2014 Dirk Groenen

    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the "Software"), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
    the Software, and to permit persons to whom the Software is furnished to do so,
    subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
*/

(function($){
    $.fn.viewportChecker = function(useroptions){
        // Define options and extend with user
        var options = {
            classToAdd: 'visible',
            classToRemove : 'invisible',
            classToAddForFullView : 'full-visible',
            removeClassAfterAnimation: false,
            offset: 100,
            repeat: false,
            invertBottomOffset: true,
            callbackFunction: function(elem, action){},
            scrollHorizontal: false,
            scrollBox: window
        };
        $.extend(options, useroptions);

        // Cache the given element and height of the browser
        var $elem = this,
            boxSize = {height: $(options.scrollBox).height(), width: $(options.scrollBox).width()},
            scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1 || navigator.userAgent.toLowerCase().indexOf('windows phone') != -1) ? 'body' : 'html');

        /*
         * Main method that checks the elements and adds or removes the class(es)
         */
        this.checkElements = function(){
            var viewportStart, viewportEnd;

            // Set some vars to check with
            if (!options.scrollHorizontal){
                viewportStart = $(scrollElem).scrollTop();
                viewportEnd = (viewportStart + boxSize.height);
            }
            else{
                viewportStart = $(scrollElem).scrollLeft();
                viewportEnd = (viewportStart + boxSize.width);
            }

            // Loop through all given dom elements
            $elem.each(function(){
                var $obj = $(this),
                    objOptions = {},
                    attrOptions = {};

                //  Get any individual attribution data
                if ($obj.data('vp-add-class'))
                    attrOptions.classToAdd = $obj.data('vp-add-class');
                if ($obj.data('vp-remove-class'))
                    attrOptions.classToRemove = $obj.data('vp-remove-class');
                if ($obj.data('vp-add-class-full-view'))
                    attrOptions.classToAddForFullView = $obj.data('vp-add-class-full-view');
                if ($obj.data('vp-keep-add-class'))
                    attrOptions.removeClassAfterAnimation = $obj.data('vp-remove-after-animation');
                if ($obj.data('vp-offset'))
                    attrOptions.offset = $obj.data('vp-offset');
                if ($obj.data('vp-repeat'))
                    attrOptions.repeat = $obj.data('vp-repeat');
                if ($obj.data('vp-scrollHorizontal'))
                    attrOptions.scrollHorizontal = $obj.data('vp-scrollHorizontal');
                if ($obj.data('vp-invertBottomOffset'))
                    attrOptions.scrollHorizontal = $obj.data('vp-invertBottomOffset');

                // Extend objOptions with data attributes and default options
                $.extend(objOptions, options);
                $.extend(objOptions, attrOptions);

                // If class already exists; quit
                if ($obj.data('vp-animated') && !objOptions.repeat){
                    return;
                }

                // Check if the offset is percentage based
                if (String(objOptions.offset).indexOf("%") > 0)
                    objOptions.offset = (parseInt(objOptions.offset) / 100) * boxSize.height;

                // Get the raw start and end positions
                var rawStart = (!objOptions.scrollHorizontal) ? $obj.offset().top : $obj.offset().left,
                    rawEnd = (!objOptions.scrollHorizontal) ? rawStart + $obj.height() : rawStart + $obj.width();

                // Add the defined offset
                var elemStart = Math.round( rawStart ) + objOptions.offset,
                    elemEnd = (!objOptions.scrollHorizontal) ? elemStart + $obj.height() : elemStart + $obj.width();

                if (objOptions.invertBottomOffset)
                    elemEnd -= (objOptions.offset * 2);

                // Add class if in viewport
                if ((elemStart < viewportEnd) && (elemEnd > viewportStart)){

                    // Remove class
                    $obj.removeClass(objOptions.classToRemove);
                    $obj.addClass(objOptions.classToAdd);

                    // Do the callback function. Callback wil send the jQuery object as parameter
                    objOptions.callbackFunction($obj, "add");

                    // Check if full element is in view
                    if (rawEnd <= viewportEnd && rawStart >= viewportStart)
                        $obj.addClass(objOptions.classToAddForFullView);
                    else
                        $obj.removeClass(objOptions.classToAddForFullView);

                    // Set element as already animated
                    $obj.data('vp-animated', true);

                    if (objOptions.removeClassAfterAnimation) {
                        $obj.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                            $obj.removeClass(objOptions.classToAdd);
                        });
                    }

                // Remove class if not in viewport and repeat is true
                } else if ($obj.hasClass(objOptions.classToAdd) && (objOptions.repeat)){
                    $obj.removeClass(objOptions.classToAdd + " " + objOptions.classToAddForFullView);

                    // Do the callback function.
                    objOptions.callbackFunction($obj, "remove");

                    // Remove already-animated-flag
                    $obj.data('vp-animated', false);
                }
            });

        };

        /**
         * Binding the correct event listener is still a tricky thing.
         * People have expierenced sloppy scrolling when both scroll and touch
         * events are added, but to make sure devices with both scroll and touch
         * are handles too we always have to add the window.scroll event
         *
         * @see  https://github.com/dirkgroenen/jQuery-viewport-checker/issues/25
         * @see  https://github.com/dirkgroenen/jQuery-viewport-checker/issues/27
         */

        // Select the correct events
        if( 'ontouchstart' in window || 'onmsgesturechange' in window ){
            // Device with touchscreen
            $(document).bind("touchmove MSPointerMove pointermove", this.checkElements);
        }

        // Always load on window load
        $(options.scrollBox).bind("load scroll", this.checkElements);

        // On resize change the height var
        $(window).resize(function(e){
            boxSize = {height: $(options.scrollBox).height(), width: $(options.scrollBox).width()};
            $elem.checkElements();
        });

        // trigger inital check if elements already visible
        this.checkElements();

        // Default jquery plugin behaviour
        return this;
    };
})(jQuery);

/*!
 * @fileOverview TouchSwipe - jQuery Plugin
 * @version 1.6.18
 *
 * @author Matt Bryson http://www.github.com/mattbryson
 * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 * @see http://labs.rampinteractive.co.uk/touchSwipe/
 * @see http://plugins.jquery.com/project/touchSwipe
 * @license
 * Copyright (c) 2010-2015 Matt Bryson
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */
!function(factory){"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],factory):factory("undefined"!=typeof module&&module.exports?require("jquery"):jQuery)}(function($){"use strict";function init(options){return!options||void 0!==options.allowPageScroll||void 0===options.swipe&&void 0===options.swipeStatus||(options.allowPageScroll=NONE),void 0!==options.click&&void 0===options.tap&&(options.tap=options.click),options||(options={}),options=$.extend({},$.fn.swipe.defaults,options),this.each(function(){var $this=$(this),plugin=$this.data(PLUGIN_NS);plugin||(plugin=new TouchSwipe(this,options),$this.data(PLUGIN_NS,plugin))})}function TouchSwipe(element,options){function touchStart(jqEvent){if(!(getTouchInProgress()||$(jqEvent.target).closest(options.excludedElements,$element).length>0)){var event=jqEvent.originalEvent?jqEvent.originalEvent:jqEvent;if(!event.pointerType||"mouse"!=event.pointerType||0!=options.fallbackToMouseEvents){var ret,touches=event.touches,evt=touches?touches[0]:event;return phase=PHASE_START,touches?fingerCount=touches.length:options.preventDefaultEvents!==!1&&jqEvent.preventDefault(),distance=0,direction=null,currentDirection=null,pinchDirection=null,duration=0,startTouchesDistance=0,endTouchesDistance=0,pinchZoom=1,pinchDistance=0,maximumsMap=createMaximumsData(),cancelMultiFingerRelease(),createFingerData(0,evt),!touches||fingerCount===options.fingers||options.fingers===ALL_FINGERS||hasPinches()?(startTime=getTimeStamp(),2==fingerCount&&(createFingerData(1,touches[1]),startTouchesDistance=endTouchesDistance=calculateTouchesDistance(fingerData[0].start,fingerData[1].start)),(options.swipeStatus||options.pinchStatus)&&(ret=triggerHandler(event,phase))):ret=!1,ret===!1?(phase=PHASE_CANCEL,triggerHandler(event,phase),ret):(options.hold&&(holdTimeout=setTimeout($.proxy(function(){$element.trigger("hold",[event.target]),options.hold&&(ret=options.hold.call($element,event,event.target))},this),options.longTapThreshold)),setTouchInProgress(!0),null)}}}function touchMove(jqEvent){var event=jqEvent.originalEvent?jqEvent.originalEvent:jqEvent;if(phase!==PHASE_END&&phase!==PHASE_CANCEL&&!inMultiFingerRelease()){var ret,touches=event.touches,evt=touches?touches[0]:event,currentFinger=updateFingerData(evt);if(endTime=getTimeStamp(),touches&&(fingerCount=touches.length),options.hold&&clearTimeout(holdTimeout),phase=PHASE_MOVE,2==fingerCount&&(0==startTouchesDistance?(createFingerData(1,touches[1]),startTouchesDistance=endTouchesDistance=calculateTouchesDistance(fingerData[0].start,fingerData[1].start)):(updateFingerData(touches[1]),endTouchesDistance=calculateTouchesDistance(fingerData[0].end,fingerData[1].end),pinchDirection=calculatePinchDirection(fingerData[0].end,fingerData[1].end)),pinchZoom=calculatePinchZoom(startTouchesDistance,endTouchesDistance),pinchDistance=Math.abs(startTouchesDistance-endTouchesDistance)),fingerCount===options.fingers||options.fingers===ALL_FINGERS||!touches||hasPinches()){if(direction=calculateDirection(currentFinger.start,currentFinger.end),currentDirection=calculateDirection(currentFinger.last,currentFinger.end),validateDefaultEvent(jqEvent,currentDirection),distance=calculateDistance(currentFinger.start,currentFinger.end),duration=calculateDuration(),setMaxDistance(direction,distance),ret=triggerHandler(event,phase),!options.triggerOnTouchEnd||options.triggerOnTouchLeave){var inBounds=!0;if(options.triggerOnTouchLeave){var bounds=getbounds(this);inBounds=isInBounds(currentFinger.end,bounds)}!options.triggerOnTouchEnd&&inBounds?phase=getNextPhase(PHASE_MOVE):options.triggerOnTouchLeave&&!inBounds&&(phase=getNextPhase(PHASE_END)),phase!=PHASE_CANCEL&&phase!=PHASE_END||triggerHandler(event,phase)}}else phase=PHASE_CANCEL,triggerHandler(event,phase);ret===!1&&(phase=PHASE_CANCEL,triggerHandler(event,phase))}}function touchEnd(jqEvent){var event=jqEvent.originalEvent?jqEvent.originalEvent:jqEvent,touches=event.touches;if(touches){if(touches.length&&!inMultiFingerRelease())return startMultiFingerRelease(event),!0;if(touches.length&&inMultiFingerRelease())return!0}return inMultiFingerRelease()&&(fingerCount=fingerCountAtRelease),endTime=getTimeStamp(),duration=calculateDuration(),didSwipeBackToCancel()||!validateSwipeDistance()?(phase=PHASE_CANCEL,triggerHandler(event,phase)):options.triggerOnTouchEnd||options.triggerOnTouchEnd===!1&&phase===PHASE_MOVE?(options.preventDefaultEvents!==!1&&jqEvent.preventDefault(),phase=PHASE_END,triggerHandler(event,phase)):!options.triggerOnTouchEnd&&hasTap()?(phase=PHASE_END,triggerHandlerForGesture(event,phase,TAP)):phase===PHASE_MOVE&&(phase=PHASE_CANCEL,triggerHandler(event,phase)),setTouchInProgress(!1),null}function touchCancel(){fingerCount=0,endTime=0,startTime=0,startTouchesDistance=0,endTouchesDistance=0,pinchZoom=1,cancelMultiFingerRelease(),setTouchInProgress(!1)}function touchLeave(jqEvent){var event=jqEvent.originalEvent?jqEvent.originalEvent:jqEvent;options.triggerOnTouchLeave&&(phase=getNextPhase(PHASE_END),triggerHandler(event,phase))}function removeListeners(){$element.unbind(START_EV,touchStart),$element.unbind(CANCEL_EV,touchCancel),$element.unbind(MOVE_EV,touchMove),$element.unbind(END_EV,touchEnd),LEAVE_EV&&$element.unbind(LEAVE_EV,touchLeave),setTouchInProgress(!1)}function getNextPhase(currentPhase){var nextPhase=currentPhase,validTime=validateSwipeTime(),validDistance=validateSwipeDistance(),didCancel=didSwipeBackToCancel();return!validTime||didCancel?nextPhase=PHASE_CANCEL:!validDistance||currentPhase!=PHASE_MOVE||options.triggerOnTouchEnd&&!options.triggerOnTouchLeave?!validDistance&&currentPhase==PHASE_END&&options.triggerOnTouchLeave&&(nextPhase=PHASE_CANCEL):nextPhase=PHASE_END,nextPhase}function triggerHandler(event,phase){var ret,touches=event.touches;return(didSwipe()||hasSwipes())&&(ret=triggerHandlerForGesture(event,phase,SWIPE)),(didPinch()||hasPinches())&&ret!==!1&&(ret=triggerHandlerForGesture(event,phase,PINCH)),didDoubleTap()&&ret!==!1?ret=triggerHandlerForGesture(event,phase,DOUBLE_TAP):didLongTap()&&ret!==!1?ret=triggerHandlerForGesture(event,phase,LONG_TAP):didTap()&&ret!==!1&&(ret=triggerHandlerForGesture(event,phase,TAP)),phase===PHASE_CANCEL&&touchCancel(event),phase===PHASE_END&&(touches?touches.length||touchCancel(event):touchCancel(event)),ret}function triggerHandlerForGesture(event,phase,gesture){var ret;if(gesture==SWIPE){if($element.trigger("swipeStatus",[phase,direction||null,distance||0,duration||0,fingerCount,fingerData,currentDirection]),options.swipeStatus&&(ret=options.swipeStatus.call($element,event,phase,direction||null,distance||0,duration||0,fingerCount,fingerData,currentDirection),ret===!1))return!1;if(phase==PHASE_END&&validateSwipe()){if(clearTimeout(singleTapTimeout),clearTimeout(holdTimeout),$element.trigger("swipe",[direction,distance,duration,fingerCount,fingerData,currentDirection]),options.swipe&&(ret=options.swipe.call($element,event,direction,distance,duration,fingerCount,fingerData,currentDirection),ret===!1))return!1;switch(direction){case LEFT:$element.trigger("swipeLeft",[direction,distance,duration,fingerCount,fingerData,currentDirection]),options.swipeLeft&&(ret=options.swipeLeft.call($element,event,direction,distance,duration,fingerCount,fingerData,currentDirection));break;case RIGHT:$element.trigger("swipeRight",[direction,distance,duration,fingerCount,fingerData,currentDirection]),options.swipeRight&&(ret=options.swipeRight.call($element,event,direction,distance,duration,fingerCount,fingerData,currentDirection));break;case UP:$element.trigger("swipeUp",[direction,distance,duration,fingerCount,fingerData,currentDirection]),options.swipeUp&&(ret=options.swipeUp.call($element,event,direction,distance,duration,fingerCount,fingerData,currentDirection));break;case DOWN:$element.trigger("swipeDown",[direction,distance,duration,fingerCount,fingerData,currentDirection]),options.swipeDown&&(ret=options.swipeDown.call($element,event,direction,distance,duration,fingerCount,fingerData,currentDirection))}}}if(gesture==PINCH){if($element.trigger("pinchStatus",[phase,pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData]),options.pinchStatus&&(ret=options.pinchStatus.call($element,event,phase,pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData),ret===!1))return!1;if(phase==PHASE_END&&validatePinch())switch(pinchDirection){case IN:$element.trigger("pinchIn",[pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData]),options.pinchIn&&(ret=options.pinchIn.call($element,event,pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData));break;case OUT:$element.trigger("pinchOut",[pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData]),options.pinchOut&&(ret=options.pinchOut.call($element,event,pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData))}}return gesture==TAP?phase!==PHASE_CANCEL&&phase!==PHASE_END||(clearTimeout(singleTapTimeout),clearTimeout(holdTimeout),hasDoubleTap()&&!inDoubleTap()?(doubleTapStartTime=getTimeStamp(),singleTapTimeout=setTimeout($.proxy(function(){doubleTapStartTime=null,$element.trigger("tap",[event.target]),options.tap&&(ret=options.tap.call($element,event,event.target))},this),options.doubleTapThreshold)):(doubleTapStartTime=null,$element.trigger("tap",[event.target]),options.tap&&(ret=options.tap.call($element,event,event.target)))):gesture==DOUBLE_TAP?phase!==PHASE_CANCEL&&phase!==PHASE_END||(clearTimeout(singleTapTimeout),clearTimeout(holdTimeout),doubleTapStartTime=null,$element.trigger("doubletap",[event.target]),options.doubleTap&&(ret=options.doubleTap.call($element,event,event.target))):gesture==LONG_TAP&&(phase!==PHASE_CANCEL&&phase!==PHASE_END||(clearTimeout(singleTapTimeout),doubleTapStartTime=null,$element.trigger("longtap",[event.target]),options.longTap&&(ret=options.longTap.call($element,event,event.target)))),ret}function validateSwipeDistance(){var valid=!0;return null!==options.threshold&&(valid=distance>=options.threshold),valid}function didSwipeBackToCancel(){var cancelled=!1;return null!==options.cancelThreshold&&null!==direction&&(cancelled=getMaxDistance(direction)-distance>=options.cancelThreshold),cancelled}function validatePinchDistance(){return null!==options.pinchThreshold?pinchDistance>=options.pinchThreshold:!0}function validateSwipeTime(){var result;return result=options.maxTimeThreshold?!(duration>=options.maxTimeThreshold):!0}function validateDefaultEvent(jqEvent,direction){if(options.preventDefaultEvents!==!1)if(options.allowPageScroll===NONE)jqEvent.preventDefault();else{var auto=options.allowPageScroll===AUTO;switch(direction){case LEFT:(options.swipeLeft&&auto||!auto&&options.allowPageScroll!=HORIZONTAL)&&jqEvent.preventDefault();break;case RIGHT:(options.swipeRight&&auto||!auto&&options.allowPageScroll!=HORIZONTAL)&&jqEvent.preventDefault();break;case UP:(options.swipeUp&&auto||!auto&&options.allowPageScroll!=VERTICAL)&&jqEvent.preventDefault();break;case DOWN:(options.swipeDown&&auto||!auto&&options.allowPageScroll!=VERTICAL)&&jqEvent.preventDefault();break;case NONE:}}}function validatePinch(){var hasCorrectFingerCount=validateFingers(),hasEndPoint=validateEndPoint(),hasCorrectDistance=validatePinchDistance();return hasCorrectFingerCount&&hasEndPoint&&hasCorrectDistance}function hasPinches(){return!!(options.pinchStatus||options.pinchIn||options.pinchOut)}function didPinch(){return!(!validatePinch()||!hasPinches())}function validateSwipe(){var hasValidTime=validateSwipeTime(),hasValidDistance=validateSwipeDistance(),hasCorrectFingerCount=validateFingers(),hasEndPoint=validateEndPoint(),didCancel=didSwipeBackToCancel(),valid=!didCancel&&hasEndPoint&&hasCorrectFingerCount&&hasValidDistance&&hasValidTime;return valid}function hasSwipes(){return!!(options.swipe||options.swipeStatus||options.swipeLeft||options.swipeRight||options.swipeUp||options.swipeDown)}function didSwipe(){return!(!validateSwipe()||!hasSwipes())}function validateFingers(){return fingerCount===options.fingers||options.fingers===ALL_FINGERS||!SUPPORTS_TOUCH}function validateEndPoint(){return 0!==fingerData[0].end.x}function hasTap(){return!!options.tap}function hasDoubleTap(){return!!options.doubleTap}function hasLongTap(){return!!options.longTap}function validateDoubleTap(){if(null==doubleTapStartTime)return!1;var now=getTimeStamp();return hasDoubleTap()&&now-doubleTapStartTime<=options.doubleTapThreshold}function inDoubleTap(){return validateDoubleTap()}function validateTap(){return(1===fingerCount||!SUPPORTS_TOUCH)&&(isNaN(distance)||distance<options.threshold)}function validateLongTap(){return duration>options.longTapThreshold&&DOUBLE_TAP_THRESHOLD>distance}function didTap(){return!(!validateTap()||!hasTap())}function didDoubleTap(){return!(!validateDoubleTap()||!hasDoubleTap())}function didLongTap(){return!(!validateLongTap()||!hasLongTap())}function startMultiFingerRelease(event){previousTouchEndTime=getTimeStamp(),fingerCountAtRelease=event.touches.length+1}function cancelMultiFingerRelease(){previousTouchEndTime=0,fingerCountAtRelease=0}function inMultiFingerRelease(){var withinThreshold=!1;if(previousTouchEndTime){var diff=getTimeStamp()-previousTouchEndTime;diff<=options.fingerReleaseThreshold&&(withinThreshold=!0)}return withinThreshold}function getTouchInProgress(){return!($element.data(PLUGIN_NS+"_intouch")!==!0)}function setTouchInProgress(val){$element&&(val===!0?($element.bind(MOVE_EV,touchMove),$element.bind(END_EV,touchEnd),LEAVE_EV&&$element.bind(LEAVE_EV,touchLeave)):($element.unbind(MOVE_EV,touchMove,!1),$element.unbind(END_EV,touchEnd,!1),LEAVE_EV&&$element.unbind(LEAVE_EV,touchLeave,!1)),$element.data(PLUGIN_NS+"_intouch",val===!0))}function createFingerData(id,evt){var f={start:{x:0,y:0},last:{x:0,y:0},end:{x:0,y:0}};return f.start.x=f.last.x=f.end.x=evt.pageX||evt.clientX,f.start.y=f.last.y=f.end.y=evt.pageY||evt.clientY,fingerData[id]=f,f}function updateFingerData(evt){var id=void 0!==evt.identifier?evt.identifier:0,f=getFingerData(id);return null===f&&(f=createFingerData(id,evt)),f.last.x=f.end.x,f.last.y=f.end.y,f.end.x=evt.pageX||evt.clientX,f.end.y=evt.pageY||evt.clientY,f}function getFingerData(id){return fingerData[id]||null}function setMaxDistance(direction,distance){direction!=NONE&&(distance=Math.max(distance,getMaxDistance(direction)),maximumsMap[direction].distance=distance)}function getMaxDistance(direction){return maximumsMap[direction]?maximumsMap[direction].distance:void 0}function createMaximumsData(){var maxData={};return maxData[LEFT]=createMaximumVO(LEFT),maxData[RIGHT]=createMaximumVO(RIGHT),maxData[UP]=createMaximumVO(UP),maxData[DOWN]=createMaximumVO(DOWN),maxData}function createMaximumVO(dir){return{direction:dir,distance:0}}function calculateDuration(){return endTime-startTime}function calculateTouchesDistance(startPoint,endPoint){var diffX=Math.abs(startPoint.x-endPoint.x),diffY=Math.abs(startPoint.y-endPoint.y);return Math.round(Math.sqrt(diffX*diffX+diffY*diffY))}function calculatePinchZoom(startDistance,endDistance){var percent=endDistance/startDistance*1;return percent.toFixed(2)}function calculatePinchDirection(){return 1>pinchZoom?OUT:IN}function calculateDistance(startPoint,endPoint){return Math.round(Math.sqrt(Math.pow(endPoint.x-startPoint.x,2)+Math.pow(endPoint.y-startPoint.y,2)))}function calculateAngle(startPoint,endPoint){var x=startPoint.x-endPoint.x,y=endPoint.y-startPoint.y,r=Math.atan2(y,x),angle=Math.round(180*r/Math.PI);return 0>angle&&(angle=360-Math.abs(angle)),angle}function calculateDirection(startPoint,endPoint){if(comparePoints(startPoint,endPoint))return NONE;var angle=calculateAngle(startPoint,endPoint);return 45>=angle&&angle>=0?LEFT:360>=angle&&angle>=315?LEFT:angle>=135&&225>=angle?RIGHT:angle>45&&135>angle?DOWN:UP}function getTimeStamp(){var now=new Date;return now.getTime()}function getbounds(el){el=$(el);var offset=el.offset(),bounds={left:offset.left,right:offset.left+el.outerWidth(),top:offset.top,bottom:offset.top+el.outerHeight()};return bounds}function isInBounds(point,bounds){return point.x>bounds.left&&point.x<bounds.right&&point.y>bounds.top&&point.y<bounds.bottom}function comparePoints(pointA,pointB){return pointA.x==pointB.x&&pointA.y==pointB.y}var options=$.extend({},options),useTouchEvents=SUPPORTS_TOUCH||SUPPORTS_POINTER||!options.fallbackToMouseEvents,START_EV=useTouchEvents?SUPPORTS_POINTER?SUPPORTS_POINTER_IE10?"MSPointerDown":"pointerdown":"touchstart":"mousedown",MOVE_EV=useTouchEvents?SUPPORTS_POINTER?SUPPORTS_POINTER_IE10?"MSPointerMove":"pointermove":"touchmove":"mousemove",END_EV=useTouchEvents?SUPPORTS_POINTER?SUPPORTS_POINTER_IE10?"MSPointerUp":"pointerup":"touchend":"mouseup",LEAVE_EV=useTouchEvents?SUPPORTS_POINTER?"mouseleave":null:"mouseleave",CANCEL_EV=SUPPORTS_POINTER?SUPPORTS_POINTER_IE10?"MSPointerCancel":"pointercancel":"touchcancel",distance=0,direction=null,currentDirection=null,duration=0,startTouchesDistance=0,endTouchesDistance=0,pinchZoom=1,pinchDistance=0,pinchDirection=0,maximumsMap=null,$element=$(element),phase="start",fingerCount=0,fingerData={},startTime=0,endTime=0,previousTouchEndTime=0,fingerCountAtRelease=0,doubleTapStartTime=0,singleTapTimeout=null,holdTimeout=null;try{$element.bind(START_EV,touchStart),$element.bind(CANCEL_EV,touchCancel)}catch(e){$.error("events not supported "+START_EV+","+CANCEL_EV+" on jQuery.swipe")}this.enable=function(){return this.disable(),$element.bind(START_EV,touchStart),$element.bind(CANCEL_EV,touchCancel),$element},this.disable=function(){return removeListeners(),$element},this.destroy=function(){removeListeners(),$element.data(PLUGIN_NS,null),$element=null},this.option=function(property,value){if("object"==typeof property)options=$.extend(options,property);else if(void 0!==options[property]){if(void 0===value)return options[property];options[property]=value}else{if(!property)return options;$.error("Option "+property+" does not exist on jQuery.swipe.options")}return null}}var VERSION="1.6.18",LEFT="left",RIGHT="right",UP="up",DOWN="down",IN="in",OUT="out",NONE="none",AUTO="auto",SWIPE="swipe",PINCH="pinch",TAP="tap",DOUBLE_TAP="doubletap",LONG_TAP="longtap",HORIZONTAL="horizontal",VERTICAL="vertical",ALL_FINGERS="all",DOUBLE_TAP_THRESHOLD=10,PHASE_START="start",PHASE_MOVE="move",PHASE_END="end",PHASE_CANCEL="cancel",SUPPORTS_TOUCH="ontouchstart"in window,SUPPORTS_POINTER_IE10=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled&&!SUPPORTS_TOUCH,SUPPORTS_POINTER=(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&!SUPPORTS_TOUCH,PLUGIN_NS="TouchSwipe",defaults={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:!0,triggerOnTouchLeave:!1,allowPageScroll:"auto",fallbackToMouseEvents:!0,excludedElements:".noSwipe",preventDefaultEvents:!0};$.fn.swipe=function(method){var $this=$(this),plugin=$this.data(PLUGIN_NS);if(plugin&&"string"==typeof method){if(plugin[method])return plugin[method].apply(plugin,Array.prototype.slice.call(arguments,1));$.error("Method "+method+" does not exist on jQuery.swipe")}else if(plugin&&"object"==typeof method)plugin.option.apply(plugin,arguments);else if(!(plugin||"object"!=typeof method&&method))return init.apply(this,arguments);return $this},$.fn.swipe.version=VERSION,$.fn.swipe.defaults=defaults,$.fn.swipe.phases={PHASE_START:PHASE_START,PHASE_MOVE:PHASE_MOVE,PHASE_END:PHASE_END,PHASE_CANCEL:PHASE_CANCEL},$.fn.swipe.directions={LEFT:LEFT,RIGHT:RIGHT,UP:UP,DOWN:DOWN,IN:IN,OUT:OUT},$.fn.swipe.pageScroll={NONE:NONE,HORIZONTAL:HORIZONTAL,VERTICAL:VERTICAL,AUTO:AUTO},$.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,FOUR:4,FIVE:5,ALL:ALL_FINGERS}});
/*___________________________________________________________________________________________________________________________________________________
 _ jquery.mb.components                                                                                                                             _
 _                                                                                                                                                  _
 _ file: jquery.mb.vimeo_player.js                                                                                                                   _
 _ last modified: 26/12/16 15.39                                                                                                                    _
 _                                                                                                                                                  _
 _ Open Lab s.r.l., Florence - Italy                                                                                                                _
 _                                                                                                                                                  _
 _ email: matteo@open-lab.com                                                                                                                       _
 _ site: http://pupunzi.com                                                                                                                         _
 _       http://open-lab.com                                                                                                                        _
 _ blog: http://pupunzi.open-lab.com                                                                                                                _
 _ Q&A:  http://jquery.pupunzi.com                                                                                                                  _
 _                                                                                                                                                  _
 _ Licences: MIT, GPL                                                                                                                               _
 _    http://www.opensource.org/licenses/mit-license.php                                                                                            _
 _    http://www.gnu.org/licenses/gpl.html                                                                                                          _
 _                                                                                                                                                  _
 _ Copyright (c) 2001-2016. Matteo Bicocchi (Pupunzi);                                                                                              _
 ___________________________________________________________________________________________________________________________________________________*/

var get_vimeo_videoID = function( url ) {

	var videoID;
	if( url.indexOf( "vimeo.com" ) > 0 ) {
		videoID = url.substr( url.lastIndexOf( "/" ) + 1, url.length );
	} else {
		videoID = url.length > 15 ? null : url;
	}

	return videoID
};


( function( $ ) {
	jQuery.vimeo_player = {
		name: "jquery.mb.vimeo_player",
		author: "Matteo Bicocchi (pupunzi)",
		version: "1.0.6",
		build: "373",
		defaults: {
			containment: "body",
			ratio: "16/9", // "auto", "16/9", "4/3"
			videoURL: null,
			startAt: 0,
			stopAt: 0,
			autoPlay: true,
			vol: 50, // 1 to 100
			addRaster: false,
			opacity: 1,
			mute: false,
			loop: true,
			showControls: true,
			show_vimeo_logo: true,
			stopMovieOnBlur: true,
			realfullscreen: true,
			mobileFallbackImage: null,
			gaTrack: true,
			optimizeDisplay: true,
			mask: false,
			align: "center,center", // top,bottom,left,right
			onReady: function( player ) {}
		},
		/**
		 *  @fontface icons
		 *  */
		controls: {
			play: "P",
			pause: "p",
			mute: "M",
			unmute: "A",
			fullscreen: "O",
			showSite: "R",
			logo: "V"
		},
		buildPlayer: function( options ) {

			var isIframe = function() {
				var isIfr = false;
				try {
					if( self.location.href != top.location.href ) isIfr = true;
				} catch( e ) {
					isIfr = true;
				}
				return isIfr;
			};


			var script = document.createElement( 'script' );
			script.src = "https://player.vimeo.com/api/player.js";
			script.onload = function() {
				jQuery( document ).trigger( "vimeo_api_loaded" );
			};
			document.head.appendChild( script );

			return this.each( function() {

				var vimeo_player = this;
				var $vimeo_player = jQuery( vimeo_player );
				vimeo_player.loop = 0;
				vimeo_player.opt = {};
				vimeo_player.state = {};
				vimeo_player.id = vimeo_player.id || "YTP_" + new Date().getTime();
				$vimeo_player.addClass( "vimeo_player" );

				var property = $vimeo_player.data( "property" ) && typeof $vimeo_player.data( "property" ) == "string" ? eval( '(' + $vimeo_player.data( "property" ) + ')' ) : $vimeo_player.data( "property" );

				jQuery.extend( vimeo_player.opt, jQuery.vimeo_player.defaults, options, property );

				vimeo_player.opt.ratio = vimeo_player.opt.ratio == "auto" ? "16/9" : vimeo_player.opt.ratio;

				if( eval( vimeo_player.opt.loop ) )
					vimeo_player.opt.loop = 9999;

				vimeo_player.isRetina = ( window.retina || window.devicePixelRatio > 1 );


				vimeo_player.canGoFullScreen = !( jQuery.browser.msie || jQuery.browser.opera || isIframe() );
				if( !vimeo_player.canGoFullScreen ) vimeo_player.opt.realfullscreen = false;

				vimeo_player.isAlone = false;
				vimeo_player.hasFocus = true;

				vimeo_player.videoID = this.opt.videoURL ? get_vimeo_videoID( this.opt.videoURL ) : $vimeo_player.attr( "href" ) ? get_vimeo_videoID( $vimeo_player.attr( "href" ) ) : false;

				vimeo_player.isSelf = vimeo_player.opt.containment == "self";
				vimeo_player.opt.containment = vimeo_player.opt.containment == "self" ? jQuery( this ) : jQuery( vimeo_player.opt.containment );
				vimeo_player.isBackground = vimeo_player.opt.containment.is( "body" );

				if( vimeo_player.isBackground && vimeo_player.backgroundIsInited )
					return;

				vimeo_player.canPlayOnMobile = vimeo_player.isSelf && jQuery( this ).children().length === 0;

				if( !vimeo_player.isSelf ) {
					$vimeo_player.hide();
				}

				var overlay = jQuery( "<div/>" ).css( {
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%"
				} ).addClass( "vimeo_player_overlay" );

				if( vimeo_player.isSelf ) {
					// overlay.on( "click", function() {
					// 	$vimeo_player.togglePlay();
					// } )
				}

				var playerID = "vimeo_player_" + vimeo_player.id;

				var wrapper = jQuery( "<div/>" ).addClass( "vimeo_player_wrapper" ).attr( "id", "vimeo_player_wrapper_" + playerID );
				wrapper.css( {
					position: "absolute",
					zIndex: 0,
					minWidth: "100%",
					minHeight: "100%",
					left: 0,
					top: 0,
					overflow: "hidden",
					opacity: 0
				} );

				vimeo_player.playerBox = jQuery( "<iframe/>" ).attr( "id", playerID ).addClass( "playerBox" );
				vimeo_player.playerBox.css( {
					position: "absolute",
					zIndex: 0,
					width: "100%",
					height: "100%",
					top: -10,
					frameBorder: 0,
					overflow: "hidden",
					left: 0
				} ).attr( {
					src: "https://player.vimeo.com/video/" + vimeo_player.videoID + "?background=1&autopause=0"
				} );

				if( !jQuery.browser.mobile || vimeo_player.canPlayOnMobile )
					wrapper.append( vimeo_player.playerBox );
				else {
					if( vimeo_player.opt.mobileFallbackImage ) {
						wrapper.css( {
							backgroundImage: "url(" + vimeo_player.opt.mobileFallbackImage + ")",
							backgroundPosition: "center center",
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
							opacity: 1
						} )
					};

					$vimeo_player.remove();
					return;
				}

				vimeo_player.opt.containment.children().not( "script, style" ).each( function() {
					if( jQuery( this ).css( "position" ) == "static" ) jQuery( this ).css( "position", "relative" );
				} );

				if( vimeo_player.isBackground ) {
					jQuery( "body" ).css( {
						boxSizing: "border-box"
					} );

					wrapper.css( {
						position: "fixed",
						top: 0,
						left: 0,
						zIndex: 0
					} );

				} else if( vimeo_player.opt.containment.css( "position" ) == "static" )
					vimeo_player.opt.containment.css( {
						position: "relative"
					} );

				vimeo_player.opt.containment.prepend( wrapper );
				vimeo_player.wrapper = wrapper;

				vimeo_player.playerBox.css( {
					opacity: 1
				} );

				if( !jQuery.browser.mobile ) {
					vimeo_player.playerBox.after( overlay );
					vimeo_player.overlay = overlay;
				}

				if( !vimeo_player.isBackground ) {
					overlay.on( "mouseenter", function() {
						if( vimeo_player.controlBar && vimeo_player.controlBar.length )
							vimeo_player.controlBar.addClass( "visible" );
					} ).on( "mouseleave", function() {
						if( vimeo_player.controlBar && vimeo_player.controlBar.length )
							vimeo_player.controlBar.removeClass( "visible" );
					} );
				}

				jQuery( document ).on( "vimeo_api_loaded", function() {

					vimeo_player.player = new Vimeo.Player( playerID, options );
					vimeo_player.player.ready().then( function() {

						var VEvent;

						function start() {
							vimeo_player.isReady = true;

							if( vimeo_player.opt.mute )
								setTimeout( function() {
									$vimeo_player.v_mute();
								}, 1000 );

							if( vimeo_player.opt.showControls )
								jQuery.vimeo_player.buildControls( vimeo_player );

							if( vimeo_player.opt.autoPlay )
								setTimeout( function() {

									$vimeo_player.v_play();

									setTimeout( function() {
										VEvent = jQuery.Event( 'VPStart' );
										$vimeo_player.trigger( VEvent );
									}, 1500 )

								}, 100 );
							else
								$vimeo_player.v_pause();

							VEvent = jQuery.Event( 'VPReady' );
							$vimeo_player.trigger( VEvent );

						}

						if( vimeo_player.opt.startAt ) {

							vimeo_player.player.play().then( function() {
								vimeo_player.player.pause();
							} );

							$vimeo_player.v_seekTo( vimeo_player.opt.startAt, function() {
								start()
							} );

						} else
							start();

						$vimeo_player.v_optimize_display();
						jQuery( window ).off( "resize.vimeo_player_" + vimeo_player.id ).on( "resize.vimeo_player_" + vimeo_player.id, function() {
							$vimeo_player.v_optimize_display();
						} );

						//PROGRESS
						vimeo_player.player.on( "progress", function( data ) {
							console.debug( "progress:: ", data );
						} );

						//ERROR
						vimeo_player.player.on( "error", function( data ) {
							vimeo_player.state = -1;
							//console.debug( "error:: ", data );
							// Trigger state events
							VEvent = jQuery.Event( 'VPError' );
							VEvent.error = data;
							$vimeo_player.trigger( VEvent );
						} );

						//PLAY
						vimeo_player.player.on( "play", function( data ) {
							vimeo_player.state = 1;
							$vimeo_player.trigger( "change_state" );

							if( vimeo_player.controlBar && vimeo_player.controlBar.length )
								vimeo_player.controlBar.find( ".vimeo_player_pause" ).html( jQuery.vimeo_player.controls.pause );

							if( typeof _gaq != "undefined" && eval( vimeo_player.opt.gaTrack ) ) _gaq.push( [ '_trackEvent', 'vimeo_player', 'Play', vimeo_player.videoID ] );
							if( typeof ga != "undefined" && eval( vimeo_player.opt.gaTrack ) ) ga( 'send', 'event', 'vimeo_player', 'play', vimeo_player.videoID );

							// Trigger state events
							VEvent = jQuery.Event( 'VPPlay' );
							VEvent.error = data;
							$vimeo_player.trigger( VEvent );

						} );

						//PAUSE
						vimeo_player.player.on( "pause", function( data ) {
							vimeo_player.state = 2;
							$vimeo_player.trigger( "change_state" );

							if( vimeo_player.controlBar && vimeo_player.controlBar.length )
								vimeo_player.controlBar.find( ".vimeo_player_pause" ).html( jQuery.vimeo_player.controls.play );

							VEvent = jQuery.Event( 'VPPause' );
							VEvent.time = data;
							$vimeo_player.trigger( VEvent );

						} );

						//SEEKED
						vimeo_player.player.on( "seeked", function( data ) {
							vimeo_player.state = 3;
							$vimeo_player.trigger( "change_state" )
						} );

						//ENDED
						vimeo_player.player.on( "ended", function( data ) {
							vimeo_player.state = 0;
							$vimeo_player.trigger( "change_state" );

							VEvent = jQuery.Event( 'VPEnd' );
							VEvent.time = data;
							$vimeo_player.trigger( VEvent );

						} );

						//TIME UPDATE
						vimeo_player.player.on( "timeupdate", function( data ) {

							vimeo_player.duration = data.duration;
							vimeo_player.percent = data.percent;
							vimeo_player.seconds = data.seconds;

							vimeo_player.state = 1;
							vimeo_player.player.getPaused().then( function( paused ) {
								if( paused )
									vimeo_player.state = 2;
							} );

							if( vimeo_player.opt.stopMovieOnBlur ) {
								if( !document.hasFocus() ) {
									if( vimeo_player.state == 1 ) {
										vimeo_player.hasFocus = false;
										$vimeo_player.v_pause();
										vimeo_player.document_focus = setInterval( function() {
											if( document.hasFocus() && !vimeo_player.hasFocus ) {
												vimeo_player.hasFocus = true;
												$vimeo_player.v_play();
												clearInterval( vimeo_player.document_focus );
											}
										}, 300 );
									}
								}
							}

							if( vimeo_player.opt.showControls ) {
								var controls = jQuery( "#controlBar_" + vimeo_player.id );
								var progressBar = controls.find( ".vimeo_player_pogress" );
								var loadedBar = controls.find( ".vimeo_player_loaded" );
								var timeBar = controls.find( ".vimeo_player_seek_bar" );
								var totW = progressBar.outerWidth();
								var currentTime = Math.floor( data.seconds );
								var totalTime = Math.floor( data.duration );
								var timeW = ( currentTime * totW ) / totalTime;
								var startLeft = 0;
								var loadedW = data.percent * 100;
								loadedBar.css( {
									left: startLeft,
									width: loadedW + "%"
								} );
								timeBar.css( {
									left: 0,
									width: timeW
								} );

								if( data.duration ) {
									vimeo_player.controlBar.find( ".vimeo_player_time" ).html( jQuery.vimeo_player.formatTime( data.seconds ) + " / " + jQuery.vimeo_player.formatTime( data.duration ) );
								} else {
									vimeo_player.controlBar.find( ".vimeo_player_time" ).html( "-- : -- / -- : --" );
								}
							}

							if( vimeo_player.opt.addRaster ) {
								var classN = vimeo_player.opt.addRaster == "dot" ? "raster-dot" : "raster";
								vimeo_player.overlay.addClass( vimeo_player.isRetina ? classN + " retina" : classN );
							} else {
								vimeo_player.overlay.removeClass( function( index, classNames ) {
									// change the list into an array
									var current_classes = classNames.split( " " ),
										// array of classes which are to be removed
										classes_to_remove = [];
									jQuery.each( current_classes, function( index, class_name ) {
										// if the classname begins with bg add it to the classes_to_remove array
										if( /raster.*/.test( class_name ) ) {
											classes_to_remove.push( class_name );
										}
									} );
									classes_to_remove.push( "retina" );
									// turn the array back into a string
									return classes_to_remove.join( " " );
								} )
							}

							vimeo_player.opt.stopAt = vimeo_player.opt.stopAt > data.duration ? data.duration - 0.6 : vimeo_player.opt.stopAt;
							var end_time = vimeo_player.opt.stopAt || data.duration - 0.6;

							if( data.seconds >= end_time ) {

								vimeo_player.loop = vimeo_player.loop || 0;

								if( vimeo_player.opt.loop && vimeo_player.loop < vimeo_player.opt.loop ) {
									$vimeo_player.v_seekTo( vimeo_player.opt.startAt );
									vimeo_player.loop++;

								} else {
									$vimeo_player.v_pause();
									vimeo_player.state = 0;
									$vimeo_player.trigger( "change_state" );
								}
							}

							// Trigger state events
							VEvent = jQuery.Event( 'VPTime' );
							VEvent.time = data.seconds;
							$vimeo_player.trigger( VEvent );

						} );

					} );

					$vimeo_player.on( "change_state", function() {
						console.debug( "player state:: ", vimeo_player.state );

						if( vimeo_player.state == 0 )
							vimeo_player.wrapper.fadeOut( 500, function() {
								$vimeo_player.v_seekTo( 0 );
							} );

					} )
				} );
			} )
		},

		formatTime: function( s ) {
			var min = Math.floor( s / 60 );
			var sec = Math.floor( s - ( 60 * min ) );
			return( min <= 9 ? "0" + min : min ) + " : " + ( sec <= 9 ? "0" + sec : sec );
		},

		play: function() {
			var vimeo_player = this.get( 0 );
			if( !vimeo_player.isReady )
				return this;

			vimeo_player.player.play();
			setTimeout( function() {
				vimeo_player.wrapper.fadeTo( 1000, vimeo_player.opt.opacity );
			}, 1000 );

			var controls = jQuery( "#controlBar_" + vimeo_player.id );

			if( controls.length ) {
				var playBtn = controls.find( ".mb_YTPPvimeo_player_playpause" );
				playBtn.html( jQuery.vimeo_player.controls.pause );
			}
			vimeo_player.state = 1;

			jQuery( vimeo_player ).css( "background-image", "none" );
			return this;
		},

		togglePlay: function( callback ) {
			var vimeo_player = this.get( 0 );
			if( vimeo_player.state == 1 )
				this.v_pause();
			else
				this.v_play();

			if( typeof callback == "function" )
				callback( vimeo_player.state );

			return this;
		},

		pause: function() {
			var vimeo_player = this.get( 0 );
			vimeo_player.player.pause();
			vimeo_player.state = 2;
			return this;
		},

		seekTo: function( val, callback ) {
			var vimeo_player = this.get( 0 );

			var seekTo = vimeo_player.opt.stopAt && ( val >= vimeo_player.opt.stopAt ) ? vimeo_player.opt.stopAt - 0.5 : val;

			vimeo_player.player.setCurrentTime( seekTo ).then( function( data ) {
				if( typeof callback == "function" )
					callback( data );
			} );
			return this;
		},

		setVolume: function( val ) {

			var vimeo_player = this.get( 0 );

			console.debug( "setVolume:: ", val );
			console.debug( "volume:: ", vimeo_player.opt.vol );

			if( !val && !vimeo_player.opt.vol && vimeo_player.isMute )
				jQuery( vimeo_player ).v_unmute();
			else if( ( !val && !vimeo_player.isMute ) || ( val && vimeo_player.opt.vol == val ) ) {
				if( !vimeo_player.isMute )
					jQuery( vimeo_player ).v_unmute();
				else
					jQuery( vimeo_player ).v_mute();
			} else {

				vimeo_player.opt.vol = val;
				vimeo_player.player.setVolume( vimeo_player.opt.vol );
				if( vimeo_player.volumeBar && vimeo_player.volumeBar.length )
					vimeo_player.volumeBar.updateSliderVal( val * 100 )
			}
			return this;
		},

		toggleVolume: function() {
			var vimeo_player = this.get( 0 );
			if( !vimeo_player ) return;

			if( vimeo_player.isMute ) {
				jQuery( vimeo_player ).v_unmute();
				return true;
			} else {
				jQuery( vimeo_player ).v_mute();
				return false;
			}
		},

		mute: function() {
			var vimeo_player = this.get( 0 );
			if( vimeo_player.isMute )
				return;
			vimeo_player.isMute = true;
			vimeo_player.player.setVolume( 0 );
			if( vimeo_player.volumeBar && vimeo_player.volumeBar.length && vimeo_player.volumeBar.width() > 10 ) {
				vimeo_player.volumeBar.updateSliderVal( 0 );
			}
			var controls = jQuery( "#controlBar_" + vimeo_player.id );
			var muteBtn = controls.find( ".vimeo_player_muteUnmute" );
			muteBtn.html( jQuery.vimeo_player.controls.unmute );

			jQuery( vimeo_player ).addClass( "isMuted" );

			if( vimeo_player.volumeBar && vimeo_player.volumeBar.length )
				vimeo_player.volumeBar.addClass( "muted" );

			return this;
		},

		unmute: function() {
			var vimeo_player = this.get( 0 );

			if( !vimeo_player.isMute )
				return;
			vimeo_player.isMute = false;

			jQuery( vimeo_player ).v_set_volume( vimeo_player.opt.vol );

			if( vimeo_player.volumeBar && vimeo_player.volumeBar.length ) vimeo_player.volumeBar.updateSliderVal( vimeo_player.opt.vol > .1 ? vimeo_player.opt.vol : .1 );
			var controls = jQuery( "#controlBar_" + vimeo_player.id );
			var muteBtn = controls.find( ".vimeo_player_muteUnmute" );
			muteBtn.html( jQuery.vimeo_player.controls.mute );
			jQuery( vimeo_player ).removeClass( "isMuted" );
			if( vimeo_player.volumeBar && vimeo_player.volumeBar.length )
				vimeo_player.volumeBar.removeClass( "muted" );

			return this;
		},

		changeMovie: function( obj ) {

			var vimeo_player = this.get( 0 );
			vimeo_player.player.loadVideo( obj.url ).then( function( id ) {

				jQuery( vimeo_player ).v_setState();


			} )
		},


		buildControls: function( vimeo_player ) {
			var data = vimeo_player.opt;

			if( jQuery( "#controlBar_" + vimeo_player.id ).length )
				return;

			vimeo_player.controlBar = jQuery( "<span/>" ).attr( "id", "controlBar_" + vimeo_player.id ).addClass( "vimeo_player_bar" ).css( {
				whiteSpace: "noWrap",
				position: vimeo_player.isBackground ? "fixed" : "absolute",
				zIndex: vimeo_player.isBackground ? 10000 : 1000
			} );
			var buttonBar = jQuery( "<div/>" ).addClass( "buttonBar" );
			/* play/pause button*/
			var playpause = jQuery( "<span>" + jQuery.vimeo_player.controls.play + "</span>" ).addClass( "vimeo_player_pause vimeo_icon" ).click( function() {
				if( vimeo_player.state == 1 ) jQuery( vimeo_player ).v_pause();
				else jQuery( vimeo_player ).v_play();
			} );
			/* mute/unmute button*/
			var MuteUnmute = jQuery( "<span>" + jQuery.vimeo_player.controls.mute + "</span>" ).addClass( "vimeo_player_muteUnmute vimeo_icon" ).click( function() {

				if( vimeo_player.isMute ) {
					jQuery( vimeo_player ).v_unmute();
				} else {
					jQuery( vimeo_player ).v_mute();
				}
			} );
			/* volume bar*/
			var volumeBar = jQuery( "<div/>" ).addClass( "vimeo_player_volume_bar" ).css( {
				display: "inline-block"
			} );
			vimeo_player.volumeBar = volumeBar;
			/* time elapsed */
			var idx = jQuery( "<span/>" ).addClass( "vimeo_player_time" );
			var vURL = "https://vimeo.com/" + vimeo_player.videoID;

			var movieUrl = jQuery( "<span/>" ).html( jQuery.vimeo_player.controls.logo ).addClass( "vimeo_url vimeo_icon" ).attr( "title", "view on Vimeo" ).on( "click", function() {

				console.debug( vURL );

				window.open( vURL, "viewOnVimeo" )
			} );

			var fullscreen = jQuery( "<span/>" ).html( jQuery.vimeo_player.controls.fullscreen ).addClass( "vimeo_fullscreen vimeo_icon" ).on( "click", function() {
				jQuery( vimeo_player ).v_fullscreen( data.realfullscreen );
			} );
			var progressBar = jQuery( "<div/>" ).addClass( "vimeo_player_pogress" ).css( "position", "absolute" ).click( function( e ) {
				timeBar.css( {
					width: ( e.clientX - timeBar.offset().left )
				} );
				vimeo_player.timeW = e.clientX - timeBar.offset().left;
				vimeo_player.controlBar.find( ".vimeo_player_loaded" ).css( {
					width: 0
				} );
				var totalTime = Math.floor( vimeo_player.duration );
				vimeo_player.goto = ( timeBar.outerWidth() * totalTime ) / progressBar.outerWidth();

				console.debug( vimeo_player.goto );

				jQuery( vimeo_player ).v_seekTo( parseFloat( vimeo_player.goto ) );
				vimeo_player.controlBar.find( ".vimeo_player_loaded" ).css( {
					width: 0
				} );
			} );
			var loadedBar = jQuery( "<div/>" ).addClass( "vimeo_player_loaded" ).css( "position", "absolute" );
			var timeBar = jQuery( "<div/>" ).addClass( "vimeo_player_seek_bar" ).css( "position", "absolute" );
			progressBar.append( loadedBar ).append( timeBar );
			buttonBar.append( playpause ).append( MuteUnmute ).append( volumeBar ).append( idx );
			if( data.show_vimeo_logo ) {
				buttonBar.append( movieUrl );
			}
			if( vimeo_player.isBackground || ( eval( vimeo_player.opt.realfullscreen ) && !vimeo_player.isBackground ) ) buttonBar.append( fullscreen );
			vimeo_player.controlBar.append( buttonBar ).append( progressBar );
			if( !vimeo_player.isBackground ) {
				//vimeo_player.controlBar.addClass( "inline_vimeo_player" );
				vimeo_player.wrapper.before( vimeo_player.controlBar );
			} else {
				jQuery( "body" ).after( vimeo_player.controlBar );
			}

			volumeBar.simpleSlider( {
				initialval: vimeo_player.opt.vol,
				scale: 100,
				orientation: "h",
				callback: function( el ) {
					if( el.value == 0 ) {
						jQuery( vimeo_player ).v_mute();
					} else {
						jQuery( vimeo_player ).v_unmute();
					}
					vimeo_player.player.setVolume( el.value / 100 );

					if( !vimeo_player.isMute )
						vimeo_player.opt.vol = el.value;
				}
			} );
		},

		optimizeVimeoDisplay: function( align ) {

			var vimeo_player = this.get( 0 );
			var vid = {};

			vimeo_player.opt.align = align || vimeo_player.opt.align;

			vimeo_player.opt.align = typeof vimeo_player.opt.align != "undefined " ? vimeo_player.opt.align : "center,center";
			var YTPAlign = vimeo_player.opt.align.split( "," );

			if( vimeo_player.opt.optimizeDisplay ) {
				var abundance = vimeo_player.isPlayer ? 0 : 80;
				var win = {};
				var el = vimeo_player.wrapper;

				win.width = el.outerWidth();
				win.height = el.outerHeight() + abundance;

				vid.width = win.width;


				vid.height = vimeo_player.opt.ratio == "16/9" ? Math.ceil( vid.width * ( 9 / 16 ) ) : Math.ceil( vid.width * ( 3 / 4 ) );

				vid.marginTop = -( ( vid.height - win.height ) / 2 );
				vid.marginLeft = 0;

				var lowest = vid.height < win.height;

				if( lowest ) {

					vid.height = win.height + abundance;
					vid.width = vimeo_player.opt.ratio == "16/9" ? Math.floor( vid.height * ( 16 / 9 ) ) : Math.floor( vid.height * ( 4 / 3 ) );

					vid.marginTop = 0;
					vid.marginLeft = -( ( vid.width - win.width ) / 2 );

				}

				for( var a in YTPAlign ) {

					if( YTPAlign.hasOwnProperty( a ) ) {

						var al = YTPAlign[ a ].replace( / /g, "" );

						switch( al ) {

							case "top":
								vid.marginTop = lowest ? -( ( vid.height - win.height ) / 2 ) : 0;
								break;

							case "bottom":
								vid.marginTop = lowest ? 0 : -( vid.height - win.height );
								break;

							case "left":
								vid.marginLeft = 0;
								break;

							case "right":
								vid.marginLeft = lowest ? -( vid.width - win.width ) : 0;
								break;

							default:
								if( vid.width > win.width )
									vid.marginLeft = -( ( vid.width - win.width ) / 2 );
								break;

						}
					}
				}

			} else {

				vid.width = "100%";
				vid.height = "100%";
				vid.marginTop = 0;
				vid.marginLeft = 0;

			}

			vimeo_player.playerBox.css( {

				width: vid.width,
				height: vid.height,
				marginTop: vid.marginTop,
				marginLeft: vid.marginLeft,
				maxWidth: "initial"

			} );

		},

		/**
		 *
		 * @param align
		 */
		setAlign: function( align ) {
			var $vimeo_player = this;

			$vimeo_player.v_optimize_display( align );
		},
		/**
		 *
		 * @param align
		 */
		getAlign: function() {
			var vimeo_player = this.get( 0 );
			return vimeo_player.opt.align;
		},


		fullscreen: function( real ) {
			var vimeo_player = this.get( 0 );
			var $vimeo_player = jQuery( vimeo_player );
			var VEvent;

			if( typeof real == "undefined" ) real = vimeo_player.opt.realfullscreen;
			real = eval( real );
			var controls = jQuery( "#controlBar_" + vimeo_player.id );
			var fullScreenBtn = controls.find( ".vimeo_fullscreen" );
			var videoWrapper = vimeo_player.isSelf ? vimeo_player.opt.containment : vimeo_player.wrapper;

			if( real ) {
				var fullscreenchange = jQuery.browser.mozilla ? "mozfullscreenchange" : jQuery.browser.webkit ? "webkitfullscreenchange" : "fullscreenchange";
				jQuery( document ).off( fullscreenchange ).on( fullscreenchange, function() {
					var isFullScreen = RunPrefixMethod( document, "IsFullScreen" ) || RunPrefixMethod( document, "FullScreen" );
					if( !isFullScreen ) {
						vimeo_player.isAlone = false;
						fullScreenBtn.html( jQuery.vimeo_player.controls.fullscreen );
						videoWrapper.removeClass( "vimeo_player_Fullscreen" );

						videoWrapper.fadeTo( 500, vimeo_player.opt.opacity );

						videoWrapper.css( {
							zIndex: 0
						} );

						if( vimeo_player.isBackground ) {
							jQuery( "body" ).after( controls );
						} else {
							vimeo_player.wrapper.before( controls );
						}
						jQuery( window ).resize();
						// Trigger state events
						VEvent = jQuery.Event( 'VPFullScreenEnd' );
						$vimeo_player.trigger( VEvent );

					} else {
						// Trigger state events
						VEvent = jQuery.Event( 'VPFullScreenStart' );
						$vimeo_player.trigger( VEvent );
					}
				} );
			}
			if( !vimeo_player.isAlone ) {
				function hideMouse() {
					vimeo_player.overlay.css( {
						cursor: "none"
					} );
				}

				jQuery( document ).on( "mousemove.vimeo_player", function( e ) {
					vimeo_player.overlay.css( {
						cursor: "auto"
					} );
					clearTimeout( vimeo_player.hideCursor );
					if( !jQuery( e.target ).parents().is( ".vimeo_player_bar" ) )
						vimeo_player.hideCursor = setTimeout( hideMouse, 3000 );
				} );

				hideMouse();

				if( real ) {
					videoWrapper.css( {
						opacity: 0
					} );
					videoWrapper.addClass( "vimeo_player_Fullscreen" );
					launchFullscreen( videoWrapper.get( 0 ) );
					setTimeout( function() {
						videoWrapper.fadeTo( 1000, 1 );
						vimeo_player.wrapper.append( controls );
						jQuery( vimeo_player ).v_optimize_display();

					}, 500 )
				} else videoWrapper.css( {
					zIndex: 10000
				} ).fadeTo( 1000, 1 );
				fullScreenBtn.html( jQuery.vimeo_player.controls.showSite );
				vimeo_player.isAlone = true;
			} else {
				jQuery( document ).off( "mousemove.vimeo_player" );
				clearTimeout( vimeo_player.hideCursor );
				vimeo_player.overlay.css( {
					cursor: "auto"
				} );
				if( real ) {
					cancelFullscreen();
				} else {
					videoWrapper.fadeTo( 1000, vimeo_player.opt.opacity ).css( {
						zIndex: 0
					} );
				}
				fullScreenBtn.html( jQuery.vimeo_player.controls.fullscreen );
				vimeo_player.isAlone = false;
			}

			function RunPrefixMethod( obj, method ) {
				var pfx = [ "webkit", "moz", "ms", "o", "" ];
				var p = 0,
					m, t;
				while( p < pfx.length && !obj[ m ] ) {
					m = method;
					if( pfx[ p ] == "" ) {
						m = m.substr( 0, 1 ).toLowerCase() + m.substr( 1 );
					}
					m = pfx[ p ] + m;
					t = typeof obj[ m ];
					if( t != "undefined" ) {
						pfx = [ pfx[ p ] ];
						return( t == "function" ? obj[ m ]() : obj[ m ] );
					}
					p++;
				}
			}

			function launchFullscreen( element ) {
				RunPrefixMethod( element, "RequestFullScreen" );
			}

			function cancelFullscreen() {
				if( RunPrefixMethod( document, "FullScreen" ) || RunPrefixMethod( document, "IsFullScreen" ) ) {
					RunPrefixMethod( document, "CancelFullScreen" );
				}
			}

			return this;
		}

	};

	jQuery.fn.vimeo_player = jQuery.vimeo_player.buildPlayer;
	jQuery.fn.v_play = jQuery.vimeo_player.play;
	jQuery.fn.v_toggle_play = jQuery.vimeo_player.togglePlay;
	jQuery.fn.v_change_movie = jQuery.vimeo_player.changeMovie;
	jQuery.fn.v_pause = jQuery.vimeo_player.pause;
	jQuery.fn.v_seekTo = jQuery.vimeo_player.seekTo;
	jQuery.fn.v_optimize_display = jQuery.vimeo_player.optimizeVimeoDisplay;
	jQuery.fn.v_set_align = jQuery.vimeo_player.setAlign;
	jQuery.fn.v_get_align = jQuery.vimeo_player.getAlign;
	jQuery.fn.v_fullscreen = jQuery.vimeo_player.fullscreen;
	jQuery.fn.v_mute = jQuery.vimeo_player.mute;
	jQuery.fn.v_unmute = jQuery.vimeo_player.unmute;
	jQuery.fn.v_set_volume = jQuery.vimeo_player.setVolume;
	jQuery.fn.v_toggle_volume = jQuery.vimeo_player.toggleVolume;

} )( jQuery );
;/*___________________________________________________________________________________________________________________________________________________
 _ jquery.mb.components                                                                                                                             _
 _                                                                                                                                                  _
 _ file: jquery.mb.browser.min.js                                                                                                                   _
 _ last modified: 07/06/16 22.34                                                                                                                    _
 _                                                                                                                                                  _
 _ Open Lab s.r.l., Florence - Italy                                                                                                                _
 _                                                                                                                                                  _
 _ email: matteo@open-lab.com                                                                                                                       _
 _ site: http://pupunzi.com                                                                                                                         _
 _       http://open-lab.com                                                                                                                        _
 _ blog: http://pupunzi.open-lab.com                                                                                                                _
 _ Q&A:  http://jquery.pupunzi.com                                                                                                                  _
 _                                                                                                                                                  _
 _ Licences: MIT, GPL                                                                                                                               _
 _    http://www.opensource.org/licenses/mit-license.php                                                                                            _
 _    http://www.gnu.org/licenses/gpl.html                                                                                                          _
 _                                                                                                                                                  _
 _ Copyright (c) 2001-2016. Matteo Bicocchi (Pupunzi);                                                                                              _
 ___________________________________________________________________________________________________________________________________________________*/

var nAgt=navigator.userAgent;
if(!jQuery.browser){var isTouchSupported=function(){var a=nAgt.msMaxTouchPoints,b="ontouchstart"in document.createElement("div");return a||b?!0:!1};jQuery.browser={};jQuery.browser.mozilla=!1;jQuery.browser.webkit=!1;jQuery.browser.opera=!1;jQuery.browser.safari=!1;jQuery.browser.chrome=!1;jQuery.browser.androidStock=!1;jQuery.browser.msie=!1;jQuery.browser.edge=!1;jQuery.browser.hasTouch=isTouchSupported();jQuery.browser.ua=nAgt;jQuery.browser.name=navigator.appName;jQuery.browser.fullVersion=""+
		parseFloat(navigator.appVersion);jQuery.browser.majorVersion=parseInt(navigator.appVersion,10);var nameOffset,verOffset,ix;if(-1!=(verOffset=nAgt.indexOf("Opera")))jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=nAgt.substring(verOffset+6),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8));else if(-1!=(verOffset=nAgt.indexOf("OPR")))jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=nAgt.substring(verOffset+
		4);else if(-1!=(verOffset=nAgt.indexOf("MSIE")))jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer",jQuery.browser.fullVersion=nAgt.substring(verOffset+5);else if(-1!=nAgt.indexOf("Trident")){jQuery.browser.msie=!0;jQuery.browser.name="Microsoft Internet Explorer";var start=nAgt.indexOf("rv:")+3,end=start+4;jQuery.browser.fullVersion=nAgt.substring(start,end)}else-1!=(verOffset=nAgt.indexOf("Edge"))?(jQuery.browser.edge=!0,jQuery.browser.name="Microsoft Edge",jQuery.browser.fullVersion=
		nAgt.substring(verOffset+5)):-1!=(verOffset=nAgt.indexOf("Chrome"))?(jQuery.browser.webkit=!0,jQuery.browser.chrome=!0,jQuery.browser.name="Chrome",jQuery.browser.fullVersion=nAgt.substring(verOffset+7)):-1<nAgt.indexOf("mozilla/5.0")&&-1<nAgt.indexOf("android ")&&-1<nAgt.indexOf("applewebkit")&&!(-1<nAgt.indexOf("chrome"))?(verOffset=nAgt.indexOf("Chrome"),jQuery.browser.webkit=!0,jQuery.browser.androidStock=!0,jQuery.browser.name="androidStock",jQuery.browser.fullVersion=nAgt.substring(verOffset+
		7)):-1!=(verOffset=nAgt.indexOf("Safari"))?(jQuery.browser.webkit=!0,jQuery.browser.safari=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("AppleWebkit"))?(jQuery.browser.webkit=!0,jQuery.browser.safari=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=
		nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("Firefox"))?(jQuery.browser.mozilla=!0,jQuery.browser.name="Firefox",jQuery.browser.fullVersion=nAgt.substring(verOffset+8)):(nameOffset=nAgt.lastIndexOf(" ")+1)<(verOffset=nAgt.lastIndexOf("/"))&&(jQuery.browser.name=nAgt.substring(nameOffset,verOffset),jQuery.browser.fullVersion=nAgt.substring(verOffset+1),jQuery.browser.name.toLowerCase()==jQuery.browser.name.toUpperCase()&&(jQuery.browser.name=navigator.appName));-1!=(ix=jQuery.browser.fullVersion.indexOf(";"))&&
(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix));-1!=(ix=jQuery.browser.fullVersion.indexOf(" "))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix));jQuery.browser.majorVersion=parseInt(""+jQuery.browser.fullVersion,10);isNaN(jQuery.browser.majorVersion)&&(jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10));jQuery.browser.version=jQuery.browser.majorVersion}
jQuery.browser.android=/Android/i.test(nAgt);jQuery.browser.blackberry=/BlackBerry|BB|PlayBook/i.test(nAgt);jQuery.browser.ios=/iPhone|iPad|iPod|webOS/i.test(nAgt);jQuery.browser.operaMobile=/Opera Mini/i.test(nAgt);jQuery.browser.windowsMobile=/IEMobile|Windows Phone/i.test(nAgt);jQuery.browser.kindle=/Kindle|Silk/i.test(nAgt);jQuery.browser.mobile=jQuery.browser.android||jQuery.browser.blackberry||jQuery.browser.ios||jQuery.browser.windowsMobile||jQuery.browser.operaMobile||jQuery.browser.kindle;
jQuery.isMobile=jQuery.browser.mobile;jQuery.isTablet=jQuery.browser.mobile&&765<jQuery(window).width();jQuery.isAndroidDefault=jQuery.browser.android&&!/chrome/i.test(nAgt);
;/*___________________________________________________________________________________________________________________________________________________
 _ jquery.mb.components                                                                                                                             _
 _                                                                                                                                                  _
 _ file: jquery.mb.simpleSlider.min.js                                                                                                              _
 _ last modified: 16/05/15 23.45                                                                                                                    _
 _                                                                                                                                                  _
 _ Open Lab s.r.l., Florence - Italy                                                                                                                _
 _                                                                                                                                                  _
 _ email: matteo@open-lab.com                                                                                                                       _
 _ site: http://pupunzi.com                                                                                                                         _
 _       http://open-lab.com                                                                                                                        _
 _ blog: http://pupunzi.open-lab.com                                                                                                                _
 _ Q&A:  http://jquery.pupunzi.com                                                                                                                  _
 _                                                                                                                                                  _
 _ Licences: MIT, GPL                                                                                                                               _
 _    http://www.opensource.org/licenses/mit-license.php                                                                                            _
 _    http://www.gnu.org/licenses/gpl.html                                                                                                          _
 _                                                                                                                                                  _
 _ Copyright (c) 2001-2015. Matteo Bicocchi (Pupunzi);                                                                                              _
 ___________________________________________________________________________________________________________________________________________________*/

var nAgt=navigator.userAgent;if(!jQuery.browser){jQuery.browser={},jQuery.browser.mozilla=!1,jQuery.browser.webkit=!1,jQuery.browser.opera=!1,jQuery.browser.safari=!1,jQuery.browser.chrome=!1,jQuery.browser.androidStock=!1,jQuery.browser.msie=!1,jQuery.browser.ua=nAgt,jQuery.browser.name=navigator.appName,jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10);var nameOffset,verOffset,ix;if(-1!=(verOffset=nAgt.indexOf("Opera")))jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=nAgt.substring(verOffset+6),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8));else if(-1!=(verOffset=nAgt.indexOf("OPR")))jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=nAgt.substring(verOffset+4);else if(-1!=(verOffset=nAgt.indexOf("MSIE")))jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer",jQuery.browser.fullVersion=nAgt.substring(verOffset+5);else if(-1!=nAgt.indexOf("Trident")||-1!=nAgt.indexOf("Edge")){jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer";var start=nAgt.indexOf("rv:")+3,end=start+4;jQuery.browser.fullVersion=nAgt.substring(start,end)}else-1!=(verOffset=nAgt.indexOf("Chrome"))?(jQuery.browser.webkit=!0,jQuery.browser.chrome=!0,jQuery.browser.name="Chrome",jQuery.browser.fullVersion=nAgt.substring(verOffset+7)):nAgt.indexOf("mozilla/5.0")>-1&&nAgt.indexOf("android ")>-1&&nAgt.indexOf("applewebkit")>-1&&!(nAgt.indexOf("chrome")>-1)?(verOffset=nAgt.indexOf("Chrome"),jQuery.browser.webkit=!0,jQuery.browser.androidStock=!0,jQuery.browser.name="androidStock",jQuery.browser.fullVersion=nAgt.substring(verOffset+7)):-1!=(verOffset=nAgt.indexOf("Safari"))?(jQuery.browser.webkit=!0,jQuery.browser.safari=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("AppleWebkit"))?(jQuery.browser.webkit=!0,jQuery.browser.safari=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("Firefox"))?(jQuery.browser.mozilla=!0,jQuery.browser.name="Firefox",jQuery.browser.fullVersion=nAgt.substring(verOffset+8)):(nameOffset=nAgt.lastIndexOf(" ")+1)<(verOffset=nAgt.lastIndexOf("/"))&&(jQuery.browser.name=nAgt.substring(nameOffset,verOffset),jQuery.browser.fullVersion=nAgt.substring(verOffset+1),jQuery.browser.name.toLowerCase()==jQuery.browser.name.toUpperCase()&&(jQuery.browser.name=navigator.appName));-1!=(ix=jQuery.browser.fullVersion.indexOf(";"))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix)),-1!=(ix=jQuery.browser.fullVersion.indexOf(" "))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix)),jQuery.browser.majorVersion=parseInt(""+jQuery.browser.fullVersion,10),isNaN(jQuery.browser.majorVersion)&&(jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10)),jQuery.browser.version=jQuery.browser.majorVersion}jQuery.browser.android=/Android/i.test(nAgt),jQuery.browser.blackberry=/BlackBerry|BB|PlayBook/i.test(nAgt),jQuery.browser.ios=/iPhone|iPad|iPod|webOS/i.test(nAgt),jQuery.browser.operaMobile=/Opera Mini/i.test(nAgt),jQuery.browser.windowsMobile=/IEMobile|Windows Phone/i.test(nAgt),jQuery.browser.kindle=/Kindle|Silk/i.test(nAgt),jQuery.browser.mobile=jQuery.browser.android||jQuery.browser.blackberry||jQuery.browser.ios||jQuery.browser.windowsMobile||jQuery.browser.operaMobile||jQuery.browser.kindle,jQuery.isMobile=jQuery.browser.mobile,jQuery.isTablet=jQuery.browser.mobile&&jQuery(window).width()>765,jQuery.isAndroidDefault=jQuery.browser.android&&!/chrome/i.test(nAgt);

(function(b){b.simpleSlider={defaults:{initialval:0,scale:100,orientation:"h",readonly:!1,callback:!1},events:{start:b.browser.mobile?"touchstart":"mousedown",end:b.browser.mobile?"touchend":"mouseup",move:b.browser.mobile?"touchmove":"mousemove"},init:function(c){return this.each(function(){var a=this,d=b(a);d.addClass("simpleSlider");a.opt={};b.extend(a.opt,b.simpleSlider.defaults,c);b.extend(a.opt,d.data());var e="h"==a.opt.orientation?"horizontal":"vertical",e=b("<div/>").addClass("level").addClass(e);
	d.prepend(e);a.level=e;d.css({cursor:"default"});"auto"==a.opt.scale&&(a.opt.scale=b(a).outerWidth());d.updateSliderVal();a.opt.readonly||(d.on(b.simpleSlider.events.start,function(c){b.browser.mobile&&(c=c.changedTouches[0]);a.canSlide=!0;d.updateSliderVal(c);"h"==a.opt.orientation?d.css({cursor:"col-resize"}):d.css({cursor:"row-resize"});c.preventDefault();c.stopPropagation()}),b(document).on(b.simpleSlider.events.move,function(c){b.browser.mobile&&(c=c.changedTouches[0]);a.canSlide&&(b(document).css({cursor:"default"}),
			d.updateSliderVal(c),c.preventDefault(),c.stopPropagation())}).on(b.simpleSlider.events.end,function(){b(document).css({cursor:"auto"});a.canSlide=!1;d.css({cursor:"auto"})}))})},updateSliderVal:function(c){var a=this.get(0);if(a.opt){a.opt.initialval="number"==typeof a.opt.initialval?a.opt.initialval:a.opt.initialval(a);var d=b(a).outerWidth(),e=b(a).outerHeight();a.x="object"==typeof c?c.clientX+document.body.scrollLeft-this.offset().left:"number"==typeof c?c*d/a.opt.scale:a.opt.initialval*d/a.opt.scale;
	a.y="object"==typeof c?c.clientY+document.body.scrollTop-this.offset().top:"number"==typeof c?(a.opt.scale-a.opt.initialval-c)*e/a.opt.scale:a.opt.initialval*e/a.opt.scale;a.y=this.outerHeight()-a.y;a.scaleX=a.x*a.opt.scale/d;a.scaleY=a.y*a.opt.scale/e;a.outOfRangeX=a.scaleX>a.opt.scale?a.scaleX-a.opt.scale:0>a.scaleX?a.scaleX:0;a.outOfRangeY=a.scaleY>a.opt.scale?a.scaleY-a.opt.scale:0>a.scaleY?a.scaleY:0;a.outOfRange="h"==a.opt.orientation?a.outOfRangeX:a.outOfRangeY;a.value="undefined"!=typeof c?
					"h"==a.opt.orientation?a.x>=this.outerWidth()?a.opt.scale:0>=a.x?0:a.scaleX:a.y>=this.outerHeight()?a.opt.scale:0>=a.y?0:a.scaleY:"h"==a.opt.orientation?a.scaleX:a.scaleY;"h"==a.opt.orientation?a.level.width(Math.floor(100*a.x/d)+"%"):a.level.height(Math.floor(100*a.y/e));"function"==typeof a.opt.callback&&a.opt.callback(a)}}};b.fn.simpleSlider=b.simpleSlider.init;b.fn.updateSliderVal=b.simpleSlider.updateSliderVal})(jQuery);

jQuery(function(t){function e(e){"resize"===e.type&&(t(h.BODY).removeClass(a.DROPDOWN_OPEN),t(h.BASE).removeClass(a.OPENED).find(h.TOGGLER).each(function(){t(t(this).attr("data-target")).removeClass(a.IN).add(this).attr("aria-expanded","false")}))
var r=t(this).scrollTop()
t(h.BASE).each(function(){t(this).is(h.FIXED_TOP)&&(t(this).is(h.TRANSPARENT)&&!t(this).hasClass(a.OPENED)&&(r>0?t(this).removeClass(a.BG_COLOR):t(this).addClass(a.BG_COLOR)),r>0?t(this).addClass(a.SHORT):t(this).removeClass(a.SHORT))})}var r,n="bs.navbar-dropdown",s="."+n,i=".data-api",o={COLLAPSE:"collapse"+s,CLICK_DATA_API:"click"+s+i,SCROLL_DATA_API:"scroll"+s+i,RESIZE_DATA_API:"resize"+s+i,COLLAPSE_SHOW:"show.bs.collapse",COLLAPSE_HIDE:"hide.bs.collapse",DROPDOWN_COLLAPSE:"collapse.bs.nav-dropdown"},a={IN:"in",OPENED:"opened",BG_COLOR:"bg-color",DROPDOWN_OPEN:"navbar-dropdown-open",SHORT:"navbar-short"},h={BODY:"body",BASE:".navbar-dropdown",TOGGLER:'.navbar-toggler[aria-expanded="true"]',TRANSPARENT:".transparent",FIXED_TOP:".navbar-fixed-top"}
t(window).on(o.SCROLL_DATA_API+" "+o.RESIZE_DATA_API,function(t){clearTimeout(r),r=setTimeout(function(){e(t)},10)}).trigger(o.SCROLL_DATA_API),t(document).on(o.CLICK_DATA_API,h.BASE,function(t){t.targetWrapper=this}).on(o.COLLAPSE_SHOW+" "+o.COLLAPSE_HIDE,function(e){t(e.target).closest(h.BASE).each(function(){"show"==e.type?(t(h.BODY).addClass(a.DROPDOWN_OPEN),t(this).addClass(a.OPENED)):(t(h.BODY).removeClass(a.DROPDOWN_OPEN),t(this).removeClass(a.OPENED),t(window).trigger(o.SCROLL_DATA_API),t(this).trigger(o.COLLAPSE))})}).on(o.DROPDOWN_COLLAPSE,function(e){t(e.relatedTarget).closest(h.BASE).find(h.TOGGLER).trigger("click")})}),function(t){var e="navDropdown",r="bs.nav-dropdown",n="."+r,s=".data-api",i=t.fn[e],o={HIDE:"hide"+n,HIDDEN:"hidden"+n,SHOW:"show"+n,SHOWN:"shown"+n,CLICK:"click"+n,READY:"ready"+n,COLLAPSE:"collapse"+n,LOAD_DATA_API:"load"+n+s,CLICK_DATA_API:"click"+n+s,RESIZE_DATA_API:"resize"+n+s,KEYDOWN_DATA_API:"keydown"+n+s,NAVBAR_COLLAPSE:"collapse.bs.navbar-dropdown"},a={ESC:27,LEFT:37,UP:38,RIGHT:39,DOWN:40},h={XS:544,SM:768,MD:992,LG:1200,XL:1/0},p={BACKDROP:"dropdown-backdrop",DISABLED:"disabled",OPEN:"open",SM:"nav-dropdown-sm"},l={BASE:".nav-dropdown",DROPDOWN:".dropdown",DROPDOWN_MENU:".dropdown-menu",BACKDROP:"."+p.BACKDROP,DATA_BUTTON:"[data-button]",DATA_TOGGLE:'[data-toggle="dropdown-submenu"]',FORM_CHILD:".dropdown form"},c=function(){function e(e,r){"length"in e||(e=[e]),this.props={},this.length=e.length,r&&(this.prevItem=r,t.extend(this.props,r.props))
for(var n=0;n<e.length;n++)this[n]=e[n]}return e.prototype.eq=function(t){return new e(this[t]?this[t]:[],this)},e.prototype.parent=function(){return new e(t(this).map(function(){var r=new e(this)
return r.is(":upper")?null:t(r.is(":toggle")?this.parentNode.parentNode:this).closest(l.DROPDOWN).find(">"+l.DATA_TOGGLE)[0]}),this)},e.prototype.parents=function(r){var n=t(this).map(function(){return new e(this).is(":toggle")?this.parentNode:this}).parentsUntil(l.BASE,l.DROPDOWN)
return":upper"===r&&(n=n.last()),n=n.find(">"+l.DATA_TOGGLE),new e(n,this)},e.prototype.children=function(r){var n=[]
return t(this).each(function(){var s,i,o=new e(this)
if(o.is(":root"))s=t(this)
else{if(!o.is(":toggle"))return
s=t(this).parent().find(">"+l.DROPDOWN_MENU)}i=r?s.find("a"):o.is(":root")?s.find(">li>a"):s.find(">a, >"+l.DROPDOWN+">a"),i.each(function(){r&&!this.offsetWidth&&!this.offsetHeight||this.disabled||t(this).is(l.DATA_BUTTON)||t(this).hasClass(p.DISABLED)||~t.inArray(this,n)||n.push(this)})}),new e(n,this)},e.prototype.root=function(){return new e(t(this).closest(l.BASE),this)},e.prototype.jump=function(r){if(r=r||"next",!this.length)return new e([],this)
var n,s=this.eq(0)
n=this.is(":flat")||s.is(":upper")?s.root().children(this.is(":flat")):s.parent().children()
var i=t.inArray(this[0],n)
if(!n.length||!~i)return new e([],this)
if("next"==r){if(i+=1,i<n.length)return new e(n[i],this)
r="first"}else if("prev"==r){if(i-=1,i>=0)return new e(n[i],this)
r="last"}return"first"==r?new e(n[0],this):"last"==r?new e(n[n.length-1],this):new e([],this)},e.prototype.next=function(){return this.jump("next")},e.prototype.prev=function(){return this.jump("prev")},e.prototype.first=function(){return this.jump("first")},e.prototype.last=function(){return this.jump("last")},e.prototype.prop=function(e,r){return arguments.length?arguments.length>1?(this.props[e]=r,this):"object"==typeof arguments[0]?(t.extend(this.props,arguments[0]),this):e in this.props?this.props[e]:null:t.extend({},this.props)},e.prototype.removeProp=function(t){return delete this.props[t],this},e.prototype.is=function(e){for(var r=t(this),n=(e||"").split(/(?=[*#.\[:\s])/);e=n.pop();)switch(e){case":root":if(!r.is(l.BASE))return!1
break
case":upper":if(!r.parent().parent().is(l.BASE))return!1
break
case":opened":case":closed":if(":opened"==e!=r.parent().hasClass(p.OPEN))return!1
case":toggle":if(!r.is(l.DATA_TOGGLE))return!1
break
default:if(!this.props[e])return!1}return!0},e.prototype.open=function(){return this.is(":closed")&&this.click(),this},e.prototype.close=function(){return this.is(":opened")&&this.click(),this},e.prototype.focus=function(){return this.length&&this[0].focus(),this},e.prototype.click=function(){return this.length&&t(this[0]).trigger("click"),this},function(t){return new e(t)}}(),d=function(e){this._element=e,t(this._element).on(o.CLICK,this.toggle)}
d.prototype.toggle=function(e){if(this.disabled||t(this).hasClass(p.DISABLED))return!1
var r=t(this.parentNode),n=r.hasClass(p.OPEN),s=d._isCollapsed(t(this).closest(l.BASE))
if(d._clearMenus(t.Event("click",{target:this,data:{toggles:s?[this]:null}})),n)return!1
if("ontouchstart"in document.documentElement&&!r.closest(l.DROPDOWN+"."+p.OPEN).length){var i=document.createElement("div")
i.className=p.BACKDROP,t(i).insertBefore(t(this).closest(l.BASE)),t(i).on("click",d._clearMenus)}var a={relatedTarget:this},h=t.Event(o.SHOW,a)
return r.trigger(h),h.isDefaultPrevented()?!1:(this.focus(),this.setAttribute("aria-expanded","true"),r.toggleClass(p.OPEN),r.trigger(t.Event(o.SHOWN,a)),!1)},d.prototype.dispose=function(){t.removeData(this._element,r),t(this._element).off(n),this._element=null},d._clearMenus=function(e){if(e=e||{},3!==e.which){var r,n=function(){return!1}
if(e.target){if(this===document)if(t(e.target).is("a:not([disabled], ."+p.DISABLED+")"))r=t.Event(o.COLLAPSE,{relatedTarget:e.target})
else{var s=e.targetWrapper&&t(e.targetWrapper).find(l.BASE)||t(e.target).closest(l.BASE)
if(d._isCollapsed(s))return}else if(t(e.target).hasClass(p.BACKDROP)){var i=t(e.target).next()
if(i.is(l.BASE)&&d._isCollapsed(i))return}t(e.target).is(l.DATA_TOGGLE)?n=t(e.target.parentNode).parents(l.DROPDOWN).find(">"+l.DATA_TOGGLE):t(l.BACKDROP).remove()}for(var a=e.data&&e.data.toggles&&t(e.data.toggles).parent().find(l.DATA_TOGGLE)||t.makeArray(t(l.DATA_TOGGLE).not(n)),h=0;h<a.length;h++){var c=a[h].parentNode,u={relatedTarget:a[h]}
if(t(c).hasClass(p.OPEN)&&("click"!==e.type||!/input|textarea/i.test(e.target.tagName)||!t.contains(c,e.target))){var f=t.Event(o.HIDE,u)
t(c).trigger(f),f.isDefaultPrevented()||(a[h].setAttribute("aria-expanded","false"),t(c).removeClass(p.OPEN).trigger(t.Event(o.HIDDEN,u)))}}r&&t(document).trigger(r)}},d._dataApiKeydownHandler=function(e){if(!/input|textarea/i.test(e.target.tagName)){var r
for(var n in a)if(r=a[n]===e.which)break
if(r){if(e.preventDefault(),e.stopPropagation(),e.which==a.ESC){if(d._isCollapsed(this))return
var s=t(e.target).parents(l.DROPDOWN+"."+p.OPEN).last().find(">"+l.DATA_TOGGLE)
return d._clearMenus(),void s.trigger("focus")}if("A"==e.target.tagName){var i=c(e.target)
if(i.prop(":flat",d._isCollapsed(i.root())),i.is(":flat"))e.which===a.DOWN||e.which===a.UP?i[e.which===a.UP?"prev":"next"]().focus():e.which===a.LEFT?i.is(":opened")?i.close():i.parent().close().focus():e.which===a.RIGHT&&i.is(":toggle")&&i.open()
else if(i.is(":upper"))e.which===a.LEFT||e.which===a.RIGHT?(i[e.which===a.LEFT?"prev":"next"]().focus().open(),i.is(":toggle")&&i.close()):e.which!==a.DOWN&&e.which!==a.UP||!i.is(":toggle")||i.children()[e.which===a.DOWN?"first":"last"]().focus()
else if(e.which===a.LEFT){var o=i.parent()
o.is(":upper")?o.close().prev().focus().open():o.focus().close()}else if(e.which===a.RIGHT){var h=i.children()
h.length?(i.open(),h.first().focus()):i.parents(":upper").close().next().focus().open()}else(e.which===a.DOWN||e.which===a.UP)&&i[e.which===a.UP?"prev":"next"]().focus()}}}},d._isCollapsed=function(t){var e
return t.length&&(t=t[0]),t&&(e=/navbar-toggleable-(xs|sm|md|lg|xl)/.exec(t.className))&&window.innerWidth<h[e[1].toUpperCase()]},d._dataApiResizeHandler=function(){t(l.BASE).each(function(){var e=d._isCollapsed(this)
t(this).find(l.DROPDOWN).removeClass(p.OPEN),t(this).find('[aria-expanded="true"]').attr("aria-expanded","false")
var r=t(l.BACKDROP)[0]
r&&r.parentNode.removeChild(r),e!=t(this).hasClass(p.SM)&&(e?t(this).addClass(p.SM):t(this).removeClass(p.SM))})},t.fn[e]=function(e){return this.each(function(){var n=t(this).data(r)
if(n||t(this).data(r,n=new d(this)),"string"==typeof e){if(void 0===n[e])throw new Error('No method named "'+e+'"')
n[e].call(this)}})},t.fn[e].noConflict=function(){return t.fn[e]=i,this},t.fn[e].Constructor=d,t.fn[e].$$=c,t(window).on(o.RESIZE_DATA_API+" "+o.LOAD_DATA_API,d._dataApiResizeHandler),t(document).on(o.KEYDOWN_DATA_API,l.BASE,d._dataApiKeydownHandler).on(o.NAVBAR_COLLAPSE,d._clearMenus).on(o.CLICK_DATA_API,d._clearMenus).on(o.CLICK_DATA_API,l.DATA_TOGGLE,d.prototype.toggle).on(o.CLICK_DATA_API,l.FORM_CHILD,function(t){t.stopPropagation()}),t(window).trigger(o.READY)}(jQuery)

/* source: https://github.com/avinoamr/bootstrap-carousel-swipe */
/* changes from Mobirise team */
+function ($) {
    'use strict';

    if ( !$.fn.carousel ) {
        return
    }

    // CAROUSEL CLASS DEFINITION
    // =========================

    var CarouselSwipe = function(element) {
        this.$element    = $(element)
        this.carousel    = this.$element.data('bs.carousel')
        this.options     = $.extend({}, CarouselSwipe.DEFAULTS, this.carousel.options)
        this.startX      =
        this.startY      =
        this.startTime   =
        this.cycling     =
        this.$active     =
        this.$items      =
        this.$next       =
        this.$prev       = 
        this.dx          = null

        this.$element
            .on('touchstart', $.proxy(this.touchstart,this))
            .on('touchmove', $.proxy(this.touchmove,this))
            .on('touchend', $.proxy(this.touchend,this))
    }

    CarouselSwipe.DEFAULTS = {
        swipe: 50 // percent per second
    }

    CarouselSwipe.prototype.touchstart = function(e) {
        if (!this.options.swipe) return;
        var touch = e.originalEvent.touches ? e.originalEvent.touches[0] : e
        this.dx = 0
        this.startX = touch.pageX
        this.startY = touch.pageY
        this.cycling = null
        this.width = this.$element.width()
        this.startTime = e.timeStamp
    }

    CarouselSwipe.prototype.touchmove = function(e) {
        if (!this.options.swipe) return;
        var touch = e.originalEvent.touches ? e.originalEvent.touches[0] : e
        var dx = touch.pageX - this.startX
        var dy = touch.pageY - this.startY
        if (Math.abs(dx) < Math.abs(dy)) return; // vertical scroll

        if ( this.cycling === null ) {
            this.cycling = !!this.carousel.interval
            this.cycling && this.carousel.pause()
        }

        e.preventDefault()
        this.dx = dx / (this.width || 1) * 100
        this.swipe(this.dx)
    }

    CarouselSwipe.prototype.touchend = function(e) {
        if (!this.options.swipe) return;
        if (!this.$active) return; // nothing moved
        var all = $()
            .add(this.$active).add(this.$prev).add(this.$next)
            .carousel_transition(true)

        var dt = (e.timeStamp - this.startTime) / 1000
        var speed = Math.abs(this.dx / dt) // percent-per-second
        if (this.dx > 40 || (this.dx > 0 && speed > this.options.swipe)) {
            this.carousel.prev()
        } else if (this.dx < -40 || (this.dx < 0 && speed > this.options.swipe)) {
            this.carousel.next();
        } else {
            this.$active
                .one($.support.transition.end, function () {
                    all.removeClass('prev next')
                })
                .emulateTransitionEnd(this.$active.css('transition-duration').slice(0, -1) * 1000)
        }

        all.carousel_offset(false);
        this.cycling && this.carousel.cycle()
        this.$active = null // reset the active element
    }

    CarouselSwipe.prototype.swipe = function(percent) {
        var $active = this.$active || this.getActive()
        if (percent < 0) {
            this.$prev
                .carousel_offset(false)
                .removeClass('prev')
                .carousel_transition(true)
            if (!this.$next.length || this.$next.hasClass('active')) return
            this.$next
                .carousel_transition(false)
                .addClass('next')
                .carousel_offset(percent + 100)
        } else {
            this.$next
                .carousel_offset(false)
                .removeClass('next')
                .carousel_transition(true)
            if (!this.$prev.length || this.$prev.hasClass('active')) return
            this.$prev
                .carousel_transition(false)
                .addClass('prev')
                .carousel_offset(percent - 100)
        }

        $active
            .carousel_transition(false)
            .carousel_offset(percent)
    }

    CarouselSwipe.prototype.getActive = function() {
        this.$active = this.$element.find('.item.active')
        this.$items = this.$active.parent().children()

        this.$next = this.$active.next()
        if (!this.$next.length && this.options.wrap) {
            this.$next = this.$items.first();
        }

        this.$prev = this.$active.prev()
        if (!this.$prev.length && this.options.wrap) {
            this.$prev = this.$items.last();
        }

        return this.$active;
    }

    // CAROUSEL PLUGIN DEFINITION
    // ==========================

    var old = $.fn.carousel
    $.fn.carousel = function() {
        old.apply(this, arguments);
        return this.each(function () {
            var $this   = $(this)
            var data    = $this.data('bs.carousel.swipe')
            if (!data) $this.data('bs.carousel.swipe', new CarouselSwipe(this))
        })
    }

    $.extend($.fn.carousel,old);

    $.fn.carousel_transition = function(enable) {
        enable = enable ? '' : 'none';
        return this.each(function() {
            $(this)
                .css('-webkit-transition', enable)
                .css('transition', enable)
        })
    };


    var support3dtransform = (function() {
        if (!window.getComputedStyle) {
            return false;
        }

        var el = document.createElement('p'), 
            has3d,
            transforms = {
                'webkitTransform':'-webkit-transform',
                'OTransform':'-o-transform',
                'msTransform':'-ms-transform',
                'MozTransform':'-moz-transform',
                'transform':'transform'
            };

        // Add it to the body to get the computed style.
        document.body.insertBefore(el, null);

        for (var t in transforms) {
            if (el.style[t] !== undefined) {
                el.style[t] = "translate3d(1px,1px,1px)";
                has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
            }
        }

        document.body.removeChild(el);

        return (has3d !== undefined && has3d.length > 0 && has3d !== "none");
    }());

    $.fn.carousel_offset = function(value) {
        return this.each(function() {
            if(value) {
                if(support3dtransform) {
                    $(this).css('transform', 'translate3d(' + value + '%, 0, 0)')
                } else {
                    $(this).css('left', value + '%')
                }
            } else {
                $(this).css({
                    transform: '',
                    left: ''
                })
            }
        })
    };

    // init carousels
    $('.carousel').carousel();

}(jQuery);
/*jquery.mb.YTPlayer 02-07-2017
 _ jquery.mb.components
 _ email: matteo@open-lab.com
 _ Copyright (c) 2001-2017. Matteo Bicocchi (Pupunzi);
 _ blog: http://pupunzi.open-lab.com
 _ Open Lab s.r.l., Florence - Italy
 */
function onYouTubeIframeAPIReady(){ytp.YTAPIReady||(ytp.YTAPIReady=!0,jQuery(document).trigger("YTAPIReady"))}function uncamel(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}function setUnit(a,b){return"string"!=typeof a||a.match(/^[\-0-9\.]+jQuery/)?""+a+b:a}function setFilter(a,b,c){var d=uncamel(b),e=jQuery.browser.mozilla?"":jQuery.CSS.sfx;a[e+"filter"]=a[e+"filter"]||"",c=setUnit(c>jQuery.CSS.filters[b].max?jQuery.CSS.filters[b].max:c,jQuery.CSS.filters[b].unit),a[e+"filter"]+=d+"("+c+") ",delete a[b]}function isTouchSupported(){var a=nAgt.msMaxTouchPoints,b="ontouchstart"in document.createElement("div");return a||b?!0:!1}var ytp=ytp||{},getYTPVideoID=function(a){var b,c;return a.indexOf("youtu.be")>0?(b=a.substr(a.lastIndexOf("/")+1,a.length),c=b.indexOf("?list=")>0?b.substr(b.lastIndexOf("="),b.length):null,b=c?b.substr(0,b.lastIndexOf("?")):b):a.indexOf("http")>-1?(b=a.match(/[\\?&]v=([^&#]*)/)[1],c=a.indexOf("list=")>0?a.match(/[\\?&]list=([^&#]*)/)[1]:null):(b=a.length>15?null:a,c=b?null:a),{videoID:b,playlistID:c}};!function(jQuery,ytp){jQuery.mbYTPlayer={name:"jquery.mb.YTPlayer",version:"3.0.20",build:"6258",author:"Matteo Bicocchi (pupunzi)",apiKey:"",defaults:{containment:"body",ratio:"auto",videoURL:null,playlistURL:null,startAt:0,stopAt:0,autoPlay:!0,vol:50,addRaster:!1,mask:!1,opacity:1,quality:"default",mute:!1,loop:!0,fadeOnStartTime:500,showControls:!0,showAnnotations:!1,showYTLogo:!0,stopMovieOnBlur:!0,realfullscreen:!0,mobileFallbackImage:null,gaTrack:!0,optimizeDisplay:!0,remember_last_time:!1,anchor:"center,center",onReady:function(a){},onError:function(a,b){}},controls:{play:"P",pause:"p",mute:"M",unmute:"A",onlyYT:"O",showSite:"R",ytLogo:"Y"},controlBar:null,loading:null,locationProtocol:"https:",filters:{grayscale:{value:0,unit:"%"},hue_rotate:{value:0,unit:"deg"},invert:{value:0,unit:"%"},opacity:{value:0,unit:"%"},saturate:{value:0,unit:"%"},sepia:{value:0,unit:"%"},brightness:{value:0,unit:"%"},contrast:{value:0,unit:"%"},blur:{value:0,unit:"px"}},buildPlayer:function(options){return this.each(function(){var YTPlayer=this,$YTPlayer=jQuery(YTPlayer);YTPlayer.loop=0,YTPlayer.opt={},YTPlayer.state={},YTPlayer.filters=jQuery.mbYTPlayer.filters,YTPlayer.filtersEnabled=!0,YTPlayer.id=YTPlayer.id||"YTP_"+(new Date).getTime(),$YTPlayer.addClass("mb_YTPlayer");var property=$YTPlayer.data("property")&&"string"==typeof $YTPlayer.data("property")?eval("("+$YTPlayer.data("property")+")"):$YTPlayer.data("property");"undefined"!=typeof property&&"undefined"!=typeof property.vol&&(property.vol=0===property.vol?property.vol=1:property.vol),jQuery.extend(YTPlayer.opt,jQuery.mbYTPlayer.defaults,options,property),YTPlayer.hasChanged||(YTPlayer.defaultOpt={},jQuery.extend(YTPlayer.defaultOpt,jQuery.mbYTPlayer.defaults,options)),"true"==YTPlayer.opt.loop&&(YTPlayer.opt.loop=9999),YTPlayer.isRetina=window.retina||window.devicePixelRatio>1;var isIframe=function(){var a=!1;try{self.location.href!=top.location.href&&(a=!0)}catch(b){a=!0}return a};YTPlayer.canGoFullScreen=!(jQuery.mbBrowser.msie||jQuery.mbBrowser.opera||isIframe()),YTPlayer.canGoFullScreen||(YTPlayer.opt.realfullscreen=!1),$YTPlayer.attr("id")||$YTPlayer.attr("id","ytp_"+(new Date).getTime());var playerID="iframe_"+YTPlayer.id;YTPlayer.isAlone=!1,YTPlayer.hasFocus=!0,YTPlayer.videoID=this.opt.videoURL?getYTPVideoID(this.opt.videoURL).videoID:$YTPlayer.attr("href")?getYTPVideoID($YTPlayer.attr("href")).videoID:!1,YTPlayer.playlistID=this.opt.videoURL?getYTPVideoID(this.opt.videoURL).playlistID:$YTPlayer.attr("href")?getYTPVideoID($YTPlayer.attr("href")).playlistID:!1,YTPlayer.opt.showAnnotations=YTPlayer.opt.showAnnotations?"1":"3";var start_from_last=0;jQuery.mbCookie.get("YTPlayer_"+YTPlayer.videoID)&&(start_from_last=parseFloat(jQuery.mbCookie.get("YTPlayer_"+YTPlayer.videoID))),YTPlayer.opt.remember_last_time&&start_from_last&&(YTPlayer.start_from_last=start_from_last,jQuery.mbCookie.remove("YTPlayer_"+YTPlayer.videoID));var playerVars={modestbranding:1,autoplay:0,controls:0,showinfo:0,rel:0,enablejsapi:1,version:3,playerapiid:playerID,origin:"*",allowfullscreen:!0,wmode:"transparent",iv_load_policy:YTPlayer.opt.showAnnotations};if(document.createElement("video").canPlayType&&jQuery.extend(playerVars,{html5:1}),jQuery.mbBrowser.msie&&jQuery.mbBrowser.version<9&&(this.opt.opacity=1),YTPlayer.isSelf="self"==YTPlayer.opt.containment,YTPlayer.defaultOpt.containment=YTPlayer.opt.containment=jQuery("self"==YTPlayer.opt.containment?this:YTPlayer.opt.containment),YTPlayer.isBackground=YTPlayer.opt.containment.is("body"),!YTPlayer.isBackground||!ytp.backgroundIsInited){var isPlayer=YTPlayer.opt.containment.is(jQuery(this));YTPlayer.canPlayOnMobile=isPlayer&&0===jQuery(this).children().length,YTPlayer.isPlayer=!1,isPlayer?YTPlayer.isPlayer=!0:$YTPlayer.hide();var overlay=jQuery("<div/>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%"}).addClass("YTPOverlay");YTPlayer.isPlayer&&overlay.on("click",function(){$YTPlayer.YTPTogglePlay()});var wrapper=jQuery("<div/>").addClass("mbYTP_wrapper").attr("id","wrapper_"+YTPlayer.id);wrapper.css({position:"absolute",zIndex:0,minWidth:"100%",minHeight:"100%",left:0,top:0,overflow:"hidden",opacity:0});var playerBox=jQuery("<div/>").attr("id",playerID).addClass("playerBox");if(playerBox.css({position:"absolute",zIndex:0,width:"100%",height:"100%",top:0,left:0,overflow:"hidden"}),wrapper.append(playerBox),YTPlayer.opt.containment.children().not("script, style").each(function(){"static"==jQuery(this).css("position")&&jQuery(this).css("position","relative")}),YTPlayer.isBackground?(jQuery("body").css({boxSizing:"border-box"}),wrapper.css({position:"fixed",top:0,left:0,zIndex:0}),$YTPlayer.hide()):"static"==YTPlayer.opt.containment.css("position")&&YTPlayer.opt.containment.css({position:"relative"}),YTPlayer.opt.containment.prepend(wrapper),YTPlayer.wrapper=wrapper,playerBox.css({opacity:1}),jQuery.mbBrowser.mobile||(playerBox.after(overlay),YTPlayer.overlay=overlay),YTPlayer.isBackground||overlay.on("mouseenter",function(){YTPlayer.controlBar&&YTPlayer.controlBar.length&&YTPlayer.controlBar.addClass("visible")}).on("mouseleave",function(){YTPlayer.controlBar&&YTPlayer.controlBar.length&&YTPlayer.controlBar.removeClass("visible")}),ytp.YTAPIReady)setTimeout(function(){jQuery(document).trigger("YTAPIReady")},100);else{jQuery("#YTAPI").remove();var tag=jQuery("<script></script>").attr({src:jQuery.mbYTPlayer.locationProtocol+"//www.youtube.com/iframe_api?v="+jQuery.mbYTPlayer.version,id:"YTAPI"});jQuery("head").prepend(tag)}if(jQuery.mbBrowser.mobile&&!YTPlayer.canPlayOnMobile)return YTPlayer.opt.mobileFallbackImage&&wrapper.css({backgroundImage:"url("+YTPlayer.opt.mobileFallbackImage+")",backgroundPosition:"center center",backgroundSize:"cover",backgroundRepeat:"no-repeat",opacity:1}),YTPlayer.isPlayer||$YTPlayer.remove(),void jQuery(document).trigger("YTPUnavailable");jQuery(document).on("YTAPIReady",function(){YTPlayer.isBackground&&ytp.backgroundIsInited||YTPlayer.isInit||(YTPlayer.isBackground&&(ytp.backgroundIsInited=!0),YTPlayer.opt.autoPlay="undefined"==typeof YTPlayer.opt.autoPlay?YTPlayer.isBackground?!0:!1:YTPlayer.opt.autoPlay,YTPlayer.opt.vol=YTPlayer.opt.vol?YTPlayer.opt.vol:100,jQuery.mbYTPlayer.getDataFromAPI(YTPlayer),jQuery(YTPlayer).on("YTPChanged",function(){if(!YTPlayer.isInit){if(YTPlayer.isInit=!0,jQuery.mbBrowser.mobile&&YTPlayer.canPlayOnMobile){if(YTPlayer.opt.containment.outerWidth()>jQuery(window).width()){YTPlayer.opt.containment.css({maxWidth:"100%"});var h=.563*YTPlayer.opt.containment.outerWidth();YTPlayer.opt.containment.css({maxHeight:h})}return void new YT.Player(playerID,{videoId:YTPlayer.videoID.toString(),width:"100%",height:h,playerVars:playerVars,events:{onReady:function(a){YTPlayer.player=a.target,playerBox.css({opacity:1}),YTPlayer.wrapper.css({opacity:1})}}})}new YT.Player(playerID,{videoId:YTPlayer.videoID.toString(),playerVars:playerVars,events:{onReady:function(a){YTPlayer.player=a.target,YTPlayer.isReady||(YTPlayer.isReady=YTPlayer.isPlayer&&!YTPlayer.opt.autoPlay?!1:!0,YTPlayer.playerEl=YTPlayer.player.getIframe(),jQuery(YTPlayer.playerEl).unselectable(),$YTPlayer.optimizeDisplay(),jQuery(window).off("resize.YTP_"+YTPlayer.id).on("resize.YTP_"+YTPlayer.id,function(){$YTPlayer.optimizeDisplay()}),YTPlayer.opt.remember_last_time&&jQuery(window).on("unload.YTP_"+YTPlayer.id,function(){var a=YTPlayer.player.getCurrentTime();jQuery.mbCookie.set("YTPlayer_"+YTPlayer.videoID,a,0)}),jQuery.mbYTPlayer.checkForState(YTPlayer))},onStateChange:function(event){if("function"==typeof event.target.getPlayerState){var state=event.target.getPlayerState();if(YTPlayer.preventTrigger)return void(YTPlayer.preventTrigger=!1);YTPlayer.state=state;var eventType;switch(state){case-1:eventType="YTPUnstarted";break;case 0:eventType="YTPRealEnd";break;case 1:eventType="YTPPlay",YTPlayer.controlBar.length&&YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.pause),"undefined"!=typeof _gaq&&eval(YTPlayer.opt.gaTrack)&&_gaq.push(["_trackEvent","YTPlayer","Play",YTPlayer.hasData?YTPlayer.videoData.title:YTPlayer.videoID.toString()]),"undefined"!=typeof ga&&eval(YTPlayer.opt.gaTrack)&&ga("send","event","YTPlayer","play",YTPlayer.hasData?YTPlayer.videoData.title:YTPlayer.videoID.toString());break;case 2:eventType="YTPPause",YTPlayer.controlBar.length&&YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);break;case 3:YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality),eventType="YTPBuffering",YTPlayer.controlBar.length&&YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);break;case 5:eventType="YTPCued"}var YTPEvent=jQuery.Event(eventType);YTPEvent.time=YTPlayer.currentTime,YTPlayer.canTrigger&&jQuery(YTPlayer).trigger(YTPEvent)}},onPlaybackQualityChange:function(a){var b=a.target.getPlaybackQuality(),c=jQuery.Event("YTPQualityChange");c.quality=b,jQuery(YTPlayer).trigger(c)},onError:function(a){150==a.data&&(console.log("Embedding this video is restricted by Youtube."),YTPlayer.isPlayList&&jQuery(YTPlayer).playNext()),2==a.data&&YTPlayer.isPlayList&&jQuery(YTPlayer).playNext(),"function"==typeof YTPlayer.opt.onError&&YTPlayer.opt.onError($YTPlayer,a)}}})}}))}),$YTPlayer.off("YTPTime.mask"),jQuery.mbYTPlayer.applyMask(YTPlayer)}})},getDataFromAPI:function(a){if(a.videoData=jQuery.mbStorage.get("YTPlayer_data_"+a.videoID),jQuery(a).off("YTPData.YTPlayer").on("YTPData.YTPlayer",function(){if(a.hasData&&a.isPlayer&&!a.opt.autoPlay){var b=a.videoData.thumb_max||a.videoData.thumb_high||a.videoData.thumb_medium;a.opt.containment.css({background:"rgba(0,0,0,0.5) url("+b+") center center",backgroundSize:"cover"}),a.opt.backgroundUrl=b}}),a.videoData)setTimeout(function(){a.opt.ratio="auto"==a.opt.ratio?"16/9":a.opt.ratio,a.dataReceived=!0,jQuery(a).trigger("YTPChanged");var b=jQuery.Event("YTPData");b.prop={};for(var c in a.videoData)b.prop[c]=a.videoData[c];jQuery(a).trigger(b)},a.opt.fadeOnStartTime),a.hasData=!0;else if(jQuery.mbYTPlayer.apiKey)jQuery.getJSON(jQuery.mbYTPlayer.locationProtocol+"//www.googleapis.com/youtube/v3/videos?id="+a.videoID+"&key="+jQuery.mbYTPlayer.apiKey+"&part=snippet",function(b){function c(b){a.videoData={},a.videoData.id=a.videoID,a.videoData.channelTitle=b.channelTitle,a.videoData.title=b.title,a.videoData.description=b.description.length<400?b.description:b.description.substring(0,400)+" ...",a.videoData.aspectratio="auto"==a.opt.ratio?"16/9":a.opt.ratio,a.opt.ratio=a.videoData.aspectratio,a.videoData.thumb_max=b.thumbnails.maxres?b.thumbnails.maxres.url:null,a.videoData.thumb_high=b.thumbnails.high?b.thumbnails.high.url:null,a.videoData.thumb_medium=b.thumbnails.medium?b.thumbnails.medium.url:null,jQuery.mbStorage.set("YTPlayer_data_"+a.videoID,a.videoData)}a.dataReceived=!0,jQuery(a).trigger("YTPChanged"),c(b.items[0].snippet),a.hasData=!0;var d=jQuery.Event("YTPData");d.prop={};for(var e in a.videoData)d.prop[e]=a.videoData[e];jQuery(a).trigger(d)});else{if(setTimeout(function(){jQuery(a).trigger("YTPChanged")},50),a.isPlayer&&!a.opt.autoPlay){var b=jQuery.mbYTPlayer.locationProtocol+"//i.ytimg.com/vi/"+a.videoID+"/hqdefault.jpg";b&&a.opt.containment.css({background:"rgba(0,0,0,0.5) url("+b+") center center",backgroundSize:"cover"}),a.opt.backgroundUrl=b}a.videoData=null,a.opt.ratio="auto"==a.opt.ratio?"16/9":a.opt.ratio}!a.isPlayer||a.opt.autoPlay||jQuery.mbBrowser.mobile||(a.loading=jQuery("<div/>").addClass("loading").html("Loading").hide(),jQuery(a).append(a.loading),a.loading.fadeIn())},removeStoredData:function(){jQuery.mbStorage.remove()},getVideoData:function(){var a=this.get(0);return a.videoData},getVideoID:function(){var a=this.get(0);return a.videoID||!1},setVideoQuality:function(a){var b=this.get(0);b.player.setPlaybackQuality(a)},playlist:function(a,b,c){var d=this,e=d.get(0);return e.isPlayList=!0,b&&(a=jQuery.shuffle(a)),e.videoID||(e.videos=a,e.videoCounter=0,e.videoLength=a.length,jQuery(e).data("property",a[0]),jQuery(e).mb_YTPlayer()),"function"==typeof c&&jQuery(e).one("YTPChanged",function(){c(e)}),jQuery(e).on("YTPEnd",function(){jQuery(e).playNext()}),this},playNext:function(){var a=this.get(0);return a.checkForStartAt&&(clearInterval(a.checkForStartAt),clearInterval(a.getState)),a.videoCounter++,a.videoCounter>=a.videoLength&&(a.videoCounter=0),jQuery(a).YTPChangeMovie(a.videos[a.videoCounter]),this},playPrev:function(){var a=this.get(0);return a.checkForStartAt&&(clearInterval(a.checkForStartAt),clearInterval(a.getState)),a.videoCounter--,a.videoCounter<0&&(a.videoCounter=a.videoLength-1),jQuery(a).YTPChangeMovie(a.videos[a.videoCounter]),this},playIndex:function(a){var b=this.get(0);return a-=1,b.checkForStartAt&&(clearInterval(b.checkForStartAt),clearInterval(b.getState)),b.videoCounter=a,b.videoCounter>=b.videoLength-1&&(b.videoCounter=b.videoLength-1),jQuery(b).YTPChangeMovie(b.videos[b.videoCounter]),this},changeMovie:function(a){var b=this,c=b.get(0);c.opt.startAt=0,c.opt.stopAt=0,c.opt.mask=!1,c.opt.mute=!0,c.hasData=!1,c.hasChanged=!0,c.player.loopTime=void 0,a&&jQuery.extend(c.opt,a),c.videoID=getYTPVideoID(c.opt.videoURL).videoID,"true"==c.opt.loop&&(c.opt.loop=9999),jQuery(c.playerEl).CSSAnimate({opacity:0},c.opt.fadeOnStartTime,function(){var a=jQuery.Event("YTPChangeMovie");a.time=c.currentTime,a.videoId=c.videoID,jQuery(c).trigger(a),jQuery(c).YTPGetPlayer().cueVideoByUrl(encodeURI(jQuery.mbYTPlayer.locationProtocol+"//www.youtube.com/v/"+c.videoID),1,c.opt.quality),jQuery(c).optimizeDisplay(),jQuery.mbYTPlayer.checkForState(c),jQuery.mbYTPlayer.getDataFromAPI(c)}),jQuery.mbYTPlayer.applyMask(c)},getPlayer:function(){return jQuery(this).get(0).player},playerDestroy:function(){var a=this.get(0);ytp.YTAPIReady=!0,ytp.backgroundIsInited=!1,a.isInit=!1,a.videoID=null,a.isReady=!1;var b=a.wrapper;return b.remove(),jQuery("#controlBar_"+a.id).remove(),clearInterval(a.checkForStartAt),clearInterval(a.getState),this},fullscreen:function(real){function hideMouse(){YTPlayer.overlay.css({cursor:"none"})}function RunPrefixMethod(a,b){for(var c,d,e=["webkit","moz","ms","o",""],f=0;f<e.length&&!a[c];){if(c=b,""==e[f]&&(c=c.substr(0,1).toLowerCase()+c.substr(1)),c=e[f]+c,d=typeof a[c],"undefined"!=d)return e=[e[f]],"function"==d?a[c]():a[c];f++}}function launchFullscreen(a){RunPrefixMethod(a,"RequestFullScreen")}function cancelFullscreen(){(RunPrefixMethod(document,"FullScreen")||RunPrefixMethod(document,"IsFullScreen"))&&RunPrefixMethod(document,"CancelFullScreen")}var YTPlayer=this.get(0);"undefined"==typeof real&&(real=YTPlayer.opt.realfullscreen),real=eval(real);var controls=jQuery("#controlBar_"+YTPlayer.id),fullScreenBtn=controls.find(".mb_OnlyYT"),videoWrapper=YTPlayer.isSelf?YTPlayer.opt.containment:YTPlayer.wrapper;if(real){var fullscreenchange=jQuery.mbBrowser.mozilla?"mozfullscreenchange":jQuery.mbBrowser.webkit?"webkitfullscreenchange":"fullscreenchange";jQuery(document).off(fullscreenchange).on(fullscreenchange,function(){var a=RunPrefixMethod(document,"IsFullScreen")||RunPrefixMethod(document,"FullScreen");a?(jQuery(YTPlayer).YTPSetVideoQuality("default"),jQuery(YTPlayer).trigger("YTPFullScreenStart")):(YTPlayer.isAlone=!1,fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT),jQuery(YTPlayer).YTPSetVideoQuality(YTPlayer.opt.quality),videoWrapper.removeClass("YTPFullscreen"),videoWrapper.CSSAnimate({opacity:YTPlayer.opt.opacity},YTPlayer.opt.fadeOnStartTime),videoWrapper.css({zIndex:0}),YTPlayer.isBackground?jQuery("body").after(controls):YTPlayer.wrapper.before(controls),jQuery(window).resize(),jQuery(YTPlayer).trigger("YTPFullScreenEnd"))})}return YTPlayer.isAlone?(jQuery(document).off("mousemove.YTPlayer"),clearTimeout(YTPlayer.hideCursor),YTPlayer.overlay.css({cursor:"auto"}),real?cancelFullscreen():(videoWrapper.CSSAnimate({opacity:YTPlayer.opt.opacity},YTPlayer.opt.fadeOnStartTime),videoWrapper.css({zIndex:0})),fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT),YTPlayer.isAlone=!1):(jQuery(document).on("mousemove.YTPlayer",function(a){YTPlayer.overlay.css({cursor:"auto"}),clearTimeout(YTPlayer.hideCursor),jQuery(a.target).parents().is(".mb_YTPBar")||(YTPlayer.hideCursor=setTimeout(hideMouse,3e3))}),hideMouse(),real?(videoWrapper.css({opacity:0}),videoWrapper.addClass("YTPFullscreen"),launchFullscreen(videoWrapper.get(0)),setTimeout(function(){videoWrapper.CSSAnimate({opacity:1},2*YTPlayer.opt.fadeOnStartTime),YTPlayer.wrapper.append(controls),jQuery(YTPlayer).optimizeDisplay(),YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime()+.1,!0)},YTPlayer.opt.fadeOnStartTime)):videoWrapper.css({zIndex:1e4}).CSSAnimate({opacity:1},2*YTPlayer.opt.fadeOnStartTime),fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite),YTPlayer.isAlone=!0),this},toggleLoops:function(){var a=this.get(0),b=a.opt;return 1==b.loop?b.loop=0:(b.startAt?a.player.seekTo(b.startAt):a.player.playVideo(),b.loop=1),this},play:function(){var a=this.get(0);if(!a.isReady)return this;a.player.playVideo(),a.wrapper.CSSAnimate({opacity:a.isAlone?1:a.opt.opacity},4*a.opt.fadeOnStartTime),jQuery(a.playerEl).CSSAnimate({opacity:1},2*a.opt.fadeOnStartTime);var b=jQuery("#controlBar_"+a.id),c=b.find(".mb_YTPPlaypause");return c.html(jQuery.mbYTPlayer.controls.pause),a.state=1,a.orig_background=jQuery(a).css("background-image"),this},togglePlay:function(a){var b=this.get(0);return 1==b.state?this.YTPPause():this.YTPPlay(),"function"==typeof a&&a(b.state),this},stop:function(){var a=this.get(0),b=jQuery("#controlBar_"+a.id),c=b.find(".mb_YTPPlaypause");return c.html(jQuery.mbYTPlayer.controls.play),a.player.stopVideo(),this},pause:function(){var a=this.get(0);return a.player.pauseVideo(),a.state=2,this},seekTo:function(a){var b=this.get(0);return b.player.seekTo(a,!0),this},setVolume:function(a){var b=this.get(0);return a||b.opt.vol||0!=b.player.getVolume()?!a&&b.player.getVolume()>0||a&&b.opt.vol==a?b.isMute?jQuery(b).YTPUnmute():jQuery(b).YTPMute():(b.opt.vol=a,b.player.setVolume(b.opt.vol),b.volumeBar&&b.volumeBar.length&&b.volumeBar.updateSliderVal(a)):jQuery(b).YTPUnmute(),this},toggleVolume:function(){var a=this.get(0);if(a)return a.player.isMuted()?(jQuery(a).YTPUnmute(),!0):(jQuery(a).YTPMute(),!1)},mute:function(){var a=this.get(0);if(!a.isMute){a.player.mute(),a.isMute=!0,a.player.setVolume(0),a.volumeBar&&a.volumeBar.length&&a.volumeBar.width()>10&&a.volumeBar.updateSliderVal(0);var b=jQuery("#controlBar_"+a.id),c=b.find(".mb_YTPMuteUnmute");c.html(jQuery.mbYTPlayer.controls.unmute),jQuery(a).addClass("isMuted"),a.volumeBar&&a.volumeBar.length&&a.volumeBar.addClass("muted");var d=jQuery.Event("YTPMuted");return d.time=a.currentTime,a.canTrigger&&jQuery(a).trigger(d),this}},unmute:function(){var a=this.get(0);if(a.isMute){a.player.unMute(),a.isMute=!1,a.player.setVolume(a.opt.vol),a.volumeBar&&a.volumeBar.length&&a.volumeBar.updateSliderVal(a.opt.vol>10?a.opt.vol:10);var b=jQuery("#controlBar_"+a.id),c=b.find(".mb_YTPMuteUnmute");c.html(jQuery.mbYTPlayer.controls.mute),jQuery(a).removeClass("isMuted"),a.volumeBar&&a.volumeBar.length&&a.volumeBar.removeClass("muted");var d=jQuery.Event("YTPUnmuted");return d.time=a.currentTime,a.canTrigger&&jQuery(a).trigger(d),this}},applyFilter:function(a,b){return this.each(function(){var c=this;c.filters[a].value=b,c.filtersEnabled&&jQuery(c).YTPEnableFilters()})},applyFilters:function(a){return this.each(function(){var b=this;if(!b.isReady)return void jQuery(b).on("YTPReady",function(){jQuery(b).YTPApplyFilters(a)});for(var c in a)jQuery(b).YTPApplyFilter(c,a[c]);jQuery(b).trigger("YTPFiltersApplied")})},toggleFilter:function(a,b){return this.each(function(){var c=this;c.filters[a].value?c.filters[a].value=0:c.filters[a].value=b,c.filtersEnabled&&jQuery(this).YTPEnableFilters()})},toggleFilters:function(a){return this.each(function(){var b=this;b.filtersEnabled?(jQuery(b).trigger("YTPDisableFilters"),jQuery(b).YTPDisableFilters()):(jQuery(b).YTPEnableFilters(),jQuery(b).trigger("YTPEnableFilters")),"function"==typeof a&&a(b.filtersEnabled)})},disableFilters:function(){return this.each(function(){var a=this,b=jQuery(a.playerEl);b.css("-webkit-filter",""),b.css("filter",""),a.filtersEnabled=!1})},enableFilters:function(){return this.each(function(){var a=this,b=jQuery(a.playerEl),c="";for(var d in a.filters)a.filters[d].value&&(c+=d.replace("_","-")+"("+a.filters[d].value+a.filters[d].unit+") ");b.css("-webkit-filter",c),b.css("filter",c),a.filtersEnabled=!0})},removeFilter:function(a,b){return this.each(function(){var c=this;if("function"==typeof a&&(b=a,a=null),a)jQuery(this).YTPApplyFilter(a,0),"function"==typeof b&&b(a);else for(var d in c.filters)jQuery(this).YTPApplyFilter(d,0),"function"==typeof b&&b(d)})},getFilters:function(){var a=this.get(0);return a.filters},addMask:function(a){var b=this.get(0),c=b.overlay;a||(a=b.actualMask);var d=jQuery("<img/>").attr("src",a).on("load",function(){c.CSSAnimate({opacity:0},b.opt.fadeOnStartTime,function(){b.hasMask=!0,d.remove(),c.css({backgroundImage:"url("+a+")",backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"cover"}),c.CSSAnimate({opacity:1},b.opt.fadeOnStartTime)})});return this},removeMask:function(){var a=this.get(0),b=a.overlay;return b.CSSAnimate({opacity:0},a.opt.fadeOnStartTime,function(){a.hasMask=!1,b.css({backgroundImage:"",backgroundRepeat:"",backgroundPosition:"",backgroundSize:""}),b.CSSAnimate({opacity:1},a.opt.fadeOnStartTime)}),this},applyMask:function(a){var b=jQuery(a);if(b.off("YTPTime.mask"),a.opt.mask)if("string"==typeof a.opt.mask)b.YTPAddMask(a.opt.mask),a.actualMask=a.opt.mask;else if("object"==typeof a.opt.mask){for(var c in a.opt.mask)if(a.opt.mask[c]){jQuery("<img/>").attr("src",a.opt.mask[c])}a.opt.mask[0]&&b.YTPAddMask(a.opt.mask[0]),b.on("YTPTime.mask",function(c){for(var d in a.opt.mask)c.time==d&&(a.opt.mask[d]?(b.YTPAddMask(a.opt.mask[d]),a.actualMask=a.opt.mask[d]):b.YTPRemoveMask())})}},toggleMask:function(){var a=this.get(0),b=$(a);return a.hasMask?b.YTPRemoveMask():b.YTPAddMask(),this},manageProgress:function(){var a=this.get(0),b=jQuery("#controlBar_"+a.id),c=b.find(".mb_YTPProgress"),d=b.find(".mb_YTPLoaded"),e=b.find(".mb_YTPseekbar"),f=c.outerWidth(),g=Math.floor(a.player.getCurrentTime()),h=Math.floor(a.player.getDuration()),i=g*f/h,j=0,k=100*a.player.getVideoLoadedFraction();return d.css({left:j,width:k+"%"}),e.css({left:0,width:i}),{totalTime:h,currentTime:g}},buildControls:function(YTPlayer){var data=YTPlayer.opt;if(data.showYTLogo=data.showYTLogo||data.printUrl,!jQuery("#controlBar_"+YTPlayer.id).length){YTPlayer.controlBar=jQuery("<span/>").attr("id","controlBar_"+YTPlayer.id).addClass("mb_YTPBar").css({whiteSpace:"noWrap",position:YTPlayer.isBackground?"fixed":"absolute",zIndex:YTPlayer.isBackground?1e4:1e3}).hide();var buttonBar=jQuery("<div/>").addClass("buttonBar"),playpause=jQuery("<span>"+jQuery.mbYTPlayer.controls.play+"</span>").addClass("mb_YTPPlaypause ytpicon").click(function(){1==YTPlayer.player.getPlayerState()?jQuery(YTPlayer).YTPPause():jQuery(YTPlayer).YTPPlay()}),MuteUnmute=jQuery("<span>"+jQuery.mbYTPlayer.controls.mute+"</span>").addClass("mb_YTPMuteUnmute ytpicon").click(function(){0==YTPlayer.player.getVolume()?jQuery(YTPlayer).YTPUnmute():jQuery(YTPlayer).YTPMute()}),volumeBar=jQuery("<div/>").addClass("mb_YTPVolumeBar").css({display:"inline-block"});YTPlayer.volumeBar=volumeBar;var idx=jQuery("<span/>").addClass("mb_YTPTime"),vURL=data.videoURL?data.videoURL:"";vURL.indexOf("http")<0&&(vURL=jQuery.mbYTPlayer.locationProtocol+"//www.youtube.com/watch?v="+data.videoURL);var movieUrl=jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTPUrl ytpicon").attr("title","view on YouTube").on("click",function(){window.open(vURL,"viewOnYT")}),onlyVideo=jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click",function(){jQuery(YTPlayer).YTPFullscreen(data.realfullscreen)}),progressBar=jQuery("<div/>").addClass("mb_YTPProgress").css("position","absolute").click(function(a){timeBar.css({width:a.clientX-timeBar.offset().left}),YTPlayer.timeW=a.clientX-timeBar.offset().left,YTPlayer.controlBar.find(".mb_YTPLoaded").css({width:0});var b=Math.floor(YTPlayer.player.getDuration());YTPlayer["goto"]=timeBar.outerWidth()*b/progressBar.outerWidth(),YTPlayer.player.seekTo(parseFloat(YTPlayer["goto"]),!0),YTPlayer.controlBar.find(".mb_YTPLoaded").css({width:0})}),loadedBar=jQuery("<div/>").addClass("mb_YTPLoaded").css("position","absolute"),timeBar=jQuery("<div/>").addClass("mb_YTPseekbar").css("position","absolute");progressBar.append(loadedBar).append(timeBar),buttonBar.append(playpause).append(MuteUnmute).append(volumeBar).append(idx),data.showYTLogo&&buttonBar.append(movieUrl),(YTPlayer.isBackground||eval(YTPlayer.opt.realfullscreen)&&!YTPlayer.isBackground)&&buttonBar.append(onlyVideo),YTPlayer.controlBar.append(buttonBar).append(progressBar),YTPlayer.isBackground?jQuery("body").after(YTPlayer.controlBar):(YTPlayer.controlBar.addClass("inlinePlayer"),YTPlayer.wrapper.before(YTPlayer.controlBar)),volumeBar.simpleSlider({initialval:YTPlayer.opt.vol,scale:100,orientation:"h",callback:function(a){0==a.value?jQuery(YTPlayer).YTPMute():jQuery(YTPlayer).YTPUnmute(),YTPlayer.player.setVolume(a.value),YTPlayer.isMute||(YTPlayer.opt.vol=a.value)}})}},checkForState:function(YTPlayer){var interval=YTPlayer.opt.showControls?100:400;return clearInterval(YTPlayer.getState),jQuery.contains(document,YTPlayer)?(jQuery.mbYTPlayer.checkForStart(YTPlayer),void(YTPlayer.getState=setInterval(function(){var prog=jQuery(YTPlayer).YTPManageProgress(),$YTPlayer=jQuery(YTPlayer),data=YTPlayer.opt,startAt=YTPlayer.start_from_last?YTPlayer.start_from_last:YTPlayer.opt.startAt?YTPlayer.opt.startAt:1;YTPlayer.start_from_last=null;var stopAt=YTPlayer.opt.stopAt>YTPlayer.opt.startAt?YTPlayer.opt.stopAt:0;if(stopAt=stopAt<YTPlayer.player.getDuration()?stopAt:0,YTPlayer.currentTime!=prog.currentTime){var YTPEvent=jQuery.Event("YTPTime");YTPEvent.time=YTPlayer.currentTime,jQuery(YTPlayer).trigger(YTPEvent)}if(YTPlayer.currentTime=prog.currentTime,YTPlayer.totalTime=YTPlayer.player.getDuration(),0==YTPlayer.player.getVolume()?$YTPlayer.addClass("isMuted"):$YTPlayer.removeClass("isMuted"),YTPlayer.opt.showControls&&(prog.totalTime?YTPlayer.controlBar.find(".mb_YTPTime").html(jQuery.mbYTPlayer.formatTime(prog.currentTime)+" / "+jQuery.mbYTPlayer.formatTime(prog.totalTime)):YTPlayer.controlBar.find(".mb_YTPTime").html("-- : -- / -- : --")),eval(YTPlayer.opt.stopMovieOnBlur)&&(document.hasFocus()?document.hasFocus()&&!YTPlayer.hasFocus&&-1!=YTPlayer.state&&0!=YTPlayer.state&&(YTPlayer.hasFocus=!0,$YTPlayer.YTPPlay()):1==YTPlayer.state&&(YTPlayer.hasFocus=!1,$YTPlayer.YTPPause())),YTPlayer.controlBar.length&&YTPlayer.controlBar.outerWidth()<=400&&!YTPlayer.isCompact?(YTPlayer.controlBar.addClass("compact"),YTPlayer.isCompact=!0,!YTPlayer.isMute&&YTPlayer.volumeBar&&YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)):YTPlayer.controlBar.length&&YTPlayer.controlBar.outerWidth()>400&&YTPlayer.isCompact&&(YTPlayer.controlBar.removeClass("compact"),YTPlayer.isCompact=!1,!YTPlayer.isMute&&YTPlayer.volumeBar&&YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)),1==YTPlayer.player.getPlayerState()&&(parseFloat(YTPlayer.player.getDuration()-.5)<YTPlayer.player.getCurrentTime()||stopAt>0&&parseFloat(YTPlayer.player.getCurrentTime())>stopAt)){if(YTPlayer.isEnded)return;if(YTPlayer.isEnded=!0,setTimeout(function(){YTPlayer.isEnded=!1},1e3),YTPlayer.isPlayList){if(!data.loop||data.loop>0&&YTPlayer.player.loopTime===data.loop-1){YTPlayer.player.loopTime=void 0,clearInterval(YTPlayer.getState);var YTPEnd=jQuery.Event("YTPEnd");return YTPEnd.time=YTPlayer.currentTime,void jQuery(YTPlayer).trigger(YTPEnd)}}else if(!data.loop||data.loop>0&&YTPlayer.player.loopTime===data.loop-1)return YTPlayer.player.loopTime=void 0,YTPlayer.preventTrigger=!0,YTPlayer.state=2,jQuery(YTPlayer).YTPPause(),void YTPlayer.wrapper.CSSAnimate({opacity:0},YTPlayer.opt.fadeOnStartTime,function(){YTPlayer.controlBar.length&&YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);var a=jQuery.Event("YTPEnd");a.time=YTPlayer.currentTime,jQuery(YTPlayer).trigger(a),YTPlayer.player.seekTo(startAt,!0),YTPlayer.isBackground?YTPlayer.orig_background&&jQuery(YTPlayer).css("background-image",YTPlayer.orig_background):YTPlayer.opt.backgroundUrl&&YTPlayer.isPlayer&&(YTPlayer.opt.backgroundUrl=YTPlayer.opt.backgroundUrl||YTPlayer.orig_background,YTPlayer.opt.containment.css({background:"url("+YTPlayer.opt.backgroundUrl+") center center",backgroundSize:"cover"}))});YTPlayer.player.loopTime=YTPlayer.player.loopTime?++YTPlayer.player.loopTime:1,startAt=startAt||1,YTPlayer.preventTrigger=!0,YTPlayer.state=2,jQuery(YTPlayer).YTPPause(),YTPlayer.player.seekTo(startAt,!0),$YTPlayer.YTPPlay()}},interval))):(jQuery(YTPlayer).YTPPlayerDestroy(),clearInterval(YTPlayer.getState),void clearInterval(YTPlayer.checkForStartAt))},getTime:function(){var a=this.get(0);return jQuery.mbYTPlayer.formatTime(a.currentTime)},getTotalTime:function(){var a=this.get(0);return jQuery.mbYTPlayer.formatTime(a.totalTime)},checkForStart:function(a){var b=jQuery(a);if(!jQuery.contains(document,a))return void jQuery(a).YTPPlayerDestroy();if(a.preventTrigger=!0,a.state=2,jQuery(a).YTPPause(),jQuery(a).muteYTPVolume(),jQuery("#controlBar_"+a.id).remove(),a.controlBar=!1,a.opt.showControls&&jQuery.mbYTPlayer.buildControls(a),a.opt.addRaster){var c="dot"==a.opt.addRaster?"raster-dot":"raster";a.overlay.addClass(a.isRetina?c+" retina":c)}else a.overlay.removeClass(function(a,b){var c=b.split(" "),d=[];return jQuery.each(c,function(a,b){/raster.*/.test(b)&&d.push(b)}),d.push("retina"),d.join(" ")});var d=a.start_from_last?a.start_from_last:a.opt.startAt?a.opt.startAt:1;a.start_from_last=null,a.player.playVideo(),a.player.seekTo(d,!0),clearInterval(a.checkForStartAt),a.checkForStartAt=setInterval(function(){jQuery(a).YTPMute();var c=a.player.getVideoLoadedFraction()>=d/a.player.getDuration();if(a.player.getDuration()>0&&a.player.getCurrentTime()>=d&&c){clearInterval(a.checkForStartAt),"function"==typeof a.opt.onReady&&a.opt.onReady(a),a.isReady=!0;var e=jQuery.Event("YTPReady");if(e.time=a.currentTime,jQuery(a).trigger(e),a.preventTrigger=!0,a.state=2,jQuery(a).YTPPause(),a.opt.mute||jQuery(a).YTPUnmute(),a.canTrigger=!0,a.opt.autoPlay){var f=jQuery.Event("YTPStart");f.time=a.currentTime,jQuery(a).trigger(f),jQuery(a.playerEl).CSSAnimate({opacity:1},1e3),b.YTPPlay(),a.wrapper.CSSAnimate({opacity:a.isAlone?1:a.opt.opacity},2*a.opt.fadeOnStartTime),"mac"==jQuery.mbBrowser.os.name&&jQuery.mbBrowser.safari&&jQuery.mbBrowser.versionCompare(jQuery.mbBrowser.fullVersion,"10.1")<0&&(a.safariPlay=setInterval(function(){1!=a.state?b.YTPPlay():clearInterval(a.safariPlay)},10)),b.one("YTPReady",function(){b.YTPPlay()})}else a.player.pauseVideo(),a.isPlayer||(jQuery(a.playerEl).CSSAnimate({opacity:1
},a.opt.fadeOnStartTime),a.wrapper.CSSAnimate({opacity:a.isAlone?1:a.opt.opacity},a.opt.fadeOnStartTime)),a.controlBar.length&&a.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);a.isPlayer&&!a.opt.autoPlay&&a.loading&&a.loading.length&&(a.loading.html("Ready"),setTimeout(function(){a.loading.fadeOut()},100)),a.controlBar&&a.controlBar.length&&a.controlBar.slideDown(1e3)}else"mac"==jQuery.mbBrowser.os.name&&jQuery.mbBrowser.safari&&jQuery.mbBrowser.fullVersion&&jQuery.mbBrowser.versionCompare(jQuery.mbBrowser.fullVersion,"10.1")<0&&(a.player.playVideo(),d>=0&&a.player.seekTo(d,!0))},10)},setAnchor:function(a){var b=this;b.optimizeDisplay(a)},getAnchor:function(){var a=this.get(0);return a.opt.anchor},formatTime:function(a){var b=Math.floor(a/60),c=Math.floor(a-60*b);return(9>=b?"0"+b:b)+" : "+(9>=c?"0"+c:c)}},jQuery.fn.optimizeDisplay=function(anchor){var YTPlayer=this.get(0),playerBox=jQuery(YTPlayer.playerEl),vid={};YTPlayer.opt.anchor=anchor||YTPlayer.opt.anchor,YTPlayer.opt.anchor="undefined "!=typeof YTPlayer.opt.anchor?YTPlayer.opt.anchor:"center,center";var YTPAlign=YTPlayer.opt.anchor.split(",");if(YTPlayer.opt.optimizeDisplay){var abundance=YTPlayer.isPlayer?0:80,win={},el=YTPlayer.wrapper;win.width=el.outerWidth(),win.height=el.outerHeight()+abundance,YTPlayer.opt.ratio=eval(YTPlayer.opt.ratio),vid.width=win.width,vid.height=Math.ceil(vid.width/YTPlayer.opt.ratio),vid.marginTop=Math.ceil(-((vid.height-win.height)/2)),vid.marginLeft=0;var lowest=vid.height<win.height;lowest&&(vid.height=win.height,vid.width=Math.ceil(vid.height*YTPlayer.opt.ratio),vid.marginTop=0,vid.marginLeft=Math.ceil(-((vid.width-win.width)/2)));for(var a in YTPAlign)if(YTPAlign.hasOwnProperty(a)){var al=YTPAlign[a].replace(/ /g,"");switch(al){case"top":vid.marginTop=lowest?-((vid.height-win.height)/2):0;break;case"bottom":vid.marginTop=lowest?0:-(vid.height-win.height);break;case"left":vid.marginLeft=0;break;case"right":vid.marginLeft=lowest?-(vid.width-win.width):0;break;default:vid.width>win.width&&(vid.marginLeft=-((vid.width-win.width)/2))}}}else vid.width="100%",vid.height="100%",vid.marginTop=0,vid.marginLeft=0;playerBox.css({width:vid.width,height:vid.height,marginTop:vid.marginTop,marginLeft:vid.marginLeft,maxWidth:"initial"})},jQuery.shuffle=function(a){for(var b=a.slice(),c=b.length,d=c;d--;){var e=parseInt(Math.random()*c),f=b[d];b[d]=b[e],b[e]=f}return b},jQuery.fn.unselectable=function(){return this.each(function(){jQuery(this).css({"-moz-user-select":"none","-webkit-user-select":"none","user-select":"none"}).attr("unselectable","on")})},jQuery.fn.YTPlayer=jQuery.mbYTPlayer.buildPlayer,jQuery.fn.YTPGetPlayer=jQuery.mbYTPlayer.getPlayer,jQuery.fn.YTPGetVideoID=jQuery.mbYTPlayer.getVideoID,jQuery.fn.YTPChangeMovie=jQuery.mbYTPlayer.changeMovie,jQuery.fn.YTPPlayerDestroy=jQuery.mbYTPlayer.playerDestroy,jQuery.fn.YTPPlay=jQuery.mbYTPlayer.play,jQuery.fn.YTPTogglePlay=jQuery.mbYTPlayer.togglePlay,jQuery.fn.YTPStop=jQuery.mbYTPlayer.stop,jQuery.fn.YTPPause=jQuery.mbYTPlayer.pause,jQuery.fn.YTPSeekTo=jQuery.mbYTPlayer.seekTo,jQuery.fn.YTPlaylist=jQuery.mbYTPlayer.playlist,jQuery.fn.YTPPlayNext=jQuery.mbYTPlayer.playNext,jQuery.fn.YTPPlayPrev=jQuery.mbYTPlayer.playPrev,jQuery.fn.YTPPlayIndex=jQuery.mbYTPlayer.playIndex,jQuery.fn.YTPMute=jQuery.mbYTPlayer.mute,jQuery.fn.YTPUnmute=jQuery.mbYTPlayer.unmute,jQuery.fn.YTPToggleVolume=jQuery.mbYTPlayer.toggleVolume,jQuery.fn.YTPSetVolume=jQuery.mbYTPlayer.setVolume,jQuery.fn.YTPGetVideoData=jQuery.mbYTPlayer.getVideoData,jQuery.fn.YTPFullscreen=jQuery.mbYTPlayer.fullscreen,jQuery.fn.YTPToggleLoops=jQuery.mbYTPlayer.toggleLoops,jQuery.fn.YTPSetVideoQuality=jQuery.mbYTPlayer.setVideoQuality,jQuery.fn.YTPManageProgress=jQuery.mbYTPlayer.manageProgress,jQuery.fn.YTPApplyFilter=jQuery.mbYTPlayer.applyFilter,jQuery.fn.YTPApplyFilters=jQuery.mbYTPlayer.applyFilters,jQuery.fn.YTPToggleFilter=jQuery.mbYTPlayer.toggleFilter,jQuery.fn.YTPToggleFilters=jQuery.mbYTPlayer.toggleFilters,jQuery.fn.YTPRemoveFilter=jQuery.mbYTPlayer.removeFilter,jQuery.fn.YTPDisableFilters=jQuery.mbYTPlayer.disableFilters,jQuery.fn.YTPEnableFilters=jQuery.mbYTPlayer.enableFilters,jQuery.fn.YTPGetFilters=jQuery.mbYTPlayer.getFilters,jQuery.fn.YTPGetTime=jQuery.mbYTPlayer.getTime,jQuery.fn.YTPGetTotalTime=jQuery.mbYTPlayer.getTotalTime,jQuery.fn.YTPAddMask=jQuery.mbYTPlayer.addMask,jQuery.fn.YTPRemoveMask=jQuery.mbYTPlayer.removeMask,jQuery.fn.YTPToggleMask=jQuery.mbYTPlayer.toggleMask,jQuery.fn.YTPSetAnchor=jQuery.mbYTPlayer.setAnchor,jQuery.fn.YTPGetAnchor=jQuery.mbYTPlayer.getAnchor,jQuery.fn.mb_YTPlayer=jQuery.mbYTPlayer.buildPlayer,jQuery.fn.playNext=jQuery.mbYTPlayer.playNext,jQuery.fn.playPrev=jQuery.mbYTPlayer.playPrev,jQuery.fn.changeMovie=jQuery.mbYTPlayer.changeMovie,jQuery.fn.getVideoID=jQuery.mbYTPlayer.getVideoID,jQuery.fn.getPlayer=jQuery.mbYTPlayer.getPlayer,jQuery.fn.playerDestroy=jQuery.mbYTPlayer.playerDestroy,jQuery.fn.fullscreen=jQuery.mbYTPlayer.fullscreen,jQuery.fn.buildYTPControls=jQuery.mbYTPlayer.buildControls,jQuery.fn.playYTP=jQuery.mbYTPlayer.play,jQuery.fn.toggleLoops=jQuery.mbYTPlayer.toggleLoops,jQuery.fn.stopYTP=jQuery.mbYTPlayer.stop,jQuery.fn.pauseYTP=jQuery.mbYTPlayer.pause,jQuery.fn.seekToYTP=jQuery.mbYTPlayer.seekTo,jQuery.fn.muteYTPVolume=jQuery.mbYTPlayer.mute,jQuery.fn.unmuteYTPVolume=jQuery.mbYTPlayer.unmute,jQuery.fn.setYTPVolume=jQuery.mbYTPlayer.setVolume,jQuery.fn.setVideoQuality=jQuery.mbYTPlayer.setVideoQuality,jQuery.fn.manageYTPProgress=jQuery.mbYTPlayer.manageProgress,jQuery.fn.YTPGetDataFromFeed=jQuery.mbYTPlayer.getVideoData}(jQuery,ytp),jQuery.support.CSStransition=function(){var a=document.body||document.documentElement,b=a.style;return void 0!==b.transition||void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.MsTransition||void 0!==b.OTransition}(),jQuery.CSS={name:"mb.CSSAnimate",author:"Matteo Bicocchi",version:"2.0.0",transitionEnd:"transitionEnd",sfx:"",filters:{blur:{min:0,max:100,unit:"px"},brightness:{min:0,max:400,unit:"%"},contrast:{min:0,max:400,unit:"%"},grayscale:{min:0,max:100,unit:"%"},hueRotate:{min:0,max:360,unit:"deg"},invert:{min:0,max:100,unit:"%"},saturate:{min:0,max:400,unit:"%"},sepia:{min:0,max:100,unit:"%"}},normalizeCss:function(a){var b=jQuery.extend(!0,{},a);jQuery.browser.webkit||jQuery.browser.opera?jQuery.CSS.sfx="-webkit-":jQuery.browser.mozilla?jQuery.CSS.sfx="-moz-":jQuery.browser.msie&&(jQuery.CSS.sfx="-ms-");for(var c in b){"transform"===c&&(b[jQuery.CSS.sfx+"transform"]=b[c],delete b[c]),"transform-origin"===c&&(b[jQuery.CSS.sfx+"transform-origin"]=a[c],delete b[c]),"filter"!==c||jQuery.browser.mozilla||(b[jQuery.CSS.sfx+"filter"]=a[c],delete b[c]),"blur"===c&&setFilter(b,"blur",a[c]),"brightness"===c&&setFilter(b,"brightness",a[c]),"contrast"===c&&setFilter(b,"contrast",a[c]),"grayscale"===c&&setFilter(b,"grayscale",a[c]),"hueRotate"===c&&setFilter(b,"hueRotate",a[c]),"invert"===c&&setFilter(b,"invert",a[c]),"saturate"===c&&setFilter(b,"saturate",a[c]),"sepia"===c&&setFilter(b,"sepia",a[c]);var d="";"x"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" translateX("+setUnit(a[c],"px")+")",delete b[c]),"y"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" translateY("+setUnit(a[c],"px")+")",delete b[c]),"z"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" translateZ("+setUnit(a[c],"px")+")",delete b[c]),"rotate"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" rotate("+setUnit(a[c],"deg")+")",delete b[c]),"rotateX"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" rotateX("+setUnit(a[c],"deg")+")",delete b[c]),"rotateY"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" rotateY("+setUnit(a[c],"deg")+")",delete b[c]),"rotateZ"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" rotateZ("+setUnit(a[c],"deg")+")",delete b[c]),"scale"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" scale("+setUnit(a[c],"")+")",delete b[c]),"scaleX"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" scaleX("+setUnit(a[c],"")+")",delete b[c]),"scaleY"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" scaleY("+setUnit(a[c],"")+")",delete b[c]),"scaleZ"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" scaleZ("+setUnit(a[c],"")+")",delete b[c]),"skew"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" skew("+setUnit(a[c],"deg")+")",delete b[c]),"skewX"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" skewX("+setUnit(a[c],"deg")+")",delete b[c]),"skewY"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" skewY("+setUnit(a[c],"deg")+")",delete b[c]),"perspective"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" perspective("+setUnit(a[c],"px")+")",delete b[c])}return b},getProp:function(a){var b=[];for(var c in a)b.indexOf(c)<0&&b.push(uncamel(c));return b.join(",")},animate:function(a,b,c,d,e){return this.each(function(){function f(){g.called=!0,g.CSSAIsRunning=!1,h.off(jQuery.CSS.transitionEnd+"."+g.id),clearTimeout(g.timeout),h.css(jQuery.CSS.sfx+"transition",""),"function"==typeof e&&e.apply(g),"function"==typeof g.CSSqueue&&(g.CSSqueue(),g.CSSqueue=null)}var g=this,h=jQuery(this);g.id=g.id||"CSSA_"+(new Date).getTime();var i=i||{type:"noEvent"};if(g.CSSAIsRunning&&g.eventType==i.type&&!jQuery.browser.msie&&jQuery.browser.version<=9)return void(g.CSSqueue=function(){h.CSSAnimate(a,b,c,d,e)});if(g.CSSqueue=null,g.eventType=i.type,0!==h.length&&a){if(a=jQuery.normalizeCss(a),g.CSSAIsRunning=!0,"function"==typeof b&&(e=b,b=jQuery.fx.speeds._default),"function"==typeof c&&(d=c,c=0),"string"==typeof c&&(e=c,c=0),"function"==typeof d&&(e=d,d="cubic-bezier(0.65,0.03,0.36,0.72)"),"string"==typeof b)for(var j in jQuery.fx.speeds){if(b==j){b=jQuery.fx.speeds[j];break}b=jQuery.fx.speeds._default}if(b||(b=jQuery.fx.speeds._default),"string"==typeof e&&(d=e,e=null),!jQuery.support.CSStransition){for(var k in a){if("transform"===k&&delete a[k],"filter"===k&&delete a[k],"transform-origin"===k&&delete a[k],"auto"===a[k]&&delete a[k],"x"===k){var l=a[k],m="left";a[m]=l,delete a[k]}if("y"===k){var l=a[k],m="top";a[m]=l,delete a[k]}("-ms-transform"===k||"-ms-filter"===k)&&delete a[k]}return void h.delay(c).animate(a,b,e)}var n={"default":"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};n[d]&&(d=n[d]),h.off(jQuery.CSS.transitionEnd+"."+g.id);var o=jQuery.CSS.getProp(a),p={};jQuery.extend(p,a),p[jQuery.CSS.sfx+"transition-property"]=o,p[jQuery.CSS.sfx+"transition-duration"]=b+"ms",p[jQuery.CSS.sfx+"transition-delay"]=c+"ms",p[jQuery.CSS.sfx+"transition-timing-function"]=d,setTimeout(function(){h.one(jQuery.CSS.transitionEnd+"."+g.id,f),h.css(p)},1),g.timeout=setTimeout(function(){return g.called||!e?(g.called=!1,void(g.CSSAIsRunning=!1)):(h.css(jQuery.CSS.sfx+"transition",""),e.apply(g),g.CSSAIsRunning=!1,void("function"==typeof g.CSSqueue&&(g.CSSqueue(),g.CSSqueue=null)))},b+c+10)}})}},jQuery.fn.CSSAnimate=jQuery.CSS.animate,jQuery.normalizeCss=jQuery.CSS.normalizeCss,jQuery.fn.css3=function(a){return this.each(function(){var b=jQuery(this),c=jQuery.normalizeCss(a);b.css(c)})};var nAgt=navigator.userAgent;jQuery.browser=jQuery.browser||{},jQuery.browser.mozilla=!1,jQuery.browser.webkit=!1,jQuery.browser.opera=!1,jQuery.browser.safari=!1,jQuery.browser.chrome=!1,jQuery.browser.androidStock=!1,jQuery.browser.msie=!1,jQuery.browser.edge=!1,jQuery.browser.ua=nAgt;var getOS=function(){var a={version:"Unknown version",name:"Unknown OS"};return-1!=navigator.appVersion.indexOf("Win")&&(a.name="Windows"),-1!=navigator.appVersion.indexOf("Mac")&&0>navigator.appVersion.indexOf("Mobile")&&(a.name="Mac"),-1!=navigator.appVersion.indexOf("Linux")&&(a.name="Linux"),/Mac OS X/.test(nAgt)&&!/Mobile/.test(nAgt)&&(a.version=/Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1],a.version=a.version.replace(/_/g,".").substring(0,5)),/Windows/.test(nAgt)&&(a.version="Unknown.Unknown"),/Windows NT 5.1/.test(nAgt)&&(a.version="5.1"),/Windows NT 6.0/.test(nAgt)&&(a.version="6.0"),/Windows NT 6.1/.test(nAgt)&&(a.version="6.1"),/Windows NT 6.2/.test(nAgt)&&(a.version="6.2"),/Windows NT 10.0/.test(nAgt)&&(a.version="10.0"),/Linux/.test(nAgt)&&/Linux/.test(nAgt)&&(a.version="Unknown.Unknown"),a.name=a.name.toLowerCase(),a.major_version="Unknown",a.minor_version="Unknown","Unknown.Unknown"!=a.version&&(a.major_version=parseFloat(a.version.split(".")[0]),a.minor_version=parseFloat(a.version.split(".")[1])),a};jQuery.browser.os=getOS(),jQuery.browser.hasTouch=isTouchSupported(),jQuery.browser.name=navigator.appName,jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10);var nameOffset,verOffset,ix;if(-1!=(verOffset=nAgt.indexOf("Opera")))jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=nAgt.substring(verOffset+6),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8));else if(-1!=(verOffset=nAgt.indexOf("OPR")))jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=nAgt.substring(verOffset+4);else if(-1!=(verOffset=nAgt.indexOf("MSIE")))jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer",jQuery.browser.fullVersion=nAgt.substring(verOffset+5);else if(-1!=nAgt.indexOf("Trident")){jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer";var start=nAgt.indexOf("rv:")+3,end=start+4;jQuery.browser.fullVersion=nAgt.substring(start,end)}else-1!=(verOffset=nAgt.indexOf("Edge"))?(jQuery.browser.edge=!0,jQuery.browser.name="Microsoft Edge",jQuery.browser.fullVersion=nAgt.substring(verOffset+5)):-1!=(verOffset=nAgt.indexOf("Chrome"))?(jQuery.browser.webkit=!0,jQuery.browser.chrome=!0,jQuery.browser.name="Chrome",jQuery.browser.fullVersion=nAgt.substring(verOffset+7)):-1<nAgt.indexOf("mozilla/5.0")&&-1<nAgt.indexOf("android ")&&-1<nAgt.indexOf("applewebkit")&&!(-1<nAgt.indexOf("chrome"))?(verOffset=nAgt.indexOf("Chrome"),jQuery.browser.webkit=!0,jQuery.browser.androidStock=!0,jQuery.browser.name="androidStock",jQuery.browser.fullVersion=nAgt.substring(verOffset+7)):-1!=(verOffset=nAgt.indexOf("Safari"))?(jQuery.browser.webkit=!0,jQuery.browser.safari=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("AppleWebkit"))?(jQuery.browser.webkit=!0,jQuery.browser.safari=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("Firefox"))?(jQuery.browser.mozilla=!0,jQuery.browser.name="Firefox",jQuery.browser.fullVersion=nAgt.substring(verOffset+8)):(nameOffset=nAgt.lastIndexOf(" ")+1)<(verOffset=nAgt.lastIndexOf("/"))&&(jQuery.browser.name=nAgt.substring(nameOffset,verOffset),jQuery.browser.fullVersion=nAgt.substring(verOffset+1),jQuery.browser.name.toLowerCase()==jQuery.browser.name.toUpperCase()&&(jQuery.browser.name=navigator.appName));-1!=(ix=jQuery.browser.fullVersion.indexOf(";"))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix)),-1!=(ix=jQuery.browser.fullVersion.indexOf(" "))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix)),jQuery.browser.majorVersion=parseInt(""+jQuery.browser.fullVersion,10),isNaN(jQuery.browser.majorVersion)&&(jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10)),jQuery.browser.version=jQuery.browser.majorVersion,jQuery.browser.android=/Android/i.test(nAgt),jQuery.browser.blackberry=/BlackBerry|BB|PlayBook/i.test(nAgt),jQuery.browser.ios=/iPhone|iPad|iPod|webOS/i.test(nAgt),jQuery.browser.operaMobile=/Opera Mini/i.test(nAgt),jQuery.browser.windowsMobile=/IEMobile|Windows Phone/i.test(nAgt),jQuery.browser.kindle=/Kindle|Silk/i.test(nAgt),jQuery.browser.mobile=jQuery.browser.android||jQuery.browser.blackberry||jQuery.browser.ios||jQuery.browser.windowsMobile||jQuery.browser.operaMobile||jQuery.browser.kindle,jQuery.isMobile=jQuery.browser.mobile,jQuery.isTablet=jQuery.browser.mobile&&765<jQuery(window).width(),jQuery.isAndroidDefault=jQuery.browser.android&&!/chrome/i.test(nAgt),jQuery.mbBrowser=jQuery.browser,jQuery.browser.versionCompare=function(a,b){if("stringstring"!=typeof a+typeof b)return!1;for(var c=a.split("."),d=b.split("."),e=0,f=Math.max(c.length,d.length);f>e;e++){if(c[e]&&!d[e]&&0<parseInt(c[e])||parseInt(c[e])>parseInt(d[e]))return 1;if(d[e]&&!c[e]&&0<parseInt(d[e])||parseInt(c[e])<parseInt(d[e]))return-1}return 0},function(a){a.simpleSlider={defaults:{initialval:0,scale:100,orientation:"h",readonly:!1,callback:!1},events:{start:a.browser.mobile?"touchstart":"mousedown",end:a.browser.mobile?"touchend":"mouseup",move:a.browser.mobile?"touchmove":"mousemove"},init:function(b){return this.each(function(){var c=this,d=a(c);d.addClass("simpleSlider"),c.opt={},a.extend(c.opt,a.simpleSlider.defaults,b),a.extend(c.opt,d.data());var e="h"==c.opt.orientation?"horizontal":"vertical",e=a("<div/>").addClass("level").addClass(e);d.prepend(e),c.level=e,d.css({cursor:"default"}),"auto"==c.opt.scale&&(c.opt.scale=a(c).outerWidth()),d.updateSliderVal(),c.opt.readonly||(d.on(a.simpleSlider.events.start,function(b){a.browser.mobile&&(b=b.changedTouches[0]),c.canSlide=!0,d.updateSliderVal(b),"h"==c.opt.orientation?d.css({cursor:"col-resize"}):d.css({cursor:"row-resize"}),b.preventDefault(),b.stopPropagation()}),a(document).on(a.simpleSlider.events.move,function(b){a.browser.mobile&&(b=b.changedTouches[0]),c.canSlide&&(a(document).css({cursor:"default"}),d.updateSliderVal(b),b.preventDefault(),b.stopPropagation())}).on(a.simpleSlider.events.end,function(){a(document).css({cursor:"auto"}),c.canSlide=!1,d.css({cursor:"auto"})}))})},updateSliderVal:function(b){var c=this.get(0);if(c.opt){c.opt.initialval="number"==typeof c.opt.initialval?c.opt.initialval:c.opt.initialval(c);var d=a(c).outerWidth(),e=a(c).outerHeight();c.x="object"==typeof b?b.clientX+document.body.scrollLeft-this.offset().left:"number"==typeof b?b*d/c.opt.scale:c.opt.initialval*d/c.opt.scale,c.y="object"==typeof b?b.clientY+document.body.scrollTop-this.offset().top:"number"==typeof b?(c.opt.scale-c.opt.initialval-b)*e/c.opt.scale:c.opt.initialval*e/c.opt.scale,c.y=this.outerHeight()-c.y,c.scaleX=c.x*c.opt.scale/d,c.scaleY=c.y*c.opt.scale/e,c.outOfRangeX=c.scaleX>c.opt.scale?c.scaleX-c.opt.scale:0>c.scaleX?c.scaleX:0,c.outOfRangeY=c.scaleY>c.opt.scale?c.scaleY-c.opt.scale:0>c.scaleY?c.scaleY:0,c.outOfRange="h"==c.opt.orientation?c.outOfRangeX:c.outOfRangeY,c.value="undefined"!=typeof b?"h"==c.opt.orientation?c.x>=this.outerWidth()?c.opt.scale:0>=c.x?0:c.scaleX:c.y>=this.outerHeight()?c.opt.scale:0>=c.y?0:c.scaleY:"h"==c.opt.orientation?c.scaleX:c.scaleY,"h"==c.opt.orientation?c.level.width(Math.floor(100*c.x/d)+"%"):c.level.height(Math.floor(100*c.y/e)),"function"==typeof c.opt.callback&&c.opt.callback(c)}}},a.fn.simpleSlider=a.simpleSlider.init,a.fn.updateSliderVal=a.simpleSlider.updateSliderVal}(jQuery),function(a){a.mbCookie={set:function(a,b,c,d){"object"==typeof b&&(b=JSON.stringify(b)),d=d?"; domain="+d:"";var e=new Date,f="";c>0&&(e.setTime(e.getTime()+864e5*c),f="; expires="+e.toGMTString()),document.cookie=a+"="+b+f+"; path=/"+d},get:function(a){a+="=";for(var b=document.cookie.split(";"),c=0;c<b.length;c++){for(var d=b[c];" "==d.charAt(0);)d=d.substring(1,d.length);if(0==d.indexOf(a))try{return JSON.parse(d.substring(a.length,d.length))}catch(e){return d.substring(a.length,d.length)}}return null},remove:function(b){a.mbCookie.set(b,"",-1)}},a.mbStorage={set:function(a,b){"object"==typeof b&&(b=JSON.stringify(b)),localStorage.setItem(a,b)},get:function(a){if(!localStorage[a])return null;try{return JSON.parse(localStorage[a])}catch(b){return localStorage[a]}},remove:function(a){a?localStorage.removeItem(a):localStorage.clear()}}}(jQuery);
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

(function() {
    'use strict';

    // youtube or vimeo
    function checkPlayerName(url) {
        if (url === 'false') return false;

        var result = url.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/);

        if (result && /youtube/g.test(result[3])) {
            return 'youtube';
        } else if (result && /vimeo/g.test(result[3])) {
            return 'vimeo';
        }

        return false;
    }

    // youtube or vimeo
    function getVideoId(url) {
        if (url === 'false') return false;

        var result = url.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/);

        return result ? result[6] : false;
    }

    function getYTPreviewUrl(videoId, quality) {
        return 'https://img.youtube.com/vi/' + videoId + '/' +
            (quality || '') + 'default.jpg';
    }

    function getVimeoPreviewUrl(vimeoId, callback) {
        var request = new XMLHttpRequest();
        request.open('GET', 'https://vimeo.com/api/v2/video/' + vimeoId + '.json', true);
        request.onreadystatechange = function() {
            if (this.readyState === 4) {
                if (this.status >= 200 && this.status < 400) {
                    var response = JSON.parse(this.responseText);

                    callback(response[0].thumbnail_large);
                }
            }
        };
        request.send();
        request = null;
    }

    var getYTPreviewUrlWithBestQuality = (function() {
        var cache = {};

        return function(id) {
            var def = $.Deferred();
            if (id in cache) {
                if (cache[id]) {
                    def.resolve(cache[id]);
                } else {
                    def.reject('Preview image not found.');
                }
            } else {
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
                            case 'hqdefault.jpg':
                                this.src = this.src.replace(file, 'default.jpg');
                                break;
                            default:
                                cache[id] = null;
                                def.reject('Preview image not found.');
                                break;
                        }
                    } else {
                        def.resolve(cache[id] = this.src);
                    }
                }).attr('src', getYTPreviewUrl(id, 'maxres'));
            }

            return def;
        };
    })();

    /*
     * check for youtube/vimeo video section and
     * load videopreview from youtube/vimeo on 'add' event and enable YTPlayer/vimeo_player
     * */
    if (!$('html').hasClass('is-builder')) {
        $(document).on('add.cards', function(event) {
            if (!$(event.target).hasClass('carousel')) return;
            var isDesktop = $('html').hasClass('desktop');

            $(event.target).outerFind('[data-bg-video-slide]').each(function() {
                var videoId = getVideoId($(this).attr('data-bg-video-slide'));
                if (!videoId) return;

                var $preview = $('<div class="mbr-background-video-preview"></div>').css({
                    display: 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                });

                $('.container-slide', this).before($preview);
                var playerName = checkPlayerName($(this).attr('data-bg-video-slide'));
                var $overlay = $(this).find('.mbr-overlay');

                if (playerName === 'youtube') {
                    getYTPreviewUrlWithBestQuality(videoId).done(function(url) {
                        $preview.css('background-image', 'url("' + url + '")').show();
                    });

                    if (isDesktop && $.fn.YTPlayer && !$(this).find('.playerBox').length) {
                        $('.container-slide', this)
                            .before('<div class="mbr-background-video"></div>').prev()
                            .YTPlayer({
                                videoURL: videoId,
                                containment: 'self',
                                showControls: false,
                                mute: true
                            });

                        if ($overlay.length) {
                            $('.YTPOverlay', this).css({
                                opacity: $overlay.css('opacity'),
                                backgroundColor: $overlay.css('background-color')
                            });
                        }

                        $(this).find('.image_wrapper img').css('opacity', '0');
                        $(this).find('.image_wrapper .mbr-overlay').css('opacity', '0');
                    }
                } else {
                    getVimeoPreviewUrl(videoId, function(url) {
                        $preview.css('background-image', 'url("' + url + '")').show();
                    });

                    if (isDesktop && $.fn.vimeo_player && !$(this).find('.playerBox').length) {
                        $('.container-slide', this)
                            .before('<div class="mbr-background-video"></div>').prev()
                            .vimeo_player({
                                videoURL: videoId,
                                containment: 'self',
                                showControls: false,
                                mute: true
                            });

                        if ($overlay.length) {
                            $('.vimeo_player_overlay', this).css({
                                opacity: $overlay.css('opacity'),
                                backgroundColor: $overlay.css('background-color')
                            });
                        }
                    }
                }
            });

            $(event.target).find('.carousel-item iframe').css({
                transitionProperty: 'opacity',
                transitionDuration: '1000ms'
            });

            // pause YTPlayer/vimeo_player in hidden slides, apply some css rules
            $(this).on('slide.bs.carousel', 'section.carousel', function(event) {
                $(event.target).find('.carousel-item.active .mb_YTPlayer').each(function() {
                    $(this).YTPPause();
                });

                $(event.target).find('.carousel-item.active .vimeo_player').each(function() {
                    $(this).v_pause();
                });

                $(event.target).find('.carousel-item:not(.active) iframe').css('opacity', 0);
            });

            // start YTPPlayer in active slides, apply some css rules
            $(this).on('slid.bs.carousel', 'section.carousel', function(event) {
                $(event.target).find('.carousel-item.active .mb_YTPlayer').each(function() {
                    $(this).YTPPlay();
                });

                $(event.target).find('.carousel-item.active .vimeo_player').each(function() {
                    $(this).v_play();
                });

                $(event.target).find('.carousel-item.active iframe').resize().css('opacity', 1);
            });
        });
    }
})();
