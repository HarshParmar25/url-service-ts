import {
  DataFromAnyProfileUrl,
  DataFromProfileUrlWithState,
  DataFromProfileUrlWithCity,
  DataFromProfileUrlWithRegion,
  DataFromProfileUrlWithSuburb,
} from "./DataFromUrl";
import {
  IState,
  ICityProfileWithState,
  IRegionProfileWithState,
  ISuburbProfileWithState,
  ILocationProfile,
} from "./profileUrl.interface";
import {
  UrlFromProfileDataWithState,
  UrlFromProfileDataWithCity,
  UrlFromProfileDataWithRegion,
  UrlFromProfileDataWithSuburb,
  UrlFromProfileData,
} from "./UrlFromData";

export default class LocationProfile {
  static getUrlFromProfileDataWithState(data: IState): string {
    return new UrlFromProfileDataWithState(data).getUrl();
  }

  static getUrlFromProfileDataWithCity(data: ICityProfileWithState): string {
    return new UrlFromProfileDataWithCity(data).getUrl();
  }

  static getUrlFromProfileDataWithRegion(data: IRegionProfileWithState): string {
    return new UrlFromProfileDataWithRegion(data).getUrl();
  }

  static getUrlFromProfileDataWithSuburb(data: ISuburbProfileWithState): string {
    return new UrlFromProfileDataWithSuburb(data).getUrl();
  }

  static getUrlFromProfileData(data: ILocationProfile): string {
    return new UrlFromProfileData(data).getUrl();
  }

  static getProfileDataFromUrl(url: string): ILocationProfile | boolean {
    return DataFromAnyProfileUrl.getProfileDataFromUrl(url);
  }

  static getProfileDataFromUrlWithState(url: string): IState | boolean {
    return new DataFromProfileUrlWithState(url).getData();
  }

  static getProfileDataFromUrlWithCity(url: string): ICityProfileWithState | boolean {
    return new DataFromProfileUrlWithCity(url).getData();
  }

  static getProfileDataFromUrlWithRegion(url: string): IRegionProfileWithState | boolean {
    return new DataFromProfileUrlWithRegion(url).getData();
  }

  static getProfileDataFromUrlWithSuburb(url: string): ISuburbProfileWithState | boolean {
    return new DataFromProfileUrlWithSuburb(url).getData();
  }
}
