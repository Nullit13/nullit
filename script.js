const PROJECTS = [
  {
    id: "finora",
    title: "Finora",
    category: "website",
    catLabel: "Website",
    desc: "A MERN stack personal finance tracker that helps users manage and track their earnings with secure JWT authentication, complete CRUD operations, and a responsive dashboard.",
    image: "images/finora.png",
    techs: ["Node.js", "MongoDB", "React", "Express.js", "JWT", "MERN stack"],
    github: "https://github.com/Nullit13/finora",
    demo: null
  },
  {
    id: "iman-hub",
    title: "Iman Hub",
    category: "website",
    catLabel: "Website",
    desc: "An Islamic companion web app built with React, featuring Quran reading and recitation, Athkar, prayer times, Khatam tracking, and Islamic events in a clean, responsive interface.",
    image: "images/imanhub.png",
    techs: ["React", "React Router", "CSS3", "Local Storage", "Responsive Design"],
    github: "https://github.com/Nullit13/iman-hub",
    demo: "https://iman-hub.onrender.com/"
  },
  {
    id: "bigbrother",
    title: "Big Brother",
    category: "framework",
    catLabel: "Framework",
    desc: "An educational remote administration framework for cybersecurity learning, inspired by Orwell's 1984. A Node.js server hosts a web dashboard backed by MongoDB, with a Windows client for controlled lab environments.",
    image: null,
    visual: "eye",
    techs: ["Node.js", "MongoDB", "EJS", "PowerShell", "Express.js", "REST API", "Windows"],
    github: "https://github.com/Nullit13/bigbrother",
    demo: null
  },
  {
    id: "handflow",
    title: "HandFlow",
    category: "app",
    catLabel: "Python App",
    desc: "A Python-based virtual mouse that lets you control your computer using hand gestures through a webcam. Uses real-time hand tracking with OpenCV and MediaPipe, with smooth cursor movement, gesture clicks, sensitivity controls, and deadzone filtering.",
    image: null,
    visual: "hand",
    techs: ["Python", "OpenCV", "MediaPipe", "Computer Vision", "Hand Tracking"],
    github: "https://github.com/Nullit13/handflow",
    demo: null
  },
  {
    id: "basher",
    title: "Basher",
    category: "cli",
    catLabel: "CLI Tool",
    desc: "A high-performance web directory scanner written in C++ using HTTP/2, connection pooling, multi-threading, rate limiting, extension scanning, cookie authentication, and a real-time progress bar.",
    image: null,
    visual: "terminal",
    techs: ["C++", "libcurl", "HTTP/2", "Multi-threading", "Connection Pooling", "Linux", "Windows", "g++"],
    github: "https://github.com/Nullit13/basher",
    demo: "https://Nullit13.github.io/basher",
    termLines: [
      { type: "cmd", p: "nullit@kali", path: "~", cmd: "./basher --help" },
      { type: "out", text: "⚡ Basher v1.0 — Blazing Fast Dir Scanner" },
      { type: "out", text: "   Faster than Gobuster. Built in C++." },
      { type: "blank" },
      { type: "cmd", p: "nullit@kali", path: "~", cmd: "./basher -u https://target.com -w common.txt -t 100" },
      { type: "out", text: "[*] Threads: 100 (auto-calibrated)" },
      { type: "out", text: "[*] Protocol: HTTP/2 + Connection Pool" },
      { type: "out", text: "[*] Wordlist: 10,000 words" },
      { type: "blank" },
      { type: "found", text: "[+] /admin          200 OK   (1.2KB)" },
      { type: "found", text: "[+] /api            200 OK   (0.4KB)" },
      { type: "found", text: "[+] /login          302 →    (0.1KB)" },
      { type: "found", text: "[+] /dashboard      200 OK   (8.7KB)" },
      { type: "out", text: "[~] Progress: 4891/10000  ████░░ 48.9%" },
      { type: "cursor" }
    ]
  },
  {
    id: "winraider",
    title: "WinRaider",
    category: "cli",
    catLabel: "CLI Tool",
    desc: "A Python-based Windows security testing toolkit for authorized environments, featuring port scanning, local device discovery, vulnerability checks, SMB authentication testing, and report generation.",
    image: null,
    visual: "terminal",
    techs: ["Python", "Impacket", "python-nmap", "Socket", "Multi-threading", "SMB", "WinRM", "SSH", "Windows", "Nmap"],
    github: "https://github.com/Nullit13/winraider",
    demo: "https://Nullit13.github.io/winraider",
    termLines: [
      { type: "cmd", p: "nullit@kali", path: "~", cmd: "./winraider --help" },
      { type: "out", text: "⚡ WinRaider v2.0 — Windows Security Toolkit" },
      { type: "out", text: "   Port scanning, discovery, and security testing." },
      { type: "blank" },
      { type: "cmd", p: "nullit@kali", path: "~", cmd: "./winraider --discover" },
      { type: "out", text: "[+] Local IP: 192.168.3.1" },
      { type: "out", text: "[+] Subnet: 192.168.3.0/24" },
      { type: "out", text: "[+] Scanning for Windows devices..." },
      { type: "blank" },
      { type: "found", text: "[+] Found 1 Windows device(s):" },
      { type: "found", text: "    - 192.168.3.5" },
      { type: "blank" },
      { type: "cmd", p: "nullit@kali", path: "~", cmd: "./winraider -t 192.168.3.5 --brute --threads 10" },
      { type: "out", text: "[+] Loaded 121 usernames and 41 passwords." },
      { type: "out", text: "[+] Total combinations: 4961" },
      { type: "out", text: "[+] Brute-forcing port: 445" },
      { type: "blank" },
      { type: "found", text: "[+] SUCCESS! Valid credentials found: Username:password" },
      { type: "out", text: "[~] Progress: 19/4961  ██░░░░ 0.38%" },
      { type: "cursor" }
    ]
  }
];
  
  let filtered = [...PROJECTS];
  let current = 0;
  let direction = 1;
  let activeCat = "all";
  
  function buildTerminal(lines) {
    let rows = "";
    lines.forEach(l => {
      if (l.type === "blank") { rows += `<div>&nbsp;</div>`; return; }
      if (l.type === "cursor") { rows += `<div><span class="tp">nullit@kali</span>:<span class="ta">~</span>$ <span class="tcursor"></span></div>`; return; }
      if (l.type === "cmd") { rows += `<div><span class="tp">${l.p}</span>:<span class="ta">${l.path}</span>$ <span class="tc">${l.cmd}</span></div>`; return; }
      if (l.type === "found") { rows += `<div><span style="color:#22d3a5">${l.text}</span></div>`; return; }
      rows += `<div><span class="to">${l.text}</span></div>`;
    });
    return `<div class="terminal-wrap">
      <div class="term-topbar">
        <div class="tdot" style="background:#ff5f57"></div>
        <div class="tdot" style="background:#ffbd2e"></div>
        <div class="tdot" style="background:#28c941"></div>
        <span class="term-title">bash — nullit@kali</span>
      </div>
      <div class="term-body">${rows}</div>
    </div>`;
  }
  
  function buildEye() {
    return `<div class="eye-panel">
      <div class="eye-rings-wrap">
        <div class="ering"></div><div class="ering"></div><div class="ering"></div>
      </div>
      <div class="eye-svg-wrap">
        <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="70" cy="70" rx="58" ry="36" stroke="#818cf8" stroke-width="1.5" opacity=".55"/>
          <circle cx="70" cy="70" r="22" fill="#0c0c1e" stroke="#818cf8" stroke-width="1.5"/>
          <circle cx="70" cy="70" r="14" fill="#818cf8" opacity=".85"/>
          <circle cx="70" cy="70" r="7" fill="#0c0c1e"/>
          <circle cx="64" cy="64" r="3" fill="white" opacity=".35"/>
          <ellipse cx="70" cy="70" rx="58" ry="36" stroke="#818cf8" stroke-width=".5" opacity=".2" transform="scale(1.06)" transform-origin="70 70"/>
        </svg>
      </div>
      <div class="eye-label">Educational · Use Responsibly</div>
    </div>`;
  }
  
  function buildVisual(p) {
    if (p.image) return `<img src="${p.image}" alt="${p.title}">`;
    if (p.visual === "terminal") return buildTerminal(p.termLines);
    if (p.visual === "eye") return buildEye();
    return `<div style="flex:1;display:flex;align-items:center;justify-content:center;color:var(--txt3);font-size:.85rem">${p.title}</div>`;
  }
  
  function buildDots() {
    return filtered.map((_, i) => {
      const on = i === current ? " on" : "";
      return `<button class="pdot${on}" data-i="${i}"></button>`;
    }).join("");
  }
  
  function render(dir) {
    const vp = document.getElementById("projViewport");
    const p = filtered[current];
    if (!p) {
      vp.innerHTML = `<div style="padding:4rem;text-align:center;color:var(--txt3);border:1px solid var(--brd);border-radius:20px">No projects in this category yet.</div>`;
      document.getElementById("ctrText").innerHTML = `Project <b>0</b> / <b>0</b>`;
      document.getElementById("prevBtn").disabled = true;
      document.getElementById("nextBtn").disabled = true;
      return;
    }
    const revClass = dir < 0 ? " rev" : "";
    const demoBtn = p.demo ? `<a href="${p.demo}" target="_blank" class="pbtn"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>Live Demo</a>` : "";
    vp.innerHTML = `
      <div class="proj-card show${revClass}">
        <div class="proj-visual-panel">
          <div class="proj-cat-tag">${p.catLabel}</div>
          ${buildVisual(p)}
        </div>
        <div class="proj-info-panel">
          <div class="proj-num-row">
            <div class="proj-num">Project ${current + 1} / ${filtered.length}</div>
          </div>
          <div class="proj-title">${p.title}</div>
          <p class="proj-desc">${p.desc}</p>
          <div class="proj-tech-row">${p.techs.map(t => `<span class="ptech">${t}</span>`).join("")}</div>
          <div class="proj-btn-row">
            <a href="${p.github}" target="_blank" class="pbtn main">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub Repo
            </a>
            ${demoBtn}
          </div>
          <div class="proj-dots">${buildDots()}</div>
        </div>
      </div>`;
    document.getElementById("ctrText").innerHTML = `Project <b>${current + 1}</b> / <b>${filtered.length}</b>`;
    document.getElementById("prevBtn").disabled = current === 0;
    document.getElementById("nextBtn").disabled = current === filtered.length - 1;
    document.querySelectorAll(".pdot").forEach(d => {
      d.addEventListener("click", () => {
        const i = parseInt(d.dataset.i);
        direction = i > current ? 1 : -1;
        current = i;
        render(direction);
      });
    });
  }
  
  document.getElementById("prevBtn").addEventListener("click", () => { if (current > 0) { current--; render(-1); } });
  document.getElementById("nextBtn").addEventListener("click", () => { if (current < filtered.length - 1) { current++; render(1); } });
  
  document.querySelectorAll(".cat-btn").forEach(btn => {
    btn.addEventListener("click", function() {
      document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
      this.classList.add("active");
      activeCat = this.dataset.cat;
      filtered = activeCat === "all" ? [...PROJECTS] : PROJECTS.filter(p => p.category === activeCat);
      current = 0;
      render(1);
    });
  });
  
  document.addEventListener("keydown", e => {
    if (e.key === "ArrowLeft" && current > 0) { current--; render(-1); }
    if (e.key === "ArrowRight" && current < filtered.length - 1) { current++; render(1); }
  });
  
  let th = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", th);
  document.getElementById("themeBtn").addEventListener("click", () => {
    th = th === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", th);
    localStorage.setItem("theme", th);
  });
  
  document.getElementById("copyEmailBtn").addEventListener("click", function() {
    navigator.clipboard.writeText("adamprog213@gmail.com");
    this.textContent = "✓ Copied!";
    this.classList.add("copied");
    setTimeout(() => {
      this.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy email address`;
      this.classList.remove("copied");
    }, 2200);
  });
  
  const stk = document.getElementById("stk");
  window.addEventListener("scroll", () => stk.classList.toggle("on", window.scrollY > 500));
  stk.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  
  const obs = new IntersectionObserver(en => en.forEach(e => { if (e.isIntersecting) e.target.classList.add("in"); }), { threshold: 0.1 });
  document.querySelectorAll(".reveal").forEach(el => obs.observe(el));
  
  render(1);
