$(function() {

  $('.instruction li').tooltip();
  $('.content h2').tooltip();
  $('.content p').tooltip();

  $(".chosen-select").chosen({disable_search_threshold: 10});

  $("#tree_prompt").on("change", function(e) {
   
    var $value = $(this).val(); 
    var $array = $(this).children("option")
    var $array = $.map($array, function(val, i) { return val.value })
    var $content = $("#tree_content").val();
    var matched = false;
    if($content == "") {
      $("#tree_content").val($value);
    } else {
      $array.shift();
      $array.forEach(function(n) {
        var patt = new RegExp(n)
        if($content.match(patt)) {     
          $content = $content.replace(n, $value)
          matched = true
          return $("#tree_content").val($content);
        }
      });
      if (matched == false) {
        // alert("hello")
        console.log($content)
        console.log($value)
        $content = $value + " " + $content;
        $("#tree_content").val($content);
      }
    }  
  });

});