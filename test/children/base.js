import net from 'net'

export default function ({ getPortUnused }, { tests, test, assert }) {
  tests('net', () => {
    test('getPortUnused', () => {
      assert.isBe(getPortUnused(23456), 23456)
      assert.isBe(getPortUnused(23456), 23456)
      const [ s1 ] = [ net.createServer() ]
      s1.listen(23456)
      assert.isBe(getPortUnused(23456), 23456 + 1)
      s1.close()
      assert.isBe(getPortUnused(23456), 23456)
    })
  })
}
