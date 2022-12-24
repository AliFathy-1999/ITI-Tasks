#!/bin/bash

shopt -s extglob
export LC_COLLATE=C

echo Enter String please ?
read string

case $string in
	+([a-z])) echo "lower case"
	;;
	+([A-Z])) echo "Upper Case"
	;;
	+([0-9])) echo "Number"
	;;
	+([a-zA-Z])) echo "Mix"
	;;
	*) echo "Nothing"
	esac


