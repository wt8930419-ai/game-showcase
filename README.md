# 游戏展示项目

多个游戏共用一个 GitHub Pages 仓库，每个游戏按 TapTap App ID 使用独立目录。根首页为游戏导航。

| 页面 | 目录 | 公开地址 |
| --- | --- | --- |
| 游戏导航 | `/` | https://wt8930419-ai.github.io/game-showcase/ |
| 圣剑与传说 | `950239/` | https://wt8930419-ai.github.io/game-showcase/950239/ |
| 安妮早餐店 | `978939/` | https://wt8930419-ai.github.io/game-showcase/978939/ |

- 仓库：https://github.com/wt8930419-ai/game-showcase
- Pages 发布源：`main` 分支根目录 `/`。
- 官网素材来自对应游戏官方 TapTap 页面，来源记录在各游戏的 `media/sources.json`。
- 两个游戏已配置各自的 REP 监测链接；提交和审核状态以 REP 后台为准。

## 更新游戏页面

每个游戏目录中的 `site-config.json` 是下载链接和官网地址的权威配置：`taptap_url` 对应移动端，`taptap_pc_url` 对应 PC；二维码始终使用移动端链接。页面源文件为 `tools/index.template.html`，样式在 `styles.css`，交互在 `app.js`。不单独维护生成的 `index.html`。

从仓库根目录执行，例如：

```powershell
python -m pip install -r 950239/tools/requirements.txt
python 950239/tools/prepare_site.py
python 978939/tools/prepare_site.py
python tools/preview_site.py
```

预览地址为 http://127.0.0.1:8766/ 。提交本次范围内的改动并推送后，验证 Pages 发布结果、各游戏地址、下载入口与最终二维码。

## REP 官网地址

REP 中每个游戏填写自己的独立网址。根网址已由《安妮早餐店》改为游戏导航，原先使用根网址的安妮资源需要更新为 `https://wt8930419-ai.github.io/game-showcase/978939/`。

新游戏先确认 App ID、官方页面，并分别向用户索取移动端、PC 两条 REP 下载链接，再新增独立目录及首页入口；缺少的链接必须明确索取，不得猜测、将同一条链接用于两个平台或复用其他游戏的监测链接。
