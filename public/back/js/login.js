// 1.表单校验初始化
$(function(){
//    表单校验:
//    先找到表单,方法,配置对象
    $('#form').bootstrapValidator({
        // 2.配置图标
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
          },

        // 1.字段列表,要先在input中配置name属性
        fields:{
            // 用户名
           username:{
            //    校验的规则
               validators:{
                //    非空
                notEmpty:{
                    message:'用户名不能为空'
                },
                stringLength:{
                    min:2,
                    max:6,
                    message:'用户名长度必须是2-6位'
                    
                },
                callback: {
                    message: "用户名不存在"
                  }
           }
        },
           password: {
            //    数据校验:
            validators:{
                // 非空
                notEmpty:{
                    message:'密码不能为空'
                },
                stringLength:{
                    min:6,
                    max:8,
                    message:'密码长度必须是6-8位'
                },
                // 专门用于配置回调提示信息的校验规则
               callback: {
               message: "密码错误"
             }
            }
           }
        }
    })
});

// 2.使用submit按钮,会发生提交,此事校验插件会立即发生验证
// 其实就是注册表单校验成功事件,在事件中阻止默认的提交,用ajax提交
$('#form').on("success.form.bv", function(e){
    //阻止表单的默认提交
    e.preventDefault();
    console.log('当前默认的表单提交已经被阻止,我们通过ajax提交');
    //使用ajax进行提交
//    ajax请求
$.ajax({
    type:'post',
    url:"/employee/employeeLogin",
    // data可以用表单序列化
    data:$('#form').serialize(),
    dataType:'json',
    // info是个局部变量
    success:function(info){
     console.log(info);
     if(info.error===1000){
         alert('用户名不存在');
     }
     if(info.error===1001){
         alert('密码错误');
     }
     if(info.success){
        //  alert('登陆成功');
        // 地址跳转
        location.href="index.html";
     }
    }
   })
  })