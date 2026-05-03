export interface ShortenedUrlResponse {
  alias: string;
  created_at: number;
  long_url: string;
  owner_id: string | null;
  private_stats: boolean | null;
  short_url: string;
  status: string;
}
