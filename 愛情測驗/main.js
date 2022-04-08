$(function(){
    //儲存目前回答到第幾題
    var currenntQuiz=null;
    //按鈕按下後，要做的事情
    $("#startButton").on("click",function(){
        //如未作答，就從這裡
        if (currenntQuiz==null){
            //從第0題開始
            currenntQuiz=0;
            //顯示題目
            $("#question").text(questions[0].question);
            //將選項區清空 ();
            $("#options").empty
            //選項逐一加入
            questions[0].answers.forEach(function(element,index,array){
                $("#options").append(`<input name='options' type='radio'
                value='${index}'><label>${element[0]}</label><br></br>`);
            });
            //將按鈕上文字轉為next
            $("#startButton").attr("value","Next");

        }else{
            //已經開始作答從這邊繼續
            //巡訪哪個選項有被選取
            $.each($(":radio"),function(i,val){
                if(val.checked){
                    //是否已走到最後要產生的結果(A~D)
                    if(isNaN(questions[currenntQuiz].answers[i][1])){
                        //通往結果
                        var finalResult=questions[currenntQuiz].answers[i][1];
                        //顯示最終結果的標題
                        $("#question").text(finalAnswers[finalResult][0]);
                        //將選項區域清空
                        $("#options").empty();
                        //顯示結果內容
                        $("#options").append(`${finalAnswers[finalResult][1]}<br><br>`);
                        currenntQuiz=null;
                        $("#startButton").attr("value","重新開始");

                 }else{
                     //指定下一題，原始資料從1開始，所以減一
                     currenntQuiz=questions[currenntQuiz].answers[i][1]-1;
                     //顯示新題目
                     $("#question").text(questions[currenntQuiz].question);
                     $("#options").empty();
                     questions[currenntQuiz].answers.forEach(function(element,index,array){
                         $("#options").append(`<input name='options' type='radio' value='${index}'><label>${element[0]}</label><br><br>`);
                     });

                    }
                    return false;//跳離迴圈的方式
                }
            });
        }
    });
});