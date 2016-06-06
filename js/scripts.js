$(function(){
  $("form#sentence").submit(function(event) {
    // var sentence = $("input#sentence").val();
    // var words = sentence.split(" ");
    //
    // function isBigEnough(word){
    //   return word.length >= 3;
    // }
    // var newWords = words.filter(isBigEnough);
    // newWords.reverse();
    // newString = newWords.join(" ");
    // alert(newString);

    var sentence = $("input#sentence").val();
    var words = sentence.split(" ");
    var occur = {};
      for (var i = 0; i < words.length; i++) {
        occur[words[i]] = (occur[words[i]] || 0) + 1;
      }

    var array_keys = new Array();
    var array_values = new Array();

    for (var key in occur) {
      array_keys.push(key);
      array_values.push(occur[key]);
    }
    array_keys.forEach(function(key, index) {
      $("ul#wordOccur").append("<li>" + key + ": " + array_values[index] + "</li>");
    });
    event.preventDefault();
  });
});
