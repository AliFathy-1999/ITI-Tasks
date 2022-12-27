#!/bin/bash
if [ $# -eq 0 ]
then 
	echo Neither 
fi
if [ $1 = "-l"  ]
then
	echo list in long format
fi 
if [ $1 = "-a"  ]
then
	echo list all entries including the hiding files.
fi 
if [ $1 = "-d"  ]
then
	echo if an argument is a directory, list only its name
fi 
if [ $1 = "-i"  ]
then
	echo print inode number
fi 
if [ $1 = "-R"  ]
then
	echo recursively list subdirectories
fi 
