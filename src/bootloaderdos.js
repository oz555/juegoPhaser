class Bootloaderdos extends Phaser.Scene{
    constructor(){
        super({key: "Bootloaderdos"});
    }
    preload(){

        
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
        this.load.image("finJuego","./assets/gameOver.png");
        this.load.image("vueltaInicio","./assets/volverInicio.jpg");
        this.scene.start("Scene_playdos");
    }
}
export default Bootloaderdos;