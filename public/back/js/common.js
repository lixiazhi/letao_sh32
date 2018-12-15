// 在第一个ajax发送，开始进度条
// 全部ajax结束，结束进度条
// NProgress.start(); //开启进度条
// 模拟网络延迟
// setTimeout(function () {
//     NProgress.done();
// }, 2000);


// ajax全局事件
// .ajaxComplete()  当ajax完成时，调用 (不管成功与失败)
// .ajaxSuccess()  当ajax返回成功时调用
// .ajaxError()  当ajax返回失败时调用
// .ajaxSend()  当ajax发送之前调用
// .ajaxStart()  当第一个ajax发送时调用
// .ajaxStop()  当所有ajax完成返回时调用
$(document).ajaxStart(function () {
    NProgress.start();
})
$(document).ajaxStop(function () {
    NProgress.done();
})