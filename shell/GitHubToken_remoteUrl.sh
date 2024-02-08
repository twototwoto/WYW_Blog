#!/bin/bash

read -p "enter your github name: " gitHubName
read -p "enter repository name: " repositoryName
read -p "enter token: " token
remoteUrl="https://$token@github.com/$gitHubName/$repositoryName.git"
echo "remote url为：$remoteUrl"
remoteUrlGitCommand="git remote set-url origin $remoteUrl"
echo "设置 remote url的命令为：$remoteUrlGitCommand"
