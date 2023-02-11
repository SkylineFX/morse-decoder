const morseToText = {
  ".-": "A", "-...": "B", "-.-.": "C", "-..": "D", ".": "E", "..-.": "F", 
  "--.": "G", "....": "H", "..": "I", ".---": "J", "-.-": "K", ".-..": "L", 
  "--": "M", "-.": "N", "---": "O", ".--.": "P", "--.-": "Q", ".-.": "R", 
  "...": "S", "-": "T", "..-": "U", "...-": "V", ".--": "W", "-..-": "X", 
  "-.--": "Y", "--..": "Z", ' / ': ' ',
  "-----": "0", ".----": "1", "..---": "2", "...--": "3", "....-": "4", ".....": "5", 
  "-....": "6", "--...": "7", "---..": "8", "----.": "9"
}

function ToText(morse)
{
  let text = '';
  morse = morse.split(' / ').forEach(word => {
    word.split(" ").forEach(letter => {
      if(morseToText[letter])
        text += morseToText[letter]
    })
    text += " "
  });
  return text.trim();
}

console.log(ToText(".- -. .- / "))