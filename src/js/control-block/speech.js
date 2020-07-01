/* eslint-disable no-undef */
/* eslint-disable new-cap */
export default class SpeechRecognition {
  constructor(lang) {
    this.recognition = new webkitSpeechRecognition();
    this.recognition.interimResults = true;
    this.recognition.lang = lang;
  }

  static setTextToInput(e) {
    const transcript = Array.from(e.results)
      .map((res) => res[0])
      .map((res) => res.transcript)
      .join('');
    return transcript;
  }
}
