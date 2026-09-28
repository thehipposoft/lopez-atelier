export const WP_API_BASE_URL =
  "https://olivedrab-seahorse-981397.hostingersite.com/wp-json/wp/v2";
export const WP_MAX_PER_PAGE = 100;
export const REVALIDATE_SECONDS = 3600;

export class WPFetchError extends Error {
  constructor(
    message: string,
    public readonly status?: number
  ) {
    super(message);
    this.name = "WPFetchError";
  }
}

export const wpFetch = async (
  path: string,
  errorMessage: string
): Promise<Response> => {
  const response = await fetch(`${WP_API_BASE_URL}${path}`, {
    next: { revalidate: REVALIDATE_SECONDS },
  });

  if (!response.ok) {
    throw new WPFetchError(
      `${errorMessage} (${response.status})`,
      response.status
    );
  }

  return response;
};
