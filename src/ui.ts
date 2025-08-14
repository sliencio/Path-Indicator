import * as vscode from "vscode";
import { PathConfig } from "./config";

export class PathIndicator {
  private statusBarItem: vscode.StatusBarItem;

  constructor() {
    this.statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, -1);
    this.statusBarItem.tooltip;
    console.log("--------------Status bar item created.");
  }

  updateIndicator(config: PathConfig | null) {

    if (config) {
      console.log("Status bar updated: show");
      this.statusBarItem.text = `$(circle-filled) ${config.text}`;
      this.statusBarItem.color = config.color;
      this.statusBarItem.tooltip = `Matched Path: ${config.path}`;
      this.statusBarItem.show();

      setTimeout(() => {
        this.statusBarItem.show();
        console.log("Forced to show status bar item");
      }, 1000);
    } else {
      this.statusBarItem.hide();
      console.log("Status bar updated: Hide");

    }
  }

  dispose() {
    this.statusBarItem.dispose();
  }
}
