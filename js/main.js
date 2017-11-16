jQuery(document).ready(function() {
    // header on full height
    if (jQuery(window).height() > 1080) jQuery(".header").height(1080);
    else jQuery(".header").height(jQuery(window).height() + 19 + "px");
    jQuery(window).resize(function() {
        if (jQuery(window).height() > 1080) jQuery(".header").height(1080);
        else jQuery(".header").height(jQuery(window).height() + 19 + "px");
    });

    // Generate portfolio
    for (var portfolioItem = 0; portfolioItem < portfolio.length; portfolioItem++) {
        var itemHtml = '<div class="portfolio__item" href="' + portfolio[portfolioItem]['projectUrl'] + '">';
        itemHtml += '<img src="' + portfolio[portfolioItem]['projectMainImg'] + '" class="portfolio__item--img">';
        itemHtml += '<div class="portfolio__item--hover">';
        itemHtml += '<div class="portfolio__item--content">';
        itemHtml += '<h2 class="portfolio__item--title">' + portfolio[portfolioItem]['projectName'] + '</h2>';
        itemHtml += '<p class="portfolio__item--desc">' + portfolio[portfolioItem]['projectDesc'] + '</p>';
        itemHtml += "</div>";
        itemHtml += "</div>";
        itemHtml += "</div>";
        $(".portfolio__content").append(itemHtml);
    }
    jQuery(".portfolio__item").click(function() {
        if ($(this).attr("href").length >= 1)
            window.location = $(this).attr("href");
    });
    numAnimate(jQuery(".loading__percents"), 100);
    setTimeout(function() {
        jQuery(".loading").fadeOut(300);
    }, 800);
    // functions
    function numAnimate(element, max) {
        var number = jQuery(element).html().replace("%", "");
        setInterval(function() {
            number++;
            if (number <= max) { jQuery(element).text(number + "%"); };
        }, 1);
    }
});