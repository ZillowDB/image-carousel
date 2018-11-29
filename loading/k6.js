import http from 'k6/http';
import { check, group, sleep } from 'k6';
import { Counter, Rate, Trend } from 'k6/metrics';

export const options = {
  stages: [
    { target: 50, duration: '30s' },
    { target: 50, duration: '30s' },
    { target: 0, duration: '30s' },
  ],
  rps: 1500,
  thresholds: {
    'check_failure_rate': ['rate<0.3'],
  },
  ext: {
    loadimpact: {
      distribution: {
        scenarioLabel1: { loadZone: 'amazon:us:ashburn', percent: 100 },
      },
    },
  },
};

const checkFailureRate = new Rate('check_failure_rate');
const timeToFirstByte = new Trend('time_to_first_byte', true);

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export default function main() {
  group('Homes page', () => {
    const res = http.get(`http://localhost:3004/api/homes/${getRandomInt(1, 10e6)}/images`);
    const checkRes = check(res, {
      'status is 200': r => r.status === 200,
    });

    // Record check failures
    checkFailureRate.add(!checkRes);

    // Record time to first byte and tag it with the URL to be able to filter
    // the results in Insights
    timeToFirstByte.add(res.timings.waiting, { ttfbURL: res.url });
  });
}
