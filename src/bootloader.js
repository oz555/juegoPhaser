class Bootloader extends Phaser.Scene{
    constructor(){
        super({key: "Bootloader"});
    }
    preload(){
        //esta funcion se ejecuta una vez se completa el cargado de imagenes y se va al la proxima escena
        this.load.on("complete", () => {
            this.scene.start("Scene_play");
        });

        this.load.image("ball","./assets/ball.png");
        this.load.image("izquierda","./assets/left_pallete.png");
        this.load.image("derecha","./assets/right_pallete.png");
        this.load.image("separador","./assets/separator.png");
        this.load.spritesheet('tojito','./assets/tojitoSpriteSheet.png',{frameWidth:400,frameHeight:225});
        this.load.spritesheet('tojitoUnoi','./assets/tojoAmarilloSpriteSheets1.png',{frameWidth:400,frameHeight:225});
        this.load.spritesheet('tojitoDosi','./assets/tojoAmarilloSpriteSheets2.png',{frameWidth:400,frameHeight:225});
        this.load.spritesheet('tojitoTresi','./assets/tojoAmarilloSpriteSheets3.png',{frameWidth:400,frameHeight:225});
        this.load.image("carretera","./assets/carretera.png");
        this.load.image("fondoUno","./assets/fondoEfectoParallax1.png");
        this.load.image("piedra","./assets/piedra.png");

        
    }
    /* no se usa por que ya lo usaremos en la scene_play
    create(){
        this.add.image(100,100,"derecha");
    }
    */
}
export default Bootloader;