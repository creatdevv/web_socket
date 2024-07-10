module.exports=function() {
    // io 와 관련된 모든 일~~, index에 require 추가!
io.on("connection", async(socket)=> {
    console.log("client is connected, socket.id");
});

};