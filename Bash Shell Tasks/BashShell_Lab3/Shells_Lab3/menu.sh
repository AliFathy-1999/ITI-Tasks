#!/bin/bash

select choice in "ls" "ls -a" "exit"  
do
case $REPLY in
1) ls
;;
2) ls -a
;;
3) exit
;;
*) echo $REPLY is not one of the choices.
;;
esac
done

