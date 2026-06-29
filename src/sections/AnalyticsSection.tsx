import { useEffect, useState } from 'react';
import { siteContent } from '../data/siteContent';

interface MetricItem {
  label: string;
  value: string;
  suffix: string;
}

interface CaseStudy {
  title: string;
  summary: string;
  metric: string;
}

interface AnalyticsData {
  metrics: MetricItem[];
  caseStudies: CaseStudy[];
}

const STATIC_DATA: AnalyticsData = {
  metrics: [
    { label: 'Clients Served', value: '65+', suffix: '' },
    { label: 'Avg. ROI (Year 1)', value: '315', suffix: '%' },
    { label: 'Projects Delivered', value: '120', suffix: '+' },
    { label: 'Client Retention', value: '94', suffix: '%' },
  ],
  caseStudies: siteContent.caseStudies,
};

function useAnalyticsData() {
  const [data, setData] = useState<AnalyticsData>(STATIC_DATA);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const apiUrl = (import.meta as ImportMeta & { env?: Record<string, string | undefined> }).env?.VITE_DATA_API;
    if (!apiUrl) return;

    fetch(`${apiUrl}/api/charts/overview`)
      .then(res => res.ok ? res.json() : Promise.reject())
      .then((liveData: AnalyticsData) => {
        setData(liveData);
        setIsLive(true);
      })
      .catch(() => {
        // Silently fall back to static data
      });
  }, []);

  return { data, isLive };
}

export function AnalyticsSection() {
  const { data, isLive } = useAnalyticsData();

  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="container-page">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="eyebrow text-primary-400">
            {isLive ? 'Live Impact Metrics' : 'Impact Metrics'}
          </p>
          <h2 className="section-title mt-3 text-white">Results That Speak</h2>
          <p className="section-copy mx-auto text-slate-400">
            Measurable outcomes from AI-led consulting engagements across operations, growth, finance, and support.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {data.metrics.map((m) => (
            <div key={m.label} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition hover:bg-white/10">
              <div className="text-4xl font-bold gradient-text">
                {m.value}{m.suffix}
              </div>
              <p className="mt-2 text-sm text-slate-400">{m.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {data.caseStudies.map((study) => (
            <div key={study.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
              <h3 className="text-lg font-semibold">{study.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{study.summary}</p>
              <p className="mt-4 text-sm font-bold text-primary-400">{study.metric}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
