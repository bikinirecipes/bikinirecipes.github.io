git checkout master
git add .
git commit -m 'update master'
jekyll build
rm -rf ~/_site
mv _site ~
git checkout gh-pages
git pull https://github.com/bikinirecipes/bikinirecipes.github.io master
rm -rf *
mv ~/_site/* .
git add .
git commit -m 'update content'
git push https://github.com/bikinirecipes/bikinirecipes.github.io gh-pages:master
git checkout master

