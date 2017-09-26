# Webpack ReactJS starter
A Starter template for React JS using webpack adapted for developer and production builds.

[create-react-app](https://github.com/facebookincubator/create-react-app) is a very good tool for starting a react js app. But lot of configurations are abstracted and hidden in it. If you need different configurations you have to set up your own webpack.

This project is plain simple webpack implementation with ReactJS, ES6 and JSX support with some other features which can be easily removed (if you don't want it) or configured.

## Installation

Clone or download this repository  
Then run
>yarn install

To start a development server, run
>yarn start  

and then you can try editing source code in 'src' folder

To build the package , run
>yarn build

package will be built into 'dist' folder

## Features
- Different webpack configuration file for production and development to get best of both worlds.

### Development
- Hot Reloading
- Resourse hashing to prevent caching probilem while testing
- ES6 and JSX support
- CSS loader

### Production
- Separate css and js minified bundle
- React JS linked from CDN to use cached packages

