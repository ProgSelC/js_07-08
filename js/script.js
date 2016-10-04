 ;(function ($) {
     $(document).ready(function () {
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
     });
 })(jQuery);