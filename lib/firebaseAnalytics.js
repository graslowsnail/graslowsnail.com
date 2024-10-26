// lib/firebaseAnalytics.js
import { app } from '../firebaseConfig.js';
import { getAnalytics, logEvent } from 'firebase/analytics';

let analytics;

export const event = ({ action, category, label, value }) => {
  if (typeof window !== 'undefined') {
    if (!analytics) {
      analytics = getAnalytics(app);
    }

    logEvent(analytics, action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

