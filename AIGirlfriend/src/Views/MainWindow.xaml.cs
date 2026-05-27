using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Animation;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using AIGirlfriend.Models;
using AIGirlfriend.ViewModels;

namespace AIGirlfriend.Views;

public partial class MainWindow : Window
{
    public MainWindow()
    {
        InitializeComponent();
        UpdateModeUI(Mode.Girlfriend);
    }

    protected override void OnContentRendered(EventArgs e)
    {
        base.OnContentRendered(e);
        if (DataContext is MainWindowViewModel vm)
        {
            vm.SetView(this);
        }
    }

    protected override void OnMouseLeftButtonDown(MouseButtonEventArgs e)
    {
        base.OnMouseLeftButtonDown(e);
        DragMove();
    }

    private void txtInput_KeyDown(object sender, KeyEventArgs e)
    {
        if (e.Key == Key.Enter && !Keyboard.Modifiers.HasFlag(ModifierKeys.Shift))
        {
            e.Handled = true;
        }
    }

    public void UpdateModeUI(Mode mode)
    {
        if (mode == Mode.Girlfriend)
        {
            avatarGradient1.Color = Color.FromRgb(0xFF, 0xD8, 0xA7);
            avatarGradient2.Color = Color.FromRgb(0xFF, 0xC7, 0x74);
            headerAvatar1.Color = Color.FromRgb(0xFF, 0xD8, 0xA7);
            headerAvatar2.Color = Color.FromRgb(0xFF, 0xC7, 0x74);
            
            aiStatus.Text = "💕 你的专属女友";
            aiStatus.Foreground = new SolidColorBrush(Color.FromRgb(0xFF, 0x6B, 0x9D));
            headerStatus.Text = "💕 你的专属女友";
            headerStatus.Foreground = new SolidColorBrush(Color.FromRgb(0xFF, 0x6B, 0x9D));
            
            btnGirlfriend.Background = new LinearGradientBrush(
                Color.FromRgb(0xFF, 0x6B, 0x9D), 
                Color.FromRgb(0xC4, 0x45, 0x69), 
                45);
            btnGirlfriend.Foreground = Brushes.White;
            btnAssistant.Background = Brushes.White;
            btnAssistant.Foreground = new SolidColorBrush(Color.FromRgb(0x66, 0x66, 0x66));
        }
        else
        {
            avatarGradient1.Color = Color.FromRgb(0x87, 0xCE, 0xEB);
            avatarGradient2.Color = Color.FromRgb(0xB0, 0xC4, 0xDE);
            headerAvatar1.Color = Color.FromRgb(0x87, 0xCE, 0xEB);
            headerAvatar2.Color = Color.FromRgb(0xB0, 0xC4, 0xDE);
            
            aiStatus.Text = "💼 你的专属助理";
            aiStatus.Foreground = new SolidColorBrush(Color.FromRgb(0x42, 0x99, 0xE2));
            headerStatus.Text = "💼 你的专属助理";
            headerStatus.Foreground = new SolidColorBrush(Color.FromRgb(0x42, 0x99, 0xE2));
            
            btnAssistant.Background = new LinearGradientBrush(
                Color.FromRgb(0x42, 0x99, 0xE2), 
                Color.FromRgb(0x1D, 0x4B, 0xA5), 
                45);
            btnAssistant.Foreground = Brushes.White;
            btnGirlfriend.Background = Brushes.White;
            btnGirlfriend.Foreground = new SolidColorBrush(Color.FromRgb(0x66, 0x66, 0x66));
        }
    }
}
