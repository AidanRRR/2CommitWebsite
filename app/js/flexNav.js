(function ($) {
    $.fn.flexNavigation = function (options) {
        'use strict';

        /**------------------ SETTING PARAMETERS ------------------**/

        var scroll_count;
        var scroll_time;

        var config = {};
        if (options) {
            $.extend(config, options);
        }



        /**------------------ BEGIN FUNCTION BODY ------------------**/



        var selector = $(this);

        if (config.scroll)
            scroll_count = parseInt(config.scroll);

        if (config.scrollingTime)
            scroll_time = config.scrollingTime;


        /**------------------------------------------------  SETTING FUNCTIONS ------------------------------------------------- **/

        selector.on("click", ".menuButton", function () {
            selector.toggleClass("collapsed").toggleClass("expanded");
        })
    }
})(jQuery)
