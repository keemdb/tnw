// SNB sub menu Evnet
$('.admin__snb > li~li > a').click(function () {
    $(this).parent().toggleClass("on");
})

// Sidebar Event
$('.btn_nav').click(function () {
    $('.admin__snb-wrap').toggleClass('active');
    $('.admin__snb-background').toggleClass('active');
    $('.btn_nav').toggleClass('toggle');
});
$('.admin__snb-background').click(function () {
    $('.btn_nav').toggleClass('toggle');
    $('.admin__snb-wrap').toggleClass('active');
    $(this).removeClass('active');
})

// Modal Event
$('.add-btn').click(function (e) {
    $('.modal-wrap').css('display', 'block');
});
$('.close-btn').click(function () {
    $('.modal-wrap').css('display', 'none');
});
