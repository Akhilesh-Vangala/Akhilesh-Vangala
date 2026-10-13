<div align="center">

# Sai Akhilesh Vangala

**AI Engineer** · Applied GenAI · Agentic Systems  
MS Data Science @ NYU Courant

[![Portfolio](https://img.shields.io/badge/Portfolio-akhilesh--vangala.github.io-3ECFBA?style=flat-square&logo=github)](https://akhilesh-vangala.github.io/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/akhilesh-nyu)
[![Email](https://img.shields.io/badge/sv3129%40nyu.edu-57068c?style=flat-square)](mailto:sv3129@nyu.edu)

</div>

Applied AI engineer building **tool-using agents**, **retrieval systems**, and **evaluation pipelines**. Focus: LangGraph agents, grounded RAG, golden-set evals, and production FastAPI/AWS services.

---

## Flagship systems

### [VerifyOps](https://github.com/Akhilesh-Vangala/verifyops) · data-incident agent

Checkpointed LangGraph investigator for metric discrepancies. Proposes evidence-backed SQL repairs, runs **independent** SQL/dbt verification, then exact-version HITL review.

```text
detect → investigate → SQL → verify → HITL
```

`LangGraph` · `DuckDB` · `dbt` · `FastAPI` · `OpenTelemetry`

### [RelayOps](https://github.com/Akhilesh-Vangala/relayops) · enterprise workflow agent

Evidence-grounded exception agent: Playwright observations, cited hypotheses, private-copy simulation, exact-version review, receipted sandbox actions. The model **cannot** approve or execute its own proposal.

```text
observe → hypothesize → simulate → review → execute
```

`LangGraph` · `Playwright` · `AsyncAnthropic` · `FastAPI` · `Pydantic`

---

## Agentic / GenAI work

| Repo | Description |
| --- | --- |
| [**healthcare-evidence-agent**](https://github.com/Akhilesh-Vangala/healthcare-evidence-agent) | Healthcare evidence agent on Claude Code + MCP + Agent Skills; grounded citations over live openFDA / ClinicalTrials / CMS APIs |
| [**agent-config-bench**](https://github.com/Akhilesh-Vangala/agent-config-bench) | Ablation bench isolating tools, skills, and model cost on the same golden set and grader |
| [**bioroute**](https://github.com/Akhilesh-Vangala/bioroute) | Hosted vs open-weight router for agent routing and compliance (F1, ECE, latency, cost, licensing) |
| [**querypilot**](https://github.com/Akhilesh-Vangala/querypilot) | Guardrailed NL→SQL agent with DROP/DML refusal and warehouse execution-accuracy scoring |

## ML systems

| Repo | Description |
| --- | --- |
| [**forecastops**](https://github.com/Akhilesh-Vangala/forecastops) | Point-in-time SKU forecasts, Postgres model registry, and PSI drift monitoring |
| [**lensplan**](https://github.com/Akhilesh-Vangala/lensplan) | Multi-plant lens MILP in Gurobi/HiGHS; LP-costed simulated annealing baseline |
| [**plantpulse**](https://github.com/Akhilesh-Vangala/plantpulse) | S&OP exception desk ranked by dollar impact, not raw forecast error |

---

## Skills

**Languages**  
Python · SQL · TypeScript · Java · C++ · R · Bash  

**AI & ML**  
PyTorch · LLMs · RAG · Fine-tuning (LoRA) · Active learning · scikit-learn · Model evaluation · Uncertainty quantification  

**AI Engineering**  
Agentic AI · LangGraph · MCP · NL→SQL · Prompt engineering · Guardrails · Golden eval suites · HITL review  

**Production & FDE**  
FastAPI · REST APIs · AWS Lambda · Docker · Microservices · CI/CD · Latency optimization · Technical documentation  

**Data & Platform**  
PostgreSQL · BigQuery · Spark · ETL · System design · HPC / SLURM · Git  

<img src="https://skillicons.dev/icons?i=python,pytorch,fastapi,postgres,docker,aws,ts,git&perline=8" alt="tech icons" />

---

## Experience

<table>
<tr>
<td width="34%" valign="top"><b>AI/ML Engineer (Capstone)</b><br/><sub>Sep 2026 – Present · New York, NY</sub></td>
<td valign="top"><b>NYU Center for Data Science</b><br/>
Building <b>ActiveSysID</b>, a closed-loop active learning pipeline for dynamical systems using latent neural dynamics models and ensemble uncertainty to select the most informative experiments.</td>
</tr>
<tr>
<td valign="top"><b>AI/ML Engineer – Graduate Research Assistant</b><br/><sub>May 2026 – Present · Hybrid</sub></td>
<td valign="top"><b>NYU Rory Meyers College of Nursing</b><br/>
NIH Alzheimer's Genomic Sequencing Project: developing scalable IBD-based association testing; extending to binary and survival outcomes with large-scale simulation and HPC validation.</td>
</tr>
<tr>
<td valign="top"><b>AI/ML Engineer Intern</b><br/><sub>Jun 2026 – Aug 2026 · Dallas, TX</sub></td>
<td valign="top"><b>SAP Americas</b> <sub>(via SDVS Technologies)</sub><br/>
Built Python/SQL ETL and validation for SAP S/4HANA across 15 domains, 149 schemas, and <b>2.1M+</b> records. Applied LLM-assisted mapping, documentation, and test generation with the SAP Data Engineering team.</td>
</tr>
<tr>
<td valign="top"><b>AI Web Developer</b><br/><sub>Jul 2026 – Sep 2026 · Hybrid</sub></td>
<td valign="top"><b>NYU Courant Institute of Mathematics, Computing, and Data Science</b><br/>
Shipped UI, research layouts, and interactive components for the <a href="https://cims.nyu.edu/dynamic/">NYU Courant AI website</a>; used LLM-assisted workflows to improve accessibility of AI research content.</td>
</tr>
<tr>
<td valign="top"><b>AI/ML Engineer – Graduate Research Assistant</b><br/><sub>Feb 2026 – May 2026 · On-site</sub></td>
<td valign="top"><b>Hochwagen Lab, NYU</b><br/>
Built NIH All of Us genomic pipelines across <b>200K+</b> samples and <b>20+</b> disease cohorts in Python, SQL, and BigQuery; feature engineering, predictive modeling, and automated QC.</td>
</tr>
<tr>
<td valign="top"><b>AI/ML Engineer</b><br/><sub>Aug 2024 – Aug 2025 · Hyderabad</sub></td>
<td valign="top"><b>Virinchi Hospitals</b><br/>
Built GPT-4/GPT-4o tool-calling and RAG agents for hospital operations, billing, and reporting (Azure OpenAI, LangChain, FastAPI, read-only HIS SQL), with golden-set evals and mandatory human review on clinical outputs.</td>
</tr>
<tr>
<td valign="top"><b>AI Software Engineer Intern</b><br/><sub>May 2024 – Jul 2024 · Remote</sub></td>
<td valign="top"><b>Dascase Technologies</b><br/>
Shipped production Python/FastAPI and AWS Lambda APIs with SQL backends and LLM-assisted retrieval; <b>99.5%</b> request success and p95 latency cut from <b>850ms to 320ms</b>.</td>
</tr>
</table>

---

## Education

| Degree | School | When |
| --- | --- | --- |
| **Master of Science in Data Science** | New York University, Center for Data Science (Courant) | Sept 2025 – May 2027 |
| **B.Tech in Computer Science & Engineering (AI & ML)** | GITAM University | Sept 2021 – May 2025 |

---

## Certifications

| Certificate | Issuer |
| --- | --- |
| [Managing Machine Learning Projects](https://www.coursera.org/verify/4PWP65PVZW44) | Duke University |
| [Introduction to Machine Learning](https://www.coursera.org/verify/CJTNRS75BA2V) | Duke University |
| [Mathematics for Machine Learning: Multivariate Calculus](https://www.coursera.org/verify/3TF6TQGNFN7A) | Imperial College London |
| [Data Structures](https://www.coursera.org/verify/XDL6JJ8FNYN5) | UC San Diego |
| [Basic Statistics](https://www.coursera.org/verify/CD7TSQTX4NX5) | University of Amsterdam |
| [Predictive Modeling, Model Fitting, and Regression Analysis](https://www.coursera.org/verify/ENKUGNUHPW49) | UC Irvine |

---

<div align="center">

[Portfolio](https://akhilesh-vangala.github.io/) · [LinkedIn](https://www.linkedin.com/in/akhilesh-nyu) · [GitHub](https://github.com/Akhilesh-Vangala)  

**sv3129@nyu.edu** · **sai.akhilesh.vangala@gmail.com**

</div>
