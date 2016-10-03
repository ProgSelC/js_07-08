 ;(function ($) {
     $(document).ready(function () {
         $('.nav-tabs a').on('click', function(e) {
             e.preventDefault();
             var id = $(e.target).attr('href');
             $('.nav-tabs li').removeClass('active');
             $(this).parent().addClass('active');
             
             $('.tab-content .tab-pane').removeClass('active in');
             $('.tab-content ' + id).addClass('active');
             setTimeout(function(){
                $('.tab-content ' + id).addClass('in');
             }, 50)
             
         });
     });
 })(jQuery);