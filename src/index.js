// import _ from 'lodash';
import printMe from './print.js';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = `Hello webpack`;

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

let element = component();
document.body.appendChild(element);
console.log(module.hot);
if (module.hot) {
    module.hot.accept('./print.js', function () {
        console.log('Accepting the updated printMe module!');
        printMe();
        // 重新绑定事件，不然热更新之后，printMe虽然已经更新，绑定的事件处理函数还是之前的
        document.body.removeChild(element);
        element = component();
        document.body.appendChild(element);
    });
}
