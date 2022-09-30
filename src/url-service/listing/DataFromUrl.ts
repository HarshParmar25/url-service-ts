import UtilsService from "../../utils/index";
import {
  IFilterWithState,
  IFilterWithRegion,
  IFilterWithCity,
  IFilterWithSuburb,
  IDataFromUrl,
  ILocationProperties,
} from "./listingUrl.interface";
import { ESaleMethodSlug } from "./ListingUrl";

abstract class DataFromListingSearchResultURL<T> {
  constructor(public url: string) {
    this.url = url;
  }

  getData = () => {
    const [url, queryUrl] = this.url.split("?");
    const queryParams = UtilsService.decodeQueryParams(queryUrl)
    const data = this.removeFirstSlashAndSplitOnSlash(url);
    const filters = this.getSalePropertyBedroomAndPriceHelper(data);

    const locationData = this.getLocation(data[1]);

    const result = {
      ...filters,
      ...locationData,
      queryParams,
    };

    return UtilsService.removeEmptyValues<T>(result);
  };

  private cities = ["Melbourne", "Hobart", "Darwin", "Adelaide", "Perth", "Brisbane", "Canberra"];

  private getSaleMethod(url: string): string {
    let saleMethod = "";
    if (url === ESaleMethodSlug.sale) {
      saleMethod = "sale";
    }
    if (url === ESaleMethodSlug.rent) {
      saleMethod = "rent";
    }
    if (url === ESaleMethodSlug.sold) {
      saleMethod = "sold";
    }
    return UtilsService.slugToName(saleMethod);
  }

  protected getLocationData(url: string): ILocationProperties {
    const state = this.getStateData(url);
    let region = this.getRegionData(url);
    let city = this.getCityData(url);
    const { suburb, postalCode } = this.getSuburbData(url);
    if (postalCode) {
      city = "";
      region = "";
    }
    return {
      state,
      region,
      city,
      suburb,
      postalCode,
    };
  }

  private getPropertyTypes(url: string): string[] {
    const propertyTypes: string[] = [];
    if (url.indexOf("in-") === 0) {
      return propertyTypes;
    }

    const propertyTypesSlug = url.match(/.+?(?=-in-)/);
    if (propertyTypesSlug) {
      propertyTypesSlug[0].split("-and-").forEach((propertyType) => {
        propertyTypes.push(UtilsService.slugToName(propertyType));
      });
    }
    return propertyTypes;
  }

  private getMinPrice(url: string) {
    const price = url.match(/-from-(.*)/);
    if (price) {
      const minPrice = price[1].split("-").slice(0, 1).join("");
      return parseInt(minPrice);
    }
    return "";
  }

  private getMaxPrice(url: string) {
    const price = url.match(/-up-to-(.*)/);
    if (price) {
      const maxPrice = price[1].split("-").slice(0, 1).join("");
      return parseInt(maxPrice);
    }
    return "";
  }

  private getPriceFilter(url: string) {
    const maxPrice = this.getMaxPrice(url);
    const minPrice = this.getMinPrice(url);
    if (maxPrice === "" && minPrice === "") {
      const price = url.match(/-between-(.*)/);
      if (price) {
        return {
          minPrice: parseInt(price[1].split("-and-")[0]),
          maxPrice: parseInt(price[1].split("-and-")[1]),
        };
      }
      return { minPrice: "", maxPrice: "" };
    }
    return { minPrice, maxPrice };
  }

  private getBedrooms(url: string) {
    const bedroom = url.match(/-with-(.+?)-/);
    if (bedroom) {
      return parseInt(bedroom[1]);
    }
    return "";
  }

  private getSalePropertyBedroomAndPriceHelper(data: string[]) {
    const saleMethod = this.getSaleMethod(data[0]);
    const propertyTypes = this.getPropertyTypes(data[1]);
    const bedrooms = this.getBedrooms(data[1]);
    const { minPrice, maxPrice } = this.getPriceFilter(data[1]);
    return { saleMethod, propertyTypes, bedrooms, minPrice, maxPrice };
  }

  private removeFirstSlashAndSplitOnSlash(url: string) {
    const data = url.split("/" || "/?");
    if (!data[0]) {
      data.shift();
    }
    return data;
  }

  protected getStateData(url: string): string {
    const stateSlug = url.match(/in-(\w+)/);
    if (stateSlug) {
      return stateSlug[1];
    }
    return "";
  }

  protected getSuburbData(url: string) {
    const trimUrl = this.getRawLocationData(url);
    const postalCode = parseInt(trimUrl[trimUrl.length - 1]);

    if (!postalCode) {
      return { suburb: "", postalCode: "" };
    }

    let suburb = trimUrl.slice(0, trimUrl.length - 1).join("-");

    suburb = UtilsService.slugToName(suburb);

    return { suburb, postalCode };
  }

  protected getRegionData(url: string) {
    const trimUrl = this.getRawLocationData(url);
    const region = trimUrl.join(" ");
    if (!this.cities.find((c) => c.toLowerCase() === region.toLowerCase())) {
      return UtilsService.slugToName(region);
    }
    return "";
  }

  protected getCityData(url: string) {
    const trimUrl = this.getRawLocationData(url);
    const city = trimUrl.join(" ");
    if (this.cities.find((c) => c.toLowerCase() === city.toLowerCase())) {
      return UtilsService.slugToName(city);
    }
    return "";
  }

  private getRawLocationData(url: string) {
    return url
      .split(/in-|-with-|-from-|-up-to-|-between-/)[1]
      .split("-")
      .splice(1);
  }

  abstract getLocation(url: string): {
    state?: string;
    city?: string;
    region?: string;
    suburb?: string;
    postalCode?: number | string;
  };
}
export class DataFromSearchResultUrlWithState extends DataFromListingSearchResultURL<IFilterWithState> {
  getLocation(url: string) {
    const state = this.getStateData(url);
    return { state };
  }
}
export class DataFromSearchResultUrlWithSuburb extends DataFromListingSearchResultURL<IFilterWithSuburb> {
  getLocation(url: string) {
    const state = this.getStateData(url);
    const { suburb, postalCode } = this.getSuburbData(url);
    return { state, suburb, postalCode };
  }
}
export class DataFromSearchResultUrlWithCity extends DataFromListingSearchResultURL<IFilterWithCity> {
  getLocation(url: string) {
    const state = this.getStateData(url);
    const city = this.getCityData(url);
    return { state, city };
  }
}
export class DataFromSearchResultUrlWithRegion extends DataFromListingSearchResultURL<IFilterWithRegion> {
  getLocation(url: string) {
    const state = this.getStateData(url);
    const region = this.getRegionData(url);
    return { state, region };
  }
}
export class DataFromAnySearchResultUrl extends DataFromListingSearchResultURL<IDataFromUrl> {
  getLocation(url: string) {
    const data = this.getLocationData(url);
    return data;
  }
}
