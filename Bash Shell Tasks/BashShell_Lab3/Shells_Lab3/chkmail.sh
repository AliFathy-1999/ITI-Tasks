#!/bin/bash
typeset -i oldmail
typeset -i newmail
echo please wait, refresh every 10 seconds.....
while [ true ]
do
	oldmail=`wc -l /var/mail/$USER | cut -d" " -f1`
	sleep 10
	newmail=`wc -l /var/mail/$USER | cut -d" " -f1`
	
	if [ $oldmail -lt $newmail   ]
	then
		echo New emails found
	elif [ $oldmail -eq $newmail ]
	then 
		echo No New Emails found
	fi 

done
