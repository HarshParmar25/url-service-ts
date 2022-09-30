import UtilsService from "../../utils/index";
import { IPropertyDetailsWithSuburb, IPropertyDetails } from "./listingUrl.interface";

export class PropertyDetails {
  private static baseUrl = `/`;
  static getPropertyDetailsFromUrl(pageUrl: string): IPropertyDetails | boolean {
    const [url, queryUrl] = pageUrl.split("?");
    const queryParams = UtilsService.decodeQueryParams(queryUrl);
    const data = url.split("/" || "/?");
    if (!data[0]) {
      data.shift();
    }
    const saleMethod = this.getSaleMethodForPropertyDetails(data[1]);
    const listingId = this.getlistingId(data[1]);
    const { address, state } = this.getLocationForPropertyDetails(data[0]);
    if (saleMethod && listingId) {
      const result = { saleMethod, listingId, address, state, queryParams };
      return UtilsService.removeEmptyValues<IPropertyDetails>(result);
    }

    return false;
  }

  static getUrlFromPropertyDetails(data: IPropertyDetailsWithSuburb): string {
    let queryParams = "";
    if (data.queryParams) {
      queryParams = UtilsService.generateQueryParams(data.queryParams);
    }
    const saleMethod = UtilsService.slugify(data.saleMethod);
    let propertyTypeUrl = `real-estate/`;
    if (saleMethod.toLowerCase() === "rent") {
      propertyTypeUrl = `rental-properties/`;
    }
    let slug = `${data.address}-${data.suburb}-${data.state}`;
    slug = UtilsService.slugify(slug);
    return `${this.baseUrl}${propertyTypeUrl}${slug}/property-details-${saleMethod}-residential-${data.listingId}/${queryParams}`;
  }

  private static getLocationForPropertyDetails(url: string): { address: string; state: string } {
    let address = url;
    const stateSlug = url.match(/(\w+)$/g);
    const state = stateSlug ? stateSlug[0] : "";
    address = UtilsService.slugToName(address);
    return { address, state };
  }

  private static getSaleMethodForPropertyDetails(url: string): string | void {
    if (url.includes("-buy-")) {
      return "Buy";
    }
    if (url.includes("-rent-")) {
      return "Rent";
    }
    if (url.includes("-sold-")) {
      return "Sold";
    }
  }

  private static getlistingId(url: string): number | void {
    let listingId: number;
    const listingIdslug = url.match(/(\d+)/g);
    if (listingIdslug) {
      listingId = parseInt(listingIdslug[0]);
      return listingId;
    }
  }
}
