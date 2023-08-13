### 一、安装 Python

安装 Python 的 2种常用方式

#### 1、下载 python 软件安装 python

python 官网安装包下载路径：https://www.python.org/downloads/

下载安装后，可查看 `/Library/Frameworks/Python.framework/` 目录下信息查看 python 安装详情

##### python 可执行文件安装路径：

```
/Library/Frameworks/Python.framework/Versions/3.11/Python
```

##### python 相关命令路径

```
/Library/Frameworks/Python.framework/Versions/3.11/bin/python3
```

用 which python3 也可得到上述文件目录

#### 2、使用 Homebrew 安装 python

##### 安装命令

```python
brew install python
```

##### Homebrew 安装 python 过程

```python
Python has been installed as 
/opt/homebrew/bin/python3
```

```python
Unversioned symlinks `python`, `python-config`, `pip` etc. pointing to
`python3`, `python3-config`, `pip3` etc., respectively, have been installed into

/opt/homebrew/opt/python@3.11/libexec/bin
```



### 二、python 配置环境变量

#### 1、bash_profile 配置 python 环境变量

- 编辑 .bash_profile：sudo vim ~/.bash_profile

- 输入 i 进入编辑模式
- 输入下方有效的环境变量
- 按下 ESC 键
- 输入":"、"w"、"q" 键
- source ~/.bash_profile 刷新写入的配置

```python
# 安装包 python 命令目录
export PATH=${PATH}:/Library/Frameworks/Python.framework/Versions/3.11/bin/python3
alias python="/Library/Frameworks/Python.framework/Versions/3.11/bin/python3"

# 无效命令：安装包 python 可执行文件目录这种设置 python 命令是无效的
# export PATH=${PATH}:/Library/Frameworks/Python.framework/Versions/3.11/Python
# alias python="/Library/Frameworks/Python.framework/Versions/3.11/Python"

# Homebrew python 替身命令目录
# export PATH=${PATH}:/opt/homebrew/opt/python@3.11/libexec/bin/python
# alias python="/opt/homebrew/opt/python@3.11/libexec/bin/python"

# Homebrew python 替身可执行文件目录
# export PATH=${PATH}:/opt/homebrew/bin/python3
# alias python="/opt/homebrew/bin/python3"
```

键入 python 可以进入 python 命令模式，输入 Ctrl + z 可以终止 python 命令模式

Ctrl + z 终止 python 命令模式，可看到具体的 python 环境变量信息。

```python
zsh: suspended  /Library/Frameworks/Python.framework/Versions/3.11/bin/python3
```

#### 2、新打开窗口 python 命令失效

- 编辑 ~/.zshrc 文件
- 进入编辑模式，输入 source ~/.bash_profile



#### 三、参考学习网址

- [安装Python](https://www.liaoxuefeng.com/wiki/1016959663602400/1016959856222624)
- [Python Downloads](https://www.python.org/downloads/)
- [/bin,/sbin,/usr/sbin,/usr/bin 目录之简单区别](https://blog.csdn.net/kkdelta/article/details/7708250)
- [Mac 每次都要执行source ~/.bash_profile 配置的环境变量才生效](https://blog.csdn.net/science_Lee/article/details/79214127)

