# Real-Time Collaborative Whiteboard (Excalidraw-like)

A production-grade, real-time collaborative whiteboard application built using **Next.js** and **WebSockets**, deployed end-to-end with **Docker**, **Kubernetes**, **GitHub Actions**, and **GitOps (Argo CD)**.  
The platform includes automated CI/CD, security scanning, change-based builds, and full observability using **Prometheus** and **Grafana**.

🔗 **GitHub Repository (K8s Manifests & GitOps):**  
https://github.com/Ajayt2002/staging-ops.git

---

## 🚀 Project Overview

This project simulates a real-world collaborative drawing platform similar to **Excalidraw**, focusing not only on application development but also on **production-ready DevOps practices**.

The primary goal is to demonstrate:
- Real-time collaboration at scale
- End-to-end CI/CD automation
- GitOps-based Kubernetes deployments
- Secure pipelines and monitoring in a Kubernetes environment

---

## 🧩 Problem Statement

Real-time collaboration applications require:
- Low-latency communication
- Scalable infrastructure
- Automated and reliable deployments
- Strong observability and security controls

This project addresses these challenges by combining modern web technologies with cloud-native DevOps practices to deliver a fully automated and observable production setup.

---

## 🏗️ Architecture Overview

**High-level architecture components:**

- **Frontend & Backend:** Next.js
- **Real-time Communication:** WebSockets
- **Database:** PostgreSQL
- **CI/CD:** GitHub Actions
- **Containerization:** Docker
- **Container Registry:** Docker Hub
- **Orchestration:** Kubernetes
- **GitOps:** Argo CD
- **Monitoring:** Prometheus + Grafana Agent (running inside Kubernetes)

> Kubernetes manifests are managed in this repository and continuously synced to the cluster using Argo CD.

---

## 🛠️ Tech Stack

### Application
- Next.js (Frontend + Backend)
- WebSockets (Live collaboration)
- PostgreSQL

### DevOps & Platform
- GitHub Actions (CI/CD)
- Docker (Containerization)
- Kubernetes (Orchestration)
- Argo CD (GitOps)

### Security & Quality
- CodeQL (Static Application Security Testing)
- Gitleaks (Secrets scanning)

### Observability
- Prometheus
- Grafana Agent (running in Kubernetes)

---

## ✨ Key Features

- Real-time multi-user collaboration using WebSockets
- End-to-end automated CI/CD pipeline
- Change-based builds for Next.js and WebSocket services
- Secure CI pipeline with CodeQL and Gitleaks
- GitOps-based Kubernetes deployments using Argo CD
- Continuous monitoring with Prometheus and Grafana

---

## 🔄 CI/CD Workflow (GitHub Actions)

The CI/CD pipeline is fully automated and optimized for real-world scenarios.

### Pipeline Flow

1. Code is pushed to the GitHub repository
2. GitHub Actions pipeline is triggered
3. Pipeline detects changes in:
   - Next.js application
   - WebSocket-related components
4. Based on detected changes:
   - Docker images are built
   - Images are pushed to Docker Hub
5. Security checks are executed:
   - **CodeQL** for static code analysis
   - **Gitleaks** for secrets detection
6. Kubernetes manifests are updated **only with new image digests**
7. Changes are committed back to the repository

---

## 🔁 GitOps Deployment with Argo CD

This project follows a **GitOps-first deployment model**.

- Kubernetes manifests are stored in Git
- CI pipeline updates image digests only
- Argo CD continuously monitors the repository
- Any change in manifests triggers automatic redeployment
- Git is the **single source of truth** for cluster state

This ensures:
- Consistent deployments
- Easy rollbacks
- Clear auditability

---

## 📊 Monitoring & Observability

Monitoring is implemented directly inside the Kubernetes cluster.

- **Prometheus** collects metrics from applications and cluster components
- **Grafana Agent** runs inside Kubernetes
- Dashboards provide visibility into:
  - Application health
  - Pod and node resource usage
  - Cluster performance metrics

---

## 🔐 Security Best Practices

- Secrets are never committed to GitHub
- **Gitleaks** prevents accidental secret exposure
- **CodeQL** enforces secure coding practices
- Docker images are built only through CI
- Kubernetes manifests follow least-privilege principles

---

## 🧪 Local Development

To run the project locally:

```bash
git clone https://github.com/Ajayt2002/staging-ops.git
cd staging-ops
docker-compose up
