$(function () {
    $('#form').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            username: {
                validators: {
                    notEmpty: {
                        message: "用户名不能为空",
                    },
                    stringLength: {
                        min: 2,
                        max: 6,
                        message: "用户名为2-6个字符"
                    },
                    callback: {
                        message: "用户名不存在",
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: "密码不能为空",
                    },
                    stringLength: {
                        min: 2,
                        max: 6,
                        message: "密码长度为2-6位"
                    },
                    callback: {
                        message: "密码错误",
                    }
                }
            }
        }

    })

    $('[type = "reset"]').on('click', function () {
        // alert(1);
        var validator = $('#form').data('bootstrapValidator');
        validator.resetForm();
        // validator.resetForm(true);
    })
    // 获取表单数据
    // 发送ajax数据
    // 
    $('#form').on('success.form.bv', function (e) {
        e.preventDefault();
        $.ajax({
            url: '/employee/employeeLogin',
            type: 'post',
            data: $('#form').serialize(),
            dataType: 'json',
            success: function (res) {
                console.log(res);
                console.log(res.error);
                if (res.success) {
                    location.href = "index.html";
                }
                if (res.error === 1001) {
                    //     // 密码错误1001
                    $('#form').data('bootstrapValidator').updateStatus('password', 'INVALID', 'callback')
                }
                if (res.error === 1000) {
                    $('#form').data('bootstrapValidator').updateStatus('username', 'INVALID', 'callback')
                }
            }
        })

    })
})