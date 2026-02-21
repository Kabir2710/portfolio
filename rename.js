const fs = require("fs");
fs.readdirSync("public/sequence").forEach((f) => {
  const m = f.match(/frame_(\d+)/);
  if (m) {
    fs.renameSync(
      "public/sequence/" + f,
      "public/sequence/frame_" + m[1] + ".png",
    );
  }
});
