#!/bin/bash
if [ $# -eq 0 ]
then 
	echo neither file nor directory 
elif [ -f $1   ]
then
	echo File 
elif [ -d $1   ]
then
	echo Directory 
fi

if [ -r $1   ]
then
echo Readable 
fi
if [ -w $1   ]
then
	echo writable 
fi
if [ -x $1   ]
then
	echo executable	
fi 

