export type Recursive = {
  type?: (...args: any[]) => Recursive;
  args?: any[];
};

export interface IImageInfo {
  imageId: string;
  variant?: string;
}
