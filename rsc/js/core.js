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
$('#addTopicBtn').click(function (e) {
    $('#addTopic').css('display', 'block');
});
$('#connModalBtn').click(function (e) {
    $('#connModal').css('display', 'block');
});
$('#pubModalBtn').click(function (e) {
    $('#pubModal').css('display', 'block');
});
$('#subModalBtn').click(function (e) {
    $('#subModal').css('display', 'block');
});
$('#regiModalBtn').click(function (e) {
    $('#regiModal').css('display', 'block');
});
$('.reset-btn').click(function (e) {
    $('#pwresetModal').css('display', 'block');
});
$('.close-btn').click(function () {
    $('.modal-wrap').css('display', 'none');
});

// Toggle Event
var toggle = false;
$('#server_switch1').click(function () {
    toggle = !toggle;

    if (toggle == true) {
        $('#serverStart').css('display', 'block');
        $('#serverLamp1').addClass('on');
    } else {
        $('#serverStop').css('display', 'block');
        $('#serverLamp1').removeClass('on');
    }

});

// Log Level Event
$('#logLevel').change(function () {
    $('.server_state').html($(this).val());
});