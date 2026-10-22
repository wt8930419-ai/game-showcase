# 模拟三国城宣传页

- 官网：https://wt8930419-ai.github.io/game-showcase/818856/
- 官方资料：https://www.taptap.cn/app/818856
- 本次按用户要求仅接入安卓版 REP 入口；不展示 PC 或 iOS 入口。
- 素材来源、原始尺寸与无损转码记录：`media/sources.json`。原始 PNG 候选保留在项目的 `logs/818856-originals/`。
- 游戏开放、测试及预约状态以官方 TapTap 页面为准，页面按钮使用“安卓版入口”。

`site-config.json` 是安卓版监测链接与官网地址的唯一配置，按钮和二维码都使用 `taptap_url`。修改 `tools/index.template.html` 后，在仓库根目录运行 `python 818856/tools/prepare_site.py` 重新生成 `index.html` 与二维码，不直接维护生成结果。

预览：运行 `python tools/preview_site.py`，访问 http://127.0.0.1:8766/818856/ 。REP 官网品牌挂件填写本游戏独立官网地址，提交和审核状态以后台为准。
