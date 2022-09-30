import UtilsService from "../../utils/index";
import {
  ICityProfileWithState,
  IRegionProfileWithState,
  ISuburbProfileWithState,
  ILocationProfile,
} from "./profileUrl.interface";

abstract class ProfileUrlFromData {
  constructor(public data: ILocationProfile) {
    this.data = data;
  }

  private static baseUrl = "/profile/";

  getUrl = (): string => {
    let state = `for-${this.data.state}`;
    state = UtilsService.slugify(state);
    let location = this.getLocation(this.data);
    return `${ProfileUrlFromData.baseUrl}${state}/${location}`;
  };

  abstract getLocation(data: ILocationProfile): string;
}
export class UrlFromProfileDataWithState extends ProfileUrlFromData {
  getLocation = (): string => {
    return "";
  };
}
export class UrlFromProfileDataWithCity extends ProfileUrlFromData {
  getLocation = (data: ICityProfileWithState): string => {
    const city = UtilsService.slugify(data.city);
    return `${city}-city-${data.cityId}/`;
  };
}
export class UrlFromProfileDataWithRegion extends ProfileUrlFromData {
  getLocation = (data: IRegionProfileWithState): string => {
    const region = UtilsService.slugify(data.region);
    return `${region}-region-${data.regionId}/`;
  };
}
export class UrlFromProfileDataWithSuburb extends ProfileUrlFromData {
  getLocation = (data: ISuburbProfileWithState): string => {
    const suburb = UtilsService.slugify(data.suburb);
    return `${suburb}-${data.postalCode}/`;
  };
}
export class UrlFromProfileData extends ProfileUrlFromData {
  getLocation = (data: ILocationProfile): string => {
    if (data.city && data.cityId) {
      return new UrlFromProfileDataWithCity(data).getLocation(data as ICityProfileWithState);
    } else if (data.region && data.regionId) {
      return new UrlFromProfileDataWithRegion(data).getLocation(data as IRegionProfileWithState);
    } else if (data.suburb && data.postalCode) {
      return new UrlFromProfileDataWithSuburb(data).getLocation(data as ISuburbProfileWithState);
    } else {
      return new UrlFromProfileDataWithState(data).getLocation();
    }
  };
}
