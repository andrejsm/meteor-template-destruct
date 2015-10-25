Package.describe({
	name: 'ouk:template-destruct',
	version: '1.0.0',
	summary: 'Destructuring helper for Blaze templates',
	git: 'https://github.com/anrem/meteor-template-destruct.git',
})

Package.onUse(function(api) {
	api.versionsFrom('1.2.0.2')
	api.export('destructTemplate',['client'])
	api.use(['ecmascript', 'underscore'], ['client'])
	api.addFiles(['destruct.js'], ['client'])
})
