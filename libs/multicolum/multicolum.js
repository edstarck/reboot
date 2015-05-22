(function($) {
    var defaults = { /*значения по умолчанию (если при вызове скрипта не указывалось никаких параметров)*/
        columns: 2,
        classname: 'col-md-6', /*класс для обертки колонок*/
        min: 1
    };
    $.fn.autocolumnlist = function(params){
        var options = $.extend({}, defaults, params);
        return this.each(function() {
            var els = $(this).find('.panel-default');
            var dimension = els.size();
            if (dimension > 0) {
                var elCol = Math.ceil(dimension/options.columns);
                if (elCol < options.min) {
                    elCol = options.min;
                }
                var start = 0;
                var end = elCol;

                for (i=0; i<options.columns; i++) {
                    // Add "last" class for last column
                    if ((i + 1) == options.columns) {
                        els.slice(start, end).wrapAll('<div class="'+options.classname+' last" />');
                    } else {
                            els.slice(start, end).wrapAll('<div class="'+options.classname+'" />');
                    }
                    start = start+elCol;
                    end = end+elCol;
                }
           }
        });
    };
})(jQuery);
