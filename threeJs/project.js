var scene, camera, renderer, Floor;
var ambientLight, light;
var t_surface, tl1, tl2;
var c_surface, cl_1, cl_2, cl_3, cl_4, c_back;
var keyboard = {};
var degree = 0;
var click = 1;
var panel_width = 1520;
var panel_height = 700;

//camera lookAt height and movement speed
var socket = {     
    height: 2.5,
    speed: 0.1
}

//init function 
function init() {

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(60, panel_width / panel_height, 0.1, 1000);

    const loader = new THREE.TextureLoader();
	scene.background = loader.load( 'https://media.gettyimages.com/vectors/cartoon-library-vector-id1003251564?s=2048x2048' );



    //texture loader
    // var texture_1 = new THREE.TextureLoader().load("Images/texture1.jpg");
    // var texture_2 = new THREE.TextureLoader().load("Images/texture2.jpg");
    // var texture_3 = new THREE.TextureLoader().load("Images/texture3.jpg");
    
    var texture_1 = new THREE.TextureLoader().load("https://thumbs.dreamstime.com/b/shabby-wood-background-see-my-other-works-portfolio-35657834.jpg");
    var texture_2 = new THREE.TextureLoader().load("https://thumbs.dreamstime.com/b/old-painted-wood-wall-texture-background-49182561.jpg");
    var texture_3 = new THREE.TextureLoader().load("https://thumbs.dreamstime.com/b/wood-texture-backgrounds-high-resolution-image-56900614.jpg");
    var texture_4 = new THREE.TextureLoader().load("https://thumbs.dreamstime.com/b/blue-wood-backgrounds-panoramic-texture-91480226.jpg");
    var texture_5 = new THREE.TextureLoader().load("https://thumbs.dreamstime.com/b/colorful-pastel-ceramic-wall-floor-grid-tiles-abstract-background-design-geometric-mosaic-texture-decoration-bedroom-169469568.jpg");
  
  

    //table
    //table_surface
    t_surface = new THREE.Mesh(
        new THREE.BoxGeometry(1.5, 0.1, 3),
        new THREE.MeshPhongMaterial({
            map: texture_1
        })
    );
    scene.add(t_surface);
    t_surface.position.set(-2.5, 1.5, 0);
    t_surface.receiveShadow = true;
    t_surface.castShadow = true;
    

    //tableleg_1
    tl_1 = new THREE.Mesh(
        new THREE.BoxGeometry(1.5, 1.5, 0.1),
        new THREE.MeshPhongMaterial({
            map: texture_2
        })
    );
    scene.add(tl_1);
    tl_1.position.set(-2.5, 0.7, 1.4);
    tl_1.receiveShadow = true;
    tl_1.castShadow = true;
    

    //tableleg_2
    tl_2 = new THREE.Mesh(
        new THREE.BoxGeometry(1.5, 1.5, 0.1),
        new THREE.MeshPhongMaterial({
            map: texture_2
        })
    );
    scene.add(tl_2);
    tl_2.position.set(-2.5, 0.7, -1.4);
    tl_2.receiveShadow = true;
    tl_2.castShadow = true;



    //chair
    //chair_surface
    c_surface = new THREE.Mesh(
        new THREE.BoxGeometry(1, 0.1, 1),
        new THREE.MeshPhongMaterial({
            map: texture_3
        })
    );
    scene.add( c_surface);
    c_surface.position.set(0, 0.8, 0);
    c_surface.receiveShadow = true;
    c_surface.castShadow = true;


    //chairleg_1
    cl_1 = new THREE.Mesh(
        new THREE.BoxGeometry(0.1, 1.8, 0.1),
        new THREE.MeshPhongMaterial({
            map: texture_4
        })
    );
    scene.add(cl_1);
    cl_1.position.set(0.45, 0.9, -0.45);
    cl_1.receiveShadow = true;
    cl_1.castShadow = true;


    //chairleg_2
    cl_2 = new THREE.Mesh(
        new THREE.BoxGeometry(0.1, 1.8, 0.1),
        new THREE.MeshPhongMaterial({
            map: texture_4
        })
    );
    scene.add(cl_2);
    cl_2.position.set(0.45, 0.9, 0.45);
    cl_2.receiveShadow = true;
    cl_2.castShadow = true;


    //chairleg_3
    cl_3 = new THREE.Mesh(
        new THREE.BoxGeometry(0.1, 0.75, 0.1),
        new THREE.MeshPhongMaterial({
            map: texture_4
        })
    );
    scene.add(cl_3);
    cl_3.position.set(-0.45, 0.375, 0.45);
    cl_3.receiveShadow = true;
    cl_3.castShadow = true;


    //chairleg_4
    cl_4 = new THREE.Mesh(
        new THREE.BoxGeometry(0.1, 0.75, 0.1),
        new THREE.MeshPhongMaterial({
            map: texture_4
        })
    );
    scene.add(cl_4);
    cl_4.position.set(-0.45, 0.375, -0.45);
    cl_4.receiveShadow = true;
    cl_4.castShadow = true;


    //chair_back
    c_back = new THREE.Mesh(
        new THREE.BoxGeometry(.05, 0.5, 0.8),
        new THREE.MeshPhongMaterial({
            map: texture_1
        })
    );
    scene.add(c_back);
    c_back.position.set(0.4, 1.4, 0.0);
    c_back.receiveShadow = true;
    c_back.castShadow = true;
  


    //Floor
    Floor = new THREE.Mesh(
        new THREE.PlaneGeometry(7.5,5),
        new THREE.MeshPhongMaterial({
            wireframe: false,
            map: texture_5
        })
    );
    
    Floor.position.x = -1.7;
    Floor.rotation.x -= Math.PI / 2;
    Floor.receiveShadow = true;
    scene.add(Floor);
    

    //light
    //AmbientLight
    ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    //PointLight
    light = new THREE.PointLight(0xffffff, 1, 40);
    light.position.set(-3, 6, -3);
    light.castShadow = true;
    light.shadow.camera.near = .5;
    light.shadow.camera.far = 15;
    scene.add(light);
    //light

    //camera
    camera.position.set(0, socket.height, -6.5);
    camera.lookAt(new THREE.Vector3(0, socket.height, 0));
 

    //renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(panel_width, panel_height);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.BasicShadowMap;
    renderer.setClearColor(0x00ffff);
    document.body.appendChild(renderer.domElement);

    animate(); 
}

//functionForAnimation
function animate() {

    requestAnimationFrame(animate);

    //Up(Arrow Up)
    if (keyboard[40]) {
        camera.position.x -= Math.sin(camera.rotation.y) * socket.speed;
        camera.position.z -= -Math.cos(camera.rotation.y) * socket.speed;
    }
    //Down(Arrow Down)
    if (keyboard[38]) {
        camera.position.x += Math.sin(camera.rotation.y) * socket.speed;
        camera.position.z += -Math.cos(camera.rotation.y) * socket.speed;
    }
    //left(Arrow Left)
    if (keyboard[39]) {
        camera.position.x += Math.sin(camera.rotation.y + Math.PI / 2) * socket.speed;
        camera.position.z += -Math.cos(camera.rotation.y + Math.PI / 2) * socket.speed;
    }
    //Right(Arrow Right)
    if (keyboard[37]) {
        camera.position.x += Math.sin(camera.rotation.y - Math.PI / 2) * socket.speed;
        camera.position.z += -Math.cos(camera.rotation.y - Math.PI / 2) * socket.speed;
    }
    //Left turn(L)
    if (keyboard[82]) {
        camera.rotation.y -= Math.PI * 0.01;
    }
    //Right turn(R)
    if (keyboard[76]) {
        camera.rotation.y += Math.PI * 0.01;
    }

    //lightAnimation
    if (degree < 360) 
    {
        degree += 0.5;
    } 
    else 
    {
        degree = 0;
    }

    light.position.x = Math.sin(degree * Math.PI / 180) * 3;
    light.position.z = Math.cos(degree * Math.PI / 180) * 3;
    //lightAnimation

    renderer.render(scene, camera);
}
//functionForAnimation


function keyDown(event) {
    keyboard[event.keyCode] = true;
}

function keyUp(event) {
    keyboard[event.keyCode] = false;
}

//Table texture change on mouse click
function onClick(event) {

    if (click <= 3) 
    {
        click += 1;
    } 
    else 
    {
        click = 1;
    }
    //texture loader
    var texture_1 = new THREE.TextureLoader().load("https://thumbs.dreamstime.com/b/colorful-pastel-wood-planks-texture-background-vintage-old-92011469.jpg");
    var texture_2 = new THREE.TextureLoader().load("https://thumbs.dreamstime.com/b/blue-wood-panel-texture-detail-38850890.jpg");
    var texture_3 = new THREE.TextureLoader().load("https://thumbs.dreamstime.com/b/white-wood-texture-background-plank-pattern-34442396.jpg");
    switch (click) {
        case 1:
            t_surface = new THREE.Mesh(
                new THREE.BoxGeometry(1.5, 0.1, 3),
                new THREE.MeshPhongMaterial({
                    map: texture_3
                })
            );
            tl_1 = new THREE.Mesh(
                new THREE.BoxGeometry(1.5, 1.5, 0.1),
                new THREE.MeshPhongMaterial({
                    map: texture_3
                })
            );
            tl_2 = new THREE.Mesh(
                new THREE.BoxGeometry(1.5, 1.5, 0.1),
                new THREE.MeshPhongMaterial({
                    map: texture_3
                })
            );
            break;
        case 2:
            t_surface = new THREE.Mesh(
                new THREE.BoxGeometry(1.5, 0.1, 3),
                new THREE.MeshPhongMaterial({
                    map: texture_2
                })
            );
            tl_1 = new THREE.Mesh(
                new THREE.BoxGeometry(1.5, 1.5, 0.1),
                new THREE.MeshPhongMaterial({
                    map: texture_2
                })
            );
            tl_2 = new THREE.Mesh(
                new THREE.BoxGeometry(1.5, 1.5, 0.1),
                new THREE.MeshPhongMaterial({
                    map: texture_2
                })
            );
            break;
        case 3:
            t_surface = new THREE.Mesh(
                new THREE.BoxGeometry(1.5, 0.1, 3),
                new THREE.MeshPhongMaterial({
                    map: texture_1
                })
            );
            tl_1 = new THREE.Mesh(
                new THREE.BoxGeometry(1.5, 1.5, 0.1),
                new THREE.MeshPhongMaterial({
                    map: texture_1
                })
            );
            tl_2 = new THREE.Mesh(
                new THREE.BoxGeometry(1.5, 1.5, 0.1),
                new THREE.MeshPhongMaterial({
                    map: texture_1
                })
            );
            break;
        default:
    }
    scene.add(t_surface);
    t_surface.position.set(-2.5, 1.5, 0);
    t_surface.receiveShadow = true;
    t_surface.castShadow = true;
    scene.add(tl_1);
    tl_1.position.set(-2.5, 0.7, 1.4);
    tl_1.receiveShadow = true;
    tl_1.castShadow = true;
    scene.add(tl_2);
    tl_2.position.set(-2.5, 0.7, -1.4);
    tl_2.receiveShadow = true;
    tl_2.castShadow = true;
}

//eventListener
window.addEventListener('keydown', keyDown);
window.addEventListener('keyup', keyUp);
window.addEventListener('click', onClick);


window.onload = init; 