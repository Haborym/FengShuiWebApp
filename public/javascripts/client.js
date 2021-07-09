const socket = io();

let id_client = "";

socket.on("connect", () => {
  console.log("Connected as : " + socket.id);

  id_client = socket.id;
});

socket.on("disconnect", () => {
  console.log("deconnexion");
});

socket.on("new_connexion", (arg) => {
  console.log(arg); // world
});

socket.emit("sending_credential", id_client);

socket.emit("test", "Welcome to Feng Shui 2");
