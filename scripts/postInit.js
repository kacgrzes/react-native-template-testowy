
#!/usr/bin/env node
/* eslint-disable */
'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const exec = function() {
  const appPath = path.join(__dirname, '..');

  // Install development dependencies
  const devDependencies = JSON.parse(fs.readFileSync(path.join(appPath, 'devDependencies.json'), 'utf8'));

  for (const packageName in devDependencies) {
    const packageVersion = devDependencies[packageName]
    execSync(`yarn add ${packageName}@${packageVersion} --dev`, { stdio: 'inherit' });
  }

  execSync(`rm ${path.join(appPath, 'devDependencies.json')}`);

  // Setup the script rules
  let appPackage = JSON.parse(fs.readFileSync(path.join(appPath, 'package.json')));
  appPackage.scripts = Object.assign(appPackage.scripts, {
    build: 'rm -rf dist && yarn build:docs',
    'build:docs': 'rm -rf docs && node_modules/.bin/jsdoc -c jsdoc-conf.json',
    lint: 'node node_modules/eslint/bin/eslint.js src/**',
  });

  fs.writeFileSync(
    path.join(appPath, 'package.json'),
    JSON.stringify(appPackage, null, 2)
  );
}

exec();
/* eslint-enable */
