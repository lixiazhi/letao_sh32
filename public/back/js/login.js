$(function () {
    // 表单校验
    // *    校验要求:
    // *        (1) 用户名不能为空, 长度为2-6位
    // *        (2) 密码不能为空, 长度为6-12位
    $('#form').bootstrapValidator({
        // 配置图标
        // feedbackIcons : {
        //     valid : 
        //     invalid:
        //     validting:
        // },
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            username: {
                validators: {
                    notEmpty: {
                        message: "用户名不能为空"
                    },
                    stringLength: {
                        min: 2,
                        max: 6,
                        message: "长度必须是2-6位",
                    },
                    //  callback专门用来定制回调的提示内容
                    callback: {
                        message: "用户名不存在"
                    }
                }
            },
            password: {
                // 校验规则
                validators: {
                    notEmpty: {
                        message: "密码不能为空",
                    },
                    stringLength: {
                        min: 2,
                        max: 6,
                        message: "密码长度必须是2-6位",
                    },
                    callback: {
                        message: "密码错误"
                    }

                }
            }
        }
    })


    // ajax请求
    // var username = $('#username')[0].value;
    // var password = $('#password')[0];
    // console.log(username,password);

    // 注册表单校验整个事件，校验成功时，
    // 会触发
    // 在事件中阻止默认提交（会跳转），通过ajax进行提交(异步)
    $('#form').on('success.form.bv', function (e) {
        // 阻止默认提交
        e.preventDefault();
        $.ajax({
            type: 'post',
            url: '/employee/employeeLogin',
            // url: 'localhost:3000/employee/employeeLogin',
            dataType: 'json',
            // data : {
            //     username : username,
            //     password : password,
            // },
            data: $('#form').serialize(),
            success: function (info) {
                // console.log(info);
                if (info.success) {
                    location.href = "index.html";
                }
                if (info.error == 1000) {
                    // alert('用户名不存在')
                    // 调用实例更新校验方法 updateStatus 将校验状态更新为失败
                    // 参数1 ：字段名称(username)
                    // 参数2 ：校验中VALIDATING 校验失败INVALID 
                 $('#form').data('bootstrapValidator').updateStatus('username','INVALID','callback')
                }
                if (info.error == 1001) {
                    // alert('密码错误')
                $('#form').data('bootstrapValidator').updateStatus('password','INVALID','callback')
                }
            }
        })

    })

    // 表单重置
    // $('#form').data('bootstrapValidator')创建插件实例
    // resetForm() 没传参或者传false，只会重置校验状态
    // resetForm(true) 内容和校验状态都重置

    $('[type="reset"]').click(function(){
        $('#form').data('bootstrapValidator').resetForm();
    })

})