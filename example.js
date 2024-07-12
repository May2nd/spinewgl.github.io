let lastFrameTime = 0;

function init() {
    const canvas = document.getElementById("canvas");
    const spinePath = "assets/";
    const spineList = [
        {
            json: "plane.json",
            // atlas: "plane.atlas",
            defaultAnimation: "animation",
            size: { width: 670, height: 1000}
        },
        {
            json: "spineboy.json",
            // atlas: "spineboy.atlas",
            defaultAnimation: "run",
        },
        //...
    ]
    spine.player.init(canvas, spinePath, spineList);

    requestAnimationFrame(render);
}

function render() {
    let now = Date.now() / 1000;
    let delta = now - lastFrameTime;
    lastFrameTime = now;

    spine.player.render(delta);
    
    requestAnimationFrame(render);
}

window.playAnimation = function() {
    // spine.player.playAnimation('plane', 'animation', false);
    spine.player.playAnimation();
}

window.playAnimation2 = function() {
    spine.player.playAnimation('spineboy', 'run', true);
}

init();