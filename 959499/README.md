# 点点修仙传宣传页

- 官网：https://wt8930419-ai.github.io/game-showcase/959499/
- 官方资料：https://www.taptap.cn/app/959499
- 素材来源及原始尺寸：`media/sources.json`。
- 官方页面目前显示预约；移动端按钮使用预约文案，PC 按钮前往 TapTap PC 下载入口。游戏开放状态以 TapTap 为准。

`site-config.json` 为手机端、PC REP 链接与官网地址的唯一配置。二维码只使用手机端链接。修改 `tools/index.template.html` 后执行 `python 959499/tools/prepare_site.py` 重新生成页面与二维码；不要直接维护 `index.html`。

从仓库根目录执行 `python tools/preview_site.py`，访问 http://127.0.0.1:8766/959499/ 。REP 官网品牌挂件填写本游戏独立官网地址，提交和审核状态以后台为准。
