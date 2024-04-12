module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]
  }
}

/**
 * root: Indica che questa configurazione è quella principale e che non dovrebbe essere sovrascritta da altre configurazioni ESLint all'interno del progetto.
 * env: Specifica l'ambiente in cui viene eseguito il codice, come il browser e le funzionalità ECMAScript 2020.
 * extends: Estende le configurazioni predefinite di ESLint. In questo caso, estende le configurazioni di base (eslint:recommended) e le configurazioni per il supporto di React etc.
 * ignorePatterns: Specifica i pattern dei file da ignorare durante l'analisi. In questo caso, i file all'interno delle cartelle dist e .eslintrc.cjs verranno ignorati.
 * parserOptions: Specifica le opzioni del parser per indicare che il codice sorgente utilizza la versione ECMAScript più recente e che è di tipo modulo (sourceType: 'module').
 * settings: Contiene configurazioni aggiuntive per ESLint. In questo caso, imposta la versione di React su quella installata.
 * plugins: Specifica i plugin aggiuntivi da utilizzare con ESLint. In questo caso, utilizza il plugin react-refresh, probabilmente per il supporto alla funzionalità di "hot module replacement" di React.
 * rules: Contiene le regole personalizzate per l'analisi del codice. Ad esempio, disattiva la regola 'react/jsx-no-target-blank' e imposta la regola personalizzata 'react-refresh/only-export-components' per permettere solo l'esportazione di componenti React.
 **/
