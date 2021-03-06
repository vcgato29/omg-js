/*
Copyright 2018 OmiseGO Pte Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License. */

require('dotenv').config()

const config = {
  geth_url: process.env.GETH_URL || 'http://localhost:8545',
  watcher_url: process.env.WATCHER_URL || 'http://localhost:7434',
  childchain_url: process.env.CHILDCHAIN_URL || 'http://localhost:9656',
  rootchainContract: process.env.ROOTCHAIN_CONTRACT || '',
  contract_exchanger_url: process.env.CONTRACT_EXCHANGER_URL || 'http://localhost:5000/get_contract',
  testErc20Contract: process.env.TEST_ERC20_CONTRACT || '0x757afd667fe677540eb03b4642716a0bd7c5986a',
  fundAccount: process.env.FUND_ACCOUNT || '',
  fundAccountPrivateKey: process.env.FUND_ACCOUNT_PRIVATEKEY || '',
  fundAccountPassword: process.env.FUND_ACCOUNT_PASSWORD || ''
}

module.exports = config
