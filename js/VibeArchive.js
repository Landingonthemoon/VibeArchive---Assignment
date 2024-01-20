// load
$(document).ready( function() {
    let loginId = sessionStorage.getItem("loginId");
    if(loginId == null || loginId == "")
        window.location.href = 'Login.html'; 
    else
        $("#user_div").html("<h3>hello "+loginId+" </h>");
});

// Search
function searchToggle(obj, evt){
    var container = $(obj).closest('.search-wrapper');
        if(!container.hasClass('active')){
            container.addClass('active');
            evt.preventDefault();
        }
        else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
            container.removeClass('active');
            // clear input
            container.find('.search-input').val('');
        }
}
