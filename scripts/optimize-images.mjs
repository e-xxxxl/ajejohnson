import sharp from "sharp";
import { readdir, mkdir } from "node:fs/promises";
import path from "node:path";

const SRC = path.resolve("src/assets/images/work");
const OUT = path.resolve("src/assets/images/work/opt");

// Screenshots are captured tall; crop to a comfortable browser-viewport ratio
// so the strongest part of each page leads.
const CROP_RATIO = 1600 / 1120;

await mkdir(OUT, { recursive: true });
const files = (await readdir(SRC)).filter((f) => /\.(png|jpe?g)$/i.test(f));

for (const file of files) {
  const name = file.replace(/\.(png|jpe?g)$/i, "");
  const input = path.join(SRC, file);
  const meta = await sharp(input).metadata();
  const targetH = Math.min(meta.height, Math.round(meta.width / CROP_RATIO));

  for (const w of [1600, 900]) {
    await sharp(input)
      .extract({ left: 0, top: 0, width: meta.width, height: targetH })
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(path.join(OUT, `${name}${w === 1600 ? "" : "-sm"}.webp`));
  }
  console.log(`optimized ${name}`);
}
console.log("done");
