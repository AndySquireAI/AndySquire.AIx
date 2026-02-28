# Architectural Manifest: PatientCentricCare.AI (andysquire.ai)
**Status:** ARCHITECTURE FREEZE - Governance Rigor Implemented
**Date:** January 17, 2026
**Version:** 1.0.0

## 1. Core Governance Principles
*   **Physician-as-Pilot:** Human authority is absolute. AI operates as an "auto-pilot" constrained by human-defined intent and boundaries.
*   **Safety OS:** The technical enforcement layer for governance, ensuring all AI actions are policy-constrained and auditable.
*   **Non-Clinical Scope (Phase 1):** Explicitly prohibits autonomous diagnosis, treatment, or clinical decision-making.

## 2. Technical Architecture
*   **Hosting:** Static HTML/CSS/JS hosted on GitHub, deployed via Netlify.
*   **Navigation:** Canonical navigation block enforced across all pages (Home, Physician-as-Pilot, Safety OS, Evidence, Team, Mission, Investment).
*   **Mobile-First:** Responsive design with synchronized hamburger menu and dropdowns.
*   **Analytics (GA4):** Cleaned URLs (no .html extensions), canonical tags, and "regulator-grade" event tracking (nav_click, scroll_depth, contact_click).

## 3. Branding & Authority Signals
*   **Harvard Medical School:** Prominent badge on homepage referencing AI Agentic Design informed by HMS Executive Education (2026).
*   **Clinical Grade:** Professional, clinical-grade presentation suitable for regulatory scrutiny.

## 4. Signal Discipline
*   **Audience Self-Selection:** Stakeholder routing grid on homepage to reduce noise traffic and direct users to relevant governance content.
*   **Separation of Concerns:** 
    *   `andysquire.ai`: Governance, Regulatory, and Institutional focus.
    *   `myhealthcanvas.com`: Patient Empowerment and Agentic AI Automation focus.

## 5. Maintenance Protocol
*   **No Unreviewed Changes:** Any modification to the canonical navigation or core governance messaging requires an architectural review.
*   **GA4 Hygiene:** Maintain clean event names and canonical URL enforcement for BigQuery telemetry.

---
*Signed: Manus (Agentic Thought Partner)*
