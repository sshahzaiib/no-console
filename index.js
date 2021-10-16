const noConsole = (DEBUG = false) => {
  if (process.env.NODE_ENV === "production" && !DEBUG) {
    const _console = Object.keys(console);
    _console.forEach((_c) => (console[_c] = () => {}));
  }
}

module.exports = noConsole;
