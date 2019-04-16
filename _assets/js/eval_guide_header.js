// http://mendixnew.staging.wpengine.com/wp-json/menus/v1/menus/1378?_jsonp=callback

((function($) {

    var URL = 'https://mendix.com/wp-json/menus/v1/menus/1378';
    var $mainNav = $('#menu-navigation');
    var $footNav = $('#menu-navigation-1');

    var items = [];
    var topLevel = [];

    function sortOnMenuOrder(a, b) {
        if (a.menu_order < b.menu_order) return -1;
        if (a.menu_order > b.menu_order) return 1;
        return 0;
    }

    function getSubItems(link) {
        var ID = link.ID + '';
        return items.filter(function (item) {
            return ID === item.menu_item_parent;
        });
    }

    function appendSubMenu($menu, items) {
        var $list = $('<ul class="sub-menu" aria-label="submenu" aria-hidden="true"></ul>');

        items.forEach(function (item) {
            var $li = $('<li id="menu-item-' + item.ID + '" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-' + item.ID + '"></li>');
            var subitems = getSubItems(item);

            $li.append('<a href="' + item.url + '" aria-haspopup="true">' + item.title + '</a>');

            $list.append($li);

            if (subitems && subitems.length) {
                $li.addClass('menu-item-has-children');
                appendSubMenu($li, subitems);
            }
        });

        $menu.append($list);
    }

    function addTopLevelLink(link) {
        var subitems = getSubItems(link);

        var $li = $('<li id="menu-item-' + link.ID + '" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-' + link.ID + '"></li>');
        var $bottomli = $('<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-' + link.ID + '"></li>');

        var $mobilePlus = $('<a href="' + link.url + '" aria-haspopup="true">' + link.title + '</a>');
        $li.append($mobilePlus);
        $bottomli.append('<a href="#" aria-haspopup="true">' + link.title + '</a>');

        $mainNav.append($li);
        $footNav.append($bottomli);

        $mobilePlus.on('click', function () {
            var $this = $(this);
            var $submenu = $this.parent().find('> ul.sub-menu');
            if ($(window).width() < 1100 && $submenu) {
                if ($submenu.hasClass('shown')) {
                    $submenu.hide(250);
                    $submenu.toggleClass('shown', false);
                } else {
                    $submenu.show(250);
                    $submenu.toggleClass('shown', true);
                }
            }
        })

        if (subitems && subitems.length) {
            $li.addClass('menu-item-has-children');
            $bottomli.addClass('menu-item-has-children');
            appendSubMenu($li, subitems);
            appendSubMenu($bottomli, subitems);
        }
    }

    function buildMenu(response) {
        items = response.items;
        topLevel = items.filter(function (item) {
            return '0' === item.menu_item_parent;
        }).sort(sortOnMenuOrder);

        // topLevel.forEach(addTopLevelLink);
    }

    $.ajax({
        url: URL,
        jsonp: '_jsonp',
        jsonpCallback: 'corporate_menu',
        cache: true,
        dataType: 'jsonp',
        success: buildMenu
    });

})(jQuery));

/**
 *
 */
window.mx = {};
window.mx.keyCodes = {
    escape: 27,
    enter: 13
};
/**
 *
 */
function closeSubMenu() {
    this.classList.remove('active', 'from-left', 'from-right');
    this.style.height = 'auto';
}
/**
 *
 */
function isMobileMenu() {
    return getComputedStyle(header)['z-index'] == 101;
}
/**
 *
 * @param {*} event
 */
function getEventType(event) {
    return event ? event.type : null;
}
/**
 *
 * @param {*} event
 */
function isDesktopEvent(event) {
    switch (getEventType(event)) {
        case 'mouseleave':
        case 'mouseenter':
            return true;
    }
}
/**
 *
 *
 */
window.mx.listeners = function() {
    var listeners = [];
    return {
        onUp: function(event) {
            for (var l = listeners.length - 1; l >= 0; l--) {
                if (event.keyCode == listeners[l].keyCode) {
                    listeners[l].callback.call(this, event);
                }
            }
        },
        remove: function(id) {
            for (var l = listeners.length - 1; l >= 0; l--) {
                if (id = listeners[l].id) {
                    listeners.splice(l, 1);
                }
            }
        },
        up: function(id, keyCode, callback) {
            var idActive = function() {
                for (var l = listeners.length - 1; l >= 0; l--) {
                    if (id == listeners[l].id) {
                        return true;
                    }
                }
            }();
            if (idActive) {
                return;
            }
            listeners.push({
                id: id,
                keyCode: keyCode,
                callback: callback
            });
            $(document).on('keyup', this.onUp);
        }
    };
}();
/**
 * Handle the main navigation popups and slide out for mobile
 */
document.addEventListener("DOMContentLoaded", function(event) {
    var body = document.body;
    var openSubMenuTimeout;
    var buttonAll = document.querySelectorAll('.navigation-top-level button');
    var header = document.querySelector('#header');
    var closeHotSpots = header.querySelectorAll('.hot-spot--close');
    var headerNavigation = document.querySelector('#header__navigation');
    var mobileNavigationToggle = document.querySelector('.header__toggle');
    var subMenuAll = document.querySelectorAll('.navigation-sub-menu');
    var lastButtonOrder = null;
    //add an order param to the buttons for future reference
    buttonAll.forEach(function(el, key) {
        el.setAttribute('order', key + 1);
    });
    function hideHeaderBackground(event) {
        //remove close background events
        header.removeEventListener('mouseleave', hideHeaderBackground);
        window.mx.listeners.remove('closeMenuOnEscape');
        mobileNavigationToggle.removeEventListener('click', hideHeaderBackground);
        closeHotSpots.forEach(function(el) {
            el.removeEventListener('mouseenter', hideHeaderBackground)
        });
        if (isMobileMenu()) {
            subMenuAll.forEach(function(el) {
                closeSubMenu.call(el);
            });
            buttonAll.forEach(function(el) {
                el.classList.remove('active');
                el.addEventListener('mouseenter', openSubMenu);
            });
        } else {
            closeAllSubMenus();
        }
        header.classList.remove('active');
        lastButtonOrder = null;
        //remove all closing listeners
        mobileNavigationToggle.addEventListener('click', showHeaderBackground);
    }
    function showHeaderBackground() {
        mobileNavigationToggle.removeEventListener('click', showHeaderBackground);
        if (!header.classList.contains('active')) {
            header.classList.add('active');
            //add close menu listeners
            header.addEventListener('mouseleave', hideHeaderBackground);
            window.mx.listeners.up('closeMenuOnEscape', mx.keyCodes.escape, hideHeaderBackground);
            mobileNavigationToggle.addEventListener('click', hideHeaderBackground);
            closeHotSpots.forEach(function(el) {
                el.addEventListener('mouseenter', hideHeaderBackground)
            });
        }
    }
    function closeAllSubMenus(buttonToIgnore) {
        //close other menus
        buttonAll.forEach(function(el) {
            if (el != buttonToIgnore && el.classList.contains('active')) {
                el.classList.remove('active');
                var subMenu = el.nextElementSibling;
                slideToggle(subMenu);
                el.addEventListener('mouseenter', openSubMenu);
            }
        });
    }
    function onButtonLeave(event) {
        event.target.hovering = false;
    }
    /**
     *
     */
    function openSubMenu(event) {
        if (isMobileMenu() && isDesktopEvent(event)) {
            return;
        }
        var button = event.target;
        button.hovering = true;
        button.addEventListener('mouseleave', onButtonLeave);
        //remove previous open menu
        clearTimeout(openSubMenuTimeout);
        //buffer open time so accidental hovers don't cause annoying menu flickerijg
        openSubMenuTimeout = setTimeout(function() {
            button.removeEventListener('mouseleave', onButtonLeave);
            if (event.target.hovering === false) {
                return;
            }
            var order = button.getAttribute('order');
            var subMenu = button.nextElementSibling;
            button.removeEventListener('mouseenter', openSubMenu);
            if (button.classList.contains('active')) {
                //close the submenu
                if (isMobileMenu()) {
                    closeAllSubMenus();
                } else {
                    hideHeaderBackground();
                }
            } else {
                closeAllSubMenus(button);
                //open the buttons submenu
                showHeaderBackground();
                button.classList.add('active');
                slideToggle(subMenu, order);
                lastButtonOrder = order;
            }
        }, !!lastButtonOrder ? 0 : 250);
    }
    /**
     *
     * @param {Element} container
     */
    function slideToggle(container, order) {
        clearTimeout(slideCloseTimeout);
        clearTimeout(slideOpenTimeout);
        //openings
        if (container.classList.contains('active') == false) {
            if (isMobileMenu()) {
                container.classList.add('active');
                var height = container.clientHeight + "px";
                container.style.height = '0px';
                //next frame
                var slideCloseTimeout = setTimeout(function() {
                    container.style.height = height;
                }, 0);
            }
            //full menu
            else {
                if (lastButtonOrder && order) {
                    if (order > lastButtonOrder) {
                        container.classList.add('from-right');
                    } else {
                        container.classList.add('from-left');
                    }
                }
                var slideOpenTimeout = setTimeout(function() {
                    container.classList.add('active');
                }, !!lastButtonOrder ? 10 : 0);
            }
        }
        //closing
        else {
            if (isMobileMenu()) {
                container.style.height = '0px';
                container.addEventListener('transitionend', closeSubMenu.bind(container), {
                    once: true
                });
            } else {
                closeSubMenu.call(container);
            }
        }
    }
    mobileNavigationToggle.addEventListener('click', showHeaderBackground);
    //add listeners to open the menu
    buttonAll.forEach(function(el) {
        el.addEventListener('mouseenter', openSubMenu);
        el.addEventListener('click', openSubMenu);
    });
    var observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.intersectionRatio == observer.thresholds[0]) {
                header.classList.add(entry.target.dataset.out);
            } else {
                header.classList.remove(entry.target.dataset.out);
            }
        });
    });
    if (!window.location.pathname.includes('blog/')) {
        var headerFixedObserver = document.querySelector('.header-sticky-observer'); //, .header-height-observer');
        var headerHeightObserver = document.querySelector('.header-height-observer');
        observer.observe(headerFixedObserver);
        observer.observe(headerHeightObserver);
    }
});
