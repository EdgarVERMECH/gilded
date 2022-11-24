#!/bin/bash
tsc src/index.ts --resolveJsonModule --esModuleInterop --skipLibCheck
node src/index.js
rm src/*.js