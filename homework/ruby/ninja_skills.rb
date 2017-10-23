# Challenge 1: Boolean
# Create a variable a and set it equal to true
a = true
# Create a variable b and set it equal to false
b = false
# Write a statement using a and b that evaluates to false
puts a == b 
# Write a statement using a and b that evaluates to true
puts b != a 

# Challenge 2: Nil
# p the value of the variable to the terminal
im_nil = nil
# puts the value of the variable to the terminal concatenate the string "nil was here".
puts "#{im_nil} was here"
# print the value of the variable to the terminal
puts im_nil
# puts the class of the value of the variable to the terminal. Use the .class method. Look up this method on Google.
puts im_nil.class

# Challenge 3: Integers
# Create a variable d and set it equal to a Fixnum
d = 5
puts d
# Create a variable e and set it equal to a Float
e = 5.5
puts e

# Challenge 4: Strings
# Create a variable christine and set it equal to the string "Hi, I'm Christine"
christine = "Hi, I'm Christine"
# Create a variable likesTo and set it equal to the String "long walks on the beach, kinda."
likes_to = "long walks on the beach, kinda"
# Using string interpolation and the variables tims and likesTo puts the following string to the terminal: "Hi, I'm Christine and I like long walks on the beach, kinda."
# WHAT IS tims
puts christine + likes_to
# Create a variable g and set it equal to the string "2"
g = "2"
# Create a variable gToNumber and set it equal to the Integer 2
g_to_number = 2
# puts the value of g + gToNumber in the terminal. What happens? How can you fix this?
# the problem is that g is not an integer. to fix it, change it to an integer with .to_i
puts g + g_to_number
puts g.to_i + g_to_number




