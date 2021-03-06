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

const ChildChain = require('../packages/omg-js-childchain')

let watcherUrl = 'http://localhost:4000'
let address = '0xc8ce77d46855593f3ec40ffe235d15a29443eede'

const childChain = new ChildChain(watcherUrl)
childChain.getUtxos(address).then(console.log)
