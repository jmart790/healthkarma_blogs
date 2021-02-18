#! /usr/bin/env sh
export PATH=node_modules/.bin/:$PATH
export DISABLE_NOTIFIER=true

START=$(date +%s)

echo "Pulling from gitlab"
git pull origin master

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
