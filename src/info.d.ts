export interface Info {
	data: Data;
	education: Education;
	work: Work;
	skills: Array<Skill>;
}

interface Data {
	name: string;
	label: string;
	profiles: Profiles;
	location: Location;
	summary: string;
}

interface Location {
	city: string;
	province: string;
	country: string;
	countryCode: string;
}

interface Profiles {
	email: string;
	linkedin: string;
	github: string;
}

type DateStr = `${string}-${string}-${string}`;
type Skill =
	| "HTML"
	| "CSS"
	| "JavaScript"
	| "TypeScript"
	| "Vue"
	| "Node"
	| "Tailwind"
	| "MySQL"
	| "Git"
	| "GitHub"
	| "IBM";

interface Education {
	institution: string;
	area: string;
	studyLevel: string;
	startDate: string;
	endDate: string;
}

interface Work {
	name: string;
	position: string;
	url: string;
	startDate: DateStr;
	endDate: DateStr | null;
	summary: string;
}
