declare global {
  interface Window {
    gtag: (param1: string, param2: string, param3: object) => void;
  }
}

const CODE = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS as string;

export const pageview = (url: string) => {
  window.gtag('config', CODE, {
    page_path: url,
  });
};
    