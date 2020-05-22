class Scene_predos extends Phaser.Scene{
    constructor(){
        super({key: "Scene_predos"});
    }
    //spaceField;
    preload(){
        this.load.image("fondo3","./assets/fondoEfectoParallax3.png");
        this.load.image("carr","./assets/carretera.png");
        this.load.image("goku","./assets/goKU.png");
        this.load.image("teclasJuego","./assets/teclas.jpg");
        this.load.image("inicioD","./assets/inicioDos.jpg");
    }
    create(){
        //valosres de tileSprite (posx, posy, ancho, alto)
        this.carreteraParallax = this.add.tileSprite(450,400,900,220,"carr");
        this.fondoTres = this.add.tileSprite(450,142,1800,280,"fondo3");
        this.gokugoku = this.add.sprite(300,300,"goku");
        this.teclasJ = this.add.sprite(800,100,"teclasJuego");
        this.inicioo = this.add.sprite(800,400,"inicioD");
       this.cursor_B = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.B);
       
    }
    update(){
        this.carreteraParallax.tilePositionX += 3;
        this.fondoTres.tilePositionX += 3;
        if(this.cursor_B.isDown){
            this.scene.start("Bootloaderdos");
            console.log("paso del presentaciondos a bootloader");
        }
    }
}
export default Scene_predos;