function countSheep(num) {
  if (num === 0) {
    console.log('All Sheep Jumped Over the fence');
  } else {
    console.log(`${num}: Another sheep jumps over the fence`);
    countSheep(num - 1);
  }
}

// countSheep(3);


function powerCalc(int, exp) {
  //10 to 0 = 1
  //10 to 1 = 10
  if (exp < 0) {
    return 'exponent should be >= 0';
  }
  if (exp === 0) {
    return 1;
  }
  else {
    return int * powerCalc(int, --exp);
  }
}
// console.log(powerCalc(10,2));

function reverse(string) {
  if (string.length === 1) {
    return string;
  } else {
    return reverse(string.slice(1)) + string[0];
  }
}

// console.log(reverse('hellogoodbye'));

function triangle(num) {
  if (num === 1) {
    return 1;
  } else {
    return num + triangle(num - 1);
  }
}
// console.log(triangle(7));

function stringSplitter(string, sep, result = []) {
  if (!string.includes(sep)) {
    result.push(string);
  } else {
    let indexSep = string.indexOf(sep);
    result.push(string.slice(0, indexSep));
    stringSplitter(string.slice(indexSep + 1, string.length), sep, result);
  }
  return result;
}

// console.log(stringSplitter('02*20*2020', '*'));

function fibonacci(num) {
  if (num === 1 || num === 2) {
    return 1;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}
// console.log(fibonacci(7));

function factorial(num) {
  if (num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

// console.log(factorial(5));
let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];

let bigMaze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

function mazeEscape(maze, x = 0, y = 0, string = '') {
  if (maze[y][x] === 'e') {
    return string;
  } else {
    if (maze[y][x + 1] === ' ' || maze[y][x + 1] === 'e' && string[string.length - 1] !== 'L') {
      string += 'R';
      return mazeEscape(maze, x + 1, y, string);
    } else if (maze[y + 1][x] === ' ' || maze[y + 1][x] === 'e' && string[string.length - 1] !== 'U') {
      string += 'D';
      return mazeEscape(maze, x, y + 1, string);
    }
    else if (maze[y][x - 1] === ' ' || maze[y][x - 1] === 'e' && string[string.length - 1] !== 'R') {
      string += 'L';
      return mazeEscape(maze, x - 1, y, string);
    } else if (maze[y - 1][x] === ' ' || maze[y - 1][x] === 'e' && string[string.length - 1] !== 'D') {
      string += 'U';
      return mazeEscape(maze, x, y - 1, string);
    }
  }
}

function mazeEscapeTwo(maze, x = 0, y = 0, string = '') {

  if (maze[y][x] === 'e') {
    console.log(`Path to exit: ${string}`);
    return;
  } else {
    if (string.length >= 16) {
      let last8 = string.slice(-6);
      let first8 = string.slice(-16, -8);
      if (first8.includes(last8)) {
        return;
      }
    }

    if (maze[y] && maze[y][x + 1]) {
      if ((maze[y][x + 1] === ' ' || maze[y][x + 1] === 'e') && string[string.length - 1] !== 'L') {
        mazeEscapeTwo(maze, x + 1, y, string + 'R');
      }
    }

    if (maze[y + 1] && maze[y + 1][x]) {
      if ((maze[y + 1][x] === ' ' || maze[y + 1][x] === 'e') && string[string.length - 1] !== 'U') {
        mazeEscapeTwo(maze, x, y + 1, string + 'D');
      }
    }

    if (maze[y] && maze[y][x - 1]) {
      if ((maze[y][x - 1] === ' ' || maze[y][x - 1] === 'e') && string[string.length - 1] !== 'R') {
        mazeEscapeTwo(maze, x - 1, y, string + 'L');
      }
    }

    if (maze[y - 1] && maze[y - 1][x]) {
      if ((maze[y - 1][x] === ' ' || maze[y - 1][x] === 'e') && string[string.length - 1] !== 'D') {
        mazeEscapeTwo(maze, x, y - 1, string + 'U');
      }
    }
  }
}

// mazeEscapeTwo(bigMaze);


function anagrams(word, result = [], iVar = 0) {
  if (result.length === 24) {
    return result;
  } else {
    if (!result.includes(word)) {
      result.push(word);
      if (result.length === 24) {
        return result;
      }
      if (iVar > 0) {
        iVar--;
      }
    } else {
      iVar++;
    }
    for (let i = iVar; i < word.length; i++) {
      let prefix = word[i];
      let frontLetters = word.slice(0, i);
      let backLetters = word.slice(i + 1, word.length);
      let newWord = prefix + frontLetters + backLetters;
      if (!result.includes(newWord)) {
        return anagrams(newWord, result, i);
      } else {
        newWord = backLetters + frontLetters + prefix;
        if (!result.includes(newWord)) {
          return anagrams(newWord, result, i);
        } else {
          newWord = frontLetters + backLetters + prefix;
          if (!result.includes(newWord)) {
            return anagrams(newWord, result, i);
          } else {
            newWord = backLetters + prefix + frontLetters;
            if (!result.includes(newWord)) {
              return anagrams(newWord, result, i);
            } else {
              newWord = prefix + backLetters + frontLetters;
              if (!result.includes(newWord)) {
                return anagrams(newWord, result, i);
              } else {
                newWord = frontLetters + prefix + backLetters;
                if (!result.includes(newWord)) {
                  return anagrams(newWord, result, i);
                }
              }
            }
          }
        }
      }
    }
  }
}

// console.log(anagrams('east'));


let organization = {
  'Zuckerberg': {
    'Schroepfer': {
      'Bosworth': {
        'Steve': {},
        'Kyle': {},
        'Andra': {}
      },
      'Zhao': {
        'Richie': {},
        'Sofia': {},
        'Jen': {}
      },
      'Badros': {
        'John': {},
        'Mike': {},
        'Pat': {}
      },
      'Parikh': {
        'Zach': {},
        'Ryan': {},
        'Tes': {}
      }
    },
    'Schrage': {
      'VanDyck': {
        'Sabrina': {},
        'Michelle': {},
        'Josh': {}
      },
      'Swain': {
        'Blanch': {},
        'Tom': {},
        'Joe': {}
      },
      'Frankovsky': {
        'Jasee': {},
        'Brian': {},
        'Margaret': {}
      }
    },
    'Sandberg': {
      'Goler': {
        'Eddie': {},
        'Julie': {},
        'Annie': {}
      },
      'Hernandez': {
        'Rowi': {},
        'Inga': {},
        'Morgan': {}
      },
      'Moissinac': {
        'Amy': {},
        'Chuck': {},
        'Vinni': {}
      },
      'Kelley': {
        'Eric': {},
        'Ana': {},
        'Wes': {}
      }
    }
  }
};

function orgChart(names, indent = 0) {
  let spaces = ' '.repeat(indent);
  let result = '';
    for (const key in names){
      result += spaces + key + '\n';
      if(Object.keys(names[key]).length !== 0){
        result += orgChart(names[key], indent+2);
    }
  }
  return result;
}

function orgChartTwo(names, indent = 0) {
    for (const key in names){
      console.log(' '.repeat(indent), key);
      orgChartTwo(names[key], indent + 2);
  }
}


// console.log(orgChart(organization));
// orgChartTwo(organization);

function BinaryRep(num){
if(num <= 0){
    return '';
  }
  let binary = Math.floor(num%2);
  return BinaryRep(Math.floor(num/2)) + binary;
}

console.log(BinaryRep(3));