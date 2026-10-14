import { chromium } from "playwright-core";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const out = process.argv[2] ?? path.join(__dirname, "assets");

const TEAL = "#2EE6A6";
const CYAN = "#5CE1FF";
const VIOLET = "#A78BFA";
const PINK = "#FB7185";

const cards = [
  { file: "verifyops.png", num: "01", kicker: "Agentic data ops", title: "VerifyOps", blurb: "Evidence-backed SQL incident investigation", steps: "Investigate|Verify|Review", stack: "LangGraph|FastAPI|DuckDB|dbt", a: TEAL, b: CYAN },
  { file: "relayops.png", num: "02", kicker: "Enterprise workflows", title: "RelayOps", blurb: "Evidence-grounded workflow actions", steps: "Observe|Simulate|Execute", stack: "LangGraph|Playwright|FastAPI|Pydantic", a: CYAN, b: VIOLET },
  { file: "evidence.png", num: "03", kicker: "Healthcare RAG", title: "Evidence Agent", blurb: "Grounded evidence retrieval over MCP", steps: "Retrieve|Cite|Grade", stack: "MCP|Claude Code|Agent Skills|Evals", a: VIOLET, b: PINK },
  { file: "bench.png", num: "04", kicker: "Agent evaluation", title: "Config Bench", blurb: "240 controlled agent ablation runs", steps: "Ablate|Run|Compare", stack: "Experiment design|Bootstrap CIs|Evals", a: PINK, b: VIOLET },
  { file: "nexus.png", num: "05", kicker: "Research matching", title: "Nexus", blurb: "Grounded research advisor matching", steps: "Retrieve|Match|Synthesize", stack: "TypeScript|Embeddings|Retrieval|LLMs", a: TEAL, b: VIOLET },
  { file: "lane.png", num: "06", kicker: "Vision + GenAI", title: "Lane Restore", blurb: "Detection plus generative restoration", steps: "Detect|Edit|Restore", stack: "PyTorch|LoRA|Qwen|Computer Vision", a: CYAN, b: PINK },
];

const browser = await chromium.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
});
const page = await browser.newPage({ viewport: { width: 600, height: 270 }, deviceScaleFactor: 2 });
for (const c of cards) {
  const { file, ...params } = c;
  const url = "file://" + path.join(__dirname, "card-aurora.html") + "?" + new URLSearchParams(params);
  await page.goto(url, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(250);
  await page.locator(".card").screenshot({ path: path.join(out, file), omitBackground: true });
  console.log("wrote", file);
}
await browser.close();
