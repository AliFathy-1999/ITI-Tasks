#!/bin/bash

for name in `cut -f1 -d: /etc/passwd`
do
	
	mailx -s "Mail Subject" $name  < ../mtemplate 
	echo "Mail sent successfully !"
done


