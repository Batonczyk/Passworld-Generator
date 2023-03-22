// Масиви з різними символами

let arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrLett = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
let arrLagrLett = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
let arrSpecS = ['!', '@', '#', '$', '%', '*', '&', '/', '?'];

// Підключаю регулятор range який регулює довжину пароля

document.querySelector('.box-gen__range').addEventListener('input', function () {
  document.querySelector('.box-gen__label span').innerHTML = this.value;
});

// З'єдную всі масиви в один + мішаю їх і виводжу в параграфи

document.querySelector('.box-gen__btn').onclick = randomPass;

function randomPass() {
  let arr1 = document.getElementById('param-1');
  let arr2 = document.getElementById('param-2');
  let arr3 = document.getElementById('param-3');
  let arr4 = document.getElementById('param-4');
  let arr = []; // масив для масивів

  if (arr1.checked) { // коли input = checked 
    arr = arr.concat(arrNum); // concat() - поєдную пустий масив з масивом цифр
  }
  if (arr2.checked) { // коли input = checked 
    arr = arr.concat(arrLett); // concat() - поєдную пустий масив з масивом літер
  }
  if (arr3.checked) { // коли input = checked 
    arr = arr.concat(arrLagrLett);
  }
  if (arr4.checked) { // коли input = checked 
    arr = arr.concat(arrSpecS);
  }
  document.querySelector('.out').innerHTML = ''; // очищаю строку.

  for (let i = 0; i < 6; i++) { // цикл виводить 6 різних кодів рандомних
    let outPass = ''; // пуста строка
    let passLength = parseInt(document.querySelector('.box-gen__range').value); // в змінну passLength записую довжину range
    for (let k = 0; k < passLength; k++) { // цикл буде робити стільки ітерацій, скільки задано range
      outPass += arr[rand(0, arr.length - 2)]; // записую в пусту строку масив + він перемішується за допомогою функції rand(min, max)
    }
    document.querySelector('.out').innerHTML += '<p>' + outPass + '</p>'; // виводжу строку в параграф на сторінку. Буде 6 різних паролів
  }
}

function rand(min, max) {
  return Math.round(Math.random() * (max - min + 1) + min); // функція мішання і видавання рандому
}