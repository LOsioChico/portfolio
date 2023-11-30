import { type Companies } from './companies';

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
}

export default Locale;
