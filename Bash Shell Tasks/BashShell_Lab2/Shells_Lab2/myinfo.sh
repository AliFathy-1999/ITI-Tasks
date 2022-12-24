#!/bin/bash
echo what is your login name ?
read answer
home=`grep $answer /etc/passwd | cut -d: -f6`
if grep ^$answer /etc/passwd
then
	ls -l $home
cp -r $HOME/*  /tmp
ps -u $answer	
else 
	echo Invalid name
fi
