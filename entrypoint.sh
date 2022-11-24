#!/bin/bash
tsc src/index.ts --resolveJsonModule --esModuleInterop --skipLibCheck
node src/index.js