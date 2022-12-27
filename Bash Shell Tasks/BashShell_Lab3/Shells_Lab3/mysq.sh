#!/bin/bash

echo enter number please
read number

function sqnum(){
	echo $(($number * $number))
}
sqnum 
