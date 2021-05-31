# nextjs boiler plate

>타입스크립트 설정 - path alias 포함
>eslint, prettier 설정 - vsc setting.json 설정 필요
>redux, redux-saga 설정 - ducks 패턴
>fullPage ui
> styled-components 설정


```ts
// vsc setting.json
{
    "editor.suggestSelection": "first",
    "prettier.printWidth": 80,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true 
    },
    "editor.formatOnSave": true,
    "workbench.startupEditor": "welcomePage",
    "workbench.editor.enablePreview": false,
    "javascript.updateImportsOnFileMove.enabled": "always",
    "typescript.updateImportsOnFileMove.enabled": "always",
    "extensions.ignoreRecommendations": true,
    "diffEditor.ignoreTrimWhitespace": false,
    "settingsSync.ignoredExtensions": [
    ],
    "editor.accessibilitySupport": "off",
    "liveServer.settings.donotShowInfoMsg": true,
    "json.maxItemsComputed": 50000,
    "[json]": {
        
        "editor.quickSuggestions": {
            "strings": true
        },
        "editor.suggest.insertMode": "replace"
    }
}
```
