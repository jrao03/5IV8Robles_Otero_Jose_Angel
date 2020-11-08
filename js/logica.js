//vamos a crear la funcion que se encargue del cifrado cesar

var cesar= cesar|| (function(){
//funcion anonima
//callback
    var doStaff = function(txt, desp, action){
        var replace = (function(){
            //abecedario
            var abc = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
        'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'v',
    'w', 'x',  'y', 'z'];
    var l = abc.length;

    //cifrar
    return function(c){
        var i = abc.indexOf(c.toLowerCase());
        //verificar si esta vacio
        if(i != -1){
            var pos = i;
            if(action){
                //cifrando
                pos += desp;
                //console.log(c);
                if(pos>25){
                    pos -=26;
                }
            }else{
                //Descifrando
                pos -= desp;
                if(pos < 0){
                    pos +=26;
                }
            }
            return abc[pos];
        }
        return c;
    };
    })();
    //vamos a hacer el match
    var re = (/[a-zñ]/ig);
    return String(txt).replace(re, function(match){
        return replace(match);
    });

    };
    // enviar si se cifra o se decifra
    return{

        encode : function(txt, desp){
            return doStaff(txt, desp, true);
            
        },
        decode : function(txt, desp){
            return doStaff(txt, desp, false);
        }
    };

})();

//crear las funciones codificar y decodificar

function codificar(){
    let expReg = /^([a-zñ])+$/ig;
    let num = document.getElementById("cadena").value;
    let paso = "";
    for (i=0; i<num.length; i++){
        if(expReg.test(num.charAt(i))){
           for(j=i; j<num.length; j++){
               paso+= num.charAt(j);
           }
        break;
        }

    }
    console.log(paso.length);
    console.log(paso);
    //console.log(document.getElementById("cadena").value.length);
    if(paso.length>0){
    document.getElementById("resultado").innerHTML=
    cesar.encode(paso, desplazamiento(document.getElementById("desplazamiento").value));
    }else alert("escribe algo para cifrar xd");
}
function decodificar(){
    let expReg = /^([a-zñ])+$/ig;
    let num = document.getElementById("cadena").value;
    let paso = "";
    for (i=0; i<num.length; i++){
        if(expReg.test(num.charAt(i))){
           for(j=i; j<num.length; j++){
               paso+= num.charAt(j);
           }
        break;
        }

    }
    console.log(paso.length);
    console.log(paso);
    //console.log(document.getElementById("cadena").value.length);
    if(paso.length>0){
    document.getElementById("resultado").innerHTML=
    cesar.decode(paso, desplazamiento(document.getElementById("desplazamiento").value));
    }else alert("escribe algo para descifrar xd");
}

function desplazamiento(prueba){
    let expReg = /^([0-9])+$/;
    var num = "";
    toString(prueba);
    if(prueba.length<=40){
        for (i=0; i<prueba.length; i++){
            if(expReg.test(prueba.charAt(i))){
            
                num+= prueba.charAt(i);
            }

        }
    }else{
        alert("solo se tomaran en cuenta los primeros 40 digitos")
        for (i=0; i<40; i++){
            if(expReg.test(prueba.charAt(i))){
            
                num+= prueba.charAt(i);
            }

        }
    }

    if(num.length==0){
        num="0";
        alert("si no escribes numeros en : \"se desplazara:\" se tomara desplazamiento 0")
    }
    num = parseInt(num, 10);
    num= num%27;
    

    return(num);
    
}