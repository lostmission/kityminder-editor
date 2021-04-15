KityMinder Editor Lite

==========

## 简介

本系统基于 KityMinder Editor 创建，改造，可以通过Iframe方便嵌入其他系统。

## 功能改动

1 通过暴露以下方法，可以很方便的集成到第三方系统中

- initEditor
- getEditorContent
- setEditorContent

2 内容变更后主动调用父窗口以下方法

- doEditorUpdate

3 所有JS和CSS资源统一打包到一个文件，提升页面加载速度

## LICENSE

查看 LICENSE 文件