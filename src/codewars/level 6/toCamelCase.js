function toCamelCase(str){
	str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (world, index) {
		return index ===0 ? world.toLowerCase() : world.toUpperCase();
	}).replace(/\s+/g, '');
}