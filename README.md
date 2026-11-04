# Enterprise e-Procurement System (Dark Edition)

A modern, high-performance web interface prototype for an **Enterprise e-Procurement Platform**, designed with a **Cyber-Slate Dark Theme** and **International (English) Nomenclature**.

---

## 🌟 Key Architectural Features

### 📱 1. Mobile-First & Responsive Smartphone Experience
- **Bottom Navigation Dock**: A native-style floating tab bar on mobile screens (`md:hidden`) with one-handed thumb navigation across all 4 core modules, including live pending badge counter.
- **Off-Canvas Slide-Out Sidebar**: Toggled via a top hamburger menu with dark backdrop blur on phones and tablets.
- **Touch-Friendly Controls**: Minimum 48px touch targets, full-width mobile action buttons, and responsive inputs.
- **Horizontal Swipeable Tables**: Clean tables that maintain column integrity on narrow phone viewports with visual swipe hints.
- **Adaptive Workflow Visualizer**: Multi-tier approval timeline scales smoothly on screens from 375px (iPhone SE) to 4K displays.

### 2. Persistent Dark-Themed Navigation Sidebar (Desktop)
- **Brand & System Header**: `🏢 Enterprise e-Procurement (v4.2)` with live Oracle ERP sync status indicator.
- **4 Core Menus (with active state indicator & icons)**:
  1. 📝 **Purchase Requisition (PR)**
  2. 📥 **Approval Inbox** *(with dynamic pending badge count)*
  3. 🧾 **Purchase Order (PO)**
  4. 📦 **Goods Receipt (GR)**
- **User Profile**: Alexander Vance, VP Global Sourcing & Supply.

---

### 2. Four Integrated Workflows

#### 🔹 Page 1: Purchase Requisition (PR Form)
- **Header Card**:
  - `PR Number`: System-assigned readonly input (`PR-2026-0842`).
  - `Requisitioner`: Dropdown with international English profiles (*Marcus Vance, Elena Rostova, David Sterling, Chloe Bennett, Lucas Wright*).
  - `Priority Tier`: Radio buttons (`Normal`, `Urgent`, `Critical`).
  - `Business Justification`: Detailed operational justification textarea.
- **PR Items Table**:
  - Columns: `No.` | `Item Description & Specs` | `Quantity` | `Unit` | `Unit Price ($)` | `Total Price ($)` | `Action`.
  - `+ Add Line Item`: Dynamically inserts new hardware/software lines.
  - Automatic real-time calculation of **Subtotal**, **7% VAT**, and **Grand Total**.
- **Action Buttons**:
  - `Save Draft` (Stores state with toast notification).
  - `Submit for Approval` (Submits PR into the Multi-Tier Approval Inbox).

#### 🔹 Page 2: Executive Approval Inbox
- **Filter Tabs**: `All`, `Pending Review`, `Approved`, `Rejected`.
- **Pending Requisitions Registry**:
  - Lists PR Number, Requester, Department, Total Amount, Priority Badge, and Status.
  - Selecting any row dynamically loads its full breakdown.
- **Visual Multi-Tier Workflow Timeline**:
  - 3 connected workflow nodes:
    1. **Dept Manager** (Christopher Hayes / Jonathan Brooks)
    2. **Finance Director** (Victoria Sterling)
    3. **VP Global Procurement** (Arthur Pendelton)
  - Animated pulsing active step, completed emerald checks, and timestamps.
- **Action Buttons**:
  - `Approve Requisition`: Advances the tier or grants final approval. Automatically pushes approved PRs to PO Generation!
  - `Reject Requisition`: Opens an official audit justification modal requiring written reason.

#### 🔹 Page 3: Purchase Order (PO) Management
- **Select Approved PR**: Dropdown linked to approved PRs; auto-populates vendor details and line items.
- **Vendor & Supplier Card**:
  - Supplier Name (*Apex Global Technologies Inc.*, *CyberCore Network Systems LLC*, etc.).
  - Address, Tax ID / VAT Registration, Payment Terms (*Net 30*, *Net 45*).
- **PO Line Items & Financial Breakdown**:
  - Displays contract lines, Subtotal, VAT (7%), and Net Payable Grand Total.
- **Actions**:
  - `Generate Official PO`: Issues certified PO code and routes it directly to Goods Receipt.
  - `Print PO Layout`: Opens high-res formal PO Document Preview modal with letterhead, digital signature, and print support.
  - `Email Vendor`: Opens encrypted EDI transmission modal with pre-attached signed PDF.

#### 🔹 Page 4: Goods Receipt (GR) Inspection & Intake
- **Document Cross-Reference Card**:
  - Cross-references PO Number, Delivery Note (`DN-884920-X`), and Logistics Carrier (*FedEx Freight*, *DHL Express*).
- **Inspection Checklist Table**:
  - Columns: `No.` | `Item Description` | `PO Qty` | `Received Qty` (Interactive input) | `QC Status` (`Pass [Accept]`, `Damaged [Hold]`, `Rejected [Return]`) | `Inspector Remarks`.
- **Proof Attachment & Certification**:
  - Interactive file upload simulator for Bill of Lading (BOL), customs manifest, and damage photos.
  - Warehouse Inward certification sign-off.
  - `Confirm Goods Receipt (GR)`: Issues Goods Receipt Note (`GRN-2026-05520`) and triggers inventory ledger sync.

---

## 🚀 How to Run the Application

You can open the application immediately without needing any compilation or package installations:

1. **Direct Browser Open**:
   - Double-click `index.html` in Windows Explorer, or right-click and choose **Open with Google Chrome / Microsoft Edge**.
2. **Local Static Server** *(optional)*:
   - Run in terminal:
     ```powershell
     python -m http.server 8080
     ```
     Or using Node:
     ```powershell
     node -e "const http=require('http'),fs=require('fs');http.createServer((req,res)=>{const p=req.url==='/'?'/index.html':req.url;fs.readFile('.'+p,(e,d)=>{if(e){res.writeHead(404);res.end();}else{res.writeHead(200);res.end(d);}});}).listen(8080,()=>console.log('Serving at http://localhost:8080'));"
     ```
   - Then open `http://localhost:8080` in your browser.
