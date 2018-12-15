    $(function () {
        // 登录拦截
        // 一进页面，发送ajax请求
        $.ajax({
            url: '/employee/checkRootLogin',
            type: 'get',
            dataType: 'json',
            success: function (info) {
                console.log(info);
                if (info.error == 400) {
                    // 拦截到登录页
                    location.href = "login.html"
                }
                if (info.success) {
                    console.log('当前用户已经登录');

                }
            }
        })
    })