import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

export interface Profile {
  first?: string;
  lastname?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}

export interface ProfileSchema {
  isLoading: boolean;
  form?: Profile;
  readonly?: boolean;
  data?: Profile;
  error?: string;
}
