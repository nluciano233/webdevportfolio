function wave(){var e=document.getElementById("planeWave"),i=1245e3,n="#1D1D1D",t=new THREE.PerspectiveCamera(55,window.innerWidth/window.innerHeight,1,4e5);t.position.z=1e4,t.position.y=1e4;var r=new THREE.Scene;r.fog=new THREE.Fog(n,1,3e5);var o=new THREE.PlaneGeometry(i,i,100,100),a=new THREE.Mesh(o,new THREE.MeshBasicMaterial({color:"#005e97",wireframe:!0}));a.rotation.x-=.5*Math.PI,r.add(a);var s=new THREE.WebGLRenderer({alpha:!1});s.setSize(window.innerWidth,window.innerHeight),s.setClearColor(n,1),e.appendChild(s.domElement),function(){for(var e=0;e<o.vertices.length;e++)o.vertices[e].z+=15e3*Math.random()-15e3,o.vertices[e]._myZ=o.vertices[e].z}(),function e(){requestAnimationFrame(e);var i=t.position.x,n=t.position.z;t.position.x=i*Math.cos(.001)+n*Math.sin(.001)-10,t.position.z=n*Math.cos(.001)-i*Math.sin(.001)-10;for(var w=0;w<o.vertices.length;w++){n=+o.vertices[w].z;o.vertices[w].z=Math.sin(w+2e-5*d)*(o.vertices[w]._myZ-.6*o.vertices[w]._myZ),a.geometry.verticesNeedUpdate=!0,d+=.1}s.render(r,t)}();var d=0;window.addEventListener("resize",(function(){t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight)}),!1)}wave();