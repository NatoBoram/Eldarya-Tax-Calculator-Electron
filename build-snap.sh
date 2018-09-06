#!/bin/sh
npm run dist
sudo snap install ./dist/eldarya-tax-calculator_1.0.0_amd64.snap --dangerous --devmode
eldarya-tax-calculator &