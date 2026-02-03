// 初始化视频数据和预设评论的脚本
// 注意：这个脚本需要在 Supabase Dashboard 的 SQL Editor 中执行，或者通过 Node.js 运行

// 视频数据（20个视频）
const videos = [
    // 美食类
    { id: 1, cat: "美食", url: "https://videos.pexels.com/video-files/3045163/3045163-hd_1920_1080_25fps.mp4", user: "@chef chen", desc: "爱吃 好吃 #澳门#澳门美食#澳门旅游#澳门旅游攻略" },
    { id: 2, cat: "美食", url: "https://videos.pexels.com/video-files/3045163/3045163-hd_1920_1080_25fps.mp4", user: "@美食博主小A", desc: "今天做了超好吃的红烧肉！你们想学吗？#美食教程#家常菜" },
    { id: 3, cat: "美食", url: "https://videos.pexels.com/video-files/3045163/3045163-hd_1920_1080_25fps.mp4", user: "@甜品控", desc: "这家店的提拉米苏绝了！入口即化 #甜品#下午茶#探店" },
    { id: 4, cat: "美食", url: "https://videos.pexels.com/video-files/3045163/3045163-hd_1920_1080_25fps.mp4", user: "@深夜食堂", desc: "深夜一碗热腾腾的拉面，治愈一切 #夜宵#拉面#美食" },
    
    // 学习类
    { id: 5, cat: "学习", url: "https://videos.pexels.com/video-files/2491284/2491284-hd_1920_1080_25fps.mp4", user: "@Hades和33", desc: "不管有多难,都是值得的!继续努力! #热门法学院毕业生 #法律系学生 #学习动机#励志视频" },
    { id: 6, cat: "学习", url: "https://videos.pexels.com/video-files/2491284/2491284-hd_1920_1080_25fps.mp4", user: "@考研上岸", desc: "每天5点起床学习，坚持就是胜利！ #考研#自律#学习打卡" },
    { id: 7, cat: "学习", url: "https://videos.pexels.com/video-files/2491284/2491284-hd_1920_1080_25fps.mp4", user: "@学霸笔记", desc: "分享我的高效学习方法，希望对大家有帮助 #学习方法#效率#学习技巧" },
    { id: 8, cat: "学习", url: "https://videos.pexels.com/video-files/2491284/2491284-hd_1920_1080_25fps.mp4", user: "@英语学习", desc: "每天10个单词，一年就是3650个！坚持就是胜利 #英语学习#单词#打卡" },
    
    // 旅行类
    { id: 9, cat: "旅行", url: "01_旅行.mp4", user: "@梁鬼鬼", desc: "长这么大第一次见明星 本人还挺漂亮的#杨超越" },
    { id: 10, cat: "旅行", url: "05_旅行.mp4", user: "@释迦的杂...", desc: "第28集|评测:澳门各大赌场的蹭吃喝走一遍了,如果只是为了蹭吃喝,人该是直奔美..." },
    { id: 11, cat: "旅行", url: "07_旅行.mp4", user: "@猪丽耶", desc: "快来珠海长隆海洋王国吧,现在有395两个人的门票,别错过了~#珠海长隆海洋王国 #珠海..." },
    { id: 12, cat: "旅行", url: "https://videos.pexels.com/video-files/2491284/2491284-hd_1920_1080_25fps.mp4", user: "@旅行日记", desc: "大理的洱海真的太美了！每一帧都是壁纸 #大理#洱海#旅行#云南" },
    
    // 游戏类
    { id: 13, cat: "游戏", url: "https://videos.pexels.com/video-files/3045163/3045163-hd_1920_1080_25fps.mp4", user: "@电竞少年", desc: "五杀！这波操作怎么样？#王者荣耀#五杀#游戏" },
    { id: 14, cat: "游戏", url: "https://videos.pexels.com/video-files/3045163/3045163-hd_1920_1080_25fps.mp4", user: "@游戏主播", desc: "新赛季上分攻略，看完就能上王者！ #游戏攻略#上分#技巧" },
    { id: 15, cat: "游戏", url: "https://videos.pexels.com/video-files/3045163/3045163-hd_1920_1080_25fps.mp4", user: "@游戏达人", desc: "这个游戏太好玩了！有人一起组队吗？ #新游戏#组队#游戏推荐" },
    { id: 16, cat: "游戏", url: "https://videos.pexels.com/video-files/3045163/3045163-hd_1920_1080_25fps.mp4", user: "@游戏解说", desc: "这波操作细节拉满！你们学会了吗？ #游戏技巧#教学#操作" },
    
    // 校园生活类
    { id: 17, cat: "校园生活", url: "02_校园生活.mp4", user: "@Elma.Z", desc: "这哥们儿在干嘛" },
    { id: 18, cat: "校园生活", url: "06_校园生活.mp4", user: "@黄花菜", desc: "上海商赛#商赛#商业模拟挑战赛 #CEO" },
    { id: 19, cat: "校园生活", url: "https://videos.pexels.com/video-files/2491284/2491284-hd_1920_1080_25fps.mp4", user: "@校园vlog", desc: "大学生活日常分享，记录美好时光 #校园生活#vlog#日常" },
    { id: 20, cat: "校园生活", url: "https://videos.pexels.com/video-files/2491284/2491284-hd_1920_1080_25fps.mp4", user: "@学生会", desc: "校园活动精彩瞬间，大家一起参与！ #校园活动#社团#青春" },
];

// 预设评论
const presetComments = {
    '美食': ["看起来很好吃", "在哪里", "多少钱", "想去试试"],
    '学习': ["加油", "收藏了", "很有用", "共勉"],
    '旅行': ["好想去", "攻略收藏", "太美了", "求地址"],
    '游戏': ["带我", "厉害", "加好友", "一起玩"],
    '校园生活': ["同校", "好羡慕", "点赞", "支持"]
};

// 生成 SQL 插入语句
function generateSQL() {
    let sql = "-- 插入视频数据\n";
    
    videos.forEach(video => {
        sql += `INSERT INTO videos (video_id, category, url, user_name, description) VALUES (${video.id}, '${video.cat}', '${video.url}', '${video.user}', '${video.desc}');\n`;
        sql += `INSERT INTO video_stats (video_id, likes, shares) VALUES (${video.id}, ${Math.floor(Math.random() * 5000) + 1000}, ${Math.floor(Math.random() * 300) + 100}) ON CONFLICT (video_id) DO NOTHING;\n`;
        
        // 添加预设评论
        const comments = presetComments[video.cat] || [];
        comments.forEach((comment, idx) => {
            sql += `INSERT INTO comments (video_id, content, user_name, is_preset) VALUES (${video.id}, '${comment}', '@用户${idx + 1}', true);\n`;
        });
    });
    
    return sql;
}

// 如果通过 Node.js 运行
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { videos, presetComments, generateSQL };
    
    // 如果直接运行，输出 SQL
    if (require.main === module) {
        console.log(generateSQL());
    }
}
