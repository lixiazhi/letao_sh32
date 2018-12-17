$(function () {
    var currentPage = 2;
    var pageSize = 2;
    render();

    function render() {
        $.ajax({
            url: '/product/queryProductDetailList',
            type: 'get',
            data: {
                page: currentPage,
                pageSize: pageSize,
            },
            dataType: 'json',
            success: function (res) {
                console.log(res);
                var htmlstr = template('productlist', res);
                $('.tb').html(htmlstr);
                $('#paginator').bootstrapPaginator({
                    bootstrapMajorVersion: 3,
                    currentPage: res.page,
                    totalPages: Math.ceil(res.total / res.size),
                    onPageClicked: function (event, originEvent, type, page) {
                        currentPage = page;
                        render();
                    }
                })

            }
        })
    }

    // 点击添加。蒙版出现
    $('#productModal').modal('show');
})