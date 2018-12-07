#!/usr/bin/env node

import rqt from 'rqt'

const req = async (page = 0) => {
  const res = await rqt(`https://www.nicolefarhi.com/collections/private-sale?view=all&page=${page}`)
  console.log(res)
  const r = JSON.parse(res)

  return r.items
}
(async () => {
  const items = await req()
  console.log(items)
})()