import { FeatureFlags } from '@/shared/types';

let featureFlags: FeatureFlags = {};

export function setFeatureFlags(newFeatureFlags?: FeatureFlags) {
  featureFlags = newFeatureFlags ?? {};
}

export function getFeatureFlags(flag: keyof FeatureFlags) {
  return featureFlags[flag];
}
