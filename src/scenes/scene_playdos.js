import Palas from '../gameObjects/palas.js';
class Scene_playdos extends Phaser.Scene {
    constructor(){
        super({key: "Scene_playdos"});
    }
    create(){
        //general las fisicas de colision superior e inferior
        this.physics.world.setBoundsCollision(false,false,true,true);
        //genera el fondo para efecto parallax
        this.carreteraParallax = this.add.tileSprite(450,400,900,220,"carretera");
        this.fondoUnoP = this.add.tileSprite(450,142,1800,280,"fondoUno");
        //renderizamos los obstaculos
        this.obstaculoUno = this.physics.add.sprite(1000,305,"piedra",2);
        this.obstaculoDos = this.physics.add.sprite(1500,370,'piedra',2);
        this.obstaculoTres = this.physics.add.sprite(1800,440,'piedra',2);
        //redimensionamos los obstaculos
        this.obstaculoUno.scale = 0.05;
        this.obstaculoDos.scale = 0.08;
        this.obstaculoTres.scale = 0.14;
        //renderizamos el tojito
        this.tojito = this.physics.add.sprite(300,292,'tojito',2);
        this.tojitoUno = this.physics.add.sprite(-3000,-3000,'tojitoUnoi',2);
        this.tojitoDos = this.physics.add.sprite(-3000,-3000,'tojitoDosi',2);
        this.tojitoTres = this.physics.add.sprite(-3000,-3000,'tojitoTresi',2);
        //escalamos al tojito
        this.tojito.scale =0.2;
        //creamos la animacion del tojito
        this.animacionTojito();
        //colisionesTojito
        this.physics.add.collider(this.obstaculoUno,this.tojito,this.pruebaDeColisionUno,null,this);
        this.physics.add.collider(this.obstaculoDos,this.tojito,this.pruebaDeColisionDos,null,this);
        this.physics.add.collider(this.obstaculoTres,this.tojito,this.pruebaDeColisionTres,null,this);
        //colisionesTojitoUno
        this.physics.add.collider(this.obstaculoUno,this.tojitoUno,this.pruebaDeColisionUno,null,this);
        this.physics.add.collider(this.obstaculoDos,this.tojitoUno,this.pruebaDeColisionDos,null,this);
        this.physics.add.collider(this.obstaculoTres,this.tojitoUno,this.pruebaDeColisionTres,null,this);
        //colisionesTojitoDos
        this.physics.add.collider(this.obstaculoUno,this.tojitoDos,this.pruebaDeColisionUno,null,this);
        this.physics.add.collider(this.obstaculoDos,this.tojitoDos,this.pruebaDeColisionDos,null,this);
        this.physics.add.collider(this.obstaculoTres,this.tojitoDos,this.pruebaDeColisionTres,null,this);
        //colisonestojitoTres
        this.physics.add.collider(this.obstaculoUno,this.tojitoTres,this.pruebaDeColisionUno,null,this);
        this.physics.add.collider(this.obstaculoDos,this.tojitoTres,this.pruebaDeColisionDos,null,this);
        this.physics.add.collider(this.obstaculoTres,this.tojitoTres,this.pruebaDeColisionTres,null,this);
        //controles
        //crea una variable con la que se accede a controlar las flechas del techado
        this.cursor = this.input.keyboard.createCursorKeys();

        //Teclas que se usaran en el juego 
        this.cursor_F = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        this.cursor_G = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.G);
        this.cursor_H = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.H);
        //tacla para volver al inicio
        this.cursor_N = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.N);
        //ejecucion de la animacion tojito
        this.tojito.anims.play('tojito_walk');        
    }
    update(){
        if(this.cursor_N.isDown){
            this.scene.start("Scene_pre");
        }
        //obstaculoUno
        this.obstaculoUno.x -=6;
        //funcion para que el obstaculo regrese de izquierda a derecha
        if(this.obstaculoUno.x < 0){
            this.obstaculoUno.x = 1000;
        }
        //obstaculoDos
        this.obstaculoDos.x -=6;
        //funcion para que el obstaculo dos regrese de izquierda a derecha
        if(this.obstaculoDos.x < 0){
            this.obstaculoDos.x = 1500;
        }
        //obstaculoTres
        this.obstaculoTres.x -=6;
        //funcion para que el obstaculo tres regrese de izquierda a derecha
        if(this.obstaculoTres.x < 0){
            this.obstaculoTres.x = 1800;
        }
        //control de la velocidad y el movimiento de la carretera y el fondo
        this.carreteraParallax.tilePositionX += 6;
        this.fondoUnoP.tilePositionX += 6;
            //CONTROL DE LAS TECLAS F, G Y H
            if(this.cursor_F.isDown){
                if(this.tojito.active == true){
                    this.tojito.x = 300;
                    this.tojito.y = 292;
                    this.tojito.scale = 0.2;                    
                }else if(this.tojitoUno.active == true){
                    console.log("posicion x f uuu "+this.tojitoUno.x);
                    this.tojitoUno.x = 300;
                    this.tojitoUno.y = 292;
                    this.tojitoUno.scale = 0.2;
                }else if(this.tojitoDos.active == true){
                    this.tojitoDos.x = 300;
                    this.tojitoDos.y = 292;
                    this.tojitoDos.scale = 0.2;
                }else if(this.tojitoTres.active == true){
                    this.tojitoTres.x = 300;
                    this.tojitoTres.y = 292;
                    this.tojitoTres.scale = 0.2;
                }
                
            }
            if(this.cursor_G.isDown){

                if(this.tojito.active == true){
                    this.tojito.x = 300;
                    this.tojito.y = 350;
                    this.tojito.scale = 0.28;                   
                }else if(this.tojitoUno.active == true){
                    this.tojitoUno.x = 300;
                    this.tojitoUno.y = 350;
                    this.tojitoUno.scale = 0.28;
                }else if(this.tojitoDos.active == true){
                    this.tojitoDos.x = 300;
                    this.tojitoDos.y = 350;
                    this.tojitoDos.scale = 0.28;
                }else if(this.tojitoTres.active == true){
                    this.tojitoTres.x = 300;
                    this.tojitoTres.y = 350;
                    this.tojitoTres.scale = 0.28;
                }
            }
            if(this.cursor_H.isDown){

                if(this.tojito.active == true){
                    this.tojito.x = 300;
                    this.tojito.y = 450;
                    this.tojito.scale = 0.32;                   
                }else if(this.tojitoUno.active == true){
                    this.tojitoUno.x = 300;
                    this.tojitoUno.y = 450;
                    this.tojitoUno.scale = 0.32;
                }else if(this.tojitoDos.active == true){
                    this.tojitoDos.x = 300;
                    this.tojitoDos.y = 450;
                    this.tojitoDos.scale = 0.32;
                }else if(this.tojitoTres.active == true){
                    this.tojitoDos.x = 300;
                    this.tojitoTres.y = 450;
                    this.tojitoTres.scale = 0.32;
                }
            }
    }
    //funcion para la animacion de tojito
    animacionTojito(){
        this.anims.create({
            key:'tojito_walk',
            frames: this.anims.generateFrameNumbers('tojito',{
                start:1,
                end:10
            }),
            repeat:-1,
            frameRate:10
        });
    }
    //funcion para la animacion de tojito Uno
    animacionTojitoUno(){
        this.anims.create({
            //en aqui viene una variable que se activara con el play anims
            key:'tojitoUnoin',
            //aqui es la variable de la direccion del spritesheet
            frames: this.anims.generateFrameNumbers('tojitoUnoi',{
                start:1,
                end:10
            }),
            repeat:-1,
            frameRate:10
        });
    }
    //funcion para la animacionde tojito dos
    animacionTojitoDos(){
        this.anims.create({
            key:'tojitoDosin',
            frames: this.anims.generateFrameNumbers('tojitoDosi',{
                start:1,
                end:10
            }),
            repeat:-1,
            frameRate:10
        });
    }
    //funcion para la animacion del tojito tres
    animacionTojitoTres(){
        this.anims.create({
            //en aqui viene una variable que se activara con el play anims
            key:'tojitoTresin',
            //aqui es la variable de la direccion del spritesheet
            frames: this.anims.generateFrameNumbers('tojitoTresi',{
                start:1,
                end:10
            }),
            repeat:-1,
            frameRate:10
        });
    }
    //creacion de la animacion tojito desde cero
    creandoTojitoDesdeCero(){
        this.tojito = this.add.sprite('300','292','tojito',2);
        console.log(this.tojito.x);
        console.log(this.tojito.y);
        this.tojito.scale = 0.25;
        this.animacionTojito();
        this.tojito.anims.play('tojito_walk');
    }
    //creacion de la animacion tojitoUno desde cero
    creandoTojitoUnoDesdeCero(){
        this.tojitoUno.x =300;
        this.tojitoUno.y =292;
        this.tojitoUno.scale =0.2;
        this.animacionTojitoUno();
        this.tojitoUno.anims.play('tojitoUnoin');
    }
    //creacion de la animacion tojitoDos desde cero
    creandoTojitoDosDesdeCero(){
        this.tojitoDos.x =300;
        this.tojitoDos.y =292;
        this.tojitoDos.scale =0.2;
        this.animacionTojitoDos();
        this.tojitoDos.anims.play('tojitoDosin');
    }
    //creacion de la animacion tojitoTres desde cero
    creandoTojitoTresDesdeCero(){
        this.tojitoTres.x =300;
        this.tojitoTres.y =292;
        this.tojitoTres.scale =0.2;
        this.animacionTojitoTres();
        this.tojitoTres.anims.play('tojitoTresin');
    }
    //funcion para destruir sprite creados
    destroySprite(sprite) {
        sprite.destroy();
    }
    //funcion cuando ocurre una colision con el obstaculo uno
    pruebaDeColisionUno(){
        this.obstaculoUno.x = 1000;
        if(this.tojito.active == true){
            this.destroySprite(this.tojito);
            this.creandoTojitoUnoDesdeCero();
        }else if(this.tojitoUno.active == true){
            this.destroySprite(this.tojitoUno);
            this.creandoTojitoDosDesdeCero();
        }else if(this.tojitoDos.active == true){
            this.destroySprite(this.tojitoDos);
            this.creandoTojitoTresDesdeCero();
        }else if(this.tojitoTres.active == true){
            this.destroySprite(this.tojitoTres);
            this.fondoFinal = this.add.sprite(800,100,"vueltaInicio");
            this.finalGame = this.add.image(300,300,"finjuego");
        }
    }
        //funcion cuando ocurre una colision con el obstaculo Dos
    pruebaDeColisionDos(){
        this.obstaculoDos.x = 1500;
        if(this.tojito.active == true){
            this.destroySprite(this.tojito);
            this.creandoTojitoUnoDesdeCero();
        }else if(this.tojitoUno.active == true){
            this.destroySprite(this.tojitoUno);
            this.creandoTojitoDosDesdeCero();
        }else if(this.tojitoDos.active == true){
            this.destroySprite(this.tojitoDos);
            this.creandoTojitoTresDesdeCero();
        }else if(this.tojitoTres.active == true){
            this.destroySprite(this.tojitoTres);
            this.fondoFinal = this.add.sprite(800,100,"vueltaInicio");
            this.finalGame = this.add.image(300,300,"finjuego");
        }
    }
 //funcion cuando ocurre una colision con el obstaculo tres
    pruebaDeColisionTres(){
        this.obstaculoTres.x = 1800;
        if(this.tojito.active == true){
            this.destroySprite(this.tojito);
            this.creandoTojitoUnoDesdeCero();
        }else if(this.tojitoUno.active == true){
            this.destroySprite(this.tojitoUno);
            this.creandoTojitoDosDesdeCero();
        }else if(this.tojitoDos.active == true){
            this.destroySprite(this.tojitoDos);
            this.creandoTojitoTresDesdeCero();
        }else if(this.tojitoTres.active == true){
            this.destroySprite(this.tojitoTres);
            //console.log("este es el final del juego uuu ");
            this.fondoFinal = this.add.sprite(800,100,"vueltaInicio");
            this.finalGame = this.add.image(300,300,"finjuego");
        }
    }
}
export default Scene_playdos;