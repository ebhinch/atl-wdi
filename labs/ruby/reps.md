# REPS
### Learning Objectives

- REPS with creating methods
- REPS with iteration and nested collections
- REPS with methods on numbers, strings, arrays, hashes
- REPS!!!

## Warmup

Write a method `lengths` that accepts a single parameter as an argument, namely an array of strings. The method should return an array of numbers where each number is the length of the corresponding string.

```ruby
words = ["hello", "what", "is", "up", "dude"]
lengths(words)  # => [5, 4, 2, 2, 4]
```
---

## For Real Now
### Round 1

Write a method `fizzbuzzer` that accepts a single parameter as an argument, a number, and will return the following:

    - The string "Fizz" if the number is evenly divisible by 3
    - The string "Buzz" if the number is evenly divisible by 5
    - The string "FizzBuzz" if the number is evenly divisible by 3 AND 5
    - The string "Sorrels" if the number is not divisible by 3 OR 5

```ruby
fizzbuzzer(3) # => "Fizz"
fizzbuzzer(5) # => "Buzz"
fizzbuzzer(15) # => "FizzBuzz"
fizzbuzzer(19) # => "Sorrels"
```

words = ["hello", "what", "is", "up", "dude"]

lengths = words.map do |word|
  word.length
end 


### Round 2

Write a method `hasher` that accepts a single parameter as an argument, an array of arrays, and returns a hash based on the following conditions:
    - if there are two elements in the nested array, then the first element becomes a key and the second element becomes the value
    - if there are is one element in the nested array then the single value becomes the key, and the value should be set to nil
    - if the array is empty, then it should do nothing

So given:

```ruby
array_to_test = [ ["Husker","Adama"], ["DrRobotmck"], [] ]
hasher(array_to_test)  # => {"Husker" => "Adama", "DrRobotmck" => nil}
```

  def fizzbuzzer(number)
    if number % 15 == 0
      puts "FizzBuzz"
    elsif number % 3 == 0
      puts "Fizz"
      elsif number % 5 == 0
        puts "Buzz"
    else puts "Sorrels"
    end
  end
    
    fizzbuzzer(30)
    fizzbuzzer(7)
    fizzbuzzer(6)
    fizzbuzzer(10)

### Round 3

Hint: checkout invert method on hash

Write a method `hash_switcher` that accepts a single parameter as an argument. The parameter can be either a single hash or an array of hashes.

    - if a single hash is given, the method should return a hash with the keys and values switched
        - i.e. `hash_switcher({"hello" => "world"}) => {"world" => "hello"}`
    - if an array of hashes is given then return an array where the keys and values of every hash have been switched
        - i.e. `hash_switcher([ {"hello" => "world"}, {"yo" => "lo"} ]) => [{"world" => "hello"}, {"lo" => "yo"}]`

```ruby
hash_switcher({"hello" => "world"})
# => {"world" => "hello"}
hash_switcher([ {"hello" => "world"}, {"yo" => "lo"} ])
# => [{"world" => "hello"}, {"lo" => "yo"}]
```

array_to_test = [ ["Husker","Adama"], ["DrRobotmck"], [] ]


  def hasher(array_of_arrays)
    hash = {}
    array_of_arrays.each do |contents|
      if contents.length == 2 
        hash[contents[0]] = contents[1]
        elsif contents.length == 1 
          hash[contents[0]] = nil
        end
    end
    return hash
end
  
  hasher(array_to_test)
    

### Round 4

HINT: look up arrays each_index method

Write a method `export_hash` that accepts arguments, both arrays.
    - If one or both of the arguments are not arrays, then the method should return `nil`
    - If both arguments are arrays then, but both are not of equal length
        - the method should return `Your input is bad, and you should feel bad`
    - If they are both of equal length then iterate over the arrays creating a hash from the values of both arrays
        - the key should be from the first array
        - the value should be from the second array

i.e.
```ruby
export_hash(["happy", "sad"], ["joy", "sorrow"])
# => {"happy" => "joy", "sad" => "sorrow"}
export_hash(["happy", "sad"], ["joy"])
# => "Your input is bad and you should feel bad"
export_hash(["happy happy"], 5)
# => nil
```

def hash_switcher(parameter)
    if parameter.class == Hash
      parameter.invert
        elsif parameter.class == Array
          switched_array = parameter.map do |switch_me|
            switch_me.invert
        end
    end
end


hash_switcher({"hello" => "world"})
hash_switcher([ {"hello" => "world"}, {"yo" => "lo"} ])

### Round 5

Write a method `word_reverse` that accepts a single argument, a string. The method should return a string with the order of the words reversed. Don't worry about punctuation.

```ruby
word_reverse("this aint a song for the broken hearted")
# => "hearted broken the for song a aint this"
word_reverse("no silent prayer for the faith departed")
# => "departed faith the for prayer silent no"
```

def export_hash (array1, array2)
  hash = {}
  if array1.class != Array && array2.class != Array
    return nil
      elsif array2.class != Array && array1.class == Array
        return nil
          elsif array1.class != Array && array2.class == Array
            return nil
              elsif array1.class == Array && array2.class == Array
                if array1.length != array2.length 
                  return "Your input is bad, and you should feel bad"
                elsif array1.length == array2.length
                      array1.length.times do |index|
                      hash[array1[index]] = array2[index] 
               
                end
              hash
            end
     end
 end

export_hash(["happy", "sad"], ["joy", "sorrow"])


### Round 6

Write a method `letter_reverse` that accepts a single argument, a string. The method should return a string with the order of the words preserved, but each word's letters reversed . Don't worry about punctuation.

```ruby
letter_reverse("this aint a song for the broken hearted")
# => "siht tnia a gnos rof eht nekorb detraeh"
letter_reverse("no silent prayer for the faith departed")
# => "on tnelis reyarp rof eht htiaf detraped"
```

### Round 7

Hint: Checkout the `select` iterator in Ruby

Write a method `maximus` that accepts a single argument, a string. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

```ruby
maximus(["cow", "goat", "buffalo", "dog"]) # => "buffallo"
maximus(["moose", "rabbit", "jaguar", "fox"]) # => "rabbit"
```
