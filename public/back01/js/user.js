$(function () {
    $.ajax({
        url: '/user/queryUser',
        type: 'get',
        data: {
            page: 1,
            pageSize: 10,
        },
        dataType: 'json',
        success: function (res) {
            console.log(res);

        }
    })
})