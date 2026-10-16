import express from "express";
import { Request, Response } from "express";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  try {
    res.status(202).json({ ok: true, msg: "hello" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, msg: "Internal server error" });
  }
});

app.listen(4000, () => {
  console.log("server run on port 4000");
});
