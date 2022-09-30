import LocationProfile from "./ProfileUrl";

test("get state from Url", () => {
  const data = LocationProfile.getProfileDataFromUrlWithState(`https://revo.uatz.view.com.au/profile/for-vic/`);
  const result = { state: "vic" };

  expect(data).toEqual(result);
});

test("get state suburb and postalcode", () => {
  const data = LocationProfile.getProfileDataFromUrlWithSuburb(
    `https://revo.uatz.view.com.au/profile/for-vic/melbourne-3000/`
  );
  const result = {
    state: "vic",
    suburb: "Melbourne",
    postalCode: 3000,
  };

  expect(data).toEqual(result);
});

test("get state and region", () => {
  const data = LocationProfile.getProfileDataFromUrlWithRegion(
    `https://revo.uatz.view.com.au/profile/for-vic/melbourne-region-1234/`
  );
  const result = {
    state: "vic",
    region: "Melbourne",
    regionId: 1234,
  };

  expect(data).toEqual(result);
});

test("get state and city", () => {
  const data = LocationProfile.getProfileDataFromUrlWithCity(
    `https://revo.uatz.view.com.au/profile/for-vic/melbourne-city-1234/`
  );
  const result = {
    state: "vic",
    city: "Melbourne",
    cityId: 1234,
  };

  expect(data).toEqual(result);
});

test("get state and city", () => {
  const data = LocationProfile.getProfileDataFromUrlWithCity(`/profile/for-vic/melbourne-city-1234/`);
  const result = {
    state: "vic",
    city: "Melbourne",
    cityId: 1234,
  };

  expect(data).toEqual(result);
});

test("get state and city", () => {
  const data = LocationProfile.getProfileDataFromUrlWithCity(`/profile/for-vic/melb-ourne-city-1234/`);
  const result = {
    state: "vic",
    city: "Melb Ourne",
    cityId: 1234,
  };

  expect(data).toEqual(result);
});

describe("Get data from Url", () => {
  test("get state from Url", () => {
    const data = LocationProfile.getProfileDataFromUrl(`https://revo.uatz.view.com.au/profile/for-vic/`);
    const result = { state: "vic" };

    expect(data).toEqual(result);
  });

  test("get state suburb and postalcode", () => {
    const data = LocationProfile.getProfileDataFromUrl(`https://revo.uatz.view.com.au/profile/for-vic/melbourne-3000/`);
    const result = {
      state: "vic",
      suburb: "Melbourne",
      postalCode: 3000,
    };

    expect(data).toEqual(result);
  });

  test("get state and region", () => {
    const data = LocationProfile.getProfileDataFromUrl(
      `https://revo.uatz.view.com.au/profile/for-vic/melbourne-region-1234/`
    );
    const result = {
      state: "vic",
      region: "Melbourne",
      regionId: 1234,
    };

    expect(data).toEqual(result);
  });

  test("get state and city", () => {
    const data = LocationProfile.getProfileDataFromUrl(
      `https://revo.uatz.view.com.au/profile/for-vic/melbourne-city-1234/`
    );
    const result = {
      state: "vic",
      city: "Melbourne",
      cityId: 1234,
    };

    expect(data).toEqual(result);
  });

  test("get state and city", () => {
    const data = LocationProfile.getProfileDataFromUrl(`/profile/for-vic/melbourne-city-1234/`);
    const result = {
      state: "vic",
      city: "Melbourne",
      cityId: 1234,
    };

    expect(data).toEqual(result);
  });

  test("get state and city", () => {
    const data = LocationProfile.getProfileDataFromUrl(`/profile/for-vic/melb-ourne-city-1234/`);
    const result = {
      state: "vic",
      city: "Melb Ourne",
      cityId: 1234,
    };

    expect(data).toEqual(result);
  });
});

describe("unhandled urls", () => {
  test("shoud return false", () => {
    const data = LocationProfile.getProfileDataFromUrl(`/real-estate-agency/jellis-craig-richmond-13487/`);
    expect(data).toEqual(false);
  });

  test("shoud return false", () => {
    const data = LocationProfile.getProfileDataFromUrl(`/sales-and-auction-results/in-vic-dumbalk%20north-3956/`);
    expect(data).toEqual(false);
  });

  test("shoud return false", () => {
    const data = LocationProfile.getProfileDataFromUrl(`/agent-profile/mark-imbesi-98524/`);
    expect(data).toEqual(false);
  });

  test("shoud return false", () => {
    const data = LocationProfile.getProfileDataFromUrl(
      `for-sale/studios-and-townhouses-and-villas-in-vic-richmond-3121-with-1-bedroom-from-50000/`
    );
    expect(data).toEqual(false);
  });

  test("shoud return false", () => {
    const data = LocationProfile.getProfileDataFromUrl(
      `for-rent/studios-and-townhouses-and-villas-in-vic-richmond-3121-with-1-bedroom-between-5000-and-100000-per-week/`
    );
    expect(data).toEqual(false);
  });

  test("shoud return false", () => {
    const data = LocationProfile.getProfileDataFromUrl(
      `/sold-properties/houses-and-units-and-apartments-and-studios-and-townhouses-and-land-and-villas-and-rural-in-vic-melbourne-with-3-bedrooms-between-50000-and-75000/`
    );
    expect(data).toEqual(false);
  });

  test("shoud return false", () => {
    const data = LocationProfile.getProfileDataFromUrl(
      `/real-estate/13-canungra-road-city-beach-wa/property-details-buy-residential-14289642/`
    );
    expect(data).toEqual(false);
  });

  test("shoud return false", () => {
    const data = LocationProfile.getProfileDataFromUrl(
      `/38-maloney-way-city-beach-wa/property-details-rent-residential-14202736`
    );
    expect(data).toEqual(false);
  });

  /////////////////////////////////////////////////
  test("shoud return false", () => {
    const data = LocationProfile.getProfileDataFromUrlWithState(`/real-estate-agency/jellis-craig-richmond-13487/`);
    expect(data).toEqual(false);
  });

  test("shoud return false", () => {
    const data = LocationProfile.getProfileDataFromUrlWithState(
      `/sales-and-auction-results/in-vic-dumbalk%20north-3956/`
    );
    expect(data).toEqual(false);
  });

  test("shoud return false", () => {
    const data = LocationProfile.getProfileDataFromUrlWithState(`/agent-profile/mark-imbesi-98524/`);
    expect(data).toEqual(false);
  });

  test("shoud return false", () => {
    const data = LocationProfile.getProfileDataFromUrlWithCity(
      `for-sale/studios-and-townhouses-and-villas-in-vic-richmond-3121-with-1-bedroom-from-50000/`
    );
    expect(data).toEqual(false);
  });

  test("shoud return false", () => {
    const data = LocationProfile.getProfileDataFromUrlWithCity(
      `for-rent/studios-and-townhouses-and-villas-in-vic-richmond-3121-with-1-bedroom-between-5000-and-100000-per-week/`
    );
    expect(data).toEqual(false);
  });

  test("shoud return false", () => {
    const data = LocationProfile.getProfileDataFromUrlWithRegion(
      `/sold-properties/houses-and-units-and-apartments-and-studios-and-townhouses-and-land-and-villas-and-rural-in-vic-melbourne-with-3-bedrooms-between-50000-and-75000/`
    );
    expect(data).toEqual(false);
  });

  test("shoud return false", () => {
    const data = LocationProfile.getProfileDataFromUrlWithSuburb(
      `/real-estate/13-canungra-road-city-beach-wa/property-details-buy-residential-14289642/`
    );
    expect(data).toEqual(false);
  });

  test("shoud return false", () => {
    const data = LocationProfile.getProfileDataFromUrlWithSuburb(
      `/38-maloney-way-city-beach-wa/property-details-rent-residential-14202736`
    );
    expect(data).toEqual(false);
  });

  test("shoud return false", () => {
    const data = LocationProfile.getProfileDataFromUrlWithSuburb(
      `https://revo.uatz.view.com.au/profile/for-vic/melbourne-region-1234/`
    );
    expect(data).toEqual(false);
  });

  test("shoud return false", () => {
    const data = LocationProfile.getProfileDataFromUrlWithCity(
      `https://revo.uatz.view.com.au/profile/for-vic/melbourne-region-1234/`
    );
    expect(data).toEqual(false);
  });

  test("shoud return false", () => {
    const data = LocationProfile.getProfileDataFromUrlWithState(
      `https://revo.uatz.view.com.au/profile/for-vic/melbourne-region-1234/`
    );
    expect(data).toEqual(false);
  });
  test("shoud return false", () => {
    const data = LocationProfile.getProfileDataFromUrlWithCity(
      `https://revo.uatz.view.com.au/profile/for-vic/melbourne-region-1234/`
    );
    expect(data).toEqual(false);
  });
  test("shoud return false", () => {
    const data = LocationProfile.getProfileDataFromUrlWithState(
      `https://revo.uatz.view.com.au/profile/for-vic/melbourne-region-1234/`
    );
    expect(data).toEqual(false);
  });
});

describe("Url From Data Location Profile", () => {
  test(`get state Url`, () => {
    const data = LocationProfile.getUrlFromProfileDataWithState({ state: "vic" });
    const result = `/profile/for-vic/`;

    expect(data).toEqual(result);
  });

  test(`get suburb Url`, () => {
    const data = LocationProfile.getUrlFromProfileDataWithSuburb({
      state: "vic",
      suburb: "melbourne",
      postalCode: 3000,
    });
    const result = `/profile/for-vic/melbourne-3000/`;

    expect(data).toEqual(result);
  });

  test(`get city Url`, () => {
    const data = LocationProfile.getUrlFromProfileDataWithCity({ state: "vic", city: "MelBo/urne", cityId: 3000 });
    const result = `/profile/for-vic/melbo-urne-city-3000/`;

    expect(data).toEqual(result);
  });

  test(`get region Url`, () => {
    const data = LocationProfile.getUrlFromProfileDataWithRegion({ state: "vic", region: "melbourne", regionId: 3000 });
    const result = `/profile/for-vic/melbourne-region-3000/`;

    expect(data).toEqual(result);
  });

  test(`get state Url`, () => {
    const data = LocationProfile.getUrlFromProfileData({ state: "vic" });
    const result = `/profile/for-vic/`;

    expect(data).toEqual(result);
  });

  test(`get suburb Url`, () => {
    const data = LocationProfile.getUrlFromProfileData({
      state: "vic",
      suburb: "melbourne",
      postalCode: 3000,
    });
    const result = `/profile/for-vic/melbourne-3000/`;

    expect(data).toEqual(result);
  });

  test(`get city Url`, () => {
    const data = LocationProfile.getUrlFromProfileData({ state: "vic", city: "MelBo/urne", cityId: 3000 });
    const result = `/profile/for-vic/melbo-urne-city-3000/`;

    expect(data).toEqual(result);
  });

  test(`get region Url`, () => {
    const data = LocationProfile.getUrlFromProfileData({ state: "vic", region: "melbourne", regionId: 3000 });
    const result = `/profile/for-vic/melbourne-region-3000/`;

    expect(data).toEqual(result);
  });
});
