# 🚀 部署指南

本文档将指导你将短视频调研系统部署到 Vercel。

## ✅ 已完成的准备工作

- ✅ 代码已经修改为使用本地视频（01.mp4 - 07.mp4）
- ✅ Git 仓库已初始化
- ✅ 所有文件已提交到本地 Git

## 📋 接下来的部署步骤

### 步骤 1：在 GitHub 上创建仓库

1. 访问 GitHub: https://github.com/new
2. 填写仓库信息：
   - Repository name: `short-video` (或你喜欢的名字)
   - Description: `短视频调研系统`
   - 选择 **Public** (公开仓库)
   - **不要**勾选 "Add a README file"（我们已经有了）
   - **不要**勾选 "Add .gitignore"（我们已经有了）
3. 点击 **"Create repository"** 按钮

### 步骤 2：推送代码到 GitHub

创建仓库后，GitHub 会显示一个页面，找到 **"…or push an existing repository from the command line"** 部分。

在终端中执行以下命令（替换 `YOUR_USERNAME` 为你的 GitHub 用户名）：

```bash
cd /Users/lihenry/Documents/short_video

# 添加远程仓库
git remote add origin https://github.com/YOUR_USERNAME/short-video.git

# 推送代码
git branch -M main
git push -u origin main
```

如果需要登录，输入你的 GitHub 用户名和个人访问令牌（Personal Access Token）。

### 步骤 3：部署到 Vercel

#### 方法 A：通过 Vercel 网页控制台（推荐）

1. 访问 Vercel: https://vercel.com
2. 使用 GitHub 账号登录
3. 点击 **"Add New..."** → **"Project"**
4. 从列表中找到你的 `short-video` 仓库
5. 点击 **"Import"**
6. 保持默认设置，点击 **"Deploy"**
7. 等待部署完成（通常需要 1-2 分钟）
8. 部署完成后，你会获得一个类似 `https://short-video-xxx.vercel.app` 的链接

#### 方法 B：使用 Vercel CLI

如果你更喜欢使用命令行：

```bash
# 安装 Vercel CLI
npm install -g vercel

# 登录 Vercel
vercel login

# 部署
cd /Users/lihenry/Documents/short_video
vercel
```

## 🎉 部署完成！

部署成功后，你可以：

- 访问你的网站链接
- 在移动设备上测试（Vercel 链接支持 HTTPS）
- 分享给用户进行调研

## 📱 测试建议

1. 在手机上打开部署链接
2. 测试上下滑动切换视频
3. 测试分类筛选功能
4. 观看 5 个视频后会弹出问卷
5. 测试组队匹配功能

## 🔄 后续更新

当你需要更新代码时：

```bash
cd /Users/lihenry/Documents/short_video

# 修改代码后提交
git add .
git commit -m "描述你的更改"
git push

# Vercel 会自动重新部署
```

## ⚠️ 注意事项

1. **视频文件大小**：如果视频文件太大，可能导致：
   - GitHub 推送失败（单个文件 >100MB）
   - 网站加载缓慢
   
   解决方案：
   - 压缩视频文件
   - 或使用云存储（如阿里云 OSS、七牛云）托管视频

2. **如果视频文件过大无法推送到 GitHub**：
   
   你可以使用云存储托管视频，然后修改 `index.html` 中的视频 URL。
   
   例如：
   ```javascript
   { id: 1, cat: "美食", url: "https://your-cdn.com/videos/01.mp4", ... }
   ```

## 🆘 常见问题

**Q: GitHub 推送时要求输入密码？**

A: GitHub 不再支持密码认证，需要使用 Personal Access Token：
   1. 访问 https://github.com/settings/tokens
   2. 生成新 Token（选择 repo 权限）
   3. 复制 Token 作为密码使用

**Q: 视频无法播放？**

A: 检查视频格式是否为 MP4，且编码为 H.264（浏览器通用格式）

**Q: 手机上无法自动播放视频？**

A: 这是浏览器限制，用户需要先点击屏幕才能播放

## 📞 需要帮助？

如果遇到问题，可以查看：
- GitHub 文档: https://docs.github.com
- Vercel 文档: https://vercel.com/docs
