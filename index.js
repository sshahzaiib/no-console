const noConsole = () => {
  if (process.env.NODE_ENV === "production" && process.env.NODE_DEBUG !== true) {
    const _console = Object.keys(console);
    _console.forEach((_c) => (console[_c] = () => {}));
  }
}

module.exports = noConsole;
