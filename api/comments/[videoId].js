// 获取或添加评论
// Vercel Serverless Functions 格式
module.exports = async function handler(req, res) {
    const { videoId } = req.query;

    if (req.method === 'GET') {
        // 获取评论列表
        try {
            // 这里应该从 Supabase 获取评论
            // 暂时返回空数组，前端会使用预设评论
            return res.status(200).json({ comments: [] });
        } catch (error) {
            console.error('Error fetching comments:', error);
            return res.status(500).json({ error: 'Internal server error' });
        }
    } else if (req.method === 'POST') {
        // 添加评论
        const { content } = req.body;
        
        if (!content || !content.trim()) {
            return res.status(400).json({ error: 'Comment content is required' });
        }

        try {
            // 这里应该保存到 Supabase 数据库
            const newComment = {
                id: Date.now(),
                video_id: parseInt(videoId),
                content: content.trim(),
                user_name: '@游客' + Math.floor(Math.random() * 1000),
                created_at: new Date().toISOString()
            };
            
            // 暂时返回模拟数据
            return res.status(200).json({
                success: true,
                comment: newComment,
                comments: [newComment] // 实际应该返回所有评论
            });
        } catch (error) {
            console.error('Error adding comment:', error);
            return res.status(500).json({ error: 'Internal server error' });
        }
    } else {
        return res.status(405).json({ error: 'Method not allowed' });
    }
}
