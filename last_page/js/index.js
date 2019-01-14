//轮播图
var pic = $('.pic img');
var choice = $('.choice li');
var btn = $('.btn li');
var def_timer;  //定时器
var begin = 0;
$(pic[0]).show();
$(choice[0]).css({"background-color": "red"});
auto();
//定时器调用轮播图
function auto() {
    def_timer = setInterval(function () {
        turn(begin, begin + 1);
        begin += 1;
        if (begin === 4) {begin = 0}
    }, 2000)
}
//choice调用轮播图
$(choice).click(function () {
    turn(begin, $(this).index());
    begin = $(this).index();
});
//鼠标滑过销毁定时器并显示按钮
$('.turn').hover(function () {
    clearInterval(def_timer);
    $('.btn').show();
}, function () {
    auto();
    $('.btn').hide();
});
//左右按钮调用轮播图
$(btn).click(function () {
   if ($(this).index() === 0) {
       turn(begin, begin + 1);
       begin += 1;
       if (begin === 4) {begin = 0}
   } else {
       turn(begin, begin - 1);
       begin -= 1;
       if (begin === -1) {begin = 3}
   }
});
//轮播图，参数为关闭和开启的图片编号
function turn(i, j) {
    $(pic[i]).fadeOut(1000);
    $(choice[i]).css({"background-color": "pink"});
    if (j === 4) {j = 0}
    if (j === -1) {j = 3}
    $(pic[j]).fadeIn(1000);
    $(choice[j]).css({"background-color": "red"});
}

//展开切换内容
var change = $('.new_catalog li');
var hide_li = $('.hide_li');
$(hide_li[0]).show();
$(change).click(function () {
    $(change).css({"border-bottom": "none"});
    $(change[$(this).index()]).css({"border-bottom": "2px solid red", "box-sizing": "border-box"});
    $(hide_li).hide();
    $(hide_li[$(this).index()]).show();
});
