import { FuzzedDataProvider } from "@jazzer.js/core";
import ExploreMe from "./ExploreMe";

test.fuzz("My fuzz test", (jazzerBuffer: Buffer) => {
	const provider: FuzzedDataProvider = new FuzzedDataProvider(jazzerBuffer);
	const a: number = provider.consumeNumber();
	const b: number = provider.consumeNumber();
	const c: string = provider.consumeString(8);

	const instance = new ExploreMe();
	instance.exploreMe(a, b, c);
});

test.fuzz("Crash_test", (jazzerBuffer: Buffer) => {
	throw new Error("Test Error");
});


describe("DependencyMocking", ( ) => {
	test.fuzz("Mock_test", (jazzerBuffer: Buffer) => {
		const provider: FuzzedDataProvider = new FuzzedDataProvider(jazzerBuffer);
		//jest.spyOn(SessionRepository.prototype, 'getSessionById').mockResolvedValueOnce(null);
		jest.spyOn(ExploreMe.prototype, 'dependencyToMock').mockReturnValue(provider.consumeString(provider.consumeIntegralInRange(0,100)));
		
		const instance = new ExploreMe();
		instance.callingDependency();
	});
}) 
