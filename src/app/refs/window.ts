export default class WindowRef {
  static get isExist() {
    return typeof window !== 'undefined' && 'localStorage' in window
  }

  static get origin() {
    return this.isExist && window.location.origin ? window.location.origin : ''
  }

  static get protocol() {
    return this.isExist && window.location.protocol
      ? window.location.protocol
      : ''
  }

  static get host() {
    return this.isExist && window.location.host ? window.location.host : ''
  }

  static get hostname() {
    return this.isExist && window.location.hostname
      ? window.location.hostname
      : ''
  }

  static get domainName() {
    if (!this.isExist || !this.hostname) {
      return ''
    }

    const split = this.hostname.match(/(.*)\.(.*)/)

    if (split === null) {
      let hostname = this.hostname.split('.')[0]
      return hostname[0].toUpperCase() + hostname.slice(1)
    }

    const name = split[1]

    return name[0].toUpperCase() + name.slice(1)
  }

  static get href() {
    return this.isExist && window.location.href ? window.location.href : ''
  }

  static get userAgent() {
    return this.isExist && window.navigator.userAgent
      ? window.navigator.userAgent
      : ''
  }

  static get navigator() {
    return this.isExist && window.navigator ? window.navigator : null
  }
}
