import $ from "jquery";
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
    constructor() {
        this.lazyImages = $(".lazyload");
        this.siteHeader = $(".header");
        this.headerTriggerElement = $(".large-hero");
        this.createHeaderWaypoint();

        this.pageSections = $(".page-section");
        this.headerLinks = $(".primary-nav ul li");

        this.createPageSectionWaypoints();
        this.addSmoothScrolling();
        this.refreshWaypoints();
    }

    refreshWaypoints() {
        this.lazyImages.on('load', function () {
            Waypoint.refreshAll();
        });
    }

    addSmoothScrolling() {
        $('a[href*="#"]').smoothScroll({'offset':-110});
    }

    createHeaderWaypoint() {
        var that = this;
        
        new Waypoint({
            element: this.headerTriggerElement[0],
            handler: function (direction) {
                if (direction == "down") {
                    that.siteHeader.addClass("header--reduced");
                } else {
                    that.siteHeader.removeClass("header--reduced");
                    // *** This is a fix to prevent "Classes" from staying active at top of page
                    that.headerLinks.removeClass("primary-nav__active");
                }
            }
        });
    }

    createPageSectionWaypoints() {
        var that = this;
        this.pageSections.each(function () {
            let currentPageSection = this;
                new Waypoint({
                element: currentPageSection,
                handler: function (direction) {
                    if (direction == "down") {
                        var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
                        that.headerLinks.removeClass("primary-nav__active");
                        $(matchingHeaderLink).addClass("primary-nav__active");
                    };
                },
                offset: "40%"
            });
            new Waypoint({
                element: currentPageSection,
                handler: function (direction) {
                    if (direction == "up") {
                        var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
                        that.headerLinks.removeClass("primary-nav__active");
                        $(matchingHeaderLink).addClass("primary-nav__active");
                    };
                },
                offset: "0%"
            });

        });
    }
}

export default StickyHeader;