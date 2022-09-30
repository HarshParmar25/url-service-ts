import { UrlType } from "./urlType";
import { EPageType } from "./types";

describe("UrlType", () => {
  test("should return agency page", () => {
    const data = `https://www.realestateview.com.au/real-estate-agency/rt-edgar-mt-eliza-mount-eliza-26758/`;
    const result = EPageType.AgencyDetail;
    expect(UrlType.getType(data)).toBe(result);
  });

  test("should return agent page", () => {
    const data = `https://www.realestateview.com.au/agent-profile/vicki-sayers-41300/`;
    const result = EPageType.AgentDetail;
    expect(UrlType.getType(data)).toBe(result);
  });

  test("should return auction page", () => {
    const data = `https://www.realestateview.com.au/sales-and-auction-results/in-vic-barongarook%20west-3249/`;
    const result = EPageType.AuctionSearchResult;
    expect(UrlType.getType(data)).toBe(result);
  });

  test("should return profile page", () => {
    const data = `https://resi.uatz.view.com.au/lancer-rnd/profile/`;
    const result = EPageType.ProfileLandingPage;
    expect(UrlType.getType(data)).toBe(result);
  });

  test("rent home page", () => {
    const data = UrlType.getType(`https://www.realestateview.com.au/rental-properties/`);
    const result = EPageType.RentLanding;
    expect(data).toEqual(result);
  });

  test(`sold home page`, () => {
    const data = UrlType.getType(`https://www.realestateview.com.au/sold-properties/`);
    const result = EPageType.SoldLanding;
    expect(data).toEqual(result);
  });

  test("Buy listing page", () => {
    const data = UrlType.getType(`https://www.realestateview.com.au/for-sale/in-wa-city-beach-6015/`);
    const result = EPageType.BuySearchResult;
    expect(data).toEqual(result);
  });

  test("rent listing page", () => {
    const data = UrlType.getType(`https://www.realestateview.com.au/for-rent/in-wa-city-beach-6015/`);
    const newLocal = `rent-search-result-page`;
    expect(data).toEqual(newLocal);
  });

  test("sold listing page", () => {
    const data = UrlType.getType(`https://www.realestateview.com.au/sold-properties/in-vic-richmond-3121/`);
    const result = `sold-search-result-page`;
    expect(data).toEqual(result);
  });

  test(`buy property details`, () => {
    const data = UrlType.getType(
      `https://www.realestateview.com.au/real-estate/city-beach-wa/property-details-buy-residential-14321503/`
    );
    const result = EPageType.BuyPropertyDetail;
    expect(data).toEqual(result);
  });

  test(`rent property details`, () => {
    const data = UrlType.getType(
      `https://www.realestateview.com.au/rental-properties/17a-launceston-avenue-city-beach-wa/property-details-rent-residential-14304540/`
    );
    const result = EPageType.RentPropertyDetail;
    expect(data).toEqual(result);
  });

  test(`sold property details`, () => {
    const data = UrlType.getType(
      `https://www.realestateview.com.au/real-estate/10-clovelly-road-city-beach-wa/property-details-sold-residential-14184858/`
    );
    const result = EPageType.SoldPropertyDetail;
    expect(data).toEqual(result);
  });

  test("state profile page", () => {
    const data = UrlType.getType(`https://resi.uatz.view.com.au/lancer-rnd/profile/for-vic/`);
    const result = EPageType.StateProfile;
    expect(data).toEqual(result);
  });

  test("suburb profile page", () => {
    const data = UrlType.getType(`https://resi.uatz.view.com.au/lancer-rnd/profile/for-vic/melbourne-3000/`);
    const result = EPageType.SuburbProfile;
    expect(data).toEqual(result);
  });

  test("should return undefined", () => {
    const data = `https://www.realestateview.com.au/propertsddy-360/property/22-acacia-street-thornlands-qld-4164/`;
    const result = "unknown";
    expect(UrlType.getType(data)).toBe(result);
  });

  test("city profile page", () => {
    const data = UrlType.getType(`https://resi.uatz.view.com.au/lancer-rnd/profile/for-vic/melbourne-city-1243/`);
    const result = EPageType.CityProfile;
    expect(data).toEqual(result);
  });

  test("region profile page", () => {
    const data = UrlType.getType(`https://revo.uatz.view.com.au/profile/for-vic/melbourne-region-1234/`);
    const result = EPageType.RegionProfile;
    expect(data).toEqual(result);
  });

  test("find agent landing page", () => {
    const data = UrlType.getType(`https://www.realestateview.com.au/find-agent/`);
    const result = EPageType.FindAgentLanding;
    expect(data).toEqual(result);
  });

  test("agency search result page", () => {
    const data = UrlType.getType(`https://www.realestateview.com.au/find-agent/?loc=Inner%20West%7CVIC`);
    const result = EPageType.AgencySearchResult;
    expect(data).toEqual(result);
  });

  test("auction landign page", () => {
    const data = UrlType.getType(`https://www.realestateview.com.au/sales-and-auction-results/victoria/`);
    const result = EPageType.AuctionLanding;
    expect(data).toEqual(result);
  });

  test("price Estimator landign page", () => {
    const data = UrlType.getType(`https://www.realestateview.com.au/property-360/`);
    const result = EPageType.PriceEstimatorLanding;
    expect(data).toEqual(result);
  });
  test("Price Estimator search result page", () => {
    const data = UrlType.getType(
      `https://www.realestateview.com.au/property-360/property/22-acacia-street-thornlands-qld-4164/`
    );
    const result = EPageType.PriceEstimatorSearchResult;
    expect(data).toEqual(result);
  });

  test("Buy landing page ", () => {
    const data = UrlType.getType(`https://www.realestateview.com.au/`);
    const result = EPageType.BuyLanding;
    expect(data).toEqual(result);
  });
});
