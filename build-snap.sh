#!/bin/sh
npm run dist
sudo snap install ./dist/eldarya-tax-calculator_0.0.1_amd64.snap --dangerous --devmode
eldarya-tax-calculator &