// Define our `fg` and `bg` on the theme
const base = {
  fg: "palevioletred",
  bg: "white"
};

// This theme swaps `fg` and `bg`
const invertTheme = ({ fg, bg }) => ({
  fg: bg,
  bg: fg
});

export {
	base,
	invertTheme
};