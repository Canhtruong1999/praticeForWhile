
    //  let array = [];
    //  for(let i=0; i<5; i++){
    //     array[i]=[];
    //     for(let j=0; j<7; j++){
    //         array[i][j] = Math.floor((Math.random() * 41)+10);
    //     }
    //  }
    // //  console.log(array);
    // let matrix = new Array(5)
    // for (let i = 0; i < matrix.length; i++) {
    //     matrix[i] = new Array(7);
    //     for (let j = 0; j < matrix[i].length; j++) {
    //         matrix[i][j] = Math.floor(Math.random() * 41) + 10
    //     }
    // }
    // console.log(matrix)
    let matrix = [];
        let i = 0;
        while (i < 5){
            matrix[i] = [];
             for ( let j = 0 ; j < 7 ; j++){
             matrix[j] = Math.floor(Math.random() * 41 + 10);
            }
            j = 0 ;
            i++ ;
            document.write( matrix + "<br/>" );
        }