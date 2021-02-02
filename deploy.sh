#!/bin/sh
export PATH=node_modules/.bin/:$PATH
export DISABLE_NOTIFIER=true

START=$(date +%s)

rev=$(git rev-parse --short HEAD)
protorev='1';
git rev-parse --short HEAD > revision.json
cp -f revision.json public/revision.json
oldrev=$(curl https://blog.healthkarma.org/version.txt)

echo "Clearing out old revisions..."
find -P public/js/ -name '*.js' -type f -ctime +14 -delete
find -P public/js/ -name '*.css' -type f -ctime +14 -delete
find -P public/js/ -name '*.json' -type f -ctime +14 -delete
find -P public/static/js/ -name '*.js' -type f -ctime +14 -delete
find -P public/static/css/ -name '*.css' -type f -ctime +14 -delete

echo "Building out revision:"
echo $rev

echo "Old revision:"
echo $oldrev

echo "Diff URL: https://gitlab.dream-foundation.com/healthkarma/blogkarma_fe/-/compare/$oldrev...$rev"

# build out angular frontend
echo "Building Nuxt Blog..."
npm run build
pm2 reload all

#if git status | grep 'nothing to commit, working tree clean'; then
#
#        PULL="$(git pull origin master)"
#
#
#
#        if [$PULL | grep '\<.*.vue\>'] || [$PULL | grep '\<.*.js\>'] || [$PULL | grep '\<.*.scss\>'] || [$PULL | grep '\<.*.css\>']; then
#                echo "Node"
#                if $1 = 'dev'; then
#                        npm run dev
#                else
#                        npm run build
#                        pm2 start
#                fi
#        fi
#
#else
#        echo "Dirty branch. Check first"
#        exit
#fi
