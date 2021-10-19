/* 
1
By default, the projects (in parserOptions) are resolved relative to the current working directory. If you run eslint in a different working directory to the folder containing tsconfig.json, @typescript-eslint/parser will not be able to locate the file.

To fix this, you can set tsconfigRootDir to __dirname, which would make the parser resolve the project configuration relative to .eslintrc.js:

module.exports = {
  // ...
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  // ...
} 
2
Update your eslintrc.json file with the following line:

"project": "PROJECT_NAME/tsconfig.json"

with PROJECT_NAME being the name of your project (not a macro).

*/

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
/* 
3
A VSCode-specific approach, that worked for me was to create a .vscode folder in the root project directory and add the following property to the settings.json file inside it:

{
  "eslint.workingDirectories": [
    "src"
  ]
}
The "src" could be any directory, which should be in eslint's scope.

If you have the following directories in your root folder: "backend" and "frontend", this will work: "eslint.workingDirectories": [ "backend", "frontend" ] 

*/