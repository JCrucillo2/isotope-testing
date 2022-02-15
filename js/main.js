let $grid = $(".item-details").isotope({
    // options
});

$(".item-menu").on("click", "li", function () {
    let filterValue = $(this).attr("data-filter");

    $grid.imagesLoaded().progress(function () {
        $grid.isotope({ filter: filterValue });
    });
});

$(".selectGroup").each(function (i, selectGroup) {
    var $selectGroup = $(selectGroup);
    $selectGroup.on("click", "li", function () {
        $selectGroup.find(".is-checked").removeClass("is-checked");
        $(this).addClass("is-checked");
    });
});
