// Put all your page JS here

$(function () {
    $('#slickQuiz').slickQuiz();
    $('#slickQuiz2').slickQuiz({json: quizJSON2});// passar a JSON aqui.... mas declarar ela la em Conf..  $('#slickQuiz').slickQuiz({json: {YOUR_JSON_HERE}});
    $('#slickQuiz3').slickQuiz({json: quizJSON3});// passar a JSON aqui.... mas declarar ela la em Conf..  $('#slickQuiz').slickQuiz({json: {YOUR_JSON_HERE}});

});
