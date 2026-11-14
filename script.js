"use strict";

const base = "https://drive.google.com/file/d/";
const documents = [
  {title:"Curriculum Vitae",subtitle:"A profile of educational background, relevant training, skills, experiences, and recognitions included in the submitted curriculum vitae.",group:"profile",site:"CV",kind:"PDF",id:"1n2Dxwf81ZKYn9kp_oWRRfUBrFf5oGsor"},
  {title:"Week 1 — First Steps in Teaching",subtitle:"An initial journal on classroom assistance, beginning lesson preparation, and early experiences supporting instructional activities.",group:"journals",site:"INCAT",kind:"PDF",id:"1CiZ8ptR_G9tHwhNe0DKUk9gEagJ_IufV"},
  {title:"Week 2 — Classroom Participation",subtitle:"A weekly record of assisting learners during practical computer work and observing how activities are carried out in the laboratory.",group:"journals",site:"INCAT",kind:"PDF",id:"1S9fd06r2PicohMjSCv-gxsORmUYBXOtR"},
  {title:"Week 3 — Learning Through Assessment",subtitle:"Reflections and documentation related to summative testing, performance rubrics, and tasks involving system unit components.",group:"journals",site:"INCAT",kind:"PDF",id:"1xlnNRmeR7CH5gUfO3AnE8HPaB1oOt_rc"},
  {title:"Week 4 — Teaching Practice",subtitle:"A record of teaching preparation and classroom involvement, including document-formatting instruction and guided learner activities.",group:"journals",site:"INCAT",kind:"PDF",id:"14YOSBuUapQnOiBnuGcw7keOLiYBzjQEb"},
  {title:"Week 5 — Final Demonstration",subtitle:"Journal documentation of the final demonstration topic on structured documents in Microsoft Word, including related learning activities and quizzes.",group:"journals",site:"INCAT",kind:"PDF",id:"1JRoBSsUgDQQ7zVQwLBXWpxdXuvJwED_T"},
  {title:"Week 8 — Assessment and Planning",subtitle:"Field Study reflections on classroom observation, the planning of meaningful tasks, and preparing lesson components for instruction.",group:"journals",site:"MMSU LHS",kind:"PDF",id:"1iaGfLEJdVvCS7sj7X7i1M3qbDj4JmyFL"},
  {title:"Week 9 — Preparing Instructional Materials",subtitle:"A journal focused on planning instructional materials and activities related to construction site preparation and classroom demonstrations.",group:"journals",site:"MMSU LHS",kind:"PDF",id:"1IhtrRctUzMw8-1190bgguOGRIuQoVIPV"},
  {title:"Week 10 — Final Lesson Preparation",subtitle:"A record of refining lesson delivery plans, classroom activities, and assessment considerations as teaching preparation progressed.",group:"journals",site:"MMSU LHS",kind:"PDF",id:"1ACulOQOwp13qQ8jMRHV8HfsshXXyOhLB"},

  {title:"School Environment Photo Essay",subtitle:"An observation activity documenting school facilities, learning spaces, safety, stewardship, and features of the school environment.",group:"activities",site:"INCAT",kind:"PDF",id:"1bUfizmShmaXXT0Gua28d21jAvdTO9tCg"},
  {title:"Classroom Management Narrative",subtitle:"A narrative exploring classroom routines and management practices observed during the off-campus Field Study experience.",group:"activities",site:"INCAT",kind:"PDF",id:"1btTFQQN753aiImFPNAOYVA2kNhKwgH1z"},
  {title:"Teaching Strategies Observation Cards",subtitle:"Observation notes on instructional approaches, teacher questioning, classroom communication, and how different strategies are used.",group:"activities",site:"INCAT",kind:"PDF",id:"1x2hlqhuTneulfzBoQM_Z1_hvalP80DGL"},
  {title:"Technology Integration Audit",subtitle:"A classroom-focused review of instructional technology, its teaching purpose, and observed learner responses.",group:"activities",site:"INCAT",kind:"PDF",id:"1_qlCjJOXY6PSc_i9E1oHb8HWupZOriS5"},
  {title:"Stakeholder Engagement & Mini Teaching",subtitle:"Documentation and reflection on engagement with the school community and selected mini-teaching activities.",group:"activities",site:"INCAT",kind:"PDF",id:"154LSOxEQITZwXpSni61srugsb-c73g2J"},
  {title:"Field Study Infographic — INCAT",subtitle:"The original visual output created as part of Field Study activity requirements at INCAT, linked as a submitted file.",group:"activities",site:"INCAT",kind:"PNG",id:"16vF38QxJoKgbqm_tdUt0907EZBkFwGqc"},

  {title:"School Environment Photo Essay",subtitle:"An observation output examining the school environment, facilities, culture, and resources that support teaching and learning.",group:"activities",site:"MMSU LHS",kind:"PDF",id:"1KdtSyG8ApzStkVElm_yQyEiCkiHn_hhK"},
  {title:"Learner Diversity Observation Matrix",subtitle:"An activity examining differences in student readiness, learning confidence, and the types of support learners may need.",group:"activities",site:"MMSU LHS",kind:"PDF",id:"1mSSrsAYr5hq6VoQcR1-K8sCGDyTCpC7W"},
  {title:"Teaching Strategies — In-Campus",subtitle:"Classroom observation notes concerning teaching strategies, instructional procedures, and approaches to classroom assessment.",group:"activities",site:"MMSU LHS",kind:"PDF",id:"1n7zN2NqlFlMgGRlBi-cFR1rRAGt2UvXp"},
  {title:"Lesson Plan Reconstruction",subtitle:"An activity examining how instructional objectives, classroom learning tasks, and assessments connect within a lesson plan.",group:"activities",site:"MMSU LHS",kind:"PDF",id:"1R_nuoijMSWMolNFso30Z7BO5G3GK7Ts6"},
  {title:"Assessment of Learning Matrix",subtitle:"A structured observation of assessment practices, including formative assessment and authentic learning tasks.",group:"activities",site:"MMSU LHS",kind:"PDF",id:"15Ajk6RD5b2yO6sAxoBkVPOuHNLeOgEcT"},
  {title:"Classroom Records & School Forms",subtitle:"An activity exploring the purpose of classroom records and school forms and their importance to teaching responsibilities.",group:"activities",site:"MMSU LHS",kind:"PDF",id:"1lUUf32Ko-an-mVBWE--lPnqBEEvACjix"},
  {title:"Technology Integration Audit",subtitle:"A review of the classroom technologies observed, their instructional purposes, and how they relate to learning activities.",group:"activities",site:"MMSU LHS",kind:"PDF",id:"1wcY55G28Sj8pYthwqjEE1h94sh3A3a4f"},
  {title:"Classroom Management Narrative",subtitle:"Reflective notes on classroom management, learning assessment, and professional practices observed in the in-campus placement.",group:"activities",site:"MMSU LHS",kind:"PDF",id:"14_r1fGPUdo_s0JedND3WJU0RqhWx70DA"},
  {title:"Field Study Infographic — LHS",subtitle:"The original infographic submitted as part of Field Study activities at MMSU Laboratory High School.",group:"activities",site:"MMSU LHS",kind:"PNG",id:"1jXk74Ncae_-gRGxmsXD4LOPtCMhP9EK_"},

  {title:"DLP — System Unit Assembly & Disassembly",subtitle:"A detailed technical-vocational lesson plan covering component handling, sequence of assembly and disassembly, and practical instruction.",group:"teaching",site:"DEMO",kind:"PDF",id:"19aG6a_3jd42zHAZMWcuY3wk2QD-5NcBo"},
  {title:"DLP — Structured Document in Word",subtitle:"The detailed lesson plan for the final demonstration, outlining objectives, content, activities, and document-formatting instruction.",group:"teaching",site:"DEMO",kind:"PDF",id:"1zHWP3fsgHWy35P4swrp1Ltg7K8NXxsam"},
  {title:"Final Demonstration Presentation",subtitle:"Presentation materials for classroom delivery and learning activities focused on creating and formatting structured documents.",group:"teaching",site:"DEMO",kind:"PDF",id:"1P7GwbWhbt0kKXqvEs7HXT1WUI832k-yc"}
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
    const category=document.createElement("span");
    category.className="file-category";
    category.textContent=({profile:"Profile",journals:"Weekly journal",activities:"Field Study activity",teaching:"Teaching material"})[file.group]||"Document";
    details.append(category);
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
