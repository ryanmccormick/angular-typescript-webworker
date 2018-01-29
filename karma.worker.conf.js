module.exports = function(config) {
  config.set({
    frameworks: ["jasmine", "karma-typescript"],
    files: [
      "./worker/**/*.ts" // *.tsx for React Jsx
    ],
    preprocessors: {
      "./worker/**/*.ts": "karma-typescript" // *.tsx for React Jsx
    },
    reporters: ["progress", "karma-typescript"],
    browsers: ["ChromeHeadless"],
    tsconfig: "./tsconfig.worker.spec.json"
  });
};
