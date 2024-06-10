import mongoose from "mongoose";
import c from "config";

const CONNECTION = c.get("MONGODB_CONNECTION");
export default mongoose
  .connect(CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`Connected Successfully MyChat DB`))
  .catch((error) => console.log(`${error} did not connect`));
