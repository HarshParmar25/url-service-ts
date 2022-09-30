import UtilsService from "../../utils/index";
import { UrlType } from "../urlType/urlType";
import { ICity, IRegion, ISuburb } from "./profileUrl.interface";

abstract class ProfileDataFromUrl<T> {
  constructor(public url: string) {
    this.url = url;
  }

  getData = () => {
    if (UrlType.isProfileLandingUrl(this.url)) {
      return false;
    }
    const state = ProfileDataFromUrl.getState(this.url);
    if (!state) {
      return false;
    }
    const location = this.getLocation(this.url);
    if (!location) {
      return false;
    }
    return { state, ...location };
  };

  private static getState(url: string): string | void {
    const state = url.match(/for-(.*?)\//);
    if (!state) {
      return;
    }
    return state[1];
  }

  abstract getLocation(url: string): T | void;
}
export class DataFromProfileUrlWithState extends ProfileDataFromUrl<{}> {
  getLocation = (url: string): {} | void => {
    if (!UrlType.isStateProfile(url)) {
      return;
    }
    return {};
  };
}
export class DataFromProfileUrlWithCity extends ProfileDataFromUrl<ICity> {
  getLocation = (url: string): ICity | void => {
    if (!UrlType.isCityProfile(url)) {
      return;
    }
    const citySlug = url.match(/for-(.*?)\/(.*)-city-(\d+)\/$/);
    if (!citySlug) {
      return;
    }
    let city = citySlug[2];
    city = UtilsService.slugToName(city);
    const cityId = parseInt(citySlug[3]);
    return { city, cityId };
  };
}
export class DataFromProfileUrlWithRegion extends ProfileDataFromUrl<IRegion> {
  getLocation = (url: string): IRegion | void => {
    if (!UrlType.isRegionProfile(url)) {
      return;
    }
    const regionSlug = url.match(/for-(.*?)\/(.*)-region-(\d+)\/$/);
    if (!regionSlug) {
      return;
    }
    let region = regionSlug[2];
    region = UtilsService.slugToName(region);
    const regionId = parseInt(regionSlug[3]);
    return { region, regionId };
  };
}
export class DataFromProfileUrlWithSuburb extends ProfileDataFromUrl<ISuburb> {
  getLocation = (url: string): ISuburb | void => {
    if (!UrlType.isSuburbProfile(url)) {
      return;
    }
    const suburbSlug = url.match(/for-(.*?)\/(.*)-(\d+)\/$/);
    if (!suburbSlug) {
      return;
    }
    let suburb = suburbSlug[2];
    suburb = UtilsService.slugToName(suburb);
    const postalCode = parseInt(suburbSlug[3]);
    return { suburb, postalCode };
  };
}
export class DataFromAnyProfileUrl {
  static getProfileDataFromUrl(url: string) {
    if (UrlType.isProfileLandingUrl(url)) {
      return false;
    }
    if (UrlType.isStateProfile(url)) {
      return new DataFromProfileUrlWithState(url).getData();
    }
    if (UrlType.isCityProfile(url)) {
      return new DataFromProfileUrlWithCity(url).getData();
    }
    if (UrlType.isRegionProfile(url)) {
      return new DataFromProfileUrlWithRegion(url).getData();
    }
    return new DataFromProfileUrlWithSuburb(url).getData();
  }
}
