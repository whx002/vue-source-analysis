/**
 * 这个文件暴露一个对象，它将成为数组的新原型
 * 这个文件是Vue源码中粘贴来的，目的是看看尤雨溪这种大佬的编程风格
 *  */

// Object.create()表示以某东西为原型创建对象
const arrayMethods = Object.create(Array.prototype);

// 把要改写的7个方法放到了数组中，“磨刀霍霍向猪羊”
var methodsToPatch = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse'
];

// 遍历存有7个字符串的数组
methodsToPatch.forEach(function (method) {
    // method是方法名，将Array.prototype上的原始方法进行备份
    var original = Array.prototype[method];

    def(arrayMethods, method, function mutator() {
        // console.log('数组' + method + '方法被拦截')
        var result = original.apply(this, arguments);
        return result;
    });
});

// 定义obj对象的key属性
function def (obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
      value: val,
      enumerable: enumerable,
      writable: true,
      configurable: true
    });
}

export default arrayMethods;