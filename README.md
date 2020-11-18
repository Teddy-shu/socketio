"# socketio" 


## self note
```
嚐試使用socketio api 來作一個 chat room
使用 : 
  cml到 root path 
  node run devStart
  在流覽器開啟新視窗 index.html
  再在流覽器開啟另一個視窗 index.html
  開始聊天
  
開發工具 : 
  nodejs
  socketio
  nodemon
  
開發解說 : 
  server.js : 
    require('socket.io')(3000) //讓 sockio listen to port 3000
    io.on('connection', socket => {}); //設定 sockio 監聽連線時的handler
    socket.on('event name', name =>{}); //設定 sockio 特定event的handler
    socket.broadcast.emit('event name', name); //通知給所有連到sockio api的client進行特定event更新的handler
  script.js : 
    const socket = io('http://localhost:3000'); //連到server端的sockio api
    socket.on('event name', data => {}); //對特定event進行特定的前端render
```
