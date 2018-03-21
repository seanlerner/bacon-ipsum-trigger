before(async () => {
  await clear_clipboard()
  await ensure_clip_trigger_is_running()
  await wait_for_success('ct reload bacon-ipsum')
})

describe('main.js', () => {

  it('bc', async () => {
    await wait_for_success('bc')
  })

})
