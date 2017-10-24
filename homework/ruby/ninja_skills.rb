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

# Challenge 5: Input and Output
# Create a small program that asks the user to input an Integer and multiplies the number by two.
def small_program (integer)
    puts "Please input an integer"
    gets.chomp.to_i * 2
end

# Create a small program that does the following
# Asks the user for their name
# Asks the user what they like to do
# Prints out the user's name and what they like to do in a sentence.
puts "What is your name?"
name = gets.chomp
puts "What do you like to do?"
fun = gets.chomp
puts "#{name} likes to #{fun}"

# Challenge 6: Arrays
# Create a variable myFirstArray and set it equal to an empty array
my_first_array = []
# Set the variable myFirstArray to an array with five Strings and four Integers
my_first_array = ["blue", "green", "orange", "pink", "yellow", 1, 2, 3, 4]
# Using myFirstArray puts the last value of the array to the terminal
puts my_first_array.last 
# Using myFirstArray puts the first value of the array to the terminal
puts my_first_array.first
# Set the second value of myFirstArray to the String "Joe"
my_first_array[1] = "Joe"
# Set the third value of myFirstArray to the Integer 3
my_first_array[2] = 3
# Push the String Boolean true into myFirstArray
# Puts the class of the fourth value in myFirstArray
puts my_first_array[4].class

# Challenge 7: Hashes
# Create a variable called myFavoriteAnimals and set it equal to a Hash with five animals. The animal name as the keys and the species as the values. You must include one animal with a name of "Edgar" and the value "Donkey"
my_favorite_animals = {
    :Edgar => "Donkey",
    :Olive => "Dog",
    :Spot => "Cow",
    :Quackers => "Duck",
    :Nemo => "Fish"
}

# Change value of Edgar to be "Bear"
my_favorite_animals[:Edgar] => "Bear"

# Create a variable favoriteMovie and set it equal to a new, empty Hash.
favorite_movie = {}

# Edit the favoriteMovie hash and add a movie key with a value of your choosing.
favorite_movie[:Movie] = "St. Elmo's Fire"

# Challenge 8: Ranges

# Create a variable firstRange and set it equal to a Range from one to ten including ten.
first_range = (1..10)
# Convert firstRange to an array.
array_first_range = first_range.to_a
# Create a variable secondRange and set it equal to a Range from one to one thousand excluding the Number one thousand.
second_range = (1...1000)
# Convert secondRange to an array
array_second_range = second_range.to_a
# Create a For loop that changes every value in firstRange to a String and using a p statement print those values out to the terminal
for entry in first_range do
    entry.to_s
    puts entry
end

# Create a variable x and set it equal to zero
x = 0

# Create a While loop that prints every value in secondRange while x < 50.
while x < 50 do
    puts array_second_range[x]
    x += 1
end

# Using .each multiply every other value in firstRange by two and push those values into a new Array. Print that array to the terminal.

new_first_array_range = []

array_first_range.each do |location|
    if location.odd? == true 
        new_first_array_range.push(location * 2)
end 
end 
puts new_first_array_range

# Using .map and if/else statements, iterate through firstRange and change every even value to a string. If the value is odd, don't change the value to a string.
first_range.map do |number|
    if number.even? == true
        number.to_s
    end 
end

# Challenge 9: Sum of Natural Numbers
# If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

# Find the sum of all the multiples of 3 or 5 below 1000 using Ruby.

sum_range = (1..1000)
array_range = sum_range.to_a
start = 0

array_range.each do |num|
    if num % 3 == 0  || num % 5 == 0
        start += num
    end
end

puts start


# The Final Challenge: Prime Numbers
# Write a method called check_prime? that will test whether a number is Prime. The method will return true if Prime, false if not.
require "prime"

def check_prime? (number)
    if number.prime? == true
        puts "#{number}, i am prime"
        return true
    else
        puts "#{number}, i am not prime"
        return false
    end
end

# Write another method called get_primes that will print all the Primes up to an arbitrary limit. For example, if you invoke your method with get_primes(100), it will print all the Prime numbers up to and including 100.
require "prime"

def get_primes (limit)
    prime_array = []
    new_range_array = (1..limit).to_a
    new_range_array.each do |number|
      if number.prime? == true 
        prime_array.push(number)
      end
  end 
    puts prime_array
  end
  
 