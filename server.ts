import { app } from "./app";
require("dotenv").config();

app.listen(process.env.PORT, () => {
  console.log(`Server está conectado na porta ${process.env.PORT}`);
});
