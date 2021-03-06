const ChildChain = require('../src')
const assert = require('chai').assert

const childChain = new ChildChain('watcher_url', 'childChain_url')

describe('signTransaction', () => {
  it('should sign the entire transaction object correctly', () => {
    const privateKey = '0x2cc1636720fda6cc925b2594440cbb6fa75b6df818db8a795b0119bf37984233'
    const unsignedTx = 'f85283c2f629808080808094000000000000000000000000000000000000000094736fa62adc040e4fdabfadf87e74ce0197304fad880de0b6b3a764000094000000000000000000000000000000000000000080'
    const signatures = childChain.signTransaction(unsignedTx, [privateKey])
    assert.equal(signatures.length, 1)
    assert.equal(signatures[0], '0x4f7bd9407c6b66a76e2217cd2c2c89e1923e8c1cf369d194c8b6f052b5f9ddbc1c642fc8310f29eaae111f07fc825dab835f99a726365ac2f1a6d79ddb5277181b')
    const signedTx = childChain.buildSignedTransaction(unsignedTx, signatures)
    const expectedTx = 'f897f843b8414f7bd9407c6b66a76e2217cd2c2c89e1923e8c1cf369d194c8b6f052b5f9ddbc1c642fc8310f29eaae111f07fc825dab835f99a726365ac2f1a6d79ddb5277181b83c2f629808080808094000000000000000000000000000000000000000094736fa62adc040e4fdabfadf87e74ce0197304fad880de0b6b3a764000094000000000000000000000000000000000000000080'
    assert.equal(signedTx, expectedTx)
  })
})
