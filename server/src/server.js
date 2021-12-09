import express from "express";
// import { PrismaClient } from "@prisma";

export function launch(port) {
  const application = express();

  application.get("/api/users/:username", (request, response) => {
      // Step 1 - Does User exist in our Database
      //   If True  -> Retrieve from our Database
      //   If False -> Request Github API https://api.github.com/users/$USERNAME
      //            -> Store User information in our Database

      response.json({ username: request.params.username });
  });
  
  application.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
  });
}
