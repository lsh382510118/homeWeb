/**
 * Created by yue on 2018/4/3.
 */
$('.menu-item').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
})