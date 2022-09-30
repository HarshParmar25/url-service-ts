interface IState {
  state: string;
}
interface ICityProfileWithState extends ICity, IState {}

interface IRegionProfileWithState extends IRegion, IState {}

interface ISuburbProfileWithState extends ISuburb, IState {}

interface ILocationProfile extends Partial<ICity>, Partial<IRegion>, Partial<ISuburb> {
  state: string;
}

interface ICity {
  city: string;
  cityId: number;
}

interface IRegion {
  region: string;
  regionId: number;
}

interface ISuburb {
  suburb: string;
  postalCode: number;
}

export { IState, ICityProfileWithState, IRegionProfileWithState, ISuburbProfileWithState, ILocationProfile, ICity, IRegion, ISuburb };
