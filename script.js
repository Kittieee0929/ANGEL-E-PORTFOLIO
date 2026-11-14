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

const search=document.getElementById("fileSearch");
const type=document.getElementById("typeFilter");
const school=document.getElementById("schoolFilter");
const rows=document.getElementById("fileRows");
const count=document.getElementById("resultCount");
const empty=document.getElementById("emptyMessage");

function renderFiles(){
  const query=search.value.trim().toLowerCase();
  const filtered=documents.filter(file=>
    (type.value==="all"||file.group===type.value)&&
    (school.value==="all"||file.site===school.value)&&
    [file.title,file.subtitle,file.site,file.group].join(" ").toLowerCase().includes(query)
  );

  rows.replaceChildren();
  filtered.forEach(file=>{
    const anchor=document.createElement("a");
    anchor.href=base+file.id+"/view";
    anchor.target="_blank";
    anchor.rel="noopener noreferrer";
    anchor.className="file-row";
    anchor.setAttribute("aria-label","Open "+file.title+" — "+file.site+" in a new tab");

    const details=document.createElement("span");
    const title=document.createElement("strong");
    title.className="file-title";
    title.textContent=file.title;
    const description=document.createElement("span");
    description.className="file-description";
    description.textContent=file.subtitle;
    details.append(title,description);

    const location=document.createElement("span");
    location.className="file-place";
    location.textContent=file.site;
    const arrow=document.createElement("span");
    arrow.className="file-arrow";
    arrow.textContent="↗";
    arrow.setAttribute("aria-hidden","true");

    anchor.append(details,location,arrow);
    rows.append(anchor);
  });

  count.textContent=filtered.length+" of "+documents.length+" documents";
  empty.hidden=filtered.length!==0;
}

const schoolParam=new URLSearchParams(window.location.search).get("school");
if(schoolParam&&[...school.options].some(option=>option.value===schoolParam)){
  school.value=schoolParam;
}

search.addEventListener("input",renderFiles);
type.addEventListener("change",renderFiles);
school.addEventListener("change",renderFiles);
renderFiles();
