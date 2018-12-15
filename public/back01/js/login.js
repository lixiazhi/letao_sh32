$(function () {
    $('#form').bootstrapValidator({
        message: 'This value is not valid',
        excluded: [':disabled'],
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
                    regexp: {
                        regexp: /^[a-zA-Z0-9_]+$/,
                        message: "用户名只能包含大小写、数字和下划线"
                    }
                }
            },
            password: {
                validator: {
                    notEmpty: {
                        message: "密码不能为空",
                    },
                    stringLength: {
                        min: 2,
                        max: 6,
                        message: "密码长度为2-6位"
                    },
                    regexp: {
                        regexp: /^[]$/,
                    }

                }
            }


        }
    })
})