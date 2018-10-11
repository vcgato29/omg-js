const { Socket } = require('phoenix-channels')

class ChannelSocket {
  constructor (url) {
    this.socket = new Socket(url)
  }

  connect () {
    this.socket.connect()
  }

  subscribe (topic) {
    const channel = this.socket.channel(topic)
    channel.join()
      .receive('ok', resp => console.log(`Succesfully subscribed to ${topic}`))
      .receive('error', err => console.error(`Error subscribing to topic ${topic}: ${err}`))
    return channel
  }
}

module.exports = ChannelSocket
