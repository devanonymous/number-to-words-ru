const unitNames = [
  'квадриллион',
  'квинтиллион',
  'секстиллион',
  'септиллион',
  'октиллион',
  'нониллион',
  'дециллион',
  'ундециллион',
  'додециллион',
  'тредециллион',
  'кваттуордециллион',
  'квиндециллион',
  'сексдециллион', // 10^51
  'септемдециллион',
  'октодециллион',
  'новемдециллион',
  'вигинтиллион',
  'унвигинтиллион',
  'дуовигинтиллион',
  'тревигинтиллион',
  'кватуорвигинтиллион',
  'квинвигинтиллион',
  'сексвигинтиллион',
  'септенвигинтиллион',
  'октовигинтиллион',
  'новемвигинтиллион',
  'тригинтиллион',
  'унтригинтиллион',
  'дуотригинтиллион',
  'третригинтиллион', // 10^102
  'кватортригинтиллион',
  'квинтригинтиллион',
  'секстригинтиллион',
  'септентригинтиллион',
  'октотригинтиллион',
  'новемтригинтиллион',
  'квадрагинтиллион',
  'унквадрагинтиллион',
  'дуоквадрагинтиллион',
  'треквадрагинтиллион',
  'кваторквадрагинтиллион',
  'квинквадрагинтиллион',
  'сексквадрагинтиллион',
  'септенквадрагинтиллион',
  'октоквадрагинтиллион',
  'новемквадрагинтиллион', // 10^150
  'квинквагинтиллион',
  'унквинкагинтиллион',
  'дуоквинкагинтиллион',
  'треквинкагинтиллион',
  'кваторквинкагинтиллион',
  'квинквинкагинтиллион',
  'сексквинкагинтиллион',
  'септенквинкагинтиллион',
  'октоквинкагинтиллион',
  'новемквинкагинтиллион',
  'сексагинтиллион',
  'унсексагинтиллион',
  'дуосексагинтиллион',
  'тресексагинтиллион',
  'кваторсексагинтиллион',
  'квинсексагинтиллион',
  'секссексагинтиллион', // 10^201
  'септенсексагинтиллион',
  'октосексагинтиллион',
  'новемсексагинтиллион',
  'септагинтиллион',
  'унсептагинтиллион',
  'дуосептагинтиллион',
  'тресептагинтиллион',
  'кваторсептагинтиллион',
  'квинсептагинтиллион',
  'секссептагинтиллион',
  'септенсептагинтиллион',
  'октосептагинтиллион',
  'новемсептагинтиллион',
  'октогинтиллион',
  'уноктогинтиллион',
  'дуооктогинтиллион',
  'треоктогинтиллион', // 10^252
  'кватороктогинтиллион',
  'квиноктогинтиллион',
  'сексоктогинтиллион',
  'септоктогинтиллион',
  'октооктогинтиллион',
  'новемоктогинтиллион',
  'нонагинтиллион',
  'уннонагинтиллион',
  'дуононагинтиллион',
  'тренонагинтиллион',
  'кваторнонагинтиллион',
  'квиннонагинтиллион',
  'секснонагинтиллион',
  'септеннонагинтиллион',
  'октононагинтиллион',
  'новемнонагинтиллион', // 10^300
  'центиллион', // 10^303
];

const integerWordEndings = ['', 'а', 'ов'];

addIntegerNamesForms = () => {
  return unitNames.map((unitName) => {
    return integerWordEndings.map((wordEnding) => {
      return unitName + wordEnding;
    });
  });
}

let integer = [
  ['', '', ''],
  ['тысяча', 'тысячи', 'тысяч'],
  ['миллион', 'миллиона', 'миллионов'],
  ['миллиард', 'милиарда', 'миллиардов'],
  ['триллион', 'триллиона', 'триллионов'],
];

integer = integer.concat(addIntegerNamesForms());

let fractional = [
  ['десятая', 'десятых', 'десятых'],
  ['сотая', 'сотых', 'сотых'],
  ['тысячная', 'тысячных', 'тысячных'],
  ['десятитысячная', 'десятитысячных', 'десятитысячных'],
  ['стотысячная', 'стотысячных', 'стотысячных'],
  ['миллионная', 'миллионных', 'миллионных'],
  ['десятимиллионная', 'десятимиллионных', 'десятимиллионных'],
  ['стомиллионная', 'стомиллионных', 'стомиллионных'],
];

const fractionalWordEndings = ['ная', 'ных', 'ных'];
const fractionalWordPrefixes = ['', 'десяти', 'сто'];

addFractionalNamesForms = () => {
  // Начать добавлять с миллиардов
  let fullUnitNames = integer.map((numberClass, index) => {
    if (index >= 3) {
      return numberClass[0];
    }
  });
  fullUnitNames = fullUnitNames.filter(Boolean).concat(unitNames);
  // Скомбинировать данные в массив
  let resultArr = [];
  fullUnitNames.some((unitName) => {
    fractionalWordPrefixes.some((prefix) => {
      resultArr.push(
        fractionalWordEndings.map((ending) => {
          return prefix + unitName + ending;
        })
      );
    });
  });
  return resultArr;
}

// fractionalFullArray = fractional.concat(addFractionalNamesForms());

getFractionalNameForms = (index) => {
  if (index < 0) {
    index = 0;
  }
  let result;
  // Если такой разряд есть в списке, то просто взять его как есть
  if (fractional.length - 1 >= index) {
    result = fractional[index];
  // Если такого разряда нет в списке, то сгенерировать
  } else {
    // Определить с какого index начинается гернерация значения
    const indexStarts = fractional.length;
    // Определить с какого по порядку класса нужно начать генерировать
    const lastClass = Math.floor((fractional.length - 2) / 3);
    const nextClass = lastClass + 1;
    // Определить к какому классу относится указанный index
    const classIndex = nextClass + Math.floor((index - indexStarts) / 3);
    // Определить какой разряд у класса нужен
    const classScaleIndex = (index - indexStarts) % 3;
    // Сгенерировать массив
    result = fractionalWordEndings.map((ending) => {
      return fractionalWordPrefixes[classScaleIndex] + integer[classIndex][0] + ending;
    });
  }
  return result;
}

const slashNumberFroms = {
  number: [
    ['нулевая', 'нулевых', ''],
    ['первая', 'первых', ''],
    ['вторая', 'вторых', 'двух'],
    ['третья', 'третьих', 'трёх'],
    ['четвёртая', 'четвёртых', 'четырёх'],
    ['пятая', 'пятых', 'пяти'],
    ['шестая', 'шестых', 'шести'],
    ['седьмая', 'седьмых', 'семи'],
    ['восьмая', 'восьмых', 'восьми'],
    ['девятая', 'девятых', 'девяти'],
  ],
  teens: [
    ['десятая', 'десытых', 'десяти'],
    ['одиннадцатая', 'одиннадцатых', 'одиннадцати'],
    ['двенадцатая', 'двенадцатых', 'двенадцати'],
    ['тринадцатая', 'тринадцатых', 'тринадцати'],
    ['четырнадцатая', 'четырнадцатых', 'четырнадцати'],
    ['пятнадцатая', 'пятнадцатых', 'пятнадцати'],
    ['шестнадцатая', 'шестнадцатых', 'шестнадцати'],
    ['семнадцатая', 'семнадцатых', 'семнадцати'],
    ['восемнадцатая', 'восемнадцатых', 'восемнадцати'],
    ['девятнадцатая', 'девятнадцатых', 'девятнадцати'],
  ],
  tens: [
    ['', '', ''],
    ['', '', ''],
    ['двадцатая', 'двадцатых', 'двадцати'],
    ['тридцатая', 'тридцатых', 'тридцати'],
    ['сороковая', 'сороковых', 'сорока'],
    ['пятидесятая', 'пятидесятых', 'пятидесяти'],
    ['шестидесятая', 'шестидесятых', 'шестидесяти'],
    ['семидесятая', 'семидесятых', 'семидесяти'],
    ['восьмидесятая', 'восьмидесятых', 'восьмидесяти'],
    ['девятидесятая', 'девятидесятых', 'девяносто'], // (Это исключение. Правильно - Девяностотысячных)
  ],
  hundreds: [
    ['', '', ''],
    ['сотая', 'сотых', 'сто'], // (Это исключение. Правильно - Стотысячных)
    ['двухсотая', 'двухсотых', 'двухсот'],
    ['трёхсотая', 'трёхсотых', 'трёхсот'],
    ['четырёхсотая', 'четырёхсотых', 'четырёхсот'],
    ['пятисотая', 'пятисотых', 'пятисот'],
    ['шестисотая', 'шестисотых', 'шестисот'],
    ['семисотая', 'семисотых', 'семисот'],
    ['восьмисотая', 'восьмисотых', 'востмисот'],
    ['девятисотая', 'девятисотых', 'девятисот'],
  ],
};

let slashNumberUnitsForms = [
  ['', ''],
  ['тысячная', 'тысячных'],
  ['миллионная', 'миллионных'],
  ['миллиардная', 'миллиардных'],
];

const slashNumberUnitEndings = ['ная', 'ных'];

getSlashNumberUnitName = (scaleIndex = 2) => {
  // scaleIndex - это порядковый номер класса числа (2 - тысячи, 3 - миллионы)
  if (scaleIndex < 1) {
    scaleIndex = 1;
  }
  let result;
  // Если такой разряд есть в списке, то просто взять его как есть
  if (slashNumberUnitsForms.length >= scaleIndex) {
    result = slashNumberUnitsForms[scaleIndex - 1];
  // Если такого разряда нет в списке, то сгенерировать
  } else {
    // Добавить окончания
    return slashNumberUnitEndings.map((ending) => {
      return integer[scaleIndex - 1][0] + ending;
    });
  }
  return result;
}

module.exports = {
  integer,
  getFractionalNameForms,
  slashNumberFroms,
  getSlashNumberUnitName,
};