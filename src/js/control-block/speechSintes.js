
export default function speak(text, lang) {
  const message = new SpeechSynthesisUtterance();
  message.lang = lang;
  message.text = text;
  window.speechSynthesis.speak(message);
}
