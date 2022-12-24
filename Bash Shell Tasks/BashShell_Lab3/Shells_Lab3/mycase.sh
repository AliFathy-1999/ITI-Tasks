#!/bin/bash
echo Enter String please ?
read char

case $char in
	[a-z] ) echo lower case
	;;
	[A-Z] ) echo Upper Case
	;;
	[0-9] ) echo Number
	;;
	*) echo Nothing
	esac	


