// Supabase 配置
// 注意：在生产环境中，这些值应该通过环境变量设置

export const supabaseConfig = {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
};

// 如果使用 Supabase 客户端
export function createSupabaseClient() {
    // 这里需要安装 @supabase/supabase-js
    // const { createClient } = require('@supabase/supabase-js');
    // return createClient(supabaseConfig.url, supabaseConfig.anonKey);
    return null;
}
