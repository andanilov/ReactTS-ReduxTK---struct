module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'airbnb', 'airbnb/hooks'
	],
	'overrides': [
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'@typescript-eslint'
	],
	'rules': {
		'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
		'linebreak-style': 'off',
		'import/extensions': 'off',
		'import/no-unresolved': 'off',
		'react/function-component-definition': 'off',
		'no-shadow': 'off',
		'no-unused-vars': 'off'
		 
	}
};
