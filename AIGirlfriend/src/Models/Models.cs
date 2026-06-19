namespace AIGirlfriend.Models;

public enum Mode
{
    Girlfriend,
    Assistant
}

public class Message
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Content { get; set; } = string.Empty;
    public bool IsUser { get; set; }
    public DateTime Timestamp { get; set; } = DateTime.Now;
    public Mode Mode { get; set; }
}

public class AppSettings
{
    public string UserName { get; set; } = "主人";
    public string AiName { get; set; } = "小依";
    public Mode PreferredMode { get; set; } = Mode.Girlfriend;
}
