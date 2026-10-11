/**
 * ElderCare Connect - Care Support System MVP
 * Clean, efficient, offline-first care management for caretakers and volunteers.
 */

// Helper to refresh Lucide icons whenever content updates
function refreshIcons() {
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }
}

// Seed Data
const DEFAULT_DATA = {
  residents: [
    {
      id: "res-1",
      name: "Kamala Devi",
      age: "78 yrs, Female",
      room: "Room 101, Dorm A",
      mobility: "Needs Walking Stick",
      emergencyContact: "Ramesh (Son): +91 98450 11223",
      diet: "Diabetic, Low Sodium. Morning & Night Insulin.",
      tasks: {
        breakfast: true,
        hygiene: true,
        medsMorning: true,
        lunch: true,
        eveningWalk: false, // Pending
        medsNight: false   // Pending
      },
      healthNotes: "BP 138/88. Mild knee stiffness during morning routine."
    },
    {
      id: "res-2",
      name: "Ram Charan Shukla",
      age: "82 yrs, Male",
      room: "Room 102, Dorm A",
      mobility: "Wheelchair Bound",
      emergencyContact: "Sunita (Daughter): +91 97112 33445",
      diet: "Soft diet, Hypertension management.",
      tasks: {
        breakfast: true,
        hygiene: true,
        medsMorning: true,
        lunch: true,
        eveningWalk: true,
        medsNight: false // Pending
      },
      healthNotes: "Vitals stable. Requested afternoon reading time."
    },
    {
      id: "res-3",
      name: "Savitri Ben Patel",
      age: "74 yrs, Female",
      room: "Room 103, Dorm A",
      mobility: "Independent",
      emergencyContact: "Anand (Nephew): +91 99220 88776",
      diet: "Standard vegetarian diet.",
      tasks: {
        breakfast: true,
        hygiene: true,
        medsMorning: true,
        lunch: true,
        eveningWalk: true,
        medsNight: true // Completed
      },
      healthNotes: "Cataract review appointment scheduled at District Hospital."
    },
    {
      id: "res-4",
      name: "Abdul Karim",
      age: "85 yrs, Male",
      room: "Room 201, Dorm B",
      mobility: "Bedridden",
      emergencyContact: "Tariq (Grandson): +91 98990 44332",
      diet: "Liquid & pureed food. High protein supplement.",
      tasks: {
        breakfast: true,
        hygiene: true,
        medsMorning: true,
        lunch: true,
        eveningWalk: false, // Pending
        medsNight: false   // Pending
      },
      healthNotes: "Bed sore prevention dressing completed at 11:00 AM."
    },
    {
      id: "res-5",
      name: "Meenakshi Sundaram",
      age: "79 yrs, Female",
      room: "Room 202, Dorm B",
      mobility: "Needs Walking Stick",
      emergencyContact: "Caretaker Contact on File",
      diet: "Low sugar, warm herbal tea in evenings.",
      tasks: {
        breakfast: true,
        hygiene: true,
        medsMorning: true,
        lunch: true,
        eveningWalk: true,
        medsNight: false // Pending
      },
      healthNotes: "Blood sugar fasting: 126 mg/dL. Good appetite."
    },
    {
      id: "res-6",
      name: "Harish Chandra Verma",
      age: "81 yrs, Male",
      room: "Room 203, Dorm B",
      mobility: "Independent",
      emergencyContact: "Mohan (Brother): +91 94150 99881",
      diet: "Standard diet.",
      tasks: {
        breakfast: true,
        hygiene: true,
        medsMorning: true,
        lunch: true,
        eveningWalk: true,
        medsNight: true
      },
      healthNotes: "Routine observations normal."
    },
    // Seed remaining residents to total 24
    ...Array.from({ length: 18 }, (_, i) => {
      const idx = i + 7;
      const dorm = idx % 2 === 0 ? "Dorm A" : "Dorm B";
      return {
        id: `res-${idx}`,
        name: [
          "Ganga Devi", "Bhagwan Das", "Shanti Bai", "Mohinder Singh",
          "Lakshmi Narayanan", "Parvati Amma", "Dhanraj Sethi", "Kausalya Bai",
          "Govind Ballabh", "Nirmala Joshi", "Jagannath Prasad", "Pushpa Roy",
          "Satya Prakash", "Geeta Rani", "Kalyan Sundaram", "Usha Saxena",
          "Balram Yadav", "Saraswati Devi"
        ][i] || `Resident ${idx}`,
        age: `${70 + (idx % 15)} yrs`,
        room: `Room ${100 + idx}, ${dorm}`,
        mobility: idx % 4 === 0 ? "Wheelchair Bound" : (idx % 3 === 0 ? "Needs Walking Stick" : "Independent"),
        emergencyContact: `Family Contact: +91 98000 ${10000 + idx}`,
        diet: "Standard elderly nutritious meal.",
        tasks: {
          breakfast: true,
          hygiene: true,
          medsMorning: true,
          lunch: true,
          eveningWalk: true,
          medsNight: true
        },
        healthNotes: "Daily routine normal."
      };
    })
  ],

  maintenanceIssues: [
    {
      id: "iss-1",
      title: "Dormitory B Roof Water Leakage",
      location: "Dorm B Ceiling",
      urgency: "High",
      estimatedCost: 8500,
      status: "Open",
      reportedDate: "Yesterday",
      icon: "cloud-rain",
      photo: null,
      description: "Water seepage reported during heavy rain. Temporary tarp installed."
    },
    {
      id: "iss-2",
      title: "Bathroom Grab Bar Loose",
      location: "Bathroom 2, Dorm A",
      urgency: "High",
      estimatedCost: 1200,
      status: "In Progress",
      reportedDate: "3 days ago",
      icon: "wrench",
      photo: null,
      description: "Fastening screws loosened. Safety hazard for residents requiring assistance."
    },
    {
      id: "iss-3",
      title: "Dining Veranda Light Bulb Replacement",
      location: "Dining Hall",
      urgency: "Medium",
      estimatedCost: 800,
      status: "Resolved",
      reportedDate: "5 days ago",
      icon: "lightbulb",
      photo: null,
      description: "Replaced faulty tube with LED fitting."
    },
    {
      id: "iss-4",
      title: "Entrance Ramp Handrail Repair",
      location: "Entrance Ramp",
      urgency: "High",
      estimatedCost: 4000,
      status: "Resolved",
      reportedDate: "Last week",
      icon: "shield",
      photo: null,
      description: "Reinforced rail welded for wheelchair transit stability."
    }
  ],

  appointments: [
    {
      id: "apt-1",
      residentName: "Kamala Devi & Ram Charan",
      type: "Monthly Geriatric & Diabetic Checkup",
      doctor: "Dr. Rajesh Sharma",
      date: "Tomorrow, 10:30 AM",
      day: "12",
      month: "Oct",
      status: "Confirmed"
    },
    {
      id: "apt-2",
      residentName: "Savitri Ben Patel",
      type: "Cataract Referral Review",
      doctor: "District Hospital",
      date: "Thursday, 11:00 AM",
      day: "15",
      month: "Oct",
      status: "Transport Needed"
    },
    {
      id: "apt-3",
      residentName: "Abdul Karim",
      type: "Physiotherapy Session",
      doctor: "Mohan Das (Physiotherapist)",
      date: "Saturday, 4:00 PM",
      day: "17",
      month: "Oct",
      status: "Scheduled"
    }
  ],

  vitalsAlerts: [
    {
      id: "vit-1",
      residentName: "Kamala Devi",
      bp: "148/92 mmHg",
      sugar: "168 mg/dL post-meal",
      note: "Restricted sodium diet. Doctor review tomorrow.",
      urgency: "High"
    },
    {
      id: "vit-2",
      residentName: "Ram Charan",
      bp: "120/78 mmHg",
      sugar: "110 mg/dL fasting",
      note: "Stable readings. Continuing routine prescription.",
      urgency: "Normal"
    },
    {
      id: "vit-3",
      residentName: "Abdul Karim",
      bp: "132/84 mmHg",
      sugar: "Pulse 72 bpm regular",
      note: "Skin pressure inspection completed.",
      urgency: "Medium"
    }
  ],

  supplies: [
    { id: "sup-1", name: "Rice & Wheat Flour", needed: "50 kg", received: "25 kg", status: "Partial Stock" },
    { id: "sup-2", name: "Adult Incontinence Pads", needed: "6 Packs", received: "1 Pack", status: "Urgent" },
    { id: "sup-3", name: "Cooking Oil & Lentils", needed: "15 Litres", received: "10 Litres", status: "Sufficient" },
    { id: "sup-4", name: "Winter Blankets", needed: "12 Units", received: "4 Units", status: "Need Donors" },
    { id: "sup-5", name: "Paracetamol & Joint Ointment", needed: "10 Tubes", received: "6 Tubes", status: "Sufficient" }
  ],

  volunteers: [
    { id: "vol-1", name: "Priya Sharma", role: "Meal Serving & Evening Walk", hours: "Today 4:00 PM - 7:00 PM", phone: "+91 98760 12345" },
    { id: "vol-2", name: "Rahul Verma", role: "Grocery Transport & Reading", hours: "Tomorrow 10:00 AM - 1:00 PM", phone: "+91 98112 55443" },
    { id: "vol-3", name: "Ananya Sen", role: "Recreation & Reading", hours: "Sunday 3:00 PM - 6:00 PM", phone: "+91 99201 44332" }
  ],

  donations: [
    { date: "10 Oct 2026", donor: "Rotary Club Green City", type: "Monetary", item: "₹25,000", purpose: "Roof Repair & Medicine Fund", status: "Receipt Issued" },
    { date: "08 Oct 2026", donor: "Sunita & Ramesh Rao", type: "Monetary", item: "₹10,000", purpose: "Vegetable & Dairy Supply", status: "Allocated" },
    { date: "06 Oct 2026", donor: "Anand Medical Stores", type: "Goods", item: "First Aid & Hygiene Kit", purpose: "Healthcare Cabinet", status: "In Use" },
    { date: "03 Oct 2026", donor: "Community Trust", type: "Monetary", item: "₹13,200", purpose: "Entrance Ramp Handrail Repair", status: "Utilized" },
    { date: "01 Oct 2026", donor: "Local Merchant", type: "Goods", item: "50kg Wheat Sack", purpose: "Kitchen Rations", status: "Stored" }
  ]
};

// ==========================================
// STATE MANAGEMENT
// ==========================================
class AppState {
  constructor() {
    this.storageKey = "eldercare_connect_clean_v1";
    this.data = this.loadData();
    this.selectedResidentId = "res-1";
    this.currentFilter = "all";
    this.currentRole = "caretaker";
    this.uploadedImageBase64 = null;
  }

  loadData() {
    try {
      const stored = localStorage.getItem(this.storageKey);
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.warn("Storage load error", e);
    }
    return JSON.parse(JSON.stringify(DEFAULT_DATA));
  }

  saveData() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.data));
    } catch (e) {
      console.error("Storage save error", e);
    }
  }

  getCareStats() {
    let completedTasks = 0;
    let pendingResidentsCount = 0;
    const totalResidents = this.data.residents.length;

    this.data.residents.forEach(res => {
      const tasks = Object.values(res.tasks || {});
      const allDone = tasks.every(t => t === true);
      if (allDone) {
        completedTasks++;
      } else {
        pendingResidentsCount++;
      }
    });

    return {
      totalResidents,
      completedTasks,
      pendingResidentsCount
    };
  }
}

const state = new AppState();

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initDateDisplay();
  initNavigation();
  initResidentsModule();
  initHealthModule();
  initMaintenanceModule();
  initDonationsModule();
  initModals();
  initAccessibility();
  renderAllViews();
  refreshIcons();
});

function initDateDisplay() {
  const dateEl = document.getElementById("dashboard-date-str");
  if (dateEl) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date().toLocaleDateString('en-US', options);
    dateEl.innerHTML = `<strong>${today}</strong> &bull; Daily Care Summary`;
  }
}

function initNavigation() {
  const navBtns = document.querySelectorAll(".nav-btn");
  navBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetTab = btn.getAttribute("data-tab");
      switchTab(targetTab);
    });
  });

  const metricCards = document.querySelectorAll(".metric-card[data-nav-target]");
  metricCards.forEach(card => {
    card.addEventListener("click", () => {
      const target = card.getAttribute("data-nav-target");
      if (target) switchTab(target);
    });
  });

  const roleSelect = document.getElementById("role-select");
  if (roleSelect) {
    roleSelect.addEventListener("change", (e) => {
      state.currentRole = e.target.value;
      showToast(`Active role: ${roleSelect.options[roleSelect.selectedIndex].text}`, "success");
    });
  }

  const btnExport = document.getElementById("btn-quick-export");
  if (btnExport) {
    btnExport.addEventListener("click", () => {
      window.print();
    });
  }

  const btnQuickCare = document.getElementById("btn-new-care-round");
  if (btnQuickCare) {
    btnQuickCare.addEventListener("click", () => {
      switchTab("care");
    });
  }

  const btnSeeVol = document.getElementById("btn-see-all-volunteers");
  if (btnSeeVol) {
    btnSeeVol.addEventListener("click", () => {
      switchTab("donations");
    });
  }
}

function switchTab(tabId) {
  document.querySelectorAll(".nav-btn").forEach(b => {
    b.classList.toggle("active", b.getAttribute("data-tab") === tabId);
  });

  document.querySelectorAll(".tab-view").forEach(v => {
    v.classList.remove("active");
  });

  const activeView = document.getElementById(`view-${tabId}`);
  if (activeView) {
    activeView.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  refreshIcons();
}

// ==========================================
// RENDER VIEWS
// ==========================================
function renderAllViews() {
  renderDashboard();
  renderResidentsList();
  renderResidentDetail(state.selectedResidentId);
  renderHealthView();
  renderMaintenanceView();
  renderDonationsView();
  refreshIcons();
}

// 1. DASHBOARD
function renderDashboard() {
  const stats = state.getCareStats();

  document.getElementById("stat-residents-count").textContent = stats.totalResidents;
  document.getElementById("stat-tasks-progress").textContent = `${stats.completedTasks}/${stats.totalResidents}`;
  
  const percentage = Math.round((stats.completedTasks / stats.totalResidents) * 100);
  const progressBar = document.getElementById("stat-tasks-bar");
  if (progressBar) progressBar.style.width = `${percentage}%`;

  const remainingHint = document.getElementById("stat-tasks-remaining-hint");
  if (remainingHint) remainingHint.textContent = `${stats.pendingResidentsCount} tasks remaining`;

  const pendingBadge = document.getElementById("pending-tasks-badge");
  if (pendingBadge) pendingBadge.textContent = stats.pendingResidentsCount;

  const openRepairs = state.data.maintenanceIssues.filter(i => i.status !== "Resolved").length;
  document.getElementById("stat-open-repairs").textContent = openRepairs;
  const repairsBadge = document.getElementById("repairs-badge");
  if (repairsBadge) repairsBadge.textContent = openRepairs;

  // Priority List Items with clean Lucide icons
  const priorityContainer = document.getElementById("dashboard-priority-items");
  if (priorityContainer) {
    priorityContainer.innerHTML = `
      <div class="priority-item">
        <div class="priority-item-left">
          <div class="priority-icon-pill">
            <i data-lucide="clipboard-list"></i>
          </div>
          <div>
            <div class="priority-title">Complete pending care tasks</div>
            <div class="priority-desc">${stats.pendingResidentsCount} residents have evening walk or medicine checks remaining</div>
          </div>
        </div>
        <button class="priority-action-btn" onclick="switchTab('care')">Open Checklist</button>
      </div>

      <div class="priority-item">
        <div class="priority-item-left">
          <div class="priority-icon-pill">
            <i data-lucide="stethoscope"></i>
          </div>
          <div>
            <div class="priority-title">Confirm medical follow-up</div>
            <div class="priority-desc">Dr. Rajesh Sharma scheduled checkup for 3 residents tomorrow</div>
          </div>
        </div>
        <button class="priority-action-btn" onclick="switchTab('health')">View Schedule</button>
      </div>

      <div class="priority-item">
        <div class="priority-item-left">
          <div class="priority-icon-pill">
            <i data-lucide="wrench"></i>
          </div>
          <div>
            <div class="priority-title">Review roof repair request</div>
            <div class="priority-desc">Dormitory B ceiling repair request pending contractor confirmation</div>
          </div>
        </div>
        <button class="priority-action-btn" onclick="switchTab('maintenance')">View Issue</button>
      </div>
    `;
  }

  // Active Volunteers Mini List
  const volListEl = document.getElementById("active-volunteers-list");
  if (volListEl) {
    volListEl.innerHTML = state.data.volunteers.slice(0, 2).map(vol => `
      <div class="vol-mini-item">
        <div>
          <div class="vol-mini-name">${vol.name}</div>
          <div class="vol-mini-shift">${vol.role}</div>
        </div>
        <span class="badge badge-trust">${vol.hours.split(" ")[0]}</span>
      </div>
    `).join("");
  }

  // Urgent Supplies Mini List
  const supListEl = document.getElementById("urgent-supplies-list");
  if (supListEl) {
    supListEl.innerHTML = state.data.supplies.slice(0, 2).map(sup => `
      <div class="sup-mini-item">
        <div>
          <strong style="font-size:0.84rem; color: var(--blue-900);">${sup.name}</strong>
          <div style="font-size:0.75rem; color: var(--text-muted);">${sup.received} of ${sup.needed}</div>
        </div>
        <span class="badge ${sup.status === 'Urgent' ? 'badge-danger' : 'badge-warning'}">${sup.status}</span>
      </div>
    `).join("");
  }
}

// 2. RESIDENTS MODULE
function initResidentsModule() {
  const searchInput = document.getElementById("resident-search");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      renderResidentsList(e.target.value.toLowerCase());
      refreshIcons();
    });
  }

  const filterPills = document.querySelectorAll("#care-filter-pills .filter-pill");
  filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      filterPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      state.currentFilter = pill.getAttribute("data-filter");
      renderResidentsList();
      refreshIcons();
    });
  });

  const btnFilterPendingOnly = document.getElementById("btn-filter-pending-only");
  if (btnFilterPendingOnly) {
    btnFilterPendingOnly.addEventListener("click", () => {
      state.currentFilter = "pending";
      document.querySelectorAll("#care-filter-pills .filter-pill").forEach(p => {
        p.classList.toggle("active", p.getAttribute("data-filter") === "pending");
      });
      renderResidentsList();
      refreshIcons();
      showToast("Filtered by pending tasks", "info");
    });
  }
}

function renderResidentsList(searchTerm = "") {
  const grid = document.getElementById("residents-card-grid");
  if (!grid) return;

  let filtered = state.data.residents;

  if (state.currentFilter === "pending") {
    filtered = filtered.filter(r => Object.values(r.tasks || {}).some(t => t === false));
  } else if (state.currentFilter === "special") {
    filtered = filtered.filter(r => r.mobility.includes("Wheelchair") || r.mobility.includes("Bedridden"));
  } else if (state.currentFilter === "dorm-a") {
    filtered = filtered.filter(r => r.room.includes("Dorm A"));
  } else if (state.currentFilter === "dorm-b") {
    filtered = filtered.filter(r => r.room.includes("Dorm B"));
  }

  if (searchTerm) {
    filtered = filtered.filter(r => 
      r.name.toLowerCase().includes(searchTerm) || 
      r.room.toLowerCase().includes(searchTerm) || 
      r.diet.toLowerCase().includes(searchTerm)
    );
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 2rem; background: #ffffff; border-radius: var(--radius-md); border: 1px dashed var(--border-subtle); color: var(--text-muted); font-size: 0.88rem;">
        No resident matches found.
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(res => {
    const isSelected = res.id === state.selectedResidentId;
    const tasks = Object.values(res.tasks || {});
    const doneCount = tasks.filter(t => t === true).length;
    const allDone = doneCount === tasks.length;

    return `
      <div class="resident-card ${isSelected ? 'active-selected' : ''}" onclick="selectResident('${res.id}')">
        <div class="res-header">
          <div style="display:flex; align-items:center; gap: 0.65rem;">
            <div class="res-avatar">${res.name.charAt(0)}</div>
            <div class="res-info">
              <h4>${res.name}</h4>
              <span class="res-meta">${res.room} &bull; ${res.age}</span>
            </div>
          </div>
          <span class="badge ${allDone ? 'badge-success' : 'badge-warning'}">
            ${allDone ? 'Completed' : 'Pending'}
          </span>
        </div>

        <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.4rem;">
          <strong>Mobility:</strong> ${res.mobility}
        </div>

        <div class="res-task-checklist-preview">
          <span>Routines: <strong>${doneCount}/${tasks.length}</strong></span>
          <span class="res-task-status-pill ${allDone ? 'badge-success' : 'badge-warning'}">
            ${allDone ? 'Complete' : `${tasks.length - doneCount} Left`}
          </span>
        </div>
      </div>
    `;
  }).join("");
}

window.selectResident = function(resId) {
  state.selectedResidentId = resId;
  renderResidentsList();
  renderResidentDetail(resId);
  refreshIcons();
};

function renderResidentDetail(resId) {
  const panel = document.getElementById("resident-detail-panel");
  if (!panel) return;

  const res = state.data.residents.find(r => r.id === resId);
  if (!res) {
    panel.innerHTML = `
      <div class="panel-placeholder">
        <div class="placeholder-icon">
          <i data-lucide="user-check"></i>
        </div>
        <h3>Select a Resident</h3>
        <p>Choose a profile from the directory.</p>
      </div>
    `;
    return;
  }

  const tasks = res.tasks || {};

  panel.innerHTML = `
    <div style="display:flex; align-items:center; justify-content:space-between; border-bottom: 1px solid var(--border-subtle); padding-bottom: 0.85rem;">
      <div>
        <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--blue-900);">${res.name}</h3>
        <span style="font-size: 0.82rem; color: var(--text-muted);">${res.room} &bull; ${res.age}</span>
      </div>
      <a href="tel:${res.emergencyContact.replace(/[^0-9+]/g, '')}" class="btn btn-secondary" style="padding: 0.35rem 0.75rem; font-size: 0.78rem;">
        <i data-lucide="phone"></i>
        <span>Contact</span>
      </a>
    </div>

    <div style="background: var(--blue-50); border-radius: var(--radius-sm); padding: 0.75rem; margin-top: 0.85rem; font-size: 0.82rem;">
      <div style="margin-bottom: 0.3rem;"><strong>Emergency:</strong> ${res.emergencyContact}</div>
      <div style="margin-bottom: 0.3rem;"><strong>Diet:</strong> ${res.diet}</div>
      <div><strong>Clinical:</strong> ${res.healthNotes || "No acute warnings."}</div>
    </div>

    <div class="care-checklist-group">
      <div class="care-checklist-title">
        <span>Daily Care Routine</span>
        <span style="font-size: 0.75rem; font-weight: 600; color: var(--blue-700);">Auto-saved</span>
      </div>

      <div class="checklist-items">
        <label class="check-item ${tasks.breakfast ? 'done' : ''}">
          <input type="checkbox" ${tasks.breakfast ? 'checked' : ''} onchange="toggleCareTask('${res.id}', 'breakfast')">
          <span class="check-item-text">Morning Breakfast Served</span>
        </label>

        <label class="check-item ${tasks.hygiene ? 'done' : ''}">
          <input type="checkbox" ${tasks.hygiene ? 'checked' : ''} onchange="toggleCareTask('${res.id}', 'hygiene')">
          <span class="check-item-text">Hygiene & Bathing Assistance</span>
        </label>

        <label class="check-item ${tasks.medsMorning ? 'done' : ''}">
          <input type="checkbox" ${tasks.medsMorning ? 'checked' : ''} onchange="toggleCareTask('${res.id}', 'medsMorning')">
          <span class="check-item-text">Morning Medication</span>
        </label>

        <label class="check-item ${tasks.lunch ? 'done' : ''}">
          <input type="checkbox" ${tasks.lunch ? 'checked' : ''} onchange="toggleCareTask('${res.id}', 'lunch')">
          <span class="check-item-text">Lunch & Hydration</span>
        </label>

        <label class="check-item ${tasks.eveningWalk ? 'done' : ''}">
          <input type="checkbox" ${tasks.eveningWalk ? 'checked' : ''} onchange="toggleCareTask('${res.id}', 'eveningWalk')">
          <span class="check-item-text">Evening Mobilization / Walk</span>
        </label>

        <label class="check-item ${tasks.medsNight ? 'done' : ''}">
          <input type="checkbox" ${tasks.medsNight ? 'checked' : ''} onchange="toggleCareTask('${res.id}', 'medsNight')">
          <span class="check-item-text">Night Medication & Bedding</span>
        </label>
      </div>
    </div>

    <div style="margin-top: 1.15rem;">
      <button class="btn btn-secondary w-full" style="font-size: 0.8rem;" onclick="openHealthModalForResident('${res.id}')">
        <i data-lucide="plus"></i>
        <span>Log Vitals / Note</span>
      </button>
    </div>
  `;
}

window.toggleCareTask = function(resId, taskName) {
  const res = state.data.residents.find(r => r.id === resId);
  if (res && res.tasks) {
    res.tasks[taskName] = !res.tasks[taskName];
    state.saveData();
    renderDashboard();
    renderResidentsList();
    renderResidentDetail(resId);
    refreshIcons();
    showToast(`Care checklist updated for ${res.name}`, "success");
  }
};

window.openHealthModalForResident = function(resId) {
  const modal = document.getElementById("modal-log-health");
  if (modal) {
    const select = document.getElementById("health-res-select");
    if (select) select.value = resId;
    modal.classList.add("show");
    refreshIcons();
  }
};

// 3. HEALTH & APPOINTMENTS
function initHealthModule() {
  const btnDocCall = document.getElementById("btn-call-oncall-doc");
  if (btnDocCall) {
    btnDocCall.addEventListener("click", () => {
      window.location.href = "tel:+919876543210";
    });
  }

  const btnLogHealth = document.getElementById("btn-log-health-checkup");
  if (btnLogHealth) {
    btnLogHealth.addEventListener("click", () => {
      const modal = document.getElementById("modal-log-health");
      if (modal) {
        modal.classList.add("show");
        refreshIcons();
      }
    });
  }
}

function renderHealthView() {
  const resSelect = document.getElementById("health-res-select");
  if (resSelect) {
    resSelect.innerHTML = state.data.residents.map(r => `
      <option value="${r.id}">${r.name} (${r.room})</option>
    `).join("");
  }

  const aptList = document.getElementById("appointments-list");
  if (aptList) {
    aptList.innerHTML = state.data.appointments.map(apt => `
      <div class="apt-card">
        <div style="display:flex; gap: 0.85rem; align-items: flex-start;">
          <div class="apt-date-badge">
            <div class="apt-day">${apt.day}</div>
            <div class="apt-month">${apt.month}</div>
          </div>
          <div class="apt-details">
            <h4>${apt.residentName} - ${apt.type}</h4>
            <p><i data-lucide="stethoscope"></i> ${apt.doctor}</p>
            <p><i data-lucide="clock"></i> ${apt.date}</p>
          </div>
        </div>
        <span class="badge ${apt.status === 'Confirmed' ? 'badge-success' : 'badge-warning'}">
          ${apt.status}
        </span>
      </div>
    `).join("");
  }

  const vitalsList = document.getElementById("vitals-observations-list");
  if (vitalsList) {
    vitalsList.innerHTML = state.data.vitalsAlerts.map(vit => `
      <div class="vital-card">
        <div class="vital-details">
          <h4>${vit.residentName}</h4>
          <p>${vit.note}</p>
          <div class="vital-readings-pill">
            <span>BP: <strong>${vit.bp}</strong></span>
            <span>&bull;</span>
            <span>Notes: <strong>${vit.sugar}</strong></span>
          </div>
        </div>
        <span class="badge ${vit.urgency === 'High' ? 'badge-danger' : 'badge-primary'}">
          ${vit.urgency}
        </span>
      </div>
    `).join("");
  }

  const emGrid = document.getElementById("emergency-contacts-grid");
  if (emGrid) {
    emGrid.innerHTML = `
      <div class="emergency-contact-card">
        <div>
          <div class="em-title">Emergency Ambulance</div>
          <div class="em-sub">Toll-free 24x7 Ambulance Service (108)</div>
        </div>
        <a href="tel:108" class="em-phone-btn">
          <i data-lucide="phone"></i>
          <span>Call 108</span>
        </a>
      </div>

      <div class="emergency-contact-card">
        <div>
          <div class="em-title">Dr. Rajesh Sharma</div>
          <div class="em-sub">Consulting Physician (+91 98765 43210)</div>
        </div>
        <a href="tel:+919876543210" class="em-phone-btn">
          <i data-lucide="phone"></i>
          <span>Call Doctor</span>
        </a>
      </div>

      <div class="emergency-contact-card">
        <div>
          <div class="em-title">District Hospital</div>
          <div class="em-sub">Emergency Casualty (011-2345678)</div>
        </div>
        <a href="tel:0112345678" class="em-phone-btn">
          <i data-lucide="phone"></i>
          <span>Call Hospital</span>
        </a>
      </div>

      <div class="emergency-contact-card">
        <div>
          <div class="em-title">Lead Caretaker Backup</div>
          <div class="em-sub">Sister Mary / On-Duty Staff (+91 98123 45678)</div>
        </div>
        <a href="tel:+919812345678" class="em-phone-btn">
          <i data-lucide="phone"></i>
          <span>Call Staff</span>
        </a>
      </div>
    `;
  }
}

// 4. MAINTENANCE & FACILITY
function initMaintenanceModule() {
  const btnReport = document.getElementById("btn-report-issue-modal");
  if (btnReport) {
    btnReport.addEventListener("click", () => {
      const modal = document.getElementById("modal-report-issue");
      if (modal) {
        modal.classList.add("show");
        refreshIcons();
      }
    });
  }

  const filterBtns = document.querySelectorAll("#maintenance-filters .filter-pill");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderMaintenanceView(btn.getAttribute("data-status"));
      refreshIcons();
    });
  });

  const photoInput = document.getElementById("issue-photo");
  if (photoInput) {
    photoInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          state.uploadedImageBase64 = event.target.result;
          const previewArea = document.getElementById("upload-preview-area");
          if (previewArea) {
            previewArea.innerHTML = `<img src="${event.target.result}" style="max-height:80px; border-radius:6px;" alt="Attached photo"> <span style="font-size:0.75rem;">Photo Attached</span>`;
          }
        };
        reader.readAsDataURL(file);
      }
    });
  }
}

function renderMaintenanceView(statusFilter = "all") {
  let issues = state.data.maintenanceIssues;
  if (statusFilter === "open") {
    issues = issues.filter(i => i.status === "Open");
  } else if (statusFilter === "in-progress") {
    issues = issues.filter(i => i.status === "In Progress");
  } else if (statusFilter === "resolved") {
    issues = issues.filter(i => i.status === "Resolved");
  }

  const urgentCount = state.data.maintenanceIssues.filter(i => i.urgency === "High" && i.status !== "Resolved").length;
  const inProgCount = state.data.maintenanceIssues.filter(i => i.status === "In Progress").length;
  const resolvedCount = state.data.maintenanceIssues.filter(i => i.status === "Resolved").length;
  const totalCost = state.data.maintenanceIssues
    .filter(i => i.status !== "Resolved")
    .reduce((sum, item) => sum + (Number(item.estimatedCost) || 0), 0);

  const urgentEl = document.getElementById("fac-stat-urgent");
  if (urgentEl) urgentEl.textContent = urgentCount;

  const inProgEl = document.getElementById("fac-stat-in-progress");
  if (inProgEl) inProgEl.textContent = inProgCount;

  const resEl = document.getElementById("fac-stat-resolved");
  if (resEl) resEl.textContent = resolvedCount;

  const costEl = document.getElementById("fac-stat-est-cost");
  if (costEl) costEl.textContent = `₹${totalCost.toLocaleString('en-IN')}`;

  const issuesList = document.getElementById("maintenance-issues-list");
  if (!issuesList) return;

  if (issues.length === 0) {
    issuesList.innerHTML = `<p style="padding: 1.5rem; text-align: center; color: var(--text-muted); font-size: 0.88rem;">No issues recorded.</p>`;
    return;
  }

  issuesList.innerHTML = issues.map(iss => {
    let statusClass = "badge-danger";
    if (iss.status === "In Progress") statusClass = "badge-warning";
    if (iss.status === "Resolved") statusClass = "badge-success";

    const iconName = iss.icon || "wrench";

    return `
      <div class="issue-card">
        <div class="issue-thumbnail">
          ${iss.photo ? `<img src="${iss.photo}" alt="Attached photo">` : `<i data-lucide="${iconName}"></i>`}
        </div>

        <div class="issue-body">
          <h4>${iss.title}</h4>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.2rem;">${iss.description}</p>
          <div class="issue-meta">
            <span>Location: ${iss.location}</span>
            <span>&bull;</span>
            <span>Est. Cost: ₹${iss.estimatedCost}</span>
            <span>&bull;</span>
            <span>Reported: ${iss.reportedDate}</span>
          </div>
        </div>

        <div class="issue-actions">
          <span class="badge ${statusClass}">${iss.status}</span>
          ${iss.status !== "Resolved" ? `
            <button class="btn btn-secondary" style="padding: 0.35rem 0.75rem; font-size: 0.76rem;" onclick="markIssueResolved('${iss.id}')">
              Mark Resolved
            </button>
          ` : `
            <span style="font-size: 0.75rem; color: var(--green-pastel-text); font-weight: 700;">Completed</span>
          `}
        </div>
      </div>
    `;
  }).join("");
}

window.markIssueResolved = function(issueId) {
  const issue = state.data.maintenanceIssues.find(i => i.id === issueId);
  if (issue) {
    issue.status = "Resolved";
    state.saveData();
    renderDashboard();
    renderMaintenanceView();
    refreshIcons();
    showToast(`Issue marked resolved`, "success");
  }
};

// 5. VOLUNTEERS & DONATIONS
function initDonationsModule() {
  const btnRegVol = document.getElementById("btn-register-volunteer-modal");
  if (btnRegVol) {
    btnRegVol.addEventListener("click", () => {
      const modal = document.getElementById("modal-register-volunteer");
      if (modal) {
        modal.classList.add("show");
        refreshIcons();
      }
    });
  }

  const btnAddDon = document.getElementById("btn-add-donation-modal");
  if (btnAddDon) {
    btnAddDon.addEventListener("click", () => {
      const modal = document.getElementById("modal-add-donation");
      if (modal) {
        modal.classList.add("show");
        refreshIcons();
      }
    });
  }

  const btnAddSup = document.getElementById("btn-add-supply-item");
  if (btnAddSup) {
    btnAddSup.addEventListener("click", () => {
      const name = prompt("Enter required supply item:");
      if (name && name.trim()) {
        state.data.supplies.push({
          id: `sup-${Date.now()}`,
          name: name.trim(),
          needed: "Urgent",
          received: "0",
          status: "Need Donors"
        });
        state.saveData();
        renderDonationsView();
        refreshIcons();
        showToast("New supply need added to list", "success");
      }
    });
  }
}

function renderDonationsView() {
  const supList = document.getElementById("supplies-list");
  if (supList) {
    supList.innerHTML = state.data.supplies.map(sup => `
      <div class="supply-item-row">
        <div>
          <div class="supply-name">${sup.name}</div>
          <div class="supply-status">Target: ${sup.needed} &bull; Received: ${sup.received}</div>
        </div>
        <span class="badge ${sup.status === 'Urgent' ? 'badge-danger' : (sup.status === 'Need Donors' ? 'badge-warning' : 'badge-success')}">
          ${sup.status}
        </span>
      </div>
    `).join("");
  }

  const volList = document.getElementById("volunteers-roster");
  if (volList) {
    volList.innerHTML = state.data.volunteers.map(vol => `
      <div class="vol-card">
        <div>
          <div class="vol-name">${vol.name}</div>
          <div class="vol-info">${vol.role} &bull; <strong>${vol.hours}</strong></div>
        </div>
        <a href="tel:${vol.phone.replace(/[^0-9+]/g, '')}" class="btn btn-secondary" style="font-size: 0.78rem; padding: 0.35rem 0.7rem;">
          <i data-lucide="phone"></i>
          <span>Call</span>
        </a>
      </div>
    `).join("");
  }

  const donBody = document.getElementById("donations-table-body");
  if (donBody) {
    donBody.innerHTML = state.data.donations.map(don => `
      <tr>
        <td>${don.date}</td>
        <td><strong>${don.donor}</strong></td>
        <td><span class="badge ${don.type === 'Monetary' ? 'badge-primary' : 'badge-trust'}">${don.type}</span></td>
        <td><strong style="color:var(--blue-900);">${don.item}</strong></td>
        <td>${don.purpose}</td>
        <td><span class="badge badge-success">${don.status}</span></td>
      </tr>
    `).join("");
  }
}

// ==========================================
// MODAL CONTROLS & FORMS
// ==========================================
function initModals() {
  document.querySelectorAll("[data-close-modal]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".modal-backdrop").forEach(m => m.classList.remove("show"));
    });
  });

  const btnSos = document.getElementById("btn-emergency-sos");
  if (btnSos) {
    btnSos.addEventListener("click", () => {
      const modal = document.getElementById("modal-sos");
      if (modal) {
        modal.classList.add("show");
        refreshIcons();
      }
    });
  }

  const btnOpenAddRes = document.getElementById("btn-add-resident-modal");
  if (btnOpenAddRes) {
    btnOpenAddRes.addEventListener("click", () => {
      const modal = document.getElementById("modal-add-resident");
      if (modal) {
        modal.classList.add("show");
        refreshIcons();
      }
    });
  }

  const formAddRes = document.getElementById("form-add-resident");
  if (formAddRes) {
    formAddRes.addEventListener("submit", (e) => {
      e.preventDefault();
      const newRes = {
        id: `res-${Date.now()}`,
        name: document.getElementById("res-name").value,
        age: document.getElementById("res-age").value,
        room: document.getElementById("res-room").value,
        mobility: document.getElementById("res-mobility").value,
        emergencyContact: document.getElementById("res-emergency").value,
        diet: document.getElementById("res-diet").value || "Standard diet",
        tasks: {
          breakfast: false,
          hygiene: false,
          medsMorning: false,
          lunch: false,
          eveningWalk: false,
          medsNight: false
        },
        healthNotes: "New registration profile."
      };

      state.data.residents.unshift(newRes);
      state.selectedResidentId = newRes.id;
      state.saveData();

      document.querySelectorAll(".modal-backdrop").forEach(m => m.classList.remove("show"));
      formAddRes.reset();
      renderAllViews();
      showToast(`Resident ${newRes.name} registered`, "success");
    });
  }

  const formIssue = document.getElementById("form-report-issue");
  if (formIssue) {
    formIssue.addEventListener("submit", (e) => {
      e.preventDefault();
      const newIssue = {
        id: `iss-${Date.now()}`,
        title: document.getElementById("issue-title").value,
        location: document.getElementById("issue-location").value,
        urgency: document.getElementById("issue-urgency").value,
        estimatedCost: Number(document.getElementById("issue-cost").value) || 0,
        status: document.getElementById("issue-status").value,
        reportedDate: "Just now",
        icon: "wrench",
        photo: state.uploadedImageBase64 || null,
        description: `Issue at ${document.getElementById("issue-location").value}`
      };

      state.data.maintenanceIssues.unshift(newIssue);
      state.uploadedImageBase64 = null;
      state.saveData();

      document.querySelectorAll(".modal-backdrop").forEach(m => m.classList.remove("show"));
      formIssue.reset();
      const previewArea = document.getElementById("upload-preview-area");
      if (previewArea) previewArea.innerHTML = `<i data-lucide="camera" style="margin-right:6px;"></i><span>Choose photo or capture</span>`;

      renderDashboard();
      renderMaintenanceView();
      refreshIcons();
      showToast("Facility issue reported", "success");
    });
  }

  const formVol = document.getElementById("form-register-volunteer");
  if (formVol) {
    formVol.addEventListener("submit", (e) => {
      e.preventDefault();
      const newVol = {
        id: `vol-${Date.now()}`,
        name: document.getElementById("vol-name").value,
        phone: document.getElementById("vol-phone").value,
        role: document.getElementById("vol-task").value,
        hours: document.getElementById("vol-hours").value || "General shifts"
      };

      state.data.volunteers.unshift(newVol);
      state.saveData();

      document.querySelectorAll(".modal-backdrop").forEach(m => m.classList.remove("show"));
      formVol.reset();
      renderDashboard();
      renderDonationsView();
      refreshIcons();
      showToast(`Volunteer ${newVol.name} registered`, "success");
    });
  }

  const formDon = document.getElementById("form-add-donation");
  if (formDon) {
    formDon.addEventListener("submit", (e) => {
      e.preventDefault();
      const today = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
      const newDon = {
        date: today,
        donor: document.getElementById("don-donor").value,
        type: document.getElementById("don-type").value,
        item: document.getElementById("don-amount").value,
        purpose: document.getElementById("don-purpose").value || "General Care",
        status: "Recorded"
      };

      state.data.donations.unshift(newDon);
      state.saveData();

      document.querySelectorAll(".modal-backdrop").forEach(m => m.classList.remove("show"));
      formDon.reset();
      renderDonationsView();
      refreshIcons();
      showToast("Donation logged", "success");
    });
  }

  const formHealth = document.getElementById("form-log-health");
  if (formHealth) {
    const dateInput = document.getElementById("health-date");
    if (dateInput) dateInput.value = new Date().toISOString().split('T')[0];

    formHealth.addEventListener("submit", (e) => {
      e.preventDefault();
      const resId = document.getElementById("health-res-select").value;
      const res = state.data.residents.find(r => r.id === resId);
      const bp = document.getElementById("health-bp").value || "Normal";
      const notes = document.getElementById("health-notes").value;
      const sugar = document.getElementById("health-sugar").value || "Vitals recorded";

      if (res) {
        res.healthNotes = `${notes} (BP: ${bp})`;
      }

      state.data.vitalsAlerts.unshift({
        id: `vit-${Date.now()}`,
        residentName: res ? res.name : "Resident",
        bp: bp,
        sugar: sugar,
        note: notes,
        urgency: bp.includes("High") ? "High" : "Normal"
      });

      state.saveData();
      document.querySelectorAll(".modal-backdrop").forEach(m => m.classList.remove("show"));
      formHealth.reset();
      renderAllViews();
      refreshIcons();
      showToast("Health observation saved", "success");
    });
  }
}

// ==========================================
// ACCESSIBILITY & TOASTS
// ==========================================
function initAccessibility() {
  const btnFont = document.getElementById("btn-font-toggle");

  // Restore saved preference
  const isSavedLarge = localStorage.getItem("eldercare_large_font") === "true";
  if (isSavedLarge) {
    document.documentElement.classList.add("font-size-large");
    document.body.classList.add("font-size-large");
    if (btnFont) btnFont.classList.add("active");
  }

  if (btnFont) {
    btnFont.addEventListener("click", () => {
      const isLargeNow = document.body.classList.toggle("font-size-large");
      document.documentElement.classList.toggle("font-size-large", isLargeNow);
      btnFont.classList.toggle("active", isLargeNow);
      localStorage.setItem("eldercare_large_font", isLargeNow ? "true" : "false");
      showToast(isLargeNow ? "Large text enabled" : "Standard text restored", "info");
    });
  }
}

function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  let iconName = "info";
  if (type === "success") iconName = "check";
  if (type === "danger") iconName = "alert-triangle";

  toast.innerHTML = `
    <i data-lucide="${iconName}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  refreshIcons();

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}
