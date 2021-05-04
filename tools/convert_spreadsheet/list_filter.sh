#!/bin/sh

#cat list.html | sed -e 's/<td/\n<td/g' | grep -v -e "</th>" -e "</a>" -e "</td>" -e "</tr>" -e "</div>" -e "<svg" -e "</svg>" | awk '{if (NR >= 74) {print $0}}' > list2.html
cat list.html | sed -e 's/<td/\n<td/g' | sed -e 's/<tr/\n<tr/g' | grep -v -e "<meta" -e "<style" | awk '{if (NR >= 38) {print $0}}' | awk '{if (((NR-1) % 12) != 0) { print $0 }}' > list2.html
