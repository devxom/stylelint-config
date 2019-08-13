module.exports = () => ({
  code: input =>
    input
      .replace(/-styled-mixin\d+:\s.+(?!{|,).$/gm, `/* styled-mixin */`)
      .replace(/^.*dummyComment.*$/gm, `/* styled-mixin */`)
      .replace(/\/\/.*$/gm, `/* comment */`)
});
