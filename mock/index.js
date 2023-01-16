import express from "express";
import { resolve } from "node:path";
import { existsSync } from "node:fs";
import cors from "cors";

const MOCK_PORT = process.env.MOCK_PORT || 5174;
const app = express();

// mock api directory json
app.use("/api", cors({ origin: "*" }), async (req, res) => {
  const filePath = (req.url.endsWith("/") ? `${req.url}index` : req.url) + ".json";
  const file = resolve(process.cwd(), "mock", "api", filePath.slice(1));
  if (existsSync(file)) {
    res.header("Content-Type", "application/json").sendFile(file);
  } else {
    res
      .status(404)
      .send(
        `<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot GET ${req.url}</pre>\n</body>\n</html>\n`
      );
  }
});

app.listen(MOCK_PORT, () => {
  console.log(`Mock server listening on port ${MOCK_PORT}`);
});
