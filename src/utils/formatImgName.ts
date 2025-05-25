export const formatImgName = (path: string): string => {
  return path
    .toLowerCase()
    .replace(/\//g, '') // Remove all forward slashes
    .trim() // Trim whitespace from ends
    .replace(/\s+/g, '-') // Replace all whitespace (one or more) with single hyphen
    .replace(/-+/g, '-') // Replace multiple hyphens with one
}
