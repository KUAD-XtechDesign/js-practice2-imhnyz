$(function(){

    let txt1 = "おはようございます！";
    let txt2 = "おげんきですか？";
    let num1 = 20;
    let num2 = 32;
    　　

    function sayHello(){
        $("#content").text("こんにちは！");
    }

    function saySomething(txt){
        $("#content").text(txt);
    }

    function sayTwo(arg1,arg2){
        $("#content").text(arg1 + arg2);
    }
    
    $("#button01").on("click",function(){
        sayHello();
    })   

    $("#button02").on("click",function(){
        saySomothing(txt1);
    })
    
    $("#button03").on("click",function(){
        samTwo(txt1,txt2)
    })
    
    $("#button04").on("click",function(){
        samTwo(num1,num2)
    })
    
    // + - * /
    
    $("#button05").on("click",function(){
        samTwo(txt1,txt2)
        samTwo(num1,num2)
    })
    
    
})
