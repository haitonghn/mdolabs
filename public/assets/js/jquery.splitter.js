(function($) {
    $.fn.splitter = function() {

        var splitterBar = $(document.createElement('div'));
        splitterBar.css('width', '2px');
        splitterBar.css('cursor', 'col-resize');
        splitterBar.addClass('mdo-atom');

        var _el = $(this).after(splitterBar);
        
        var isDragging = false

        splitterBar.mousedown((event) => {
            isDragging = true
            return false;
        });

        $(document).mouseup((event) => {
            isDragging = false
            return false;
        });

        $(document).mousemove((event) => {
            if(isDragging) {
                var leftOfLeft = _el.position().left;
                var offcanvas = $(_classPrefix + 'offcanvas').width();
                _el.width(event.pageX - leftOfLeft - offcanvas - splitterBar.width() / 2);
            }
        });

    }
}(jQuery));