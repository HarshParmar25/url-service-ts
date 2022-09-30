interface IPartialFilterProperties {
  minPrice?: number;
  maxPrice?: number;
  propertyTypes?: string[];
  bedrooms?: number;
  saleMethod: string;
  queryParam?: Record<string, string> 
}

interface IFilterWithState extends IPartialFilterProperties {
  state: string;
}

interface IFilterWithCity extends IFilterWithState, IPartialFilterProperties {
  city: string;
}

interface IFilterWithRegion extends IFilterWithState, IPartialFilterProperties {
  region: string;
}

interface IFilterWithSuburb extends IFilterWithState, IPartialFilterProperties {
  suburb: string;
  postalCode: number;
}

interface IFiltersProperties extends IPartialFilterProperties {}

interface IFiltersSlugs {
  priceFilter: string;
  bedroomFilter: string;
  propertyTypesFilter: string;
  saleMethod: string;
}

interface IDataFromUrl extends ILocationProperties, IPartialFilterProperties {}

interface ILocationProperties {
  state: string;
  region?: string;
  city?: string;
  suburb?: string;
  postalCode?: number | string;
}

interface IPropertyDetails {
  saleMethod: string;
  listingId: number;
  address: string;
  state: string;
}

interface IPropertyDetailsWithSuburb extends IPropertyDetails {
  suburb: string;
}

export {
  IFilterWithState,
  IFilterWithRegion,
  IFilterWithCity,
  IFilterWithSuburb,
  IFiltersProperties,
  IFiltersSlugs,
  IDataFromUrl,
  ILocationProperties,
  IPropertyDetailsWithSuburb,
  IPropertyDetails,
};
