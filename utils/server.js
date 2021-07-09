let io;

let status = -1;

exports.socketConnexion = (server) => {
  io = require("socket.io")(server);
  io.on("connection", (socket) => {
    console.log("a user connected");

    socket.emit("new_connexion", "Welcome to Feng Shui 2");

    socket.on("sending_credential", (args) => {
      console.log("User " + args + " joined");
    });

    socket.on("test", (arg) => {
      console.log(arg); // world
    });
  });

  server.listen(3000, () => {
    console.log("listening on *:3000");
  });
};

exports.sendMessage = (roomId, key, message) => {
  io.to(roomId).emit(key, message);
};

exports.getRooms = () => io.sockets.adapter.rooms;

exports.gameStarted = () => {
  return status;
};
