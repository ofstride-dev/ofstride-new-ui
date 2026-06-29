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
  caseStudies: siteContent.caseStudies || [],
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
        // Fallback to static data on error
      });
  }, []);

  return { data, isLive };
}

export function AnalyticsSection() {
  const { data, isLive } = useAnalyticsData();

  return (
    <section id="analytics" className="py-24 border-t border-slate-900/40">
      <div className="container-page">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#5D7CC1]">
            {isLive ? 'Live Impact Metrics' : 'Impact Metrics'}
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white aintric-gradient-text mt-3">Results That Speak</h2>
          <p className="text-slate-400 text-sm mt-3 leading-relaxed max-w-xl">
            Measurable outcomes from AI-led consulting engagements across operations, growth, finance, and support.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {data.metrics.map((m) => (
            <div key={m.label} className="aintric-card text-center">
              <div className="text-3xl font-black text-white">
                {m.value}{m.suffix}
              </div>
              <p className="mt-1.5 text-xs text-slate-400 font-medium">{m.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {data.caseStudies.map((study) => (
            <div key={study.title} className="aintric-card flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-white tracking-tight">{study.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">{study.summary}</p>
              </div>
              <p className="mt-4 text-xs font-bold text-[#5D7CC1] border-t border-white/5 pt-3">{study.metric}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
