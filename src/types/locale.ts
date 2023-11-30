import { type Companies } from './companies';
import { type Projects } from './projects';

interface Locale {
  profile: {
    author: string;
    description: string;
  };
  experience: {
    [key in Companies[number]]: {
      title: string;
      company: string;
      description: string;
      start: string;
      end: string;
    };
  };
  projects: {
    [key in Projects[number]]: {
      title: string;
      description: string;
    };
  };
}

export const locales = ['en', 'es'];

export default Locale;
