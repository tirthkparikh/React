Assignment 1
Ques1 - what is emmit?
emmit generally speeds up the process of writting html and css .Emmit uses different abbreviations and short expression depending on whats pass and then dynamically convert the abbreviations into full code.

Ques2 - difference between library and framework?
library is consist of functions that an application can call to perform a task and framework defines how a devloper design an application.

Ques3 - what is CDN ?why do we use it?
CDN is a content delivery network it is a distributed network of server located in multiple centers.it helps to make a website lod faster and perform better for user.

Ques4 - why is React is known as React?
React is javascript library for building userInterface.it got it's name because when we change in code it efficiently update the userInterface.

Ques5 - what is cross origin in script tag?
this attribute specifies that the script should be loaded with CORS(cross origin resource sharing) enable.it allows the script to be fetched from a different domain while still maintaining security.

Ques6 - what is difference between React and ReactDOM?
React is library that enable you to make UI.while ReactDOM provide a tool and APIs to render those react components into actual HTML DOM.

Ques7 - what is difference between react.devlopment.js and react.production.js files via CDN?
react.delopment.js is used to take a warning and error for fixing issues.react.production.js is used to reduce file size and better performance without showing warning.

Ques8 - what are async and defer?
async download and execute the script asynchronously while defer download script and wait for html document to be parsed before executing the script.




assignment-2
what is npm ?
it is a package manager for all javascript programming language maintained by npm. package.json is configuration for npm.it is not a node package manager.

what is 'parcel/ Webpack' ? why do we need it ?
parcel and webpack are bundler. when a html , CSS , JS and normal file or whole code needs to be compressed before production , bundlers help these things more.

what is parcel-caches ?
it is created by bundler it serves as a caches for storing and reusing previously compiled .

what is npx ?
it is use to execute packages without install them globally.it is install latest version of package.

what is difference between dependencies and devdependencies ?
dependencies are typically nested in dependencies section of the package.json file . and it is consist of package that is use in production. and devdependencies also nested in devdependencies section of the package.json file. and it is consist of package that is use in devlopment or build process of our project .

what is tree shaking ?
tree shaking is a technique used javascript bundlers such as webpack to eliminate unused code from the final bundled. it is help to reduce size of bundle .

what is hot module replacement ?
it is allow you to update module without refreshing the page . when you make change in code parcel automatically update your code on browser.

list down your fav superpower of parcel and describe any three of them?
1 - hot reloading
when you make a change in your code parcel will automatically update your code on browser .

2- zero config
parcel automatically install all devdependencies and plugins for us .

3- webdev
parcel includes a devlopment server out of the box. just run command npx parcel_file name__ .

what is gitignore and what should we add and not add into it ?
gitignore is a file used to specify files and directories should be tracked or ignore by git. in gitignore we mention those file name or pattern which is not tracked by git.

what is difference between package.json and package-lock.json ?
dependencies are sopecified in package.json file and it contains metadata about the project like name version etc . while package-lock.json contains record of the exact version of package dependencies and it is not edited .

why we should not modify package-lock.json file ?
package-lock.json file is a version control alowhang with the project . this allows other developer to easily setup therir environment with the same dependencies if you modify you got a conflict.

what is node module ? it it is good idea to push that on git ?
node module is automatically created when we install dependencies using npm . it is too large in size so it increase the size of our repository and slow down cloning and fetching operation.

what is dist folder ?
dist folder contains html , CSS , Js file and assets such as image , font , media file etc .

what is browserlists ? read about dif bundler : vite , webpack , parcel ?
by defining browserlist you can ensure that your web application is compatible with the desired set of browser .in package.json file we add browserlist .

webpack is suitable for large scale project . parcel provides zero config for small project and vite provides extremely fast devlopment by browser .