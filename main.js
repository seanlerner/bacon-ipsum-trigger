module.exports = class {

  constructor() {
    this.trigger = 'bc'
    this.name    = 'Bacon Ipsum'
    this.url     = 'https://baconipsum.com/api/?type=meat-and-filler&paras=1&format=text'
  }

  run(trigger_run) {
    this.trigger_run = trigger_run
    CT.vendor.request(this.url, this.get_bacon.bind(this))
  }

  get_bacon(err, body, res) {
    if (body && body.statusCode == 200)
      this.success(res)
    else if (err && err.code == 'ENOTFOUND')
      this.fail('Network Error')
    else
      this.fail(`Unknown Error: ${err.errno}`)
  }

  success(res) {
    CT.electron.clipboard.writeText(res)

    this.trigger_run.resolve({
      subtitle: 'Bacon Ready!',
      body:     res
    })
  }

  fail(body) {
    this.trigger_run.reject({
      subtitle: 'Bacon not available right now.',
      body
    })
  }

}
