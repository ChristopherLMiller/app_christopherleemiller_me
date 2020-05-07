export interface iUploadFile {
  id: number;
  created_at: string;
  updated_at: string;
  name: string;
  alternativeText?: string;
  caption?: string;
  width?: number;
  height?: number;
  formats: object;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewURL: string;
  provider: string;
  provider_metadata: any;
}
