"use strict";

const originalPhotos = [
  {src:"assets/incat-13.jpg",site:"incat",title:"A moment to celebrate",detail:"Final teaching demonstration • INCAT"},
  {src:"assets/incat-01.jpg",site:"incat",title:"Learning by doing",detail:"Hands-on system unit activity • INCAT"},
  {src:"assets/lhs-01.jpg",site:"lhs",title:"A community of learners",detail:"Field Study memories • MMSU LHS"},
  {src:"assets/incat-09.jpg",site:"incat",title:"Learning in the laboratory",detail:"Classroom experience • INCAT"},
  {src:"assets/incat-12.jpg",site:"incat",title:"Guiding learners",detail:"Technology learning activity • INCAT"},
  {src:"assets/lhs-03.jpg",site:"lhs",title:"Supporting the classroom",detail:"Classroom documentation • MMSU LHS"},
  {src:"assets/incat-02.jpg",site:"incat",title:"Practice makes progress",detail:"Computer hardware activity • INCAT"},
  {src:"assets/incat-08.jpg",site:"incat",title:"Working with purpose",detail:"Hands-on practical learning • INCAT"},
  {src:"assets/lhs-02.jpg",site:"lhs",title:"Together in the classroom",detail:"Group documentation • MMSU LHS"},
  {src:"assets/incat-05.jpg",site:"incat",title:"Technical skills in action",detail:"Hardware practice • INCAT"},
  {src:"assets/incat-03.jpg",site:"incat",title:"Classroom in focus",detail:"Learning session • INCAT"},
  {src:"assets/lhs-04.jpg",site:"lhs",title:"Every observation matters",detail:"Teaching-learning environment • MMSU LHS"},
  {src:"assets/incat-06.jpg",site:"incat",title:"An active learning space",detail:"Classroom instruction • INCAT"},
  {src:"assets/incat-07.jpg",site:"incat",title:"Building technical confidence",detail:"Computer servicing activity • INCAT"},
  {src:"assets/lhs-05.jpg",site:"lhs",title:"Learning through observation",detail:"Classroom activity • MMSU LHS"},
  {src:"assets/incat-10.jpg",site:"incat",title:"Beyond the classroom",detail:"Practical learning moments • INCAT"},
  {src:"assets/incat-11.jpg",site:"incat",title:"Applying the lesson",detail:"Learning environment • INCAT"},
  {src:"assets/lhs-06.jpg",site:"lhs",title:"Learning alongside others",detail:"School visit documentation • MMSU LHS"},
  {src:"assets/incat-04.jpg",site:"incat",title:"Computer laboratory sessions",detail:"Teaching assistance • INCAT"},
  {src:"assets/lhs-07.jpg",site:"lhs",title:"An everyday lesson",detail:"Classroom learning • MMSU LHS"}
];

const base = "https://drive.google.com/file/d/";
const documents = [
  {title:"Curriculum Vitae",subtitle:"Education, recognitions, training, and affiliations",group:"profile",site:"CV",kind:"PDF",id:"1n2Dxwf81ZKYn9kp_oWRRfUBrFf5oGsor"},
  {title:"Week 1 — First Steps in Teaching",subtitle:"Teaching assistance, lesson preparation, and initial demonstration",group:"journals",site:"INCAT",kind:"PDF",id:"1CiZ8ptR_G9tHwhNe0DKUk9gEagJ_IufV"},
  {title:"Week 2 — Classroom Participation",subtitle:"Practical computer work and learner support",group:"journals",site:"INCAT",kind:"PDF",id:"1S9fd06r2PicohMjSCv-gxsORmUYBXOtR"},
  {title:"Week 3 — Learning Through Assessment",subtitle:"Summative tests, performance rubric, and system unit tasks",group:"journals",site:"INCAT",kind:"PDF",id:"1xlnNRmeR7CH5gUfO3AnE8HPaB1oOt_rc"},
  {title:"Week 4 — Teaching Practice",subtitle:"Document formatting and guided learner activities",group:"journals",site:"INCAT",kind:"PDF",id:"14YOSBuUapQnOiBnuGcw7keOLiYBzjQEb"},
  {title:"Week 5 — Final Demonstration",subtitle:"Structured documents in Microsoft Word and quiz activities",group:"journals",site:"INCAT",kind:"PDF",id:"1JRoBSsUgDQQ7zVQwLBXWpxdXuvJwED_T"},
  {title:"Week 8 — Assessment and Planning",subtitle:"Observation, meaningful tasks, and lesson-plan preparation",group:"journals",site:"MMSU LHS",kind:"PDF",id:"1iaGfLEJdVvCS7sj7X7i1M3qbDj4JmyFL"},
  {title:"Week 9 — Preparing Instructional Materials",subtitle:"Construction site preparation and demonstration planning",group:"journals",site:"MMSU LHS",kind:"PDF",id:"1IhtrRctUzMw8-1190bgguOGRIuQoVIPV"},
  {title:"Week 10 — Final Lesson Preparation",subtitle:"Improving lesson delivery, activities, and assessment",group:"journals",site:"MMSU LHS",kind:"PDF",id:"1ACulOQOwp13qQ8jMRHV8HfsshXXyOhLB"},

  {title:"School Environment Photo Essay",subtitle:"Facilities, culture, safety, and stewardship",group:"activities",site:"INCAT",kind:"PDF",id:"1bUfizmShmaXXT0Gua28d21jAvdTO9tCg"},
  {title:"Classroom Management Narrative",subtitle:"Observation and reflection on classroom routines",group:"activities",site:"INCAT",kind:"PDF",id:"1btTFQQN753aiImFPNAOYVA2kNhKwgH1z"},
  {title:"Teaching Strategies Observation Cards",subtitle:"Instructional methods, questioning, and communication",group:"activities",site:"INCAT",kind:"PDF",id:"1x2hlqhuTneulfzBoQM_Z1_hvalP80DGL"},
  {title:"Technology Integration Audit",subtitle:"Observed instructional technology and learner responses",group:"activities",site:"INCAT",kind:"PDF",id:"1_qlCjJOXY6PSc_i9E1oHb8HWupZOriS5"},
  {title:"Stakeholder Engagement & Mini Teaching",subtitle:"Field Study reflection and activity documentation",group:"activities",site:"INCAT",kind:"PDF",id:"154LSOxEQITZwXpSni61srugsb-c73g2J"},
  {title:"Field Study Infographic — INCAT",subtitle:"Original visual activity output",group:"activities",site:"INCAT",kind:"PNG",id:"16vF38QxJoKgbqm_tdUt0907EZBkFwGqc"},

  {title:"School Environment Photo Essay",subtitle:"School culture, facilities, and learning resources",group:"activities",site:"MMSU LHS",kind:"PDF",id:"1KdtSyG8ApzStkVElm_yQyEiCkiHn_hhK"},
  {title:"Learner Diversity Observation Matrix",subtitle:"Differences in learner readiness, confidence, and support",group:"activities",site:"MMSU LHS",kind:"PDF",id:"1mSSrsAYr5hq6VoQcR1-K8sCGDyTCpC7W"},
  {title:"Teaching Strategies — In-Campus",subtitle:"Observed assessment procedures and classroom practices",group:"activities",site:"MMSU LHS",kind:"PDF",id:"1n7zN2NqlFlMgGRlBi-cFR1rRAGt2UvXp"},
  {title:"Lesson Plan Reconstruction",subtitle:"Connecting objectives, learning activities, and assessment",group:"activities",site:"MMSU LHS",kind:"PDF",id:"1R_nuoijMSWMolNFso30Z7BO5G3GK7Ts6"},
  {title:"Assessment of Learning Matrix",subtitle:"Observation of formative and authentic assessments",group:"activities",site:"MMSU LHS",kind:"PDF",id:"15Ajk6RD5b2yO6sAxoBkVPOuHNLeOgEcT"},
  {title:"Classroom Records & School Forms",subtitle:"Purpose and importance of school documentation",group:"activities",site:"MMSU LHS",kind:"PDF",id:"1lUUf32Ko-an-mVBWE--lPnqBEEvACjix"},
  {title:"Technology Integration Audit",subtitle:"Classroom technology, purpose, and learner response",group:"activities",site:"MMSU LHS",kind:"PDF",id:"1wcY55G28Sj8pYthwqjEE1h94sh3A3a4f"},
  {title:"Classroom Management Narrative",subtitle:"Reflection on assessment and professional practice",group:"activities",site:"MMSU LHS",kind:"PDF",id:"14_r1fGPUdo_s0JedND3WJU0RqhWx70DA"},
  {title:"Field Study Infographic — LHS",subtitle:"Original infographic submission",group:"activities",site:"MMSU LHS",kind:"PNG",id:"1jXk74Ncae_-gRGxmsXD4LOPtCMhP9EK_"},

  {title:"DLP — System Unit Assembly & Disassembly",subtitle:"Technical-vocational lesson plan and hands-on procedures",group:"teaching",site:"DEMO",kind:"PDF",id:"19aG6a_3jd42zHAZMWcuY3wk2QD-5NcBo"},
  {title:"DLP — Structured Document in Word",subtitle:"Final demo lesson plan, objectives, and procedures",group:"teaching",site:"DEMO",kind:"PDF",id:"1zHWP3fsgHWy35P4swrp1Ltg7K8NXxsam"},
  {title:"Final Demonstration Presentation",subtitle:"Presentation activities for structured document formatting",group:"teaching",site:"DEMO",kind:"PDF",id:"1P7GwbWhbt0kKXqvEs7HXT1WUI832k-yc"}
];

const photoGrid = document.getElementById("photoGrid");
const photoCount = document.getElementById("photoCount");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
let photoFilter = "all";
let visiblePhotos = originalPhotos.slice();
let currentPhoto = 0;

function renderPhotos() {
  visiblePhotos = originalPhotos.filter(photo => photoFilter === "all" || photo.site === photoFilter);
  photoGrid.replaceChildren();
  visiblePhotos.forEach((photo,index) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "photo-card";
    card.setAttribute("aria-label", "View photograph: " + photo.title);
    const pic = document.createElement("img");
    pic.src = photo.src;
    pic.alt = photo.title + " — " + photo.detail;
    pic.loading = "lazy";
    const overlay = document.createElement("span");
    overlay.className = "photo-overlay";
    const heading = document.createElement("strong");
    heading.textContent = photo.title;
    const sub = document.createElement("span");
    sub.textContent = photo.detail;
    overlay.append(heading,sub);
    card.append(pic,overlay);
    card.addEventListener("click",() => openPhoto(index));
    photoGrid.append(card);
  });
  photoCount.textContent = visiblePhotos.length + " photograph" + (visiblePhotos.length !== 1 ? "s" : "");
}
function setPhotoFilter(filter) {
  photoFilter = filter;
  document.querySelectorAll("[data-photo-filter]").forEach(button => {
    const active = button.dataset.photoFilter === filter;
    button.classList.toggle("is-active",active);
    button.setAttribute("aria-pressed",String(active));
  });
  renderPhotos();
}
function showPhoto() {
  const photo = visiblePhotos[currentPhoto];
  if (!photo) return;
  lightboxImage.src = photo.src;
  lightboxImage.alt = photo.title;
  lightboxCaption.textContent = photo.title + " — " + photo.detail + " · " + (currentPhoto + 1) + " of " + visiblePhotos.length;
}
function openPhoto(index) {
  currentPhoto = index;
  showPhoto();
  if (typeof lightbox.showModal === "function") {
    lightbox.showModal();
    document.body.classList.add("modal-open");
  } else {
    window.open(visiblePhotos[index].src,"_blank","noopener");
  }
}
function closePhoto() {
  if (lightbox.open) lightbox.close();
  document.body.classList.remove("modal-open");
}
function movePhoto(direction) {
  if (!visiblePhotos.length) return;
  currentPhoto = (currentPhoto + direction + visiblePhotos.length) % visiblePhotos.length;
  showPhoto();
}
document.querySelectorAll("[data-photo-filter]").forEach(button => {
  button.addEventListener("click",() => setPhotoFilter(button.dataset.photoFilter));
});
document.getElementById("lightboxClose").addEventListener("click",closePhoto);
document.getElementById("lightboxPrev").addEventListener("click",() => movePhoto(-1));
document.getElementById("lightboxNext").addEventListener("click",() => movePhoto(1));
lightbox.addEventListener("close",() => document.body.classList.remove("modal-open"));
lightbox.addEventListener("click",e => {if (e.target === lightbox) closePhoto();});
document.addEventListener("keydown", e => {
  if (!lightbox.open) return;
  if (e.key === "ArrowLeft") movePhoto(-1);
  if (e.key === "ArrowRight") movePhoto(1);
});

let docFilter = "all";
const docSearch = document.getElementById("docSearch");
const docCount = document.getElementById("docCount");
const docGrid = document.getElementById("documentGrid");
const noDocuments = document.getElementById("noDocuments");

function renderDocuments() {
  const query = docSearch.value.trim().toLowerCase();
  const match = documents.filter(doc => {
    const inGroup = docFilter === "all" || doc.group === docFilter;
    const searchable = [doc.title,doc.subtitle,doc.group,doc.site].join(" ").toLowerCase();
    return inGroup && searchable.includes(query);
  });
  docGrid.replaceChildren();
  match.forEach(doc => {
    const a = document.createElement("a");
    a.className = "doc-card";
    a.href = base + doc.id + "/view";
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.setAttribute("aria-label","Open "+doc.title+" — "+doc.site+" (new tab)");
    const top = document.createElement("div");
    top.className = "doc-top";
    const badge = document.createElement("span");
    badge.textContent = doc.site;
    const icon = document.createElement("span");
    icon.className = "doc-icon";
    icon.textContent = doc.kind;
    top.append(badge,icon);
    const title = document.createElement("h3");
    title.textContent = doc.title;
    const subtitle = document.createElement("p");
    subtitle.textContent = doc.subtitle;
    const bottom = document.createElement("div");
    bottom.className = "doc-bottom";
    const type = document.createElement("span");
    type.textContent = "View original " + doc.kind;
    const arrow = document.createElement("span");
    arrow.textContent = "↗";
    bottom.append(type,arrow);
    a.append(top,title,subtitle,bottom);
    docGrid.append(a);
  });
  noDocuments.hidden = match.length !== 0;
  docCount.textContent = match.length + " of " + documents.length + " verified files";
}
function setDocFilter(filter) {
  docFilter = filter;
  document.querySelectorAll("[data-doc-filter]").forEach(button => {
    const active = button.dataset.docFilter === filter;
    button.classList.toggle("is-active",active);
    button.setAttribute("aria-pressed",String(active));
  });
  renderDocuments();
}
document.querySelectorAll("[data-doc-filter]").forEach(button => {
  button.addEventListener("click", () => setDocFilter(button.dataset.docFilter));
});
docSearch.addEventListener("input",renderDocuments);
document.querySelectorAll("[data-set-doc-filter]").forEach(a => {
  a.addEventListener("click",() => {
    setDocFilter(a.dataset.setDocFilter);
    docSearch.value = a.closest(".school-card-incat") ? "INCAT" : "LHS";
    renderDocuments();
  });
});

const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");
menuToggle.addEventListener("click",() => {
  const open = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded",String(open));
  menuToggle.setAttribute("aria-label",open ? "Close menu" : "Open menu");
  siteNav.classList.toggle("open",open);
});
siteNav.querySelectorAll("a").forEach(link => link.addEventListener("click",() => {
  siteNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded","false");
  menuToggle.setAttribute("aria-label","Open menu");
}));
const progress = document.getElementById("readingProgress");
const siteHeader = document.getElementById("siteHeader");
function trackScroll() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = (max > 0 ? Math.min(100,(window.scrollY / max)*100) : 0) + "%";
  siteHeader.classList.toggle("scrolled",window.scrollY > 20);
}
window.addEventListener("scroll",trackScroll,{passive:true});
document.getElementById("year").textContent = String(new Date().getFullYear());

renderPhotos();
renderDocuments();
trackScroll();
