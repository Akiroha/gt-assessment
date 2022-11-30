/**
 * LocalStorage Class which holds methods for setting/getting/removing items to/from window.localstorage
 */
export default class LocalStorage {
  /**
   * logic for setting local storage data
   * @param {String} name name of local storage item
   * @param {Any} value can be an object/array/string of data to be set for a certain local storage item
   */
  setItem(name: string, value: string | string[] | object) {
    //   if type of value that's passed is a string then we will just set the item to that
    if (typeof value === 'string') {
      localStorage.setItem(name, value);
    } else {
      // else we will stringify it and set the item
      localStorage.setItem(name, JSON.stringify(value));
    }
  }

  /**
   * logic to get an item from local storage
   * @param {String} name name of local storage item
   * @returns string or parse object
   */
  getItem(name: string) {
    //   if an item with this name is in local storage then continue
    if (name in localStorage) {
      // get value from local storage
      const value = localStorage.getItem(name);

      //   if value is valid json, return it parsed
      if (value && this.isValidJson(value)) {
        return JSON.parse(value);
      } else {
        //   else return value as is
        return value;
      }
    } else {
      // else return null
      return null;
    }
  }

  /**
   * remove item from local storage
   * @param {String} name name of item to remove
   */
  removeItem(name: string) {
    localStorage.removeItem(name);
  }

  /**
   * checks if a string is valid json or not
   * @param {String} value value that needs to be checked if json string or not
   * @returns whether or not string passed is json or not
   */
  isValidJson(value: string) {
    //   if value passes json regex test then we return true
    if (
      /^[\],:{}\s]*$/.test(
        value
          .replace(/\\["\\\/bfnrtu]/g, '@')
          .replace(
            /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
            ']'
          )
          .replace(/(?:^|:|,)(?:\s*\[)+/g, '')
      )
    ) {
      return true;
    } else {
      // else we return false
      return false;
    }
  }
}
