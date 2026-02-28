const ADMIN_ID = "admin";
const ADMIN_PASS = "1234";

// let reports = JSON.parse(localStorage.getItem("civicReports")) || [];

// function login() {
//   const id = document.getElementById("admin-id").value;
//   const pass = document.getElementById("admin-pass").value;

//   if (id === ADMIN_ID && pass === ADMIN_PASS) {
//     document.getElementById("login-box").style.display = "none";
//     document.getElementById("admin-dashboard").style.display = "block";
//     renderAdmin();
//   } else {
//     alert("Invalid credentials");
//   }
// }




function login() {
  const id = document.getElementById("admin-id").value;
  const pass = document.getElementById("admin-pass").value;

  if (id === ADMIN_ID && pass === ADMIN_PASS) {

    document.getElementById("login-box").style.display = "none";
    document.getElementById("admin-dashboard").style.display = "block";

    // 🔥 Button Switch
    document.getElementById("dashboard-btn").style.display = "none";
    document.getElementById("logout-btn").style.display = "inline-block";

    renderAdmin();

  } else {
    alert("Invalid credentials");
  }
}








function logout() {
  location.reload();
}

function renderAdmin() {
  // reports = JSON.parse(localStorage.getItem("civicReports")) || [];
  loadReports();
  renderStats();
  renderReports();
}

document.addEventListener("click", function () {
  setTimeout(() => {
    loadReports();
    renderStats();
    renderReports();
  }, 100);
});

function renderStats() {
  const open = reports.filter(r => r.status === "open").length;
  const progress = reports.filter(r => r.status === "progress").length;
  const resolved = reports.filter(r => r.status === "resolved").length;

  document.getElementById("admin-stats").innerHTML = `
    <div class="stat-card"><div class="stat-label">Total</div><div class="stat-value accent">${reports.length}</div></div>
    <div class="stat-card"><div class="stat-label">Open</div><div class="stat-value red">${open}</div></div>
    <div class="stat-card"><div class="stat-label">In Progress</div><div class="stat-value yellow">${progress}</div></div>
    <div class="stat-card"><div class="stat-label">Resolved</div><div class="stat-value green">${resolved}</div></div>
  `;
}


function changeStatus(index, status) {
  reports[index].status = status;
  localStorage.setItem("civicReports", JSON.stringify(reports));
  renderAdmin();
}

function deleteReport(index) {
  if (confirm("Delete this report?")) {
    reports.splice(index, 1);
    localStorage.setItem("civicReports", JSON.stringify(reports));
    renderAdmin();
  }
}