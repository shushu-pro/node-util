import { getPortUnused } from '../src/'

console.info({ getPortUnused }, process.env.NODE_ENV)

getPortUnused(1111).then((port) => {
  console.info({ port })
})
