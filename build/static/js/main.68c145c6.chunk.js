(this["webpackJsonpvaccine-notifire-ui"]=this["webpackJsonpvaccine-notifire-ui"]||[]).push([[0],{160:function(e,t,n){},161:function(e,t,n){},162:function(e,t,n){},267:function(e,t,n){},268:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(13),c=n.n(r),o=(n(160),n(161),n(136)),s=n(322),l=n(14),d=n(51),u=(n(162),n(11)),b=n(309),j=n(310),m=n(141),p=n(325),h=n(307),f=n(18),g=n.n(f),x=n(28),O=n(36),v=n(300),y=n(329),w=n(303),S=n(304),C=n(323),k=n(306),N=n(308),_=n(324),I=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)(null),c=Object(u.a)(r,2),o=c[0],s=c[1],l=Object(a.useRef)([]),d=Object(a.useCallback)(function(){var e=Object(x.a)(g.a.mark((function e(t){var n,a,r,c,o,d,u=arguments;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:"GET",a=u.length>2&&void 0!==u[2]?u[2]:null,r=u.length>3&&void 0!==u[3]?u[3]:{},e.prev=3,i(!0),c=new AbortController,l.current.push(c),e.next=9,fetch(t,{method:n,body:a,headers:r,signal:c.signal});case 9:return o=e.sent,e.next=12,o.json();case 12:if(d=e.sent,l.current=l.current.filter((function(e){return e!==c})),o.ok){e.next=16;break}throw new Error(d.message);case 16:return i(!1),e.abrupt("return",d);case 20:throw e.prev=20,e.t0=e.catch(3),s(e.t0.message||"Somthing went wrong."),i(!1),new Error(e.t0.message);case 25:case"end":return e.stop()}}),e,null,[[3,20]])})));return function(t){return e.apply(this,arguments)}}(),[]);Object(a.useEffect)((function(){return function(){l.current.forEach((function(e){return e.abort()}))}}),[]);return{isLoading:n,error:o,sendRequest:d,clearError:function(){s(null)}}},R=n(3),T=Object(_.a)((function(e){return{root:{"& .MuiDialog-paperWidthSm":{width:"40vw","@media(max-width: 700px)":{width:"85vw"}},"& .MuiDialogTitle-root":{backgroundColor:e.palette.primary.main,color:"white"}},content:{display:"flex",justifyContent:"center",padding:e.spacing(2),flexDirection:"column"},actions:{padding:"10px"},btn:{"&:disabled":{cursor:"not-allowed"},margin:"auto"}}})),F=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,B=Object(a.forwardRef)((function(e,t){return Object(R.jsx)(v.a,Object(O.a)({direction:"down",ref:t},e))})),L=function(e){var t=T(),n=Object(a.useState)(""),i=Object(u.a)(n,2),r=i[0],c=i[1],o=Object(a.useState)(!1),s=Object(u.a)(o,2),l=s[0],d=s[1],b=I(),j=b.isLoading,p=b.sendRequest,f=e.open,O=e.onCloseModal,v=e.title,_=e.userData,L=e.stateId,z=e.districtId,V=e.unSubScribe,A=function(){var e=Object(x.a)(g.a.mark((function e(t){var n,a,i;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(V){e.next=15;break}return n=_.ageGroup,a={minAge:n,districtId:z,stateId:L,emailId:t},e.prev=3,e.next=6,p("https://api.vaccinenotifier.co.in/vaccine-notifier/addSubscriber","POST",JSON.stringify(a),{"Content-Type":"application/json"});case 6:alert("You have successfully subcribed for email notification, you will receive an email as soon as centers are available"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(3),console.log(e.t0),alert("Sorry somthing went wrong, please try again later.");case 13:e.next=26;break;case 15:return i={emailId:t},e.prev=16,e.next=19,p("https://api.vaccinenotifier.co.in/vaccine-notifier/deleteSubscriber","POST",JSON.stringify(i),{"Content-Type":"application/json"});case 19:alert("You have successfully un-subscribe for email notification, you will not receive any email."),e.next=26;break;case 22:e.prev=22,e.t1=e.catch(16),console.log(e.t1),alert("Sorry somthing went wrong, please try again later.");case 26:O();case 27:case"end":return e.stop()}}),e,null,[[3,9],[16,22]])})));return function(t){return e.apply(this,arguments)}}();return Object(R.jsxs)(y.a,{open:f,TransitionComponent:B,onClose:O,className:t.root,children:[Object(R.jsx)(w.a,{children:v}),Object(R.jsxs)(S.a,{className:t.content,children:[Object(R.jsx)(C.a,{fullWidth:!0,variant:"outlined",label:"Email",value:r,onChange:function(e){c(e.target.value);var t=F.test(e.target.value);d(t)},required:!0}),V?null:Object(R.jsx)(m.a,{variant:"subtitle2",children:"Please provide an active email address."})]}),Object(R.jsx)(k.a,{className:t.actions,children:j?Object(R.jsxs)("div",{style:{height:"100%",display:"flex",justifyContent:"center",alignItems:"center",width:"100%"},children:[Object(R.jsx)(N.a,{size:30})," "]}):Object(R.jsx)(h.a,{className:t.btn,variant:"contained",color:"primary",disabled:!l,onClick:function(){return A(r)},children:"Submit"})})]})};var z=function(e){var t=Object(a.useState)(!1),n=Object(u.a)(t,2),i=n[0],r=n[1],c=Object(l.h)().search,o=new URLSearchParams(c).get("unSubscribe");console.log(typeof o),console.log(o);var s=Object(a.useCallback)((function(){r(!0)}),[]);return Object(a.useEffect)((function(){"true"===o&&s()}),[o,s]),Object(R.jsxs)("div",{children:[Object(R.jsx)(L,{title:"Unsubscribe from email notification",unSubScribe:!0,open:i,onCloseModal:function(){r(!1)}}),Object(R.jsx)(b.a,{position:"fixed",children:Object(R.jsxs)(j.a,{children:[Object(R.jsx)(m.a,{variant:"h6",children:"VaccineNotifier"}),Object(R.jsx)(p.a,{flexGrow:"1"}),Object(R.jsx)(h.a,{variant:"outlined",color:"secondary",onClick:s,children:"Un-subscribe"})]})})]})},V=n(321),A=n(137),E=n(314),G=n(315),W=n(305),D=n(332),P=n(316),M=n(326),q=n(55),H=n(65),J=n(311),U=n(312),Y=(n(267),function(e){var t=Object(q.b)(e),n=Object(u.a)(t,2),a=n[0],r=n[1],c=r.error&&r.touched?r.error:"",o=e.visiblilitytoggler;return Object(R.jsx)(i.a.Fragment,{children:Object(R.jsxs)("div",{className:"Input",children:[Object(R.jsx)(C.a,Object(O.a)({autoComplete:"off",type:e.type,name:e.name,helperText:c,style:{maxWidth:"35rem",width:"100%"},variant:"outlined",label:e.label,error:r.error&&r.touched,multiline:e.isMultiline,rows:4},a)),"true"===e.visibilityicon?Object(R.jsx)("div",{onClick:o,className:0===c.length?"Icon":["Icon","IconInvalid"].join(" "),children:"password"===e.type?Object(R.jsx)(J.a,{color:"primary"}):Object(R.jsx)(U.a,{color:"primary"})}):null]})})}),Z=n(327),$=i.a.forwardRef((function(e,t){var n=Object(q.b)(e),a=Object(u.a)(n,2),i=a[0],r=a[1],c=e.options,o=e.name,s=e.type,l=e.label,d=e.onChange,b=e.disabled;return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)("div",{className:"Input",children:Object(R.jsx)(Z.a,{options:c,getOptionLabel:function(e){return e.name||""},onChange:d,disabled:b,renderInput:function(e){return Object(R.jsx)(C.a,Object(O.a)(Object(O.a)(Object(O.a)({label:l,type:s||"text"},e),i),{},{name:o,inputProps:Object(O.a)(Object(O.a)({},e.inputProps),{},{autoComplete:"off"}),error:r.error&&r.touched,variant:"outlined",autoComplete:"off"}))}})}),r.error&&r.touched?Object(R.jsx)("span",{style:{color:"red"},children:r.error}):null]})})),K=Object(_.a)({root:{alignItems:"center",justifyContent:"space-around",display:"flex",width:"100%",padding:"0.5rem",flexWrap:"wrap",height:"100%","@media(max-width : 52rem)":{width:"100%"}},formContainer:{padding:"2rem 1rem",textAlign:"center",width:"25rem"},sybmitBtn:{marginTop:"1rem"}}),Q=function(e){var t=K(),n=Object(a.useState)([{id:null,name:""}]),i=Object(u.a)(n,2),r=i[0],c=i[1],o=Object(a.useState)([{id:null,name:""}]),s=Object(u.a)(o,2),d=s[0],b=s[1],j=Object(a.useState)(!0),m=Object(u.a)(j,2),f=m[0],O=m[1],v=Object(a.useState)(""),y=Object(u.a)(v,2),w=y[0],S=y[1],C=Object(a.useState)(""),k=Object(u.a)(C,2),N=k[0],_=k[1],T=Object(a.useState)(),F=Object(u.a)(T,2),B=F[0],z=F[1],V=Object(a.useState)(),J=Object(u.a)(V,2),U=J[0],Z=J[1],Q=Object(a.useState)(!1),X=Object(u.a)(Q,2),ee=X[0],te=X[1],ne=Object(l.g)(),ae=e.setRefreshRedults,ie=I().sendRequest;Object(a.useEffect)((function(){try{(function(){var e=Object(x.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie("https://cdn-api.co-vin.in/api/v2/admin/location/states");case 2:t=e.sent,console.log(t),c(t.states.map((function(e){return{id:e.state_id,name:e.state_name}})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}catch(e){alert("Somthing went wrong while fetching all states, please try again later.")}}),[ie]);var re=function(){var e=Object(x.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ie("https://cdn-api.co-vin.in/api/v2/admin/location/districts/".concat(t));case 3:n=e.sent,b(n.districts.map((function(e){return{id:e.district_id,name:e.district_name}}))),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert("Somthing went wrong while fetching districts, please try again later.");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),ce=function(){te(!1)},oe=function(){te(!0)};return Object(R.jsx)(R.Fragment,{children:Object(R.jsx)(q.a,{enableReinitialize:!0,initialValues:{state:"",district:"",pincode:"",ageGroup:18},validationSchema:H.a({pincode:H.b().trim().length(6),state:H.b().required().oneOf(r.map((function(e){return e.name})),"select a valid state"),district:H.b().required("please provide a valid district").oneOf(d.map((function(e){return e.name})),"select a valid district or select again from the list")}),onSubmit:function(){var e=Object(x.a)(g.a.mark((function e(t,n){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=n.setSubmitting,n.resetForm,Object(A.a)(n,["setSubmitting","resetForm"]),console.log(t),a(!1),console.log("submit clicked"),ne.push("/home/nextAvailableSlots?districtId=".concat(U,"&minAge=").concat(t.ageGroup)),ae();case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),children:function(e){return Object(R.jsxs)(E.a,{className:t.root,maxWidth:"md",children:[Object(R.jsx)(L,{open:ee,title:"Enter your email to get email notification",onCloseModal:ce,stateId:B,districtId:U,userData:e.values}),Object(R.jsx)(G.a,{className:t.formContainer,children:Object(R.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(R.jsx)($,{name:"state",options:r,label:"State",inputValue:N,disabled:!1,onChange:function(){var t=Object(x.a)(g.a.mark((function t(n,a){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(a),t.next=3,re(null===a||void 0===a?void 0:a.id);case 3:O(!1),a?(_(null===a||void 0===a?void 0:a.name),e.setFieldValue("state",null===a||void 0===a?void 0:a.name),z(null===a||void 0===a?void 0:a.id)):(S(""),_(""),O(!0),z(null),Z(null),e.setFieldValue("district",""),e.setFieldValue("state",""));case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}),Object(R.jsx)($,{name:"district",options:d,disabled:f,label:"District",inputValue:w,onChange:function(t,n){console.log(n),e.setFieldValue("district",null===n||void 0===n?void 0:n.name),null!==n?(S(null===n||void 0===n?void 0:n.name),Z(null===n||void 0===n?void 0:n.id)):(S(""),Z(null))}}),Object(R.jsx)(Y,{name:"pincode",label:"Pincode",variant:"outlined"}),Object(R.jsx)(W.a,{component:"legend",style:{textAlign:"initial",paddingLeft:"1rem",paddingTop:"0.5rem"},children:"Age Group"}),Object(R.jsxs)(D.a,{"aria-label":"age-group",style:{flexDirection:"row",paddingLeft:"1rem"},value:e.values.ageGroup,onChange:function(t){e.setFieldValue("ageGroup",+t.target.value)},children:[Object(R.jsx)(P.a,{value:18,control:Object(R.jsx)(M.a,{}),label:"18+"}),Object(R.jsx)(P.a,{value:45,control:Object(R.jsx)(M.a,{}),label:"45+"})]}),Object(R.jsxs)(p.a,{display:"flex",width:"100%",justifyContent:"space-around",children:[Object(R.jsx)(h.a,{type:"button",size:"large",variant:"outlined",color:"primary",disabled:!(e.isValid&&e.dirty),className:t.sybmitBtn,onClick:oe,children:"Notify me"}),Object(R.jsx)(h.a,{type:"submit",size:"large",variant:"contained",disabled:!e.isValid||e.isSubmitting,color:"primary",className:t.sybmitBtn,children:"Search"})]})]})})]})}})})},X=n(317),ee=n(318),te=n(319),ne=n(140),ae=n(331),ie=n(320),re=Object(_.a)((function(e){return{cardRoot:{minWidth:375,maxWidth:375,overflow:"auto","@media(max-width: 700px)":{minWidth:300,maxWidth:300,margin:"auto"}},root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",width:"max-content",backgroundColor:e.palette.background.paper,"& .MuiGridListTile-tile":{display:"flex"},"@media(max-width: 700px)":{maxWidth:"100%",margin:"auto"}},gridList:{flexWrap:"nowrap",transform:"translateZ(0)"},title:{color:e.palette.primary.light},titleBar:{background:"linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"},ft1_1:{"@media(max-width: 700px)":{fontSize:"1.1rem"}},ft0_9:{"@media(max-width: 700px)":{fontSize:"0.9rem"}},mobileView:{"@media(max-width: 700px)":{flexDirection:"column",borderBottom:"3px solid #1c405491",padding:5,marginLeft:-e.spacing(1),marginRight:-e.spacing(1)}}}})),ce=function(e){var t=e.name,n=e.pincode,a=e.sessions,i=e.state_name,r=e.district_name,c=e.block_name,o=e.fee_type,s=re();return Object(R.jsxs)(p.a,{display:"flex",justifyContent:"flex-start",gridGap:"0.5rem",marginBottom:"1rem",className:s.mobileView,children:[Object(R.jsx)(G.a,{className:s.cardRoot,children:Object(R.jsxs)(X.a,{children:[Object(R.jsx)(m.a,{className:s.ft1_1,variant:"h5",component:"h4",children:t}),Object(R.jsxs)(m.a,{className:s.ft0_9,color:"textSecondary",children:[c,", ",i,", ",r,", ",n]}),Object(R.jsxs)(m.a,{variant:"h5",component:"h3",style:{fontSize:"1rem"},children:["Fees: "," ","Free"===o?Object(R.jsx)("strong",{style:{color:"#1ab64f"},children:o}):Object(R.jsx)("strong",{children:o})]})]})}),Object(R.jsx)("div",{className:s.root,children:Object(R.jsx)(ee.a,{className:s.gridList,children:a.map((function(e){return Object(R.jsxs)(te.a,{style:{width:"fit-content",height:"auto",display:"flex"},children:[Object(R.jsxs)(ne.a,{elevation:0,style:{display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center",height:"100%",padding:"1rem"},children:[Object(R.jsx)(m.a,{variant:"h5",component:"h3",style:{fontSize:"1rem"},children:e.date}),Object(R.jsx)(ae.a,{color:"primary",label:e.available_capacity}),Object(R.jsxs)(m.a,{variant:"h5",component:"span",style:{fontSize:"1rem",marginTop:"0.4rem",color:18===e.min_age_limit?"#1ab64f":"#d53b4c"},children:[e.min_age_limit,"+"]}),Object(R.jsx)(m.a,{variant:"h5",component:"p",style:{fontSize:"0.8rem",marginTop:"0.4rem"},children:e.vaccine})]}),Object(R.jsx)(ie.a,{orientation:"vertical",style:{height:"100%"}})]},e.session_id)}))})})]})},oe=function(e){return Object(R.jsx)(R.Fragment,{children:Object(R.jsx)("div",{style:{position:"fixed",width:"100vw",height:"100vh",zIndex:"100",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0, 0, 0, 0.4)",top:"0",left:"0"},children:Object(R.jsx)(N.a,{size:50})})})},se=Object(_.a)((function(e){return{slotHeading:{borderBottom:"1px solid #1c4e6ba3",marginTop:-e.spacing(1),marginRight:-e.spacing(1),marginBottom:e.spacing(1),marginLeft:-e.spacing(1),textAlign:"center",backgroundColor:e.palette.primary.main,padding:"0.5rem 0"},noResults:{"@media(max-width: 700px)":{height:"220px"}}}})),le=function(e){var t=se(),n=Object(l.h)(),i=I(),r=i.isLoading,c=i.sendRequest,o=Object(a.useState)([]),s=Object(u.a)(o,2),d=s[0],b=s[1],j=e.refreshRedults,h=new URLSearchParams(n.search),f=h.get("districtId"),O=h.get("minAge");return Object(a.useEffect)((function(){(function(){var e=Object(x.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c("https://api.vaccinenotifier.co.in/vaccine-notifier/getNextSlot?district_id=".concat(f,"&minAge=").concat(O));case 3:t=e.sent,b(t),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),alert("Somthing went wrong while searching suitable centers for you, please try again later.");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[c,f,O,j]),Object(R.jsx)(R.Fragment,{children:r?Object(R.jsx)(oe,{}):Object(R.jsxs)(p.a,{overflow:"auto",maxHeight:"58vh",border:"1px solid #1c4e6ba3",padding:"0.5rem",children:[Object(R.jsx)("div",{className:t.slotHeading,children:Object(R.jsx)(m.a,{variant:"h4",component:"h5",style:{color:"white"},children:"Available Centers"})}),d.length>0?d.map((function(e){return Object(R.jsx)(ce,{name:e.name,pincode:e.pincode,sessions:e.sessions,state_name:e.state_name,district_name:e.district_name,block_name:e.block_name,fee_type:e.fee_type},e.center_id)})):Object(R.jsx)(p.a,{className:t.noResults,height:"175px",display:"flex",justifyContent:"center",flexDirection:"column",children:Object(R.jsxs)("ul",{children:[Object(R.jsx)("li",{children:Object(R.jsx)(m.a,{variant:"h6",component:"strong",style:{fontSize:"16.5px"},children:"Sorry, we could not find centers for you now. Please provide us your email by clicking NOTIFY ME button. You will receive an email as soon as centers are availabe in your district."})}),Object(R.jsx)("li",{children:Object(R.jsx)(m.a,{children:"Meanwhile, please sanatize your hands regularly, wear mask and maintain social distancing."})}),Object(R.jsx)("li",{children:Object(R.jsx)(m.a,{children:"Thank you for using VaccineNotifier."})})]})})]})})},de=Object(_.a)((function(e){return{root:{padding:e.spacing(3),"@media(max-width: 700px)":{padding:e.spacing(1)}},slotGrid:{marginTop:e.spacing(3),padding:e.spacing(1),"@media(max-width: 700px)":{maxHeight:"40vh"}},slotHeading:{borderBottom:"1px solid #1c4e6ba3",marginTop:0,marginRight:-e.spacing(1),marginBottom:e.spacing(1),marginLeft:-e.spacing(1),textAlign:"center"},bookSlotBtn:{margin:"auto",marginTop:e.spacing(2),marginBottom:e.spacing(2)}}})),ue=function(e){var t=Object(a.useState)(0),n=Object(u.a)(t,2),i=n[0],r=n[1],c=de();return Object(R.jsxs)(V.a,{style:{width:"100%"},className:c.root,container:!0,direction:"column",children:[Object(R.jsx)(V.a,{item:!0,xs:12,md:12,lg:12,xl:12,children:Object(R.jsx)(Q,{setRefreshRedults:function(){r((function(e){return e+1}))}})}),Object(R.jsx)(V.a,{item:!0,xs:12,md:12,lg:12,xl:12,className:c.slotGrid,children:Object(R.jsxs)(l.b,{path:"/home/nextAvailableSlots",children:[Object(R.jsx)(le,{refreshRedults:i}),Object(R.jsx)(p.a,{width:"100%",display:"flex",justifyContent:"center",children:Object(R.jsx)(h.a,{className:c.bookSlotBtn,color:"primary",variant:"contained",onClick:function(){window.open("https://www.cowin.gov.in/home")},children:"Book your slot"})})]})})]})};var be=function(e){var t=Object(R.jsxs)(l.d,{children:[Object(R.jsx)(l.b,{path:"/home",children:Object(R.jsx)(ue,{})}),Object(R.jsx)(l.a,{to:"/home"})]});return Object(R.jsxs)(d.a,{children:[Object(R.jsx)(z,{}),Object(R.jsx)("main",{children:t})]})},je=Object(o.a)({palette:{primary:{main:"#0a4e6b",light:"#457a99",dark:"#002640"},secondary:{main:"#65f384",light:"#9dffb5",dark:"#20bf55"}}});var me=function(){return Object(R.jsx)(s.a,{theme:je,children:Object(R.jsx)(be,{})})},pe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,333)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))};c.a.render(Object(R.jsx)(i.a.StrictMode,{children:Object(R.jsx)(me,{})}),document.getElementById("root")),pe()}},[[268,1,2]]]);
//# sourceMappingURL=main.68c145c6.chunk.js.map