$(document).ready(function () {

    $(function(){
        //获取浏览器宽度
        var _width = $(window).width();
        if(_width <= 567){
            //移除该div原本的样式，并添加w1024这个样式
            $("#Swedish").css('display','none');
            $("#textSwedish").css('display','none');
            $("#imgSwedish").css('display','none');
            $("#Deep").css('display','none');
            $("#textDeep").css('display','none');
            $("#imgDeep").css('display','none');
            $("#Sports").css('display','none');
            $("#textSports").css('display','none');
            $("#imgSports").css('display','none');
            $("#Pre").css('display','none');
            $("#textPre").css('display','none');
            $("#imgPre").css('display','none');
            $("#Couples").css('display','none');
            $("#textCouples").css('display','none');
            $("#imgCouples").css('display','none');
            $("#Thai").css('display','none');
            $("#textThai").css('display','none');
            $("#imgThai").css('display','none');
            $("#Relaxing").css('display','none');
            $("#textRelaxing").css('display','none');
            $("#imgRelaxing").css('display','none');
            $("#Work").css('display','none');
            $("#textWork").css('display','none');
            $("#imgWork").css('display','none');
        }

        if(_width > 567){
            $("#SwedishPhone").css('display','none');
            $("#PrePhone").css('display','none');
            $("#WorkPhone").css('display','none');
            $("#RelaxingPhone").css('display','none');
            $("#CouplesPhone").css('display','none');
            $("#ThaiPhone").css('display','none');
            $("#DeepPhone").css('display','none');
            $("#SportsPhone").css('display','none');
        }
    });
});