type Path = string;

export const isSamePath = (currentPath: Path, targetPath: Path): boolean => {
  const removeSlash = (path: string) => path.replace(/\/$/, "");

  return removeSlash(currentPath) === removeSlash(targetPath);
};
