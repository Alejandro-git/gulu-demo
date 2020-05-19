#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:Alejandro-git/gulu-demo.git master:gh-pages

cd -

# 如果不是 windows 用户, 需要加一步，打开终端，改变此文件的可执行权限
# chmod +x deploy.sh

# 如果是 windows 用户, 直接运行 ./deploy.sh 就可以了

