$(function () {
    var currentPage = 1;
    var pageSize = 5;
    render();

    function render() {
        $.ajax({
            url: '/category/querySecondCategoryPaging',
            type: 'get',
            data: {
                page: currentPage,
                pageSize: pageSize,
            },
            dataType: 'json',
            success: function (info) {
                // console.log(info);
                var htmlstr = template('secondlist', info);
                $('.tb').html(htmlstr);
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
        $('#addModal').modal('show');
        $.ajax({
            url: '/category/queryTopCategoryPaging',
            type: 'get',
            data: {
                page: 1,
                pageSize: 100,
            },
            dataType: 'json',
            success: function (info) {
                // console.log(info);
                var htmlstr = template('dropdownTpl', info);
                $('.dropdown-menu').html(htmlstr);

            }
        })
    })

    // 下拉列表注册点击事件
    $('.dropdown-menu').on('click', 'a', function () {
        $('#dropdownText').text($(this).text());
    })

    $('#fileupload').fileupload({
        dataType: "json",
        done: function (e, data) {
            console.log(data);
            var result = data.result;
            var picUrl = result.picAddr;
            $('#imgBox img').attr('src', picUrl);
        }
    })

    // 点击添加，发送ajax,重新渲染页面
    // $('#form').on('success.form.bv', function (e) {
    //     e.preventDefault();
    //     $.ajax({
    //         type: 'post',
    //         url: '/category/addSecondCategory',
    //         dataType: 'json',
    //         data: {

    //         },
    //         success: function (info) {
    //             console.log(info);
    //             // if (info.success) {
    //             //     $('#categoryModal').modal('hide');
    //             //     currentPage = 1;
    //             //     render();
    //             //     $('#form').data('bootstrapValidator').resetForm(true);
    //             // }
    //         }
    //     })

    // })
})