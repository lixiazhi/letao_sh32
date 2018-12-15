

    // 在第一个ajax发送，开始进度条
    // 全部ajax结束，结束进度条
    // NProgress.start(); //开启进度条
    // 模拟网络延迟
    // setTimeout(function () {
    //     NProgress.done();
    // }, 2000);


    // ajax全局事件
    // .ajaxComplete()  当ajax完成时，调用 (不管成功与失败)
    // .ajaxSuccess()  当ajax返回成功时调用
    // .ajaxError()  当ajax返回失败时调用
    // .ajaxSend()  当ajax发送之前调用
    // .ajaxStart()  当第一个ajax发送时调用
    // .ajaxStop()  当所有ajax完成返回时调用
    $(document).ajaxStart(function () {
        NProgress.start();
    })
    $(document).ajaxStop(function () {
        NProgress.done();
    })
    $(function () {
        // 公共功能
        // 左侧二级导航切换效果
        // 功能退出功能
        $('.lt_aside .category').on('click', function () {
            $('.lt_aside .child').stop().slideToggle();
        })
        $('.icon_left').on('click', function () {
            $('.lt_aside').toggleClass('hidemenu');
            $('.lt_main').toggleClass('hidemenu');
            $('.lt_topbar ').toggleClass('hidemenu');
        })
        $('.icon_right').on('click', function () {
            // alert(11);
            $('#logoutModal').modal('show');
        })


        // 退出两种方式：
        // 1.发送ajax让后台销毁当前用户的登录状态，实现退出
        // 2.清除浏览器缓存，将cookie清空，本地存储的sessionId也没了

        // 退出按钮添加点击事件，退出销毁当前用户的登录状态
        $('#logoutBtn').on('click', function () {
            $.ajax({
                type: 'get',
                url: '/employee/employeeLogout',
                dataType: 'json',
                success: function (info) {
                    console.log(info);
                    if (info.success) {
                        location.href = "login.html";
                    }

                }

            })
        })



    })