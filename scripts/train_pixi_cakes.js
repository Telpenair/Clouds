document.addEventListener("DOMContentLoaded", function(event) {
    var app = new PIXI.Application(800, 600, {backgroundColor : 0x1099bb});
    document.body.appendChild(app.view);

    var container = new PIXI.Container();

    app.stage.addChild(container);

    // Create a new texture
    var texture = PIXI.Texture.fromImage("https://sun1-2.userapi.com/c830409/v830409662/192a8c/x-V8LLD1H_I.jpg");

    // Create a 5x5 grid of bunnies
    for (var i = 0; i < 25; i++) {
        var bunny = new PIXI.Sprite(texture);
        bunny.anchor.set(0.5);
        bunny.x = (i % 5) * 80;
        bunny.y = Math.floor(i / 5) * 80;
        bunny.scale.x *= 0.3;
        bunny.scale.y *= 0.3;
        container.addChild(bunny);
    }

    // Move container to the center
    container.x = app.screen.width / 2;
    container.y = app.screen.height / 2;

    // Center bunny sprite in local container coordinates
    container.pivot.x = container.width / 2;
    container.pivot.y = container.height / 2;

    // Listen for animate update
    app.ticker.add(function(delta) {
        // rotate the container!
        // use delta to create frame-independent transform
        container.rotation -= 0.006 * delta;
    });
});
