let aaa=[]
for (let key in window) {
    aaa+=key  // 打印出所有全局对象的名称
}
alert(aaa)
