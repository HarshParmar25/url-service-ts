import Listing from "./ListingUrl";

describe("Get Buy-rent-sold page Data from url", () => {
  test("for-sale/in-vic/?name=Harsh", () => {
    const data = Listing.getDataFromSearchResultUrlWithState(`for-sale/in-vic/?name=Harsh`);
    const result = {
      saleMethod: "Sale",
      state: "vic",
      queryParams: {
        name: "Harsh",
      },
    };

    expect(data).toEqual(result);
  });

  test("for-sale/studios-and-townhouses-and-villas-in-vic-richmond-3121-with-1-bedroom-from-50000/", () => {
    const data = Listing.getDataFromSearchResultUrlWithSuburb(
      `for-sale/studios-and-townhouses-and-villas-in-vic-richmond-3121-with-1-bedroom-from-50000/?name=Harsh&age=20`
    );
    const result = {
      saleMethod: "Sale",
      state: "vic",
      suburb: "Richmond",
      postalCode: 3121,
      minPrice: 50000,
      propertyTypes: ["Studios", "Townhouses", "Villas"],
      bedrooms: 1,
      queryParams: {
        name: "Harsh",
        age:'20',
      },
    };

    expect(data).toEqual(result);
  });

  test("for-sale/studios-and-townhouses-and-villas-in-vic-richmond-3121-with-1-bedroom-up-to-75000/", () => {
    const data = Listing.getDataFromSearchResultUrlWithSuburb(
      `for-sale/studios-and-townhouses-and-villas-in-vic-richmond-3121-with-1-bedroom-up-to-75000/`
    );
    const result = {
      saleMethod: "Sale",
      state: "vic",
      suburb: "Richmond",
      postalCode: 3121,
      maxPrice: 75000,
      propertyTypes: ["Studios", "Townhouses", "Villas"],
      bedrooms: 1,
    };

    expect(data).toEqual(result);
  });

  test("for-sale/studios-and-townhouses-and-villas-in-vic-melbourne-with-1-bedroom-up-to-75000/", () => {
    const data = Listing.getDataFromSearchResultUrlWithCity(
      `for-sale/studios-and-townhouses-and-villas-in-vic-melbourne-with-1-bedroom-up-to-75000/`
    );
    const result = {
      saleMethod: "Sale",
      state: "vic",
      city: "Melbourne",
      maxPrice: 75000,
      propertyTypes: ["Studios", "Townhouses", "Villas"],
      bedrooms: 1,
    };

    expect(data).toEqual(result);
  });

  test("for-sale/studios-and-townhouses-and-villas-in-vic-inner-west-with-1-bedroom-up-to-75000/", () => {
    const data = Listing.getDataFromSearchResultUrlWithRegion(
      `for-sale/studios-and-townhouses-and-villas-in-vic-inner-west-with-1-bedroom-up-to-75000/`
    );
    const result = {
      saleMethod: "Sale",
      state: "vic",
      region: "Inner West",
      maxPrice: 75000,
      propertyTypes: ["Studios", "Townhouses", "Villas"],
      bedrooms: 1,
    };

    expect(data).toEqual(result);
  });

  test("for-rent/in-wa-city-beach-6015-from-150-per-week/", () => {
    const data = Listing.getDataFromSearchResultUrlWithSuburb(`for-rent/in-wa-city-beach-6015-from-150-per-week/`);
    const result = {
      saleMethod: "Rent",
      state: "wa",
      suburb: "City Beach",
      postalCode: 6015,
      minPrice: 150,
    };

    expect(data).toEqual(result);
  });

  test("for-rent/studios-and-townhouses-and-villas-in-vic-richmond-3121-with-1-bedroom-between-5000-and-100000-per-week/", () => {
    const data = Listing.getDataFromSearchResultUrlWithSuburb(
      `for-rent/studios-and-townhouses-and-villas-in-vic-richmond-3121-with-1-bedroom-between-5000-and-100000-per-week/`
    );
    const result = {
      saleMethod: "Rent",
      state: "vic",
      suburb: "Richmond",
      postalCode: 3121,
      minPrice: 5000,
      maxPrice: 100000,
      propertyTypes: ["Studios", "Townhouses", "Villas"],
      bedrooms: 1,
    };

    expect(data).toEqual(result);
  });

  test("for-rent/in-nsw-attunga/", () => {
    const data = Listing.getDataFromSearchResultUrlWithRegion(`for-rent/in-nsw-attunga/`);
    const result = {
      saleMethod: "Rent",
      state: "nsw",
      region: "Attunga",
    };

    expect(data).toEqual(result);
  });

  test("sold-properties/houses-and-units-and-apartments-and-studios-and-townhouses-and-land-and-villas-and-rural-in-vic-melbourne-with-3-bedrooms-between-50000-and-75000/", () => {
    const data = Listing.getDataFromSearchResultUrlWithCity(
      `/sold-properties/houses-and-units-and-apartments-and-studios-and-townhouses-and-land-and-villas-and-rural-in-vic-melbourne-with-3-bedrooms-between-50000-and-75000/`
    );
    const result = {
      saleMethod: "Sold",
      state: "vic",
      city: "Melbourne",
      minPrice: 50000,
      maxPrice: 75000,
      propertyTypes: ["Houses", "Units", "Apartments", "Studios", "Townhouses", "Land", "Villas", "Rural"],
      bedrooms: 3,
    };

    expect(data).toEqual(result);
  });
});

////////////////////////////////////////////////////////////
describe("Get Buy-rent-sold page Data from any listing url", () => {
  test("for-sale/in-vic/", () => {
    const data = Listing.getDataFromAnySearchResultUrl(`for-sale/in-vic/`);
    const result = {
      saleMethod: "Sale",
      state: "vic",
    };

    expect(data).toEqual(result);
  });

  test("for-sale/studios-and-townhouses-and-villas-in-vic-richmond-3121-with-1-bedroom-from-50000/", () => {
    const data = Listing.getDataFromAnySearchResultUrl(
      `for-sale/studios-and-townhouses-and-villas-in-vic-richmond-3121-with-1-bedroom-from-50000/`
    );
    const result = {
      saleMethod: "Sale",
      state: "vic",
      suburb: "Richmond",
      postalCode: 3121,
      minPrice: 50000,
      propertyTypes: ["Studios", "Townhouses", "Villas"],
      bedrooms: 1,
    };

    expect(data).toEqual(result);
  });

  test("for-sale/studios-and-townhouses-and-villas-in-vic-richmond-3121-with-1-bedroom-up-to-75000/", () => {
    const data = Listing.getDataFromAnySearchResultUrl(
      `for-sale/studios-and-townhouses-and-villas-in-vic-richmond-3121-with-1-bedroom-up-to-75000/`
    );
    const result = {
      saleMethod: "Sale",
      state: "vic",
      suburb: "Richmond",
      postalCode: 3121,
      maxPrice: 75000,
      propertyTypes: ["Studios", "Townhouses", "Villas"],
      bedrooms: 1,
    };

    expect(data).toEqual(result);
  });

  test("for-sale/studios-and-townhouses-and-villas-in-vic-melbourne-with-1-bedroom-up-to-75000/", () => {
    const data = Listing.getDataFromAnySearchResultUrl(
      `for-sale/studios-and-townhouses-and-villas-in-vic-melbourne-with-1-bedroom-up-to-75000/`
    );
    const result = {
      saleMethod: "Sale",
      state: "vic",
      city: "Melbourne",
      maxPrice: 75000,
      propertyTypes: ["Studios", "Townhouses", "Villas"],
      bedrooms: 1,
    };

    expect(data).toEqual(result);
  });

  test("for-sale/studios-and-townhouses-and-villas-in-vic-inner-west-with-1-bedroom-up-to-75000/", () => {
    const data = Listing.getDataFromAnySearchResultUrl(
      `for-sale/studios-and-townhouses-and-villas-in-vic-inner-west-with-1-bedroom-up-to-75000/`
    );
    const result = {
      saleMethod: "Sale",
      state: "vic",
      region: "Inner West",
      maxPrice: 75000,
      propertyTypes: ["Studios", "Townhouses", "Villas"],
      bedrooms: 1,
    };

    expect(data).toEqual(result);
  });

  test("for-rent/in-wa-city-beach-6015-from-150-per-week/", () => {
    const data = Listing.getDataFromAnySearchResultUrl(`for-rent/in-wa-city-beach-6015-from-150-per-week/`);
    const result = {
      saleMethod: "Rent",
      state: "wa",
      suburb: "City Beach",
      postalCode: 6015,
      minPrice: 150,
    };

    expect(data).toEqual(result);
  });

  test("for-rent/studios-and-townhouses-and-villas-in-vic-richmond-3121-with-1-bedroom-between-5000-and-100000-per-week/", () => {
    const data = Listing.getDataFromAnySearchResultUrl(
      `for-rent/studios-and-townhouses-and-villas-in-vic-richmond-3121-with-1-bedroom-between-5000-and-100000-per-week/`
    );
    const result = {
      saleMethod: "Rent",
      state: "vic",
      suburb: "Richmond",
      postalCode: 3121,
      minPrice: 5000,
      maxPrice: 100000,
      propertyTypes: ["Studios", "Townhouses", "Villas"],
      bedrooms: 1,
    };

    expect(data).toEqual(result);
  });

  test("for-rent/in-nsw-attunga/", () => {
    const data = Listing.getDataFromAnySearchResultUrl(`for-rent/in-nsw-attunga/`);
    const result = {
      saleMethod: "Rent",
      state: "nsw",
      region: "Attunga",
    };

    expect(data).toEqual(result);
  });

  test("sold-properties/houses-and-units-and-apartments-and-studios-and-townhouses-and-land-and-villas-and-rural-in-vic-melbourne-with-3-bedrooms-between-50000-and-75000/", () => {
    const data = Listing.getDataFromAnySearchResultUrl(
      `/sold-properties/houses-and-units-and-apartments-and-studios-and-townhouses-and-land-and-villas-and-rural-in-vic-melbourne-with-3-bedrooms-between-50000-and-75000/`
    );
    const result = {
      saleMethod: "Sold",
      state: "vic",
      city: "Melbourne",
      minPrice: 50000,
      maxPrice: 75000,
      propertyTypes: ["Houses", "Units", "Apartments", "Studios", "Townhouses", "Land", "Villas", "Rural"],
      bedrooms: 3,
    };

    expect(data).toEqual(result);
  });
});

//////////////////////////////////////////////////////////////////////////////
describe("Get Buy-rent-sold page Url From any listing data", () => {
  test("Get sale state url", () => {
    const data = Listing.getUrlFromAnySearchResultData({ saleMethod: "Sale", state: "vic" });
    const result = `/for-sale/in-vic/`;

    expect(data).toEqual(result);
  });

  test("Get sale city url", () => {
    const data = Listing.getUrlFromAnySearchResultData({ saleMethod: "Sale", state: "VIC", city: "Mel/born" });
    const result = `/for-sale/in-vic-mel-born/`;

    expect(data).toEqual(result);
  });

  test("Get sale region url", () => {
    const data = Listing.getUrlFromAnySearchResultData({ saleMethod: "Sale", state: "vic", region: "melborn" });
    const result = `/for-sale/in-vic-melborn/`;

    expect(data).toEqual(result);
  });

  test("Get sale suburb url", () => {
    const data = Listing.getUrlFromAnySearchResultData({
      saleMethod: "Sale",
      state: "vic",
      suburb: "richmond",
      postalCode: 1234,
    });
    const result = `/for-sale/in-vic-richmond-1234/`;

    expect(data).toEqual(result);
  });

  test("Get rent state url", () => {
    const data = Listing.getUrlFromAnySearchResultData({ saleMethod: "rent", state: "vic" });
    const result = `/for-rent/in-vic/`;

    expect(data).toEqual(result);
  });

  test("Get rent city url", () => {
    const data = Listing.getUrlFromAnySearchResultData({ saleMethod: "rent", state: "vic", city: "melborn" });
    const result = `/for-rent/in-vic-melborn/`;

    expect(data).toEqual(result);
  });

  test("Get rent region url", () => {
    const data = Listing.getUrlFromAnySearchResultData({ saleMethod: "rent", state: "vic", region: "melborn" });
    const result = `/for-rent/in-vic-melborn/`;

    expect(data).toEqual(result);
  });

  test("Get rent suburb url", () => {
    const data = Listing.getUrlFromAnySearchResultData({
      saleMethod: "rent",
      state: "vic",
      suburb: "richmond",
      postalCode: 1234,
    });
    const result = `/for-rent/in-vic-richmond-1234/`;

    expect(data).toEqual(result);
  });

  test("Get sold state url", () => {
    const data = Listing.getUrlFromAnySearchResultData({ saleMethod: "sold", state: "vic" });
    const result = `/sold-properties/in-vic/`;

    expect(data).toEqual(result);
  });

  test("Get sold city url", () => {
    const data = Listing.getUrlFromAnySearchResultData({ saleMethod: "sold", state: "vic", city: "melborn" });
    const result = `/sold-properties/in-vic-melborn/`;

    expect(data).toEqual(result);
  });

  test("Get sold region url", () => {
    const data = Listing.getUrlFromAnySearchResultData({ saleMethod: "sold", state: "vic", region: "melborn" });
    const result = `/sold-properties/in-vic-melborn/`;

    expect(data).toEqual(result);
  });

  test("Get sale filtered suburb url", () => {
    const data = Listing.getUrlFromAnySearchResultData({
      saleMethod: "sold",
      state: "vic",
      suburb: "richmond",
      postalCode: 1234,
    });
    const result = `/sold-properties/in-vic-richmond-1234/`;

    expect(data).toEqual(result);
  });

  test("Get sale suburb url", () => {
    const data = Listing.getUrlFromAnySearchResultData({
      saleMethod: "Sale",
      state: "Vic",
      suburb: "Richmond",
      postalCode: 3121,
      minPrice: 50000,
      propertyTypes: ["Studios", "Townhouses", "Villas"],
      bedrooms: 1,
    });
    const result = `/for-sale/studios-and-townhouses-and-villas-in-vic-richmond-3121-with-1-bedroom-from-50000/`;

    expect(data).toEqual(result);
  });

  test("Get rent region url", () => {
    const data = Listing.getUrlFromAnySearchResultData({
      saleMethod: "Rent",
      state: "Nsw",
      region: "Attunga",
    });
    const result = `/for-rent/in-nsw-attunga/`;

    expect(data).toEqual(result);
  });

  test("Get sold region url", () => {
    const data = Listing.getUrlFromAnySearchResultData({
      saleMethod: "Sold",
      state: "Vic",
      region: "Melbourne",
      minPrice: 50000,
      maxPrice: 75000,
      propertyTypes: ["Houses", "Units", "Apartments", "Studios", "Townhouses", "Land", "Villas", "Rural"],
      bedrooms: 3,
    });
    const result = `/sold-properties/houses-and-units-and-apartments-and-studios-and-townhouses-and-land-and-villas-and-rural-in-vic-melbourne-with-3-bedrooms-between-50000-and-75000/`;

    expect(data).toEqual(result);
  });

  test("Get sold city url", () => {
    const data = Listing.getUrlFromAnySearchResultData({
      saleMethod: "Sold",
      state: "Vic",
      city: "Melbourne",
      minPrice: 50000,
      maxPrice: 75000,
      propertyTypes: ["Houses", "Units", "Apartments", "Studios", "Townhouses", "Land", "Villas", "Rural"],
      bedrooms: 3,
    });
    const result = `/sold-properties/houses-and-units-and-apartments-and-studios-and-townhouses-and-land-and-villas-and-rural-in-vic-melbourne-with-3-bedrooms-between-50000-and-75000/`;

    expect(data).toEqual(result);
  });

  test("Get sale with special case city url", () => {
    const data = Listing.getUrlFromAnySearchResultData({
      saleMethod: "Sale",
      state: "Vic",
      region: "Geelong & Coast",
    });
    const result = `/for-sale/in-vic-geelong-coast/`;

    expect(data).toEqual(result);
  });
});

describe("Buy-rent-sold page Url From listing data", () => {
  test("Get sale state url", () => {
    const data = Listing.getUrlFromSearchResultDataWithState({ saleMethod: "Sale", state: "vic" });
    const result = `/for-sale/in-vic/`;

    expect(data).toEqual(result);
  });

  test("Get sale city url", () => {
    const data = Listing.getUrlFromSearchResultDataWithCity({ saleMethod: "Sale", state: "VIC", city: "Mel/born" });
    const result = `/for-sale/in-vic-mel-born/`;

    expect(data).toEqual(result);
  });

  test("Get sale region url", () => {
    const data = Listing.getUrlFromSearchResultDataWithRegion({ saleMethod: "Sale", state: "vic", region: "melborn" });
    const result = `/for-sale/in-vic-melborn/`;

    expect(data).toEqual(result);
  });

  test("Get sale suburb url", () => {
    const data = Listing.getUrlFromSearchResultDataWithSuburb({
      saleMethod: "Sale",
      state: "vic",
      suburb: "richmond",
      postalCode: 1234,
    });
    const result = `/for-sale/in-vic-richmond-1234/`;

    expect(data).toEqual(result);
  });

  test("Get rent state url", () => {
    const data = Listing.getUrlFromSearchResultDataWithState({ saleMethod: "rent", state: "vic" });
    const result = `/for-rent/in-vic/`;

    expect(data).toEqual(result);
  });

  test("Get rent city url", () => {
    const data = Listing.getUrlFromSearchResultDataWithCity({ saleMethod: "rent", state: "vic", city: "melborn" });
    const result = `/for-rent/in-vic-melborn/`;

    expect(data).toEqual(result);
  });

  test("Get rent region url", () => {
    const data = Listing.getUrlFromSearchResultDataWithRegion({ saleMethod: "rent", state: "vic", region: "melborn" });
    const result = `/for-rent/in-vic-melborn/`;

    expect(data).toEqual(result);
  });

  test("Get rent suburb url", () => {
    const data = Listing.getUrlFromSearchResultDataWithSuburb({
      saleMethod: "rent",
      state: "vic",
      suburb: "richmond",
      postalCode: 1234,
    });
    const result = `/for-rent/in-vic-richmond-1234/`;

    expect(data).toEqual(result);
  });

  test("Get sold state url", () => {
    const data = Listing.getUrlFromSearchResultDataWithState({ saleMethod: "sold", state: "vic" });
    const result = `/sold-properties/in-vic/`;

    expect(data).toEqual(result);
  });

  test("Get sold city url", () => {
    const data = Listing.getUrlFromSearchResultDataWithCity({ saleMethod: "sold", state: "vic", city: "melborn" });
    const result = `/sold-properties/in-vic-melborn/`;

    expect(data).toEqual(result);
  });

  test("Get sold region url", () => {
    const data = Listing.getUrlFromSearchResultDataWithRegion({ saleMethod: "sold", state: "vic", region: "melborn" });
    const result = `/sold-properties/in-vic-melborn/`;

    expect(data).toEqual(result);
  });

  test("Get sale filtered suburb url", () => {
    const data = Listing.getUrlFromSearchResultDataWithSuburb({
      saleMethod: "sold",
      state: "vic",
      suburb: "richmond",
      postalCode: 1234,
    });
    const result = `/sold-properties/in-vic-richmond-1234/`;

    expect(data).toEqual(result);
  });

  test("Get sale suburb url", () => {
    const data = Listing.getUrlFromSearchResultDataWithSuburb({
      saleMethod: "Sale",
      state: "Vic",
      suburb: "Richmond",
      postalCode: 3121,
      minPrice: 50000,
      propertyTypes: ["Studios", "Townhouses", "Villas"],
      bedrooms: 1,
    });
    const result = `/for-sale/studios-and-townhouses-and-villas-in-vic-richmond-3121-with-1-bedroom-from-50000/`;

    expect(data).toEqual(result);
  });

  test("Get rent region url", () => {
    const data = Listing.getUrlFromSearchResultDataWithRegion({
      saleMethod: "Rent",
      state: "Nsw",
      region: "Attunga",
    });
    const result = `/for-rent/in-nsw-attunga/`;

    expect(data).toEqual(result);
  });

  test("Get sold region url", () => {
    const data = Listing.getUrlFromSearchResultDataWithRegion({
      saleMethod: "Sold",
      state: "Vic",
      region: "Melbourne",
      minPrice: 50000,
      maxPrice: 75000,
      propertyTypes: ["Houses", "Units", "Apartments", "Studios", "Townhouses", "Land", "Villas", "Rural"],
      bedrooms: 3,
    });
    const result = `/sold-properties/houses-and-units-and-apartments-and-studios-and-townhouses-and-land-and-villas-and-rural-in-vic-melbourne-with-3-bedrooms-between-50000-and-75000/`;

    expect(data).toEqual(result);
  });

  test("Get sold city url", () => {
    const data = Listing.getUrlFromSearchResultDataWithCity({
      saleMethod: "Sold",
      state: "Vic",
      city: "Melbourne",
      minPrice: 50000,
      maxPrice: 75000,
      propertyTypes: ["Houses", "Units", "Apartments", "Studios", "Townhouses", "Land", "Villas", "Rural"],
      bedrooms: 3,
    });
    const result = `/sold-properties/houses-and-units-and-apartments-and-studios-and-townhouses-and-land-and-villas-and-rural-in-vic-melbourne-with-3-bedrooms-between-50000-and-75000/`;

    expect(data).toEqual(result);
  });

  test("Get sale with special case city url", () => {
    const data = Listing.getUrlFromSearchResultDataWithRegion({
      saleMethod: "Sale",
      state: "Vic",
      region: "Geelong & Coast",
    });
    const result = `/for-sale/in-vic-geelong-coast/`;

    expect(data).toEqual(result);
  });
});

///////////////////////////////////////////////////////////////////////////////
describe("Get Listing Details From Url", () => {
  test(`/real-estate/13-canungra-road-city-beach-wa/property-details-buy-residential-14289642/
	`, () => {
    const data = Listing.getPropertyDetailsFromUrl(
      `/13-canungra-road-city-beach-wa/property-details-buy-residential-14289642/`
    );
    const result = {
      saleMethod: "Buy",
      listingId: 14289642,
      address: "13 Canungra Road City Beach Wa",
      state: "wa",
    };

    expect(data).toEqual(result);
  });

  test("/3-jubilee-crescent-city-beach-wa/property-details-sold-residential-14160030/", () => {
    const data = Listing.getPropertyDetailsFromUrl(
      `/3-jubilee-crescent-city-beach-wa/property-details-sold-residential-14160030/`
    );
    const result = {
      saleMethod: "Sold",
      listingId: 14160030,
      address: "3 Jubilee Crescent City Beach Wa",
      state: "wa",
    };

    expect(data).toEqual(result);
  });

  test("/38-maloney-way-city-beach-wa/property-details-rent-residential-14202736/", () => {
    const data = Listing.getPropertyDetailsFromUrl(
      `/38-maloney-way-city-beach-wa/property-details-rent-residential-14202736/`
    );
    const result = {
      saleMethod: "Rent",
      listingId: 14202736,
      address: "38 Maloney Way City Beach Wa",
      state: "wa",
    };

    expect(data).toEqual(result);
  });
});

describe("Get Url From Listing Details", () => {
  test(`{
		saleMethod: "buy",
		listingId: 14289642,
		address: '13/12-11 Canungra Road',
		suburb: 'City Beach',
		state: "wa",
		}`, () => {
    const data = Listing.getUrlFromPropertyDetails({
      saleMethod: "Buy",
      listingId: 14289642,
      address: "13/12-11 Canungra Road",
      suburb: "City Beach",
      state: "wa",
    });
    const result = `/real-estate/13-12-11-canungra-road-city-beach-wa/property-details-buy-residential-14289642/`;

    expect(data).toEqual(result);
  });

  test(`{
	saleMethod: "rent",
	listingId: 14289682,
	address: "1312-11 canungra road",
	suburb: "City Beach",
	state: "wa",
	}`, () => {
    const data = Listing.getUrlFromPropertyDetails({
      saleMethod: "Rent",
      listingId: 14289682,
      address: "1312-11 Canungra Road",
      suburb: "City Beach",
      state: "Wa",
    });
    const result = `/rental-properties/1312-11-canungra-road-city-beach-wa/property-details-rent-residential-14289682/`;

    expect(data).toEqual(result);
  });

  test(`{
	saleMethod: "Sold",
	listingId: 32563467,
	address: "1312-11 City Road",
	suburb: "City Beach",
	state: "waz",
	}`, () => {
    const data = Listing.getUrlFromPropertyDetails({
      saleMethod: "Sold",
      listingId: 32563467,
      address: "1312-11 City Road",
      suburb: "City Beach",
      state: "Waz",
    });
    const result = `/real-estate/1312-11-city-road-city-beach-waz/property-details-sold-residential-32563467/`;

    expect(data).toEqual(result);
  });
});
