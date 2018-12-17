$(function () {
    var currentPage = 1;
    var pageSize = 5;
    var id;
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
            success: function (res) {
                // console.log(res);
                var htmlstr = template('secondlist', res);
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


    // 点击添加分类，蒙版显示
    $('#addBtn').on('click', function () {
        $('#categoryModal').modal('show');

        // 模板渲染
        $.ajax({
            url: '/category/queryTopCategoryPaging',
            type: 'get',
            data: {
                page: 1,
                pageSize: 100,
            },
            dataType: 'json',
            success: function (res) {
                // console.log(res);
                var htmlstr = template('dropmenulist', res);
                $('.dropdown-menu').html(htmlstr);

            }
        })
    })


    // 点击a,给drowText。text
    $('.dropdown-menu').on('click', 'a', function () {
        // alert(1);
        $('.drowText').text($(this).text());
        id = $(this).data('id');
        // console.log(id);



    })
    $('#fileupload').fileupload({
        dataType: 'json',
        done: function (e, data) {
            // console.log(data);
            var imgpic = data.result;
            // console.log(imgpic);
            var url = imgpic.picAddr;
            // console.log(url);
            $('#imgBox img').attr('src', url);
        }
    })


    $('#cancel').on('click', function () {
        // var validator = $('#form').data('bootstrapValidator');
        // validator.resetForm(true);
        $('.drowText').text('请选择一级分类');
        $('.inps').val('');
        $('#imgBox img').attr('src', './images/none.png');

    })

    $('#appendBtn').on('click', function () {
        // alert(1);
        // var txt = $('.drowText').text();
        // console.log(id);
        var inps = $('.inps').val();
        var imgsrc = $('#imgBox img').attr('src');
        // console.log(txt,inps,imgsrc);
        $.ajax({
            url: '/category/addSecondCategory',
            type: 'post',
            data: {
                brandName: inps,
                categoryId: id,
                brandLogo: imgsrc,
            },
            dataType: 'json',
            success: function (res) {
                console.log(res);
                if (res.success) {
                    currentPage = 1;
                    render();
                    $('#categoryModal').modal('hide');
                    $('.drowText').text('请选择一级分类');
                    $('.inps').val('');
                    $('#imgBox img').attr('src', './images/none.png');

                }

            }
        })

    })

})