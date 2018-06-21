# Working Environment using Webpack 4 + Gulp 4 + Bootstrap 4 

Working environment using Webpack 4 + Gulp 4 + Bootstrap 4. 

## Overview

Based on [this awesome article](https://css-tricks.com/combine-webpack-gulp-4/). Check out the article first for better understanding on Webpack and Gulp part. I've added BS4 as its front-end framework component library and configure the webpack to cater multiple-entry point.


### Prerequisites

```
Node (>= v8.11.0)
NPM  (>= v5.6.0)
```

### Installing

We have to install all dependencies under packages.json

```
npm install
```

after installing you can now run your local

```
npm run dev
```

Note: You can configure the "server" in tasks > server.js. See [BrowserSync](https://browsersync.io/docs) for more info. 


### Why

The reason I came up with this approach is to minimize the filesize of the scripts by using different script for each page by importing only what is needed on that page. 

#### Pros
* Reduces the filesize significantly which is great for production stage
* Easier to maintain in development stage

#### Cons
* Dependent on the number of pages 

For the issue on the number of pages, I am thinking of maybe instead of page I can use it more like a template, e.g. The pages without form will be using the default script (default.js) while the pages with form will be using a different script (pagesWithFrom.js), but it will not be flexible as the page specific script.


### Future Update

The current production task does not minified or uglified the outputs.
