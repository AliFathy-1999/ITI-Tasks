#!/bin/bash
shopt -s extglob
export LC_COLLATE=C

echo Enter size of array
read size

$typeset –i array[$size]
avg=0
i=0
for ((i=0;i<$size;i++))
do
	printf "Enter element $i: "
	read element
	array[$i]=$element
done
	for ((i=0;i<$size;i++))
	do
		((avg=$avg+${array[i]}))
	done
	echo "avg is $(($avg / $size))"

