import * as path from "path";
import { GetDefaultPathMatch } from "./config";

/**
 * 标准化路径
 * - 转换反斜杠为正斜杠
 * - 转换为小写（适用于 Windows）
 */
export function normalizePath(filePath: string): string {
  return path.normalize(filePath).replace(/\\/g, "/");
}

export function getParentFolderOfLua(path: string): string {

  const pathMatchs = GetDefaultPathMatch()
  for (const pathMatch of pathMatchs) {
    const index = path.indexOf(pathMatch);
    if (index !== -1) {
      // 获取目标字符串之前的路径部分
      const beforeTarget = path.substring(0, index);
      // 按斜杠分割路径
      const parts = beforeTarget.split('/').filter(part => part !== '');
      // 返回最后一个部分（即前一个文件夹名）
      return parts.length > 0 ? parts[parts.length - 1] : "";
    }
  }


  const part2 = path.split('/').filter(part => part !== '');
  return part2.length > 0 ? part2[part2.length - 1] : "";
}
