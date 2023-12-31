const path = require('path');

module.exports = {
  
  entry: {
    'logo_builded':'./logo.js',
    'laptop_builded':'./laptop.js',
    'gsap_common_builded':'./gsap_common.js'
  }, // какой файл собираем
  output: { // куда поместим
    path: path.resolve(__dirname, './'), // путь
    filename: '[name].js', // какое будет имя бандла
  },
};