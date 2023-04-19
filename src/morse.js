export const textToMorse = {
  "A":".-", "B":"-...", "C":"-.-.", "D":"-..", "E":".", "F":"..-.", 
  "G":"--.", "H":"....", "I":"..", "J":".---", "K":"-.-", "L":".-..", 
  "M":"--", "N":"-.", "O":"---", "P":".--.", "Q":"--.-", "R":".-.", 
  "S":"...", "T":"-", "U":"..-", "V":"...-", "W":".--", "X":"-..-", 
  "Y":"-.--", "Z":"--..",

  "0":"-----", "1":".----", "2":"..---", "3":"...--", "4":"....-", "5":".....", 
  "6":"-....", "7":"--...", "8":"---..", "9":"----.", " ": "/",

  ".":".-.-.-",	",":"--..--",	"?":"..--..",	"'":".----.",	"!":"-.-.--",
  "/":"-..-.", "(":"-.--.",	")":"-.--.-",	"&":".-...", ":":"---...",
  ";":"-.-.-.", "=":	"-...-", "+":	".-.-.", "-":"-....-", "_":	"..--.-",
  "\"": ".-..-.", "$":	"...-..-", "@":".--.-.", "¿":"..-.-", "¡":"--...-"
}

const morseToText = {
  ".-": "A", "-...": "B", "-.-.": "C", "-..": "D", ".": "E", "..-.": "F", 
  "--.": "G", "....": "H", "..": "I", ".---": "J", "-.-": "K", ".-..": "L", 
  "--": "M", "-.": "N", "---": "O", ".--.": "P", "--.-": "Q", ".-.": "R", 
  "...": "S", "-": "T", "..-": "U", "...-": "V", ".--": "W", "-..-": "X", 
  "-.--": "Y", "--..": "Z",

  "-----": "0", ".----": "1", "..---": "2", "...--": "3", "....-": "4", ".....": "5", 
  "-....": "6", "--...": "7", "---..": "8", "----.": "9", '/': ' ',

  ".-.-.-":".",	"--..--":",",	"..--..":"?",	".----.":"'",	"-.-.--":"!",
  "-..-.":"/", "-.--.":"(",	"-.--.-":")",	".-...":"&", "---...":":",
  "-.-.-.":";", "-...-":"=", ".-.-.":"+", "-....-":"-", "..--.-":"_",
  ".-..-.":"\"", "...-..-":"$", ".--.-.":"@", "..-.-":"¿", "--...-":"¡"
}

const morseSeparator = '/'
const textSeparator = ' '

export function ToMorse(text) {
  let morse = '';
  text = text.trim().toUpperCase().replace(/(\r\n|\n|\r)/gm, " ");
  for(let i = 0; i < text.length; i++)
  {
    if(textToMorse[text[i]] && morse !== 'Invalid character(s)')
      morse = morse + textToMorse[text[i]] + ' ';
    else
      morse = 'Invalid character(s)'
  }
  return morse.trim();
}

export function ToText(morse)
{
  let text = '';
  morse = morse.trim().split(morseSeparator).forEach(word => {
    word.split(" ").forEach(letter => {
      if(morseToText[letter])
        text += morseToText[letter]
    })
    text += textSeparator
  });
  return text.trim();
}