import type { MetadataRoute } from 'next';
import { site } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  // The public site is a single page; section anchors are not separate URLs.
  return [{ url: new URL('/', site.seo.url).href }];
}
