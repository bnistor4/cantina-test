(function($) {
    "use strict";
    $(document).ready(function() {
        var i = 0;
        while (i < 100) {
            i++;
            $('.mega-nft-container').append('<div class="nft-container">' +
                '<div class="nft-image-container">' +
                '<img src="' + "images/" + i + ".png" +
                '" class="nft-image">' +
                '</div>');
        }
    });
})(jQuery);