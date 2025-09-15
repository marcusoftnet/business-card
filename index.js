
// ESM imports
import chalk from 'chalk'
import boxen from 'boxen'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// ESM __dirname replacement
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const asciiFace = fs.readFileSync(path.join(__dirname, 'bin/ascii.txt')).toString()

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  ascii: chalk.yellow(asciiFace),
  name: chalk.white('           Marcus Hammarberg'),
  handle: chalk.white('marcusoftnet'),
  about: chalk.white('Agile Coach, Author, Speaker'),
  email: chalk.white('marcusoftnet@gmail.com'),
  work: chalk.cyan('Consultant at Umain, part of Eidra'),
  github: chalk.cyan('https://github.com/') + chalk.green('marcusoftnet'),
  linkedin: chalk.cyan('https://www.linkedin.com/in/') + chalk.green('marcusoftnet'),
  web: chalk.cyan('https://www.marcusoft.net'),
  bungsuBook: chalk.green(' The Bungsu Story, https://bit.ly/bungsuStoryBook'),
  kanbanBook: chalk.green('             Kanban In Action, https://bit.ly/theKanbanBook'),
  labelAbout: chalk.white.bold('      About:'),
  labelEmail: chalk.white.bold('      Email:'),
  labelWork: chalk.white.bold('       Work:'),
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
const about = `${data.labelAbout}  ${data.about}`
const email = `${data.labelEmail}  ${data.email}`
const work = `${data.labelWork}  ${data.work}`
const github = `${data.labelGitHub}  ${data.github}`
const linkedIn = `${data.labelLinkedIn}  ${data.linkedin}`
const blog = `${data.labelWeb}  ${data.web}`
const books = `${data.labelBooks}`
const bookKIA = ` ${data.kanbanBook}`
const bookSBS = ` ${data.bungsuBook}`

// Put all our output together into a single variable so we can use boxen effectively
const output = ascii + newline + newline +
               heading +
               newline + newline +
               work + newline +
               about + newline +
               email + newline +
               github + newline +
               linkedIn + newline +
               blog + newline + newline +
               books + bookSBS + newline +
               bookKIA + newline

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
