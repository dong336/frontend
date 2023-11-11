export default {
	install(app, options) {
		const person = {
			name: 'kdw',
			say() {
				alert(this.name);
			},
			...options,
		};
		app.config.globalProperties.$person = person; // setup 이전에만 접근 가능
		app.provide('person', person); // setup 이후 접근 가능
	},
};
