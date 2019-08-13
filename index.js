"use strict";

/* global module */
module.exports = {
  syntax: "scss",
  processors: [
    "stylelint-processor-styled-components",
    "./processor/removeMixins.js"
  ],
  ignoreFiles: ["**/*.min.css"],
  rules: {
    // stylelint-config-recommended (modified)
    "at-rule-no-unknown": true,
    "block-no-empty": [
      true,
      {
        ignore: ["comments"]
      }
    ],
    "color-no-invalid-hex": true,
    "comment-no-empty": true,
    "declaration-block-no-shorthand-property-overrides": true,
    "font-family-no-duplicate-names": true,

    "function-calc-no-unspaced-operator": true,
    "function-linear-gradient-no-nonstandard-direction": true,
    "keyframe-declaration-no-important": true,
    "media-feature-name-no-unknown": true,

    "no-descending-specificity": true,
    "no-duplicate-at-import-rules": null,
    "no-duplicate-selectors": true,

    "no-extra-semicolons": true,
    "no-invalid-double-slash-comments": true,
    "property-no-unknown": true,
    "selector-pseudo-class-no-unknown": true,
    "selector-pseudo-element-no-unknown": true,
    "string-no-newline": true,
    "unit-no-unknown": true,

    // stylelint-config-styled-components
    "no-empty-source": null,
    "no-missing-end-of-source-newline": null,
    "property-no-vendor-prefix": true,
    "value-no-vendor-prefix": true,

    // custom config
    "at-rule-name-case": "lower",
    "at-rule-semicolon-newline-after": "always",
    "block-closing-brace-empty-line-before": "never",
    "block-closing-brace-newline-after": "always",
    "block-closing-brace-newline-before": "always-multi-line",
    "block-closing-brace-space-before": "always-single-line",
    "block-opening-brace-newline-after": "always-multi-line",
    "block-opening-brace-space-after": "always-single-line",
    "block-opening-brace-space-before": "always",
    "color-hex-case": "lower",
    "color-hex-length": "long",
    "color-named": "never",
    "comment-empty-line-before": [
      "always",
      {
        except: ["first-nested"],
        ignore: ["stylelint-commands"]
      }
    ],
    "comment-whitespace-inside": "always",
    "custom-property-empty-line-before": [
      "always",
      {
        except: ["after-custom-property", "first-nested"],
        ignore: ["after-comment", "inside-single-line-block"]
      }
    ],
    "declaration-bang-space-after": "never",
    "declaration-bang-space-before": "always",
    "declaration-block-no-duplicate-properties": [
      true,
      {
        ignoreProperties: [
          "consecutive-duplicates-with-different-values",
          "undefined",
          "-styled-mixin",
          "display"
        ]
      }
    ],
    "declaration-block-semicolon-newline-after": "always-multi-line",
    "declaration-block-semicolon-space-after": "always-single-line",
    "declaration-block-semicolon-space-before": "never",
    "declaration-block-single-line-max-declarations": 1,
    "declaration-block-trailing-semicolon": "always",
    "declaration-colon-space-after": "always-single-line",
    "declaration-colon-space-before": "never",
    "declaration-empty-line-before": null,
    "declaration-no-important": true,
    "font-family-name-quotes": "always-where-recommended",
    "font-weight-notation": "numeric",
    "function-comma-newline-after": "always-multi-line",
    "function-comma-space-after": "always-single-line",
    "function-comma-space-before": "never",
    "function-max-empty-lines": 0,
    "function-url-quotes": "never",
    "max-empty-lines": 1,
    "no-eol-whitespace": true,
    "number-leading-zero": "always",
    "property-case": "lower",
    "rule-empty-line-before": [
      "always",
      {
        except: ["first-nested"],
        ignore: ["after-comment"]
      }
    ],
    "selector-type-no-unknown": [
      true,
      {
        ignoreTypes: ["/^.*-styled-mixin.*/"]
      }
    ],
    "string-quotes": "double"
  }
};
