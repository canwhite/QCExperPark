const pluginName = "HelloWorldPlugin";

class HelloWorldPlugin{

    apply(complier){
        //appply方法内部主要添加事件注册
        //注册完的插件会在webpack中统一触发执行
        complier.hooks.someHook.tapAsync(
            pluginName,
            (compilation,callback)=>{
                //do something async
                setTimeout(() => {
                    console.log('Done with async work...');
                    callback();
                }, 1000);
            }
        )
    }
}
//因为webpack在初始化时,会遍历plugins参数中的实例，
//plugins一般是放在webpack.conf.json中，我们把我们写好的插件实例放进去就可以了
//依次调用实例的apply方法，并将complier作为参数。


module.exports = HelloWorldPlugin;