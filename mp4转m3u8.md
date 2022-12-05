
## mp4转m3u8过程详细命令

在此过程中需重点关注拆分 mp4视频、合并mp4视频、 合并后的 mp4 转 m3u8， m3u8 的配置和相应 TS 切片文件的对应关系。

### 拆分截取 mp4视频

下述命令 表示从 xxxx.mp4 的第 4 秒开始截取 2.8 秒时长的视频

注：这里选择 2.8秒是因为 ffmpeg 截取 mp4 视频会有误差，写 2.8秒，大约会截取 2.87 秒的视频。

```JSON
./ffmpeg -ss 00:04 -i xxxx.mp4 -to 00:02.800 -c copy cut2_3.mp4
```

### 合并mp4视频

```JSON
./ffmpeg -f concat -i filelist.txt -c copy concat.mp4
```

这里 filelist.txt 中的文件内容为

后边的 mp4 文件名为要拼接的视频

```JSON
file 'xxxx.mp4'
file 'yyyy1.mp4'
file 'yyyy2.mp4'
file 'yyyy3.mp4'
```

### 合并后的 mp4 转 m3u8 

hls_time 表示一个 TS 视频切片文件多长。

```JSON
./ffmpeg -i concat.mp4 -force_key_frames "expr:gte(t,n_forced*1)" -strict -2 -c:a aac -c:v libx264 -hls_time 4 -f hls xxxxConcat.m3u8
```

### m3u8 的配置和相应 TS 切片文件的对应关系

```
#EXTM3U
#EXT-X-VERSION:3
#EXT-X-TARGETDURATION:4
#EXT-X-MEDIA-SEQUENCE:0
#EXTINF:4.000000,
xxxxConcat10.ts
#EXTINF:4.000000,
xxxxConcat11.ts
#EXT-X-ENDLIST
```

## 参考学习网址
- [ffmpeg](http://www.ffmpeg.org/)
- [ffmpeg 文档](http://www.ffmpeg.org/ffmpeg.html)
- https://evermeet.cx/ffmpeg/
[【开发踩坑】EXT-X-DISCONTINUITY 合并多个 m3u8 文件到一个 m3u8](https://blog.csdn.net/AlphaBr/article/details/128032422)
- 其他参考学习链接在补充中