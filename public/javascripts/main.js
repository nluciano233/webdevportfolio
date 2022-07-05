var container=document.getElementById("planeWave"),vertexHeight=15e3,planeDefinition=100,planeSize=1245e3,totalObjects=1,background="#1D1D1D",meshColor="#005e97",camera=new THREE.PerspectiveCamera(55,window.innerWidth/window.innerHeight,1,4e5);camera.position.z=1e4,camera.position.y=1e4;var scene=new THREE.Scene;scene.fog=new THREE.Fog(background,1,3e5);var planeGeo=new THREE.PlaneGeometry(planeSize,planeSize,planeDefinition,planeDefinition),plane=new THREE.Mesh(planeGeo,new THREE.MeshBasicMaterial({color:meshColor,wireframe:!0}));plane.rotation.x-=.5*Math.PI,scene.add(plane);var renderer=new THREE.WebGLRenderer({alpha:!1});function updatePlane(){for(var e=0;e<planeGeo.vertices.length;e++)planeGeo.vertices[e].z+=Math.random()*vertexHeight-vertexHeight,planeGeo.vertices[e]._myZ=planeGeo.vertices[e].z}renderer.setSize(window.innerWidth,window.innerHeight),renderer.setClearColor(background,1),container.appendChild(renderer.domElement),updatePlane(),render();var count=0;function render(){requestAnimationFrame(render);var e=camera.position.x,n=camera.position.z;camera.position.x=e*Math.cos(.001)+n*Math.sin(.001)-10,camera.position.z=n*Math.cos(.001)-e*Math.sin(.001)-10;for(var r=0;r<planeGeo.vertices.length;r++){n=+planeGeo.vertices[r].z;planeGeo.vertices[r].z=Math.sin(r+2e-5*count)*(planeGeo.vertices[r]._myZ-.6*planeGeo.vertices[r]._myZ),plane.geometry.verticesNeedUpdate=!0,count+=.1}renderer.render(scene,camera)}function onWindowResize(){camera.aspect=window.innerWidth/window.innerHeight,camera.updateProjectionMatrix(),renderer.setSize(window.innerWidth,window.innerHeight)}window.addEventListener("resize",onWindowResize,!1);