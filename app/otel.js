const { MeterProvider, PeriodicExportingMetricReader, AggregationTemporality } = require('@opentelemetry/sdk-metrics');
const { OTLPMetricExporter } = require('@opentelemetry/exporter-metrics-otlp-http');

const exporter = new OTLPMetricExporter({
  url: process.env.OTEL_EXPORTER_OTLP_ENDPOINT + '/v1/metrics',
  temporalityPreference: AggregationTemporality.CUMULATIVE,
});

const reader = new PeriodicExportingMetricReader({
  exporter,
  exportIntervalMillis: 2000,
});

const meterProvider = new MeterProvider({
  readers: [reader],
});

const meter = meterProvider.getMeter('my-meter');

const counter = meter.createCounter('demo_counter', {
  description: 'Counts demo values',
});

setInterval(() => {
  console.log('📊 Incrementing demo_counter');
  counter.add(1, { service: 'demo-app' });
}, 3000);
