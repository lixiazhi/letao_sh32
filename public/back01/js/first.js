$(function () {
    var currentPage = 1;
    var pageSize = 5;
    render();

    function render() {
        $.ajax({
            url: '/category/queryTopCategoryPaging',
            type: 'get',
            data: {
                page: currentPage,
                pageSize: pageSize,
            },
            dataType: 'json',
            success: function (res) {
                // console.log(res);
                var htmlstr = template('firstlist', res);
                $('.tb').html(htmlstr);
                $('#paginator').bootstrapPaginator({
                    bootstrapMajorVersion: 3,
                    currentPage: res.page,
                    totalPages: Math.ceil(res.total / res.size),
                    onPageClicked: function (event, originEvent, type, page) {
                        // console.log(page);
                        currentPage = page,
                            render();
                    }
                })

            }
        })
    }


    // 点击分类。模板show
    $('#addBtn').on('click', function () {
        $('#categoryModal').modal('show');
    })
    $('#cancel').on('click', function () {
        var validator = $('#form').data('bootstrapValidator');
        validator.resetForm(true);
    })
    // 表单验证
    $('#form').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok', // 校验成功
            invalid: 'glyphicon glyphicon-remove', // 校验失败
            validating: 'glyphicon glyphicon-refresh' // 校验中
        },
        fields: {
            categoryName: {
                validators: {
                    notEmpty: {
                        message: '请输入一级分类名称',
                    }
                }
            }
        }
    })
    $('#form').on('success.form.bv', function (e) {
        e.preventDefault();
        $.ajax({
            type: 'post',
            url: '/category/addTopCategory',
            data: $('#form').serialize(),
            dataType: 'json',
            success: function (res) {
                // console.log(res);
                if (res.success) {
                    $('#categoryModal').modal('hide');
                    currentPage = 1;
                    render();
                    $('#form').data('bootstrapValidator').resetForm(true);
                }
            }
        })
    })

})