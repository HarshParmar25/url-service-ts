class UtilsService {
  static slugify(str: string): string {
    str = str.replace(/[^a-zA-Z0-9]/g, " ");
    return str.replace(/\s+/g, "-").toLowerCase();
  }

  static slugToName(str: string): string {
    str = str.replace(/(?<=\b)\w/g, (match) => match.toUpperCase());
    return str.replace(/-/g, " ");
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static removeEmptyValues<T>(obj: Record<string, any>): T {
    Object.keys(obj).forEach((key) => {
      if (Array.isArray(obj[key]) && obj[key].length === 0) {
        delete obj[key];
      } else if (obj[key] && typeof obj[key] === "object") {
        this.removeEmptyValues(obj[key]);
      } else if (obj[key] === undefined || obj[key] === null || obj[key] === "") {
        delete obj[key];
      }
    });
    return obj as T;
  }

  static decodeQueryParams(queryParams: string): Record<string, string> | void {
    if (!queryParams) return;
    if (queryParams[0] === "?") {
      queryParams = queryParams.slice(1);
    }
    queryParams = decodeURIComponent(queryParams);
    const result: Record<string, string> = {};
    const params = queryParams.split("&");
    params.forEach((param) => {
      const [key, value] = param.split("=");
      result[key] = value;
    });
    if (Object.keys(result).length === 0) {
      return;
    }
    return result;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static generateQueryParams(data: Record<string, any>): string {
    const result = Object.keys(data)
      .map((key) => {
        if (Array.isArray(data[key])) {
          return data[key].map((item: string) => `${key}=${encodeURI(item)}`).join("&");
        }
        return `${key}=${encodeURI(data[key])}`;
      })
      .join("&");
    return `?${result}`;
  }
}

export default UtilsService;
