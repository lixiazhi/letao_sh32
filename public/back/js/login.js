$(function () {
    // 表单校验
    $('#form').bootstrapValidator({
            // 配置图标
            // feedbackIcons : {
            //     valid : 
            //     invalid:
            //     validting:
            // },
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
                    }

                }
            }
        }
    })
})