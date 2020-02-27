'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')
const asciiFace = fs.readFileSync('./bin/ascii.txt').toString()

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  ascii: chalk.yellow(asciiFace),
  name: chalk.white('               Marcus Hammarberg'),
  handle: chalk.white('marcusoftnet'),
  work: chalk.white('Head of curriculum at </salt>'),
  twitter: chalk.cyan('twitter.com/') + chalk.green('marcusofnet'),
  github: chalk.cyan('github.com/') + chalk.green('marcusoftnet'),
  linkedin: chalk.cyan('www.linkedin.com/in/') + chalk.green('marcusoftnet'),
  web: chalk.cyan('www.marcusoft.net'),
  bungsuBook: chalk.green(' The Bungsu Story, bit.ly/bungsuStoryBook'),
  kanbanBook: chalk.green('             Kanban In Action, bit.ly/theKanbanBook'),
  labelWork: chalk.white.bold('       Work:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelBooks: chalk.white.bold('      Books:')
}

// "desc": "Get agile to work in practice - is my motto. This had led me to take interest in all kind of things: Kanban, Lean, TDD, Specification by example, Node, Continuous Delivery, server less technologies, and I have also contributed to open source frameworks such as SpecFlow, Nancy, RiotJs and Koa. I've spent 2 years working for the Salvation Army in Indonesia to help the health services there to become more effective. I've written two books; Kanban in Action (http://bit.ly/theKanbanBook) that describes the fundamentals and a business novel about how lean/agile principles helped us to save a hospital in Indonesia (http://bit.ly/bungsubook).",

// Actual strings we're going to output
const newline = '\n'
const ascii = `${data.ascii}`
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const booking = `${data.labelBooks}`
const bookIngKIA = ` ${data.kanbanBook}`
const bookIngSBS = ` ${data.bungsuBook}`

// Put all our output together into a single variable so we can use boxen effectively
const output = ascii + newline + newline +
               heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               twittering + newline + // data.labelTwitter + data.twitter
               githubing + newline + // data.labelGitHub + data.github
               linkedining + newline + // data.labelLinkedIn + data.linkedin
               webing + newline + newline + // data.labelWeb + data.web
               booking + bookIngSBS + newline +
               bookIngKIA + newline

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
