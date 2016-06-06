$(function(){
  $("form#sentence").submit(function(event) {
    var sentence = $("input#sentence").val();
    var words = sentence.split(" ");
      var newWords = words.map(function(word){
        if (word.length >= 3) {
          return word
        }
      });
    newWords.reverse();
    newString = newWords.join(" ");
    alert(newString);

  event.preventDefault();
  });
});
