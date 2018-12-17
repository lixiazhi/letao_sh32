$(function () {
    var currentPage = 1;
    var pageSize = 5;
    render();

    function render() {
        $.ajax({
            type: 'get',
            url: '/category/queryTopCategoryPaging',
            data: {
                page: currentPage,
                pageSize: pageSize,
            },
            dataType: 'json',
            success: function (info) {
                console.log(info);
                var htmlstr = template('firstlist', info);
                $('.lt_content .tb').html(htmlstr);
                $('#paginator').bootstrapPaginator({
                    bootstrapMajorVersion: 3,
                    currentPage: info.page,
                    totalPages: Math.ceil(info.total / info.size),
                    onPageClicked: function (event, originEvent, type, page) {
                        currentPage = page;
                        render();
                    }
                })

            }

        })
    }
    $('#addBtn').on('click', function () {
        // alert(1);
        $('#categoryModal').modal('show');
    })

    $('#form').bootstrapValidator({
        fields: {
            categoryName: {
                validators: {
                    notEmpty: {
                        message: "分类名不能为空"
                    },
                }
            },
        }
    })

    $('#form').on('success.form.bv', function (e) {
        e.preventDefault();
        $.ajax({
            type: 'post',
            url: '/category/addTopCategory',
            dataType: 'json',
            data: $('#form').serialize(),
            success: function (info) {
                console.log(info);
                if (info.success) {
                    $('#categoryModal').modal('hide');
                    currentPage = 1;
                    render();
                    // $('#form').data('bootstrapValidator').resetForm(true);
                    $('#form').data('bootstrapValidator').resetForm(true);
                }
            }
        })

    })

})