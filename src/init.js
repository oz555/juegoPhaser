import Scene_pre from './scenes/scene_presentacion.js';
import Bootloader from './bootloader.js';
import Scene_play from './scenes/scene_play.js';
import Scene_predos from './scenes/scene_presentaciondos.js';
import Bootloaderdos from './bootloaderdos.js';
import Scene_playdos from './scenes/scene_playdos.js';
const config = {
    width:900,
    height:500,
    parent:"contenedor",
    //type: Phaser.CANVAS,
    //backgroundColor: '#392542',
    physics: {
        default: "arcade",
        arcade:{
            gravity:{
                y:0
            }
        }
    },
    scene:[
        Scene_pre,
        Bootloader,
        Scene_play,
        Scene_predos,
        Bootloaderdos,
        Scene_playdos
    ]
}
new Phaser.Game(config);
