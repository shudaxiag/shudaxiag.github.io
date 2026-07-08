document.body.insertAdjacentHTML("afterbegin", `
<div class="header">
    <div class="logo">鼠大侠 - Hello啊</div>
    <div class="header-desc">
        全栈开发工程师 · 软件开发 · 网站二开 · 自动化工具 · 授权系统
    </div>
</div>

<div class="sidebar">
    <div class="menu-title">产品文档目录</div>

    <div class="menu">

        <a href="/index.html">
            首页简介
        </a>


        <a href="/pages/ws40/">
            微闪4.0安装包/源码
        </a>

        <a href="/pages/ws502/">
            微闪5.02安装包/源码
        </a>

        <a href="/pages/ws602/">
            微闪6.02安装包/源码
        </a>


        <a href="/pages/api91/">
            91数据发送安装包/源码
        </a>


        <a href="/pages/chaidan/">
            拆单助手 - 鼠大侠
        </a>

        <a href="/pages/chaidan2/">
            49统计拆单 2.0.0.5
        </a>


        <a href="/pages/weixinmoniqi/">
            三方微信修改器
        </a>


        <a href="/pages/kof97/">
            拳皇97辅助
        </a>


        <a href="/pages/kuaidibiaoqianguanjia/">
            快递标签管家
        </a>


        <a href="/pages/imgconvert/">
            图片转换器 - 鼠大侠
        </a>

        <a href="/pages/texttool/">
            文本去重复 - 鼠大侠
        </a>


        <!-- 🆕 新增 -->
        <a href="/pages/jiakejiami/">
            小白龙通用加壳 - v1.4.0.0
        </a>

    </div>
</div>
`);



document.querySelectorAll(".menu a").forEach(link => {

    const href = link.getAttribute("href");


    if (
        location.pathname === href ||
        location.pathname.startsWith(href)
    ) {

        link.classList.add("active");

    }

});
