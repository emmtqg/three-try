// src/app.js
var THREE = require('three');

class ThreeObj {

    buildScene(msg = "Using ES2015+") {
        
        console.log(msg);

        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

        var renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        var cube = new THREE.Mesh( geometry, material );
        scene.add( cube );

        camera.position.z = 5;

        var animate = function () {
            requestAnimationFrame(animate);

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render(scene, camera);
        };

        animate();
    }
}

const root = document.createElement("div");
document.body.appendChild(root);

let test = new ThreeObj();
test.buildScene();

// var URL = 'assets/wittendaleIslandOz.jpg';

// THREE.ImageUtils.crossOrigin = '';
// var camera, scene, renderer;

// var isUserInteracting = false,
//     onMouseDownMouseX = 0, onMouseDownMouseY = 0,
//     lon = 0, onMouseDownLon = 0,
//     lat = 0, onMouseDownLat = 0,
//     phi = 0, theta = 0;

// init();
// animate();

// function init() {

//   var container, mesh;
//   root.setAttribute('id', 'container');
//   container = document.getElementById( 'container' );

//   camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1100 );
//   camera.target = new THREE.Vector3( 0, 0, 0 );

//   scene = new THREE.Scene();

//   var geometry = new THREE.SphereGeometry( 500, 60, 40 );
//   geometry.applyMatrix( new THREE.Matrix4().makeScale( -1, 1, 1 ) );

//   var material = new THREE.MeshBasicMaterial( {
//     map: THREE.ImageUtils.loadTexture( URL )
//   } );

//   mesh = new THREE.Mesh( geometry, material );

//   scene.add( mesh );

//   renderer = new THREE.WebGLRenderer();
//   renderer.setPixelRatio( window.devicePixelRatio );
//   renderer.setSize( window.innerWidth, window.innerHeight );
//   container.appendChild( renderer.domElement );

//   document.addEventListener( 'mousedown', onDocumentMouseDown, false );
//   document.addEventListener( 'mousemove', onDocumentMouseMove, false );
//   document.addEventListener( 'mouseup', onDocumentMouseUp, false );
//   document.addEventListener( 'mousewheel', onDocumentMouseWheel, false );
//   document.addEventListener( 'DOMMouseScroll', onDocumentMouseWheel, false);

//   //

//   document.addEventListener( 'dragover', function ( event ) {

//     event.preventDefault();
//     event.dataTransfer.dropEffect = 'copy';

//   }, false );

//   document.addEventListener( 'dragenter', function ( event ) {

//     document.body.style.opacity = 0.5;

//   }, false );

//   document.addEventListener( 'dragleave', function ( event ) {

//     document.body.style.opacity = 1;

//   }, false );

//   document.addEventListener( 'drop', function ( event ) {

//     event.preventDefault();

//     var reader = new FileReader();
//     reader.addEventListener( 'load', function ( event ) {

//       material.map.image.src = event.target.result;
//       material.map.needsUpdate = true;

//     }, false );
//     reader.readAsDataURL( event.dataTransfer.files[ 0 ] );

//     document.body.style.opacity = 1;

//   }, false );

//   //

//   window.addEventListener( 'resize', onWindowResize, false );

// }

// function onWindowResize() {

//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();

//   renderer.setSize( window.innerWidth, window.innerHeight );

// }

// function onDocumentMouseDown( event ) {

//   event.preventDefault();

//   isUserInteracting = true;

//   onPointerDownPointerX = event.clientX;
//   onPointerDownPointerY = event.clientY;

//   onPointerDownLon = lon;
//   onPointerDownLat = lat;

// }

// function onDocumentMouseMove( event ) {

//   if ( isUserInteracting === true ) {

//     lon = ( onPointerDownPointerX - event.clientX ) * 0.1 + onPointerDownLon;
//     lat = ( event.clientY - onPointerDownPointerY ) * 0.1 + onPointerDownLat;

//   }

// }

// function onDocumentMouseUp( event ) {

//   isUserInteracting = false;

// }

// function onDocumentMouseWheel( event ) {

//   // WebKit

//   if ( event.wheelDeltaY ) {

//     camera.fov -= event.wheelDeltaY * 0.05;

//     // Opera / Explorer 9

//   } else if ( event.wheelDelta ) {

//     camera.fov -= event.wheelDelta * 0.05;

//     // Firefox

//   } else if ( event.detail ) {

//     camera.fov += event.detail * 1.0;

//   }

//   camera.updateProjectionMatrix();

// }

// function animate() {

//   requestAnimationFrame( animate );
//   update();

// }

// function update() {

//   if ( isUserInteracting === false ) {

//     lon += 0.1;

//   }

//   lat = Math.max( - 85, Math.min( 85, lat ) );
//   phi = THREE.Math.degToRad( 90 - lat );
//   theta = THREE.Math.degToRad( lon );

//   camera.target.x = 500 * Math.sin( phi ) * Math.cos( theta );
//   camera.target.y = 500 * Math.cos( phi );
//   camera.target.z = 500 * Math.sin( phi ) * Math.sin( theta );

//   camera.lookAt( camera.target );

//   /*
// 				// distortion
// 				camera.position.copy( camera.target ).negate();
// 				*/

//   renderer.render( scene, camera );

// }