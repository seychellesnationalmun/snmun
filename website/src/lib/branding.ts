/** Website identity; editable in Settings once the CMS is connected. */
export const BRAND = {
  name: "Seychelles National Model United Nations",
  shortName: "SNMUN",
  slogan: "From Seychelles to the world, Diplomacy Begins Here.",
  email: "info@snumun.online",
  foundationName: "Tyler Nicholas Foundation",
  foundationUrl: "https://tyler-nicholas-foundation.online",
  // Existing approved brand assets from the current maintenance-site repository.
  // Migration task: copy these into website/public/assets before launch.
  assetsBase: "https://raw.githubusercontent.com/seychellesnationalmun/snmun/main/assets",
} as const;

export const asset = (name: string) => `${BRAND.assetsBase}/${name}`;
