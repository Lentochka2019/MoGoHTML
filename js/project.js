var varCount = 1;
$(function() {
    $('.button-search').on('click', function () {
        $('.form-inline').toggleClass('show noshow');
        $("input[type='search']").focus();
    });    
});