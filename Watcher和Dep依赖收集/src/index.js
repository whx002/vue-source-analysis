import observe from './observe.js';
import Watcher from './Watcher.js';

window.obj = {
    a: 33,
    b: 44,
    c: 55,
    d: 66,
    arr: [{ z: 6 }, 33, 34, 35, 36]
};
// 观察
observe(obj);

// 做2个视图函数
function render1() {
    // 读取模板字符串
    var templateString = `
        <h3>我身高{{a}}，体重{{b}}</h3>
    `;

    // 调用replace方法，把{{}}的内容都替换为★
    templateString = templateString.replace(/\{\{(\w+)\}\}/g, function (str, $1) {
        new Watcher(obj, $1, render1);
        return obj[$1];
    });

    document.getElementById('container1').innerHTML = templateString;
};

function render2() {
    // 读取模板字符串
    var templateString = `
        <h3>我身高{{a}}，年龄{{c}}</h3>
    `;

    // 调用replace方法，把{{}}的内容都替换为★
    templateString = templateString.replace(/\{\{(\w+)\}\}/g, function (str, $1) {
        new Watcher(obj, $1, render2);
        return obj[$1];
    });

    document.getElementById('container2').innerHTML = templateString;
};
render1();
render2();