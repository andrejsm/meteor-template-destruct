destructTemplate = tpl => {
  let t = Template[tpl]
  return _.reduce(['onCreated', 'onRendered', 'onDestroyed', 'helpers', 'events'], (r, it) => (r[it] = t[it].bind(t), r), {})
}
