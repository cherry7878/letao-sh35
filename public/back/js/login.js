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
                    min:2,
                    max:6,
                    message:'密码长度必须是6-8位'
                }
            }
           }
        }
    })
});