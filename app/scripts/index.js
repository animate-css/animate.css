var testAnim=(x)=> {
    $('#animation-txt').text(x);
    $('#animationSandbox').removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',  ()=> {
        $(this).removeClass();
    });
}
$(document).ready( ()=> {
    $('.js--triggerAnimation').click( (e)=> {
        e.preventDefault();
        var anim = $('.js--animations').val();
        testAnim(anim);
    });
    $('.js--animations').change( ()=> {
        var anim = $(this).val();
        testAnim(anim);
    });
});