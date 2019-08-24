// export { default as Button } from './components/Button';

// export { default as ThemeProvider } from './ThemeProvider';

import { base } from './theme';

const theme = {
	theme: {
		...base,
		...{fg: 'chai'}
	}
};

console.log(theme);