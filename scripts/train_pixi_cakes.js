    
document.addEventListener("DOMContentLoaded", function(event) {

    var app = new PIXI.Application(800, 600, {backgroundColor : 0x061e44});

    app.view.style.margin = "0 auto";
    app.view.style.display = "block";
    document.body.appendChild(app.view);

    var container = new PIXI.Container();

    app.stage.addChild(container);

    // Create a new texture
    var texture = PIXI.Texture.fromImage("https://image.ibb.co/ifUVCz/cake1.png");

    

    // Create a 5x5 grid of bunnies
    for (var i = 0; i < 25; i++) {
        var lightbulb = new PIXI.Graphics();
        //var rr = Math.random() * 0x80 | 0;
        //* (max - min) + min;
        var rr = Math.random() * (255 - 155) + 155;
        var rg = Math.random() * (255 - 155) + 155;
        var rb = Math.random() * (255 - 155) + 155;
        var rad = 40 + Math.random() * 20;
        lightbulb.beginFill((rr << 16) + (rg << 8) + rb, 0.65);
        lightbulb.drawCircle(0, 0, rad);
        lightbulb.endFill();
        
        //lightbulb.anchor.set(0.5);
        lightbulb.x = (i % 5) * 80;
        lightbulb.y = Math.floor(i / 5) * 80;
        //lightbulb.scale.x *= 0.3;
        //lightbulb.scale.y *= 0.3;
        // lightbulb.parentLayer = lighting;//<-- try comment it

        container.addChild(lightbulb);

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
