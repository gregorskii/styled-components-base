// Define our `fg` and `bg` on the theme
const base = {
  fg: "palevioletred",
  bg: "white"
};

// This theme swaps `fg` and `bg`
const invert = ({ fg, bg }) => ({
  fg: bg,
  bg: fg
});

export {
	base,
	invert
};