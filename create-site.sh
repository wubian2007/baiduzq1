#!/bin/bash

# 创建新站点的自动化脚本
# 使用方法: ./create-site.sh "站点名称" "应用名称" "应用描述"

if [ $# -lt 3 ]; then
    echo "使用方法: $0 \"站点名称\" \"应用名称\" \"应用描述\""
    echo "示例: $0 \"篮球世界\" \"篮球世界APP\" \"专业篮球数据分析平台\""
    exit 1
fi

SITE_NAME="$1"
APP_NAME="$2"
APP_DESCRIPTION="$3"
SITE_DIR="sites/$(echo "$SITE_NAME" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]/-/g')"

echo "正在创建新站点: $SITE_NAME"
echo "应用名称: $APP_NAME"
echo "应用描述: $APP_DESCRIPTION"
echo "站点目录: $SITE_DIR"

# 创建站点目录
mkdir -p "$SITE_DIR/images"

# 复制模板文件
cp -r template/* "$SITE_DIR/"

# 生成配置文件
cat > "$SITE_DIR/config.json" << EOF
{
  "siteName": "$SITE_NAME",
  "siteDescription": "$APP_DESCRIPTION",
  "appName": "$APP_NAME",
  "appVersion": "V1.0.0",
  "developer": "开发者团队",
  "updateDate": "$(date +'%Y/%m/%d')更新",
  "tags": ["应用", "工具", "实用"],
  "icon": "images/app-icon.png",
  "screenshots": [
    "images/screenshot1.png",
    "images/screenshot2.png", 
    "images/screenshot3.png"
  ],
  "qrCode": "images/qr-code.png",
  "downloadBanner": "images/download-banner.png",
  "bottomBanner": "images/bottom-banner.png",
  "backToMainUrl": "../../index.html"
}
EOF

# 创建占位符图片（使用现有的DS足球图片作为模板）
cp sites/ds-football/images/app-icon.png "$SITE_DIR/images/app-icon.png"
cp sites/ds-football/images/screenshot1.png "$SITE_DIR/images/screenshot1.png"
cp sites/ds-football/images/screenshot2.png "$SITE_DIR/images/screenshot2.png"
cp sites/ds-football/images/screenshot3.png "$SITE_DIR/images/screenshot3.png"
cp sites/ds-football/images/qr-code.png "$SITE_DIR/images/qr-code.png"
cp sites/ds-football/images/download-banner.png "$SITE_DIR/images/download-banner.png"
cp sites/ds-football/images/bottom-banner.png "$SITE_DIR/images/bottom-banner.png"

echo "✅ 站点创建完成！"
echo "📁 站点目录: $SITE_DIR"
echo ""
echo "📝 下一步操作："
echo "1. 替换 $SITE_DIR/images/ 目录下的图片文件"
echo "2. 根据需要修改 $SITE_DIR/config.json 配置文件"
echo "3. 在主页面 index.html 中添加新站点的入口卡片"
echo ""
echo "🔗 站点访问地址: $SITE_DIR/index.html"
