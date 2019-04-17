/*eslint-env browser*/

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

var createRollover = function (imgTag, secondUrl, secondAlt) {
    "use strict";
    //STORE FIRST IMAGE INFO
    var firstUrl, firstAlt, image, mouseover, mouseout;
    firstUrl = imgTag.src;
    firstAlt = imgTag.alt;
    
    //PRELOAD SECOND IMAGE
    image = new Image();
    image.src = secondUrl;
    
    
    //CREATE EVENT HANDLERS
    mouseover = function () {
        imgTag.src = secondUrl;
        imgTag.alt = secondAlt;
    };
    mouseout = function () {
        imgTag.src = firstUrl;
        imgTag.alt = firstAlt;
    };
    evt.attach(imgTag, "mouseover", mouseover);
    evt.attach(imgTag, "mouseout", mouseout);
};

window.addEventListener("load", function () {
    "use strict";
    createRollover($("img1"), "images/wakeboard.jpg", "zak wakeboards in his boat");
    createRollover($("img2"), "images/race.jpg", "zak tries to stay active");
});