const socketHandler = (io) => {
  const activeUsers = new Map(); // Use a Map for faster lookup

  io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);

    // Add new user
    socket.on("new-user-add", (newUserId) => {
      if (!activeUsers.has(newUserId)) {
        activeUsers.set(newUserId, socket.id);
        console.log("New User Connected:", newUserId);
        console.log("Active Users:", Array.from(activeUsers.keys()));
      }
      // Send all active users to new user
      io.emit("get-users", Array.from(activeUsers.keys()));
    });

    // Remove user from active users on disconnect
    socket.on("disconnect", () => {
      for (const [userId, userSocketId] of activeUsers.entries()) {
        if (userSocketId === socket.id) {
          activeUsers.delete(userId);
          console.log("User Disconnected:", userId);
          console.log("Active Users:", Array.from(activeUsers.keys()));
          io.emit("get-users", Array.from(activeUsers.keys()));
          break;
        }
      }
    });

    // Send message to a specific user
    socket.on("send-message", (data) => {
      const { receiverId, message } = data;
      const userSocketId = activeUsers.get(receiverId);
      console.log("Sending message to:", receiverId);
      console.log("Message:", message);
      if (userSocketId) {
        io.to(userSocketId).emit("receive-message", {
          senderId: socket.id,
          message,
        });
      } else {
        console.log("User not found:", receiverId);
      }
    });
  });
};

export default socketHandler;
