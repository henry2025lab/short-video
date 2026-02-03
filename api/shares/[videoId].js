// 更新分享数
// Vercel Serverless Functions 格式
module.exports = async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { videoId } = req.query;

    try {
        // 这里应该更新 Supabase 数据库
        // 暂时返回成功
        return res.status(200).json({
            success: true,
            message: 'Share count updated'
        });
    } catch (error) {
        console.error('Error updating share count:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
