#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

'use strict'

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const output = fs.readFileSync(path.join(__dirname, 'output'), 'utf8')
console.log(output)
