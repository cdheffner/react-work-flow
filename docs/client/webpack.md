
# Webpack

There will be very few cases that you ever need to touch your
`./webpack.config.js`, but you may wish to add "aliases" so that
you can reference files and directories much more easily.

> It is important to understand how Webpack (Node.js) treats
> paths for imports. A path starting with './' will be treated
> as relative, and a path that begins without any insignia of relativity,
> like 'something/file.js' will alert Node to look inside of the
> `node_modules` folder. Using Webpack aliases allows you to specify
> that when a path begins with 'somethingSpecific', Node will follow
> the aliased path to find the module before consulting with `node_modules`.

---

Inside of your `./webpack.config.js`, you will find:
```
resolve: {
  extensions: [...],
  alias: {}
}
```

Using the alias object, you can add simple references to files
and directories so that there is no need for relative paths and to
keep Node from searching the `node_modules` folder for this specific
file.

```
alias: {
  stuff: `${__dirname}/src/someDirectory`
}
```

Given the above alias, you can now import files in your React
(JSX) files like so: 
_inside of './src/components/Something/Something.jsx'_

```
import Something from 'stuff/Something'
```
_is equivalent to '../../someDirectory'_ or  
_'rootDirName/src/someDirectory_

---

Aliasing a file is just as simple:

```
alias: {
  aFile: `${__dirname}/src/aFile.js`
}
```

Now you can easily do:

```
import stuff from 'aFile'
```