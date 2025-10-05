# 子站点模板使用说明

这个模板可以帮助您快速创建新的子站点。

## 使用方法

1. **复制模板文件**：
   ```bash
   cp -r template/ sites/your-site-name/
   ```

2. **修改配置文件**：
   编辑 `sites/your-site-name/config.json` 文件，修改以下信息：
   - `siteName`: 站点名称
   - `siteDescription`: 站点描述
   - `appName`: 应用名称
   - `appVersion`: 应用版本
   - `developer`: 开发者信息
   - `updateDate`: 更新日期
   - `tags`: 应用标签
   - `icon`: 图标路径
   - `screenshots`: 截图路径数组
   - `qrCode`: 二维码路径

3. **替换图片资源**：
   - 将应用图标放入 `images/app-icon.png`
   - 将截图放入 `images/screenshot1.png`, `screenshot2.png`, `screenshot3.png`
   - 将二维码放入 `images/qr-code.png`
   - 将横幅图片放入 `images/download-banner.png`, `images/bottom-banner.png`

4. **在主页面添加入口**：
   编辑根目录的 `index.html`，在 `sites-grid` 中添加新的站点卡片。

## 模板结构

```
template/
├── index.html          # 主页面模板
├── style.css           # 样式文件
├── script.js           # JavaScript文件
├── config.json         # 配置文件
└── images/             # 图片资源目录
    ├── app-icon.png    # 应用图标
    ├── screenshot1.png # 截图1
    ├── screenshot2.png # 截图2
    ├── screenshot3.png # 截图3
    ├── qr-code.png     # 二维码
    ├── download-banner.png # 下载横幅
    └── bottom-banner.png   # 底部横幅
```

## 自动化脚本

您可以使用提供的 `create-site.sh` 脚本来自动创建新站点：

```bash
./create-site.sh "站点名称" "应用名称" "应用描述"
```

这将自动：
1. 创建新的子目录
2. 复制模板文件
3. 更新配置文件
4. 在主页面添加入口
