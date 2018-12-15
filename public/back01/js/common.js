// $(document).ajaxStart(function () {
//     NProgress.start();
// });
// $(document).ajaxStop(function () {
//     setTimeout(function () {
//         NProgress.done();
//     }, 500)
// })
NProgress.start();
setTimeout(function () {
    NProgress.done();
}, 500)
$(document).ajaxStart(function () {
    NProgress.start();
});
$(document).ajaxStop(function () {
    setTimeout(function () {
        NProgress.done();
    }, 500)
});
$(function () {
    $('.lt_aside .category').on('click', function () {
        $('.lt_aside .child').stop().slideToggle();
    });

    $('.lt_main .icon_left').on('click', function () {
        $('.lt_aside').toggleClass('hidemenu');
        $('.lt_main').toggleClass('hidemenu');
        $('.lt_topbar').toggleClass('hidemenu');
    })

    $('.lt_main .icon_right').on('click', function () {
        // alert(1);
        $('#logoutModal').modal('show');
    })

    $('#logout').on('click', function () {
        // alert(1);
        // 发送ajax,清除login.html,退出
        $.ajax({
            url: '/employee/employeeLogout',
            type: 'get',
            dataType: 'json',
            success: function (res) {
                console.log(res);
                if (res.success) {
                    location.href = "login.html";
                }

            }
        })
    })


})