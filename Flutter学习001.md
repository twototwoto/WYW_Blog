# Flutter学习001
## 在macOS上搭建Flutter开发环境
####学习网址：[https://flutterchina.club/setup-macos/](https://flutterchina.club/setup-macos/)
#### 安装过程
* 初次查看

```
flutter doctor
-bash: flutter: command not found
```

* 使用镜像

* [https://flutter.io/docs/development/tools/sdk/archive?tab=macos#macos](https://flutter.io/docs/development/tools/sdk/archive?tab=macos#macos)

```
wangyongwangdeiMac:~ wangyongwang$ export PUB_HOSTED_URL=https://pub.flutter-io.cn
wangyongwangdeiMac:~ wangyongwang$ export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn
wangyongwangdeiMac:~ wangyongwang$ cd ~/development/Flutter
wangyongwangdeiMac:Flutter wangyongwang$ git clone -b master https://github.com/flutter/flutter.git
```

* 问题仍然存在

```
flutter doctor
-bash: flutter: command not found
```

* 添加flutter相关工具到path中
 
```
export PATH=`pwd`/flutter/bin:$PATH

```

* 可以下载内容

```
wangyongwangdeiMac:Flutter wangyongwang$ flutter doctor
Downloading Dart SDK from Flutter engine 15f2b92cce916982b7dd8ce658bbf2a465c06ba4...
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 50.9M  100 50.9M    0     0  9529k      0  0:00:05  0:00:05 --:--:--  9.8M
Building flutter tool...

  ╔════════════════════════════════════════════════════════════════════════════╗
  ║                 Welcome to Flutter! - https://flutter.io                   ║
  ║                                                                            ║
  ║ The Flutter tool anonymously reports feature usage statistics and crash    ║
  ║ reports to Google in order to help Google contribute improvements to       ║
  ║ Flutter over time.                                                         ║
  ║                                                                            ║
  ║ Read about data we send with crash reports:                                ║
  ║ https://github.com/flutter/flutter/wiki/Flutter-CLI-crash-reporting        ║
  ║                                                                            ║
  ║ See Google's privacy policy:                                               ║
  ║ https://www.google.com/intl/en/policies/privacy/                           ║
  ║                                                                            ║
  ║ Use "flutter config --no-analytics" to disable analytics and crash         ║
  ║ reporting.                                                                 ║
  ╚════════════════════════════════════════════════════════════════════════════╝


Flutter assets will be downloaded from https://storage.flutter-io.cn. Make sure
you trust this source!
Downloading Material fonts...                                       0.3s
...

Doctor summary (to see all details, run flutter doctor -v):

[✗] Android toolchain - develop for Android devices
    ✗ Unable to locate Android SDK.
      Install Android Studio from:
      https://developer.android.com/studio/index.html
      On first launch it will assist you in installing the Android SDK
      components.
      (or visit https://flutter.io/setup/#android-setup for detailed
      instructions).
      If Android SDK has been installed to a custom location, set ANDROID_HOME
      to that location.
      You may also want to add it to your PATH environment variable.

[!] iOS toolchain - develop for iOS devices (Xcode 10.1)
    ✗ ios-deploy not installed. To install:
        brew install ios-deploy
[!] Android Studio (version 3.2)
    ✗ Flutter plugin not installed; this adds Flutter specific functionality.
    ✗ Dart plugin not installed; this adds Dart specific functionality.
[✓] Connected device (3 available)

! Doctor found issues in 3 categories.
```

* 存在的上述3个问题

```
✗ ios-deploy not installed. To install:
        brew install ios-deploy
✗ Flutter plugin not installed; this adds Flutter specific functionality.
✗ Dart plugin not installed; this adds Dart specific functionality.        
```

* 问题1是关于Android Studio的SDK定位的问题：[✗] Android toolchain - develop for Android devices 
	* ✗ Unable to locate Android SDK.

* 问题2：ios-deploy 问题比较容易解决

```
wangyongwangdeiMac:Flutter wangyongwang$ brew install ios-deploy

Updating Homebrew...

==> Downloading https://homebrew.bintray.com/bottles/ios-deploy-1.9.4.high_sierr
######################################################################## 100.0%
==> Pouring ios-deploy-1.9.4.high_sierra.bottle.tar.gz
🍺  /usr/local/Cellar/ios-deploy/1.9.4: 7 files, 157.2KB
```

* 问题3：✗ Flutter plugin not installed; this adds Flutter specific functionality.
* 问题4：✗ Dart plugin not installed; this adds Dart specific functionality.
* 问题3与问题4都是Android Studio的插件问题：[!] Android Studio (version 3.2)
	* 可以通过Android Studio下载插件解决：
		*  下载插件的方式为：
		*  ——> 打开任何一个Android Studio的项目
		*  ——> 使用 “**Command + "," “**来打开 **Preference**
		*  ——> 找到或者搜索到 **Plugins**
		*  ——> 打开**Browse repositories**
		*  ——> 搜索**Flutter**、及**Dart** 并Install

* 衍生了一个问题：

```
Some Android licenses not accepted.  To resolve this, run: flutter doctor
      --android-licenses
```

* 执行**flutter doctor --android-licenses** 并且Accept? (y/N): y 中同意，**y**即可

* 继续说问题1：[✗] Android toolchain - develop for Android devices 
	* ✗ Unable to locate Android SDK.
	* 这个是SDK的路径问题，如果本地的Android Studio的SDK相关内容没有问题，那么可以添加如下Android SDK路径配置。

```
export ANDROID_HOME="/Users/用户名/Documents/android_sdk" //android sdk目录，替换为你自己的即可
export PATH=${PATH}:${ANDROID_HOME}/tools
export PATH=${PATH}:${ANDROID_HOME}/platform-tools
```
	
* 最终问题解决：

```
wangyongwangdeiMac:Flutter wangyongwang$ flutter doctor
Doctor summary (to see all details, run flutter doctor -v):
[✓] Flutter (Channel master, v1.2.1-pre.56, on Mac OS X 10.13.6 17G65, locale
    zh-Hans-CN)
[✓] Android toolchain - develop for Android devices (Android SDK version 28.0.3)
[✓] iOS toolchain - develop for iOS devices (Xcode 10.1)
[✓] Android Studio (version 3.3)
[✓] Connected device (2 available)

• No issues found!
```



**Flutter部分的问题看似解决完了，但是在笔者的Android Studio安装后却不能正常使用。**


下边笔者继续分享一下，Android Studio编译过程中的错误。

## Android Studio3.3 安装后编译报错
* 当然这部分的问题最终是解决了，起初笔者自己查过相应的报错，各种Google尝试，问题也是仍然在那里。后来也是请教了安卓同事**鹏哥**，**鹏哥**也是帮忙分析问题，帮忙查找问题，最后终于在Stack Overflow 上我们找到了解决方案。

* 编译 Android Studio3.3后，我遇到的错误信息如下：

```
ERROR: Unable to resolve dependency for ':app@debug/compileClasspath': Could not resolve com.android.support:appcompat-v7:28.0.0.
Show Details
Affected Modules: app


ERROR: Unable to resolve dependency for ':app@debug/compileClasspath': Could not resolve com.android.support.constraint:constraint-layout:1.1.3.
Show Details
Affected Modules: app


ERROR: Unable to resolve dependency for ':app@debugAndroidTest/compileClasspath': Could not resolve com.android.support.test:runner:1.0.2.
Show Details
Affected Modules: app


ERROR: Unable to resolve dependency for ':app@debugAndroidTest/compileClasspath': Could not resolve com.android.support.test.espresso:espresso-core:3.0.2.
Show Details
Affected Modules: app


ERROR: Unable to resolve dependency for ':app@debugAndroidTest/compileClasspath': Could not resolve com.android.support:appcompat-v7:28.0.0.
Show Details
Affected Modules: app


ERROR: Unable to resolve dependency for ':app@debugAndroidTest/compileClasspath': Could not resolve com.android.support.constraint:constraint-layout:1.1.3.
Show Details
Affected Modules: app


ERROR: Unable to resolve dependency for ':app@debugUnitTest/compileClasspath': Could not resolve com.android.support:appcompat-v7:28.0.0.
Show Details
Affected Modules: app


ERROR: Unable to resolve dependency for ':app@debugUnitTest/compileClasspath': Could not resolve com.android.support.constraint:constraint-layout:1.1.3.
Show Details
Affected Modules: app


ERROR: Unable to resolve dependency for ':app@debugUnitTest/compileClasspath': Could not resolve junit:junit:4.12.
Show Details
Affected Modules: app
```
* 我们尝试过的解决方案有Stack Overflow上常有的回答：
	* 1. **Preference -> Build,Excution,Deployment -> Gradle -> Android Studio，选中Enable embedded Maven repository**
	* 2. **Preference -> Build,Excution,Deployment -> Gradle -> 不要勾选Offline work**
	* 3. **Preference -> Appearance & Behavior -> System Setting -> HTTP Proxy ->勾选Auto-detect proxy settings（当自己所处的网络支持Google的时候可用）**
		* 这里**笔者在解决Android Studio 下载所需包缓慢的时候，根据网络上的教程设置过代理。**（Manual Proxy configuration）后来想到其实自己当前网络可以Google，是可以直接下载Android Studio 所需的一些SDK及其他的pom相关内容的。

## 最主要的原因：
* 改变了上述的设置后，其实还有一个重点**/Users/用户名/.gradle/gradle.properties**，中的内容，**由于先前设置过代理，所以gradle.properties的内容貌似还有效。**这个是Android Studio 3.3编译失败的最主要原因。把其中的设置代理相关的内容删除掉，并且保存更改，重新编译就正常了，如果还有问题，可以试试 **File -> Invalidate Caches/Restart...**。
* 以下截图.md中目前没上传到图库，可看相应PDF文件，查看详情。
![删除gradle.properties的红框内容](/Users/wangyongwang/Documents/snip截图/Snip20190201_16.png)
* 编译正常的情况，截图如下：
![Android Studio编译正常](/Users/wangyongwang/Documents/snip截图/Snip20190201_18.png)
* 我专门修改了“Hello World” 为“谢谢鹏哥”
![Android Studio编译正常](/Users/wangyongwang/Documents/snip截图/WechatIMG21.jpeg)

![Flutter Demo](/Users/wangyongwang/Documents/snip截图/Snip20190201_20.png)
	* 如果上述方式试过2次没有用的话，那么再试试其他方法吧。


### 相关资料
* [Android Studio 官网](https://developer.android.com/studio/)
* [Android Studio 所需SDK及相关开发工具](https://www.androiddevtools.cn)
* [Flutter 学习网址](https://flutterchina.club/setup-macos/)
* [Unable to resolve dependency for ':app@debug/compileClasspath': Could not resolve com.android.support:appcompat-v7:28.0.0-rc01](https://stackoverflow.com/questions/51733748/unable-to-resolve-dependency-for-appdebug-compileclasspath-could-not-resolv)(十分感谢这个网址中的[kanolin](https://stackoverflow.com/users/10316116/kanolin)的回复)

