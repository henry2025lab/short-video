// 获取所有视频的统计数据
// Vercel Serverless Functions 格式
module.exports = async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        // 这里应该从 Supabase 获取数据
        // 暂时返回默认数据
        const stats = {};
        for (let i = 1; i <= 20; i++) {
            stats[i] = {
                likes: Math.floor(Math.random() * 5000) + 1000,
                comments: Math.floor(Math.random() * 200) + 50,
                shares: Math.floor(Math.random() * 300) + 100
            };
        }
        
        return res.status(200).json({ stats });
    } catch (error) {
        console.error('Error fetching video stats:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
