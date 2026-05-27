using System.Globalization;
using System.Windows;
using System.Windows.Data;
using System.Windows.Media;

namespace AIGirlfriend.Converters;

public class BoolToAlignmentConverter : IValueConverter
{
    public object Convert(object value, Type targetType, object parameter, CultureInfo culture)
    {
        if (value is bool isUser)
        {
            return isUser ? HorizontalAlignment.Right : HorizontalAlignment.Left;
        }
        return HorizontalAlignment.Left;
    }

    public object ConvertBack(object value, Type targetType, object parameter, CultureInfo culture)
    {
        throw new NotImplementedException();
    }
}

public class NotNullOrEmptyConverter : IValueConverter
{
    public object Convert(object value, Type targetType, object parameter, CultureInfo culture)
    {
        if (value is string str)
        {
            return !string.IsNullOrWhiteSpace(str);
        }
        return false;
    }

    public object ConvertBack(object value, Type targetType, object parameter, CultureInfo culture)
    {
        throw new NotImplementedException();
    }
}

public class BoolToVisibilityConverter : IValueConverter
{
    public object Convert(object value, Type targetType, object parameter, CultureInfo culture)
    {
        if (value is bool boolValue)
        {
            return boolValue ? Visibility.Visible : Visibility.Collapsed;
        }
        return Visibility.Collapsed;
    }

    public object ConvertBack(object value, Type targetType, object parameter, CultureInfo culture)
    {
        if (value is Visibility visibility)
        {
            return visibility == Visibility.Visible;
        }
        return false;
    }
}

public class BoolToBrushConverter : IMultiValueConverter
{
    public object Convert(object[] values, Type targetType, object parameter, CultureInfo culture)
    {
        if (values.Length > 0 && values[0] is bool isUser)
        {
            if (isUser)
            {
                return new LinearGradientBrush(
                    Color.FromRgb(0x66, 0x7E, 0xEA),
                    Color.FromRgb(0x76, 0x4B, 0xA2),
                    45);
            }
            return new SolidColorBrush(Color.FromRgb(0xFF, 0xF0, 0xF5));
        }
        return new SolidColorBrush(Colors.White);
    }

    public object[] ConvertBack(object value, Type[] targetTypes, object parameter, CultureInfo culture)
    {
        throw new NotImplementedException();
    }
}

public class BoolToColorConverter : IValueConverter
{
    public object Convert(object value, Type targetType, object parameter, CultureInfo culture)
    {
        if (value is bool isUser)
        {
            return isUser ? new SolidColorBrush(Colors.White) : new SolidColorBrush(Color.FromRgb(0x33, 0x33, 0x33));
        }
        return new SolidColorBrush(Color.FromRgb(0x33, 0x33, 0x33));
    }

    public object ConvertBack(object value, Type targetType, object parameter, CultureInfo culture)
    {
        throw new NotImplementedException();
    }
}
