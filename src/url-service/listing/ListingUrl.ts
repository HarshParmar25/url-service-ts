import {
  DataFromSearchResultUrlWithState,
  DataFromSearchResultUrlWithRegion,
  DataFromSearchResultUrlWithCity,
  DataFromSearchResultUrlWithSuburb,
  DataFromAnySearchResultUrl,
} from "./DataFromUrl";
import {
  IFilterWithState,
  IFilterWithRegion,
  IFilterWithCity,
  IFilterWithSuburb,
  IDataFromUrl,
  ILocationProperties,
  IPropertyDetailsWithSuburb,
  IPropertyDetails,
} from "./listingUrl.interface";
import { PropertyDetails } from "./PropertyDetails";
import {
  UrlFromSearchResultDataWithState,
  UrlFromSearchResultDataWithRegion,
  UrlFromSearchResultDataWithCity,
  UrlFromSearchResultDataWithSuburb,
  UrlFromAnySearchResultData,
} from "./UrlFromData";



export enum ESaleMethodSlug {
  sale = "for-sale",
  rent = "for-rent",
  sold = "sold-properties",
}

export default class Listing {
  static getDataFromSearchResultUrlWithState(url: string): IFilterWithState {
    return new DataFromSearchResultUrlWithState(url).getData();
  }

  static getDataFromSearchResultUrlWithRegion(url: string): IFilterWithRegion {
    return new DataFromSearchResultUrlWithRegion(url).getData();
  }

  static getDataFromSearchResultUrlWithCity(url: string): IFilterWithCity {
    return new DataFromSearchResultUrlWithCity(url).getData();
  }

  static getDataFromSearchResultUrlWithSuburb(url: string): IFilterWithSuburb {
    return new DataFromSearchResultUrlWithSuburb(url).getData();
  }

  static getDataFromAnySearchResultUrl(url: string): ILocationProperties {
    return new DataFromAnySearchResultUrl(url).getData();
  }

  static getUrlFromSearchResultDataWithState(data: IFilterWithState): string {
    return new UrlFromSearchResultDataWithState(data).getUrl();
  }

  static getUrlFromSearchResultDataWithRegion(data: IFilterWithRegion): string {
    return new UrlFromSearchResultDataWithRegion(data).getUrl();
  }

  static getUrlFromSearchResultDataWithCity(data: IFilterWithCity): string {
    return new UrlFromSearchResultDataWithCity(data).getUrl();
  }

  static getUrlFromSearchResultDataWithSuburb(data: IFilterWithSuburb): string {
    return new UrlFromSearchResultDataWithSuburb(data).getUrl();
  }

  static getUrlFromAnySearchResultData(data: IDataFromUrl): string {
    return new UrlFromAnySearchResultData(data).getUrl();
  }

  static getPropertyDetailsFromUrl(url: string): IPropertyDetails | boolean {
    return PropertyDetails.getPropertyDetailsFromUrl(url);
  }

  static getUrlFromPropertyDetails(data: IPropertyDetailsWithSuburb): string {
    return PropertyDetails.getUrlFromPropertyDetails(data);
  }
}
