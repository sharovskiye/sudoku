module.exports = function solveSudoku(matrix) {
  // // // function solveSudoku(matrix) {
  // // //   // your solution
  // // //   let sort=[]
  // // // matrix.forEach((element,index1) => {
  // // //   element.forEach((item,index2) => {
  // // //     if(item===0){
  // // //       // console.log(item);
  // // //       sort=[1,2,3,4,5,6,7,8,9]
  // // //       for (let i = 0; i < matrix.length; i++) {
  // // //         if(matrix[i][index2]!==0){
  // // //           // console.log(matrix[i][index]);
  // // //           // sort.splice(matrix[i][index]-1,1)
  // // //           delete sort[matrix[i][index2]-1]
  // // //           // console.log(sort);
  // // //         }

  // // //       }
  // // //       sort=sort.filter(elem=>elem!==undefined)
  // // //       // console.log(sort);
  // // //       // console.log('--------------');
  // // //       if(sort.length===1){
  // // //         // console.log('lol');
  // // //         matrix[index1][index2]=sort[0]
  // // //         // item=sort[0]
  // // //       }
  // // //     }
  // // //   })
  // // // });
  // // //   return matrix
  // // // }

  // function solveSudoku(matrix) {
  function findZero(matrix) {
    for (let r = 0; r < matrix.length; r++) {
      for (let c = 0; c < matrix.length; c++) {
        if (matrix[r][c] === 0) {
          return [r, c];
        }
      }
    }
    return null;
  }

  function validate(num, pos, matrix) {
    const [r, c] = pos;

    //  validate rows
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i][c] === num && i !== r) {
        return false;
      }
    }

    //  validate colum
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[r][i] === num && i !== c) {
        return false;
      }
    }

    //  validate box
    const boxRow = Math.floor(r / 3) * 3;
    const boxCol = Math.floor(c / 3) * 3;

    for (let i = boxRow; i < boxRow + 3; i++) {
      for (let j = boxCol; j < boxCol + 3; j++) {
        if (matrix[i][j] === num && i !== r && j !== c) {
          return false;
        }
      }

    }
    return true;
  }

  function solve() {
    const currPos = findZero(matrix);

    if (currPos === null) {
      return true;
    }

    for (let currNum = 1; currNum <= matrix.length; currNum++) {
      const isValid = validate(currNum, currPos, matrix);

      if (isValid) {
        const [x, y] = currPos;
        matrix[x][y] = currNum;
        if (solve()) {
          return true;
        }
        matrix[x][y] = 0;
      }
    }

    return false;
  }

  solve();
  return matrix;
}

// const initial = [
//   [5, 3, 4, 6, 7, 8, 9, 0, 0],
//   [6, 7, 2, 1, 9, 5, 3, 4, 8],
//   [1, 9, 8, 3, 4, 2, 5, 6, 7],
//   [8, 5, 9, 7, 6, 1, 4, 2, 3],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 6, 1, 5, 3, 7, 2, 8, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 4, 5, 2, 8, 6, 1, 7, 9],
// ];
// // const initial = [
// //   [4,0,1,0],
// //   [0,2,0,0],
// //   [0,0,3,0],
// //   [0,0,2,0]
// // ];

// const initial = [
//   [6, 5, 0, 7, 3, 0, 0, 8, 0],
//   [0, 0, 0, 4, 8, 0, 5, 3, 0],
//   [8, 4, 0, 9, 2, 5, 0, 0, 0],
//   [0, 9, 0, 8, 0, 0, 0, 0, 0],
//   [5, 3, 0, 2, 0, 9, 6, 0, 0],
//   [0, 0, 6, 0, 0, 0, 8, 0, 0],
//   [0, 0, 9, 0, 0, 0, 0, 0, 6],
//   [0, 0, 7, 0, 0, 0, 0, 5, 0],
//   [1, 6, 5, 3, 9, 0, 4, 7, 0]
// ];

// console.log(solveSudoku(initial));
// 
