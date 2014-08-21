Ember-Lance
===========

Dashboard Bootstrap implemented with Ember, D3.js and other third-party libraries 

---
##Project Description
Ember_Lance is not a demo. It is not a tutorial too. It is an application reference architecture based on [Ember.js](http://emberjs.com/), [D3.js](http://d3js.org/) and other pragmatic programming technologies. It has picked many mainstream frameworks and libraries carefully and update them with the times.

It uses [npm](https://www.npmjs.org/), [bower](http://bower.io/) , [grunt](http://gruntjs.com/) and [maven](http://maven.apache.org/) to build and manage sources.

It focuses on the front-end side but it also provides back-end codes for front-end. Front-end uses API and Data of the back-end to display.

You can use it as your initial project and add/remove some frameworks for your project and libraries although this project has provided integration of many libraries.

I would appreciate it if you could add a link about [Ember-Lance](https://github.com/smallnest/Ember-Lance) in your project and introduce it to your friends.

I welcome your comments and suggestions whether you are a programmer or a customer. 

![snapshot](https://raw.githubusercontent.com/smallnest/Ember-Lance/master/snapshot.png)


## Build
you should install [compass](http://compass-style.org/install/) first. Compass is a Sass-based Stylesheet Framework that streamlines the creation and maintenance of CSS.
You should install node.js and npm.
You should install bower and grunt.

Then you can git clone this project in your local environment and run if you only want to build and test front-end:
``` sh
	npm install
	bower install
	grunt serve
```

If you want to build a war you can run:
``` sh
	mvn package
```

## Roadmap

### 1.0.1


### 1.0.0
create the first version with initial codes.  
1. [yeoman](https://github.com/yeoman/generator-ember): use yeoman to create an initial scaffold.   
2. [sb-admin2](https://github.com/IronSummitMedia/startbootstrap/tree/gh-pages/templates/sb-admin-2): a dashboard template of bootstrap  
3. [font-awesome](http://fortawesome.github.io/Font-Awesome/):  a font icon library  
4. [Ember.js](http://emberjs.com/): A framework for creating ambitious web applications. Other similar frameworks are: Angular,Backbone, Knockout, CanJS  
5. [Bootstrap](http://getbootstrap.com/): Actually Ember-Lance uses [bootstrap-sass](https://github.com/twbs/bootstrap-sass)   
6. [D3.js](http://d3js.org/): Data-Driven Documents  
7. [NVD3](http://nvd3.org/): Re-usable charts for d3.js. Other similar framework is : [C3.js](http://c3js.org/)  
8. [bs_for_ember](https://github.com/ember-addons/bootstrap-for-ember): Bootstrap for Ember.js is a collection of UI components based on Twitter Bootstrap v3 for Ember.js  
9. Others: npm, bower, grunt and their libraries  

