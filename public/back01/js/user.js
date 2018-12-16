$(function () {
    var state = {
        1: '正常',
        0: '禁用'
    }

    var currentPage = 1;
    var pageSize = 5;
    render();

    function render() {
        $.ajax({
            url: '/user/queryUser',
            type: 'get',
            data: {
                page: currentPage,
                pageSize: pageSize,
            },
            dataType: 'json',
            success: function (res) {
                var obj = {
                    list: res.rows,
                    state: state
                }
                console.log(obj);
                var htmlstr = template('userlist', obj);
                $('.lt_content .tb').html(htmlstr);
                $('#useroption').bootstrapPaginator({
                    bootstrapMajorVersion: 3, //版本
                    currentPage: res.page,
                    // totalPages: res.total,
                    totalPages: Math.ceil(res.total / res.size),
                    // shouldShowPage: true,
                    onPageClicked: function (event, originalEvent, type, page) {
                        // alert(page);
                        // console.log(page)
                        currentPage = page;
                        render();
                    }
                })

            }
        })
    }


    // 点击禁用或者启用
    $('.tb').on('click', '.btn', function () {
        // alert(1);
        var id = $(this).parent().attr('data-id');
        var isDelete = $(this).hasClass('btn-danger') ? 0 : 1;
        // console.log(isDelete);
        $('#logoutModal').modal('show');
        $('#confirm').on('click', function () {
            // console.log(id, isDelete)
            // $('#logoutModal').modal('hide');
            // document.querySelector("#unable").classList.remove('btn-danger');
            // document.querySelector("#unable").classList.add('btn-success');
            $.ajax({
                url: '/user/updateUser',
                type: 'post',
                data: {
                    id: id,
                    isDelete: isDelete,
                },
                success: function (res) {
                    console.log(res);
                    if (res.success) {
                        $('#logoutModal').modal('hide');
                        render();
                    }

                }
            })
        })
    })
})
//     // 设置分页
//     setPage(currentPage);
//     function setPage(page) {
//         $.ajax({
//             url: '/user/queryUser',
//             type: 'get',
//             dataType: 'json',
//             success: function (res) {
//                 var currentPage = res.page;
//                 var pageCount = res.size;
//                 var total = res.total;
//                 // console.log(currentPage, pageCount, total);
//                 $('#useroption').bootstrapPaginator({
//                     bootstrapMajorVersion: 3, //版本
//                     currentPage: currentPage,
//                     totalPages: total,
//                     numberOfPages: pageCount,
//                     shouldShowPage: true,
//                     onPageClicked: function (event, originalEvent, type, page) {
//                         render(page);
//                         currentPage = page + 1;
//                         console.log(currentPage);

//                         // console.log(event,originalEvent,page,type);

//                     }
//                 });
//             }
//         })
//     }
// })






//     $.ajax({
//         url: '/user/queryUser',
//         type: 'get',
//         data: {
//             page: 1,
//             pageSize: 5,
//         },
//         dataType: 'json',
//         success: function (res) {
//             console.log(res);
//             // console.log(res.rows);
//             // console.log(res.rows[0].id);

//             var obj = {
//                 list: res.rows,
//                 state: state
//             }
//             console.log(obj);
//             var htmlstr = template('userlist', obj);
//             $('.lt_content .tb').html(htmlstr);
//             console.log(res.page);
//             console.log(res.size);
//             console.log(res.total);
//             var currentPage = res.page;
//             var pageCount = res.size;
//             var total = res.total;
//             var options = {
//                 bootstrapMajorVersion: 3, //版本
//                 currentPage: currentPage,
//                 totalPages: total,
//                 numberOfPages: pageCount,
//                 shouldShowPage: true,
//                 onPageClicked: function (event, originalEvent, type, page) {
//                     $.ajax({
//                         url: '/user/queryUser',
//                         type: 'get',
//                         data: {
//                             page: currentPage,
//                             pageSize: pageCount,
//                         },
//                         dataType: 'json',
//                         success: function (res) {
//                             var obj = {
//                                 list: res.rows,
//                                 state: state
//                             }
//                             console.log(obj);
//                             var htmlstr = template('userlist', obj);
//                             $('.lt_content .tb').html(htmlstr);
//                         }
//                     });
//                 }
//             };
//             $('#useroption').bootstrapPaginator(options);
//         }
//     })