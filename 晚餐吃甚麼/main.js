$(function(){
    $("input").on("click",function(){
        //alert("Hi");
        var number0fListItem=$("li").length;
        var randomChildNumber=Math.floor(Math.random()*number0fListItem);
       $("h1").text($("li").eq(randomChildNumber).text());

    });
});