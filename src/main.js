import * as three from "three";
const app = document.getElementById("app");

const scene = new three.Scene();
const camera = new three.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new three.WebGLRenderer();
const geometry = new three.BoxGeometry(1,1,1);
const material = new three.MeshBasicMaterial({ color: 0x222222 });
const cube = new three.Mesh(geometry, material);

renderer.setSize(window.innerWidth, window.innerHeight);
app.appendChild(renderer.domElement);
scene.add(cube);
camera.position.z = 5;

const render = function render() {
  requestAnimationFrame(render);
  cube.rotation.x += 0.1;
  cube.rotation.y += 0.1;
  renderer.render(scene, camera);
}

render();
