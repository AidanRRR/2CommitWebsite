jQuery(function ($) {
	// DOM Elements
	var Body = $("body");
	var EarthSection = $("#EarthSection");
	var EarthContainer = $("#Earth");
	var MobileNav;

	// Global variables
	var DocumentLoaded = false;
	var ThreeLoaded = false;

	// Functions
	EarthF();

	// Earth animation
	function EarthF() {
		if (!EarthContainer.length) {
			ThreeLoaded = true;
			return false;
		}

		var container, stats;

		var camera, scene, renderer;

		var mouseX = 0,
			mouseY = 0;

		var windowHalfX = EarthSection.width() / 2;
		var windowHalfY = EarthSection.height() / 2;

		init();


		function init() {
			container = EarthContainer[0];

			camera = new THREE.PerspectiveCamera(45, EarthSection.width() / EarthSection.height(), 1, 2000);
			camera.position.z = 220;


			scene = new THREE.Scene();

			var ambient = new THREE.AmbientLight(0x777777);
			scene.add(ambient);

			var dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
			dirLight.position.set(100, 100, 50);
			scene.add(dirLight);

			var dirLight2 = new THREE.DirectionalLight(0xffffff, 0.8);
			dirLight2.position.set(-100, -100, 50);
			scene.add(dirLight2);

			var onProgress = function (xhr) {
				if (xhr.lengthComputable) {
					var percentComplete = xhr.loaded / xhr.total * 100;
				}
			};

			var onError = function (xhr) {};

			THREE.Loader.Handlers.add(/\.dds$/i, new THREE.DDSLoader());

			var mtlLoader = new THREE.MTLLoader();
			mtlLoader.load('models/earth.mtl', function (materials) {

				materials.preload();
				materials.materials.EarthGreen.shininess = 0;
				materials.materials.Water.shininess = 190;
				var objLoader = new THREE.OBJLoader();
				objLoader.setMaterials(materials);
				objLoader.load('models/earth.obj', function (object) {
					object.position.y = 0;
					scene.add(object);
					ThreeLoaded = true;
					animate();
				}, onProgress, onError);

			});

			renderer = new THREE.WebGLRenderer({
				alpha: true,
				antialias: true
			});
			renderer.setPixelRatio(window.devicePixelRatio);
			renderer.setSize(EarthSection.width(), EarthSection.height());
			container.appendChild(renderer.domElement);

			document.addEventListener('mousemove', onDocumentMouseMove, false);
			window.addEventListener('resize', onWindowResize, false);
		}

		function onWindowResize() {
			var windowHalfX = EarthSection.width() / 2;
			var windowHalfY = EarthSection.height() / 2;

			camera.aspect = EarthSection.width() / EarthSection.height();
			camera.updateProjectionMatrix();

			renderer.setSize(EarthSection.width(), EarthSection.height());
		}

		function onDocumentMouseMove(event) {
			mouseX = (event.clientX - windowHalfX) / 2;
			mouseY = (event.clientY - windowHalfY) / 2;
		}

		function animate() {
			requestAnimationFrame(animate);
			render();
		}

		function render() {
			camera.position.x += (mouseX - camera.position.x * 3) * .01;
			camera.position.y += (-mouseY - camera.position.y * 3) * .01;

			camera.lookAt(scene.position);

			/* 
				3D SCENE ANIMATION
				Remove all rotation changes if you want to change 3d model to another
			*/

			// Plane
			scene.children[3].children[60].rotation.x += 0.005;
			scene.children[3].children[61].rotation.x += 0.005;
			scene.children[3].children[60].rotation.y = 5.8;
			scene.children[3].children[60].rotation.z = -0.04;
			scene.children[3].children[61].rotation.y = 5.8;
			scene.children[3].children[61].rotation.z = -0.04;

			// Cloud 1
			scene.children[3].children[266].rotation.y -= 0.01;
			scene.children[3].children[267].rotation.y -= 0.01;
			scene.children[3].children[268].rotation.y -= 0.01;
			scene.children[3].children[269].rotation.y -= 0.01;
			scene.children[3].children[270].rotation.y -= 0.01;
			scene.children[3].children[271].rotation.y -= 0.01;

			// Cloud 2
			scene.children[3].children[251].rotation.y += -0.002;
			scene.children[3].children[252].rotation.y += -0.002;
			scene.children[3].children[253].rotation.y += -0.002;
			scene.children[3].children[254].rotation.y += -0.002;
			scene.children[3].children[255].rotation.y += -0.002;
			scene.children[3].children[256].rotation.y += -0.002;

			// Cloud 3
			scene.children[3].children[226].rotation.y += 0.012;
			scene.children[3].children[227].rotation.y += 0.012;
			scene.children[3].children[228].rotation.y += 0.012;
			scene.children[3].children[229].rotation.y += 0.012;
			scene.children[3].children[230].rotation.y += 0.012;
			scene.children[3].children[231].rotation.y += 0.012;
			scene.children[3].children[232].rotation.y += 0.012;
			scene.children[3].children[233].rotation.y += 0.012;
			scene.children[3].children[234].rotation.y += 0.012;

			// Cloud 4
			scene.children[3].children[257].rotation.y -= 0.003;
			scene.children[3].children[258].rotation.y -= 0.003;
			scene.children[3].children[259].rotation.y -= 0.003;
			scene.children[3].children[260].rotation.y -= 0.003;
			scene.children[3].children[261].rotation.y -= 0.003;
			scene.children[3].children[262].rotation.y -= 0.003;
			scene.children[3].children[263].rotation.y -= 0.003;
			scene.children[3].children[264].rotation.y -= 0.003;
			scene.children[3].children[265].rotation.y -= 0.003;

			// Cloud 5
			scene.children[3].children[219].rotation.y -= -0.003;
			scene.children[3].children[220].rotation.y -= -0.003;
			scene.children[3].children[221].rotation.y -= -0.003;
			scene.children[3].children[222].rotation.y -= -0.003;
			scene.children[3].children[223].rotation.y -= -0.003;
			scene.children[3].children[224].rotation.y -= -0.003;
			scene.children[3].children[225].rotation.y -= -0.003;

			// Cloud 6
			scene.children[3].children[245].rotation.y -= -0.008;
			scene.children[3].children[246].rotation.y -= -0.008;
			scene.children[3].children[247].rotation.y -= -0.008;
			scene.children[3].children[248].rotation.y -= -0.008;
			scene.children[3].children[249].rotation.y -= -0.008;
			scene.children[3].children[250].rotation.y -= -0.008;

			// Cloud 7
			scene.children[3].children[209].rotation.y -= -0.003;
			scene.children[3].children[210].rotation.y -= -0.003;
			scene.children[3].children[211].rotation.y -= -0.003;
			scene.children[3].children[212].rotation.y -= -0.003;
			scene.children[3].children[213].rotation.y -= -0.003;
			scene.children[3].children[214].rotation.y -= -0.003;
			scene.children[3].children[215].rotation.y -= -0.003;
			scene.children[3].children[216].rotation.y -= -0.003;
			scene.children[3].children[217].rotation.y -= -0.003;
			scene.children[3].children[218].rotation.y -= -0.003;
			// Cloud 7
			scene.children[3].children[235].rotation.y -= 0.005;
			scene.children[3].children[236].rotation.y -= 0.005;
			scene.children[3].children[237].rotation.y -= 0.005;
			scene.children[3].children[238].rotation.y -= 0.005;
			scene.children[3].children[239].rotation.y -= 0.005;
			scene.children[3].children[240].rotation.y -= 0.005;
			scene.children[3].children[241].rotation.y -= 0.005;
			scene.children[3].children[242].rotation.y -= 0.005;
			scene.children[3].children[243].rotation.y -= 0.005;
			scene.children[3].children[244].rotation.y -= 0.005;

			renderer.render(scene, camera);

		}
	}
});