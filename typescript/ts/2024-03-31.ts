export interface PackageDetails {
  name: string;
  description: string;
  readme: string;
  author: {
    email: string;
    name: string;
  };
  maintainers: {
    email: string;
    name: string;
  }[];
  license: string;
}

async function getFeaturedPackages(): Promise<PackageDetails[]> {
  const FEATURED_PACKAGES = ["react", "typescript", "esbuild", "vite"];
  const promises = FEATURED_PACKAGES.map(async (_package) => {
    const res = await fetch(`https://registry.npmjs.org/${_package}`);
    return res.json();
  });
  const data = await Promise.all(promises);
  return data as PackageDetails[];
}
