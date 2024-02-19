##### Xcode 15.2 无法创建 Category

笔者把 Xcode 升级到 15.2 后，发现无法创建 Category 了。

操作表现为 Command + N -> 选择 Objective-C File -> 填写File 名，File Type 选择 Category 及后续操作后无法创建出来相应的 Category 文件。

经查询[原因](https://forums.developer.apple.com/forums/thread/743032)为：

如下文件目录下（/Applications/Xcode.app/Contents/Developer/Library/Xcode/Templates/File Templates/MultiPlatform/Source/Objective-C File.xctemplate）缺失 CategoryNSObject。

我们在相应目录下添加上相应 CategoryNSObject 文件（下载缺失的文件：https://www.icloud.com/iclouddrive/027-JUISnmGAy_Zj0Lu5H3NEA#xcode-objc）即可解决相关问题。

##### 参考学习网址

- https://forums.developer.apple.com/forums/thread/743032

