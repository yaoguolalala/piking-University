$(function () {
    //设置第一张图片显示初始位置
    var offset=-1310;
    var btncount=1310;
    var index=0;
    var timer;
    startTimer();//定时切换图片函数
    $(".btn-item").eq(index).css("background","#ccc");//初始化图片按钮位置
    //监听按钮点击事件
    $(".swichbtn>.btn-item").click(function () {
        clearInterval(timer);//关闭start函数中的定时器timer;
        $(this).css("background","#ccc");
        $(this).siblings().css("background","dimgrey");
        offset=-1310;
        btncount=1310;
        var clickCount=$(this).index();
        //重新计算图片位置
        offset-=1380*clickCount;
        btncount+=1380*clickCount;
        index=Math.floor(btncount/1310)-1;
        $(".postpic").animate({
            marginLeft:offset
        },1000);
        //间隔一秒重新开始定时器
        var resTimer=setInterval(startTimer(),1000);
    });
    function startTimer(){
            timer=setInterval(function () {
                offset-=1380;
                btncount+=1380;
                index=Math.floor(btncount/1310)-1;
                if (btncount>=9050){
                    btncount=1310;
                    index=Math.floor(btncount/1310)-1;
                    $(".btn-item").eq(index).siblings().css("background","dimgrey");
                    $(".btn-item").eq(index).css("background","#ccc");
                }
                if(offset<=-10970){
                    offset=-1310;
                    btncount=1310;
                    index=Math.floor(btncount/1310);
                    $(".postpic").css("marginLeft",offset);
                }else{
                    $(".btn-item").eq(index).siblings().css("background","dimgrey");
                    $(".btn-item").eq(index).css("background","#ccc");
                    $(".postpic").animate({
                        marginLeft:offset
                    },1000);
                }
        },6000);
    }
});