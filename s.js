$(function(){
 $("#txt1").keyup(function(){
 var val = $(this).val().toLowerCase();
 $(".info1 li").hide();
 $(".info1 li").each(function()
 {
 var text = $(this).text().toLowerCase();
 if ($(this).text().search(new RegExp(val, "i")) < 0) {
                $(this).fadeOut();
 
            // Show the list item if the phrase matches and increase the count by 1
            } else {
                $(this).show();
				}
	 });
 
        
    });
});