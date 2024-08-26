export const generateBreadcrumbItems = (locationPath: string) => {
  const pathnames = locationPath.split("/").filter((x) => x);
  return [
    { title: "Dashboard", path: "/dashboard" },
    ...pathnames.map((value, index) => {
      const url = `/${pathnames.slice(0, index + 1).join("/")}`;
      return { title: value, path: url };
    }),
  ];
};
