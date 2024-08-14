function checkAndRedirect() {
    const lastTriggered = localStorage.getItem('lastTriggered'); // 获取上次触发的时间戳
    const currentTime = new Date().getTime(); // 获取当前时间的时间戳（毫秒）

    // 定义 1 小时（以毫秒为单位）
    const oneHour = 60 * 60 * 1000;

    // 如果没有记录上次触发时间，或者上次触发时间距离当前时间已超过 1 小时
    if (!lastTriggered || (currentTime - lastTriggered) > oneHour) {
        // 生成一个 30 到 60 秒之间的随机延时
        const delay = Math.floor(Math.random() * 30 + 30) * 1000; // 30-60 秒的随机延时（毫秒）

        // 使用 setTimeout 在延时后执行跳转和提示
        setTimeout(() => {
            alert("登录超时，请重新登录"); // 提示用户登录超时

            // 记录当前时间戳为最后触发时间
            localStorage.setItem('lastTriggered', currentTime);

            // 执行跳转
            window.location.href = "http://your-redirect-url.com"; // 替换为你需要跳转的 URL
        }, delay);
    }
}

// 调用函数检查并可能执行跳转
checkAndRedirect();
