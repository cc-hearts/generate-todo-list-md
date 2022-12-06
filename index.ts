/**
 * @author heart
 * @description create nowDay todo list file that name is year-month-day.md
 * @Date 2022-09-09
 */

import * as fs from 'fs'
import { getTodayFormatDate, getMdTemplate } from './template.js'
import { logger } from '@cc-heart/utils'

const nowDay = getTodayFormatDate()
const fileName = nowDay + '.md'

// https://nodejs.org/api/fs.html#fsexistssyncpath
if (fs.existsSync(fileName)) {
  logger.error(`${fileName} file exist`)
} else {
  // https://nodejs.org/api/fs.html#fswritefilesyncfile-data-options
  fs.writeFileSync(`./${fileName}`, getMdTemplate(), {
    encoding: 'utf-8',
  })
  logger.success('new file success!')
}
