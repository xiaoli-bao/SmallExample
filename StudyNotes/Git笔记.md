# git

1. git init

   指定目录初始化为一个git本地仓库

2. git add文件或者目录

   把工作区新作的修改，add到暂存区

3. git  commit -m '提交日志'

   把暂存区的内容提交到本地仓库，作为一个新的版本

4. git log

   查看提交的历史版本

5. git status -s

   * ??代表添加的文件，还没有add
   * A代表add过了，还没有commit
   * AM代表add过了，还没有提交，又modeify修改了
   * M代表修改了，并add,但还没有commit

6. git reset --hard 本版号

   回退到指定版本

7. 分支

   默认本地仓库中只有一条分支，叫做主分支(master)

   也可以再新建分支：

   * 查看已有的分支

     git branch

   * 新建分支

     git branch 新分支名称

   * 切换分支

     git checkout 分支名称

   * 合并分支

     git merge 分支名

     把指定的分支合并到当前分支

   * 删除分支

     git branch -d 分支名

8. 远程仓库

   远程仓库，可以自己在服务器上搭建一个远程git仓库，也可以使用开放的远程仓库

   开放的远程仓库:github、 gitlab  、gitee 码云  、coding.net(支持git和svn)

   * 给远程仓库地址起个名称(别名)，之后直接使用这个名称，就不需要记住这个地址

     git remote add 名字 远程仓库地址

     git remote -v

   * 把本地仓库代码版本推送到远程仓库

   * git push origin master

     origin代表远程仓库地址

     master推送指定远程仓库的master分支

   * 从远程仓库拉去最新版本町合并当前本地分支

     git pull origin master

     注意：也可以使用git fetch先拉去（不合并），然后如果需要合并使用git merge合并

   * 克隆远程仓库代码（可能出来一份本地仓库）

     git clone 远程仓库地址

9. vs code 中使用git

   先得git init 初始化一个本地仓库，或者git clone从远程仓库克隆一个到本地仓库。

   VSCode直接打开本地仓库（就当作文件夹打开—）

10. 微信开发者工具中使用git