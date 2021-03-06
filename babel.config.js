const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
        ei: '>=11'
      },
      useBuiltIns: "usage",
      plugins : [
        "transform-custom-element-classes"
      ]
    },
  ],
];

module.exports = { presets };