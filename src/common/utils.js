class Util {
	static sortReindeer(reindeerNames) {
		var arr = new Array();
		var temp = 0;
		for (var i = 0; i < reindeerNames.length; i++) {
			arr[i] = reindeerNames[i][0];
		}
		for (i = 0; i < arr.length; i++) {
			var k = i;
			for (var j = i + 1; j < arr.length; j++) {
				if (arr[j] < arr[k]) {
					k = j;
				};
			}
			if (k != i) {
				temp = reindeerNames[i];
				reindeerNames[i] = reindeerNames[k];
				reindeerNames[k] = temp;
				temp = arr[i];
				arr[i] = arr[k];
				arr[k] = temp;
			}
		}
		return (reindeerNames);
	}
}
export default Util
