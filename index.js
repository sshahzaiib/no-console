require('dotenv').config()

const noConsole = (DEBUG = false) => {
  const _debug = process.env.DEBUG || DEBUG
  if (process.env.NODE_ENV === "production" || !_debug) {
    const _console = Object.keys(console);
    _console.forEach((_c) => (console[_c] = () => {}));
  }
}

module.exports = noConsole;
