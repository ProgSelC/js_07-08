 ;(function ($) {
     $(document).ready(function () {
         //Tabs
         $('.nav-tabs a').on('click', function(e) {
             e.preventDefault();
             var $tab = $(this).parent();
             $tab.siblings('.active').removeClass('active');
             $tab.addClass('active');
             
             var id = $(e.target).attr('href');
             var $thisTabPane = $('.tab-content ' + id);
             $thisTabPane.siblings('.active').removeClass('active');
             $thisTabPane.addClass('active');

             if($thisTabPane.hasClass('fade')){
                 $thisTabPane.siblings('.in').removeClass('in');
                 setTimeout(function(){
                    $thisTabPane.addClass('in');
                 }, 50);
             }
         });
         
         // Form
         $('form').on('focusin mouseover','input', function(){
             $(this).siblings('.help.hide').removeClass('hide');
         });
         
         $('form').on('focusout mouseout','input', function(){
             $(this).siblings('.help').addClass('hide');
         });
         
         $('.btn-help').on('click', function() {
             $('form .help.hide').removeClass('hide');
         });
     });
 })(jQuery);