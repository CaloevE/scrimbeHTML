function distinct(a) {
	return a.filter(function (index, pro) {
		return a.indexOf(index) ===pro
	})
}

// return [... new Set(a)];