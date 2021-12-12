import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import { get } from "axios";

export function launch(port) {
  const application = express();
  application.use(cors());

  application.get("/api/users/:username", async (req, res) => {
    const prisma = new PrismaClient();
    const { username } = req.params;
    const user = await prisma.user.findFirst({
      where: {
        login: username,
      },
    });

    if (user) {
      res.json(user);
    } else {
      try {
        const github = await get(`https://api.github.com/users/${username}`);
        const newUser = github.data;
        await prisma.user.create({
          data: newUser,
        });
        res.json(newUser);
      } catch (error) {
        console.log(error);
        res.json(error);
      }
    }
  });

  application.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
  });
}
