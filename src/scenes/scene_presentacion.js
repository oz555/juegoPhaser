class Scene_pre extends Phaser.Scene{
    constructor(){
        super({key: "Scene_pre"});
    }
    preload(){
       this.load.image("fondo3","./assets/fondoEfectoParallax3.png");
       this.load.image("carr","./assets/carretera.png");
       this.load.image("avion","./assets/avionMetalSlug.png");
       this.load.image("teclasJuego","./assets/teclas.jpg");
       this.load.image("inicioU","./assets/inicioUno.jpg");

        

    }
    create(){
        //valosres de tileSprite (posx, posy, ancho, alto)
        this.carreteraParallax = this.add.tileSprite(450,400,900,220,"carr");
        this.fondoTres = this.add.tileSprite(450,142,1800,280,"fondo3");
        this.avionF = this.add.sprite(300,300,"avion");
        this.teclasJ = this.add.sprite(800,100,"teclasJuego");
        this.inicioo = this.add.sprite(800,400,"inicioU");

       this.cursor_V = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.V);
       
    }
    update(){
        this.carreteraParallax.tilePositionX += 3;
        this.fondoTres.tilePositionX += 3;
        if(this.cursor_V.isDown){
            //para que no se crucen las escenas no debe estas activada la escena

            this.scene.start("Bootloader");
        }
    }
}
export default Scene_pre;