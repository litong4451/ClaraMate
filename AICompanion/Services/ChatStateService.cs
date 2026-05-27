using AICompanion.Models;
using Microsoft.AspNetCore.Components.Server.ProtectedBrowserStorage;
using System.Collections.ObjectModel;

namespace AICompanion.Services;

public class ChatStateService
{
    private readonly AIResponseService _aiService = new();
    private ObservableCollection<Message> _messages = new();
    
    public Mode CurrentMode { get; private set; } = Mode.Girlfriend;
    public string UserName { get; set; } = "主人";
    public string AiName { get; set; } = "小依";
    public bool IsTyping { get; private set; }
    public bool IsTransitioning { get; private set; }
    public ObservableCollection<Message> Messages => _messages;

    public event Action? StateChanged;

    public void Initialize()
    {
        if (!_messages.Any())
        {
            var welcome = _aiService.GetWelcomeMessage(CurrentMode, AiName);
            _messages.Add(new Message
            {
                Content = welcome,
                IsUser = false,
                Mode = CurrentMode
            });
            StateChanged?.Invoke();
        }
    }

    public async Task SendMessage(string content)
    {
        if (string.IsNullOrWhiteSpace(content)) return;

        _messages.Add(new Message
        {
            Content = content,
            IsUser = true,
            Mode = CurrentMode
        });

        IsTyping = true;
        StateChanged?.Invoke();

        await Task.Delay(1000 + _random.Next(2000));

        var response = _aiService.GenerateResponse(content, CurrentMode);
        _messages.Add(new Message
        {
            Content = response,
            IsUser = false,
            Mode = CurrentMode
        });

        IsTyping = false;
        StateChanged?.Invoke();
    }

    private static readonly Random _random = new();

    public async Task SwitchMode(Mode newMode)
    {
        if (newMode == CurrentMode) return;

        IsTransitioning = true;
        StateChanged?.Invoke();

        await Task.Delay(1500);

        CurrentMode = newMode;
        var switchMessage = _aiService.GetModeSwitchMessage(newMode, AiName);
        _messages.Add(new Message
        {
            Content = switchMessage,
            IsUser = false,
            Mode = newMode
        });

        IsTransitioning = false;
        StateChanged?.Invoke();
    }

    public void ClearMessages()
    {
        _messages.Clear();
        Initialize();
    }

    public void UpdateNames(string userName, string aiName)
    {
        UserName = userName;
        AiName = aiName;
        StateChanged?.Invoke();
    }
}
