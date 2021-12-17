import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

import { createVuetify } from "vuetify";

export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#41b883",
          background: "#fff",
          error: "#d63031",
          info: "#0984e3",
          secondary: "#fdcb6e",
          success: "#00cec9",
          surface: "#fff",
          warning: "#2d3436",
          "on-surface": "#000",
        },
        dark: false,
        variables: {},
      },
    },
  },
});
