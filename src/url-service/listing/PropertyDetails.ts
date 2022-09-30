import UtilsService from "../../utils/index";
import { IPropertyDetailsWithSuburb, IPropertyDetails } from "./listingUrl.interface";

export class PropertyDetails {
  private static baseUrl = `/`;
  static getPropertyDetailsFromUrl(url: string): IPropertyDetails | boolean {
    const data = url.split("/" || "/?");
    if (!data[0]) {
      data.shift();
    }
    const saleMethod = this.getSaleMethodForPropertyDetails(data[1]);
    const listingId = this.getlistingId(data[1]);
    const { address, state } = this.getLocationForPropertyDetails(data[0]);
    if (saleMethod && listingId) {
      return { saleMethod, listingId, address, state };
    }

    return false;
  }

  static getUrlFromPropertyDetails(data: IPropertyDetailsWithSuburb): string {
    const saleMethod = UtilsService.slugify(data.saleMethod);
    let propertyTypeUrl = `real-estate/`;
    if (saleMethod.toLowerCase() === "rent") {
      propertyTypeUrl = `rental-properties/`;
    }
    let slug = `${data.address}-${data.suburb}-${data.state}`;
    slug = UtilsService.slugify(slug);
    return `${this.baseUrl}${propertyTypeUrl}${slug}/property-details-${saleMethod}-residential-${data.listingId}/`;
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
