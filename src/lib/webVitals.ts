import { ReportHandler, getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    getCLS(onPerfEntry);
    getFID(onPerfEntry);
    getFCP(onPerfEntry);
    getLCP(onPerfEntry);
    getTTFB(onPerfEntry);
  }
};

export const webVitals = () => {
  reportWebVitals((metric) => {
    console.log(metric.name, metric.value);
    // Here you can send metrics to your analytics service
  });
}; 