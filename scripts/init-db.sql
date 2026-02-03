-- Supabase 数据库初始化脚本
-- 在 Supabase Dashboard 的 SQL Editor 中执行此脚本

-- 1. 创建视频基础信息表
CREATE TABLE IF NOT EXISTS videos (
    id SERIAL PRIMARY KEY,
    video_id INTEGER UNIQUE NOT NULL,
    category VARCHAR(50),
    url TEXT,
    user_name VARCHAR(100),
    description TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);

-- 2. 创建视频统计表
CREATE TABLE IF NOT EXISTS video_stats (
    id SERIAL PRIMARY KEY,
    video_id INTEGER UNIQUE NOT NULL,
    likes INTEGER DEFAULT 0,
    shares INTEGER DEFAULT 0,
    updated_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY (video_id) REFERENCES videos(video_id) ON DELETE CASCADE
);

-- 3. 创建评论表
CREATE TABLE IF NOT EXISTS comments (
    id SERIAL PRIMARY KEY,
    video_id INTEGER NOT NULL,
    content TEXT NOT NULL,
    user_name VARCHAR(100) DEFAULT '@匿名用户',
    is_preset BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY (video_id) REFERENCES videos(video_id) ON DELETE CASCADE
);

-- 4. 创建索引以提高查询性能
CREATE INDEX IF NOT EXISTS idx_video_stats_video_id ON video_stats(video_id);
CREATE INDEX IF NOT EXISTS idx_comments_video_id ON comments(video_id);
CREATE INDEX IF NOT EXISTS idx_comments_created_at ON comments(created_at DESC);

-- 5. 配置 Row Level Security (RLS)
ALTER TABLE videos ENABLE ROW LEVEL SECURITY;
ALTER TABLE video_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

-- 允许所有人读取
CREATE POLICY "Allow public read access" ON videos FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON video_stats FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON comments FOR SELECT USING (true);

-- 允许所有人插入/更新统计数据
CREATE POLICY "Allow public insert stats" ON video_stats FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update stats" ON video_stats FOR UPDATE USING (true);

-- 允许所有人添加评论
CREATE POLICY "Allow public insert comments" ON comments FOR INSERT WITH CHECK (true);
