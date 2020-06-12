(function() {
    function scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.getElementById('images').scrollLeft -= (delta*75); // Speed *xx
        e.preventDefault();
    }
    if (document.getElementById('images').addEventListener) {
        // IE9, Chrome, Safari, Opera
        document.getElementById('images').addEventListener("mousewheel", scrollHorizontally, false);
        // Firefox
        document.getElementById('images').addEventListener("DOMMouseScroll", scrollHorizontally, false);
    } else {
        // IE 6/7/8
        document.getElementById('images').attachEvent("onmousewheel", scrollHorizontally);
    }
})();