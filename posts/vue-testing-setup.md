---
title: 'Vue testing setup'
tags: ["vue"]
published: true
date: '2021-03-06'
---

In this article I'll try to explain how I set up my vue testing env with NPM, Jest and Babel.

most of it is taken from [VueSchool](https://vueschool.io/lessons/installing-vue-test-utils), coupled with my personal understanding and tools.

First install all the packages : 
```
"@jest/globals": "^26.6.2",
"@vue/test-utils": "^1.1.3",
"jest": "^26.6.3",
"jest-serializer-vue": "^2.0.2",
"vue-jest": "^3.0.7",
```

With the npm install command : 
```npm install vue-template-compiler @jest/globals @vue/test-utils jest jest-serializer-vue vue-jest```

After installing the proper dependencies, we have to create the proper config and scripts to execute our tests, three files are required for this :
All three should be located at the root of your project

# The config for babel
Babel ensures that all the modern js is correctly interpreted, without babel no "import {} from 'test.js'" for example.

## babel.config.js
```
module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current',
                },
            },
        ],
    ],
};
```

I'm not entirely sure about the usefulness of the 'targets' part.

# The config for Jest, the actual testing framework
Jest is the one that'll perform the tests, 
he figures out a lot of things by himself, but we still have to tell him were to find them.  
  
The file looks like this :  
## jest.config.js  
```
module.exports = {
  verbose: true,
  roots: ["<rootDir>/src/", "<rootDir>/specs/"],
  moduleFileExtensions: ['js', 'vue'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.vue$": "vue-jest",
  },
  snapshotSerializers: [
    "<rootDir>/node_modules/jest-serializer-vue"
  ]
}
```
  
Two parts are important here :
_roots_ is where Jest should search for his tests, by convention you should have a directory containing 
all your tests with a name like specs (short for specifications) or tests.
_transform_ is where we tell to Jest which interpreter to use depending on the extension of the file, because js files use modern js and vue files use vue (could have guessed this one)

# The test script
To launch your script you can add a script entry in your package.json, you have one if you use npm.

## package.json
```
"scripts": {
    ...,
    "test": "jest --watchAll",
    ...,
},
```

The option --watchAll is to restart the tests at every change.

Now you should be good to go !
