export class Barco {
   structure: number;
    slots: number = 2;
     tipo: string;
    columna: number;
    fila: number;
         constructor(tipo: string,columna: number,fila: number) {
      
        //initialize properties here
        this.structure = 2
        this.tipo = tipo
        this.columna = columna
        this.fila = fila
        }
    
    strucTure() {

        if ( this.structure === 0 )
            console.log('tu barco se hundio')
            return;

    }           







}





