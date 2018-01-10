* pm2：node进程管理工具

* pm2 命令：

pm2 命令 | 作用
--- | ---
pm start xxx.js | 启动 xxx.js
pm stop xxx.js | 停止 xxx.js
pm2 list | 
pm2 describe <appId> | 
pm2 restart <appId> | 
pm2 monit | 监控每个 node 进程的 CPU、内存的使用情况
pm2 startup | 服务器启动时，自动启动pm2
pm2 logs | pm2 日志信息
pm2 web | 访问：http://localhost:9615/ ，网页返回restful json格式