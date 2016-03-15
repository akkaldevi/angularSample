# client

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

##Ref Links:
1. [http://yeoman.io/](http://yeoman.io/)
2. [http://start.jcolemorrison.com/how-i-setup-angular-node-projects/](http://start.jcolemorrison.com/how-i-setup-angular-node-projects/)
3. [http://learn.mean.io/#mean-io-hosting-mean-openshift](http://learn.mean.io/#mean-io-hosting-mean-openshift)

##Bootstrap
####After checking out, get into client folder and perform below tasks:
1. **npm install**
2. **bower install**
3. **grunt**
4. **grunt test**
5. **grunt serve**

##Troubleshooting

During installation depending on your os and prerequisite versions you may encounter some issues. Most issues can be solved by one of the following tips:

####Update NPM, Bower or Gulp
Sometimes you may find there is a weird error during install like npm’s Error: ENOENT. Usually updating those tools to the latest version solves the issue.

1. **$ npm update -g npm**        (Updating NPM)
2. **$ npm update -g gulp**       (Updating Gulp)
3. **$ npm update -g bower**      (Updating Bower)

####Cleaning NPM and Bower cache
NPM and Bower has a caching system for holding packages that you already installed. We found that often cleaning the cache solves some troubles this system creates.

1. **$ npm cache clean**    (NPM Clean Cache)
2. **$ bower cache clean**  (Bower Clean Cache)
