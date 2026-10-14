import { chromium } from "playwright-core";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const chromePath =
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

async function shot(htmlFile, outFile) {
  const browser = await chromium.launch({
    executablePath: chromePath,
    headless: true,
  });
  const page = await browser.newPage({
    viewport: { width: 1200, height: 420 },
    deviceScaleFactor: 2,
  });
  await page.goto("file://" + path.join(__dirname, htmlFile), {
    waitUntil: "networkidle",
  });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(400);
  await page.locator(".hero").screenshot({
    path: path.join(__dirname, "assets", outFile),
    type: "png",
  });
  await browser.close();
  console.log("wrote", outFile);
}

await shot("hero-render.html", "hero-dark.png");
await shot("hero-render-light.html", "hero-light.png");
