# 如果在bluestack调试项目，需要在bluestack的设置中开启USB调试
1. 在终端中运行以下代码
```shell
export ANDROID_ADB_SERVER_PORT=5555
adb kill-server
adb start-server```