!function ($) {
  $.fn.numchange = function ( option ) {
    var defaults = {}
    var options=$.extend(defaults , options);
    this.each(function(){
        var addclass , 
            cutclass
         parent=$(this).parent().parent().attr("class");
          value = $('.'+parent+' input').val();
      if($(this).attr("class")=="numberup"){
        $(this).click(function(){
          newval=value++;
         $('.'+parent+' input').attr("value" , newval);
        })
      }
      else if ($(this).attr("class")=="numberdown"){
        $(this).click(function(){
          newval = value--;
          $('.'+parent+' input').attr("value" , newval);
        })
      }
      else
        return false;
    })
  }

}(window.jQuery);