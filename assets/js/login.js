$(function () {
    $('#link_reg').on('click', function () {
        $('.login-box').hide()
        $('.reg-box').show()
    })
    $('#link_login').on('click', function () {
        $('.login-box').show()
        $('.reg-box').hide()
    })
    //从layui上获取form对象
    let form = layui.form
    //通过form.verify()函数自定义校验规则
    form.verify({
        //自定义了一个叫做pwd校验规则
        pwd: [/^[\s]{6,12}$/, '必须是6到12位,不能为空格']
    })


})