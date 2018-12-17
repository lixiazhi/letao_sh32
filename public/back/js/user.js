$(function () {
    var currentPage = 1;
    var pageSize = 5;
    var currentId, isDetele;
    render();

    function render() {
        $.ajax({
            url: '/user/queryUser',
            type: 'GET',
            data: {
                page: currentPage,
                pageSize: pageSize,
            },
            dataType: 'json',
            success: function (info) {
                console.log(info);
                var htmlstr = template('userlist', info);
                $('.lt_content .tb').html(htmlstr);
                $('#paginator').bootstrapPaginator({
                    bootstrapMajorVersion: 3,
                    currentPage: info.page,
                    totalPages: Math.ceil(info.total / info.size),
                    onPageClicked: function (event, origin, type, page) {
                        // 给页码添加点击事件
                        console.log(page);
                        currentPage = page;
                        render();
                    }
                })

            }

        })
    }



    // 
    $('tbody').on('click', '.btn', function () {
        // alert(1);
        $('#userModal').modal('show');
        currentId = $(this).parent().data('id');
        isDetele = $(this).hasClass('btn-danger') ? 0 : 1;

    })
    $('#summbitBtn').on('click', function () {
        console.log(currentId, isDetele);

        $.ajax({
            type: "post",
            url: "/user/updateUser",
            data: {
                id: currentId,
                isDelete: isDetele
            },
            success: function (info) {
                console.log(info)
                if (info.success) {
                    // 关闭模态框
                    $('#userModal').modal("hide");
                    // 重新渲染
                    render();
                }
            }
        })
    })




})