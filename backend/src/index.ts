import express from "express";
import { Request, Response } from "express";

export const app = express();

app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
  try {
    res.status(200).json({ ok: true, msg: "hello" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, msg: "Internal server error" });
  }
});

app.post("/login", async (req: Request, res: Response) => {
  try {
    const { name, age } = req.body;

    if (!name || !age) {
      return res
        .status(401)
        .json({ ok: false, msg: "Please Provide All Requries" });
    }

    if (age < 18) {
      return res.status(401).json({ ok: false, msg: "You Too Young" });
    }

    if (name.length < 3) {
      return res
        .status(401)
        .json({ ok: false, msg: "Name Length Should More Then 3" });
    }

    if (name.length > 50) {
      return res
        .status(401)
        .json({ ok: false, msg: "Name Length Should Less Then 50" });
    }

    res.status(200).json({ ok: true, msg: "Welcome" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, msg: "Internal server error" });
  }
});

app.listen(4000, () => {
  console.log("server run on port 4000");
});
