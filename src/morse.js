export const textToMorse = {
  A:".-", B:"-...", C:"-.-.", D:"-..", E:".", F:"..-.", 
  G:"--.", H:"....", I:"..", J:".---", K:"-.-", L:	".-..", 
  M:"--", N:"-.", O:"---", P:".--.", Q:"--.-", R:".-.", 
  S:"...", T:"-", U:"..-", V:"...-", W:".--", X:"-..-", 
  Y:"-.--", Z:"--..", ' ': ' / ',
  0:"-----", 1:".----", 2:"..---", 3:"...--", 4:"....-", 5:".....", 
  6:"-....", 7:	"--...", 8:"---..", 9:"----."
}

const morseToText = {
  ".-": "A", "-...": "B", "-.-.": "C", "-..": "D", ".": "E", "..-.": "F", 
  "--.": "G", "....": "H", "..": "I", ".---": "J", "-.-": "K", ".-..": "L", 
  "--": "M", "-.": "N", "---": "O", ".--.": "P", "--.-": "Q", ".-.": "R", 
  "...": "S", "-": "T", "..-": "U", "...-": "V", ".--": "W", "-..-": "X", 
  "-.--": "Y", "--..": "Z", ' / ': ' ',
  "-----": "0", ".----": "1", "..---": "2", "...--": "3", "....-": "4", ".....": "5", 
  "-....": "6", "--...": "7", "---..": "8", "----.": "9"
}

export function ToMorse(text) {
  let morse = '';
  text = text.trim().toUpperCase().replace(/(\r\n|\n|\r)/gm, " ");
  for(let i = 0; i < text.length; i++)
  {
    if(textToMorse[text[i]])
      morse = morse + textToMorse[text[i]] + ' ';
    else
      morse = 'Invalid character(s)'
  }
  return morse.trim();
}

export function ToText(morse)
{
  let text = '';
  morse = morse.trim().split(' / ').forEach(word => {
    word.split(" ").forEach(letter => {
      if(morseToText[letter])
        text += morseToText[letter]
    })
    text += " "
  });
  return text.trim();
}