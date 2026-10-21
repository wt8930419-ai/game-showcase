"""从统一配置生成静态首页与下载二维码。"""

import html
import io
import json
from pathlib import Path
from urllib.parse import urlparse

import qrcode
import qrcode.image.svg


ROOT = Path(__file__).resolve().parent.parent


def main():
    config = json.loads((ROOT / "site-config.json").read_text(encoding="utf-8"))
    target = config["taptap_url"]
    parsed = urlparse(target)
    if parsed.scheme != "https" or not parsed.hostname:
        raise ValueError("下载链接必须是完整的 HTTPS 地址")
    source = (ROOT / "tools" / "index.template.html").read_text(encoding="utf-8")
    output = source.replace("{{TAPTAP_URL}}", html.escape(target, quote=True))
    output = output.replace("{{SITE_URL}}", html.escape(config["site_url"], quote=True))
    if "{{" in output:
        raise ValueError("页面仍包含未替换的模板字段")

    qr = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_M, box_size=8, border=4)
    qr.add_data(target)
    qr.make(fit=True)
    picture = qr.make_image(image_factory=qrcode.image.svg.SvgPathImage)
    buffer = io.BytesIO()
    picture.save(buffer)

    (ROOT / "media" / "play-qr.svg").write_bytes(buffer.getvalue())
    (ROOT / "index.html").write_text(output, encoding="utf-8", newline="\n")
    print("已生成 index.html 与 media/play-qr.svg，目标：" + target)
    if not config["rep_tracking"]:
        print("当前使用官方游戏页；获取 REP 官网品牌挂件监测链接后修改 site-config.json 并重新生成。")


if __name__ == "__main__":
    main()
