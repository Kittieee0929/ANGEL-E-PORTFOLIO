"use strict";

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



const allowedPages=["overview","field-study","teaching","archive"];
const pageNames={"overview":"Overview","field-study":"Field Study","teaching":"Teaching Work","archive":"Documents"};
const views=[...document.querySelectorAll("[data-page-view]")];
const navLinks=[...document.querySelectorAll("[data-page-link]")];
const main=document.getElementById("main");
function showPage(){
  const requested=decodeURIComponent(location.hash.substring(1));
  const page=allowedPages.includes(requested)?requested:"overview";
  for(const view of views)view.hidden=view.dataset.pageView!==page;
  for(const link of navLinks){
    const current=link.dataset.pageLink===page;
    if(current)link.setAttribute("aria-current","page");
    else link.removeAttribute("aria-current");
  }
  document.title=pageNames[page]+" | Angel Marcelo Vidad";
  window.scrollTo(0,0);
}
window.addEventListener("hashchange",showPage);
showPage();

const list=document.getElementById("documentList");
const search=document.getElementById("docSearch");
const category=document.getElementById("categoryFilter");
const school=document.getElementById("schoolFilter");
const count=document.getElementById("docCount");
const empty=document.getElementById("noDocuments");
function renderArchive(){
  const query=search.value.trim().toLowerCase();
  const matches=documents.filter(d=>
    (category.value==="all"||d.group===category.value)&&
    (school.value==="all"||d.site===school.value)&&
    [d.title,d.subtitle,d.group,d.site].join(" ").toLowerCase().includes(query)
  );
  list.replaceChildren();
  matches.forEach((d,i)=>{
    const item=document.createElement("a");
    item.className="document-row";
    item.href=base+encodeURIComponent(d.id)+"/view";
    item.target="_blank";
    item.rel="noopener noreferrer";
    item.setAttribute("aria-label","Open "+d.title+" ("+d.site+") in a new tab");
    const index=document.createElement("span");index.className="document-index";index.textContent=String(i+1).padStart(2,"0");
    const body=document.createElement("span");
    const title=document.createElement("span");title.className="document-title";title.textContent=d.title;
    const description=document.createElement("span");description.className="document-subtitle";description.textContent=d.subtitle;
    body.append(title,description);
    const site=document.createElement("span");site.className="document-site";site.textContent=d.site;
    const arrow=document.createElement("span");arrow.className="document-arrow";arrow.textContent="↗";arrow.setAttribute("aria-hidden","true");
    item.append(index,body,site,arrow);
    list.append(item);
  });
  count.textContent=matches.length+" of "+documents.length+" files";
  empty.hidden=matches.length!==0;
}
[search,category,school].forEach(el=>el.addEventListener(el===search?"input":"change",renderArchive));
document.querySelectorAll("[data-open-school]").forEach(button=>{
  button.addEventListener("click",()=>{
    category.value="all";
    school.value=button.dataset.openSchool;
    search.value="";
    renderArchive();
    location.hash="archive";
  });
});
document.getElementById("year").textContent=String(new Date().getFullYear());
renderArchive();
