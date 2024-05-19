class Utils {
  /**
   *
   * @param {str} str The string to remove punctuations from
   * @returns A new string with all punctuations removed
   */
  static removePunctuations = (str) =>
    str.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "");
}

export default Utils;
