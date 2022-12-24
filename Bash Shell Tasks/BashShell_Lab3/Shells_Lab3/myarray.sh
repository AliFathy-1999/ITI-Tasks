#!/bin/bash
shopt -s extglob
export LC_COLLATE=C

echo Enter size of array
read size

$typeset –i array[$size]
for ((i=0;i<$size;i++))
do
	printf "Enter element $i: "
	read element
	array[$i]=$element
done
echo ${array[*]}

