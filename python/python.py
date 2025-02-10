# a=2;
# b=3;
# txt="@";
# print(2*txt*3)
# a="2";
# b=3;
# txt="@";
# print((a+txt)*b)
# a=2;
# b=3;
# # c=4;
# # print(a+b*c)
# print(a**b)
# a=10;
# b=5.0;
# c=a*b
# print(c)//50.0int*float=float
# a=1;
# b=2;
# c=a/b
# print(c)//0.5
# a=1.5;
# b=3;
# c=a//b
# print(c,a/b)
# a=12;
# b=-5;
# c=a//b;
# print(c)//-3
# a=12;
# b=5;
# c=a//b;
# print(c)//2
# a=-5;
# b=2
# c=a%b
# print(c)//1
# a=5;
# b=-2
# c=a%b
# print(c)//-1
# name=input("enter your name:")
# age=int(input("enter your age:"))
# price=float(input("enter the price:"))
# print("my name is" ,name, "and I am" ,age, "years old")
# name=input("enter your name:")
# print("welcome",name)
# a=int(input("enter your age:"))
# if(a>=18):
#     print("you are eligible to vote")
# elif(a<18):
#     print("you are not eligible coz of underage")
# marks=int(input("enter your marks:"))
# if(marks >= 90):
#  print("A")
# elif(marks >= 80 and marks < 90):
#  print("B")
# elif(marks >= 70 and marks < 80):
#  print("C")
# else:
#  print("D")
# # age=25
# age=int(input("enter your age:"))
# if(age>=18):
#     if(age>=80):
#         print("cannot drive")
#     else:
#         print("can drive")
# else:
#     print("cannot drive")
# food = input("food:")
# eat = "yes" if food == "cake" else "no"
# print(eat)
# food=input("food:")
# print("sweeet") if food == "cake" or food == "jalebi" else print("not sweet")
# a=2;
# b=4.25
# sum=a+b
# print(sum)
# print(type(sum))
# typecasting
# a="2"
# b=4.25
# print(a+b)
# a=1
# b="2"
# c=int(b)
# sum=a+c
# print(sum)
# a=3.14
# a=str(a)
# print(type(a))

# str1="hello"
# str2="world"
# print(str1 + str2)
# print(len(str1 + str2))

# str1="this is bhargavi.\t from ece"
# str1="this is bhargavi.\n from ece"
# print(str1)
# print(len(str1))

# str ="apna-college"
# print(str[0])#a
# print(str[1:4])#pna

# str ="apna-college"
# print(str[0])#a
# print(str[1:4])#pna
# print(str[-3:-1])#eg

# str ="apna-college"
# # print(str.endswith("ge"))
# print(str.captalize())
# # print(str.replace("c","d"))
# # print(str.find("e"))
# # print(str.count("l"))

# student=["bhargavi",85,"delhi"]
# print(student[2])#delhi

# day8.js
# import collections

# def is_pangram(s):
#     alphabet = set("abcdefghijklmnopqrstuvwxyz")
#     return alphabet.issubset(s.lower())

# def roman_to_int(s):
#     roman_map = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
#     total = 0
#     prev_value = 0
#     for char in reversed(s):
#         value = roman_map[char]
#         if value < prev_value:
#             total -= value
#         else:
#             total += value
#         prev_value = value
#     return total

# def most_frequent_word(sentence):
#     words = sentence.split()
#     counter = collections.Counter(words)
#     return max(counter, key=counter.get)

# def longest_common_prefix(strs):
#     if not strs:
#         return ""
#     prefix = strs[0]
#     for string in strs[1:]:
#         while not string.startswith(prefix):
#             prefix = prefix[:-1]
#             if not prefix:
#                 return ""
#     return prefix

# # Test cases
# print(is_pangram("The quick brown fox jumps over the lazy dog"))  # True
# print(roman_to_int("MCDXCVIII"))  # 1498
# print(most_frequent_word("apple banana apple orange banana apple"))  # "apple"
# print(longest_common_prefix(["flower", "flow", "flight"]))  # "fl"

# num1=input("enter your first number:")
# number=int(input)

#numeric datatypes=int,float,complex,boolean
#sequence=list,tuple,string,range
# list=[1,2,3,"string",[1,2,3,4]]#here iteration is slow
# print(list)
# print(list[1])
# print(list[4][1])
# list[1]=5
# print(list)

#tuple-iteration is fast
#range
# r1=list(range(0,10))
# print(r1)