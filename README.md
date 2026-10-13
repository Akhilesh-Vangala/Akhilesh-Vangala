<div align="center">

<picture>
  <source media="(prefers-color-scheme: light)" srcset="./assets/hero-light.svg" />
  <img src="./assets/hero-dark.svg" width="100%" alt="Akhilesh Vangala, AI Engineer: agents, evaluation, and backend ML systems" />
</picture>

<br/>

**AI Engineer** · Agentic Systems · Applied GenAI · Backend / ML  
MS Data Science @ NYU Courant · Expected 2027

[Portfolio](https://akhilesh-vangala.github.io/) · [LinkedIn](https://www.linkedin.com/in/akhilesh-nyu) · [Email](mailto:sv3129@nyu.edu) · [All repos](https://github.com/Akhilesh-Vangala?tab=repositories)

</div>

I build **evidence-grounded agent systems**: tool-using workflows with auditable state, independent verification, golden-set evals, and human review before action. Focused on reliable LLM products, not demo-only pipelines.

| Signal | Result |
| --- | --- |
| Healthcare evidence agent | **95%** pass vs **20%** fixed-pipeline baseline (30 golden tasks) |
| Agent config ablations | **240** controlled runs isolating tools, skills, and model cost |
| VerifyOps | Checkpointed LangGraph + **independent** SQL/dbt verify + HITL |
| RelayOps | Observe → simulate → exact-version review → receipted sandbox actions |

## Selected systems

<table>
<tr>
<td width="50%" valign="top">
  <a href="https://github.com/Akhilesh-Vangala/verifyops"><img src="./assets/verifyops.svg" width="100%" alt="VerifyOps" /></a>
  <h3><a href="https://github.com/Akhilesh-Vangala/verifyops">VerifyOps</a></h3>
  <p>Data-incident agent: restricted SQL investigation, independent dbt repair checks, persistent work state, exact-version human review.</p>
  <p><code>LangGraph</code> <code>FastAPI</code> <code>DuckDB</code> <code>dbt</code></p>
  <p>
    <a href="https://verifyops.vercel.app">Live showcase</a> ·
    <a href="https://github.com/Akhilesh-Vangala/verifyops/blob/main/docs/CASE-STUDY.md">Case study</a>
  </p>
</td>
<td width="50%" valign="top">
  <a href="https://github.com/Akhilesh-Vangala/relayops"><img src="./assets/relayops.svg" width="100%" alt="RelayOps" /></a>
  <h3><a href="https://github.com/Akhilesh-Vangala/relayops">RelayOps</a></h3>
  <p>Enterprise workflow agent: browser observations, cited hypotheses, private-copy simulation, immutable review, receipted sandbox actions.</p>
  <p><code>LangGraph</code> <code>Playwright</code> <code>FastAPI</code> <code>Pydantic</code></p>
  <p>
    <a href="https://relayops-two.vercel.app">Live showcase</a> ·
    <a href="https://github.com/Akhilesh-Vangala/relayops/blob/main/docs/CASE-STUDY.md">Case study</a>
  </p>
</td>
</tr>
<tr>
<td width="50%" valign="top">
  <a href="https://github.com/Akhilesh-Vangala/healthcare-evidence-agent"><img src="./assets/evidence.svg" width="100%" alt="Healthcare Evidence Agent" /></a>
  <h3><a href="https://github.com/Akhilesh-Vangala/healthcare-evidence-agent">Healthcare Evidence Agent</a></h3>
  <p>Claude Code + MCP + reusable skills over openFDA, ClinicalTrials.gov, and CMS. Word-level citation checks. <strong>95%</strong> pass on a 30-task golden eval.</p>
  <p><code>MCP</code> <code>Claude Code</code> <code>Agent Skills</code> <code>Evaluation</code></p>
  <p><a href="https://github.com/Akhilesh-Vangala/healthcare-evidence-agent">Results &amp; reproducibility</a></p>
</td>
<td width="50%" valign="top">
  <a href="https://github.com/Akhilesh-Vangala/agent-config-bench"><img src="./assets/bench.svg" width="100%" alt="Agent Config Bench" /></a>
  <h3><a href="https://github.com/Akhilesh-Vangala/agent-config-bench">Agent Config Bench</a></h3>
  <p>Ablation of tools, skills, and model choice on identical golden tasks with an automatic grader and paired bootstrap CIs.</p>
  <p><code>Experiment Design</code> <code>Bootstrap CIs</code> <code>LLM Evaluation</code></p>
  <p><a href="https://github.com/Akhilesh-Vangala/agent-config-bench">Read the benchmark</a></p>
</td>
</tr>
<tr>
<td width="50%" valign="top">
  <a href="https://github.com/Akhilesh-Vangala/Nexus"><img src="./assets/nexus.svg" width="100%" alt="Nexus" /></a>
  <h3><a href="https://github.com/Akhilesh-Vangala/Nexus">Nexus</a></h3>
  <p>Research advisor discovery with live retrieval, activity checks, semantic matching, and citation-grounded synthesis. Claude at Columbia hackathon winner.</p>
  <p><code>TypeScript</code> <code>Retrieval</code> <code>Embeddings</code> <code>LLMs</code></p>
  <p><a href="https://github.com/Akhilesh-Vangala/Nexus">Architecture</a></p>
</td>
<td width="50%" valign="top">
  <a href="https://github.com/Akhilesh-Vangala/generative-lane-restoration"><img src="./assets/lane.svg" width="100%" alt="Generative Lane Restoration" /></a>
  <h3><a href="https://github.com/Akhilesh-Vangala/generative-lane-restoration">Generative Lane Restoration</a></h3>
  <p>CLRerNet detection + LoRA-tuned Qwen Image Edit to restore lane markings in dashcam frames.</p>
  <p><code>Computer Vision</code> <code>Fine-tuning</code> <code>PyTorch</code> <code>Qwen</code></p>
  <p><a href="https://github.com/Akhilesh-Vangala/generative-lane-restoration">Before / after</a></p>
</td>
</tr>
</table>

> **Scope:** VerifyOps and RelayOps are development workbenches with read-only showcases. Documented demos use synthetic data or scripted diagnostics. Live-model generalization and production connectors are not claimed yet.

## Stack

| Area | Tools |
| --- | --- |
| **Agents** | LangGraph, MCP, tool calling, RAG, structured outputs, HITL |
| **Evals** | Golden sets, executable graders, grounded citations, bootstrap CIs, guardrails |
| **ML** | PyTorch, scikit-learn, LoRA / fine-tuning, multimodal, active learning |
| **Backend** | Python, TypeScript, FastAPI, SQL, Postgres, Docker, AWS, CI/CD |

<details>
<summary><b>Full stack</b></summary>

Python · SQL · TypeScript · Java · C++ · R · Bash · React · FastAPI · PostgreSQL · BigQuery · Spark · PyTorch · LangGraph · MCP · Docker · AWS Lambda · GitHub Actions · OpenTelemetry · dbt · DuckDB · HPC / GPU

</details>

## Experience

<table>
<tr>
<td width="34%" valign="top"><b>AI/ML Engineer (Capstone)</b><br/><sub>Sep 2026 - Present · New York, NY</sub></td>
<td valign="top"><b>NYU Center for Data Science</b><br/>
Building <b>ActiveSysID</b>, a closed-loop active learning pipeline for dynamical systems using latent neural dynamics models and ensemble uncertainty to select the most informative experiments.</td>
</tr>
<tr>
<td valign="top"><b>AI/ML Engineer - Graduate Research Assistant</b><br/><sub>May 2026 - Present · Hybrid</sub></td>
<td valign="top"><b>NYU Rory Meyers College of Nursing</b><br/>
NIH Alzheimer's Genomic Sequencing Project: developing scalable IBD-based association testing; extending to binary and survival outcomes with large-scale simulation and HPC validation.</td>
</tr>
<tr>
<td valign="top"><b>AI/ML Engineer Intern</b><br/><sub>Jun 2026 - Aug 2026 · Dallas, TX</sub></td>
<td valign="top"><b>SAP Americas</b> <sub>(via SDVS Technologies)</sub><br/>
Built Python/SQL ETL and validation for SAP S/4HANA across 15 domains, 149 schemas, and <b>2.1M+</b> records. Applied LLM-assisted mapping, documentation, and test generation with the SAP Data Engineering team.</td>
</tr>
<tr>
<td valign="top"><b>AI Web Developer</b><br/><sub>Jul 2026 - Sep 2026 · Hybrid</sub></td>
<td valign="top"><b>NYU Courant Institute of Mathematics, Computing, and Data Science</b><br/>
Shipped UI, research layouts, and interactive components for the <a href="https://cims.nyu.edu/dynamic/">NYU Courant AI website</a>; used LLM-assisted workflows to improve accessibility of AI research content.</td>
</tr>
<tr>
<td valign="top"><b>AI/ML Engineer - Graduate Research Assistant</b><br/><sub>Feb 2026 - May 2026 · On-site</sub></td>
<td valign="top"><b>Hochwagen Lab, NYU</b><br/>
Built NIH All of Us genomic pipelines across <b>200K+</b> samples and <b>20+</b> disease cohorts in Python, SQL, and BigQuery; feature engineering, predictive modeling, and automated QC.</td>
</tr>
<tr>
<td valign="top"><b>AI/ML Engineer</b><br/><sub>Aug 2024 - Aug 2025 · Hyderabad</sub></td>
<td valign="top"><b>Virinchi Hospitals</b><br/>
Built GPT-4/GPT-4o tool-calling and RAG agents for hospital operations, billing, and reporting (Azure OpenAI, LangChain, FastAPI, read-only HIS SQL), with golden-set evals and mandatory human review on clinical outputs.</td>
</tr>
<tr>
<td valign="top"><b>AI Software Engineer Intern</b><br/><sub>May 2024 - Jul 2024 · Remote</sub></td>
<td valign="top"><b>Dascase Technologies</b><br/>
Shipped production Python/FastAPI and AWS Lambda APIs with SQL backends and LLM-assisted retrieval; <b>99.5%</b> request success and p95 latency cut from <b>850ms to 320ms</b>.</td>
</tr>
</table>

---

## Also shipping

[QueryPilot](https://github.com/Akhilesh-Vangala/querypilot) · [BioRoute](https://github.com/Akhilesh-Vangala/bioroute) · [CurateX MCP](https://github.com/Akhilesh-Vangala/curatex-mcp) · [ForecastOps](https://github.com/Akhilesh-Vangala/forecastops) · [LensPlan](https://github.com/Akhilesh-Vangala/lensplan) · [PlantPulse](https://github.com/Akhilesh-Vangala/plantpulse)

## Education

**M.S. Data Science**, New York University (Courant / CDS) · Sept 2025 – May 2027  
**B.Tech CSE (AI & ML)**, GITAM University · 2021 – 2025

## Contact

Open to **AI Engineer / Applied AI / ML Engineer** roles building agent platforms, RAG systems, and evaluation-heavy products.

[Portfolio](https://akhilesh-vangala.github.io/) · [LinkedIn](https://www.linkedin.com/in/akhilesh-nyu) · **sv3129@nyu.edu** · **sai.akhilesh.vangala@gmail.com**
