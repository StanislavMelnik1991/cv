// Explicit variants keep the source text, output path and PDF identity together.
import { frontendResumes } from './content/frontend.mjs';
import { aiFirstResumes } from './content/ai-first.mjs';

export const resumes = {
  'frontend-ru': frontendResumes.ru,
  'frontend-en': frontendResumes.en,
  'ai-first-ru': aiFirstResumes.ru,
  'ai-first-en': aiFirstResumes.en,
};
