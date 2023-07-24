This Repo basically takes you through whole react course.
Also included some Theory questions in a file as wel

#parcel

-dev build

-local server

-HMR : hot module replacement

-file watching algorithm written in c++

-caching faster builds

-image optimizaation

-minification

-boundling

-compressing

-consistent hashing

-code splitting

-differential bundling: support older browser

-diagnostic

-error handling

-https and http both server is provided

//https://parceljs.org/docs/ => for more parcel info

======================

food project

#Swift bite
/\*
We are starting with Food order app
we draw wireframe first
than we start deciding components

1. Head component
   -logo comp
   -nav-items comp

2)Body component

- search comp
  -card comp

  3)Footer component
  -copyright , links , adress etc

\*/

#React-Hooks
Normal js functions by facebook devlopers.
they are inside react

-useState()
it takes one argument initial state
it returns array of size 2 with arr[0]-state variable and arr[1] is fn to change that state variable value so component rerenders
note=> component only re renders if we change state variable using fn and not direct change

-useEffect()
it takes 2 argument

1. callback fun
2. dependency array (genreally containes state variable)

note= callback fn is necessary / dependency array is not nesecarry
so there are three situations now

note=> useeffect renders after rendering of component

1. no dependency array
   => if no dependency arrray useeffect will render whenever component renders
2. if empty array
   => it renders only once when initalyy component renders for first time
3. array having one or more state variables
   => it renders once when initalyy component renders for first time plus
   whenever our state variable changes that is provided in dependency
   useeffect rerenders with that component

=============

react-routing

// first we create route config
const routeConfig = createBrowserRouter([{}]);
{}=> inside it contains path and element

//now after createing path
we use RouterProvider component from reactrouter and render in inside root component and pasing config in props route={routeConfig}

//also we can make our own error page and add errorElement to base path
// by using useRouteError we can catch exact type of error and show it to user

#two types of routing
1)client side routing
=when we change components and no page request to server
2)server side routing
=when we change page and send request to server(old , were we request html files)

#redux
Install @reduxjs/toolkit and react-redux
Build our store
Connect our store to our app
Slice (cartSlice)
dispatch(action)
Selector
