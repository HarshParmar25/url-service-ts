import UtilsService from "../../utils/index";
import {
  IFilterWithState,
  IFilterWithRegion,
  IFilterWithCity,
  IFilterWithSuburb,
  IFiltersProperties,
  IFiltersSlugs,
  IDataFromUrl,
  ILocationProperties,
} from "./listingUrl.interface";
import { ESaleMethodSlug } from "./ListingUrl";

abstract class UrlFromListingSearchResultData {
  private baseUrl = `/`;

  data: IDataFromUrl;

  constructor(data: IDataFromUrl) {
    this.data = data;
  }

  getUrl = () => {
    const { saleMethod, priceFilter, bedroomFilter, propertyTypesFilter } = this.getFilterSlugs(this.data);
    const location = this.getLocationSlug(this.data);
    let filters = `${propertyTypesFilter}in-${location}${bedroomFilter}${priceFilter}`;
    filters = UtilsService.slugify(filters);

    return `${this.baseUrl}${saleMethod}/${filters}/`;
  };

  private getFilterSlugs(data: IFiltersProperties): IFiltersSlugs {
    const saleMethod = this.getSaleMethodSlug(data);
    const priceFilter = this.getPriceFilterSlug(data);
    const bedroomFilter = this.getBedroomSlug(data);
    const propertyTypesFilter = this.getPropertyTypesSlug(data);
    return {
      priceFilter,
      bedroomFilter,
      propertyTypesFilter,
      saleMethod,
    };
  }

  private getSaleMethodSlug(data: IFiltersProperties) {
    let { saleMethod } = data;
    saleMethod = UtilsService.slugify(saleMethod);
    let saleMethodSlug = "";

    switch (saleMethod) {
      case "sale":
        saleMethodSlug = ESaleMethodSlug.sale;
        break;
      case "rent":
        saleMethodSlug = ESaleMethodSlug.rent;
        break;
      case "sold":
        saleMethodSlug = ESaleMethodSlug.sold;
        break;
    }
    return saleMethodSlug;
  }

  private getPriceFilterSlug(data: IFiltersProperties): string {
    const { saleMethod, minPrice, maxPrice } = data;
    let priceFilter = "";
    if (minPrice && maxPrice) {
      priceFilter = `-between-${minPrice}-and-${maxPrice}`;
    } else if (minPrice && !maxPrice) {
      priceFilter = `-from-${minPrice}`;
    } else if (!minPrice && maxPrice) {
      priceFilter = `-up-to-${maxPrice}`;
    }

    if (saleMethod.toLowerCase() === "rent" && priceFilter) {
      return `${priceFilter}-per-week`;
    }
    return priceFilter;
  }

  private getBedroomSlug(data: IFiltersProperties): string {
    const { bedrooms } = data;
    if (!bedrooms) {
      return "";
    }
    if (bedrooms === 1) {
      return `-with-${bedrooms}-bedroom`;
    }
    if (bedrooms > 1) {
      return `-with-${bedrooms}-bedrooms`;
    }
    return "";
  }

  private getPropertyTypesSlug(data: IFiltersProperties): string {
    const { propertyTypes } = data;
    if (!propertyTypes || propertyTypes.length === 0) {
      return "";
    }
    const propertyTypesSlug = `${propertyTypes.reduce(
      (previousType, currentType) => `${previousType}-and-${currentType}`
    )}-`;
    return UtilsService.slugify(propertyTypesSlug);
  }

  abstract getLocationSlug(data: ILocationProperties): string;
}
export class UrlFromSearchResultDataWithSuburb extends UrlFromListingSearchResultData {
  getLocationSlug(data: IFilterWithSuburb) {
    const { suburb, state, postalCode } = data;
    return `${state}-${suburb}-${postalCode}`;
  }
}
export class UrlFromSearchResultDataWithCity extends UrlFromListingSearchResultData {
  getLocationSlug(data: IFilterWithCity) {
    const { city, state } = data;
    return `${state}-${city}`;
  }
}
export class UrlFromSearchResultDataWithRegion extends UrlFromListingSearchResultData {
  getLocationSlug(data: IFilterWithRegion) {
    const { region, state } = data;
    return `${state}-${region}`;
  }
}
export class UrlFromSearchResultDataWithState extends UrlFromListingSearchResultData {
  getLocationSlug(data: IFilterWithState) {
    const { state } = data;
    return `${state}`;
  }
}
export class UrlFromAnySearchResultData extends UrlFromListingSearchResultData {
  getLocationSlug(data: ILocationProperties) {
    const { state, city, region, suburb, postalCode } = data;
    if (suburb) {
      return `${state}-${suburb}-${postalCode}`;
    }
    if (city) {
      return `${state}-${city}`;
    }
    if (region) {
      return `${state}-${region}`;
    }
    return `${state}`;
  }
}
