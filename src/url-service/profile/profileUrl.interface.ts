interface IQueryParams {
  queryParams?: Record<string, string>;
}
interface IState extends IQueryParams {
  state: string;
}
interface ICityProfileWithState extends ICity, IState {}

interface IRegionProfileWithState extends IRegion, IState {}

interface ISuburbProfileWithState extends ISuburb, IState {}

interface ILocationProfile extends Partial<ICity>, Partial<IRegion>, Partial<ISuburb> {
  state: string;
}

interface ICity extends IQueryParams {
  city: string;
  cityId: number;
}

interface IRegion extends IQueryParams {
  region: string;
  regionId: number;
}

interface ISuburb extends IQueryParams {
  suburb: string;
  postalCode: number;
}


export {
  IState,
  ICityProfileWithState,
  IRegionProfileWithState,
  ISuburbProfileWithState,
  ILocationProfile,
  ICity,
  IRegion,
  ISuburb,
};

