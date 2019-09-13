const enhancer = require('./enhancer.js');
// test away!
const item = {

  name: 'Hammer',
  enhancement: 13,
  durability: 78

}

describe('Item Enhancement', () => {
  describe('Fixing Item', () => {
    it('Item at 100%', () => {
      expect(enhancer.repair(item)).toEqual({...item, durability: 100})
    })
  })

  describe('Item enhanced', () => {
    it('item enhanced 20', () => {
      expect(enhancer.succeed({...item, enhancement: 20})).toEqual({...item, enhancement: 20 })
    })
  })

  describe('Item enhancement failed', () => {
    it('low enhancer fail', () => {
      expect(enhancer.fail(item)).toEqual({...item, durability: item.durability -5 })
    })
    it('mid enhancer fail', () => {
      expect(enhancer.fail({...item, enhancement: 15})).toEqual({...item, enhancement: 15, durability: item.durability - 10 })
    })
    it('high enhancer fail', () => {
      expect(enhancer.fail({...item, enhancement: 17 })).toEqual({ ...item, enhancement: 16, durability: item.durability - 10})
    })
  })
})