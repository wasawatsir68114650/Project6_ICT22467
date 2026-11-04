/**
 * Enterprise e-Procurement System (Dark Mode)
 * International / English Enterprise Names & Workflows
 */

// Application State Store
const state = {
  activeTab: 'pr-form',
  nextPrId: 843,
  nextPoId: 1050,
  nextGrnId: 5520,

  // Current PR Form Items
  prItems: [
    {
      id: 1,
      description: 'NVIDIA H100 NVL 94GB PCIe Tensor Core GPU',
      qty: 4,
      unit: 'Units',
      unitPrice: 32500.00
    },
    {
      id: 2,
      description: 'Dell PowerEdge R760 Rack Server 2U (Dual Xeon 64C, 512GB RAM)',
      qty: 2,
      unit: 'Nodes',
      unitPrice: 18200.00
    },
    {
      id: 3,
      description: 'Samsung PM9A3 7.68TB Enterprise U.2 NVMe SSD',
      qty: 16,
      unit: 'Pcs',
      unitPrice: 650.00
    }
  ],

  // Approval Inbox List
  approvals: [
    {
      id: 'PR-2026-0841',
      requestedBy: 'Liam O\'Connor',
      role: 'Cloud Infrastructure Architect',
      department: 'Cloud Infrastructure & DevOps',
      totalAmount: 48500.00,
      priority: 'Urgent',
      status: 'Pending Finance',
      currentStep: 2, // 1: Dept Mgr, 2: Finance, 3: VP Procurement
      justification: 'Critical capacity expansion for US-East multi-tenant Kubernetes clusters ahead of Black Friday peak traffic.',
      items: [
        { description: 'Arista 7050SX3 48-Port 10/25G SFP28 Core Switch', qty: 2, unitPrice: 14500.00 },
        { description: 'Finisar 25G SFP28 Optical Transceivers (100m)', qty: 40, unitPrice: 220.00 },
        { description: 'Cat6A High-Density Patch Panels 48-Port', qty: 6, unitPrice: 180.00 }
      ],
      history: [
        { step: 1, approver: 'Christopher Hayes', title: 'Dept Manager', status: 'Approved', timestamp: '2026-11-03 14:20' },
        { step: 2, approver: 'Victoria Sterling', title: 'Finance Director', status: 'Pending Review', timestamp: 'In Progress' },
        { step: 3, approver: 'Arthur Pendelton', title: 'VP Global Procurement', status: 'Queued', timestamp: 'Waiting for L2' }
      ]
    },
    {
      id: 'PR-2026-0838',
      requestedBy: 'Sophia Martinez',
      role: 'Principal Security Analyst',
      department: 'Cyber Security & Defense',
      totalAmount: 12350.00,
      priority: 'Normal',
      status: 'Pending Dept Manager',
      currentStep: 1,
      justification: 'Annual refresh of Hardware Security Modules (HSM) and tamper-evident authentication tokens.',
      items: [
        { description: 'YubiKey 5 FIPS Series Enterprise Security Keys', qty: 150, unitPrice: 75.00 },
        { description: 'SafeNet Luna PCIe HSM Cryptographic Module', qty: 1, unitPrice: 1100.00 }
      ],
      history: [
        { step: 1, approver: 'Jonathan Brooks', title: 'Dept Manager', status: 'Pending Review', timestamp: 'In Progress' },
        { step: 2, approver: 'Victoria Sterling', title: 'Finance Director', status: 'Queued', timestamp: 'Waiting for L1' },
        { step: 3, approver: 'Arthur Pendelton', title: 'VP Global Procurement', status: 'Queued', timestamp: 'Waiting for L2' }
      ]
    },
    {
      id: 'PR-2026-0835',
      requestedBy: 'Julian Reynolds',
      role: 'Head of Deep Learning Research',
      department: 'AI Research & Engineering',
      totalAmount: 184200.00,
      priority: 'Critical',
      status: 'Pending Executive',
      currentStep: 3,
      justification: 'Procurement of ultra-scale GPU interconnects and dedicated InfiniBand fabrics for large language model pre-training cluster.',
      items: [
        { description: 'NVIDIA Quantum-2 QM9700 64-Port NDR 400Gb/s InfiniBand Switch', qty: 2, unitPrice: 42000.00 },
        { description: 'NVIDIA Mellanox ConnectX-7 400Gbps NDR Adapters', qty: 16, unitPrice: 3800.00 },
        { description: 'NDR Active Copper Direct Attach Cables (Splitter 2m)', qty: 32, unitPrice: 720.00 }
      ],
      history: [
        { step: 1, approver: 'Dr. Gregory House', title: 'Dept Manager', status: 'Approved', timestamp: '2026-11-01 09:30' },
        { step: 2, approver: 'Victoria Sterling', title: 'Finance Director', status: 'Approved', timestamp: '2026-11-02 11:15' },
        { step: 3, approver: 'Arthur Pendelton', title: 'VP Global Procurement', status: 'Pending Review', timestamp: 'In Progress' }
      ]
    }
  ],

  selectedApprovalId: 'PR-2026-0841',

  // Approved PRs ready for PO conversion
  approvedPrs: [
    {
      id: 'PR-2026-0819',
      requisitioner: 'David Sterling',
      department: 'Enterprise Security Architecture',
      title: 'Cisco 400G Core Spine Switches',
      vendorName: 'Apex Global Technologies Inc.',
      vendorAddress: '742 Evergreen Plaza, Suite 400, Austin, TX 78701, USA',
      vendorTaxId: 'US-EIN-94-3829104',
      creditTerm: 'Net 30 Days',
      vendorEmail: 'sales@apexglobal.tech',
      items: [
        { description: 'Cisco Nexus 9336C-FX2 400G Core Spine Switch', qty: 4, unit: 'Units', unitPrice: 19500.00 },
        { description: 'Cisco 100G QSFP28 BiDi Short-Reach Optical Transceivers', qty: 40, unit: 'Pcs', unitPrice: 360.00 }
      ]
    },
    {
      id: 'PR-2026-0824',
      requisitioner: 'Elena Rostova',
      department: 'Cloud Infrastructure & DevOps',
      title: 'High-Throughput Edge Gateways',
      vendorName: 'CyberCore Network Systems LLC',
      vendorAddress: '1200 Silicon Avenue, San Jose, CA 95110, USA',
      vendorTaxId: 'US-EIN-77-5910243',
      creditTerm: 'Net 45 Days',
      vendorEmail: 'orders@cybercore.io',
      items: [
        { description: 'FortiGate 600F Enterprise Next-Gen Firewall Appliance', qty: 4, unit: 'Units', unitPrice: 8200.00 },
        { description: 'FortiGuard Unified Threat Protection 3-Year Enterprise License', qty: 4, unit: 'Licenses', unitPrice: 2400.00 }
      ]
    }
  ],

  // Generated Purchase Orders ready for Goods Receipt
  purchaseOrders: [
    {
      id: 'PO-2026-1049',
      prId: 'PR-2026-0819',
      vendorName: 'Apex Global Technologies Inc.',
      vendorAddress: '742 Evergreen Plaza, Suite 400, Austin, TX 78701, USA',
      deliveryNote: 'DN-884920-X',
      carrier: 'FedEx Freight Priority (Tracking: 9481938201)',
      orderDate: '2026-10-28',
      deliveryDate: '2026-11-04',
      items: [
        { id: 1, description: 'Cisco Nexus 9336C-FX2 400G Core Spine Switch', poQty: 4, receivedQty: 4, qcStatus: 'Pass', remarks: 'Serial tags verified & firmware booted' },
        { id: 2, description: 'Cisco 100G QSFP28 BiDi Short-Reach Optical Transceivers', poQty: 40, receivedQty: 38, qcStatus: 'Pass', remarks: '2 units missing in box, backordered' },
        { id: 3, description: 'Cat8 High-Speed Armored Shielded Patch Cables 5m', poQty: 100, receivedQty: 95, qcStatus: 'Damaged', remarks: '5 units packaging crushed during freight' }
      ]
    },
    {
      id: 'PO-2026-1042',
      prId: 'PR-2026-0824',
      vendorName: 'CyberCore Network Systems LLC',
      vendorAddress: '1200 Silicon Avenue, San Jose, CA 95110, USA',
      deliveryNote: 'DN-773190-B',
      carrier: 'DHL Express Worldwide (Tracking: 449102847)',
      orderDate: '2026-10-25',
      deliveryDate: '2026-11-02',
      items: [
        { id: 1, description: 'FortiGate 600F Enterprise Next-Gen Firewall Appliance', poQty: 4, receivedQty: 4, qcStatus: 'Pass', remarks: 'Factory sealed & hardware check clear' },
        { id: 2, description: 'FortiGuard Unified Threat Protection 3-Year Enterprise License', poQty: 4, receivedQty: 4, qcStatus: 'Pass', remarks: 'Electronic certificate received' }
      ]
    }
  ],

  // Selected PO for Goods Receipt
  selectedPoId: 'PO-2026-1049',
  uploadedProofFiles: [
    { name: 'bill_of_lading_apex_signed.pdf', size: '1.4 MB' },
    { name: 'pallet_dock_inspection_photo1.jpg', size: '3.8 MB' }
  ]
};

// Format currency
function formatUSD(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }).format(amount);
}

// Show Toast Notification
function showToast(title, message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';

  const iconColor = type === 'success' ? '#10b981' : type === 'warning' ? '#f59e0b' : type === 'error' ? '#f43f5e' : '#38bdf8';
  const iconSvg = type === 'success'
    ? '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>'
    : type === 'warning'
    ? '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>'
    : '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';

  toast.innerHTML = `
    <div style="color: ${iconColor};" class="mt-0.5 flex-shrink-0">${iconSvg}</div>
    <div class="flex-1">
      <h4 class="text-sm font-semibold text-white">${title}</h4>
      <p class="text-xs text-slate-300 mt-0.5 leading-relaxed">${message}</p>
    </div>
    <button onclick="this.parentElement.remove()" class="text-slate-400 hover:text-white transition-colors">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
    </button>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(60px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4200);
}

// Mobile Sidebar Drawer Toggle
function toggleMobileSidebar(forceState) {
  const sidebar = document.getElementById('sidebar');
  const backdrop = document.getElementById('sidebar-backdrop');
  if (!sidebar) return;

  const isOpen = !sidebar.classList.contains('-translate-x-full');
  const shouldOpen = forceState !== undefined ? forceState : !isOpen;

  if (shouldOpen) {
    sidebar.classList.remove('-translate-x-full');
    sidebar.classList.add('translate-x-0');
    if (backdrop) {
      backdrop.classList.remove('hidden');
      setTimeout(() => backdrop.classList.add('opacity-100'), 10);
    }
    document.body.classList.add('overflow-hidden', 'md:overflow-auto');
  } else {
    sidebar.classList.add('-translate-x-full');
    sidebar.classList.remove('translate-x-0');
    if (backdrop) {
      backdrop.classList.remove('opacity-100');
      backdrop.classList.add('opacity-0');
      setTimeout(() => backdrop.classList.add('hidden'), 200);
    }
    document.body.classList.remove('overflow-hidden', 'md:overflow-auto');
  }
}

// Switch Active View Tab
function switchTab(tabId) {
  state.activeTab = tabId;

  // Auto-close mobile sidebar if open
  toggleMobileSidebar(false);

  // Update Desktop Nav Buttons
  document.querySelectorAll('.nav-item').forEach(btn => {
    if (btn.dataset.tab === tabId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Update Mobile Bottom Nav Buttons
  document.querySelectorAll('.mobile-nav-btn').forEach(btn => {
    if (btn.dataset.tab === tabId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Update Views
  document.querySelectorAll('.tab-view').forEach(view => {
    if (view.id === `view-${tabId}`) {
      view.classList.remove('hidden');
    } else {
      view.classList.add('hidden');
    }
  });

  // Update Header Breadcrumb Title
  const headerTitle = document.getElementById('header-active-page-title');
  if (headerTitle) {
    const titleMap = {
      'pr-form': 'Purchase Requisition (PR Form)',
      'approval-inbox': 'Executive Approval Inbox',
      'po-management': 'Purchase Order (PO) Management',
      'gr-receipt': 'Goods Receipt (GR) Inspection'
    };
    headerTitle.textContent = titleMap[tabId] || 'e-Procurement Hub';
  }

  // Refresh dynamic contents for view
  if (tabId === 'pr-form') {
    renderPrTable();
  } else if (tabId === 'approval-inbox') {
    renderApprovalList();
    renderApprovalDetails();
  } else if (tabId === 'po-management') {
    renderPoView();
  } else if (tabId === 'gr-receipt') {
    renderGrView();
  }

  // Update badge count
  updateBadgeCounts();

  // Scroll to top of main workspace smoothly on mobile
  const mainWorkspace = document.querySelector('main');
  if (mainWorkspace) {
    mainWorkspace.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// Update Badge Counts across header, sidebar & mobile dock
function updateBadgeCounts() {
  const pendingCount = state.approvals.filter(a => a.status.toLowerCase().includes('pending')).length;
  
  // Desktop Sidebar Badge
  const badgeEl = document.getElementById('inbox-badge-count');
  if (badgeEl) {
    badgeEl.textContent = pendingCount;
    badgeEl.style.display = pendingCount > 0 ? 'inline-flex' : 'none';
  }

  // Mobile Bottom Bar Badge
  const mobileBadgeEl = document.getElementById('mobile-inbox-badge-count');
  if (mobileBadgeEl) {
    mobileBadgeEl.textContent = pendingCount;
    mobileBadgeEl.style.display = pendingCount > 0 ? 'inline-flex' : 'none';
  }
}

/* =========================================================
   PAGE 1: PURCHASE REQUISITION (PR FORM)
========================================================= */

function renderPrTable() {
  const tbody = document.getElementById('pr-items-tbody');
  if (!tbody) return;

  tbody.innerHTML = '';
  let subtotal = 0;

  state.prItems.forEach((item, index) => {
    const itemTotal = item.qty * item.unitPrice;
    subtotal += itemTotal;

    const tr = document.createElement('tr');
    tr.className = 'border-b border-slate-800/80 hover:bg-slate-800/30 transition-colors';
    tr.innerHTML = `
      <td class="py-3 px-4 text-xs font-mono-num text-slate-400 text-center">${index + 1}</td>
      <td class="py-3 px-4">
        <input type="text" value="${item.description}" onchange="updatePrItem(${item.id}, 'description', this.value)"
          class="w-full bg-slate-900/80 border border-slate-700/60 rounded px-2.5 py-1.5 text-sm text-slate-100 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/30 font-medium"
          placeholder="Item name / specification..." />
      </td>
      <td class="py-3 px-4 w-24">
        <input type="number" min="1" value="${item.qty}" onchange="updatePrItem(${item.id}, 'qty', this.value)"
          class="w-full bg-slate-900/80 border border-slate-700/60 rounded px-2.5 py-1.5 text-sm font-mono-num text-center text-slate-100 focus:border-cyan-400 focus:outline-none" />
      </td>
      <td class="py-3 px-4 w-28">
        <select onchange="updatePrItem(${item.id}, 'unit', this.value)"
          class="w-full bg-slate-900/80 border border-slate-700/60 rounded px-2 py-1.5 text-xs text-slate-300 focus:border-cyan-400 focus:outline-none">
          <option value="Units" ${item.unit === 'Units' ? 'selected' : ''}>Units</option>
          <option value="Nodes" ${item.unit === 'Nodes' ? 'selected' : ''}>Nodes</option>
          <option value="Pcs" ${item.unit === 'Pcs' ? 'selected' : ''}>Pcs</option>
          <option value="Boxes" ${item.unit === 'Boxes' ? 'selected' : ''}>Boxes</option>
          <option value="Licenses" ${item.unit === 'Licenses' ? 'selected' : ''}>Licenses</option>
          <option value="Sets" ${item.unit === 'Sets' ? 'selected' : ''}>Sets</option>
        </select>
      </td>
      <td class="py-3 px-4 w-36">
        <div class="relative">
          <span class="absolute left-2.5 top-1.5 text-xs text-slate-400 font-mono-num">$</span>
          <input type="number" step="0.01" min="0" value="${item.unitPrice}" onchange="updatePrItem(${item.id}, 'unitPrice', this.value)"
            class="w-full bg-slate-900/80 border border-slate-700/60 rounded pl-6 pr-2 py-1.5 text-sm font-mono-num text-right text-slate-100 focus:border-cyan-400 focus:outline-none" />
        </div>
      </td>
      <td class="py-3 px-4 w-36 text-right font-mono-num font-semibold text-cyan-300 text-sm">
        ${formatUSD(itemTotal)}
      </td>
      <td class="py-3 px-4 text-center w-16">
        <button onclick="removePrItem(${item.id})" title="Delete item"
          class="p-1.5 text-slate-400 hover:text-rose-400 hover:bg-rose-950/30 rounded-lg transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });

  // Financial summary
  const tax = subtotal * 0.07;
  const grandTotal = subtotal + tax;

  const subtotalEl = document.getElementById('pr-subtotal');
  const taxEl = document.getElementById('pr-tax');
  const grandTotalEl = document.getElementById('pr-grand-total');

  if (subtotalEl) subtotalEl.textContent = formatUSD(subtotal);
  if (taxEl) taxEl.textContent = formatUSD(tax);
  if (grandTotalEl) grandTotalEl.textContent = formatUSD(grandTotal);
}

function addPrItem() {
  const newItem = {
    id: Date.now(),
    description: 'Hardware / Infrastructure Component Specification',
    qty: 1,
    unit: 'Units',
    unitPrice: 1250.00
  };
  state.prItems.push(newItem);
  renderPrTable();
  showToast('Item Added', 'New line item added to requisition table.', 'info');
}

function removePrItem(id) {
  if (state.prItems.length <= 1) {
    showToast('Cannot Remove', 'At least one requisition item is required.', 'warning');
    return;
  }
  state.prItems = state.prItems.filter(i => i.id !== id);
  renderPrTable();
  showToast('Item Removed', 'Item removed from table.', 'info');
}

function updatePrItem(id, field, value) {
  const item = state.prItems.find(i => i.id === id);
  if (!item) return;

  if (field === 'qty') {
    item.qty = Math.max(1, parseInt(value, 10) || 1);
  } else if (field === 'unitPrice') {
    item.unitPrice = Math.max(0, parseFloat(value) || 0);
  } else {
    item[field] = value;
  }
  renderPrTable();
}

function savePrDraft() {
  showToast('Draft Saved', 'Purchase Requisition draft saved to local secure cache.', 'info');
}

function submitPrForm() {
  const requisitionerSelect = document.getElementById('pr-requisitioner');
  const justificationText = document.getElementById('pr-justification');
  const priorityRadio = document.querySelector('input[name="pr-priority"]:checked');

  const requisitioner = requisitionerSelect ? requisitionerSelect.value : 'Marcus Vance';
  const priority = priorityRadio ? priorityRadio.value : 'Normal';
  const justification = justificationText && justificationText.value.trim() !== ''
    ? justificationText.value.trim()
    : 'Infrastructure refresh & capacity scaling';

  // Calculate total
  const totalAmount = state.prItems.reduce((sum, item) => sum + (item.qty * item.unitPrice), 0);
  const newPrNumber = `PR-2026-0${state.nextPrId++}`;

  // Create new pending approval
  const newApproval = {
    id: newPrNumber,
    requestedBy: requisitioner,
    role: 'Infrastructure Lead',
    department: 'Global Cloud Systems',
    totalAmount: totalAmount,
    priority: priority,
    status: 'Pending Dept Manager',
    currentStep: 1,
    justification: justification,
    items: state.prItems.map(i => ({
      description: i.description,
      qty: i.qty,
      unitPrice: i.unitPrice
    })),
    history: [
      { step: 1, approver: 'Jonathan Brooks', title: 'Dept Manager', status: 'Pending Review', timestamp: 'In Progress' },
      { step: 2, approver: 'Victoria Sterling', title: 'Finance Director', status: 'Queued', timestamp: 'Waiting for L1' },
      { step: 3, approver: 'Arthur Pendelton', title: 'VP Global Procurement', status: 'Queued', timestamp: 'Waiting for L2' }
    ]
  };

  state.approvals.unshift(newApproval);
  state.selectedApprovalId = newPrNumber;

  // Update PR Number for next form
  const prNumEl = document.getElementById('pr-number-input');
  if (prNumEl) prNumEl.value = `PR-2026-0${state.nextPrId}`;

  // Reset PR Items to a clean default
  state.prItems = [
    { id: Date.now(), description: 'Dell PowerEdge R760 Server Compute Node', qty: 2, unit: 'Nodes', unitPrice: 14200.00 }
  ];
  if (justificationText) justificationText.value = '';
  renderPrTable();
  updateBadgeCounts();

  showToast('Requisition Submitted', `${newPrNumber} submitted successfully! Transferred to Approval Inbox.`, 'success');

  // Automatically offer jump to approval inbox
  setTimeout(() => {
    switchTab('approval-inbox');
  }, 1000);
}

/* =========================================================
   PAGE 2: APPROVAL INBOX & WORKFLOW TIMELINE
========================================================= */

let currentInboxFilter = 'all';

function setInboxFilter(filter) {
  currentInboxFilter = filter;
  document.querySelectorAll('.inbox-filter-btn').forEach(btn => {
    if (btn.dataset.filter === filter) {
      btn.classList.add('bg-cyan-500/20', 'text-cyan-300', 'border-cyan-500/40');
      btn.classList.remove('text-slate-400', 'border-transparent');
    } else {
      btn.classList.remove('bg-cyan-500/20', 'text-cyan-300', 'border-cyan-500/40');
      btn.classList.add('text-slate-400', 'border-transparent');
    }
  });
  renderApprovalList();
}

function renderApprovalList() {
  const container = document.getElementById('approval-list-tbody');
  if (!container) return;

  container.innerHTML = '';

  let list = state.approvals;
  if (currentInboxFilter === 'pending') {
    list = list.filter(a => a.status.toLowerCase().includes('pending'));
  } else if (currentInboxFilter === 'approved') {
    list = list.filter(a => a.status === 'Approved');
  } else if (currentInboxFilter === 'rejected') {
    list = list.filter(a => a.status === 'Rejected');
  }

  if (list.length === 0) {
    container.innerHTML = `
      <tr>
        <td colspan="6" class="py-8 text-center text-slate-500 text-sm">
          No requisitions match the selected filter.
        </td>
      </tr>
    `;
    return;
  }

  list.forEach(item => {
    const isSelected = item.id === state.selectedApprovalId;
    const tr = document.createElement('tr');
    tr.className = `border-b border-slate-800/80 cursor-pointer transition-colors ${
      isSelected ? 'bg-cyan-950/30 border-l-4 border-l-cyan-400' : 'hover:bg-slate-800/40'
    }`;
    tr.onclick = () => {
      state.selectedApprovalId = item.id;
      renderApprovalList();
      renderApprovalDetails();
    };

    const priorityBadge = item.priority === 'Critical'
      ? '<span class="px-2 py-0.5 rounded text-[11px] font-semibold badge-critical">Critical</span>'
      : item.priority === 'Urgent'
      ? '<span class="px-2 py-0.5 rounded text-[11px] font-semibold badge-urgent">Urgent</span>'
      : '<span class="px-2 py-0.5 rounded text-[11px] font-semibold badge-normal">Normal</span>';

    const statusBadge = item.status === 'Approved'
      ? '<span class="px-2.5 py-1 rounded-full text-xs font-semibold badge-approved">Approved</span>'
      : item.status === 'Rejected'
      ? '<span class="px-2.5 py-1 rounded-full text-xs font-semibold badge-rejected">Rejected</span>'
      : `<span class="px-2.5 py-1 rounded-full text-xs font-semibold badge-pending">${item.status}</span>`;

    tr.innerHTML = `
      <td class="py-3 px-4 font-mono-num font-semibold text-cyan-300 text-sm">${item.id}</td>
      <td class="py-3 px-4">
        <div class="font-medium text-slate-100 text-sm">${item.requestedBy}</div>
        <div class="text-[11px] text-slate-400">${item.role || 'Team Member'}</div>
      </td>
      <td class="py-3 px-4 text-xs text-slate-300">${item.department}</td>
      <td class="py-3 px-4 font-mono-num font-semibold text-slate-100 text-sm">${formatUSD(item.totalAmount)}</td>
      <td class="py-3 px-4 text-center">${priorityBadge}</td>
      <td class="py-3 px-4 text-center">${statusBadge}</td>
    `;
    container.appendChild(tr);
  });
}

function renderApprovalDetails() {
  const approval = state.approvals.find(a => a.id === state.selectedApprovalId);
  const detailsContainer = document.getElementById('approval-details-panel');
  if (!detailsContainer) return;

  if (!approval) {
    detailsContainer.innerHTML = '<div class="p-8 text-center text-slate-500">Select a requisition from the list to inspect details.</div>';
    return;
  }

  // Calculate timeline steps visual
  const step1 = approval.history[0];
  const step2 = approval.history[1];
  const step3 = approval.history[2];

  const getStepClass = (stepIndex) => {
    if (approval.status === 'Rejected') {
      return approval.currentStep === stepIndex ? 'border-rose-500 bg-rose-500/20 text-rose-300' : 'upcoming';
    }
    if (stepIndex < approval.currentStep || approval.status === 'Approved') {
      return 'completed';
    } else if (stepIndex === approval.currentStep) {
      return 'active-step';
    } else {
      return 'upcoming';
    }
  };

  const getTrackClass = (stepBefore) => {
    if (approval.status === 'Approved') return 'filled';
    if (stepBefore < approval.currentStep) return 'filled';
    return '';
  };

  const isActionable = approval.status.toLowerCase().includes('pending');

  detailsContainer.innerHTML = `
    <!-- Top Meta Card -->
    <div class="p-4 sm:p-5 border-b border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
      <div>
        <div class="flex flex-wrap items-center gap-2 sm:gap-3">
          <h3 class="text-lg sm:text-xl font-bold text-white font-mono-num">${approval.id}</h3>
          <span class="px-2.5 py-0.5 rounded text-[11px] sm:text-xs font-semibold ${
            approval.priority === 'Critical' ? 'badge-critical' : approval.priority === 'Urgent' ? 'badge-urgent' : 'badge-normal'
          }">${approval.priority}</span>
          <span class="text-[11px] sm:text-xs text-slate-400">Dept: <strong class="text-slate-200">${approval.department}</strong></span>
        </div>
        <p class="text-xs text-slate-400 mt-1">Requisitioner: <span class="text-cyan-300 font-medium">${approval.requestedBy}</span> (${approval.role})</p>
      </div>

      <div class="flex sm:flex-col justify-between sm:text-right items-baseline sm:items-end pt-2 sm:pt-0 border-t border-slate-800/60 sm:border-0">
        <span class="text-xs text-slate-400 block">Total Amount</span>
        <span class="text-xl sm:text-2xl font-bold font-mono-num text-emerald-400">${formatUSD(approval.totalAmount)}</span>
      </div>
    </div>

    <!-- 3-Step Workflow Timeline Visual (Responsive for Mobile) -->
    <div class="px-3 sm:px-8 py-5 sm:py-6 bg-slate-900/60 border-b border-slate-800/80 overflow-hidden">
      <div class="text-[11px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider mb-5 flex items-center gap-2">
        <svg class="w-4 h-4 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        Multi-Tier Approval Hierarchy Workflow
      </div>

      <div class="relative flex items-center justify-between max-w-2xl mx-auto px-1 sm:px-4">
        <!-- Step 1: Dept Manager -->
        <div class="workflow-step flex-1 max-w-[120px]">
          <div class="workflow-node ${getStepClass(1)}">
            ${step1.status === 'Approved' ? '✓' : '1'}
          </div>
          <span class="text-[11px] sm:text-xs font-semibold text-slate-200 mt-2 text-center leading-tight">1. Dept Mgr</span>
          <span class="text-[10px] sm:text-[11px] text-cyan-400 font-medium text-center truncate w-full">${step1.approver}</span>
          <span class="text-[9px] sm:text-[10px] text-slate-400 mt-0.5 text-center leading-none">${step1.status}</span>
        </div>

        <div class="workflow-track ${getTrackClass(1)}"></div>

        <!-- Step 2: Finance Director -->
        <div class="workflow-step flex-1 max-w-[120px]">
          <div class="workflow-node ${getStepClass(2)}">
            ${step2.status === 'Approved' ? '✓' : '2'}
          </div>
          <span class="text-[11px] sm:text-xs font-semibold text-slate-200 mt-2 text-center leading-tight">2. Finance</span>
          <span class="text-[10px] sm:text-[11px] text-cyan-400 font-medium text-center truncate w-full">${step2.approver}</span>
          <span class="text-[9px] sm:text-[10px] text-slate-400 mt-0.5 text-center leading-none">${step2.status}</span>
        </div>

        <div class="workflow-track ${getTrackClass(2)}"></div>

        <!-- Step 3: VP Procurement -->
        <div class="workflow-step flex-1 max-w-[120px]">
          <div class="workflow-node ${getStepClass(3)}">
            ${step3.status === 'Approved' ? '✓' : '3'}
          </div>
          <span class="text-[11px] sm:text-xs font-semibold text-slate-200 mt-2 text-center leading-tight">3. VP Exec</span>
          <span class="text-[10px] sm:text-[11px] text-cyan-400 font-medium text-center truncate w-full">${step3.approver}</span>
          <span class="text-[9px] sm:text-[10px] text-slate-400 mt-0.5 text-center leading-none">${step3.status}</span>
        </div>
      </div>
    </div>

    <!-- Justification & Items List -->
    <div class="p-4 sm:p-6 space-y-5">
      <div>
        <h4 class="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">Business Justification</h4>
        <div class="bg-slate-900/90 border border-slate-800 rounded-lg p-3 text-xs text-slate-300 leading-relaxed font-sans">
          "${approval.justification}"
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between mb-2">
          <h4 class="text-xs font-semibold uppercase tracking-wider text-slate-400">Requisition Line Items</h4>
          <span class="sm:hidden text-[10px] text-cyan-400">Swipe table ➔</span>
        </div>
        <div class="overflow-x-auto rounded-lg border border-slate-800">
          <table class="w-full text-left text-xs min-w-[500px]">
            <thead class="bg-slate-900/90 text-slate-400 uppercase font-semibold border-b border-slate-800">
              <tr>
                <th class="py-2.5 px-3">Item Description</th>
                <th class="py-2.5 px-3 text-center">Qty</th>
                <th class="py-2.5 px-3 text-right">Unit Price</th>
                <th class="py-2.5 px-3 text-right">Subtotal</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-800/60 bg-slate-900/40 text-slate-300">
              ${approval.items.map(item => `
                <tr>
                  <td class="py-2.5 px-3 font-medium text-slate-100">${item.description}</td>
                  <td class="py-2.5 px-3 text-center font-mono-num">${item.qty}</td>
                  <td class="py-2.5 px-3 text-right font-mono-num text-slate-400">${formatUSD(item.unitPrice)}</td>
                  <td class="py-2.5 px-3 text-right font-mono-num text-cyan-300 font-semibold">${formatUSD(item.qty * item.unitPrice)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Action Panel: Approve / Reject -->
      ${isActionable ? `
        <div class="pt-4 border-t border-slate-800/80">
          <label class="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
            Executive Decision & Reviewer Comments
          </label>
          <textarea id="approval-review-notes" rows="2"
            placeholder="Add comments, operational clearance notes, or condition remarks..."
            class="w-full dark-textarea text-xs mb-4"></textarea>

          <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2.5">
            <button onclick="openRejectModal('${approval.id}')"
              class="w-full sm:w-auto px-5 py-3 sm:py-2.5 rounded-lg bg-rose-500/15 hover:bg-rose-500/25 border border-rose-500/40 text-rose-300 font-semibold text-xs tracking-wide transition-all flex items-center justify-center gap-2">
              <svg class="w-4 h-4 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              Reject Requisition
            </button>

            <button onclick="approveRequisition('${approval.id}')"
              class="w-full sm:w-auto px-6 py-3 sm:py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wide shadow-lg shadow-emerald-950/60 transition-all flex items-center justify-center gap-2 hover:shadow-emerald-500/20">
              <svg class="w-4 h-4 text-emerald-100" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              Approve Requisition
            </button>
          </div>
        </div>
      ` : `
        <div class="p-3.5 rounded-lg ${approval.status === 'Approved' ? 'bg-emerald-950/20 border border-emerald-500/30' : 'bg-rose-950/20 border border-rose-500/30'} flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <span class="text-slate-300">
            This requisition has already been <strong>${approval.status}</strong>.
          </span>
          ${approval.status === 'Approved' ? `
            <button onclick="jumpToPoCreation('${approval.id}')" class="w-full sm:w-auto px-4 py-2 rounded bg-cyan-600 hover:bg-cyan-500 text-white font-medium transition-colors text-center">
              Convert to PO ➔
            </button>
          ` : ''}
        </div>
      `}
    </div>
  `;
}

function approveRequisition(id) {
  const approval = state.approvals.find(a => a.id === id);
  if (!approval) return;

  const notes = document.getElementById('approval-review-notes') ? document.getElementById('approval-review-notes').value : '';

  // Advance step or finalize
  if (approval.currentStep < 3) {
    approval.history[approval.currentStep - 1].status = 'Approved';
    approval.history[approval.currentStep - 1].timestamp = new Date().toISOString().replace('T', ' ').substring(0, 16);
    approval.currentStep += 1;

    if (approval.currentStep === 2) {
      approval.status = 'Pending Finance';
      approval.history[1].status = 'Pending Review';
    } else if (approval.currentStep === 3) {
      approval.status = 'Pending Executive';
      approval.history[2].status = 'Pending Review';
    }
    showToast('Tier Approved', `${id} approved at current level and escalated to Tier ${approval.currentStep}.`, 'success');
  } else {
    approval.status = 'Approved';
    approval.history[2].status = 'Approved';
    approval.history[2].timestamp = new Date().toISOString().replace('T', ' ').substring(0, 16);

    // Add to approved PRs list for PO conversion
    state.approvedPrs.unshift({
      id: approval.id,
      requisitioner: approval.requestedBy,
      department: approval.department,
      title: approval.justification.substring(0, 40) + '...',
      vendorName: 'Apex Global Technologies Inc.',
      vendorAddress: '742 Evergreen Plaza, Suite 400, Austin, TX 78701, USA',
      vendorTaxId: 'US-EIN-94-3829104',
      creditTerm: 'Net 30 Days',
      vendorEmail: 'sales@apexglobal.tech',
      items: approval.items.map(i => ({
        description: i.description,
        qty: i.qty,
        unit: 'Units',
        unitPrice: i.unitPrice
      }))
    });

    showToast('Final Approval Granted', `${id} fully approved by VP Procurement! Ready for PO generation.`, 'success');
  }

  renderApprovalList();
  renderApprovalDetails();
  updateBadgeCounts();
}

function openRejectModal(id) {
  const modal = document.getElementById('reject-modal');
  const modalPrId = document.getElementById('modal-reject-pr-id');
  if (modal && modalPrId) {
    modalPrId.textContent = id;
    modalPrId.dataset.targetId = id;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function closeRejectModal() {
  const modal = document.getElementById('reject-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function confirmRejection() {
  const modalPrId = document.getElementById('modal-reject-pr-id');
  const reasonInput = document.getElementById('reject-reason-input');
  if (!modalPrId || !reasonInput) return;

  const id = modalPrId.dataset.targetId;
  const reason = reasonInput.value.trim();

  if (!reason) {
    showToast('Reason Required', 'Please provide an official business justification for rejection.', 'warning');
    reasonInput.focus();
    return;
  }

  const approval = state.approvals.find(a => a.id === id);
  if (approval) {
    approval.status = 'Rejected';
    approval.history[approval.currentStep - 1].status = `Rejected: ${reason}`;
    approval.history[approval.currentStep - 1].timestamp = new Date().toISOString().replace('T', ' ').substring(0, 16);

    showToast('Requisition Rejected', `${id} has been rejected with logged justification.`, 'error');
  }

  closeRejectModal();
  reasonInput.value = '';
  renderApprovalList();
  renderApprovalDetails();
  updateBadgeCounts();
}

function jumpToPoCreation(prId) {
  switchTab('po-management');
  const prSelect = document.getElementById('po-pr-select');
  if (prSelect) {
    prSelect.value = prId;
    handlePoPrSelectionChange(prId);
  }
}

/* =========================================================
   PAGE 3: PURCHASE ORDER (PO) GENERATOR
========================================================= */

function renderPoView() {
  const prSelect = document.getElementById('po-pr-select');
  if (!prSelect) return;

  prSelect.innerHTML = '';
  state.approvedPrs.forEach(pr => {
    const option = document.createElement('option');
    option.value = pr.id;
    option.textContent = `${pr.id} — ${pr.title} (${pr.requisitioner})`;
    prSelect.appendChild(option);
  });

  if (state.approvedPrs.length > 0) {
    handlePoPrSelectionChange(state.approvedPrs[0].id);
  }
}

function handlePoPrSelectionChange(prId) {
  const pr = state.approvedPrs.find(p => p.id === prId);
  if (!pr) return;

  // Fill Vendor Card
  document.getElementById('po-supplier-name').value = pr.vendorName || 'Apex Global Technologies Inc.';
  document.getElementById('po-supplier-address').value = pr.vendorAddress || '742 Evergreen Plaza, Suite 400, Austin, TX 78701, USA';
  document.getElementById('po-tax-id').value = pr.vendorTaxId || 'US-EIN-94-3829104';
  document.getElementById('po-credit-term').value = pr.creditTerm || 'Net 30 Days';

  // Fill Items Table
  const tbody = document.getElementById('po-items-tbody');
  if (!tbody) return;

  tbody.innerHTML = '';
  let subtotal = 0;

  pr.items.forEach((item, index) => {
    const itemTotal = item.qty * item.unitPrice;
    subtotal += itemTotal;

    const tr = document.createElement('tr');
    tr.className = 'border-b border-slate-800 text-xs text-slate-300';
    tr.innerHTML = `
      <td class="py-3 px-4 font-mono-num text-slate-400 text-center">${index + 1}</td>
      <td class="py-3 px-4 font-medium text-slate-100">${item.description}</td>
      <td class="py-3 px-4 text-center font-mono-num">${item.qty} ${item.unit || 'Units'}</td>
      <td class="py-3 px-4 text-right font-mono-num text-slate-300">${formatUSD(item.unitPrice)}</td>
      <td class="py-3 px-4 text-right font-mono-num font-semibold text-cyan-300">${formatUSD(itemTotal)}</td>
    `;
    tbody.appendChild(tr);
  });

  const vat = subtotal * 0.07;
  const grandTotal = subtotal + vat;

  document.getElementById('po-subtotal').textContent = formatUSD(subtotal);
  document.getElementById('po-vat').textContent = formatUSD(vat);
  document.getElementById('po-grand-total').textContent = formatUSD(grandTotal);
}

function generatePurchaseOrder() {
  const prSelect = document.getElementById('po-pr-select');
  const selectedPrId = prSelect ? prSelect.value : null;
  const pr = state.approvedPrs.find(p => p.id === selectedPrId);

  if (!pr) {
    showToast('Selection Error', 'Please select an approved PR first.', 'warning');
    return;
  }

  const supplierName = document.getElementById('po-supplier-name').value;
  const supplierAddress = document.getElementById('po-supplier-address').value;
  const newPoId = `PO-2026-0${state.nextPoId++}`;

  const newPO = {
    id: newPoId,
    prId: pr.id,
    vendorName: supplierName,
    vendorAddress: supplierAddress,
    deliveryNote: `DN-${Math.floor(100000 + Math.random() * 900000)}-X`,
    carrier: 'DHL International Worldwide Express',
    orderDate: new Date().toISOString().substring(0, 10),
    deliveryDate: new Date(Date.now() + 7 * 86400000).toISOString().substring(0, 10),
    items: pr.items.map((item, idx) => ({
      id: idx + 1,
      description: item.description,
      poQty: item.qty,
      receivedQty: item.qty,
      qcStatus: 'Pass',
      remarks: 'Inspected upon docking'
    }))
  };

  state.purchaseOrders.unshift(newPO);
  state.selectedPoId = newPoId;

  showToast('PO Issued', `Purchase Order ${newPoId} successfully issued to ${supplierName}!`, 'success');

  // Offer jump to GR
  setTimeout(() => {
    switchTab('gr-receipt');
  }, 1200);
}

function printPoDocument() {
  const prSelect = document.getElementById('po-pr-select');
  const selectedPrId = prSelect ? prSelect.value : null;
  const pr = state.approvedPrs.find(p => p.id === selectedPrId) || state.approvedPrs[0];
  const supplierName = document.getElementById('po-supplier-name').value;
  const supplierAddress = document.getElementById('po-supplier-address').value;
  const taxId = document.getElementById('po-tax-id').value;
  const creditTerm = document.getElementById('po-credit-term').value;

  const modal = document.getElementById('po-preview-modal');
  if (!modal) {
    window.print();
    return;
  }

  // Populate preview modal
  document.getElementById('modal-po-vendor-name').textContent = supplierName;
  document.getElementById('modal-po-vendor-address').textContent = supplierAddress;
  document.getElementById('modal-po-tax-id').textContent = taxId;
  document.getElementById('modal-po-terms').textContent = creditTerm;
  document.getElementById('modal-po-number').textContent = state.selectedPoId || 'PO-2026-1049';

  const tbody = document.getElementById('modal-po-items-tbody');
  if (tbody && pr) {
    tbody.innerHTML = '';
    let subtotal = 0;
    pr.items.forEach((item, idx) => {
      const itemTotal = item.qty * item.unitPrice;
      subtotal += itemTotal;
      const row = document.createElement('tr');
      row.className = 'border-b border-slate-700/60 text-xs';
      row.innerHTML = `
        <td class="py-2.5 px-3 text-center text-slate-400 font-mono">${idx + 1}</td>
        <td class="py-2.5 px-3 text-slate-100 font-medium">${item.description}</td>
        <td class="py-2.5 px-3 text-center font-mono">${item.qty} ${item.unit || 'Units'}</td>
        <td class="py-2.5 px-3 text-right font-mono">${formatUSD(item.unitPrice)}</td>
        <td class="py-2.5 px-3 text-right font-mono font-semibold text-cyan-300">${formatUSD(itemTotal)}</td>
      `;
      tbody.appendChild(row);
    });

    const vat = subtotal * 0.07;
    const grandTotal = subtotal + vat;
    document.getElementById('modal-po-subtotal').textContent = formatUSD(subtotal);
    document.getElementById('modal-po-vat').textContent = formatUSD(vat);
    document.getElementById('modal-po-grand-total').textContent = formatUSD(grandTotal);
  }

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closePoPreviewModal() {
  const modal = document.getElementById('po-preview-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function executeSystemPrint() {
  window.print();
}

function emailVendorModal() {
  const supplierName = document.getElementById('po-supplier-name').value;
  const modal = document.getElementById('email-vendor-modal');
  if (modal) {
    document.getElementById('email-modal-vendor-name').textContent = supplierName;
    document.getElementById('email-modal-po-code').textContent = state.selectedPoId || 'PO-2026-1049';
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  } else {
    showToast('Vendor Dispatched', `Official PO and cryptographic token encrypted & transmitted to ${supplierName}.`, 'success');
  }
}

function closeEmailVendorModal() {
  const modal = document.getElementById('email-vendor-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function sendVendorEmail() {
  const supplierName = document.getElementById('po-supplier-name').value;
  closeEmailVendorModal();
  showToast(
    'Transmission Dispatched',
    `Certified PO package with digital signature transmitted to ${supplierName}. Delivery receipt logged.`,
    'success'
  );
}

/* =========================================================
   PAGE 4: GOODS RECEIPT (GR) INSPECTION
========================================================= */

function renderGrView() {
  const poSelect = document.getElementById('gr-po-select');
  if (!poSelect) return;

  poSelect.innerHTML = '';
  state.purchaseOrders.forEach(po => {
    const opt = document.createElement('option');
    opt.value = po.id;
    opt.textContent = `${po.id} — ${po.vendorName} (${po.prId})`;
    poSelect.appendChild(opt);
  });

  if (state.purchaseOrders.length > 0) {
    poSelect.value = state.selectedPoId || state.purchaseOrders[0].id;
    handleGrPoSelectChange(poSelect.value);
  }
}

function handleGrPoSelectChange(poId) {
  state.selectedPoId = poId;
  const po = state.purchaseOrders.find(p => p.id === poId);
  if (!po) return;

  // Set lookup values
  document.getElementById('gr-delivery-note').value = po.deliveryNote;
  document.getElementById('gr-vendor-name-display').textContent = po.vendorName;
  document.getElementById('gr-carrier-display').textContent = po.carrier;
  document.getElementById('gr-order-date').textContent = po.orderDate;

  // Fill Receiving Items Table
  const tbody = document.getElementById('gr-items-tbody');
  if (!tbody) return;

  tbody.innerHTML = '';

  po.items.forEach((item, index) => {
    const tr = document.createElement('tr');
    tr.className = 'border-b border-slate-800 text-xs text-slate-300';
    tr.innerHTML = `
      <td class="py-3 px-4 font-mono-num text-slate-400 text-center">${index + 1}</td>
      <td class="py-3 px-4 font-medium text-slate-100">${item.description}</td>
      <td class="py-3 px-4 text-center font-mono-num text-slate-300">${item.poQty}</td>
      <td class="py-3 px-4 w-28 text-center">
        <input type="number" min="0" max="${item.poQty * 2}" value="${item.receivedQty}"
          onchange="updateGrReceivedQty('${po.id}', ${item.id}, this.value)"
          class="w-20 text-center bg-slate-900 border border-slate-700 rounded py-1 px-2 font-mono-num text-slate-100 focus:border-cyan-400 focus:outline-none" />
      </td>
      <td class="py-3 px-4 w-36 text-center">
        <select onchange="updateGrQcStatus('${po.id}', ${item.id}, this.value)"
          class="bg-slate-900 border border-slate-700 rounded py-1 px-2.5 text-xs focus:border-cyan-400 focus:outline-none ${
            item.qcStatus === 'Pass' ? 'text-emerald-400 font-semibold' : item.qcStatus === 'Damaged' ? 'text-amber-400 font-semibold' : 'text-rose-400 font-semibold'
          }">
          <option value="Pass" ${item.qcStatus === 'Pass' ? 'selected' : ''}>Pass (Accept)</option>
          <option value="Damaged" ${item.qcStatus === 'Damaged' ? 'selected' : ''}>Damaged (Hold)</option>
          <option value="Rejected" ${item.qcStatus === 'Rejected' ? 'selected' : ''}>Rejected (Return)</option>
        </select>
      </td>
      <td class="py-3 px-4">
        <input type="text" value="${item.remarks || ''}"
          onchange="updateGrRemarks('${po.id}', ${item.id}, this.value)"
          placeholder="Inspector remarks / serial numbers..."
          class="w-full bg-slate-900/60 border border-slate-800 rounded px-2.5 py-1 text-xs text-slate-300 focus:border-cyan-400 focus:outline-none" />
      </td>
    `;
    tbody.appendChild(tr);
  });

  renderUploadedProofList();
}

function updateGrReceivedQty(poId, itemId, value) {
  const po = state.purchaseOrders.find(p => p.id === poId);
  if (!po) return;
  const item = po.items.find(i => i.id === itemId);
  if (item) {
    item.receivedQty = parseInt(value, 10) || 0;
  }
}

function updateGrQcStatus(poId, itemId, value) {
  const po = state.purchaseOrders.find(p => p.id === poId);
  if (!po) return;
  const item = po.items.find(i => i.id === itemId);
  if (item) {
    item.qcStatus = value;
    handleGrPoSelectChange(poId);
  }
}

function updateGrRemarks(poId, itemId, value) {
  const po = state.purchaseOrders.find(p => p.id === poId);
  if (!po) return;
  const item = po.items.find(i => i.id === itemId);
  if (item) {
    item.remarks = value;
  }
}

function renderUploadedProofList() {
  const container = document.getElementById('gr-proof-list');
  if (!container) return;

  container.innerHTML = '';
  state.uploadedProofFiles.forEach((file, idx) => {
    const item = document.createElement('div');
    item.className = 'flex items-center justify-between p-2.5 rounded bg-slate-900/80 border border-slate-800 text-xs';
    item.innerHTML = `
      <div class="flex items-center gap-2 text-slate-300">
        <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
        <span class="font-medium text-slate-200">${file.name}</span>
        <span class="text-slate-500 font-mono-num">(${file.size})</span>
      </div>
      <button onclick="removeProofFile(${idx})" class="text-slate-500 hover:text-rose-400 transition-colors">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>
    `;
    container.appendChild(item);
  });
}

function addSimulatedProofUpload() {
  const samples = [
    { name: `carrier_delivery_photo_bay4_${Date.now().toString().slice(-4)}.jpg`, size: '2.9 MB' },
    { name: `customs_clearance_manifest_${Date.now().toString().slice(-4)}.pdf`, size: '820 KB' },
    { name: `packaging_qc_seal_verification.png`, size: '1.7 MB' }
  ];
  const randomSample = samples[Math.floor(Math.random() * samples.length)];
  state.uploadedProofFiles.push(randomSample);
  renderUploadedProofList();
  showToast('File Attached', `${randomSample.name} added to Goods Receipt dossier.`, 'info');
}

function removeProofFile(idx) {
  state.uploadedProofFiles.splice(idx, 1);
  renderUploadedProofList();
}

function confirmGoodsReceipt() {
  const poId = state.selectedPoId;
  const po = state.purchaseOrders.find(p => p.id === poId);
  if (!po) return;

  const newGrnNumber = `GRN-2026-0${state.nextGrnId++}`;

  showToast(
    'Goods Receipt Confirmed',
    `${newGrnNumber} registered for ${poId}! Inventory ledger updated & three-way matching clearance released.`,
    'success'
  );
}

// Initial Bootstrapping
document.addEventListener('DOMContentLoaded', () => {
  // Set initial PR Number
  const prNumEl = document.getElementById('pr-number-input');
  if (prNumEl) prNumEl.value = `PR-2026-0${state.nextPrId}`;

  // Hook tab buttons
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      if (tab) switchTab(tab);
    });
  });

  // Render initial view
  switchTab('pr-form');
});
