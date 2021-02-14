# Install

```sh
cd api && npm install
cd app && npm install
```

NOTICE: you'll need an instance of mongodb running in your computer


## Run it

```sh
cd api && npm run dev
cd app && npm run serve
```

- Go to `http://localhost:8080/`
- Click in login
- A new entry will be created in addresses each time you load the `/results` path.
- To re-create the error, just reload the page, you'll see and you won't see any results


So, after login a `Bearer your_token_here` header is sent to `/address` but if you reload the page it won't read from the stored value in `localStorage['feathers-jwt']`