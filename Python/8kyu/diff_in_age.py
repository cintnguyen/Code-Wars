# 8 kyu
# Find the Difference in Age between Oldest and Youngest Family Members

# At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

# You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

def difference_in_ages(ages):
    youngest = min(ages)
    oldest = max(ages)
    diff = oldest - youngest
    return youngest, oldest, diff

def difference_in_ages(ages):
    youngest = ages[0]
    oldest = ages[0]
    for age in ages:
        if age < youngest:
            youngest = age
        elif age > oldest:
            oldest = age
    diff = oldest - youngest
    return youngest, oldest, diff