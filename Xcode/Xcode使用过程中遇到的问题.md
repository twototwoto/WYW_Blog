
#### # Xcode 15.2 无法创建 Category

##### 1、问题

笔者把 Xcode 升级到 15.2 后，发现无法创建 Category 了。

操作表现为 Command + N -> 选择 Objective-C File -> 填写File 名，File Type 选择 Category 及后续操作后无法创建出来相应的 Category 文件。

##### 2、原因
经查询[原因](https://forums.developer.apple.com/forums/thread/743032)为：文件目录（/Applications/Xcode.app/Contents/Developer/Library/Xcode/Templates/File Templates/MultiPlatform/Source/Objective-C File.xctemplate）下缺失 CategoryNSObject。

##### 3、解决办法

在相应目录下添加上相应 CategoryNSObject 文件（下载缺失的文件：[https://www.icloud.com/iclouddrive/027-JUISnmGAy_Zj0Lu5H3NEA#xcode-objc](https://www.icloud.com/iclouddrive/027-JUISnmGAy_Zj0Lu5H3NEA#xcode-objc)）、[缺失的文件下载副本](https://github.com/twototwoto/WYW_Blog/blob/master/Xcode/xcode-objc.tar.gz)即可解决相关问题。

##### 4、参考学习网址

- https://forums.developer.apple.com/forums/thread/743032
----
#### # Xcode 15.2 Sandbox: rsync.samba(44939) deny(1) file-write-create

##### 1、问题
Xcode 15.2 新建的一个 Swift Demo 项目编译遇到如下问题

Sandbox: rsync.samba(44939) deny(1) file-write-create /Developer/Xcode/DerivedData/SwiftDemo-fhtidyssgxnehiaplcehkvkimwgg/Build/Products/Debug-iphonesimulator/SwiftDemo.app/Frameworks/RxCocoa.framework/.RxCocoa.hDBLvW

##### 2、解决办法

把 ENABLE_USER_SCRIPT_SANDBOXING 的值修改为 NO（ENABLE_USER_SCRIPT_SANDBOXING 位于 Build Settings > Build Options下）

> Check that `ENABLE_USER_SCRIPT_SANDBOXING` is disabled in the project's build settings.

> Disabling 'User Script Sandboxing' under the Project's Build Settings > Build Options fixed the issue for me as well! Thanks!

##### 3、参考学习网址
- https://forums.developer.apple.com/forums/thread/731041
