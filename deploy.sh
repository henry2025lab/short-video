#!/bin/bash

# 短视频调研系统部署脚本
echo "🚀 开始部署短视频调研系统..."
echo ""

# 检查是否在正确的目录
if [ ! -f "index.html" ]; then
    echo "❌ 错误：请在项目根目录运行此脚本"
    exit 1
fi

# 检查 Git 是否已初始化
if [ ! -d ".git" ]; then
    echo "📦 初始化 Git 仓库..."
    git init
    git add .
    git commit -m "初始提交：短视频调研系统"
fi

echo "请输入你的 GitHub 用户名："
read -r GITHUB_USERNAME

if [ -z "$GITHUB_USERNAME" ]; then
    echo "❌ 用户名不能为空"
    exit 1
fi

echo ""
echo "请输入仓库名称（默认：short-video）："
read -r REPO_NAME
REPO_NAME=${REPO_NAME:-short-video}

echo ""
echo "📋 接下来的步骤："
echo ""
echo "1️⃣  请先在浏览器中访问以下链接创建 GitHub 仓库："
echo "   https://github.com/new"
echo ""
echo "   - Repository name: $REPO_NAME"
echo "   - 选择 Public（公开）"
echo "   - 不要勾选任何选项"
echo ""
echo "2️⃣  创建完成后，按回车继续..."
read -r

echo ""
echo "🔗 添加远程仓库..."
git remote remove origin 2>/dev/null || true
git remote add origin "https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"

echo ""
echo "📤 推送代码到 GitHub..."
git branch -M main

if git push -u origin main; then
    echo ""
    echo "✅ 代码已成功推送到 GitHub！"
    echo ""
    echo "🌐 GitHub 仓库地址："
    echo "   https://github.com/$GITHUB_USERNAME/$REPO_NAME"
    echo ""
    echo "3️⃣  现在部署到 Vercel："
    echo ""
    echo "   方法 1 - 网页部署（推荐）："
    echo "   1. 访问 https://vercel.com"
    echo "   2. 使用 GitHub 登录"
    echo "   3. 点击 'Add New' → 'Project'"
    echo "   4. 导入 $REPO_NAME 仓库"
    echo "   5. 点击 'Deploy'"
    echo ""
    echo "   方法 2 - 命令行部署："
    echo "   npm install -g vercel"
    echo "   vercel login"
    echo "   vercel"
    echo ""
    echo "🎉 部署完成后，你将获得一个在线访问链接！"
else
    echo ""
    echo "❌ 推送失败，可能的原因："
    echo ""
    echo "1. 需要 GitHub 认证"
    echo "   - 使用 Personal Access Token 而不是密码"
    echo "   - 获取 Token: https://github.com/settings/tokens"
    echo ""
    echo "2. 仓库尚未创建"
    echo "   - 请确保已在 GitHub 上创建仓库"
    echo ""
    echo "3. 视频文件过大"
    echo "   - GitHub 限制单个文件 <100MB"
    echo "   - 考虑使用云存储托管视频"
    echo ""
    echo "手动推送命令："
    echo "git push -u origin main"
fi
