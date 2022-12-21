export default {
  grid: {
    container: {
      sm: "33.75rem",
      md: "45rem",
      lg: "60rem",
      xlg: "71.25rem",
      xxlg: "82.5rem"
    }
  },
  border: {
    radius: "0.25rem",
    outlineOffiset: "0.125rem"
  },

  font: {
    family: {
      default:
        "Quicksand, -apple-system, BlinkMacSystemFont, 'Segoe UI', Poppins, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      custom:
        "Kontora, -apple-system, BlinkMacSystemFont, 'Segoe UI', Poppins, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
    },

    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700
    },
    sizes: {
      xsmall: "0.75rem", // 12px
      small: "0.875rem", //14px
      medium: "1rem", // 16px
      large: "1.25rem", // 20px
      xlarge: "1.5rem", // 24px
      xxlarge: "3.5rem", // 56px
      display: "8.875rem" // 142px
    }
  },

  spacings: {
    xxsmall: "0.5rem", //8px
    xsmall: "1rem", // 16px
    small: "1.25rem", // 20px
    medium: "1.875rem", // 30px
    large: "2.5rem", // 40px
    xlarge: "3.75rem", // 60px
    xxlarge: "5rem" // 80px
  },
  transition: {
    default: "0.3s ease-in-out",
    fast: "0.15s ease-in-out"
  },

  layers: {
    glitch: 5,
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },

  colors: {
    white: "#FFFFFF",
    glitch: "#f2f2f2",
    gray50: "#E1E1E6",
    gray400: "#59606C",
    gray500: "#343642",
    text: "#494D4B",
    blue400: "#4EB3EF",
    blue900: "#020015",
    brown: "#C15143"
  }
} as const;
