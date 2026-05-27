# AI智能女友 - 纯桌面WPF应用

## 项目简介

这是一个纯桌面Windows应用程序，使用WPF (Windows Presentation Foundation) 框架开发，完全不依赖网页或浏览器技术。

## 功能特性

### 双模式系统
- **女友模式**：温柔贴心的陪伴，情感支持
- **助理模式**：专业高效的工作助手
- 一键切换，界面颜色和风格自动适配

### 主要功能
- 自然语言对话
- 关键词智能响应
- 快捷操作面板
- 个性化设置（昵称、AI名称）
- 优雅的渐变UI设计
- 现代化圆角窗口
- 消息时间戳显示

## 技术架构

### 框架
- .NET 8.0 (Windows)
- WPF (Windows Presentation Foundation)

### 架构模式
- MVVM (Model-View-ViewModel)
- 依赖注入
- 命令绑定

### 主要依赖
- CommunityToolkit.Mvvm (MVVM工具包)
- MaterialDesignThemes (UI主题)

## 项目结构

```
AIGirlfriend/
├── AIGirlfriend.csproj          # 项目文件
├── App.xaml / App.xaml.cs       # 应用程序入口
├── src/
│   ├── Views/
│   │   ├── MainWindow.xaml      # 主界面UI
│   │   └── MainWindow.xaml.cs   # 主界面逻辑
│   ├── ViewModels/
│   │   ├── MainWindowViewModel.cs  # 主窗口ViewModel
│   │   └── Converters.cs           # 值转换器
│   ├── Models/
│   │   └── Models.cs               # 数据模型
│   ├── Services/
│   │   └── AIResponseService.cs    # AI响应服务
│   └── Assets/                     # 资源文件
```

## 构建和运行

### 环境要求
- Windows 10/11
- .NET 8.0 SDK
- Visual Studio 2022 (推荐) 或 VS Code

### 构建步骤

1. **安装依赖**
   ```bash
   cd AIGirlfriend
   dotnet restore
   ```

2. **构建项目**
   ```bash
   dotnet build
   ```

3. **运行应用**
   ```bash
   dotnet run
   ```

4. **发布可执行文件**
   ```bash
   # 发布单文件可执行程序
   dotnet publish -c Release -r win-x64 --self-contained true -p:PublishSingleFile=true -p:IncludeNativeLibrariesForSelfExtract=true
   ```

## 使用说明

### 女友模式
- 粉红渐变主题
- 温柔可爱的语气
- 适合情感交流、日常聊天
- 支持"吃饭"、"休息"、"开心"等关键词触发

### 助理模式
- 蓝色渐变主题
- 专业高效的语气
- 适合工作任务、日程安排
- 支持"任务"、"会议"、"文档"等关键词触发

### 设置
- 点击左侧"⚙️ 个性化设置"
- 可以修改自己的昵称和AI的名字
- 点击保存后立即生效

## 注意事项

⚠️ **这是一个纯桌面应用，完全不包含任何网页技术！**

- ✅ 不需要浏览器
- ✅ 不需要WebView
- ✅ 不需要网络连接（离线可用）
- ✅ 原生WPF渲染，性能优越
- ✅ Windows原生体验

## 开发计划

- [ ] 持久化聊天历史
- [ ] 更多AI回复模式
- [ ] 语音功能
- [ ] 系统托盘图标
- [ ] 窗口最小化功能
- [ ] 更多主题配色

## 许可证

本项目仅供学习交流使用。
