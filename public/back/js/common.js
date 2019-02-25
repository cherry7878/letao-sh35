// 进度条

// 测试进度条
// 开始
NProgress.start();
// 结束
// 设置延迟
setTimeout(function(){
    NProgress.done()
},2000)


//注册了全局事件，所有的ajax只要开始就会开启进度条
$(document).ajaxStart(function () {
    NProgress.start();
  });
  
//   //所有的ajax只要结束，延迟500毫秒，结束进度条
  $(document).ajaxStop(function () {
    setTimeout(function () {
      NProgress.done();
    }, 500);
  
  });
