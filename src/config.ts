import * as vscode from "vscode";
import { normalizePath } from "./utils";

export interface PathConfig {
  path: string;
  text: string;
  color: string;
}

export function getPathConfigs(): PathConfig[] {
  const configs = vscode.workspace.getConfiguration("pathIndicator").get<PathConfig[]>("paths");
  return configs || [];
}

export function findMatchingConfig(currentPath: string): PathConfig | null {
  const configs = getPathConfigs();
  const normalizedCurrentPath = normalizePath(currentPath).toLocaleLowerCase();

  for (const config of configs) {
    const normalizedConfigPath = normalizePath(config.path).toLocaleLowerCase();
    if (normalizedCurrentPath.includes(normalizedConfigPath)) {
      return config;
    }
  }
  return null;
}

export function GetDefaultColor(): string {
  return vscode.workspace.getConfiguration("pathIndicator").get<string>("defaultColor") || "FF5733";
}

export function GetDefaultPathMatch(): string[] {
  return vscode.workspace.getConfiguration("pathIndicator").get<string[]>("defaultPathMatchs") || ["/code/client"];
}

