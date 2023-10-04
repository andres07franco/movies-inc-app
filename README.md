
# MOVIE INC APP

Amazing app to explore your favorites movies, building in  React Native.


## Screenshots

![Demo APP](./assets/demo.gif)


## Architecture & Patterms

- The file organization is inspired by the Onion Architecture and SOLID principles.

    ![Demo APP](./assets/Onion-View.PNG)

- The convention to naming and localize the modules and files I used Angular Guide Style. 

- For get better organization of the componets and apply the S of SOLID I used the Atomic design.


## previous requirements

- Nodejs
- Expo

# Configuration

Create .env file and add the value for the follow  variables

    EXPO_PUBLIC_API_URL=https://api.themoviedb.org/3
    EXPO_PUBLIC_AUTH_TOKEN=eyxxxxxxxxxxx


## Run

We only need run:

    yarn start


## Test

We only need run:

    yarn test

### Current Coverage 

| File   |      % Stmts      |  % Branch | % Funcs | % Lines |
|----------|:-------------:|------:|------:|------:|
| All files  |  92.7  |   80.32 | 91.37 |93.04|


## References

- [Angular Style Guide ](https://angular.io/guide/styleguide)
- [UI Design](https://dribbble.com/shots/5529233-Movie-App-Interface-Design-Dark-Theme)
- [Atomic design](https://bradfrost.com/blog/post/atomic-web-design/)