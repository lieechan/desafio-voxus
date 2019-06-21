$(function(){
    //animação label
    $('input').each(function(){
        $('input,select').focus(function(){
            $(this).prev('label').addClass('label-focus');
        });
        $('input,select').focusout(function(){
            if ($(this).val().length <= 0){
                $(this).prev('label').removeClass('label-focus');
            }  
        });
    });

    //fade botao
    $('button').click(function(event){
        event.preventDefault();
        $(this).removeClass('btn-try').fadeOut(1000);
        $(this).addClass('btn-thankyou').fadeIn("slow");
        $(this).text("Obrigado");
        $(this).attr('disabled','true');
        $(".contact-message").slideDown( "slow", function() {
            console.log('foi');
          });
    });
});