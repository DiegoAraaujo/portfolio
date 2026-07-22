export interface Certification {
  name: string;
  issuer: string;
  code: string;
  verifyUrl: string;
  seal: string;
}

export const certifications: Certification[] = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    code: "6719e9a2f9d94df5b7b2877ab39f9cb8",
    verifyUrl: "https://cp.certmetrics.com/amazon/en/public/verify/credential",
    seal: "AWS",
  },
  {
    name: "Certificação Full Stack Impressionador da Hashtag Treinamentos",
    issuer: "Hashtag Treinamentos",
    code: "FULJOS1760030646",
    verifyUrl: "https://portalhashtag.com/validacao-certificado/",
    seal: "# ",
  },
];
