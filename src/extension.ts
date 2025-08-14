import * as vscode from "vscode";
import { findMatchingConfig,GetDefaultColor} from "./config";
import { PathIndicator } from "./ui";
import { normalizePath,getParentFolderOfLua} from "./utils";

export function activate(context: vscode.ExtensionContext) {
  const indicator = new PathIndicator();

  const updateUI = () => {
    const workspaceFolders = vscode.workspace.workspaceFolders;
    console.log("--------------------", workspaceFolders)
    if (!workspaceFolders) {
      indicator.updateIndicator(null);
      return;
    }

    const currentPath = normalizePath(workspaceFolders[0].uri.fsPath);
    let matchedConfig = findMatchingConfig(currentPath);
    console.log("--------------------", currentPath)
    console.log("--------------------", matchedConfig)
    if (!matchedConfig) {
      matchedConfig = {
        text:getParentFolderOfLua(currentPath),
        color:GetDefaultColor(),
        path:currentPath
      }
    } 
    indicator.updateIndicator(matchedConfig || null);
  };

  // 监听工作区变化和配置变化
  vscode.workspace.onDidChangeWorkspaceFolders(updateUI);
  vscode.workspace.onDidChangeConfiguration(updateUI);

  updateUI();

  context.subscriptions.push(indicator);
}

export function deactivate() { }
