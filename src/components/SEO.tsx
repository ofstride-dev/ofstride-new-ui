import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  ogImage?: string;
  canonical?: string;
  noindex?: boolean;
}

const DEFAULT_TITLE = 'Ofstride Services LLP — Premium Consulting for MSMEs';
const DEFAULT_DESCRIPTION = 'Expert consulting across HR, Finance, Legal, and IT. Helping MSMEs take bigger strides towards success since 2019.';
const SITE_URL = 'https://ofstride.com';

export function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  ogImage = '/assets/logo/logo.png',
  canonical,
  noindex = false,
}: SEOProps) {
  const fullTitle = title === DEFAULT_TITLE ? title : `${title} | Ofstride`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${SITE_URL}${ogImage}`} />
      <meta property="og:site_name" content="Ofstride Services LLP" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE_URL}${ogImage}`} />
      
      {canonical && <link rel="canonical" href={`${SITE_URL}${canonical}`} />}
      
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Ofstride Services LLP',
          url: SITE_URL,
          logo: `${SITE_URL}/assets/logo/logo.png`,
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+91-89516-06862',
            contactType: 'customer service',
            email: 'info@ofstride.com',
          },
        })}
      </script>
    </Helmet>
  );
}
