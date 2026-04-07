type UnsplashSize = "sm" | "md" | "lg" | "xl";

const sizeMap: Record<UnsplashSize, number> = {
  sm: 400,
  md: 800,
  lg: 1200,
  xl: 1600,
};

function updateUnsplashParams(url: URL, width: number): URL {
  url.searchParams.set("auto", "format");
  url.searchParams.set("fit", "crop");
  url.searchParams.set("w", String(width));
  url.searchParams.set("q", "80");
  url.searchParams.set("fm", "webp");
  return url;
}

export function unsplashUrl(baseUrl: string, size: UnsplashSize = "lg"): string {
  try {
    const url = new URL(baseUrl);
    return updateUnsplashParams(url, sizeMap[size]).toString();
  } catch {
    return baseUrl;
  }
}

export function unsplashSrcSet(baseUrl: string): string {
  try {
    return (Object.entries(sizeMap) as [UnsplashSize, number][])
      .map(([, w]) => {
        const url = new URL(baseUrl);
        return `${updateUnsplashParams(url, w).toString()} ${w}w`;
      })
      .join(", ");
  } catch {
    return "";
  }
}