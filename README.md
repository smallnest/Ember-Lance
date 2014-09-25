Ember-Lance
===========

Dashboard Bootstrap implemented with Ember, D3.js and other third-party libraries 

Please check [wiki](wiki) to learn more.
---
##Project Description
Ember_Lance is not a demo. It is not a tutorial too. It is an application reference architecture based on [Ember.js](http://emberjs.com/), [D3.js](http://d3js.org/) and other pragmatic programming technologies. It has picked many mainstream frameworks and libraries carefully and update them with the times.

It uses [npm](https://www.npmjs.org/), [bower](http://bower.io/) , [grunt](http://gruntjs.com/) and [maven](http://maven.apache.org/) to build and manage sources.

It focuses on the front-end side but it also provides back-end codes for front-end. Front-end uses API and Data of the back-end to display.

You can use it as your initial project and add/remove some frameworks for your project and libraries although this project has provided integration of many libraries.

I would appreciate it if you could add a link about [Ember-Lance](https://github.com/smallnest/Ember-Lance) in your project and introduce it to your friends.

I welcome your comments and suggestions whether you are a programmer or a customer. 

![screenshot](https://raw.githubusercontent.com/smallnest/Ember-Lance/master/screenshot.png)
![screenshot](https://raw.githubusercontent.com/smallnest/Ember-Lance/master/screenshot2.png)

## Build

Please visit wiki [build](wiki/Build) page.

## Roadmap

### 1.0.1
1. [cubism](https://github.com/square/cubism):  a D3 plugin for time series visualization  
1. [ember-validations](https://github.com/dockyard/ember-validations): Validations for Ember Objects  
2. [addepar ember-widgets](https://github.com/addepar/ember-widgets):A powerful and easy to use component library for Ember.js  
3. [ember-animated-outlet](https://github.com/billysbilling/ember-animated-outlet):  . Ember Animated Outlet is a plug'n'play module to support animated route transitions in Ember.js. Other similar frameworks are: <https://github.com/ef4/ember-animation-demo> and <https://github.com/gigafied/ember-animate>  


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
9. [metisMenu](https://github.com/onokumus/metisMenu): Easy menu jQuery plugin for Twitter Bootstrap 3
10. Others: npm, bower, grunt and their libraries  

## References
* [Node, Grunt, Bower and Yeoman – A Modern web dev’s Toolkit](http://www.javacodegeeks.com/2014/08/node-grunt-bower-and-yeoman-a-modern-web-devs-toolkit.html)
* [AngularJS vs. Backbone.js vs. Ember.js](http://www.airpair.com/js/javascript-framework-comparison?utm_source=javascriptweekly&utm_medium=email)
[前端开发框架三剑客—AngularJS VS. Backone.js VS.Ember.js](http://www.csdn.net/article/2014-08-27/2821409-javascript-framework-comparison)

## FAQ
1. why not add dropdown submenu at the top instead of left sidebar?

> Submenus just don't have much of a place on the web right now, especially the mobile web. They will be removed with 3.0
>
> <https://github.com/twbs/bootstrap/pull/6342>