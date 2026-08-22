# Obliq-io — AI-Powered Compliance & Business Operations Platform

<p align="center">
  <strong>A modern, responsive SaaS product experience for AI-assisted compliance, client operations, document intelligence and workflow management.</strong>
</p>

<p align="center">
  <a href="https://obliq-io-founding-engineer.vercel.app/">
    <strong>🚀 Live Demo</strong>
  </a>
  &nbsp;&nbsp;•&nbsp;&nbsp;
  <a href="https://github.com/Madhuri-Kumari2504/obliq-io-founding-engineer">
    <strong>💻 GitHub Repository</strong>
  </a>
  &nbsp;&nbsp;•&nbsp;&nbsp;
  <a href="https://vercel.com/obliq2/obliq-io-founding-engineer">
    <strong>▲ Vercel Deployment</strong>
  </a>
</p>

---

## 📌 Project Overview

**Obliq-io** is a modern SaaS product prototype designed around AI-assisted compliance and business operations.

The project was developed as part of the **Obliq-io Founding Engineer task**, with a focus on creating a polished, production-oriented frontend experience that demonstrates how businesses can manage:

- Compliance operations
- Clients
- Tasks
- Deadlines
- Documents
- Risk indicators
- AI-assisted workflows
- Business activity
- Compliance monitoring

The application combines a modern SaaS interface with interactive workflows to demonstrate how an AI-powered compliance platform could operate in a real-world business environment.

---

## 🚀 Live Application

**Production deployment:**

https://obliq-io-founding-engineer.vercel.app/

**GitHub repository:**

https://github.com/Madhuri-Kumari2504/obliq-io-founding-engineer

**Vercel project:**

https://vercel.com/obliq2/obliq-io-founding-engineer

---

# 🎯 Product Vision

Compliance and business operations often require teams to manage multiple clients, deadlines, documents, filings and operational tasks simultaneously.

Obliq-io is designed around the idea of bringing these workflows into a **single intelligent workspace**.

The product experience is organized around four major areas:

```text
                    ┌─────────────────────────┐
                    │       Obliq-io          │
                    │ AI Compliance Platform  │
                    └────────────┬────────────┘
                                 │
          ┌──────────────────────┼──────────────────────┐
          │                      │                      │
          ▼                      ▼                      ▼
   Client Operations      Compliance Control      AI Workspace
          │                      │                      │
          ▼                      ▼                      ▼
     Client360              GST / TDS / ROC       AI Queries
     Tasks                  Income Tax             Responses
     Activity               Risk Monitoring        Reasoning
     Deadlines              Compliance Status      Assistance
          │
          ▼
   Document Intelligence
```

---

# ✨ Core Features

## 1. 🏠 Modern SaaS Landing Page

The landing page introduces the product through a structured SaaS experience.

### Includes

- Responsive navigation
- Hero section
- Product positioning
- Platform overview
- Feature sections
- Workflow visualization
- AI Compliance section
- Document Intelligence
- Compliance Control Center
- Client operations
- Calls-to-action

The design emphasizes:

- Visual hierarchy
- Clear product messaging
- Consistent spacing
- Responsive layouts
- Interactive elements
- SaaS-style visual language

---

# 2. 🤖 AI Compliance Workspace

The AI Compliance Workspace provides an interactive interface for compliance-related questions.

Users can enter queries related to business compliance and receive contextual responses through the product interface.

### Features

- AI query input
- Query handling
- Response generation interface
- Loading / thinking state
- Compliance-focused responses
- AI reasoning interface
- Interactive workspace

### Example Workflow

```text
User Query
    │
    ▼
AI Workspace
    │
    ▼
Query Processing
    │
    ▼
Compliance Context
    │
    ▼
AI Response
    │
    ▼
User Action
```

> **Implementation note:** The current version focuses primarily on the frontend product experience and interaction flow. The AI response layer is represented through application logic rather than a production LLM backend.

---

# 3. 📄 Document Intelligence

The Document Intelligence section represents an intelligent document-management workflow for compliance operations.

The interface communicates how business documents can be organized and connected to compliance processes.

### Concepts represented

- Document organization
- Document workflows
- Compliance documentation
- Business information management
- Document intelligence
- Compliance-related information

Future implementations could connect this layer to:

- OCR
- Document classification
- Information extraction
- Semantic search
- LLM-based document analysis
- Automated compliance checks

---

# 4. 📊 Compliance Control Center

The Compliance Control Center provides a centralized view of business compliance operations.

### Compliance Areas

| Area | Purpose |
|---|---|
| GST | GST compliance and filing workflows |
| TDS | Tax deduction and reporting workflows |
| ROC | Corporate compliance workflows |
| Income Tax | Income tax compliance tracking |

### Operational information

The dashboard represents:

- Compliance status
- Risk indicators
- Task status
- Deadlines
- Client activity
- Compliance progress

This creates a centralized operational view instead of requiring users to manage compliance information across multiple disconnected systems.

---

# 5. 👥 Client360

**Client360** provides a consolidated view of individual clients.

The goal is to give an operations or compliance team a single place to understand the current state of a client.

### Client Information

The dashboard includes:

- Client name
- Industry
- Client health
- Compliance status
- GST
- TDS
- ROC
- Income Tax
- Tasks
- Deadlines
- Documents
- Recent activity

### Example Client View

```text
Client
  │
  ├── Health
  │
  ├── Compliance
  │     ├── GST
  │     ├── TDS
  │     ├── ROC
  │     └── Income Tax
  │
  ├── Tasks
  │
  ├── Deadlines
  │
  ├── Documents
  │
  └── Activity
```

---

# 6. ✅ Task Management

The application provides an interactive task-management experience for compliance operations.

Users can:

- Create tasks
- Assign priority
- View task status
- Filter tasks
- Track compliance activities
- Monitor operational progress

### Task Priorities

- 🔴 High
- 🟡 Medium
- 🟢 Low

### Task Status

- Open
- In Progress
- Completed

### Example

```text
Task
 │
 ├── Title
 ├── Priority
 ├── Status
 ├── Client
 └── Compliance Area
```

---

# 7. 📈 Risk & Compliance Monitoring

The product experience includes risk-oriented indicators to help teams understand where attention may be required.

The interface can represent:

- Compliance risk
- Pending tasks
- Upcoming deadlines
- Client health
- Compliance progress

The intended workflow is:

```text
Compliance Data
       │
       ▼
Risk Evaluation
       │
       ▼
Risk Indicator
       │
       ▼
Priority Action
       │
       ▼
Task / Resolution
```

---

# 🧠 Engineering Approach

The application was developed using a component-driven architecture.

The main engineering principles include:

### Componentization

Large interfaces are divided into reusable React components rather than implementing the entire product inside a single page.

### State-driven UI

Interactive functionality is managed using React state.

Examples include:

- Selected client
- Active compliance area
- Task modal
- Task filters
- AI query
- AI response
- Loading state
- Document visibility
- Notifications

### Responsive-first design

The UI is designed to adapt across different screen sizes.

### Separation of concerns

Product sections are represented through separate components to improve:

- Maintainability
- Readability
- Reusability
- Debugging
- Future scalability

---

# 🏗️ Architecture

```text
┌─────────────────────────────────────────────┐
│                  Next.js                    │
│              Application Layer              │
└──────────────────────┬──────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────┐
│                 React UI                    │
│                                             │
│  Navbar                                     │
│  Hero                                       │
│  Platform                                   │
│  Features                                   │
│  Workflow                                   │
│  AI Compliance                              │
│  Document Intelligence                      │
│  Compliance Control Center                  │
│  Client360                                  │
└──────────────────────┬──────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────┐
│             React State Layer               │
│                                             │
│  Client State                               │
│  Task State                                 │
│  AI State                                   │
│  UI State                                   │
│  Filter State                               │
└──────────────────────┬──────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────┐
│          Business Interaction Layer         │
│                                             │
│  Task Management                            │
│  Compliance Workflows                       │
│  AI Query Handling                          │
│  Client Operations                          │
│  Notifications                              │
└─────────────────────────────────────────────┘
```

---

# 🧩 Project Structure

```text
obliq-io-founding-engineer/
│
├── app/
│   │
│   ├── components/
│   │   ├── Navbar
│   │   ├── Hero
│   │   ├── Platform
│   │   ├── Features
│   │   ├── Workflow
│   │   ├── AICompliance
│   │   ├── DocumentIntelligence
│   │   ├── ComplianceControlCenter
│   │   └── Client360
│   │
│   ├── page.tsx
│   ├── globals.css
│   └── ...
│
├── public/
│   └── static assets
│
├── package.json
├── package-lock.json
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
├── tsconfig.json
├── .gitignore
├── AGENTS.md
├── CLAUDE.md
└── README.md
```

---

# 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| **Next.js** | React application framework |
| **React** | UI development |
| **TypeScript** | Type-safe application development |
| **Tailwind CSS** | Styling and responsive UI |
| **PostCSS** | CSS processing |
| **ESLint** | Code quality and linting |
| **Vercel** | Production deployment |
| **Git** | Version control |
| **GitHub** | Source-code hosting |

---

# 💻 Local Development

## Prerequisites

Before running the project locally, install:

- Node.js
- npm
- Git

Recommended Node.js versions:

```text
Node.js 20.19+
Node.js 22+
Node.js 24+
```

Check your installed versions:

```bash
node --version
npm --version
git --version
```

---

# ⚙️ Installation

## 1. Clone the repository

```bash
git clone https://github.com/Madhuri-Kumari2504/obliq-io-founding-engineer.git
```

## 2. Navigate into the project

```bash
cd obliq-io-founding-engineer
```

## 3. Install dependencies

```bash
npm install
```

## 4. Start the development server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

---

# 🔍 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

# 🧪 Quality & Validation

The application was checked for common frontend issues including:

### Responsive validation

- Desktop layouts
- Tablet layouts
- Mobile layouts
- 375px viewport
- 390px viewport
- 768px viewport

### UI validation

- Horizontal overflow
- Content clipping
- Button responsiveness
- Navigation behavior
- Text wrapping
- Component spacing
- Interactive states
- Modal behavior
- Task creation
- Task filtering
- AI interaction flow

---

# 📱 Responsive Design

The application follows a responsive design approach.

The layout adapts to:

```text
Desktop
   │
   ├── Large content areas
   ├── Multi-column layouts
   └── Full navigation

Tablet
   │
   ├── Adaptive grids
   ├── Reduced spacing
   └── Responsive sections

Mobile
   │
   ├── Single-column layouts
   ├── Flexible typography
   ├── Mobile navigation
   └── Touch-friendly controls
```

---

# 🔐 Security Considerations

The current implementation is primarily a frontend product prototype.

No production credentials or secrets should be committed to the repository.

For future backend integration, sensitive configuration should be managed using environment variables.

Example:

```text
.env.local
```

Environment files containing secrets should remain excluded through `.gitignore`.

---

# 🚀 Deployment

The project is deployed using **Vercel**.

### Production URL

https://obliq-io-founding-engineer.vercel.app/

### Deployment workflow

```text
GitHub Repository
       │
       ▼
     Vercel
       │
       ▼
Build Application
       │
       ▼
Production Deployment
       │
       ▼
Live Application
```

Future changes can be deployed through the connected GitHub/Vercel workflow.

---

# 📦 Production Build

To verify the project before deployment:

```bash
npm run build
```

Then start the production server:

```bash
npm run start
```

This allows the production build to be tested locally before deployment.

---

# 🔄 Development Workflow

A typical development workflow for this project is:

```text
1. Create feature
       ↓
2. Implement component
       ↓
3. Add interaction/state
       ↓
4. Test locally
       ↓
5. Run lint
       ↓
6. Create production build
       ↓
7. Commit changes
       ↓
8. Push to GitHub
       ↓
9. Deploy through Vercel
```

---

# 🧱 Design & Product Principles

The product experience follows several principles:

### 1. Clarity

Important compliance information should be easy to identify.

### 2. Actionability

Users should be able to move from:

```text
Information → Risk → Task → Action
```

### 3. Context

Client, compliance and task information should remain connected.

### 4. Responsiveness

The interface should work across desktop, tablet and mobile devices.

### 5. Scalability

The component structure should allow future backend and AI integrations without requiring a complete frontend rewrite.

---

# 🤖 Future AI Architecture

The current AI workspace can be extended into a production AI architecture.

A future implementation could look like:

```text
                 User
                  │
                  ▼
           AI Compliance UI
                  │
                  ▼
             API Layer
                  │
        ┌─────────┴─────────┐
        │                   │
        ▼                   ▼
   LLM Service        Compliance DB
        │                   │
        ▼                   ▼
  Reasoning Layer      Client Data
        │                   │
        └─────────┬─────────┘
                  ▼
          Response Generator
                  │
                  ▼
             AI Workspace
```

Potential future capabilities:

- LLM-powered compliance assistant
- Retrieval-Augmented Generation (RAG)
- Compliance document analysis
- Automated deadline extraction
- Risk prediction
- Document classification
- Semantic search
- Compliance recommendation engine
- Automated task generation

---

# 📄 Future Document Intelligence Architecture

A production document pipeline could be implemented as:

```text
Document Upload
      │
      ▼
File Validation
      │
      ▼
OCR / Text Extraction
      │
      ▼
Document Classification
      │
      ▼
Information Extraction
      │
      ▼
Compliance Rules
      │
      ▼
Risk / Exception Detection
      │
      ▼
Task Generation
```

This would allow documents to become actionable business data rather than simply stored files.

---

# 📈 Future Scalability

The current frontend architecture can be extended with a backend platform containing:

### Backend

- REST APIs
- Authentication
- Role-based access control
- Client APIs
- Task APIs
- Document APIs
- Compliance APIs

### Database

Potential entities:

```text
User
Client
ComplianceRecord
Task
Document
Deadline
Activity
Risk
AIConversation
```

### AI Layer

Potential services:

```text
LLM
RAG
Embeddings
Vector Database
Document Parser
Classification Model
Risk Model
```

---

# 🗺️ Roadmap

## Phase 1 — Product Prototype

- [x] Landing page
- [x] Responsive UI
- [x] Client360 dashboard
- [x] Compliance dashboard
- [x] Task management
- [x] AI workspace
- [x] Document Intelligence interface
- [x] Production deployment

## Phase 2 — Backend Integration

- [ ] Authentication
- [ ] Database integration
- [ ] Client APIs
- [ ] Task APIs
- [ ] Compliance APIs
- [ ] Persistent activity tracking

## Phase 3 — AI Integration

- [ ] Production LLM integration
- [ ] RAG pipeline
- [ ] Document intelligence
- [ ] Compliance question answering
- [ ] Automated task recommendations
- [ ] AI-generated explanations

## Phase 4 — Enterprise Features

- [ ] Role-based access control
- [ ] Multi-tenant architecture
- [ ] Audit logs
- [ ] Advanced analytics
- [ ] Notifications
- [ ] Workflow automation
- [ ] Enterprise security controls

---

# ⚠️ Current Limitations

This version is primarily a **frontend product prototype**.

The following areas can be expanded in a production implementation:

- Persistent database
- Real authentication
- Production AI/LLM integration
- Real document processing
- Real compliance APIs
- Server-side authorization
- Persistent task storage
- Production notification system
- Enterprise audit logging

These limitations are intentional within the scope of the current task.

---

# 🎓 Engineering Takeaways

This project demonstrates practical experience with:

- Modern React development
- Next.js application architecture
- TypeScript
- Component-driven UI development
- State management
- Responsive design
- SaaS product design
- Interactive workflows
- Client dashboard architecture
- Compliance-oriented UX
- AI product interface design
- Git/GitHub workflow
- Production deployment
- Frontend validation and debugging

---

# 📊 Project Status

| Area | Status |
|---|---|
| Landing Page | ✅ Complete |
| Responsive UI | ✅ Complete |
| AI Workspace UI | ✅ Complete |
| Document Intelligence UI | ✅ Complete |
| Compliance Control Center | ✅ Complete |
| Client360 | ✅ Complete |
| Task Management | ✅ Complete |
| GitHub Repository | ✅ Complete |
| Vercel Deployment | ✅ Complete |
| Production Backend | 🔄 Future |
| Production AI | 🔄 Future |
| Database | 🔄 Future |
| Authentication | 🔄 Future |

---

# 🔗 Project Resources

### Live Application

https://obliq-io-founding-engineer.vercel.app/

### GitHub Repository

https://github.com/Madhuri-Kumari2504/obliq-io-founding-engineer

### Main Branch

https://github.com/Madhuri-Kumari2504/obliq-io-founding-engineer/tree/main

### Vercel Deployment

https://vercel.com/obliq2/obliq-io-founding-engineer

---

# 👩‍💻 Author

**Madhuri Kumari**

B.Tech Student  
Computer Science / Data Science

GitHub:

https://github.com/Madhuri-Kumari2504

---

# 📜 License

This project was developed as part of the **Obliq-io Founding Engineer task**.

Unless otherwise specified, the repository should be considered a task/project submission rather than a publicly licensed production software package.

---

<p align="center">
  <strong>Built with Next.js, React, TypeScript and a product-first engineering approach.</strong>
</p>

<p align="center">
  🚀 <strong>Obliq-io — Turning compliance operations into an intelligent workflow.</strong>
</p>