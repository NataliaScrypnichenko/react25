export interface IUser {
	id: number;
	name: string;
	username: string;
	email: string;
	address: RootObjectAddress;
	phone: string;
	website: string;
	company: RootObjectCompany;
}
 interface RootObjectAddressGeo {
	lat: string;
	lng: string;
}
interface RootObjectAddress {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: RootObjectAddressGeo;
}
 interface RootObjectCompany {
	name: string;
	catchPhrase: string;
	bs: string;
}