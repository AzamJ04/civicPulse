
const reports = [
  {
    id: '0001', title: 'Deep pothole causing tyre damage', category: 'road', catIcon: '🛣', catClass: 'cat-road',
    priority: 'high', status: 'resolved', location: 'MG Road, near Sector 14 signal', votes: 41,
    time: '3 days ago', reporter: 'Verified Citizen', verified: true, anonymous: false, flagged: false,
    gps: { lat: 28.6139, lng: 77.2090, accuracy: 8, address: 'MG Road, Sector 14, New Delhi' },
    photo: null,
    description: 'Large pothole approximately 50cm wide and 20cm deep in the left lane. Multiple vehicles have damaged tyres. Particularly dangerous at night.',
    timeline: [
      { label: 'Report Submitted', desc: 'Via CivicPulse — Verified Citizen', date: 'Feb 25, 09:10 AM', done: true },
      { label: 'AI Triage Complete', desc: 'Auto-classified HIGH. Routed to Road Maintenance Dept.', date: 'Feb 25, 09:10 AM', done: true },
      { label: 'Crew Dispatched', desc: 'Repair team assigned, materials arranged', date: 'Feb 25, 02:30 PM', done: true },
      { label: 'Resolved ✓', desc: 'Pothole filled and surface levelled.', date: 'Feb 26, 11:00 AM', done: true },
    ],
    comms: [
      { author: 'Road Maintenance Dept', isAuthority: true, text: 'Confirmed on inspection. Repair crew scheduled for tomorrow morning.', date: '11:45 AM' },
      { author: 'Verified Citizen', isAuthority: false, text: 'Thank you! Please also check 100m ahead — similar issue forming.', date: '12:10 PM' },
      { author: 'Road Maintenance Dept', isAuthority: true, text: 'Both spots have been patched. Issue is now resolved.', date: 'Feb 26, 11:05 AM' },
    ]
  },
  {
    id: '0002', title: 'Water main burst flooding street', category: 'water', catIcon: '💧', catClass: 'cat-water',
    priority: 'critical', status: 'resolved', location: 'sarojni nagar', votes: 67,
    time: '5 days ago', reporter: 'Anonymous Citizen', verified: false, anonymous: true, flagged: false,
    gps: { lat: 28.6200, lng: 77.2150, accuracy: 12, address: 'Cedar Blvd, Sector 9, New Delhi' },
    photo: null,
    description: 'Water main burst near intersection. Water flooding the road and nearby park. Multiple households have no water supply.',
    timeline: [
      { label: 'Report Submitted', desc: 'Via CivicPulse — Anonymous Citizen', date: 'Feb 23, 07:12 AM', done: true },
      { label: 'AI Triage — CRITICAL', desc: 'Bypassed manual review. Routed immediately to Water Authority.', date: 'Feb 23, 07:12 AM', done: true },
      { label: 'Emergency Crew Dispatched', desc: 'Crew on site within 25 minutes', date: 'Feb 23, 07:38 AM', done: true },
      { label: 'Resolved ✓', desc: 'Main repaired, water supply restored to all households.', date: 'Feb 23, 01:20 PM', done: true },
    ],
    comms: [
      { author: 'Water Authority', isAuthority: true, text: 'Emergency crew dispatched. Please avoid the area and do not use tap water until further notice.', date: '07:40 AM' },
      { author: 'Water Authority', isAuthority: true, text: 'Repair complete. Water supply fully restored. Thank you for the fast report.', date: '01:22 PM' },
    ]
  },
  {
    id: '0003', title: 'Overflowing garbage bins — residential colony', category: 'sanitation', catIcon: '🗑', catClass: 'cat-sanitation',
    priority: 'medium', status: 'resolved', location: 'Block C, Vasant Kunj', votes: 29,
    time: '4 days ago', reporter: 'Verified Citizen', verified: true, anonymous: false, flagged: false,
    gps: { lat: 28.5200, lng: 77.1600, accuracy: 15, address: 'Block C, Vasant Kunj, New Delhi' },
    photo: null,
    description: 'Garbage bins in Block C have not been emptied for 5 days. Bins overflowing onto the road. Strong odour, attracting stray dogs and rodents.',
    timeline: [
      { label: 'Report Submitted', desc: 'Via CivicPulse — Verified Citizen', date: 'Feb 24, 08:00 AM', done: true },
      { label: 'AI Triage Complete', desc: 'Priority: MEDIUM. Routed to Sanitation Dept.', date: 'Feb 24, 08:00 AM', done: true },
      { label: 'Collection Scheduled', desc: 'Emergency pickup arranged', date: 'Feb 24, 10:30 AM', done: true },
      { label: 'Resolved ✓', desc: 'All bins cleared, area sanitised.', date: 'Feb 24, 04:00 PM', done: true },
    ],
    comms: [
      { author: 'Sanitation Dept', isAuthority: true, text: 'Apologies for the delay. Emergency collection team dispatched today. Area will be cleaned and sanitised.', date: '10:35 AM' },
    ]
  },
  {
    id: '0004', title: 'Streetlights out — entire stretch dark', category: 'utility', catIcon: '⚡', catClass: 'cat-utility',
    priority: 'high', status: 'progress', location: 'Kalkaji Mandir', votes: 38,
    time: '2 days ago', reporter: 'Verified Citizen', verified: true, anonymous: false, flagged: false,
    gps: { lat: 28.6350, lng: 77.2250, accuracy: 10, address: '12th Street, Harbor Blvd, New Delhi' },
    photo: null,
    description: '7 consecutive streetlights have been non-functional for 4 days. The stretch is completely dark at night. Two pedestrian near-miss incidents reported.',
    timeline: [
      { label: 'Report Submitted', desc: 'Via CivicPulse — Verified Citizen', date: 'Feb 26, 08:45 PM', done: true },
      { label: 'AI Triage Complete', desc: 'Linked with 2 nearby reports. Grid fault suspected.', date: 'Feb 26, 08:45 PM', done: true },
      { label: 'Electricals Dept Assigned', desc: 'Specialist crew scheduled — grid inspection underway', date: 'Feb 27, 09:00 AM', active: true },
      { label: 'Resolved', desc: '', date: 'ETA: Feb 28', done: false },
    ],
    comms: [
      { author: 'Electrical Works Dept', isAuthority: true, text: 'We have identified a grid fault affecting this entire stretch. Specialist crew will restore all lights by end of day tomorrow.', date: '10:00 AM' },
      { author: 'Verified Citizen', isAuthority: false, text: 'Please prioritise — a cyclist nearly fell last night due to the darkness.', date: '10:45 AM' },
      { author: 'Electrical Works Dept', isAuthority: true, text: 'Noted. We have escalated priority. Temporary lighting will be placed tonight as a safety measure.', date: '11:15 AM' },
    ]
  },
  {
    id: '0005', title: 'Sewage drain overflow — health risk', category: 'sanitation', catIcon: '🗑', catClass: 'cat-sanitation',
    priority: 'high', status: 'progress', location: 'Central Park, Dwarka', votes: 54,
    time: '1 day ago', reporter: 'Anonymous Citizen', verified: false, anonymous: true, flagged: false,
    gps: { lat: 28.6480, lng: 77.2310, accuracy: 20, address: 'Oak Street, Central Delhi' },
    photo: null,
    description: 'Sewage drain overflowing. Raw sewage pooling on the pavement and spilling into the park. Extremely strong odour. Children play in this park daily.',
    timeline: [
      { label: 'Report Submitted', desc: 'Via CivicPulse — Anonymous Citizen', date: 'Feb 27, 06:30 AM', done: true },
      { label: 'Held for Manual Review', desc: 'Anonymous submission verified via GPS + photo.', date: 'Feb 27, 07:00 AM', done: true },
      { label: 'Sewage & Drainage Dept Assigned', desc: 'Crew availability being arranged', date: 'Feb 27, 09:00 AM', active: true },
      { label: 'Resolved', desc: '', date: '', done: false },
    ],
    comms: []
  },
  {
    id: '0006', title: 'Broken footpath — wheelchair inaccessible', category: 'road', catIcon: '🛣', catClass: 'cat-road',
    priority: 'medium', status: 'open', location: 'Greenway Park Entrance, Sector 21', votes: 19,
    time: '6 hours ago', reporter: 'Verified Citizen', verified: true, anonymous: false, flagged: false,
    gps: { lat: 28.5900, lng: 77.1900, accuracy: 6, address: 'Greenway Park, Sector 21, New Delhi' },
    photo: null,
    description: 'Large section of footpath has collapsed near the park entrance. Completely blocks wheelchair and pram access. Elderly residents have complained.',
    timeline: [
      { label: 'Report Submitted', desc: 'Via CivicPulse — Verified Citizen', date: 'Feb 28, 04:00 AM', done: true },
      { label: 'AI Triage Complete', desc: 'Priority: MEDIUM. Routed to Road Maintenance.', date: 'Feb 28, 04:00 AM', done: true },
      { label: 'Awaiting Assignment', desc: 'In queue for crew scheduling', date: '', active: true },
      { label: 'Resolved', desc: '', date: '', done: false },
    ],
    comms: []
  },
  {
    id: '0007', title: 'Illegal construction blocking public road', category: 'safety', catIcon: '🚨', catClass: 'cat-safety',
    priority: 'high', status: 'open', location: 'Near Metro Station, Lajpat Nagar', votes: 33,
    time: '3 hours ago', reporter: 'Verified Citizen', verified: true, anonymous: false, flagged: false,
    gps: { lat: 28.5700, lng: 77.2400, accuracy: 9, address: 'Lajpat Nagar Metro, New Delhi' },
    photo: null,
    description: 'Unauthorized construction material dumped across half the public road near the metro station. One lane completely blocked. Causing major traffic congestion and safety risk for two-wheelers.',
    timeline: [
      { label: 'Report Submitted', desc: 'Via CivicPulse — Verified Citizen', date: 'Feb 28, 07:15 AM', done: true },
      { label: 'AI Triage Complete', desc: 'Priority: HIGH. Routed to Safety & Encroachment Dept.', date: 'Feb 28, 07:15 AM', done: true },
      { label: 'Awaiting Department Action', desc: '', date: '', active: true },
      { label: 'Resolved', desc: '', date: '', done: false },
    ],
    comms: []
  },
  {
    id: '0008', title: 'Stray dog menace near school', category: 'safety', catIcon: '🚨', catClass: 'cat-safety',
    priority: 'critical', status: 'open', location: 'St. Mary\'s School Gate, Saket', votes: 72,
    time: '1 hour ago', reporter: 'Anonymous Citizen', verified: false, anonymous: true, flagged: false,
    gps: { lat: 28.5280, lng: 77.2140, accuracy: 14, address: 'Saket, South Delhi' },
    photo: null,
    description: 'Pack of 8–10 aggressive stray dogs near the school main gate. Two children bitten this week. Parents are scared to drop children in the morning. Urgent intervention needed.',
    timeline: [
      { label: 'Report Submitted', desc: 'Via CivicPulse — Anonymous Citizen', date: 'Feb 28, 09:00 AM', done: true },
      { label: 'AI Triage — CRITICAL', desc: 'Child safety risk. Bypassed review. Routed to Animal Control & MCD.', date: 'Feb 28, 09:00 AM', done: true },
      { label: 'Awaiting Emergency Response', desc: '', date: '', active: true },
      { label: 'Resolved', desc: '', date: '', done: false },
    ],
    comms: []
  },
  {
    id: '0009', title: 'Leaking water pipe — footpath waterlogged', category: 'water', catIcon: '💧', catClass: 'cat-water',
    priority: 'medium', status: 'open', location: 'Rajouri Garden, Block B Market', votes: 14,
    time: '30 min ago', reporter: 'Verified Citizen', verified: true, anonymous: false, flagged: false,
    gps: { lat: 28.6447, lng: 77.1220, accuracy: 11, address: 'Rajouri Garden Block B, New Delhi' },
    photo: null,
    description: 'Underground water pipe leaking under the footpath outside the market. Entire area waterlogged. Shopkeepers reporting water entering their shops. Mosquito breeding risk.',
    timeline: [
      { label: 'Report Submitted', desc: 'Via CivicPulse — Verified Citizen', date: 'Feb 28, 09:30 AM', done: true },
      { label: 'AI Triage Complete', desc: 'Priority: MEDIUM. Routed to Water & Drainage.', date: 'Feb 28, 09:30 AM', done: true },
      { label: 'Awaiting Crew Assignment', desc: '', date: '', active: true },
      { label: 'Resolved', desc: '', date: '', done: false },
    ],
    comms: []
  },
  {
    id: '0010', title: 'Graffiti & vandalism on public wall', category: 'other', catIcon: '📌', catClass: 'cat-other',
    priority: 'low', status: 'open', location: 'Community Centre, Dwarka Sector 6', votes: 7,
    time: '15 min ago', reporter: 'Verified Citizen', verified: true, anonymous: false, flagged: false,
    gps: { lat: 28.5921, lng: 77.0460, accuracy: 18, address: 'Dwarka Sector 6, New Delhi' },
    photo: null,
    description: 'Extensive graffiti and vandalism on the outer wall of the community centre. Obscene content visible to children. Wall was freshly painted last month.',
    timeline: [
      { label: 'Report Submitted', desc: 'Via CivicPulse — Verified Citizen', date: 'Feb 28, 09:45 AM', done: true },
      { label: 'AI Triage Complete', desc: 'Priority: LOW. Routed to Parks & Public Spaces Dept.', date: 'Feb 28, 09:45 AM', done: true },
      { label: 'Awaiting Assignment', desc: '', date: '', active: true },
      { label: 'Resolved', desc: '', date: '', done: false },
    ],
    comms: []
  },
];
let nextId = 11;

// --- VERIFICATION STATE ---
let reportMode = null; // 'verified' | 'anonymous'
let verifiedUser = null;       // { contact, trustScore, reportCount, anonymous }
let generatedOtp = null;
let otpContact = null;
const abuseLog = {};

function chooseMode(mode) {
  reportMode = mode;
  document.getElementById('step-choose').style.display = 'none';
  if (mode === 'verified') {
    document.getElementById('step-verify').style.display = 'block';
  } else {
    verifiedUser = { contact: null, trustScore: 30, reportCount: 0, anonymous: true };
    openReportForm('anonymous');
  }
}

function backToChoose() {
  reportMode = null;
  verifiedUser = null;
  document.getElementById('step-verify').style.display = 'none';
  document.getElementById('step-form').style.display = 'none';
  document.getElementById('step-choose').style.display = 'block';
  document.getElementById('verify-badge').style.display = 'none';
  document.getElementById('otp-row').style.display = 'none';
  document.getElementById('send-otp-btn-wrap').style.display = 'block';
  document.getElementById('verify-contact').value = '';
}

function openReportForm(mode) {
  document.getElementById('step-form').style.display = 'block';
  const badge = document.getElementById('verify-badge');
  const banner = document.getElementById('mode-banner');
  badge.style.display = 'flex';

  if (mode === 'verified') {
    badge.innerHTML = '<span style="color:var(--green)">✓</span>&nbsp;Verified';
    banner.style.cssText = 'display:flex;align-items:flex-start;gap:8px;padding:10px 12px;border-radius:4px;margin-bottom:14px;font-size:10px;line-height:1.6;background:rgba(68,255,136,0.06);border:1px solid rgba(68,255,136,0.2);color:var(--green)';
    banner.innerHTML = '✓ Identity verified — your report will be fast-tracked and directly actioned by the relevant department.';
  } else {
    badge.innerHTML = '🕵️&nbsp;Anonymous';
    badge.style.color = 'var(--muted)';
    banner.style.cssText = 'display:flex;align-items:flex-start;gap:8px;padding:10px 12px;border-radius:4px;margin-bottom:14px;font-size:10px;line-height:1.6;background:rgba(255,184,0,0.05);border:1px solid rgba(255,184,0,0.2);color:var(--yellow)';
    banner.innerHTML = `🕵️ <span><strong style="color:var(--text)">Anonymous mode</strong> — no personal data collected or stored.<br>
      <span style="color:var(--muted)">Reports require GPS + photo proof and go through manual review before publishing. Critical issues bypass review automatically.</span>
      <button onclick="chooseMode('verified')" style="display:inline-block;margin-top:6px;background:none;border:1px solid rgba(232,255,71,0.3);color:var(--accent);font-family:'Space Mono',monospace;font-size:9px;padding:3px 8px;border-radius:3px;cursor:pointer">Switch to Verified instead →</button></span>`;
    // Anonymous always requires photo
    document.getElementById('photo-group').style.display = 'block';
  }

  if (PHOTO_REQUIRED_CATS.has(selectedCat)) {
    document.getElementById('photo-group').style.display = 'block';
  }
}


function sendOtp() {
  const contact = document.getElementById('verify-contact').value.trim();
  if (!contact) { showToast('⚠️ Enter a phone number or email'); return; }
  if (abuseLog[contact]?.flagged) {
    showToast('🚫 This contact has been flagged for abuse');
    document.getElementById('verify-contact').style.borderColor = 'var(--red)';
    return;
  }
  otpContact = contact;
  generatedOtp = String(Math.floor(100000 + Math.random() * 900000));
  console.info(`[DEV] OTP for ${contact}: ${generatedOtp}`); // visible in browser console
  document.getElementById('send-otp-btn-wrap').style.display = 'none';
  document.getElementById('otp-row').style.display = 'block';
  document.getElementById('otp-hint').textContent = `OTP sent to ${contact} (check browser console in demo mode)`;
  showToast('📨 OTP sent! Check your contact.');
}

function resendOtp() {
  generatedOtp = String(Math.floor(100000 + Math.random() * 900000));
  console.info(`[DEV] Resent OTP for ${otpContact}: ${generatedOtp}`);
  document.getElementById('otp-hint').textContent = `New OTP sent to ${otpContact}`;
  showToast('📨 New OTP sent!');
}

function verifyOtp() {
  const entered = document.getElementById('otp-input').value.trim();
  if (entered !== generatedOtp) {
    document.getElementById('otp-input').style.borderColor = 'var(--red)';
    document.getElementById('otp-hint').textContent = '✗ Incorrect OTP. Try again.';
    document.getElementById('otp-hint').style.color = 'var(--red)';
    setTimeout(() => document.getElementById('otp-input').style.borderColor = '', 1500);
    return;
  }
  // Verified!
  const existing = abuseLog[otpContact] || { count: 0, flagged: false };
  verifiedUser = { contact: otpContact, trustScore: existing.flagged ? 0 : 100, reportCount: existing.count, anonymous: false };
  document.getElementById('step-verify').style.display = 'none';
  openReportForm('verified');
  showToast('✓ Identity verified!');
}

function checkAbuseRisk(contact, title, desc) {
  const log = abuseLog[contact] || { count: 0, lastTs: 0 };
  const now = Date.now();
  const timeSinceLast = now - log.lastTs;
  const warnings = [];

  if (log.count >= 5 && timeSinceLast < 3600000) {
    warnings.push('You have submitted 5+ reports in the last hour. Further reports will be reviewed before publishing.');
  }
  if (log.count >= 10) {
    warnings.push('High report volume from this contact. Reports are now subject to manual verification.');
    abuseLog[contact] = { ...log, flagged: true };
  }
  const spamWords = ['test','fake','prank','hello','asdf','lol','haha','xxx','abc'];
  if (spamWords.some(w => (title+desc).toLowerCase().includes(w))) {
    warnings.push('Your report contains keywords that may indicate it is not genuine. False reports are a punishable offence.');
  }
  return warnings;
}

let currentSearch = '';
let selectedCat = 'road';
let votedReports = new Set();
let activeReport = null;

// GPS & PHOTO STATE
let capturedGPS = null;
let capturedPhoto = null;
const PHOTO_REQUIRED_CATS = new Set(['road', 'sanitation', 'water', 'safety']);

// --- GPS ---
function captureGPS() {
  const box = document.getElementById('gps-box');
  const result = document.getElementById('gps-result');
  box.innerHTML = `<div style="font-size:11px;color:var(--muted);padding:8px 0"><span style="display:inline-block;width:8px;height:8px;background:var(--accent);border-radius:50%;margin-right:6px;animation:blink 1s infinite"></span>Requesting GPS location…</div>`;

  if (!navigator.geolocation) {
    showGpsError('Geolocation not supported by your browser.');
    return;
  }

  navigator.geolocation.getCurrentPosition(
    async (pos) => {
      const { latitude: lat, longitude: lng, accuracy } = pos.coords;
      const address = await reverseGeocode(lat, lng);
      capturedGPS = { lat, lng, accuracy: Math.round(accuracy), address };
      document.getElementById('issue-location').value = address;
      box.innerHTML = '';
      result.style.display = 'block';
      result.style.background = 'rgba(68,255,136,0.06)';
      result.style.border = '1px solid rgba(68,255,136,0.2)';
      result.style.color = 'var(--green)';
      result.innerHTML = `✓ GPS captured — ±${capturedGPS.accuracy}m accuracy<br>
        <span style="color:var(--muted);font-size:9px">📍 ${address}<br>
        ${lat.toFixed(5)}, ${lng.toFixed(5)} &nbsp;·&nbsp; Embedded in report metadata</span>
        <button onclick="captureGPS()" style="display:block;margin-top:8px;background:none;border:1px solid rgba(68,255,136,0.3);color:var(--green);font-family:'Space Mono',monospace;font-size:9px;padding:4px 10px;border-radius:3px;cursor:pointer">🔄 Refresh</button>`;
    },
    (err) => {
      const msgs = {1:'Location permission denied — please enable in browser settings.',2:'Position unavailable.',3:'Request timed out.'};
      showGpsError(msgs[err.code] || 'Unknown error.');
    },
    { enableHighAccuracy: true, timeout: 10000 }
  );
}

function showGpsError(msg) {
  document.getElementById('gps-box').innerHTML = `
    <div style="font-size:11px;color:var(--red);margin-bottom:8px">⚠ ${msg}</div>
    <button class="submit-btn" style="padding:8px 16px;font-size:10px;width:auto;display:inline-block" onclick="captureGPS()">📍 Try Again</button>`;
}

async function reverseGeocode(lat, lng) {
  try {
    const res = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`);
    const data = await res.json();
    return data.display_name?.split(',').slice(0,3).join(', ').trim() || `${lat.toFixed(4)}, ${lng.toFixed(4)}`;
  } catch { return `${lat.toFixed(5)}, ${lng.toFixed(5)}`; }
}

// --- PHOTO ---
function handlePhotoUpload(e) {
  const file = e.target.files[0];
  if (file) processPhoto(file);
}

function processPhoto(file) {
  const warn = document.getElementById('photo-warning');
  if (!file.type.startsWith('image/')) { warn.style.display='block'; warn.textContent='⚠ Please take a photo using your camera.'; return; }
  if (file.size > 10*1024*1024) { warn.style.display='block'; warn.textContent='⚠ Image must be under 10MB.'; return; }

  // Recency check — photo must have been taken within the last 2 minutes
  const fileAge = Date.now() - file.lastModified;
  if (fileAge > 2 * 60 * 1000) {
    warn.style.display = 'block';
    warn.innerHTML = '⚠ This photo was not taken just now. You must take a new photo on the spot.<br><span style="color:var(--muted)">Gallery and saved images are not accepted.</span>';
    document.getElementById('photo-input').value = '';
    return;
  }

  warn.style.display = 'none';
  const reader = new FileReader();
  reader.onload = (ev) => {
    const dataUrl = ev.target.result;
    const now = new Date();
    capturedPhoto = { dataUrl, filename: file.name, sizeKB: Math.round(file.size/1024), timestamp: now.toISOString(), gpsMatch: !!capturedGPS };
    document.getElementById('preview-img').src = dataUrl;
    document.getElementById('photo-drop').style.display = 'none';
    document.getElementById('photo-preview').style.display = 'block';
    document.getElementById('photo-meta').innerHTML = `
      <span>📸 Taken just now</span>
      <span>💾 ${capturedPhoto.sizeKB} KB</span>
      <span>🕐 ${now.toLocaleTimeString()}</span>
      ${capturedPhoto.gpsMatch ? '<span style="color:var(--green)">✓ GPS matched</span>' : '<span style="color:var(--yellow)">⚠ GPS unverified</span>'}`;
  };
  reader.readAsDataURL(file);
}

function clearPhoto() {
  capturedPhoto = null;
  document.getElementById('photo-input').value = '';
  document.getElementById('photo-preview').style.display = 'none';
  document.getElementById('photo-drop').style.display = 'block';
  document.getElementById('photo-warning').style.display = 'none';
}

let currentFilter = 'all';

function renderReports() {
  const list = document.getElementById('reports-list');
  let filtered = reports.filter(r => {
    const matchFilter = currentFilter === 'all' || r.category === currentFilter || 
      (currentFilter === 'critical' && r.priority === 'critical');
    const matchSearch = !currentSearch || 
      r.title.toLowerCase().includes(currentSearch) || 
      r.location.toLowerCase().includes(currentSearch);
    return matchFilter && matchSearch;
  });

  list.innerHTML = filtered.length ? filtered.map((r, i) => `
    <div class="report-card ${r.priority}" onclick="openModal(reports.find(x=>x.id==='${r.id}'))"
      style="animation: fadeUp 0.4s ${i*0.05}s ease both">
      <div class="category-icon ${r.catClass}">${r.catIcon}</div>
      <div class="report-info">
        <div class="report-title">#${r.id} — ${r.title}</div>
        <div class="report-meta">
          <span class="location">📍 ${r.location}</span>
          <span>🕐 ${r.time}</span>
          <span>${r.anonymous ? '🕵️ <span style="color:var(--muted)">Anonymous</span>' : r.verified ? '✓ <span style="color:var(--green)">Verified</span>' : '👤 ' + r.reporter}</span>
        </div>
      </div>
      <div class="report-right">
        <span class="status-badge status-${r.status}">${r.status === 'progress' ? 'In Progress' : r.status === 'open' ? 'Open' : r.status === 'flagged' ? '🔍 Under Review' : 'Resolved'}</span>
        <span class="priority-badge pri-${r.priority}">${r.priority}</span>
        <button class="upvote-btn ${votedReports.has(r.id) ? 'voted' : ''}" 
          onclick="event.stopPropagation(); toggleVote('${r.id}', this)">
          ▲ <span class="vote-count-${r.id}">${r.votes + (votedReports.has(r.id) ? 1 : 0)}</span>
        </button>
      </div>
    </div>
  `).join('') : `<div style="text-align:center;padding:48px 24px;color:var(--muted);font-size:12px;border:1px dashed var(--border);border-radius:8px;line-height:2">
    <div style="font-size:32px;margin-bottom:12px">📭</div>
    <div style="color:var(--text);font-family:'Fraunces',serif;font-size:18px;margin-bottom:8px">No issues yet</div>
    Be the first to report a civic issue in your area using the form →
  </div>`;
}

function filterReports(type, btn) {
  currentFilter = type;
  document.querySelectorAll('.filter-chip').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderReports();
}

function searchReports(val) {
  currentSearch = val.toLowerCase();
  renderReports();
}

function toggleVote(id, btn) {
  if (votedReports.has(id)) {
    votedReports.delete(id);
    btn.classList.remove('voted');
  } else {
    votedReports.add(id);
    btn.classList.add('voted');
  }
  renderReports();
}

function selectCat(btn, cat) {
  selectedCat = cat;
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  // Show/hide photo requirement
  const photoGroup = document.getElementById('photo-group');
  if (photoGroup) {
    if (PHOTO_REQUIRED_CATS.has(cat) || (verifiedUser && verifiedUser.anonymous)) {
      photoGroup.style.display = 'block';
    } else {
      photoGroup.style.display = 'none';
      clearPhoto();
    }
  }
}

function openModal(report) {
  if (!report) return;
  activeReport = report;
  // Clear any previously injected photo block
  const oldPhoto = document.getElementById('modal-photo-block');
  if (oldPhoto) oldPhoto.remove();
  document.getElementById('modal-title').textContent = `#${report.id} — ${report.title}`;
  document.getElementById('modal-badges').innerHTML = `
    <span class="status-badge status-${report.status}">${report.status === 'progress' ? 'In Progress' : report.status === 'open' ? 'Open' : report.status === 'flagged' ? '🔍 Under Review' : 'Resolved'}</span>
    <span class="priority-badge pri-${report.priority}" style="padding:3px 8px">${report.priority.toUpperCase()} PRIORITY</span>
    <span class="ai-tag"><div class="ai-dot"></div> AI Classified</span>
  `;
  document.getElementById('modal-meta').innerHTML = `
    📍 ${report.location} &nbsp;·&nbsp; 🕐 ${report.time} &nbsp;·&nbsp; 
    ${report.anonymous ? '🕵️ <span style="color:var(--muted)">Anonymous Citizen</span>' : report.verified ? '✓ <span style="color:var(--green)">Verified Citizen</span>' : '👤 ' + report.reporter} &nbsp;·&nbsp; 
    ▲ ${report.votes} upvotes
    ${report.gps ? `<br><span style="color:var(--muted);font-size:9px">🛰 GPS: ${report.gps.lat?.toFixed(5)}, ${report.gps.lng?.toFixed(5)} &nbsp;·&nbsp; ±${report.gps.accuracy}m accuracy</span>` : ''}
  `;
  document.getElementById('modal-desc').textContent = report.description;

  // Photo evidence
  const photoHtml = report.photo ? `
    <div id="modal-photo-block" style="margin-bottom:20px">
      <div style="font-size:11px;text-transform:uppercase;letter-spacing:2px;color:var(--muted);margin-bottom:10px">Photo Evidence</div>
      <img src="${report.photo.dataUrl}" style="width:100%;border-radius:6px;border:1px solid var(--border);max-height:220px;object-fit:cover">
      <div style="font-size:9px;color:var(--muted);margin-top:6px;display:flex;gap:12px;flex-wrap:wrap">
        <span>📄 ${report.photo.filename}</span>
        <span>💾 ${report.photo.sizeKB} KB</span>
        <span>🕐 ${new Date(report.photo.timestamp).toLocaleString()}</span>
        <span style="color:${report.photo.gpsMatch ? 'var(--green)' : 'var(--yellow)'}">${report.photo.gpsMatch ? '✓ GPS matched' : '⚠ GPS unverified'}</span>
      </div>
    </div>` : '';

  document.getElementById('modal-desc').insertAdjacentHTML('afterend', photoHtml);

  document.getElementById('modal-timeline').innerHTML = report.timeline.map(t => `
    <div class="timeline-item">
      <div class="timeline-dot ${t.active ? 'active' : t.done ? 'done' : ''}"></div>
      <div class="timeline-label" style="color:${t.done ? 'var(--green)' : t.active ? 'var(--accent)' : 'var(--muted)'}">${t.label}</div>
      ${t.desc ? `<div class="timeline-desc">${t.desc}</div>` : ''}
      ${t.date ? `<div class="timeline-date">${t.date}</div>` : ''}
    </div>
  `).join('');

  renderComms(report.comms);

  document.getElementById('modal-overlay').classList.add('open');
}

function renderComms(comms) {
  document.getElementById('modal-comms').innerHTML = comms.length ? comms.map(c => `
    <div class="comm-msg ${c.isAuthority ? 'authority' : ''}">
      <div class="comm-msg-header">
        <span class="comm-author ${c.isAuthority ? '' : 'citizen'}">${c.isAuthority ? '🏛 ' : '👤 '}${c.author}</span>
        <span class="comm-date">${c.date}</span>
      </div>
      <div class="comm-text">${c.text}</div>
    </div>
  `).join('') : '<div style="font-size:11px;color:var(--muted);padding:8px 0">No messages yet. Be the first to comment.</div>';
}

function sendComment() {
  const input = document.getElementById('comm-input');
  const text = input.value.trim();
  if (!text || !activeReport) return;
  
  const now = new Date();
  const time = now.toLocaleTimeString('en-US', {hour:'2-digit', minute:'2-digit'});
  activeReport.comms.push({ author: 'You (Citizen)', isAuthority: false, text, date: time });
  renderComms(activeReport.comms);
  input.value = '';
  
  // Simulate authority response
  setTimeout(() => {
    activeReport.comms.push({ 
      author: 'Civic Department', isAuthority: true, 
      text: 'Thank you for your update. We have logged your comment and our team will review it.', 
      date: new Date().toLocaleTimeString('en-US', {hour:'2-digit', minute:'2-digit'}) 
    });
    renderComms(activeReport.comms);
  }, 2000);
}

function closeModal(event) {
  if (event && event.target !== document.getElementById('modal-overlay')) return;
  document.getElementById('modal-overlay').classList.remove('open');
}

function classifyPriority(title, desc, category) {
  const text = (title + ' ' + desc + ' ' + category).toLowerCase();
  const critical = ['burst','collapse','explosion','fire','flood','gas leak','sewage overflow','raw sewage','electrical hazard','live wire','structural failure','sinkhole','danger','emergency','injury','injured','accident','blocked emergency','water main'];
  const high = ['pothole','damage','broken','overflow','outage','power out','no water','leak','safety','hazard','risk','overflowing','illegal dump','graffiti','vandal','dead animal','fallen tree','obstruct','block'];
  const medium = ['crack','worn','faded','missing','flickering','slow','smell','odour','noise','complaint','debris','litter'];
  if (critical.some(k => text.includes(k))) return 'critical';
  if (high.some(k => text.includes(k))) return 'high';
  if (medium.some(k => text.includes(k))) return 'medium';
  return 'low';
}

function submitReport() {
  if (!verifiedUser) { showToast('⚠️ Please verify your identity first'); return; }

  // GPS gate
  if (!capturedGPS) {
    document.getElementById('gps-result').style.display = 'block';
    document.getElementById('gps-result').style.background = 'rgba(255,68,68,0.08)';
    document.getElementById('gps-result').style.border = '1px solid rgba(255,68,68,0.3)';
    document.getElementById('gps-result').style.color = 'var(--red)';
    document.getElementById('gps-result').textContent = '⚠ You must capture your GPS location before submitting.';
    showToast('📍 GPS location required');
    document.getElementById('gps-box').scrollIntoView({ behavior: 'smooth' });
    return;
  }

  // Photo gate: required for visual cats, AND always required for anonymous
  const photoRequired = PHOTO_REQUIRED_CATS.has(selectedCat) || verifiedUser.anonymous;
  if (photoRequired && !capturedPhoto) {
    document.getElementById('photo-warning').style.display = 'block';
    document.getElementById('photo-warning').textContent = verifiedUser.anonymous
      ? '⚠ Anonymous reports require a photo for all categories.'
      : '⚠ A photo of the issue is required for this category.';
    document.getElementById('photo-drop').style.borderColor = 'var(--red)';
    setTimeout(() => document.getElementById('photo-drop').style.borderColor = 'var(--border)', 2000);
    showToast('📷 Photo evidence required');
    return;
  }

  const title = document.getElementById('issue-title').value.trim();
  const location = document.getElementById('issue-location').value.trim();
  const desc = document.getElementById('issue-desc').value.trim();

  if (!title || !location) {
    document.getElementById('issue-title').style.borderColor = 'var(--red)';
    document.getElementById('issue-location').style.borderColor = 'var(--red)';
    setTimeout(() => {
      document.getElementById('issue-title').style.borderColor = '';
      document.getElementById('issue-location').style.borderColor = '';
    }, 2000);
    return;
  }

  // Abuse check
  const warnings = checkAbuseRisk(verifiedUser.contact, title, desc);
  const abuseWarnEl = document.getElementById('abuse-warning');
  if (warnings.length) {
    abuseWarnEl.style.display = 'block';
    abuseWarnEl.innerHTML = '⚠️ ' + warnings.join('<br>⚠️ ');
    if (abuseLog[verifiedUser.contact]?.flagged) {
      showToast('🚫 Account flagged — report held for review');
      return;
    }
  } else {
    abuseWarnEl.style.display = 'none';
  }

  // Update abuse log
  const log = abuseLog[verifiedUser.contact] || { count: 0, lastTs: 0, flagged: false };
  abuseLog[verifiedUser.contact] = { ...log, count: log.count + 1, lastTs: Date.now() };
  verifiedUser.reportCount++;

  const severity = classifyPriority(title, desc, selectedCat);
  const isCritical = severity === 'critical';
  // Anonymous reports go to review unless critical; verified flagged reports also go to review
  const needsReview = (verifiedUser.anonymous && !isCritical) || (warnings.length > 0 && abuseLog[verifiedUser.contact]?.flagged);
  const isFlagged = needsReview;
  const reporterLabel = verifiedUser.anonymous ? 'Anonymous Citizen' : 'Verified Citizen';

  const catIcons = {road:'🛣', sanitation:'🗑', utility:'⚡', water:'💧', safety:'🚨', other:'📌'};
  const catClasses = {road:'cat-road', sanitation:'cat-sanitation', utility:'cat-utility', water:'cat-water', safety:'cat-safety', other:'cat-other'};

  const newId = String(nextId++).padStart(4, '0');
  const newReport = {
    id: newId,
    title,
    category: selectedCat,
    catIcon: catIcons[selectedCat],
    catClass: catClasses[selectedCat],
    priority: severity,
    status: isFlagged ? 'flagged' : 'open',
    location,
    gps: { ...capturedGPS },
    photo: capturedPhoto ? { filename: capturedPhoto.filename, sizeKB: capturedPhoto.sizeKB, timestamp: capturedPhoto.timestamp, dataUrl: capturedPhoto.dataUrl, gpsMatch: capturedPhoto.gpsMatch } : null,
    votes: 0,
    time: 'Just now',
    reporter: reporterLabel,
    verified: !verifiedUser.anonymous,
    anonymous: verifiedUser.anonymous,
    flagged: isFlagged,
    description: desc || 'No additional description provided.',
    timeline: isFlagged ? [
      { label: 'Report Submitted', desc: `Via CivicPulse — ${reporterLabel}`, date: new Date().toLocaleString(), done: true },
      { label: 'Held for Manual Review', desc: verifiedUser.anonymous ? 'Anonymous submission — a moderator will verify GPS + photo before publishing.' : 'Unusual activity detected. A moderator will verify this report.', date: '', active: true },
      { label: 'Triage & Assignment', desc: '', date: '', done: false },
      { label: 'Resolved', desc: '', date: '', done: false },
    ] : [
      { label: 'Report Submitted', desc: `Via CivicPulse — ${reporterLabel}`, date: new Date().toLocaleString(), done: true },
      { label: 'AI Triage in Progress', desc: 'Auto-classifying and routing...', date: '', active: true },
      { label: 'Department Assignment', desc: '', date: '', done: false },
      { label: 'Resolved', desc: '', date: '', done: false },
    ],
    comms: []
  };

  reports.unshift(newReport);

  // Clear form
  document.getElementById('issue-title').value = '';
  document.getElementById('issue-location').value = '';
  document.getElementById('issue-desc').value = '';
  capturedGPS = null;
  capturedPhoto = null;
  document.getElementById('gps-result').style.display = 'none';
  document.getElementById('gps-box').innerHTML = `<div style="font-size:11px;color:var(--muted);margin-bottom:8px">You must be physically at or near the issue location to report it.</div><button class="submit-btn" style="padding:8px 16px;font-size:10px;width:auto;display:inline-block" onclick="captureGPS()">📍 Capture My GPS Location</button>`;
  if (PHOTO_REQUIRED_CATS.has(selectedCat)) clearPhoto();

  renderReports();
  syncStats();

  if (isFlagged) {
    showToast('⚠️ Report held — under review');
  } else {
    showToast(`🤖 AI classified as ${severity.toUpperCase()} priority`);
    setTimeout(() => {
      newReport.timeline[1].active = false;
      newReport.timeline[1].done = true;
      newReport.timeline[1].date = new Date().toLocaleString();
      newReport.timeline[1].desc = `Auto-classified as ${severity.toUpperCase()}. Routing to relevant department.`;
      newReport.timeline[2].active = true;
      renderReports();
    }, 3000);
  }
}

function updateReportStatus(id, newStatus) {
  const r = reports.find(x => x.id === id);
  if (!r) return;
  r.status = newStatus;
  if (newStatus === 'resolved') {
    r.timeline = r.timeline.map(t => ({ ...t, done: true, active: false }));
    r.timeline[r.timeline.length - 1].date = new Date().toLocaleString();
    r.timeline[r.timeline.length - 1].desc = 'Issue successfully resolved.';
  }
  renderReports();
  syncStats();
  renderAdminList();
  updateAdminStats();
  showToast(newStatus === 'resolved' ? '✓ Marked as Resolved' : '🔧 Marked as In Progress');
}

// ── ADMIN ────────────────────────────────────────────────
const ADMIN_CREDS = { user: 'admin', pass: 'admin123' };
let adminLoggedIn = false;
let adminFilterStatus = 'all';
let adminSelectedIds = new Set();

function openAdminLogin() {
  document.getElementById('admin-login-err').style.display = 'none';
  document.getElementById('admin-user').value = '';
  document.getElementById('admin-pass').value = '';
  document.getElementById('admin-login-overlay').classList.add('open');
}

function closeAdminLogin(e) {
  if (e && e.target !== document.getElementById('admin-login-overlay')) return;
  document.getElementById('admin-login-overlay').classList.remove('open');
}

function doAdminLogin() {
  const u = document.getElementById('admin-user').value.trim();
  const p = document.getElementById('admin-pass').value;
  if (u === ADMIN_CREDS.user && p === ADMIN_CREDS.pass) {
    adminLoggedIn = true;
    document.getElementById('admin-login-overlay').classList.remove('open');
    openAdmin();
  } else {
    document.getElementById('admin-login-err').style.display = 'block';
    document.getElementById('admin-pass').value = '';
  }
}

document.getElementById('admin-pass').addEventListener('keydown', e => {
  if (e.key === 'Enter') doAdminLogin();
});
document.getElementById('admin-user').addEventListener('keydown', e => {
  if (e.key === 'Enter') doAdminLogin();
});

function openAdmin() {
  adminSelectedIds.clear();
  updateAdminStats();
  renderAdminList();
  document.getElementById('admin-overlay').style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeAdmin() {
  adminLoggedIn = false;
  adminSelectedIds.clear();
  document.getElementById('admin-overlay').style.display = 'none';
  document.body.style.overflow = '';
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('.nav-btn').classList.add('active');
}

function updateAdminStats() {
  document.getElementById('adm-total').textContent = reports.length;
  document.getElementById('adm-open').textContent = reports.filter(r => r.status === 'open').length;
  document.getElementById('adm-prog').textContent = reports.filter(r => r.status === 'progress').length;
  document.getElementById('adm-resolved').textContent = reports.filter(r => r.status === 'resolved').length;
}

function adminFilter(status, btn) {
  adminFilterStatus = status;
  document.querySelectorAll('#admin-overlay .filter-chip').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  adminSelectedIds.clear();
  updateBulkBar();
  renderAdminList();
}

function renderAdminList() {
  if (!document.getElementById('admin-overlay') || document.getElementById('admin-overlay').style.display === 'none') return;
  const search = (document.getElementById('adm-search')?.value || '').toLowerCase();
  const catF = document.getElementById('adm-cat-filter')?.value || 'all';

  const filtered = reports.filter(r => {
    const matchStatus = adminFilterStatus === 'all' || r.status === adminFilterStatus ||
      (adminFilterStatus === 'critical' && r.priority === 'critical');
    const matchCat = catF === 'all' || r.category === catF;
    const matchSearch = !search || r.title.toLowerCase().includes(search) ||
      r.location.toLowerCase().includes(search) || r.id.includes(search) ||
      r.description.toLowerCase().includes(search);
    return matchStatus && matchCat && matchSearch;
  });

  const container = document.getElementById('admin-report-list');
  if (!container) return;

  if (!filtered.length) {
    container.innerHTML = `<div style="text-align:center;padding:48px;color:var(--muted);font-size:12px;border:1px dashed var(--border);border-radius:8px">
      <div style="font-size:28px;margin-bottom:8px">🔍</div>No reports match this filter.</div>`;
    return;
  }

  const statusLabel = s => ({ open:'Open', progress:'In Progress', resolved:'Resolved', flagged:'Under Review' }[s] || s);
  const statusColor = s => ({ open:'var(--red)', progress:'var(--yellow)', resolved:'var(--green)', flagged:'var(--muted)' }[s]);
  const priorityColor = p => ({ critical:'var(--red)', high:'var(--accent2)', medium:'var(--yellow)', low:'var(--muted)' }[p]);

  container.innerHTML = `
    <div style="background:var(--surface);border:1px solid var(--border);border-radius:8px;overflow:hidden">
      <div style="display:grid;grid-template-columns:36px 60px 1fr 100px 80px 100px 190px;gap:0;border-bottom:2px solid var(--border);padding:10px 16px;font-size:9px;text-transform:uppercase;letter-spacing:2px;color:var(--muted);align-items:center">
        <div><input type="checkbox" id="adm-select-all" onchange="toggleSelectAll(this)" style="cursor:pointer;accent-color:var(--accent)"></div>
        <div>ID</div><div>Issue</div><div>Category</div><div>Priority</div><div>Status</div><div>Actions</div>
      </div>
      ${filtered.map(r => `
        <div id="adm-row-${r.id}" style="display:grid;grid-template-columns:36px 60px 1fr 100px 80px 100px 190px;gap:0;padding:12px 16px;border-bottom:1px solid var(--border);align-items:center;transition:background 0.15s;background:${adminSelectedIds.has(r.id)?'rgba(232,255,71,0.04)':''}">
          <div><input type="checkbox" ${adminSelectedIds.has(r.id)?'checked':''} onchange="toggleSelect('${r.id}',this)" style="cursor:pointer;accent-color:var(--accent)"></div>
          <div style="font-size:10px;color:var(--muted)">#${r.id}</div>
          <div>
            <div style="font-size:12px;font-weight:700;margin-bottom:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:260px">${r.catIcon} ${r.title}</div>
            <div style="font-size:9px;color:var(--muted)">📍 ${r.location} · 🕐 ${r.time} · ${r.anonymous?'🕵️ Anon':'✓ Verified'} · ▲${r.votes}</div>
          </div>
          <div style="font-size:10px;color:var(--muted);text-transform:capitalize">${r.category}</div>
          <div style="font-size:10px;font-weight:700;color:${priorityColor(r.priority)};text-transform:uppercase">${r.priority}</div>
          <div style="font-size:10px;font-weight:700;color:${statusColor(r.status)}">${statusLabel(r.status)}</div>
          <div style="display:flex;gap:5px;flex-wrap:wrap">
            <button onclick="updateReportStatus('${r.id}','progress')" style="background:rgba(255,184,0,0.1);border:1px solid rgba(255,184,0,0.3);color:var(--yellow);font-size:9px;padding:3px 7px;border-radius:3px;cursor:pointer;font-family:'Space Mono',monospace">▶</button>
            <button onclick="updateReportStatus('${r.id}','resolved')" style="background:rgba(68,255,136,0.1);border:1px solid rgba(68,255,136,0.3);color:var(--green);font-size:9px;padding:3px 7px;border-radius:3px;cursor:pointer;font-family:'Space Mono',monospace">✓</button>
            <button onclick="adminViewReport('${r.id}')" style="background:rgba(232,255,71,0.05);border:1px solid rgba(232,255,71,0.2);color:var(--accent);font-size:9px;padding:3px 7px;border-radius:3px;cursor:pointer;font-family:'Space Mono',monospace">👁</button>
            <button onclick="confirmDelete('${r.id}')" style="background:rgba(255,68,68,0.1);border:1px solid rgba(255,68,68,0.3);color:var(--red);font-size:9px;padding:3px 7px;border-radius:3px;cursor:pointer;font-family:'Space Mono',monospace">🗑</button>
          </div>
        </div>
      `).join('')}
    </div>
    <div style="font-size:10px;color:var(--muted);margin-top:10px;text-align:right">${filtered.length} report${filtered.length!==1?'s':''} shown · ${reports.length} total</div>
  `;
}

function adminViewReport(id) {
  const r = reports.find(x => x.id === id);
  if (r) openModal(r);
}

function toggleSelect(id, cb) {
  if (cb.checked) adminSelectedIds.add(id);
  else adminSelectedIds.delete(id);
  const row = document.getElementById(`adm-row-${id}`);
  if (row) row.style.background = cb.checked ? 'rgba(232,255,71,0.04)' : '';
  updateBulkBar();
}

function toggleSelectAll(cb) {
  document.querySelectorAll('#admin-report-list input[type=checkbox]').forEach(c => {
    c.checked = cb.checked;
    const row = c.closest('[id^="adm-row-"]');
    const id = row?.id?.replace('adm-row-','');
    if (id) { if (cb.checked) adminSelectedIds.add(id); else adminSelectedIds.delete(id); }
    if (row) row.style.background = cb.checked ? 'rgba(232,255,71,0.04)' : '';
  });
  updateBulkBar();
}

function updateBulkBar() {
  const bar = document.getElementById('adm-bulk-bar');
  const count = adminSelectedIds.size;
  bar.style.display = count > 0 ? 'flex' : 'none';
  if (count > 0) document.getElementById('adm-bulk-count').textContent = count;
}

function clearAdminSelection() {
  adminSelectedIds.clear();
  updateBulkBar();
  renderAdminList();
}

function bulkAction(action) {
  if (!adminSelectedIds.size) return;
  const ids = [...adminSelectedIds];
  if (action === 'delete') {
    showAdminConfirm(
      `Delete ${ids.length} selected report${ids.length>1?'s':''}? This cannot be undone.`,
      () => {
        ids.forEach(id => { const i = reports.findIndex(r=>r.id===id); if(i!==-1) reports.splice(i,1); });
        adminSelectedIds.clear();
        finishAdminAction(`🗑 ${ids.length} report${ids.length>1?'s':''} deleted`);
      }
    );
  } else {
    ids.forEach(id => {
      const r = reports.find(x=>x.id===id);
      if (r) {
        r.status = action;
        if (action === 'resolved') {
          r.timeline = r.timeline.map(t=>({...t,done:true,active:false}));
          r.timeline[r.timeline.length-1].date = new Date().toLocaleString();
        }
      }
    });
    adminSelectedIds.clear();
    finishAdminAction(`✓ ${ids.length} report${ids.length>1?'s':''} marked as ${action==='resolved'?'Resolved':'In Progress'}`);
  }
}

function confirmDelete(id) {
  const r = reports.find(x=>x.id===id);
  if (!r) return;
  showAdminConfirm(
    `Delete report #${r.id} — "${r.title}"? This cannot be undone.`,
    () => { const i=reports.findIndex(x=>x.id===id); if(i!==-1) reports.splice(i,1); finishAdminAction(`🗑 Report #${id} deleted`); }
  );
}

function showAdminConfirm(msg, onConfirm) {
  document.getElementById('admin-confirm-msg').textContent = msg;
  document.getElementById('admin-confirm-btn').onclick = () => { closeAdminConfirm(); onConfirm(); };
  document.getElementById('admin-confirm-overlay').classList.add('open');
}

function closeAdminConfirm(e) {
  if (e && e.target !== document.getElementById('admin-confirm-overlay')) return;
  document.getElementById('admin-confirm-overlay').classList.remove('open');
}

function finishAdminAction(msg) {
  updateBulkBar();
  renderAdminList();
  updateAdminStats();
  renderReports();
  syncStats();
  showToast(msg);
}



function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

function switchPage(page) {
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
  if (page === 'report') {
    document.querySelector('.form-panel').scrollIntoView({ behavior: 'smooth' });
  } else if (page === 'analytics') {
    openAnalytics();
  }
}

function openAnalytics() {
  renderAnalytics();
  document.getElementById('analytics-overlay').style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeAnalytics() {
  document.getElementById('analytics-overlay').style.display = 'none';
  document.body.style.overflow = '';
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('.nav-btn').classList.add('active');
}

function renderAnalytics() {
  const all = reports;
  const total = all.length;
  const resolved = all.filter(r => r.status === 'resolved').length;
  const inProgress = all.filter(r => r.status === 'progress').length;
  const open = all.filter(r => r.status === 'open' || r.status === 'flagged').length;
  const rate = total ? Math.round((resolved / total) * 100) : 0;

  document.getElementById('a-rate').textContent = rate + '%';
  document.getElementById('a-resolved').textContent = resolved;
  document.getElementById('a-progress').textContent = inProgress;
  document.getElementById('a-open').textContent = open;

  // Progress bar
  const resolvedPct = total ? (resolved / total) * 100 : 0;
  const progressPct = total ? (inProgress / total) * 100 : 0;
  document.getElementById('progress-bar-resolved').style.width = resolvedPct + '%';
  document.getElementById('progress-bar-progress').style.left = resolvedPct + '%';
  document.getElementById('progress-bar-progress').style.width = progressPct + '%';
  document.getElementById('progress-bar-label').textContent = total
    ? `${rate}% resolved · ${Math.round(progressPct)}% in progress`
    : 'No reports yet';

  // Category data
  const cats = ['road','sanitation','utility','water','safety','other'];
  const catLabels = { road:'🛣 Roads', sanitation:'🗑 Sanitation', utility:'⚡ Utilities', water:'💧 Water', safety:'🚨 Safety', other:'📌 Other' };
  const catColors = { road:'#ff6b35', sanitation:'#44ff88', utility:'#e8ff47', water:'#4ecdc4', safety:'#ff4444', other:'#6b6f7a' };

  const catCounts = {};
  const catResolved = {};
  cats.forEach(c => { catCounts[c] = 0; catResolved[c] = 0; });
  all.forEach(r => {
    if (catCounts[r.category] !== undefined) {
      catCounts[r.category]++;
      if (r.status === 'resolved') catResolved[r.category]++;
    }
  });

  // Category bars (all issues)
  const maxCount = Math.max(...Object.values(catCounts), 1);
  const catBarsEl = document.getElementById('category-bars');
  if (total === 0) {
    catBarsEl.innerHTML = '<div style="font-size:11px;color:var(--muted);padding:16px 0;text-align:center">No reports yet — submit issues to see breakdown</div>';
  } else {
    catBarsEl.innerHTML = cats.map(c => {
      const count = catCounts[c];
      const pct = Math.round((count / maxCount) * 100);
      return `<div style="margin-bottom:12px">
        <div style="display:flex;justify-content:space-between;font-size:10px;margin-bottom:4px">
          <span>${catLabels[c]}</span>
          <span style="color:var(--muted)">${count} report${count !== 1 ? 's' : ''}</span>
        </div>
        <div style="height:8px;background:var(--bg);border-radius:4px;overflow:hidden;border:1px solid var(--border)">
          <div style="height:100%;width:${pct}%;background:${catColors[c]};border-radius:4px;transition:width 0.8s ease"></div>
        </div>
      </div>`;
    }).join('');
  }

  // Resolved by category
  const resolvedByCatEl = document.getElementById('resolved-by-cat');
  const anyResolved = Object.values(catResolved).some(v => v > 0);
  if (!anyResolved) {
    resolvedByCatEl.innerHTML = '<div style="font-size:11px;color:var(--muted);padding:16px 0;text-align:center">No resolved issues yet</div>';
  } else {
    const maxRes = Math.max(...Object.values(catResolved), 1);
    resolvedByCatEl.innerHTML = cats.map(c => {
      const res = catResolved[c];
      const tot = catCounts[c];
      const pct = Math.round((res / maxRes) * 100);
      const resRate = tot ? Math.round((res / tot) * 100) : 0;
      return `<div style="margin-bottom:14px">
        <div style="display:flex;justify-content:space-between;font-size:10px;margin-bottom:4px">
          <span>${catLabels[c]}</span>
          <span style="color:var(--green)">${res} resolved <span style="color:var(--muted)">(${resRate}% of ${tot})</span></span>
        </div>
        <div style="height:10px;background:var(--bg);border-radius:4px;overflow:hidden;border:1px solid var(--border)">
          <div style="height:100%;width:${pct}%;background:${catColors[c]};border-radius:4px;opacity:0.85;transition:width 0.8s ease"></div>
        </div>
      </div>`;
    }).join('');
  }

  // Accountability scorecard
  const scorecardEl = document.getElementById('scorecard');
  const grades = cats.map(c => {
    const tot = catCounts[c];
    const res = catResolved[c];
    const prog = all.filter(r => r.category === c && r.status === 'progress').length;
    if (tot === 0) return { cat: c, grade: '—', color: 'var(--muted)', note: 'No reports' };
    const score = tot ? ((res + prog * 0.5) / tot) * 100 : 0;
    let grade, color, note;
    if (score >= 80)      { grade = 'A'; color = 'var(--green)';  note = 'Excellent responsiveness'; }
    else if (score >= 60) { grade = 'B'; color = 'var(--accent)'; note = 'Good — room to improve'; }
    else if (score >= 40) { grade = 'C'; color = 'var(--yellow)'; note = 'Moderate — needs attention'; }
    else if (score >= 20) { grade = 'D'; color = 'var(--accent2)';note = 'Poor — significant backlog'; }
    else                  { grade = 'F'; color = 'var(--red)';    note = 'Critical — not responding'; }
    return { cat: c, grade, color, note, tot, res };
  });

  scorecardEl.innerHTML = grades.map(g => `
    <div style="display:flex;align-items:center;gap:12px;padding:8px 0;border-bottom:1px solid var(--border)">
      <div style="font-family:'Fraunces',serif;font-size:24px;font-weight:600;color:${g.color};width:28px;text-align:center;flex-shrink:0">${g.grade}</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;font-weight:700">${catLabels[g.cat]}</div>
        <div style="font-size:9px;color:var(--muted)">${g.note}${g.tot ? ` · ${g.res}/${g.tot} resolved` : ''}</div>
      </div>
    </div>
  `).join('');
}

// INIT
function syncStats() {
  const open = reports.filter(r => r.status === 'open' || r.status === 'flagged').length;
  const progress = reports.filter(r => r.status === 'progress').length;
  const resolved = reports.filter(r => r.status === 'resolved').length;
  document.getElementById('stat-open').textContent = open;
  document.getElementById('stat-progress').textContent = progress;
  document.getElementById('stat-resolved').textContent = resolved;
  document.getElementById('stat-total').textContent = reports.length;
}

renderReports();
syncStats();