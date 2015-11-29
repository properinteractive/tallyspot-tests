###Set up git hooks

```
cp .git_hooks/* .git/hooks
chmod -R 777 .git/hooks
```

###Set up linting

Based on the AirBnb [JavaScript Style Guide](https://github.com/airbnb/javascript)

```
npm install -g eslint-config-airbnb eslint babel-eslint
```

###Run tests

`npm install dalek-cli -g`

`npm install`

`npm test`