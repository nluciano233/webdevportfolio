function wave(){var e=document.getElementById("planeWave"),t=1245e3,i="#1D1D1D",s=new THREE.PerspectiveCamera(55,window.innerWidth/window.innerHeight,1,4e5);s.position.z=1e4,s.position.y=1e4;var n=new THREE.Scene;n.fog=new THREE.Fog(i,1,3e5);var o=new THREE.PlaneGeometry(t,t,100,100),r=new THREE.Mesh(o,new THREE.MeshBasicMaterial({color:"#005e97",wireframe:!0}));r.rotation.x-=.5*Math.PI,n.add(r);var a=new THREE.WebGLRenderer({alpha:!1});a.setSize(window.innerWidth,window.innerHeight),a.setClearColor(i,1),e.appendChild(a.domElement),function(){for(var e=0;e<o.vertices.length;e++)o.vertices[e].z+=15e3*Math.random()-15e3,o.vertices[e]._myZ=o.vertices[e].z}(),function e(){requestAnimationFrame(e);var t=s.position.x,i=s.position.z;s.position.x=t*Math.cos(.001)+i*Math.sin(.001)-10,s.position.z=i*Math.cos(.001)-t*Math.sin(.001)-10;for(var c=0;c<o.vertices.length;c++){i=+o.vertices[c].z;o.vertices[c].z=Math.sin(c+2e-5*h)*(o.vertices[c]._myZ-.6*o.vertices[c]._myZ),r.geometry.verticesNeedUpdate=!0,h+=.1}a.render(n,s)}();var h=0;window.addEventListener("resize",(function(){s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),a.setSize(window.innerWidth,window.innerHeight)}),!1)}function sphere(){const e=7e-4;let t=document.getElementById("svg-container"),i=Array(t.children.length),s=[...t.children].map(((e,t)=>("g"==e.children[0].tagName?(e=e.children[0],i[t]=Array(e.children.length),i[t][0]=e.getAttribute("fill")):i[t]=Array(e.children.length),[...e.children].map(((e,s)=>{let n=e.getAttribute("fill");return i[t][s]=null!==n?n:i[t][0]?i[t][0]:"#FFF",new Path2D(e.getAttribute("d"))})))));const n=s.length;var o=document.getElementById("myCanvas"),r=o.getContext("2d");let a,h,c,d,l=o.offsetWidth,m=o.offsetHeight;function f(){a=.8*l,h=l/1.7,c=m/1.7,d=l/4,l=o.offsetWidth,m=o.offsetHeight,window.devicePixelRatio>1?(o.width=2*o.clientWidth,o.height=2*o.clientHeight,r.scale(2,2)):(o.width=l,o.height=m)}window.addEventListener("resize",f),f();let g=Math.PI*(3-Math.sqrt(5)),w=e,u=e,v=e,M=0,E=0,y=!1;o.addEventListener("mousemove",(e=>{y=!0,M=e.offsetX-l/2,E=e.offsetY-m/2,u=.05*M/l,v=.05*E/m})),o.addEventListener("mouseout",(function(t){y=!1;let i=-1*Math.atan2(E-m/2,M-l/2)+.5*Math.PI;Math.cos(i),Math.sin(i);!function t(){y||(v/=1.3,u/=1.3,Math.abs(v)<=e&&(v=Math.sign(v)*e),Math.abs(u)<=e&&(u=Math.sign(u)*e),v!=e&&u!=e&&setTimeout(t,200))}()}),!1);class p{constructor(e,t){this.colors=i[e],this.y=1-e/(n-1)*2;let s=Math.sqrt(1-this.y*this.y);this.theta=g*e,this.x=Math.cos(this.theta)*s,this.z=Math.sin(this.theta)*s,this.paths=t,this.xProjected=0,this.yProjected=0,this.scaleProjected=0}rotate(){let e=this.x*Math.cos(w)-this.y*Math.sin(w),t=this.x*Math.sin(w)+this.y*Math.cos(w),i=e*Math.cos(u)-this.z*Math.sin(u),s=e*Math.sin(u)+this.z*Math.cos(u),n=t*Math.cos(v)-s*Math.sin(v),o=t*Math.sin(v)+s*Math.cos(v);this.x=i,this.y=n,this.z=o}project(){this.rotate(),this.scaleProjected=a/(a+this.z*d),this.xProjected=this.x*d*this.scaleProjected+h-64*this.scaleProjected,this.yProjected=this.y*d*this.scaleProjected+c-64*this.scaleProjected}draw(){this.project(),r.save(),r.globalAlpha=Math.abs(1-3*this.z*d/l),r.beginPath(),r.translate(this.xProjected,this.yProjected),r.scale(1.1*this.scaleProjected*l/1920,1.1*this.scaleProjected*l/1920),this.paths.forEach(((e,t)=>{r.fillStyle=this.colors[t],r.fill(e)})),r.restore()}}const P=s.map(((e,t)=>new p(t,e)));!function e(){r.fillStyle="#1D1D1D",r.fillRect(0,0,l,m),P.sort(((e,t)=>e.scaleProjected-t.scaleProjected)),P.forEach((e=>{e.draw()})),window.requestAnimationFrame(e)}()}wave(),sphere();const form=document.getElementById("contact-form"),formSuccess=document.getElementById("form-success"),formError=document.getElementById("form-error"),formButtom=document.getElementById("contact-form-submit-button"),sending=document.getElementById("sending");formButtom.addEventListener("click",(e=>{sending.classList.remove("hide")}));const sendMail=e=>{fetch("/send-form",{method:"post",body:e}).then((e=>{!0===e.ok?(formSuccess.classList.remove("hide"),sending.classList.add("hide")):(formError.classList.remove("hide"),sending.classList.add("hide"))}))},formEvent=form.addEventListener("submit",(e=>{e.preventDefault();let t=new FormData(form);sendMail(t)}));