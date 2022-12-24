#!/bin/bash

for ch in `ls /home/$USER`
do
	chmod +x /home/$USER/$ch
done
