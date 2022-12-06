
#### TS 视频转 MP4

##### TS 视频切片快速转 MP4

```
./ffmpeg -y -i source.ts -threads 8 -vcodec copy -acodec copy -vbsf h264_mp4toannexb result.mp4
```

##### TS 视频切片含压缩转 MP4

```
./ffmpeg -y -i source.ts -c:v libx264 -c:a copy -bsf:a aac_adtstoasc result.mp4
```

##### TS 视频切片转 MP4（含修改视频质量）

```js
./ffmpeg -i result13.ts -preset veryfast -crf 26 output.mp4
```



### 参考学习网址

- [ffmpeg命令行将ts转码为mp4](https://blog.csdn.net/summer_9527/article/details/126661787)
- [FFMpeg TS转成mp4命令](https://blog.csdn.net/allinone2/article/details/81557838)

