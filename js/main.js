'use strict'

/***********************
 * 
 *  UPDATE HIGHT VALUE
 * 
 */


// беоём тэг с ID = 'heightValue'                      
const heightValue = document.getElementById('heightValue');

// Обнавляем содержимое тэга с ID = 'heightValue' 
const getHeight = value => heightValue.innerText = value;

// При старте страницы обнавляет содержимое тэга с ID = 'heightValue' 
getHeight(document.getElementById('height').value);
