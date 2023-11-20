module.exports = {
  transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc-node/jest",
      {
        jsc: {
          target: "esnext",
        },
      },
    ],
  },
};
