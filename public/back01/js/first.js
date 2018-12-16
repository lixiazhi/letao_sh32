// $(function () {
//     var state = {
//         1: '正常',
//         0: '禁用'
//     }

//     var currentPage = 1;
//     var pageSize = 5;
//     render();

//     function render() {
//         $.ajax({
//             url: '/category/addTopCategory',
//             type: 'post',
//             data: {
//                 categoryName: categoryName,
//             },
//             dataType: 'json',
//             success: function (res) {
//                 var obj = {
//                     list: res.rows,
//                     state: state
//                 }
//                 console.log(obj);
//                 var htmlstr = template('userlist', obj);
//                 $('.lt_content .tb').html(htmlstr);
//                 $('#useroption').bootstrapPaginator({
//                     bootstrapMajorVersion: 3, //版本
//                     currentPage: res.page,
//                     // totalPages: res.total,
//                     totalPages: Math.ceil(res.total / res.size),
//                     // shouldShowPage: true,
//                     onPageClicked: function (event, originalEvent, type, page) {
//                         // alert(page);
//                         render();
//                         currentPage = page;
//                     }
//                 })

//             }
//         })
//     }
// })