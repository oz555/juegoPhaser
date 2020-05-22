class Palas extends Phaser.GameObjects.Sprite {
    constructor(scene,x,y,type){
        super(scene,x,y,type);
        //la clase phaser.gameobject, no se crean en el lienzo, para ello se ejecuta existing 
        scene.add.existing(this);
        //creamos fisicas para todo el documento
        scene.physics.world.enable(this);
        //vuelve el cuerpo inamovible para ambos cuerpos
        this.body.immovable = true;
        //con ello hacemos que las palas choquen con el borde del mundo y no pasen mas alla
        this.body.setCollideWorldBounds(true);

    }
}
export default Palas;