# 8 kyu
# Even or Odd

# Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

def even_or_odd(number):
    if number % 2 == 0:
        return "Even"
    else:
        return "Odd"
    
def even_or_odd(number):
	return 'Odd' if number % 2 else 'Even'