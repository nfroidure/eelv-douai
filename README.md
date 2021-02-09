# eelv-douai

## Develop

```sh
npm i
npm run dev
```

## Deploy :
```sh
NODE_ENV=production bin/content.sh
NODE_ENV=production node bin/authorize
NODE_ENV=production npm run sync
NODE_ENV=production npm run build
NODE_ENV=production npm run export
NODE_ENV=production npm run deploy
```

## TODO:
- history
- faq
- values
