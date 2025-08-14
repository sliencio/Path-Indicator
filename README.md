#### This is a project path identification tool, used to use path names under different paths in the region
#### For example, if your project is the same project but has different branches, if you open two projects with vscode at  
#### the same time, it is difficult to distinguish which branch belongs to.

![img3_2](https://github.com/sliencio/PublicMyRes/blob/main/path_indicator/img3_2.png?raw=true)

![img4_2](https://github.com/sliencio/PublicMyRes/blob/main/path_indicator/img4_2.png?raw=true)


### Configuration 1: The project name and color that can be displayed by specifying the path
``` json
    "pathIndicator.paths": [
    {
      "path": "E:/Projects/code",
      "text": "Master",
      "color": "#FF5733"
    },
    {
      "path": "E:/Projects/BranchJp",
      "text": "BranchJp",
      "color": "#FF5733"
    },
```

### Configuration 2: You can set path matching rules
``` json
    "pathIndicator.defaultPathMatchs":["/code"]
```

In this way, when you open a project, you find that the path to the project is E:/Projects/ParentDir/code
The project name is ParentDir

### Configuration 3: You can set the color of the project name text

``` json
    "pathIndicator.defaultColor":"#ffffff"
```
