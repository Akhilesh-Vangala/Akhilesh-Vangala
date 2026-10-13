<div align="center">

# Sai Akhilesh Vangala

**AI Engineer** · Agent Systems · LLMs · RAG · MCP  
MS Data Science @ NYU Courant

[![Portfolio](https://img.shields.io/badge/Portfolio-akhilesh--vangala.github.io-3ECFBA?style=flat-square&logo=github)](https://akhilesh-vangala.github.io/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/akhilesh-nyu)
[![Email](https://img.shields.io/badge/sv3129%40nyu.edu-57068c?style=flat-square)](mailto:sv3129@nyu.edu)

</div>

AI engineer focused on **agent systems**, **LLMs**, **RAG**, and **MCP** — tool-using agents, grounded retrieval, golden-set evals, and production FastAPI/AWS services.

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

<div align="center">
  <img src="https://skillicons.dev/icons?i=python,pytorch,fastapi,postgres,docker,aws,ts,react,git,linux&perline=10" alt="core stack" />
</div>

<br/>

<table>
<tr>
<td width="22%" valign="top" align="center"><b>Languages</b></td>
<td>

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![SQL](https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=postgresql&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![C++](https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=cplusplus&logoColor=white)
![R](https://img.shields.io/badge/R-276DC3?style=for-the-badge&logo=r&logoColor=white)
![Bash](https://img.shields.io/badge/Bash-4EAA25?style=for-the-badge&logo=gnubash&logoColor=white)

</td>
</tr>
<tr>
<td valign="top" align="center"><b>AI &amp; ML</b></td>
<td>

![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white)
![LLMs](https://img.shields.io/badge/LLMs-111827?style=for-the-badge)
![RAG](https://img.shields.io/badge/RAG-0F766E?style=for-the-badge)
![LoRA](https://img.shields.io/badge/Fine--tuning%20(LoRA)-7C3AED?style=for-the-badge)
![Active Learning](https://img.shields.io/badge/Active%20Learning-5C2D91?style=for-the-badge)
![scikit--learn](https://img.shields.io/badge/scikit--learn-F7931E?style=for-the-badge&logo=scikitlearn&logoColor=white)
![Model Evaluation](https://img.shields.io/badge/Model%20Evaluation-0369A1?style=for-the-badge)
![Uncertainty](https://img.shields.io/badge/Uncertainty%20Quantification-BE123C?style=for-the-badge)

</td>
</tr>
<tr>
<td valign="top" align="center"><b>AI Engineering</b></td>
<td>

![Agentic AI](https://img.shields.io/badge/Agentic%20AI-BE123C?style=for-the-badge)
![LangGraph](https://img.shields.io/badge/LangGraph-1E293B?style=for-the-badge)
![MCP](https://img.shields.io/badge/MCP-0EA5E9?style=for-the-badge)
![NL2SQL](https://img.shields.io/badge/NL%E2%86%92SQL-0284C7?style=for-the-badge)
![Prompt Engineering](https://img.shields.io/badge/Prompt%20Engineering-9333EA?style=for-the-badge)
![Guardrails](https://img.shields.io/badge/Guardrails-B45309?style=for-the-badge)
![Golden Evals](https://img.shields.io/badge/Golden%20Eval%20Suites-065F46?style=for-the-badge)
![HITL](https://img.shields.io/badge/HITL%20Review-F59E0B?style=for-the-badge)

</td>
</tr>
<tr>
<td valign="top" align="center"><b>Production &amp; FDE</b></td>
<td>

![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![REST APIs](https://img.shields.io/badge/REST%20APIs-02569B?style=for-the-badge)
![AWS Lambda](https://img.shields.io/badge/AWS%20Lambda-FF9900?style=for-the-badge&logo=awslambda&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Microservices](https://img.shields.io/badge/Microservices-1E3A8A?style=for-the-badge)
![CI/CD](https://img.shields.io/badge/CI%2FCD-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)
![Latency](https://img.shields.io/badge/Latency%20Optimization-0D9488?style=for-the-badge)
![Docs](https://img.shields.io/badge/Technical%20Documentation-475569?style=for-the-badge)

</td>
</tr>
<tr>
<td valign="top" align="center"><b>Data &amp; Platform</b></td>
<td>

![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![BigQuery](https://img.shields.io/badge/BigQuery-669DF6?style=for-the-badge&logo=googlebigquery&logoColor=white)
![Spark](https://img.shields.io/badge/Spark-E25A1C?style=for-the-badge&logo=apachespark&logoColor=white)
![ETL](https://img.shields.io/badge/ETL-455A64?style=for-the-badge)
![System Design](https://img.shields.io/badge/System%20Design-1B4F72?style=for-the-badge)
![HPC](https://img.shields.io/badge/HPC%20%2F%20SLURM-334155?style=for-the-badge)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

</td>
</tr>
</table>

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
