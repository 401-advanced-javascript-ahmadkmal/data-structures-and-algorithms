# Hashtables

 hash table (hash map) is a data structure that implements an associative array abstract data type, a structure that can map keys to values. A hash table uses a hash function to compute an index, also called a hash code, into an array of buckets or slots, from which the desired value can be found. During lookup, the key is hashed and the resulting hash indicates where the corresponding value is stored.

## Challenge

do add ,get ,hash and contain metod to hash table data structure

## Approach & Efficiency

hash the key then store is at that index as linked list if it already have a value then add it to that list 
for other method i hash the key then check the value at hashtablwe if it exist then start searching for the key 
the big o (n) for add is O(1)
and for get is o(n) where n is length of linked list element 


## API

add(value) and this value to hashtabkle
hash (key) hashing that key to num
contain check if hash table contain certain value and return true or false 
get do the same of contain but it will return its value 