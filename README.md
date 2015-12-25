###Set up git hooks

```
cp .git_hooks/* .git/hooks
chmod -R 777 .git/hooks
```

###Set up linting

Based on the AirBnb [JavaScript Style Guide](https://github.com/airbnb/javascript)

###Install dependencies
`npm install -g eslint-config-airbnb eslint babel-eslint`

`npm install`

###Run tests

`npm test`