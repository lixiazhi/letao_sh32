$(function () {

    // 判断是否登录，未登录跳转到登录界面
    $.ajax({
        url: '/employee/checkRootLogin',
        type: 'get',
        dataType: 'json',
        success: function (res) {
            // console.log(res);
            if (res.error === 400) {
                location.href = "login.html";
            }
            if (res.success) {
                console.log('当前用户已经登录');

            }

        }
    })
})