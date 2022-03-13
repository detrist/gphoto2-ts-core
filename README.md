# Gphoto2 Core library for TypeScript

[![npm package](https://img.shields.io/badge/npm%20i-example--typescript--package-brightgreen)](https://www.npmjs.com/package/gphoto2-ts-core) [![version number](https://img.shields.io/npm/v/gphoto2-ts-core?color=green&label=version)](https://github.com/detrist/gphoto2-ts-core/releases) [![Actions Status](https://github.com/detrist/gphoto2-ts-core/workflows/Test/badge.svg)](https://github.com/detrist/gphoto2-ts-core/actions) [![License](https://img.shields.io/github/license/detrist/gphoto2-ts-core)](https://github.com/detrist/gphoto2-ts-core/blob/main/LICENSE)

> A Node.js wrapper for gphoto2 written in TypeScript. Useful for remote controlling of DSLRs and other digital cameras supported by gphoto2.

## Development

### Use as a template

(If you do not use GitHub, you can [download the archive of the example package](https://github.com/detrist/gphoto2-ts-core/archive/main.zip))

### Set up tools and environment

You need to have [Node.js](https://nodejs.org/en/download/) installed. Node includes npm as its default package manager.

Open the whole package folder with a good code editor, preferably [Visual Studio Code](https://code.visualstudio.com/download). Consider installing VS Code extensions [ES Lint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

In the VS Code top menu: **Terminal** -> **New Terminal**

### Install dependencies

Install dependencies with npm:

```bash
npm i
```

### Write your code

Make necessary changes in **package.json** (name, version, description, keywords, author, homepage and other URLs).

Write your code in **src** folder, and unit test in **test** folder, replacing the original files there.

The VS Code shortcuts for formatting of a code file are: <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>F</kbd> (Windows); <kbd>Shift</kbd> + <kbd>Option (Alt)</kbd> + <kbd>F</kbd> (MacOS); <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd> (Linux).

Change code linting and formatting settings in **.prettierrc.js** if you want.

### Test

Test your code with Jest framework:

```bash
npm run test
```

**Note:** Example TypeScript Package uses [husky](https://typicode.github.io/husky/), [pinst](https://github.com/typicode/pinst) and [commitlint](https://commitlint.js.org/) to automatically execute test and [lint commit message](https://www.conventionalcommits.org/) before every commit.

### Build

Build production (distribution) files in your **dist** folder:

```bash
npm run build
```

It generates CommonJS (in **dist/cjs** folder), ES Modules (in **dist/esm** folder), bundled and minified UMD (in **dist/umd** folder), as well as TypeScript declaration files (in **dist/types** folder).

### Try it before publishing

Run:

```bash
npm link
```

[npm link](https://docs.npmjs.com/cli/v6/commands/npm-link) will create a symlink in the global folder, which may be **{prefix}/lib/node_modules/gphoto2-ts-core** or **C:\Users\<username>\AppData\Roaming\npm\node_modules\gphoto2-ts-core**.

Create an empty folder elsewhere, you don't even need to `npm init` (to generate **package.json**). Open the folder with VS Code, open a terminal and just run:

```bash
npm link gphoto2-ts-core
```

This will create a symbolic link from globally-installed gphoto2-ts-core to **node_modules/** of the current folder.

You can then create a, for example, **testnum.ts** file with the content:

```ts
import { Camera } from 'gphoto2-ts-core'
let camera: Camera = new Camera()
...
camera.captureImages((chunk: Buffer) => {
  console.log(chunk)
}, 20, DEFAULT_FRAMES)
```

If you don't see any linting errors in VS Code, if you put your mouse cursor over `Camera` and see its type, then it's all good.

Whenever you want to uninstall the globally-installed gphoto2-ts-core and remove the symlink in the global folder, run:

```bash
npm uninstall gphoto2-ts-core -g
```
## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Add your changes: `git add .`
4.  Commit your changes: `git commit -am 'Add some feature'`
5.  Push to the branch: `git push origin my-new-feature`
6.  Submit a pull request :sunglasses:

## Credits

TODO: Write credits

## Built With

* VS Code
* Love

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/detrist/gphoto2-ts-core/tags).

## Authors

* **Balázs Sándor** - *Initial work* - [detrist](https://github.com/detrist)

See also the list of [contributors](https://github.com/detrist/gphoto2-ts-core/graphs/contributors) who participated in this project.

## License

The MIT License (MIT)

Copyright (c) 2009 - 2022 Balázs Sándor

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.