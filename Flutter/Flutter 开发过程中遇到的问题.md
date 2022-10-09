# Flutter 开发过程中遇到的问题

## # 常用属性
### physics
可滚动视图，可能需要设置是否可滚动或不可滚动，可以通过其 physics 属性控制。
```dart
physics: const NeverScrollableScrollPhysics(),
```
### maxWidth
Container、BoxConstraints 都可设置其 constraints 属性的 maxWidth，从而控制组件可被撑起的最大宽度。

### overflow
Text 的 overflow 属性可控制文本截断的方式，文本的截断一般会配合着显示最大行数 maxLines 一起出现。
```dart
overflow: TextOverflow.ellipsis,
```

> FlutterError (setState() or markNeedsBuild() called during build. This Obx widget cannot be marked as needing to build because the framework is already in the process of building widgets. A widget can be marked as needing to be built during the build phase only if one of its ancestors is currently building. This exception is allowed because the framework builds parent widgets before children, which means a dirty descendant will always be built. Otherwise, the framework might not visit this widget during this build phase. The widget on which setState() or markNeedsBuild() was called was:  Obx The widget which was currently being built when the offending call was made was:  _FocusMarker)

```dart
WidgetsFlutterBinding.ensureInitialized();
```

- 可参考 https://blog.csdn.net/qq_39493848/article/details/108514136

### # [Flutter ServicesBinding.defaultBinaryMessenger was accessed before the binding was initialized.](https://blog.csdn.net/yechaoa/article/details/103599699)

### # 参数名方法名错误

- JsonUnsupportedObjectError (Converting object to an encodable object failed: Closure: () => String from Function 'email': static.)

笔者需要传入的是一个临时变量，结果误传了一个方法进去。所以出现上述报错。

### # Getx drawer 问题

笔者使用的首页带有 drawer,  笔者又在 drawer 中使用了 Getx，从而出现了找不到 controller 的问题。

笔者的解决方式是，对首页 binding 时指定为 bindingList，在 bindingList 中传入了 首页所需的 Binding，并且也传入 drawer 的 binding。

```dart
GetPage(
      name: Routes.HOME,
      page: () => HomePage(),
      binding: HomeBinding(),
    ),
```

修改为

```dart
GetPage(
      name: Routes.HOME,
      page: () => HomePage(),
      bindings: [HomeBinding(), MineBinding()],
    ),
```

- 相关网址：https://github.com/jonataslaw/getx/discussions/958

### # eventbus

- https://pub.dev/packages/event_bus
- https://www.jianshu.com/p/df1eecbb09b5



### # GetX 使用遇到问题

> GetX The argument type 'Obx' can't be assigned to the parameter type 'PreferredSizeWidget?'.

可以用 Obx 包裹想要包裹的 PreferredSizeWidget 的子 Widget 以解决问题。

- https://www.5axxw.com/questions/content/f8vkv3

- https://moejj.com/flutterzhuang-tai-guan-li-cha-jian-get/

## # Your Xcode project requires migration

```
Your Xcode project requires migration. See  
https://flutter.dev/docs/development/ios-project-migration for details.
Error launching application on iPhone SE (2nd generation).
```

#### 修改方式：
###### 1、打开 Xcode；
###### 2、删除 App.framework、Flutter.framework；
###### 3、查看 BuildPhases 中的链接文件；
###### 4、Build Phases -> Thin Binary script 部分填写如下脚本

```shell
/bin/sh "$FLUTTER_ROOT/packages/flutter_tools/bin/xcode_backend.sh" embed
/bin/sh "$FLUTTER_ROOT/packages/flutter_tools/bin/xcode_backend.sh" thin
```

（相关内容选择性填写，笔者没有填写相关内容，经过前3步操作后，笔者使用 VSCode 重新编译运行项目后，项目也能正常运行，并且编译过程中系统会重新给加上相应脚本）

#### 参考学习网址

[支持 Xcode 11.4](https://flutter.cn/docs/development/ios-project-migration)

