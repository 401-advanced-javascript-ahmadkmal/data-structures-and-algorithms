# Challenge Summary

function take array and verify if all opened bracket has closed in the sequence

## Challenge Description

Your function should take a string as its only argument, and should return a boolean representing whether or not the brackets in the string are balanced. There are 3 types of brackets:

Round Brackets : ()
Square Brackets : []
Curly Brackets : {}

## Approach & Efficiency

store the open bracket and close bracket in array the same type have the same index search for the bracket in string and push it in stack and if the loop find close pop the stack and check if it the same index with open

## Solution

![Whiteboard](../../assets/multiBracketValidation.jpg
