const rp = require('request-promise');

/**
 * Imgbb class
 */
class Imgbb {
  /**
   * Init key for lib
   * @param {string} key
   */
  constructor({key}) {
    this.key = key;
  }

  /**
   * upload image to imgbb
   * @param {*} image
   * @param {string} name
   * @return {object}
   */
  async upload(image, name = null) {
    const options = {
      method: 'POST',
      uri: 'https://api.imgbb.com/1/upload',
      form: {
        key: this.key,
        image,
        name,
      },
      json: true,
    };
    try {
      const res = await rp(options);
      return {
        'success': true,
        'status': 200,
        'data': res.data,
      };
    } catch (e) {
      return {
        'success': false,
        'status': e.error.status_code,
        'message': e.error.status_txt,
        'error': e.error.error,
      };
    }
  }
}

module.exports = Imgbb;
