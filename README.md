# 多站点合集平台

这是一个专业的多站点合集平台，可以管理多个应用下载站点。每个子站点都可以独立部署，也可以作为合集的一部分统一管理。

## 🚀 项目特性

- **多站点管理** - 统一管理多个应用下载站点
- **独立部署** - 每个子站点都可以独立部署
- **响应式设计** - 完美适配移动端和桌面端
- **模板化创建** - 快速创建新的子站点
- **统一导航** - 便捷的站点间导航

## 📁 项目结构

```
baidu/
├── index.html              # 主首页（站点合集入口）
├── README.md               # 项目说明文档
├── create-site.sh          # 自动创建新站点脚本
├── template/               # 子站点模板
│   ├── index.html          # 模板主页面
│   ├── style.css           # 模板样式
│   ├── script.js           # 模板脚本
│   ├── config.json         # 配置文件模板
│   └── images/             # 图片资源目录
└── sites/                  # 子站点目录
    ├── ds-football/        # DS足球站点
    │   ├── index.html
    │   ├── style.css
    │   ├── script.js
    │   └── images/
    ├── qiuxun-app/         # 球讯APP站点
    │   ├── index.html
    │   ├── style.css
    │   ├── script.js
    │   └── images/
    └── basketball-world/   # 篮球世界站点
        ├── index.html
        ├── style.css
        ├── script.js
        └── images/
```

## 🎯 子站点列表

### 1. DS足球
- **描述**: 专业足球数据分析平台
- **功能**: 实时比赛数据、统计分析、专业足球资讯
- **访问地址**: `sites/ds-football/index.html`

### 2. 球讯APP
- **描述**: 体育资讯应用
- **功能**: 最新体育新闻、比赛信息
- **访问地址**: `sites/qiuxun-app/index.html`

### 3. 篮球世界
- **描述**: 专业篮球数据分析
- **功能**: NBA、CBA等联赛数据、深度分析报告
- **访问地址**: `sites/basketball-world/index.html`

## 🛠️ 快速创建新站点

### 方法一：使用自动化脚本

```bash
# 给脚本执行权限
chmod +x create-site.sh

# 创建新站点
./create-site.sh "站点名称" "应用名称" "应用描述"

# 示例
./create-site.sh "网球大师" "网球大师APP" "专业网球数据分析平台"
```

### 方法二：手动创建

1. **复制模板**：
   ```bash
   cp -r template/ sites/your-site-name/
   ```

2. **修改配置**：
   编辑 `sites/your-site-name/config.json`

3. **替换图片**：
   将应用相关图片放入 `sites/your-site-name/images/`

4. **添加入口**：
   在主页面 `index.html` 中添加新的站点卡片

## 📱 本地测试

启动本地服务器：

```bash
# 启动服务器
python3 -m http.server 8000

# 访问主页面
http://localhost:8000

# 访问子站点
http://localhost:8000/sites/ds-football/
http://localhost:8000/sites/qiuxun-app/
http://localhost:8000/sites/basketball-world/
```

## 🌐 部署说明

### GitHub Pages 部署

1. **推送代码到GitHub**：
   ```bash
   git add .
   git commit -m "添加多站点合集功能"
   git push origin main
   ```

2. **启用GitHub Pages**：
   - 进入仓库设置 → Pages
   - 选择 "Deploy from a branch"
   - 选择 "main" 分支和 "/ (root)" 文件夹

3. **访问地址**：
   - 主站点：`https://your-username.github.io/baiduzq1`
   - 子站点：`https://your-username.github.io/baiduzq1/sites/ds-football/`

### 独立部署子站点

每个子站点都可以独立部署：

```bash
# 部署DS足球站点
cd sites/ds-football
# 将整个目录上传到服务器或部署平台
```

## 🎨 自定义配置

### 修改主页面

编辑 `index.html` 中的站点卡片：

```html
<div class="site-card">
    <div class="site-icon">🏀</div>
    <div class="site-title">新站点</div>
    <div class="site-description">
        站点描述<br>
        功能介绍
    </div>
    <a href="sites/new-site/" class="site-link">进入站点</a>
</div>
```

### 修改子站点配置

编辑 `sites/your-site/config.json`：

```json
{
  "siteName": "站点名称",
  "siteDescription": "站点描述",
  "appName": "应用名称",
  "appVersion": "V1.0.0",
  "developer": "开发者团队",
  "updateDate": "2025/01/01更新",
  "tags": ["标签1", "标签2", "标签3"]
}
```

## 📋 待办事项

- [ ] 添加站点管理后台
- [ ] 实现动态配置加载
- [ ] 添加站点统计功能
- [ ] 优化移动端体验
- [ ] 添加多语言支持

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支
3. 提交更改
4. 推送到分支
5. 创建 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 📞 联系方式

如有问题或建议，请通过以下方式联系：

- 项目地址：https://github.com/wubian2007/baiduzq1
- 问题反馈：https://github.com/wubian2007/baiduzq1/issues

---

**注意**: 本项目专注于体育应用下载，不包含任何投注相关内容，符合相关法律法规要求。