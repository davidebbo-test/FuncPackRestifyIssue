To repro funcpack issue:

- Clone repo
- Run `npm install --production` from the root
- Run `funcpack pack .`
- Run `func host start`
- Request the function, e.g. by hitting http://localhost:7071/api/Hello (adjust the port)

And it blows up with:

```
Function completed (Failure, Id=11942169-b874-4ff1-8d64-7573cc9866ae)

A ScriptHost error has occurred
Exception while executing function: Functions.Hello. mscorlib: TypeError: require is not a function
    at Object.<anonymous> (D:\gitapps\FuncPackRestifyIssue\.funcpack\index.js:18524:14)
    at __webpack_require__ (D:\gitapps\FuncPackRestifyIssue\.funcpack\index.js:21:30)
    at Object.module.exports.module.exports (D:\gitapps\FuncPackRestifyIssue\.funcpack\index.js:19083:44)
    at __webpack_require__ (D:\gitapps\FuncPackRestifyIssue\.funcpack\index.js:21:30)
    at Object.module.exports.str (D:\gitapps\FuncPackRestifyIssue\.funcpack\index.js:12287:18)
    at __webpack_require__ (D:\gitapps\FuncPackRestifyIssue\.funcpack\index.js:21:30)
    at Object.<anonymous> (D:\gitapps\FuncPackRestifyIssue\.funcpack\index.js:28835:23)
    at __webpack_require__ (D:\gitapps\FuncPackRestifyIssue\.funcpack\index.js:21:30)
    at Object.<anonymous> (D:\gitapps\FuncPackRestifyIssue\.funcpack\index.js:29592:17)
    at __webpack_require__ (D:\gitapps\FuncPackRestifyIssue\.funcpack\index.js:21:30).
```
