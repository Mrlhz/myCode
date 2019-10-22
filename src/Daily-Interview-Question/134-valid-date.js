/**
 * `No. 134`
 * `求两个日期中间的有效日期`
 * 如 `2015-2-8` 到 `2015-3-3`，返回[2015-2-8 2015-2-9...]
 */
function findDate(args) {
  const [t1, t2] = args.map((item) => new Date(item.replace(/-/g, '/')).getTime())
  const res = []
  const t = 24 * 60 * 60 * 1000
  for (let i = t1; i <= t2; i += 86400000) {
    const date = new Date(i)
    // res.push(new Date(i).toLocaleDateString().replace(/\//g, '-'))
    res.push(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`)
  }
  console.log(res)
  return res
}

const format = (n) => n.toString()[1] ? n : '0' + n.toString()[0]


findDate(['2015-2-8', '2015-3-3'])


