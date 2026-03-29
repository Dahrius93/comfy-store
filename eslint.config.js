import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{js,jsx}"],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    rules: {
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
]);

/** eslint mi segna errore su tutte le funzioni loader delle pagine
 *
 * il problema è react-refresh/only-export-components.
 * Il plugin React Refresh non vuole che un file esporti sia componenti che
 * funzioni/costanti non-componenti (come loader), perché rompe il Fast Refresh di Vite.
 *
 * Hai due opzioni:
 *
 * Opzione 1 — Silenziare la regola solo per i file loader (soluzione rapida, comune nei tutorial React Router)
 * Opzione 2 — Spostare i loader in file separati (soluzione pulita ma più verbosa)
 *
 * la cosa più semplice è silenziare la regola nella config, permettendo le eccezioni con allowConstantExport:
 *
 *
 * modifica effettuata:
 *
 * "react-refresh/only-export-components": [
 *         "warn",
 *       { allowConstantExport: true },
 *     ],
 * */
