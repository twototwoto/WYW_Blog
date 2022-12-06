## mp4转m3u8过程详细命令

在此过程中需重点关注拆分 mp4视频、合并mp4视频、 合并后的 mp4 转 m3u8， m3u8 的配置和相应 TS 切片文件的对应关系。

**注：直接截取 mp4 文件并拼接可能出现拼接的位置闪一下的问题，尝试的一种解决方法是先把 mp4 转为 TS 切片，然后分割 TS 切片，之后再把需要多次播放的 TS 视频切片进行多次拼接。**

### mp4 直接转 TS 视频切片文件

```JSON
./ffmpeg -i xxxx.mp4 -c:v copy xxxx.ts
```

### 分割 TS 视频切片为多个 TS 视频切片

下边命令也会生成出来 m3u8，不过这次主要目的是获取循环所需的 TS 视频切片。

```JSON
./ffmpeg -i xxxx.ts -force_key_frames "expr:gte(t,n_forced*1)" -strict -2 -hls_time 1 -f hls ts.m3u8
```

### filelist.txt

以第2套模板为例子，前边的0、1、2.ts 文件为 loading 部分的视频切片

4.ts 为成功循环的视频切片，后边的 4-90.ts 均为4.ts 或 4.ts、5.ts 一起复制出来的副本

复制副本而非只指定一个 ts 循环播的原因是，在 iPhone 上循环指定一个 ts ，会出现播放暂停的问题。

```JSON
file 'ts0.ts'
file 'ts1.ts'
file 'ts2.ts'
file 'ts3.ts'
file 'ts4.ts'
file 'ts5.ts'
file 'ts6.ts'
file 'ts7.ts'
file 'ts8.ts'
file 'ts9.ts'
...
file 'ts200.ts'
```

### 合并 TS 视频切片

```JSON
./ffmpeg -f concat -safe 0 -i filelist.txt -c copy result.ts
```

### 合并后的 ts 视频切片转 m3u8

**注意：**以下命令生成的 m3u8 的 ts 切片文件不全，需自行写入相应 ts 文件时长和目录。

```JSON
./ffmpeg -i result.ts -force_key_frames "expr:gte(t,n_forced*1)" -strict -2 -hls_time 3 -f hls xxxx2.m3u8
```

### 上传文件

上传 m3u8、TS 文件到同一目录，或 m3u8 中指明对应 ts 文件相对目录

### m3u8 配置示例

```JSON
#EXTM3U
#EXT-X-VERSION:3
#EXT-X-TARGETDURATION:3
#EXT-X-MEDIA-SEQUENCE:0
#EXTINF:3.000000,
xxxx20.ts
#EXTINF:3.000000,
xxxx21.ts
#EXTINF:3.000000,
xxxx22.ts
#EXTINF:3.000000,
xxxx23.ts
#EXTINF:3.000000,
xxxx24.ts
#EXTINF:3.000000,
xxxx25.ts
#EXTINF:3.000000,
xxxx26.ts
#EXTINF:3.000000,
xxxx27.ts
#EXTINF:3.000000,
xxxx28.ts
#EXTINF:3.000000,
xxxx29.ts
#EXTINF:3.000000,
#EXT-X-ENDLIST
```