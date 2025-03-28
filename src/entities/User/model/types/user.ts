import { type UserRole } from '../consts/consts';
import { JsonSettings } from './jsonSettings';
import { FeatureFlags } from '@/shared/types';

export interface User {
  id: string;
  username: string;
  avatar?: string;
  roles?: UserRole[];
  features?: FeatureFlags;
  jsonSettings?: JsonSettings;
}
