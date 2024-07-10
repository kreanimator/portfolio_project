import  { k } from "./kaboomCtx";
k.loadSprite("spritesheet", "./spritesheet.png", {
    sliceX: 39,
    sliceY: 31,
    anims: {
        "idle-down": 948,
        "walk-down": {from: 948, to: 951, loop: true, speed: 8},
        "idle-side": 987,
        "walk-side": {from: 987, to: 990, loop: true, speed: 8},
        "idle-up": 1026,
        "walk-up": {from: 1026, to: 1029, loop: true, speed: 8},
    }
});

k.loadSprite("map", "./map.png");
k.setBackground(k.Color.fromHex("311047"));

k.scene("main", async () =>  {
    const mapData = await (await fetch("./map.json")).json()
    const layers = mapData.layers;

    const map = k.make([
        k.sprite("map"),
        k.pos(0),

    ])

});


k.go("main");
