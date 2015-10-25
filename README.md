# Destruct Blaze templates

Easily destruct Blaze template functions


## Installation
```
meteor add ouk:template-destruct
```

This package adds new function `destructTemplate` to global scope.
The function takes one argument and returns object with bound template functions.

Template functions ready for destructuring:
```js
onCreated
onRendered
onDestroyed
helpers
events
```

### Usage example
**templates/news/section.html**
```html
<template name="newSection">
  <h1 class="js-click-on-title">{{title}}</h1>
</template>
```

**templates/news/section.js**
```js
let { onCreated, helpers, events } = destructTemplate('newsSection')

onCreated(function() {
  this.title = 'News'
})

helpers({
  title() {
    return `${Template.instance().title} section`
  }
})

events({
  'click .js-click-on-title'(e, t) {
    e.target.classList.toggle('is-active')
  }
})
```

This package gives you an alternative approach to this:
```js
Template.newsSection.onCreated(...)
Template.newsSection.helpers(...)

// or

let template = Template.newsSection

template.onCreated(...)
template.helpers(...)
```
