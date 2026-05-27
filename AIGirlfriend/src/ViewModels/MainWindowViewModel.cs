using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using AIGirlfriend.Models;
using AIGirlfriend.Services;
using AIGirlfriend.Views;
using System.Collections.ObjectModel;

namespace AIGirlfriend.ViewModels;

public partial class MainWindowViewModel : ObservableObject
{
    private readonly AIResponseService _aiService = new();
    private MainWindow? _view;

    [ObservableProperty]
    private Mode _currentMode = Mode.Girlfriend;

    [ObservableProperty]
    private string _userName = "主人";

    [ObservableProperty]
    private string _aiName = "小依";

    [ObservableProperty]
    private string _inputMessage = string.Empty;

    [ObservableProperty]
    private bool _isTyping = false;

    [ObservableProperty]
    private bool _isTransitioning = false;

    [ObservableProperty]
    private bool _showSettings = false;

    [ObservableProperty]
    private string _settingsUserName = "主人";

    [ObservableProperty]
    private string _settingsAiName = "小依";

    public ObservableCollection<Message> Messages { get; } = new();

    public MainWindowViewModel()
    {
        InitializeChat();
    }

    public void SetView(MainWindow view)
    {
        _view = view;
    }

    private void InitializeChat()
    {
        var welcome = _aiService.GetWelcomeMessage(CurrentMode, AiName);
        Messages.Add(new Message
        {
            Content = welcome,
            IsUser = false,
            Mode = CurrentMode
        });
    }

    [RelayCommand]
    private async Task SendMessage()
    {
        if (string.IsNullOrWhiteSpace(InputMessage) || IsTyping || IsTransitioning)
            return;

        var message = InputMessage;
        InputMessage = string.Empty;

        Messages.Add(new Message
        {
            Content = message,
            IsUser = true,
            Mode = CurrentMode
        });

        IsTyping = true;

        await Task.Delay(1000 + new Random().Next(2000));

        var response = _aiService.GenerateResponse(message, CurrentMode);
        Messages.Add(new Message
        {
            Content = response,
            IsUser = false,
            Mode = CurrentMode
        });

        IsTyping = false;
    }

    [RelayCommand]
    private async Task QuickAction(string message)
    {
        InputMessage = message;
        await SendMessage();
    }

    [RelayCommand]
    private async Task SwitchMode(Mode newMode)
    {
        if (newMode == CurrentMode || IsTransitioning)
            return;

        IsTransitioning = true;

        await Task.Delay(1500);

        CurrentMode = newMode;
        
        if (_view != null)
        {
            _view.UpdateModeUI(newMode);
        }
        
        var switchMessage = _aiService.GetModeSwitchMessage(newMode, AiName);
        Messages.Add(new Message
        {
            Content = switchMessage,
            IsUser = false,
            Mode = newMode
        });

        IsTransitioning = false;
    }

    [RelayCommand]
    private void OpenSettings()
    {
        SettingsUserName = UserName;
        SettingsAiName = AiName;
        ShowSettings = true;
    }

    [RelayCommand]
    private void SaveSettings()
    {
        if (!string.IsNullOrWhiteSpace(SettingsUserName))
            UserName = SettingsUserName;
        if (!string.IsNullOrWhiteSpace(SettingsAiName))
            AiName = SettingsAiName;
        ShowSettings = false;
    }

    [RelayCommand]
    private void CancelSettings()
    {
        ShowSettings = false;
    }
}
