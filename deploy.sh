#!/bin/bash

deployed_moment=`date +%F-%T`
if git status | grep 'nothing to commit, working tree clean'; then

        PULL="$(git pull origin master)"

        if [$PULL | grep '\<.*.vue\>'] || [$PULL | grep '\<.*.js\>'] || [$PULL | grep '\<.*.scss\>'] || [$PULL | grep '\<.*.css\>']; then
                echo "Node"
                if $1 = 'dev'; then
                        npm run dev
                else
                        npm run build
                        pm2 start
                fi
        fi

else
        echo "Dirty branch. Check first"
        exit
fi
