# 游戏展示项目 · 安妮早餐店

静态游戏官网，部署在 GitHub Pages，无需后端服务。封面、图标与宣传画面取自游戏官方 TapTap 页面，来源记录在 `media/sources.json`。

- 官网：https://wt8930419-ai.github.io/game-showcase/
- 官方游戏页：https://www.taptap.cn/app/978939
- 仓库：https://github.com/WT8930419-AI/game-showcase
- Pages 发布源：`main` 分支根目录 `/`。

## 更新 REP 官网品牌挂件链接

当前下载与游玩按钮使用官方游戏页，尚未接入 REP 监测链接，尚未提交 REP 审核。

1. 登录 https://rep.taptap.cn/，选择《安妮早餐店》，添加资源，场景选择“官网品牌挂件”，生成监测链接。
2. 将生成的链接填入 `site-config.json` 的 `taptap_url`，并将 `rep_tracking` 改为 `true`。
3. 安装制作依赖并生成页面与二维码：

```powershell
python -m pip install -r tools/requirements.txt
python tools/prepare_site.py
```

4. 将更新的 `site-config.json`、`index.html` 和 `media/play-qr.svg` 提交并推送到 `main`，GitHub Pages 会自动发布。
5. 公开访问验证完成后，将官网地址填回 REP 相应资源并提交审核。是否通过、奖励及结算以平台审核为准。

官方说明：https://rep.taptap.cn/docs/taprep-brand

## 编辑与预览

首页源文件为 `tools/index.template.html`，生成的 `index.html` 不单独维护。修改源文件或统一链接配置后运行准备脚本；视觉样式在 `styles.css`，交互在 `app.js`。

```powershell
python tools/preview_site.py
```

访问 http://127.0.0.1:8766/ 。所有资源使用相对路径，兼容 GitHub Pages 仓库子路径。网站没有访客统计、账户、支付或自建下载服务；所有下载与游玩入口均指向 TapTap。
