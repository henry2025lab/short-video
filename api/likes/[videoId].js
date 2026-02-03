// 点赞/取消点赞
// Vercel Serverless Functions 格式
module.exports = async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { videoId } = req.query;
    const { action } = req.body;

    try {
        // 这里应该更新 Supabase 数据库
        // 暂时返回模拟数据
        const currentLikes = Math.floor(Math.random() * 5000) + 1000;
        const newLikes = action === 'like' ? currentLikes + 1 : Math.max(0, currentLikes - 1);
        
        return res.status(200).json({
            success: true,
            stats: {
                likes: newLikes,
                comments: Math.floor(Math.random() * 200) + 50,
                shares: Math.floor(Math.random() * 300) + 100
            }
        });
    } catch (error) {
        console.error('Error updating like:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
