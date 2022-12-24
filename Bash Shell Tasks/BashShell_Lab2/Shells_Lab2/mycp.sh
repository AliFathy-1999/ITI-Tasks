#!/bin/bash
if [ $# -eq 2 ]
then 
	cp $1 $2
else
	cp $*
fi 


