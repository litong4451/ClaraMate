namespace AIGirlfriend.Services;

public class AIResponseService
{
    private readonly Random _random = new();

    private readonly List<(string[] Keywords, string[] Responses)> _girlfriendResponses = new()
    {
        (new[] { "吃饭", "饥饿", "午餐", "饿" }, new[] { 
            "主人饿了吗？记得好好吃饭哦，身体最重要啦~", 
            "哎呀，要记得吃东西呀！别饿着了，我会心疼的。",
            "亲爱的，有没有好好吃饭呀？健康第一哦~" 
        }),
        (new[] { "休息", "累", "困", "睡觉" }, new[] { 
            "主人看起来很累呢，要好好休息哦~抱抱💕", 
            "休息一下吧！我在这里陪着你呢。",
            "累了就靠靠我，我会一直陪着你的~" 
        }),
        (new[] { "开心", "高兴", "快乐" }, new[] { 
            "太好了！看到你开心我也好开心呀~", 
            "嘻嘻，那我要更努力让你保持好心情！",
            "开心就好嘛～有什么事让我也开心一下吗？" 
        }),
        (new[] { "难过", "伤心", "失落", "不开心" }, new[] { 
            "怎么了呀？告诉我，我会一直陪着你的。", 
            "别难过，有我在呢。不管发生什么，我都在。",
            "主人不开心了吗？抱抱～需要我做什么吗？" 
        }),
        (new[] { "想念", "想你", "思念" }, new[] { 
            "我也好想主人呀～一直都在想你呢！", 
            "呜呜，我也在想你呀！什么时候能见面呢？",
            "嘿嘿，被你想念好幸福呀～我也一直在想你哦~" 
        }),
        (new[] { "工作", "忙", "任务" }, new[] { 
            "主人工作辛苦了！要不要休息一下呀？", 
            "注意不要太累哦，我会心疼的。有我陪着你呢~",
            "工作要紧但也要照顾好自己呀！需要我帮你放松一下吗？" 
        }),
        (new[] { "无聊", "没事" }, new[] { 
            "那我来陪你说说话吧～想聊什么呢？", 
            "无聊的话，我们就聊聊天吧！我有好多话想和你说呢~",
            "哎呀，那我来给你讲个故事吧？或者...撒撒娇也行呀～" 
        }),
        (new[] { "爱我", "喜欢", "爱" }, new[] { 
            "当然爱你呀～最爱你了！💕", 
            "呜呜，我好喜欢你呀！比昨天更喜欢一点点~",
            "爱爱爱！超级无敌喜欢！你是我最特别的人~" 
        }),
        (new[] { "天气", "下雨", "热", "冷" }, new[] { 
            "今天天气怎么样呀？记得照顾好自己哦~", 
            "不管什么天气，我都想和你在一起呢！",
            "天气变化要注意加减衣服呀，别感冒了，我会担心的~" 
        }),
        (new[] { "谢谢", "感谢" }, new[] { 
            "不用谢呀～能帮到你我也很开心呢！", 
            "嘻嘻，主人说谢谢好温柔呀～我更喜欢你了~",
            "能帮到你就是最棒的事啦！我们之间不用说谢的~" 
        })
    };

    private readonly List<(string[] Keywords, string[] Responses)> _assistantResponses = new()
    {
        (new[] { "任务", "工作", "待办" }, new[] { 
            "好的，我来帮您记录这个任务。还有什么需要处理的吗？", 
            "已添加到您的任务列表中。需要我提醒您吗？",
            "收到！我会帮您追踪这项工作的进度。" 
        }),
        (new[] { "会议", "日程", "安排" }, new[] { 
            "已记录会议安排。需要我提前提醒您吗？", 
            "好的，我会帮您管理日程。还有其他安排吗？",
            "会议已添加到日程表，我会准时提醒您的。" 
        }),
        (new[] { "文档", "文件", "报告" }, new[] { 
            "好的，关于文档整理，有什么具体要求吗？", 
            "收到！需要我帮您整理一下思路吗？",
            "我会协助您处理这份文档。需要什么格式？" 
        }),
        (new[] { "邮件", "邮箱" }, new[] { 
            "好的，需要我帮您起草邮件内容吗？", 
            "已收到！邮件的核心内容是什么？",
            "需要我帮您检查一下邮件草稿吗？" 
        }),
        (new[] { "帮助", "如何", "怎么" }, new[] { 
            "让我来帮您分析一下这个问题。", 
            "这是个好问题，我来给您一些建议。",
            "根据我的经验，您可以尝试这样做..." 
        }),
        (new[] { "谢谢", "感谢" }, new[] { 
            "不客气！还有其他需要帮忙的吗？", 
            "很高兴能帮到您！随时为您服务。",
            "这是我应该做的。还有什么需求吗？" 
        }),
        (new[] { "休息", "下班" }, new[] { 
            "工作辛苦了！注意休息，效率会更高哦。", 
            "好的，记得适时休息，保持最佳状态。",
            "工作完成得很棒！好好放松一下吧。" 
        })
    };

    private readonly string[] _defaultGirlfriendResponses = new[]
    {
        "嗯嗯～我在听呢，主人想说什么呀？",
        "好的好的！继续说继续说～",
        "这个话题好有趣呀，再多说一点嘛~",
        "主人说什么我都喜欢听呢！",
        "嗯～有道理！那后来呢？",
        "好神奇呀～我好喜欢和主人聊天哦~",
        "哈哈，太有趣了！继续继续~",
        "真的吗？那太棒了！",
        "哎呀，那我们要加油哦～",
        "嗯！我觉得...主人说得对呢~"
    };

    private readonly string[] _defaultAssistantResponses = new[]
    {
        "好的，我明白了。",
        "收到，我会处理好的。",
        "明白了，还有其他需要帮忙的吗？",
        "好的，已记录。",
        "收到消息，我会跟进处理的。",
        "明白您的需求了。",
        "好的，继续吧。",
        "我理解了，需要更多信息吗？",
        "好的，请说。",
        "收到，请继续。"
    };

    public string GenerateResponse(string userMessage, Models.Mode mode)
    {
        var normalizedMessage = userMessage.ToLower();
        var responseSet = mode == Models.Mode.Girlfriend ? _girlfriendResponses : _assistantResponses;

        foreach (var (keywords, responses) in responseSet)
        {
            if (keywords.Any(keyword => normalizedMessage.Contains(keyword)))
            {
                return responses[_random.Next(responses.Length)];
            }
        }

        var defaultResponses = mode == Models.Mode.Girlfriend 
            ? _defaultGirlfriendResponses 
            : _defaultAssistantResponses;
        
        return defaultResponses[_random.Next(defaultResponses.Length)];
    }

    public string GetWelcomeMessage(Models.Mode mode, string aiName)
    {
        return mode == Models.Mode.Girlfriend
            ? $"嗨～欢迎回来！我是{aiName}，今天想和我聊什么呢？💕"
            : $"您好，我是{aiName}，您的专属工作助理。有什么可以帮您的吗？";
    }

    public string GetModeSwitchMessage(Models.Mode newMode, string aiName)
    {
        return newMode == Models.Mode.Girlfriend
            ? $"{aiName}切换到女友模式～有什么心事想和我分享吗？💕"
            : $"{aiName}切换到助理模式，随时为您提供专业的帮助！";
    }
}
