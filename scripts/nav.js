$(function() {
$('#home').hover(function() {
    $('.fade').fadeIn();
}, function() {
    $('.fade').fadeOut();
});
});

var addclass = 'fade';
var $cols = $('#home').click(function(e) {
    $cols.removeClass(addclass);
    $(this).addClass(addclass);
});

var addclass = 'fade';
var $cols = $('#archive').click(function(e) {
    $cols.removeClass(addclass);
    $(this).addClass(addclass);
});
