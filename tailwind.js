module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      spacing: {
        2: "0.3rem"
      }
    },
    inset: {
      "0": 0,
      auto: "auto",
      "1/2": "50%"
    }
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "group-hover"],
    display: ["responsive", "hover", "focus", "group-hover"]
  },
  plugins: []
};
