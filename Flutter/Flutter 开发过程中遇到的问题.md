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

### 一、Your Xcode project requires migration

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

