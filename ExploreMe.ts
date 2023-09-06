export default class ExploreMe {
	public exploreMe(a: number, b: number, c: string): void {
		if (a >= 20000) {
			if (b >= 2000000) {
				if (b - a < 100000) {
					if (c.startsWith("@")) {
						throw new Error("Crash!");
					}
				}
			}
		}
	}
	
	
	public dependencyToMock(): string {
		return "";
	}
	
	public callingDependency() {
		const res = this.dependencyToMock();
		console.log("Res: " +res)
		if (res == "Hallo") {
			throw new Error("Crash!");
		}
	}
}

