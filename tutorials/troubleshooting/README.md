# Troubleshooting Guide

This guide documents some common errors that you may encounter as you get started.

## Create app issues 

When running `npx create-react-app app-name` you may see issues similar to the one below. This pertains to an incompatibility of dependencies and there are a few ways to resolve this:

```While resolving: cathy-learning-platform@0.1.0
npm error Found: react@19.0.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
npm error
npm error Could not resolve dependency:
npm error peer react@"^18.0.0" from @testing-library/react@13.4.0
```

In the case above the dependency @testing-library/react@13.4.0 version expects a version of React that is compatible with ^18.0.0, but you are using React 19.0.0, which is not compatible with this peer dependency.

Potential Resolutions

1.Downgrade React to a Compatible Version. In the example above you can downgrade to v 18 as follows:
```
npm uninstall react react-dom
npm install react@18 react-dom@18
```
2. Update Testing Library:
```
npm info @testing-library/react versions

npm install @testing-library/react@<compatible-version>
```
