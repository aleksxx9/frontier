(this.webpackJsonpweb_app=this.webpackJsonpweb_app||[]).push([[0],{159:function(e,a,t){e.exports=t(268)},164:function(e,a,t){},268:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(10),s=t.n(i),o=(t(164),t(132)),c=t(133),l=(t(340),t(318),t(319),t(317)),m=(t(321),t(57));t(325),t(322),t(323),t(324),t(101),t(102),Object(c.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginRight:240},title:{flexGrow:1,marginLeft:240},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(o.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-start"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginRight:240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginRight:0}}}));var d=t(342),u=t(328),p=t(334),g=t(330),f=t(329),h=t(80),w=t.n(h),E=t(326);Object(c.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));var b=t(2),y=t(343),v=t(337),S=t(336),x=function(e){var a={};return e.firstName||(a.firstName="Required"),e.password||(a.password="Required"),e.lastName||(a.lastName="Required"),e.email||(a.email="Required"),!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)&&e.email&&(a.email="Invalid email address"),e.repeatPassword||(a.repeatPassword="Required"),e.password!=e.repeatPassword&&(a.repeatPassword="Passwords must match"),e.password&&e.password.length<"6"&&(a.password="Password must be longer than 6 symbols"),a},O=t(137),N=t.n(O),j=t(331),_=t(338),P=t(19),R=t(333),k=t(35),A=t(332),I=t(138),T=t.n(I),D=Object(c.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function C(e){return r.a.createElement(_.a,Object.assign({elevation:6,variant:"filled"},e))}var V=function(e){var a=e.input,t=e.label,n=e.meta,i=n.asyncValidating,s=n.invalid,o=n.touched,c=n.error,l=Object(b.a)(e,["input","label","meta"]);return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(p.a,Object.assign({InputProps:!i&&o&&s&&c?{endAdornment:r.a.createElement(j.a,null,r.a.createElement(y.a,{title:r.a.createElement("span",{style:{fontSize:"15px"}},o&&c),style:{width:"120px",fontSize:"50px",backgroundColor:"blue"}},r.a.createElement(N.a,{style:{color:"red"}})))}:i?{endAdornment:r.a.createElement(A.a,{color:"secondary"})}:i||c||!o?{}:{endAdornment:r.a.createElement(T.a,{style:{color:"green"}})},id:a.name,style:{margin:"10px 0px"},variant:"outlined",fullWidth:!0,label:t,placeholder:t,error:c&&o&&s,required:!0},a,l))))},q=function(e){var a=Object(k.c)((function(e){return e.showSuccessMessage})),t=D(),n=e.handleSubmit,i=e.submitting,s=Object(P.a)(),o=Object(R.a)(s.breakpoints.up("sm"));return r.a.createElement(E.a,{component:"main",maxWidth:"xs"},r.a.createElement(l.a,null),r.a.createElement("div",{className:t.paper},r.a.createElement(d.a,{className:t.avatar},r.a.createElement(w.a,null)),r.a.createElement(m.a,{component:"h1",variant:"h5"},"Sign up"),r.a.createElement("form",{className:t.form,onSubmit:n,noValidate:!0},r.a.createElement(f.a,{container:!0,spacing:o?2:0},r.a.createElement(f.a,{item:!0,xs:12,sm:6},r.a.createElement(v.a,{name:"firstName",type:"text",component:V,label:"First Name",autoComplete:"fname"})),r.a.createElement(f.a,{item:!0,xs:12,sm:6},r.a.createElement(v.a,{name:"lastName",type:"text",component:V,label:"Last Name"}))),r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(v.a,{name:"email",type:"email",component:V,label:"Email "}),r.a.createElement(v.a,{name:"password",type:"password",component:V,label:"Password"}),r.a.createElement(v.a,{name:"repeatPassword",type:"password",component:V,label:"Repeat Password"}),a?r.a.createElement(C,{severity:"success"},"Success"):"",r.a.createElement(u.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,disabled:i},"Sign Up")),r.a.createElement(f.a,{justify:"flex-end",container:!0},r.a.createElement(f.a,{item:!0},r.a.createElement(g.a,{href:"#",variant:"body2"},"Already have an account? Sign in"))))))};q=Object(S.a)({form:"asyncValidation",onSubmitSuccess:function(e,a,t){t.reset("asyncValidation"),t.dispatch({type:"Success"})},onSubmitFail:function(e,a){for(var t=arguments.length,n=new Array(t>2?t-2:0),r=2;r<t;r++)n[r-2]=arguments[r];n[1].dispatch({type:"Error"})},validate:x,asyncValidate:function(e){return new Promise((function(e){e()})).then((function(){if(["a@a.com","paul","george","ringo"].includes(e.email))throw{email:"This email already registered"}}))},asyncBlurFields:["email"]})(q);var B=q=Object(k.b)((function(e){return{showSuccessMessage:e.showSuccessMessage}}))(q),M=t(140),W=t.n(M),F=function(e){return W.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:console.log("You submitted:\n\n".concat(JSON.stringify(e,null,2)));case 1:case"end":return a.stop()}}))},L=t(335),X=t(141),J=t(41);function U(){return r.a.createElement(m.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ","My awesome website ",(new Date).getFullYear(),".")}var Z=function(){return r.a.createElement("div",{className:"App",style:{height:"100vh"}},r.a.createElement(X.a,null,r.a.createElement(J.c,null,r.a.createElement(J.a,{path:"/"},r.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-around",flexDirection:"column",height:"80vh"}},r.a.createElement(B,{onSubmit:F}))))),r.a.createElement(L.a,{mt:8},r.a.createElement(U,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=t(16),G=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"Success":return!0;case"Error":return!1;default:return e}},Y=t(341),$=Object(z.b)({form:Y.a,showSuccessMessage:G}),H=Object(z.c)($,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(r.a.createElement(k.a,{store:H},r.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[159,1,2]]]);
//# sourceMappingURL=main.44da38ee.chunk.js.map