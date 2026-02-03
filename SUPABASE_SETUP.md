# Supabase 设置指南

本文档将指导你如何设置 Supabase 数据库以实现数据持久化。

## 步骤 1: 创建 Supabase 项目

1. 访问 [https://supabase.com](https://supabase.com)
2. 注册账号（使用 GitHub 账号登录更方便）
3. 点击 "New Project"
4. 填写项目信息：
   - Project Name: `short-video`
   - Database Password: 设置一个强密码（保存好）
   - Region: 选择离你最近的区域
5. 点击 "Create new project"
6. 等待项目创建完成（约 2-3 分钟）

## 步骤 2: 获取 API 密钥

1. 在项目 Dashboard 中，点击左侧菜单的 "Settings"（齿轮图标）
2. 点击 "API"
3. 找到以下信息：
   - **Project URL**: 类似 `https://xxxxx.supabase.co`
   - **anon public key**: 一长串字符串（以 `eyJ` 开头）

## 步骤 3: 创建数据库表

1. 在 Supabase Dashboard 中，点击左侧菜单的 "SQL Editor"
2. 点击 "New query"
3. 复制 `scripts/init-db.sql` 文件中的所有内容
4. 粘贴到 SQL Editor 中
5. 点击 "Run" 执行 SQL
6. 确认表创建成功（应该看到 "Success. No rows returned"）

## 步骤 4: 配置环境变量

### 在 Vercel 中配置

1. 访问 [https://vercel.com](https://vercel.com)
2. 进入你的项目 `short-video-1hg1`
3. 点击 "Settings" → "Environment Variables"
4. 添加以下环境变量：
   - `NEXT_PUBLIC_SUPABASE_URL`: 你的 Project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: 你的 anon public key
5. 点击 "Save"
6. 重新部署项目（Vercel 会自动触发）

### 本地开发配置（可选）

如果需要本地测试：

1. 在项目根目录创建 `.env.local` 文件：
```bash
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
```

2. **重要**: `.env.local` 已经在 `.gitignore` 中，不会被提交到 Git

## 步骤 5: 初始化视频数据（可选）

如果你想在数据库中初始化视频数据，可以：

1. 在 Supabase Dashboard 中打开 "Table Editor"
2. 选择 `videos` 表
3. 手动添加视频记录，或使用 SQL：

```sql
-- 示例：插入一个视频
INSERT INTO videos (video_id, category, url, user_name, description)
VALUES (1, '美食', 'https://videos.pexels.com/...', '@chef chen', '视频描述');

-- 同时初始化统计数据
INSERT INTO video_stats (video_id, likes, shares)
VALUES (1, 0, 0);
```

## 步骤 6: 添加预设评论（可选）

```sql
-- 示例：为视频1添加预设评论
INSERT INTO comments (video_id, content, user_name, is_preset)
VALUES 
  (1, '看起来很好吃', '@用户1', true),
  (1, '在哪里', '@用户2', true),
  (1, '多少钱', '@用户3', true);
```

## 验证设置

1. 访问你的网站：`https://short-video-1hg1.vercel.app`
2. 尝试点赞、评论、分享功能
3. 在 Supabase Dashboard 的 "Table Editor" 中查看数据是否更新

## 故障排除

### API 返回 500 错误

- 检查环境变量是否正确配置
- 检查 Supabase 项目是否正常运行
- 查看 Vercel 的 Function Logs

### 数据没有更新

- 检查 RLS (Row Level Security) 策略是否正确设置
- 确认 API 路由文件中的 Supabase 客户端配置正确

### CORS 错误

- Supabase 默认支持 CORS，如果遇到问题，检查 Supabase Dashboard 的 Settings → API

## 下一步

完成设置后，API 路由会自动连接到 Supabase 数据库。所有用户的点赞、评论、分享数据都会同步存储。

如果需要更高级的功能（如实时更新），可以参考 Supabase 的实时订阅文档。
